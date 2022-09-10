import { useEffect, useState } from "react";

const App = () => {

  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('https://api-test-poc-1.herokuapp.com/devs')
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
        <>
        </>
      ))}
    </>
  );
}

export default App;
