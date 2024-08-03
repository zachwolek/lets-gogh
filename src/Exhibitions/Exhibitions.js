import { Card } from '../Card/Card'
import './Exhibitions.css'
import PropTypes from 'prop-types';

export const Exhibitions = ({exhibitions, savedExhibitionIds, updateArtFeature, toggleSaveExhibition}) => {
    const exhibitionCards = exhibitions.map(exhibition => {
        return (
            <Card 
             id={exhibition.id}
             key={exhibition.id}
             image_id={exhibition.image_id}
             title={exhibition.title}
             artist_title={exhibition.artist_title}
             alt_text={exhibition.alt_text}
             short_description={exhibition.short_description}
             updateArtFeature={updateArtFeature}
             toggleSaveExhibition={toggleSaveExhibition}
             savedExhibitionIds={savedExhibitionIds}
            />
         )
    })


    return (
        <div className='exhibitions-container'>
            {exhibitionCards.length > 0 ? 
            (
                exhibitionCards
            ) : 
            <p>Curating your results...</p>
            }
        </div>
    )
}

Exhibitions.propTypes = {
    exhibitions: PropTypes.array.isRequired,
    savedExhibitionIds: PropTypes.array.isRequired,
    updateArtFeature: PropTypes.func.isRequired,
    toggleSaveExhibition: PropTypes.func.isRequired
}