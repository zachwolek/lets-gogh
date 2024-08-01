import './App.css';
import { useState, useEffect } from 'react';
import { searchExhibitions, getExhibitionInfo, getExhibitionCards } from '../APICalls'
import { Form } from '../Form/Form';
import { Header } from '../Header/Header'
import { Exhibitions } from '../Exhibitions/Exhibitions';
import { ArtFeature } from '../ArtFeature/ArtFeature'
import { SavedExhibitions} from "../SavedExhibitions/SavedExhibitions"
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [exhibitions, setExhibitions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [artFeature, setArtFeature] = useState('')
  const [savedExhibitionIds, setSavedExhibitionIds] = useState([])
  const [savedExhibitions, setSavedExhibitions] = useState([])


  useEffect(() => {
    searchExhibitions(searchValue)
    .then(data => setExhibitions(data))
  }, [searchValue])

  useEffect(() => {
    getExhibitionCards(savedExhibitionIds)
      .then(data => setSavedExhibitions(data))
  }, [savedExhibitionIds])

  const updateArtFeature = (id) => {
    getExhibitionInfo(id)
    .then(data => {
      setArtFeature(data.data)
      console.log("DATAAAAAAAA: ", data.data)
    })
    .catch(error => console.log(error))
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
                />
                <Exhibitions 
                  exhibitions={exhibitions} 
                  updateArtFeature={updateArtFeature} 
                  toggleSaveExhibition={toggleSaveExhibition}
                  savedExhibitionIds={savedExhibitionIds}
                />
              </>
            }
          />
          <Route path='/artfeature/:id' element={
            <ArtFeature 
            artFeature={artFeature}
            savedExhibitionIds={savedExhibitionIds}
            toggleSaveExhibition={toggleSaveExhibition}
            />
          }/>
          <Route 
            path='/saved' element={
            <SavedExhibitions 
              savedExhibitions={savedExhibitions} 
              updateArtFeature={updateArtFeature}
              toggleSaveExhibition={toggleSaveExhibition} 
              savedExhibitionIds={savedExhibitionIds} 
            />}
          />
      </Routes> 
    </div>
  );
}

export default App;
