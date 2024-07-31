import './App.css';
import { useState, useEffect } from 'react';
import { getHomepage, searchArtifacts } from '../APICalls'
import { Form } from '../Form/Form';
import { Artifacts } from '../Artifacts/Artifacts';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
          <Route path='/' element={
              <>
                <Form setSearchValue={setSearchValue}/>
                <Artifacts artifacts={artifacts}/>
              </>
          }/>
      </Routes>
    </div>
  );
}

export default App;
