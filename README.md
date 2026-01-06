# The Message Map - Bali

A comprehensive directory for spas and massage therapy in Bali, built with React, Vite, and Express.

## Tech Stack

- **Frontend**: React 19 + Vite 7 + Tailwind CSS 4
- **Backend**: Express.js with Node.js
- **Routing**: Wouter (client-side)
- **Database**: PostgreSQL with Drizzle ORM (optional, in-memory storage by default)
- **UI Components**: Radix UI + shadcn/ui

## Prerequisites

- Node.js >= 20.0.0
- npm (comes with Node.js)

## Local Development

1. **Install dependencies**
   ```bash
   npm ci
   ```

2. **Set up environment variables** (optional)
   
   Copy `.env.example` to `.env` and configure if needed:
   ```bash
   cp .env.example .env
   ```
   
   The app works with default values, but you can customize:
   - `PORT` - Server port (default: 6200)
   - `DATABASE_URL` - PostgreSQL connection string (only needed for `db:push` command)

3. **Run development server**
   ```bash
   npm run dev:client  # Start Vite dev server on port 5000
   npm run dev         # Start Express server in development mode
   ```

4. **Type checking**
   ```bash
   npm run check
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Start production server**
   ```bash
   npm start
   ```

## Database (Optional)

The application uses in-memory storage by default. To use PostgreSQL:

1. Set up a PostgreSQL database
2. Set the `DATABASE_URL` environment variable
3. Push the schema:
   ```bash
   npm run db:push
   ```

## Deployment

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Framework Preset**: Other (Custom Express.js app)

2. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

3. **Environment Variables** (Vercel dashboard):
   - `NODE_ENV` → `production` (automatically set by Vercel)
   - `PORT` → Optional, defaults to 6200
   - `DATABASE_URL` → Optional, only if using PostgreSQL

4. **Node Version**: 20.x (specified in package.json engines field)

5. **Deployment Configuration**: 
   - The app serves both the API and the static frontend from a single Express server
   - Static assets are served from `dist/public`
   - API routes are prefixed with `/api`

### Important Notes

- The build process creates two outputs:
  - Client bundle: `dist/public/` (static assets)
  - Server bundle: `dist/index.cjs` (Express server)
- The server automatically serves static files in production mode
- No additional configuration file (vercel.json) is needed for basic deployment

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/            # React components and pages
│   ├── public/         # Static assets
│   └── index.html      # HTML entry point
├── server/             # Express backend
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Storage interface
├── shared/             # Shared code between client and server
│   └── schema.ts       # Database schema
├── script/             # Build scripts
│   └── build.ts        # Production build script
├── dist/               # Build output (generated)
│   ├── public/         # Built client assets
│   └── index.cjs       # Built server
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Scripts

- `npm run dev:client` - Start Vite development server
- `npm run dev` - Start Express server in development mode
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema (requires DATABASE_URL)

## License

MIT
