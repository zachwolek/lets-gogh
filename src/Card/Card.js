import './Card.css'
import { Link } from 'react-router-dom'

export const Card = ({id, image_id, title, artist_title, alt_text, short_description, updateArtFeature, toggleSaveExhibition, savedExhibitionIds}) => {

        return (
            <div className="exhibition-card-container" title={alt_text}>
            <div className='exhibition-card'>
                <div className='image-container'>
                    <img alt={alt_text} src={`https://www.artic.edu/iiif/2/${image_id}/full/300,/0/default.jpg`} />
                    <p className='hover-description'>
                        {short_description ? <p dangerouslySetInnerHTML={{ __html: short_description }} /> : 'No information provided'}
                    </p>
                </div>
                <h3 className='title'>{title}</h3>
                <p>{artist_title}</p>

                <Link to={`/artfeature/${id}`}>
                    <button 
                        className='exhibition-info'
                        onClick={() => {
                            updateArtFeature(id)
                        }}
                    >SEE MORE</button>
                </Link>    

                <button 
                    className={`save-button ${savedExhibitionIds.includes(id) ? 'remove-state' : 'save-state'}`}
                    onClick={() => toggleSaveExhibition(id)}
                >
                    {savedExhibitionIds.includes(id) ? 'REMOVE' : 'SAVE'}
                </button>
            </div>
        </div>
        )
}