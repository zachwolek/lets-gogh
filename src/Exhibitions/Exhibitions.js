import { Card } from '../Card/Card'
import { Link } from 'react-router-dom'
import './Exhibitions.css'
import PropTypes from 'prop-types';

export const Exhibitions = ({exhibitions, savedExhibitionIds, updateArtFeature, toggleSaveExhibition, setSearchValue, searchValue}) => {
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

    function scrollLeft() {
        const container = document.querySelector('.exhibition-cards');
        container.scrollBy({ left: -1000, behavior: 'smooth' });
    }
    
    function scrollRight() {
        const container = document.querySelector('.exhibition-cards');
        container.scrollBy({ left: 1000, behavior: 'smooth' });
    }

    return (
        <div className='exhibitions-container'>
            {searchValue? 
                <div className='search-results'>
                    <p><em>Showing top exhibitions containing:</em> <strong>{searchValue}</strong></p>
                    <Link to="/" className="home-button" onClick={() => setSearchValue('')}>
                    <i className="fas fa-home"></i> Return Home
                    </Link>
                </div>
                : null}

            <button className="arrow left-arrow" onClick={scrollLeft}>‹</button>

            <div className='exhibition-cards'>
            {exhibitionCards.length > 0 ? 
            (
                exhibitionCards
            ) : 
            <p>Curating your results...</p>
            }
            </div>

            <button className="arrow right-arrow" onClick={scrollRight}>›</button>

        </div>
    )
}

Exhibitions.propTypes = {
    exhibitions: PropTypes.array.isRequired,
    savedExhibitionIds: PropTypes.array.isRequired,
    updateArtFeature: PropTypes.func.isRequired,
    toggleSaveExhibition: PropTypes.func.isRequired
}