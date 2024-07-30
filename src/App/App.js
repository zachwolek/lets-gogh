import './App.css';
import { useState, useEffect } from 'react';
import { getHomepage } from '../APICalls'

const App = () => {
  const [artifacts, setArtifacts] = useState([])

  useEffect(() => {
    getHomepage()
    .then(data => setArtifacts(data))
  })

  return (
    <div className="App">
      LET'S GOGH
    </div>
  );
}

export default App;
