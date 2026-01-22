# Requake

A real-time earthquake tracking and visualization application for the Philippines, built with Next.js, MapLibre GL, and MapCN. Monitor earthquake events on an interactive map with live updates, 3D visualization, and data management capabilities.

**Note**: This project uses manually entered earthquake data. Web scraping from PHIVOLCS (Philippine Institute of Volcanology and Seismology) is illegal, and there is no public API available for earthquake data. All earthquake records must be added manually through the application interface.

## Features

- 🗺️ **Interactive Map**: Real-time visualization of earthquakes across the Philippines using MapLibre GL and MapCN
- 📍 **Earthquake Markers**: Display earthquake locations with magnitude, city, and timestamp information
- 🔄 **Live Updates**: Automatic refresh of earthquake data every second
- 🎨 **3D Map View**: Tilt and rotate the map for a 3D perspective with pitch and bearing controls
- ➕ **Add Records**: Form interface to add new earthquake events to the database
- 🌓 **Dark/Light Mode**: Theme toggle for comfortable viewing in any lighting condition
- 📊 **Real-time Data**: Zustand state management for efficient data updates

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Maps**: [MapLibre GL](https://maplibre.org/) and [MapCN](https://mapcn.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Environment variables configured (see Setup)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd requake
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/requake"
```

### 4. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
requake/
├── src/
│   ├── app/
│   │   ├── actions/          # Server actions
│   │   ├── earthquake/       # Earthquake page
│   │   ├── store/            # Zustand stores
│   │   └── types/            # Type definitions
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── philippines.tsx   # Main map component
│   │   ├── add-new-earthquake.tsx
│   │   └── display-mark.tsx  # Earthquake marker component
│   └── lib/                  # Utilities and Prisma client
├── prisma/
│   └── schema.prisma         # Database schema
└── public/                   # Static assets
```

## Database Schema

The application uses a PostgreSQL database with the following schema:

```prisma
model Earthquake {
  id         Int      @id @default(autoincrement())
  city       String?
  label      String?
  magnitude  Float?
  timestamp  DateTime @default(now())
  latitude   String?
  longtitude String?
}
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Usage

### Viewing Earthquakes

1. Navigate to the home page to see the interactive map of the Philippines
2. Earthquake markers are displayed on the map with their magnitude
3. Click on markers to view detailed information (city, magnitude, timestamp)
4. The map automatically updates every second with the latest earthquake data

### Adding Earthquakes

**Important**: All earthquake data must be added manually. Web scraping from PHIVOLCS is illegal, and there is no public API available for earthquake data.

1. Navigate to `/earthquake` to access the add earthquake form
2. Fill in the required information:
   - City Name
   - Magnitude
   - Latitude
   - Longitude
3. Click "Save changes" to add the earthquake to the database

### Map Controls

- **3D View**: Click the "3D View" button to tilt the map for a 3D perspective
- **Reset**: Click "Reset" to return to the default 2D view
- **Theme Toggle**: Use the toggle in the top-right corner to switch between light and dark modes

## Development

### Adding New Features

1. Create components in `src/components/`
2. Add server actions in `src/app/actions/`
3. Update the Prisma schema if database changes are needed
4. Run migrations: `npx prisma migrate dev`

### Styling

The project uses Tailwind CSS with shadcn/ui components. Customize themes in `src/app/globals.css` and component styles in their respective files.

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables
4. Deploy

Vercel will automatically detect Next.js and configure the build settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Data Source

**Manual Data Entry Only**: This application requires manual entry of earthquake data. 

- ❌ **No Web Scraping**: Web scraping from PHIVOLCS (Philippine Institute of Volcanology and Seismology) is illegal and not supported
- ❌ **No Public API**: There is no official public API available for Philippine earthquake data
- ✅ **Manual Entry**: All earthquake records must be added through the application's form interface at `/earthquake`

This ensures compliance with data usage policies and legal requirements.

## Reusability

This project can be adapted and used in other projects with the following considerations:

- ✅ **Open Source**: The codebase is available for use in other projects
- ✅ **Customizable**: The map can be configured for different regions by adjusting coordinates and map center
- ✅ **Extensible**: The database schema and components can be modified to suit different use cases
- ⚠️ **Data Requirements**: You must provide your own data source or implement manual data entry
- ⚠️ **License**: Check the license terms before using in commercial projects

### Adapting for Other Regions

To adapt this project for tracking earthquakes in other regions:

1. Update the map center coordinates in `src/components/philippines.tsx`
2. Modify the map bounds and zoom levels as needed
3. Adjust the database schema if additional fields are required
4. Update any region-specific labels or text

## License

This project is for demo purposes only.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Map visualization powered by [MapLibre GL](https://maplibre.org/) and [MapCN](https://mapcn.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
