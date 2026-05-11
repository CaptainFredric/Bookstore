# Example: Using the Generic Templates

**Purpose:** This file shows a simple example of how to use the generic templates for a hypothetical project.

---

## Scenario

Let's say Dan DeBugger wants to create AI context documentation for a new project: **"Weather Dashboard"** - a simple web app that displays weather data.

---

## Example 1: Quick Reference (Filled)

**File:** `QUICK_AI_REFERENCE.md` (in the Weather Dashboard project)

```markdown
# Quick AI Reference Card — Weather Dashboard

**⚡ Ultra-Fast Copy-Paste Prompt for AI Assistants**

---

## 🎯 30-Second Context

```
REPO: https://github.com/dandebugger/weather-dashboard
PROJECT: Weather information dashboard (Dan DeBugger)
TECH: React 18 + TypeScript + Tailwind CSS
STATUS: 🚧 In development

MAIN FILES:
- src/App.tsx (Main component)
- src/components/ (UI components)
- src/services/weatherAPI.ts (API integration)

FEATURES: Current weather, 5-day forecast, Search by city, Responsive design

RUN IT: npm install && npm run dev

FULL CONTEXT: See AI_PROMPT.md for complete details
```

---

## 📋 Most Common Requests

**"Add a new city"**
→ Use search bar in app, or edit src/data/defaultCities.ts

**"Change color theme"**
→ Edit tailwind.config.js theme colors

**"Update API key"**
→ Edit .env file: VITE_WEATHER_API_KEY=your_key

**"Deploy to web"**
→ Run: npm run build && npm run deploy

**"Full documentation"**
→ Read `AI_PROMPT.md`

---

## 🔑 Key File Locations

| Need to... | Edit this file... | Search for... |
|------------|-------------------|---------------|
| Add component | src/components/*.tsx | `export default` |
| Modify API | src/services/weatherAPI.ts | `fetchWeather` |
| Change layout | src/App.tsx | `<main>` |
| Update styling | tailwind.config.js | `theme: {` |

---

## 🚀 Critical Commands

```bash
# Navigate to project
cd /path/to/weather-dashboard

# Install dependencies
npm install

# Run locally
npm run dev
# Open http://localhost:5173

# Run tests
npm test

# Check status
git status

# Build for production
npm run build
```

---

## ✅ Current TODO Priority

1. **High**: Add geolocation support
2. **High**: Implement error handling
3. **Medium**: Add weather alerts
4. **Low**: Dark mode toggle

See `AI_PROMPT.md` for complete TODO list.

---

## 👤 Contact

**Creator:** Dan DeBugger  
**Email:** dandebugger@example.com  
**Repo:** github.com/dandebugger/weather-dashboard

---

**For complete context, always reference AI_PROMPT.md**
```

---

## Example 2: Full Context (Excerpt)

**File:** `AI_PROMPT.md` (in the Weather Dashboard project)

Here's what the copy-paste section would look like:

```markdown
I'm working on the Weather Dashboard project. Here's the complete context:

REPOSITORY: https://github.com/dandebugger/weather-dashboard

PROJECT TYPE: Single-page web application - Weather information dashboard

CREATOR: Dan DeBugger
CONTACT: dandebugger@example.com
PURPOSE: Display current weather and forecasts for multiple cities with a clean, modern interface

TECH STACK:
- React 18 (UI framework)
- TypeScript (Type safety)
- Vite (Build tool)
- Tailwind CSS (Styling)
- OpenWeatherMap API (Weather data)
- Vitest (Testing)
- GitHub Actions (CI/CD)

CURRENT STATE:
The repository contains a functional weather dashboard with:
- Current weather display with temperature, conditions, humidity, wind
- 5-day forecast view
- City search functionality
- Responsive design for mobile and desktop
- Real-time data from OpenWeatherMap API
- Error handling and loading states

KEY FILES:
1. src/App.tsx - Main application component and layout
2. src/components/WeatherCard.tsx - Current weather display
3. src/components/ForecastCard.tsx - Forecast item display
4. src/components/SearchBar.tsx - City search component
5. src/services/weatherAPI.ts - API integration and data fetching
6. src/types/weather.ts - TypeScript type definitions
7. src/data/defaultCities.ts - Default cities list
8. tailwind.config.js - Tailwind CSS configuration
9. vite.config.ts - Vite build configuration
10. .env.example - Environment variables template

PROJECT STRUCTURE:
```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── WeatherCard.tsx
│   │   ├── ForecastCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── LoadingSpinner.tsx
│   ├── services/
│   │   └── weatherAPI.ts
│   ├── types/
│   │   └── weather.ts
│   ├── data/
│   │   └── defaultCities.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

FEATURES IMPLEMENTED:
✅ Current weather display
✅ 5-day weather forecast
✅ Search by city name
✅ Display temperature in Celsius/Fahrenheit
✅ Show weather icons
✅ Responsive mobile design
✅ Loading states
✅ Error handling
✅ TypeScript type safety
✅ Tailwind CSS styling

ARCHITECTURE:
- Component-based React architecture
- Service layer for API calls
- TypeScript for type safety
- Tailwind utility-first CSS
- Vite for fast development and optimized builds
- Environment variables for API key management

DEPENDENCIES:
Core dependencies:
- react v18.2.0 - UI framework
- react-dom v18.2.0 - React DOM rendering
- axios v1.6.0 - HTTP client for API calls

Dev dependencies:
- vite v5.0.0 - Build tool
- typescript v5.3.0 - Type checking
- tailwindcss v3.4.0 - CSS framework
- vitest v1.0.0 - Testing framework
- @types/react v18.2.0 - React TypeScript types

HOW TO RUN LOCALLY:
```bash
# Clone repository
git clone https://github.com/dandebugger/weather-dashboard
cd weather-dashboard

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env and add your OpenWeatherMap API key:
# VITE_WEATHER_API_KEY=your_api_key_here

# Run the application
npm run dev

# Access at: http://localhost:5173
```

TESTING:
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linter
npm run lint

# Build for production
npm run build
```

DEPLOYMENT:
Currently deployed to: Netlify
Deployment method: GitHub integration (auto-deploy on push to main)
Live URL: https://weather-dashboard-dandebugger.netlify.app

BRAND IDENTITY:
- Project by: Dan DeBugger
- Clean, modern design with blue color scheme
- Mobile-first responsive design
- Target audience: General users needing weather information

CURRENT TODOS:
[High Priority]
- Add geolocation to auto-detect user's city
- Implement better error messages
- Add weather alerts/warnings

[Medium Priority]
- Add hourly forecast
- Support for multiple locations save
- Add weather map overlay

[Low Priority]
- Dark mode toggle
- Weather history charts
- Social sharing

RECENT CHANGES:
- Initial project setup with Vite + React + TypeScript
- Integrated OpenWeatherMap API
- Created responsive UI with Tailwind CSS
- Added city search functionality
- Implemented 5-day forecast display

Please help me with: [YOUR REQUEST HERE]
```

---

## Example 3: How to Use This in Practice

### Scenario: Adding a New Feature

**Developer wants to add:** "Add a feature to show air quality index"

**Steps:**

1. **Copy the appropriate template:**
   - For quick guidance: Copy `QUICK_AI_REFERENCE.md`
   - For detailed work: Copy `AI_PROMPT.md`

2. **Paste into ChatGPT/Claude:**
   ```
   [Paste the entire filled template]
   
   Please help me with: Add a feature to display the Air Quality Index (AQI) 
   for the selected city. The AQI should show the pollution level with a 
   color-coded indicator (good/moderate/unhealthy). Use the OpenWeatherMap 
   Air Pollution API.
   ```

3. **AI responds with full context:**
   The AI will understand:
   - You're using React + TypeScript
   - You already have an API service layer
   - You're using Tailwind for styling
   - Where to add the new component
   - How to integrate with existing code

4. **Result:**
   AI provides specific, context-aware guidance:
   - Creates `src/components/AirQuality.tsx`
   - Updates `src/services/weatherAPI.ts` with new API call
   - Adds appropriate TypeScript types
   - Uses Tailwind classes matching your theme
   - Integrates into existing `App.tsx`

---

## Example 4: Different Project Types

### CLI Tool Example

For a command-line tool, the quick reference would look like:

```
REPO: https://github.com/dandebugger/file-organizer
PROJECT: Automated file organization CLI (Dan DeBugger)
TECH: Python 3.11 + Click + Pathlib
STATUS: ✅ Stable

MAIN FILES:
- organizer/cli.py (Main CLI)
- organizer/rules.py (Organization rules)
- organizer/config.py (Configuration)

FEATURES: Auto-sort by extension, Custom rules, Undo capability

RUN IT: pip install -e . && file-organizer --help
```

### Mobile App Example

For a mobile app:

```
REPO: https://github.com/dandebugger/recipe-app
PROJECT: Recipe sharing mobile app (Dan DeBugger)
TECH: React Native + Expo + Firebase
STATUS: 🚧 Beta testing

MAIN FILES:
- src/screens/ (App screens)
- src/components/ (Reusable components)
- src/services/firebase.ts (Backend)

FEATURES: Recipe CRUD, Photo upload, Social features, Search

RUN IT: npm install && expo start
```

---

## Key Takeaways

1. **Templates are flexible** - Adapt them to your project type
2. **Fill once, use everywhere** - Same context works across all AI platforms
3. **Keep it updated** - Update as project evolves
4. **Start simple** - Begin with Quick Reference, expand to full context as needed
5. **Copy-paste ready** - No setup required, just paste and ask

---

## Try It Yourself!

1. Pick any project (even a small one)
2. Copy `GENERIC_QUICK_AI_REFERENCE_TEMPLATE.md`
3. Fill in your project details (takes 5-10 minutes)
4. Paste into ChatGPT with a question
5. See how much better the AI understands your project!

---

**Created by:** Dan DeBugger  
**Purpose:** Demonstrate template usage  
**Last Updated:** 2026-01-23
