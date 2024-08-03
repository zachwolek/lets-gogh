import './ArtFeature.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const ArtFeature = ({artFeature, savedExhibitionIds, toggleSaveExhibition}) => {
    const {artist_title, date_display, description, id, image_id, place_of_origin, short_description, style_title, title} = artFeature

    console.log("DESCRIPTION: ", artFeature)
    return (
        <>
            <h1 className='title'>{title}</h1>
            {artist_title && <h2 className='artist_title'>{artist_title}</h2>}
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }} />}
            <p className='place_of_origin'>place_of_origin: {place_of_origin}</p>
            <p className='date_display'>date_display: {date_display}</p>
            <p className='style_title'>style_title: {style_title}</p>
            <Link to={`/`}>
                <button className='home_button'>HOME</button>
            </Link>  
            <button 
                className={`save-button ${savedExhibitionIds.includes(id) ? 'remove-state' : 'save-state'}`}
                onClick={() => toggleSaveExhibition(id)}
                >
                {savedExhibitionIds.includes(id) ? 'REMOVE' : 'SAVE'}
            </button>
        </>
    )
}
