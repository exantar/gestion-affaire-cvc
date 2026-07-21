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
