create table if not exists public.app_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "Public app state read" on public.app_state;
drop policy if exists "Public app state write" on public.app_state;
drop policy if exists "Authenticated app state read" on public.app_state;
drop policy if exists "Authenticated app state write" on public.app_state;

create policy "Authenticated app state read"
on public.app_state
for select
to authenticated
using (true);

create policy "Authenticated app state write"
on public.app_state
for all
to authenticated
using (true)
with check (true);

-- Rôles des utilisateurs de l'application.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  role text not null default 'technician' check (role in ('admin', 'manager', 'technician')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, role)
  values (
    new.id,
    lower(new.email),
    case when lower(new.email) = 'axel.franco@eiffage.com' then 'admin' else 'technician' end
  )
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Crée les profils des comptes déjà existants et accorde l'administration à Axel.
insert into public.profiles (id, email, role)
select id, lower(email), case when lower(email) = 'axel.franco@eiffage.com' then 'admin' else 'technician' end
from auth.users
on conflict (id) do update
set email = excluded.email,
    role = case when excluded.email = 'axel.franco@eiffage.com' then 'admin' else public.profiles.role end;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists "Users read own profile" on public.profiles;
drop policy if exists "Admins read all profiles" on public.profiles;
drop policy if exists "Admins update profiles" on public.profiles;

create policy "Users read own profile"
on public.profiles for select to authenticated
using (id = auth.uid() or public.is_admin());

create policy "Admins update profiles"
on public.profiles for update to authenticated
using (public.is_admin())
with check (public.is_admin());
