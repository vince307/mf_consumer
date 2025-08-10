# WorldLedger – Module Federation Consumer

WorldLedger is a modern web application built with [Rsbuild](https://rsbuild.dev/) and [React](https://react.dev/), designed as a **Module Federation consumer**. It dynamically loads remote components from a provider application at runtime, enabling true micro-frontend architecture. This approach allows seamless integration of independently deployed features, rapid scaling, and improved maintainability.

## Features

- **Micro-Frontend Architecture:** Fetches and renders remote modules from a provider app using [Module Federation](https://webpack.js.org/concepts/module-federation/).
- **Dynamic Content:** Loads news and other features from remote containers without redeploying the consumer.
- **Modern UI:** Built with [Material UI](https://mui.com/) and custom theming.
- **Newsletter Subscription:** Users can subscribe for updates, with data securely stored via Supabase.
- **Responsive Design:** Optimized for all device sizes.

## How Module Federation Benefits This Project

- **Independent Deployment:** Remote modules can be updated and deployed separately from the consumer.
- **Scalability:** Teams can work on different parts of the application in isolation.
- **Reduced Duplication:** Shared dependencies (like React) are loaded only once.
- **Faster Feature Delivery:** New features can be integrated instantly by consuming new remote containers.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) package manager

### Setup

Install dependencies:

```bash
pnpm install
```

### Running Locally

Start the development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (or the port specified in your config).

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Configuration

- **Module Federation:** The consumer is configured in [`module-federation.config.ts`](module-federation.config.ts) to fetch remote modules from a provider.
- **Environment Variables:** Set up your `.env` and `.env.local` files for API keys and Supabase credentials.

## Project Structure

- `src/` – Main source code (components, theming, stores)
- `public/` – Static assets
- `@mf-types/` – Module Federation type definitions

## License

MIT

---

*This project demonstrates a scalable, maintainable approach to building modern web apps using Module Federation and micro-frontends.*