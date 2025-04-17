# iCopilot Website

A modern, flashy yet clean React website for iCopilot showcasing IT infrastructure automation and cloud services with GitHub-inspired aesthetics.

## Features

- Modern React with TypeScript
- Responsive design for all device sizes
- Light/Dark mode support
- Comprehensive sections for services, approach, about, and contact
- Built with Vite for optimal performance

## Deployment Instructions

### Deploying to Netlify

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. The included `netlify.toml` file will handle redirects for the SPA routing

### Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. The site will be available at `http://localhost:5000`

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express server
- `/shared` - Shared types and schemas