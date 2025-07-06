# Replit.md - Tutoring Website

## Overview

This is a modern, professional tutoring website built for private mathematics tutors. The application is designed as a business card/landing page that showcases the tutor's services, qualifications, and allows potential students to contact and book trial lessons. The website features a clean, educational design inspired by successful learning platforms like Coursera and Khan Academy.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **API**: RESTful API endpoints

### Build System
- **Bundler**: Vite for frontend development and building
- **Build Process**: ESBuild for server-side bundling
- **Development**: Hot module replacement and development server
- **Production**: Static asset generation and server bundling

## Key Components

### Frontend Components
1. **Hero Section**: Landing area with tutor introduction, statistics, and call-to-action
2. **About Section**: Educational background, experience, and teaching methodology
3. **Services Section**: Course offerings, pricing calculator, and package options
4. **Results Section**: Testimonials, success statistics, and student feedback
5. **Contact Section**: Contact form with validation and booking functionality
6. **Booking Modal**: Interactive booking system for trial lessons
7. **Floating Navigation**: Smooth scroll navigation between sections

### Backend Components
1. **Contact Form Handler**: Processes and stores contact form submissions
2. **Booking System**: Manages trial lesson booking requests
3. **Data Storage**: Handles database operations for forms and bookings
4. **API Routes**: RESTful endpoints for form submissions and data retrieval

### Database Schema
- **Users**: Basic user management (future authentication)
- **Contact Forms**: Student inquiries with parent contact information
- **Bookings**: Trial lesson scheduling with date/time preferences

## Data Flow

### Contact Form Submission
1. User fills out contact form with student details, goals, and preferences
2. Form validation occurs client-side using Zod schemas
3. Validated data is sent to `/api/contact` endpoint
4. Server validates and stores data in PostgreSQL database
5. Success confirmation is displayed to the user

### Booking Process
1. User clicks "Book Trial Lesson" button
2. Booking modal opens with date/time selection
3. User selects preferred time slot and enters contact information
4. Form data is validated and sent to `/api/booking` endpoint
5. Booking is stored in database with timestamp
6. Success notification is shown to the user

### Statistics and Animations
1. Counter animations trigger when sections come into view
2. Testimonial carousel automatically rotates through reviews
3. Cost calculator updates dynamically based on lesson type and quantity
4. Smooth scroll navigation enhances user experience

## External Dependencies

### Design and UI
- **Google Fonts**: Montserrat and Open Sans for typography
- **Font Awesome**: Icons for visual enhancement
- **Unsplash**: Professional images for visual content
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **Replit Integration**: Development environment optimization
- **Vite Plugins**: Development tooling and error handling
- **TypeScript**: Type safety and better developer experience

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management
- **Environment Variables**: Secure configuration management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Connection to Neon PostgreSQL instance
- **Environment**: NODE_ENV=development for development-specific features

### Production Build
1. **Frontend Build**: Vite builds static assets to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema is up-to-date
4. **Static Serving**: Express serves built frontend assets

### Configuration Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **Environment Variables**: Secure configuration for production
- **Node.js**: ES modules enabled for modern JavaScript features

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Migration completed and enhanced with:
  - Mathematical formulas background animations
  - Updated statistics (94% success rate, 280+ students, 7 years experience)
  - Professional photos for testimonials and tutor section
  - Enhanced visual design with floating mathematical expressions
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Language: Russian
Design preferences: Mathematical formulas background, professional photos for testimonials
```