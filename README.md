# Solon MVP

Minimal Next.js 14 + TypeScript dashboard using Clerk auth, Supabase and OpenAI.

## Development

1. Copy `.env.example` to `.env` and fill in credentials.
2. Install dependencies with `npm install` (requires internet access).
3. Run `npm run dev`.

## Features

- **Daily-limit gauge** on the dashboard.
- **Budgeting API** backed by Supabase (see `app/api/budget`).
- **AI CFO chat** using OpenAI function calling (see `app/api/chat`).

This project is intentionally minimal and omits styling and error handling for brevity.
