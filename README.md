# Public Holidays Finder (Documentation)

Simple React-based web application that allows users to search for public holidays in a country and year. The application makes live calls to the *Nager.Date public holidays API* and returns holidays as a nicely readable list.

---

## Features

- Choose any country from a full list of supported countries.
- Choose any year between the current year and 10 years ahead.
- View an automatically fetched list of public holidays.
- Clean and responsive UI.
- Client-side only (no backend required).

---

## Used Techstack

- React (with useState and useEffect)
- HTML5 / CSS3
- JavaScript (ES6+)
- Nager.Date Public Holidays API (https://date.nager.at)
- Hosted background image & logo

---

## Architecture Overview

The project has a *frontend-only architecture* in terms of React components.  
Key responsibilities:

- App.js: Main logic and UI
  - Manages country/year selections and state
  - Loads country list and holidays using fetch()
  - Dynamically displays results
- App.css: Custom layout, color, and responsiveness styling
- No backend server — everything executes within the browser

---

## How to Run the App

### 1.
```bash
cd public-holidays-finder
npm start
```
> (to begin the web)

---

## Daily Progress  
2025-05-29: Created the repo, described the project idea, tech stack, and project plan.

## Progress Updates

### May 29, 2025
- Added custom index.html in the public folder.
- Added HTML head section: meta tags, title, favicon, and root div.
- Verified app successful run using npm start.

### June 1, 2025
- Designed main layout to center content and keep it clean with padding, borders, and shadow
- Designed header with bold and centered text

### June 3, 2025
- Applied consistent spacing for input fields with .input-group
- Styled input fields and button for better user experience

### June 6, 2025
- Applied hover effect and disabled state to search button
- Styled holidays list to look nicely with spacing between and also added the logo of HTW just for fun

---

# Reflection: Public Holidays Finder

Developing the Public Holidays Finder web app was an enjoyable and challenging learning experience. The project taught me skills in working with React, external APIs, and frontend architecture as well as prompting me to figure out issues independently.

---

### What I Learned

I developed my skills during the project to:

- Use React hooks like useState and useEffect for dynamic UI behavior.
- Integrate with third-party APIs (the Nager.Date public holidays API in this instance) and parse JSON responses to present useful information to the user.
- Create a clean, responsive, and accessible UI with pure CSS.
- Simplify the architecture by removing redundant backend components and restructuring the application as a fully frontend-based app.

---

### Challenges I Faced

While building the app, I encountered a variety of challenges that allowed me to learn:

#### 1. Removing the Backend and Login
The app previously had a backend for login and registration. Removing all backend functionality and redoing it as a frontend-only app was intimidating.  
I had to:
- Locate and remove unnecessary state variables and handlers safely.
- Ensure UI still logically worked without login requests.
- Avoid interrupting the app flow while doing these structural changes.

#### 2. API Integration and Error Handling
Getting data from the public holidays API wasn't as straightforward as hoped:
- Some nations didn't provide holiday data for every year, which meant I needed to implement basic error handling and user feedback.
- There was no native loading state, so I had to look into UX improvements for slow connections.

#### 3. Dynamic Form Updates
React controlled components can be tricky to get the hang of. I had to:
- Synchronize selected country and year with the component state.
- Prevent re-renders or empty dropdowns when data hadn't been loaded yet.

#### 4. Responsiveness of UI/UX
Making the layout pleasant to view on both desktop and mobile was another aspect to contend with.  
Problems were:
- Text readability on background image
- Appropriate rescaling of drop-downs and buttons for small screens
- Making holiday lists scrollable and convenient

---

### What I'd Do Differently in the Future

In case I had more time or in a future version of the project with enhanced features, I would do the following:

- Add a search bar to quickly search for a country instead of scrolling.
- Show country flags in addition to the dropdown options for better UX.
- Cache the countries list to avoid excessive API calls.
- Enhance with a loader/spinner while waiting for the holiday data to load.
- Possibly restore authentication for user-centric features like storing favorite countries.

---

### Final Thoughts

This project was an enriching experience familiarizing myself with the React ecosystem, dealing with real-time API data, and making decisions around how a simple web app should be laid out. Even though it was challenging, I learned more about frontend development, improved my problem-solving skills, and am more confident in building interactive, data-driven web applications.
