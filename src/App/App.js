import './App.css';
import { useState, useEffect } from 'react';
import { searchExhibitions, getExhibitionInfo, getExhibitionCards } from '../APICalls'
import { Form } from '../Form/Form';
import { Header } from '../Header/Header'
import { Exhibitions } from '../Exhibitions/Exhibitions';
import { ArtFeature } from '../ArtFeature/ArtFeature'
import { SavedExhibitions} from "../SavedExhibitions/SavedExhibitions"
import { NotFound } from '../NotFound/NotFound'
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [exhibitions, setExhibitions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [artFeature, setArtFeature] = useState('')
  const [savedExhibitionIds, setSavedExhibitionIds] = useState([])
  const [savedExhibitions, setSavedExhibitions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    searchExhibitions(searchValue)
    .then(data => setExhibitions(data))
    .catch(error => setError(error.message))
  }, [searchValue])

  useEffect(() => {
    getExhibitionCards(savedExhibitionIds)
      .then(data => setSavedExhibitions(data))
  }, [savedExhibitionIds])

  const updateArtFeature = (id) => {
    getExhibitionInfo(id)
    .then(data => {
      setArtFeature(data.data)
    })
    .catch(error => setError(error.message))
  }

  const toggleSaveExhibition = (id) => {
    if (savedExhibitionIds.includes(id)) { 
      setSavedExhibitionIds(savedExhibitionIds.filter(exhibitionId => exhibitionId !== id));
    } else {
      setSavedExhibitionIds([...savedExhibitionIds, id]);
    }
  };

  return (
    <div className="App">
      <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Header 
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                />
                {error && <h2>{error}</h2>}
                <Exhibitions 
                  exhibitions={exhibitions} 
                  updateArtFeature={updateArtFeature} 
                  toggleSaveExhibition={toggleSaveExhibition}
                  savedExhibitionIds={savedExhibitionIds}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </>
            }
          />
          <Route path='/artfeature/:id' element={
            <ArtFeature 
            artFeature={artFeature}
            savedExhibitionIds={savedExhibitionIds}
            toggleSaveExhibition={toggleSaveExhibition}
            setSearchValue={setSearchValue}
            />
          }/>
          <Route 
            path='/saved' element={
            <SavedExhibitions 
              savedExhibitions={savedExhibitions} 
              updateArtFeature={updateArtFeature}
              toggleSaveExhibition={toggleSaveExhibition} 
              savedExhibitionIds={savedExhibitionIds} 
              setSearchValue={setSearchValue}
            />}
          />
          <Route path='*' element={<NotFound 
            setSearchValue={setSearchValue}
          />}/>
      </Routes> 
    </div>
  );
}

export default App;