import { useEffect, useState } from "react";

const App = () => {

  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('https://api-test-poc-production.up.railway.app/devs')
    .then(response => response.json())
    .then(data => setDevelopers(data));
  }, []);

  return (
    <>
      <h1>Developers</h1>
      { !!developers && developers.map(({
        user,
        name,
        html_url,
        avatar_url,
        numTotalTests,
        numPassedTests,
        numFailedTests
      }, index) => (
        <div key={index}>
          <h2>{name || ''}</h2>
          <div>
            <img src={avatar_url || ''} alt={name || ''} style={{height: "150px"}}/>
          </div>
          <a href={html_url} target="_blank" rel="noreferrer">{user || ''}</a>
          <p>Total: {numTotalTests || ''}</p>
          <p>Passed: {numPassedTests || ''}</p>
          <p>Failed: {numFailedTests || ''}</p>
        </div>
      ))}
    </>
  );
}

export default App;
