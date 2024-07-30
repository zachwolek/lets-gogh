import './App.css';
import { useState, useEffect } from 'react';
import { getHomepage, searchArtifacts } from '../APICalls'
import { Form } from '../Form/Form';
import { Artifacts } from '../Artifacts/Artifacts';

const App = () => {
  const [artifacts, setArtifacts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchArtifacts(searchValue)
    .then(data => setArtifacts(data))
  })

  return (
    <div className="App">
      <header className='header'>Let's Gogh</header>
      <Form setSearchValue={setSearchValue}/>
      <Artifacts artifacts={artifacts}/>
    </div>
  );
}

export default App;
