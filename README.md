## Features

- ⚛️ React 18
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files

### Development

To start the project locally, run:

```bash
yarn start
```

Open `http://localhost:3000` with your browser to see the result.

### Requirements

- Node.js = v22.9.0

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn start` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn run lint` — Runs ESLint for all files in the `src` directory.
- `yarn run lint:fix` — Runs ESLint Fix for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
