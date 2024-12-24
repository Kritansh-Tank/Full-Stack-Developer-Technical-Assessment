
# React Full-Stack Application

This project is a simple React application that showcases full-stack development skills using the following stack:
1. React: For the front-end.
2. TailwindCSS: For styling.
3. Redux: For state management.
4. Supabase: For database and backend services.
5. Prisma ORM: For managing database schema and CRUD operations.

## Features

Part 1: UI and State Management

A. Design & Layout
• Figma Reference: The application re-creates the primary screen from the provided Figma file, ensuring consistency with layout, color schemes, and typography.
• Component Structure:
  • Header & Navigation: Responsive header with basic navigation.
  • Cards/Sections: Reusable cards and sections based on the Figma design.
•Styling:
  • TailwindCSS utility classes for spacing, fonts, and color schemes.
  • Optional integration of Shadcn for depth and subtle UI effects.

B. State Management
• State Management Library: Redux is used to manage global state.
  • Store Setup: Redux store with slices/actions for CRUD operations.
  • Data Flow:
    • Fetching Data: On component mount or user interaction, data is fetched from Supabase.
    • Updating Data: Updates to the state are dispatched to Redux and persisted in the database.

Part 2: Database and ORM

A. Supabase Setup
• Project Creation: A new project was created on Supabase.
• Database Configuration: Relevant tables/models were defined (e.g., users, posts, or items) based on the Figma reference.
• Environment Variables: Supabase project URL and API keys are stored in a .env file for secure access.

B. Prisma ORM
• CRUD API: Simple Node/Next.js API routes were created for create, read, update, and delete operations using Prisma ORM.
• Integration:
  • API endpoints interact with Redux for state updates.
  • Prisma manages the database schema and ensures consistency.
