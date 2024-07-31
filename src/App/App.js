import './App.css';
import { useState, useEffect } from 'react';
import { getHomepage, searchExhibitions } from '../APICalls'
import { Form } from '../Form/Form';
import { Exhibitions } from '../Exhibitions/Exhibitions';
import { ArtFeature } from '../ArtFeature/ArtFeature'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [exhibitions, setExhibitions] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchExhibitions(searchValue)
    .then(data => setExhibitions(data))
  })

  return (
    <div className="App">
      <header className='header'>Let's Gogh</header>
      <Routes>
          <Route path='/' element={
              <>
                <Form setSearchValue={setSearchValue}/>
                <Exhibitions exhibitions={exhibitions}/>
              </>
          }/>
          <Route path='/artfeature/:id' element={
            <ArtFeature />
          }/>
      </Routes> 
    </div>
  );
}

export default App;
