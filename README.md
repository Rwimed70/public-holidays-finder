# 🌍 Public Holidays Finder

A simple React-based web application that allows users to search for public holidays by country and year. The app fetches live data from the **Nager.Date public holidays API** and displays holidays in an easy-to-read list.

---

## 📌 Features

- Select any country from a full list of available countries.
- Choose any year from the current year up to 10 years ahead.
- View an automatically fetched list of public holidays.
- Clean and responsive UI.
- Fully client-side (no backend required).

---

## ⚙️ Techstack Used

- React (with `useState` and `useEffect`)
- HTML5 / CSS3
- JavaScript (ES6+)
- Nager.Date Public Holidays API (`https://date.nager.at`)
- Hosted background image & logo

---

## 🎯 Architecture Overview

This project follows a **frontend-only architecture** using React components.  
Main responsibilities:

- `App.js`: Main logic and UI
  - Manages country/year selections and state
  - Fetches country list and holidays via `fetch()`
  - Renders results dynamically
- `App.css`: Custom styling for layout, colors, and responsiveness
- No backend server — runs entirely in the browser

---

## 🧑‍💻 How to Run the App

### 1. 
```bash
cd public-holidays-finder/npm start
npm start (to start the web)



## Daily Progress
*2025-05-29*: Repository created, documented the project idea, tech stack, and project plan.

## 📌 Progress Updates

### 🗓️ May 29, 2025
- ✅ Added custom index.html in the public folder.
- 🎯 Set up HTML head section: meta tags, title, favicon, and root div.
- 🛠️ Verified that the app starts successfully with npm start.

### 🗓️ June 1, 2025
- ✅ Styled the main layout to center the content and give it a clean look with padding, borders, and shadow
- ✅ Customized the header with bold and centered text

### 🗓️ June 3, 2025
- ✅ Created consistent spacing for input fields using .input-group
- ✅ Styled input fields and button for better user experience

### 🗓️ June 6, 2025
- ✅ Added hover effect and disabled state for the search button
- ✅ Styled the holidays list to display neatly with spacing between items and also added the logo of HTW just for fun

---

# ✨ Reflection: Public Holidays Finder

Developing the *Public Holidays Finder* web application was an exciting and challenging learning experience. 🚀 The project allowed me to practice working with *React*, *external APIs*, and *frontend architecture* while also pushing me to solve problems independently. 🧠💻

---

### 📘 What I Learned

Throughout the project, I improved my ability to:

- ⚛️ Use *React hooks* such as useState and useEffect to manage dynamic UI behavior.
- 🌐 Work with *third-party APIs* (specifically the Nager.Date public holidays API) and parse JSON responses to display meaningful information to the user.
- 🎨 Create a *clean, responsive, and accessible UI* using pure CSS.
- 🧱 Simplify the architecture by removing unnecessary backend components and restructuring the application as a *fully frontend-based app*.

---

### ⚠️ Challenges I Faced

While building the app, I encountered several challenges that helped me grow:

#### 1️⃣ Removing the Backend and Authentication
Initially, the app included a backend for registration and login. Refactoring the app to remove all backend logic and reorganizing it into a frontend-only structure was challenging. 🔧  
I had to:
- 🧹 Identify and safely delete unnecessary state variables and handlers.
- 🧭 Ensure the UI still made sense without login prompts.
- 🧩 Avoid breaking the flow of the app while making these structural changes.

#### 2️⃣ API Integration and Error Handling
Fetching data from the public holidays API wasn’t as simple as expected:  
- ❗ Some countries didn’t return holiday data for all years, which required *basic error handling* and *user feedback*.
- 🕓 There was no built-in loading state, so I had to consider *UX improvements* for slow connections.

#### 3️⃣ Dynamic Form Updates
React’s controlled components can be tricky when you're new. I had to:
- 🔁 Ensure the selected country and year stayed in sync with the component state.
- 🛡️ Prevent unnecessary re-renders or empty dropdowns when data hadn’t loaded yet.

#### 4️⃣ UI/UX Responsiveness
Designing the layout to look good on both desktop and mobile was another area that needed attention.  
Challenges included:
- 👓 Text readability over a background image
- 📱 Dropdowns and buttons resizing correctly on smaller screens
- 📜 Making sure holiday lists were scrollable and user-friendly

---

### 🌱 How I’d Improve It in the Future

If I had more time or in a more advanced version of the project, I would:

- 🔍 Add a *search bar* to quickly find a country instead of scrolling.
- 🚩 Show *country flags* beside the dropdown options for better UX.
- 💾 Cache the country list to avoid redundant API calls.
- 🔄 Add a *loader/spinner* while waiting for the holiday data to load.
- 🔐 Possibly reintroduce authentication for user-specific features (like saving favorite countries).

---

### 💬 Final Thoughts

This project was a meaningful opportunity to explore the *React ecosystem*, work with real-time API data, and make decisions about how a simple web app should be structured. Despite the challenges, I gained a deeper understanding of *frontend development*, improved my *problem-solving skills*, and feel more confident in building interactive, data-driven web applications. 🌍





