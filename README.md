1.40.31

<!-- generated the summery from the my personal log of daily work -->

Project Setup
Project Name: UIExchange
Framework: Next.js
Initial Setup:
Created the basic structure needed for the application.
UI Development
UI Framework: ShadCN UI
Implemented a navbar with cart functionality.
Added a useOnClickOutside hook to close sections in the navbar when clicking outside.
Configuration:
Created a config file with a Product_categories list for reusable components.
Added a formatPrice function in utils.ts for formatting prices.
Backend Integration
Dependencies:
Installed express, cross-env, and integrated Payload CMS.
Set up self-hosting for independence from Vercel hosting.
Database:
Used MongoDB (PostgreSQL was considered but had bugs).
Added MongoDB connection string.
Server Setup:
Used server.ts and tsconfig.server.ts for server configuration.
Setup the admin dashboard.
Authentication
Client-Side:
Built a client-side signup page with Zod for form validation.
Server-Side:
Integrated tRPC for handling sign-up and authentication.
Encountered and solved issues related to tRPC access and TypeScript errors.
Implemented error handling in the signup page (e.g., ZodError, Conflict).
Developed sign-in functionality by modifying the signup method.
Improved user interaction by redirecting users to the appropriate pages based on their role.
Created getServerSideUser function to check if a user is logged in.
Next Steps
Navbar:
Developed a dynamic userNavbar that displays user-specific options after login.
Architecture:
Began working on data model architecture using Excalidraw for visualization.
Future Work:
Focus on data model architecture and enabling uploads.
