create table if not exists public.app_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "Public app state read" on public.app_state;
drop policy if exists "Public app state write" on public.app_state;

create policy "Public app state read"
on public.app_state
for select
to anon
using (true);

create policy "Public app state write"
on public.app_state
for all
to anon
using (true)
with check (true);
