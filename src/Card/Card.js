import '../Card/Card.css'

export const Card = ({image_id, title, artist_title, alt_text}) => {

        return (
            <div className="artifact-card">
                <div className='image-container image-preview'>
                    <img alt={`Thumbnail photo for ${title} display`} src={`https://www.artic.edu/iiif/2/${image_id}/full/250,/0/default.jpg`}/>
                </div>
                <h3 className='title'>{title}</h3>
                <p>{artist_title}</p>
                <button className='artifact-info'>SEE MORE</button>
                <button className='save-artifact'>SAVE</button>
            </div>
        )
}