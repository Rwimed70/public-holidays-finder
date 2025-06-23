import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState('DE');
  const [year, setYear] = useState(new Date().getFullYear());
  const [holidays, setHolidays] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch and sort country list on first load
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
      const data = await response.json();

      // Sort countries alphabetically
      const sortedCountries = data.sort((a, b) => a.name.localeCompare(b.name));
      setCountries(sortedCountries);
    };

    fetchCountries();
  }, []);

  // Fetch holidays based on selected year and country
  const fetchHolidays = async () => {
    const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`);
    const data = await response.json();
    setHolidays(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Public Holidays Finder</h1>
        <p>Select a country and year to view holidays</p>

        <img
          src="/uni-logo.png"
          alt="HTW Logo"
          style={{ width: '150px', margin: '20px auto' }}
        />

        <div>
          {/* Country Dropdown */}
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

          {/* Year Dropdown */}
          <label>
            Year:
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {Array.from({ length: 11 }, (_, i) => {
                const y = new Date().getFullYear() + i;
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Fetch Holidays Button */}
        <button onClick={fetchHolidays}>Find Holidays</button>

        {/* Holidays Display */}
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
