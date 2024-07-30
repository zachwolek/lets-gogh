import '../Card/Card.css'

export const Card = ({image_id, title}) => {

        return (
            <div className="artifact-card">
                <h3 className='title'>{title}</h3>
                <div className='image-container image-preview'>
                    <img alt={`Thumbnail photo for ${title} display`} src={`https://www.artic.edu/iiif/2/${image_id}/full/250,/0/default.jpg`}/>
                </div>
                <button className='artifact-info'>SEE MORE</button>
                <button className='save-artifact'>SAVE</button>
            </div>
        )
}