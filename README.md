# SSN Repairs Website

A professional website for SSN Repairs, specializing in repairing electronic devices like smartphones, computers, and gaming consoles.

## Features

- Modern, responsive design
- Customer repair tracking system
- Admin dashboard for repair management
- Customer portal for repair status
- Knowledge base for repair procedures
- AI-powered support chat
- Inventory management
- Invoice generation

## Deployment Guide

### Prerequisites

- Node.js 18+ and npm/pnpm
- Email service (for notifications)

### Environment Variables

Copy the `.env.example` file to `.env.local` and fill in your values:

\`\`\`bash
cp .env.example .env.local
\`\`\`

### Local Development

1. Install dependencies:

\`\`\`bash
npm install
# or
pnpm install
\`\`\`

2. Run the development server:

\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push your code to GitHub.

2. Connect your GitHub repository to Vercel.

3. Add all required environment variables in the Vercel project settings.

4. Deploy!

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Make sure all environment variables are set correctly
2. Clear the Next.js cache: `rm -rf .next`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Try building again: `npm run build`

## Support

For support, please contact [support@ssnrepairs.com](mailto:support@ssnrepairs.com).
