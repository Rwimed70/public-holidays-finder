import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState('DE');
  const [year, setYear] = useState(new Date().getFullYear());
  const [holidays, setHolidays] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch country list on load
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
        const data = await response.json();
        const sortedCountries = data.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch holidays
  const fetchHolidays = async () => {
    try {
      const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`);
      const data = await response.json();
      setHolidays(data);
    } catch (error) {
      console.error("Error fetching holidays:", error);
      setHolidays([]);
    }
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
            <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
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

        <button onClick={fetchHolidays}>Find Holidays</button>

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
