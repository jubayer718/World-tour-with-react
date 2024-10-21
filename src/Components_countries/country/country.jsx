import { useState } from "react";

import '../country/country1.css'



const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
  const [Visited, setVisited] = useState(false)
  const handleVisited = () => {
    setVisited(!Visited)
  }

  
 const {name,flags,cca3}=country
  return (
    <div className={`${Visited ? 'visited' : 'non-visited'}`} style={{ border: '2px solid red', margin: '10px', padding: '10px', borderRadius: '10px' }} >
      
      <ul>
        <li>visitedCountries:</li>
    </ul>

      <p style={{ color: Visited ? 'purple':'white'}}>Name: {name?.common}</p>
    
        <p>Official: {name?.official}</p>
      <img style={{width:'100%',}} src={flags?.png} alt="" />
      
      <p>code: {cca3}</p><br />
      <button  onClick={()=>handleVisitedFlags(flags.png)}>Add visited Flags</button>
      <br />
      <button onClick={()=>handleVisitedCountries(country)}>Add to Visit List</button>
      <button onClick={handleVisited}>{ Visited?'Visited':'Going'}</button>
      {Visited? 'Visited':'I want to go there'}
    </div>
  );
};

export default Country;