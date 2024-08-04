import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import PropTypes from 'prop-types';
import './SavedExhibitions.css'

export const SavedExhibitions = ({savedExhibitions, updateArtFeature, toggleSaveExhibition, savedExhibitionIds, setSearchValue}) => {

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
        <h1>Your Curated Bucket List</h1>
        <Link to={`/`}
            className="home-button" onClick={() => setSearchValue('')}><strong>Back to Home</strong>
        </Link>
        <div className='saved-exhibitions-container'>
            {savedExhibitionCards.length === 0 ?
            <p>Nothing saved yet!
            </p>
            : savedExhibitionCards}
        </div>
        </>
    )
}

SavedExhibitions.propTypes = {
    savedExhibitions: PropTypes.array.isRequired,
    updateArtFeature: PropTypes.func.isRequired,
    toggleSaveExhibition: PropTypes.func.isRequired,
    savedExhibitionIds: PropTypes.array.isRequired,
};