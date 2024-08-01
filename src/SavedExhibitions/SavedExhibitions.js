import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import './SavedExhibitions.css'

export const SavedExhibitions = ({savedExhibitions, updateArtFeature, toggleSaveExhibition, savedExhibitionIds}) => {

    const savedExhibitionCards = savedExhibitions.map(exhibition => {
        return (
            <Card 
             id={exhibition.id}
             key={exhibition.id}
             image_id={exhibition.image_id}
             title={exhibition.title}
             artist_title={exhibition.artist_title}
             alt_text={exhibition.alt_text}
             updateArtFeature={updateArtFeature}

             toggleSaveExhibition={toggleSaveExhibition}
             savedExhibitionIds={savedExhibitionIds}
            />
         )
    })

    return (
        <>
        <header>SAVED</header>
        <Link to={`/`}>
                <button>BACK</button>
        </Link>
        <div className='saved-exhibitions-container'>
            {savedExhibitionCards}
        </div>
        </>
    )
}