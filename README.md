# Booking Dashboard

A mock booking dashboard built using Next.js, Tailwind CSS, and a local JSON mock API. This project demonstrates clean code practices, modular design, and a responsive UI that fetches and displays booking data.

![Booking Dashboard Preview](vehicle.png)


## Features

- Dashboard overview with booking statistics
- List of bookings with filtering by status
- Detailed booking cards with customer information
- Responsive design that works on mobile, tablet, and desktop
- Clean, modular code structure

## Tech Stack

- **Next.js**: React framework for building the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: For type safety and better developer experience
- **date-fns**: For date formatting
- **Lucide React**: For icons

## Project Structure

\`\`\`
booking-dashboard/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Main page component
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
│   ├── booking-card.tsx  # Individual booking display
│   ├── booking-list.tsx  # List of bookings with filters
│   ├── booking-dashboard.tsx # Main dashboard component
│   ├── dashboard-header.tsx  # Dashboard header with search
│   └── dashboard-stats.tsx   # Statistics display
├── lib/                  # Utilities and data
│   ├── data.ts           # Data fetching functions
│   ├── types.ts          # TypeScript type definitions
│   └── bookings.json     # Mock booking data
└── public/               # Static assets
\`\`\`

## Code Approach

### Modular Design

The application is built with a modular component structure:

1. **Components**: Each UI element is a separate component with clear responsibilities
2. **Data Layer**: Data fetching is separated from UI components
3. **Types**: Strong typing with TypeScript for better code quality

### Data Flow

1. Mock booking data is stored in a JSON file
2. Data utility functions simulate API calls to fetch and process data
3. Server components fetch data and pass it to client components
4. Client components handle user interactions and filtering

### Responsive Design

- Tailwind CSS is used for responsive layouts
- Mobile-first approach with breakpoints for larger screens
- Flexible grid system for different screen sizes

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Enhancements

- Add authentication
- Implement booking creation and editing
- Add more detailed analytics
- Connect to a real backend API
