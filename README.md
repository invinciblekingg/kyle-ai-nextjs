# Kyle.ai Next.js Conversion

This workspace now contains a Next.js and React conversion of the Kyle.ai landing page concept.

## What is included

- A polished homepage with animated sections and responsive layout
- Routed product detail pages under `/platform/[slug]`
- A live demo request backend at `/api/demo`
- A simple health check endpoint at `/api/health`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- The old static prototype files are still in the repo as reference, but the Next.js app is the active implementation.
- Demo submissions are stored in `data/demo-requests.ndjson` while the app is running locally.
