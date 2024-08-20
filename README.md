# React Starter

This project is a boilerplate for creating a React application using TypeScript, Tailwind CSS, Zustand for state management, React Router DOM for routing, and NextUI for UI components. It provides a structured approach to building scalable React applications with multiple layouts and routes.

## Prerequisites

Before you start working with this project, ensure you have a basic understanding of the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Zustand**: A small, fast, and scalable state-management solution.
- **React Router DOM**: A standard library for routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **NextUI**: A modern UI library for React.

## Project Structure

Here's an overview of the project structure and the purpose of each directory:

```
src/
├── App.tsx
├── assets/
├── components/
├── data/
├── input.css
├── layouts/
├── main.tsx
├── navigation/
├── output.css
├── pages/
├── routes/
├── services/
├── utils/
├── views/
└── vite-env.d.ts
```

### 1. `assets/`

The `assets` directory contains all the static files such as images and other media assets used in the project.

### 2. `components/`

This directory contains reusable and independent components that can be used across the application. Examples include buttons, forms, and widgets.

### 3. `data/`

The `data` directory is subdivided into two subdirectories:

- `store/`: Contains Zustand stores for managing application state.
- `models/`: Houses the data models representing the application's business logic.

### 4. `layouts/`

This directory contains layout components, which serve as the structure for different parts of the application. Each layout is responsible for rendering its children components via the `Outlet` component provided by React Router.

- **DefaultLayout**: The main layout used for authenticated users.
- **GuestLayout**: The layout for unauthenticated users or public pages.
- **AdminLayout**: A specialized layout for admin users, featuring a sidebar and navigation elements.

### 5. `navigation/`

The `navigation` directory contains the configuration for sidebar navigation, including:

- `_nav`: Defines the navigation items.
- `_brand`: Contains branding information like logos.
- `_profile`: Stores user profile information to display in the sidebar.

### 6. `pages/`

This directory contains React components that represent different pages in the application. Each page corresponds to a route defined in the `routes/` directory.

### 7. `routes/`

The `routes` directory defines all the routes in the application and how they relate to the different layouts.

- `guestRoutes`: Routes accessible to unauthenticated users.
- `defaultRoutes`: Routes for authenticated users, using the `DefaultLayout`.
- `adminRoutes`: Routes specific to admin users, using the `AdminLayout`.

### 8. `services/`

The `services` directory contains the business logic of the application. For example:

```typescript
const AuthService = {
    validateToken: async (token: string | null): Promise<boolean> => {
        if (!token) return false;
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return token === 'mockToken';
        } catch (error) {
            console.error('Token validation failed:', error);
            return false;
        }
    }
};

export default AuthService;
```

### 9. `utils/`

The `utils` directory stores utility functions that are independent of the application state and can be used globally, such as validation and formatting functions.

### 10. `views/`

This directory organizes the components specific to each layout into subdirectories, such as `views/admin_views/dashboard`, ensuring a clear separation of concerns.

### 11. `Sidebar Component`

The `Sidebar` component, located in `components/Sidebar/`, manages the sidebar's rendering, including styles from `sidebar.css` and types defined in `types.ts`.

## Scripts

The project includes several NPM scripts for common tasks:

- `dev`: Starts the development server.
- `build`: Compiles the TypeScript files and builds the project for production.
- `preview`: Previews the production build.

## Dependencies

The project relies on several key dependencies:

```json
"dependencies": {
    "@nextui-org/react": "^2.4.6",
    "framer-motion": "^11.3.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.26.0",
    "zustand": "^4.5.4"
},
"devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "tailwindcss": "^3.4.7",
    "typescript": "^4.9.3",
    "vite": "^4.1.0"
}
```

## How to Get Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

You should now have a fully functional React project set up with Tailwind CSS, Zustand, and all other necessary tools.

---

This README provides an overview of the project structure and usage. Modify and expand upon it as your project grows.