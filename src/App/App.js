import './App.css';
import { useState, useEffect } from 'react';
import { searchExhibitions, getExhibitionInfo } from '../APICalls'
import { Form } from '../Form/Form';
import { Exhibitions } from '../Exhibitions/Exhibitions';
import { ArtFeature } from '../ArtFeature/ArtFeature'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [exhibitions, setExhibitions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [artFeature, setArtFeature] = useState('')

  useEffect(() => {
    searchExhibitions(searchValue)
    .then(data => setExhibitions(data))
  }, [searchValue])

  const updateArtFeature = (id) => {
    getExhibitionInfo(id)
    .then(data => {
      setArtFeature(data.data)
      console.log("DATAAAAAAAA: ", data.data)
    })
    .catch(error => console.log(error))
  }


  return (
    <div className="App">
      <header className='header'>Let's Gogh</header>
      <Routes>
          <Route path='/' element={
              <>
                <Form setSearchValue={setSearchValue}/>
                <Exhibitions exhibitions={exhibitions} updateArtFeature={updateArtFeature}/>
              </>
          }/>
          <Route path='/artfeature/:id' element={
            <ArtFeature artFeature={artFeature}/>
          }/>
      </Routes> 
    </div>
  );
}

export default App;
