import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState('DE');
  const [year, setYear] = useState(new Date().getFullYear());
  const [holidays, setHolidays] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch country list from API on first load
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const fetchHolidays = async () => {
    const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`);
    const data = await response.json();
    setHolidays(data);
  };

  return (
    <div className="App">
      <img src="/uni-logo.png" alt="HTW Logo" style={{ width: '180px', marginBottom: '10px' }} />
      <header className="App-header">
        <h1>Public Holidays Finder</h1>
        <p>Select a country and year to view holidays</p>

        {/* Dropdowns */}
        <div>
          <label>
            Country:
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((c) => (
                <option key={c.countryCode} value={c.countryCode}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Year:
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </label>
        </div>

        {/* Button */}
        <button onClick={fetchHolidays}>Find Holidays</button>

        {/* Holiday Results */}
        <div>
          {holidays.length > 0 && (
            <ul>
              {holidays.map((holiday) => (
                <li key={holiday.date}>
                  {holiday.date} — {holiday.localName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
