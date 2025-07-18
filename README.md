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

## ⚙️ Technologies Used

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
**2025-05-29**: Repository created, documented the project idea, tech stack, and project plan.

## 📌 Progress Updates

### 🗓️ May 29, 2025
- ✅ Added custom `index.html` in the `public` folder.
- 🎯 Set up HTML head section: meta tags, title, favicon, and root div.
- 🛠️ Verified that the app starts successfully with `npm start`.

What I did so far for CSS
🗓️ June 1, 2025

✅ Styled the main layout to center the content and give it a clean look with padding, borders, and shadow
✅ Customized the header with bold and centered text
🗓️ June 3, 2025
✅ Created consistent spacing for input fields using .input-group
✅ Styled input fields and button for better user experience
🗓️ June 6, 2025
✅ Added hover effect and disabled state for the search button
✅ Styled the holidays list to display neatly with spacing between items and also added the logo of htw just for fun




