# Vite React Template with Tooling

This is a template for creating a React project with Vite, Vitest, ESLint, and Prettier.

Packages and commands are hadled with pnpm or npm. I don't recommendusing yarn with this template, because it is currently not working properly.

The following commands are available:

    ```bash
    pnpm install # Install dependencies

    pnpm dev # Start the Vite development server
    pnpm dev:lan # Start the Vite development server with LAN access
    pnpm lint # Lint the code with ESLint
    ppm format:check # Check the code format with Prettier
    pnpm format:fix # Fix the code format with Prettier

    pnpm test # Run the vitests with no node warnings
    pnpm test:warn # Run the vitests with node warnings

    pnpm build # Build the project with Vite
    pnpm preview # Preview the build with Vite
    ```
