import './ArtFeature.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const ArtFeature = ({artFeature, savedExhibitionIds, toggleSaveExhibition}) => {
    const {artist_title, date_display, description, id, image_id, place_of_origin, style_title, title} = artFeature

    console.log("DESCRIPTION: ", artFeature.image_id)
    return (
        <main className='main'>
            <h1 className='title'>{title}</h1>
            {artist_title && <h2 className='artist_title'>{artist_title}</h2>}
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            {description && (
                <p>
                <p>Description:</p>
                <span className="description" dangerouslySetInnerHTML={{ __html: description }} />
                </p>)}
            {place_of_origin && <p className='place_of_origin'>Place of Origin: {place_of_origin}</p>}
            {date_display && <p className='date_display'>Date: {date_display}</p>}
            {style_title && <p className='style_title'>Style: {style_title}</p>}
            <Link to={`/`}>
                <button className='home-button'>BACK</button>
            </Link>    
            <button 
                className={`save-button ${savedExhibitionIds.includes(id) ? 'remove-state' : 'save-state'}`}
                onClick={() => toggleSaveExhibition(id)}
                >
                {savedExhibitionIds.includes(id) ? 'REMOVE' : 'SAVE'}
            </button>
        </main>
    )
}

ArtFeature.propTypes = {
    artFeature: PropTypes.array.isRequired,
    savedExhibitionIds: PropTypes.array.isRequired,
    toggleSaveExhibition: PropTypes.func.isRequired,
    setSearchValue: PropTypes.func.isRequired,
};