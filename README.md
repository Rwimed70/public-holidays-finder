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

---
# Reflection: Public Holidays Finder

Developing the Public Holidays Finder web application was a valuable experience in applying my knowledge of frontend technologies and working with external APIs.

One of the key lessons was using **React hooks** like `useState` and `useEffect`. These tools helped me create a dynamic and interactive user interface. User input, like selecting a country or year, could instantly update the application without requiring a page reload.

I also learned how to **work with a public API**, specifically the Nager.Date public holidays API. I figured out how to fetch data asynchronously with the `fetch()` API, handle possible errors, and render lists dynamically in JSX.

Initially, this app had a backend component with user authentication. However, I opted to **simplify the project** and keep it frontend-only. This choice required me to clean up the code and remove all backend connections, which taught me how to manage and refactor React components effectively.

From a UI/UX standpoint, I aimed to build a clean and user-friendly interface using CSS and responsive layout techniques. I made sure to include accessibility by using form labels and semantic HTML.

In the future, I plan to improve the app by adding:
- Holiday filtering by month or type
- Localization to support different languages
- A search bar for quick country lookup
- Caching to reduce API calls

Overall, this project helped me strengthen my frontend development skills, understand how to integrate APIs, and reflect on how to design simple but effective user experiences. It also prepared me for working on larger web applications in future courses or job settings.



