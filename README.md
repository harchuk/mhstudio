# Music Studio Online

Minimal prototype of a web-based digital audio workstation.

## Development

### Client (React + Vite)

```bash
cd client
npm install
npm run dev
```

### Server (Node + Express)

```bash
cd server
npm install
npm start
```

The client currently includes placeholder components for a sequencer,
piano roll, and mixer. The server exposes a `/api/health` endpoint and a
stub `/api/projects` route.
