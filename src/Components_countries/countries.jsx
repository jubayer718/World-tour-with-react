import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/country";
import '../App.css'
const Countries = () => {

  const [countries, setCountries] = useState([])
  const [visitedCountries, setVisitedCountries] = useState([])
  const[visitedFlags,setVisitedFlags]=useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  }, [])
  const handleVisitedFlags = (flags) => {
    const newAddingFlags = [...visitedFlags, flags];
    setVisitedFlags(newAddingFlags);
  }
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  }
  return (
    <div >
      <h3>countries: {countries.length}</h3>
      <ul>
        visitedCountries:{visitedCountries.length}
      {
        visitedCountries.map(country => <li key={country.cca3}>{ country.name.common}</li>)
      }
      </ul>

      <div className="flag-container">
        {
          visitedFlags.map((flags,idx)=><img key={idx}  src={flags} ></img>)
        }
      </div>
      <div className="style">
        {
          
      countries.map((count)=> <Country key={count.cca3} country={count} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
       }
    </div>
    </div>
  );
};

export default Countries;