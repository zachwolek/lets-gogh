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

  const updateArtFeature = (id) => {
    getExhibitionInfo(id)
    .then(data => {
      setArtFeature(data.data)
      console.log("DATAAAAAAAA: ", data.data)
    })
    .catch(error => console.log(error))
  }

  const saveExhibition = (id) => {
    if (!savedExhibitionIds.includes(id)){
      setSavedExhibitionIds([...savedExhibitionIds, id])
    }
    console.log("SAVED IDS: ", savedExhibitionIds)
  }

  useEffect(() => {
    getExhibitionCards(savedExhibitionIds)
      .then(data => setSavedExhibitions(data))
  }, [])


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
                  exhibitions={exhibitions} updateArtFeature={updateArtFeature} saveExhibition={saveExhibition}
                />
              </>
            }
          />
          <Route path='/artfeature/:id' element={
            <ArtFeature artFeature={artFeature}/>
          }/>
          <Route 
            path='/saved' element={
            <SavedExhibitions 
              savedExhibitions={savedExhibitions} 
              updateArtFeature={updateArtFeature}
              saveExhibition={saveExhibition}/>}
          />
      </Routes> 
    </div>
  );
}

export default App;
