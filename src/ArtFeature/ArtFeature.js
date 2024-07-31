import './ArtFeature.css'
import { Link } from 'react-router-dom'

export const ArtFeature = ({artFeature}) => {
    const {artist_title, date_display, description, id, image_id, place_of_origin, short_description, style_title, title} = artFeature

    console.log("DESCRIPTION: ", artFeature)
    return (
        <>
            <p>artist_title: {artist_title}</p>
            <p>date_display: {date_display}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <p>id: {id}</p>
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            <p>place_of_origin: {place_of_origin}</p>
            <p>short_description: {short_description}</p>
            <p>style_title: {style_title}</p>
            <p>title: {title}</p>
            <button>SAVE</button>
            <Link to={`/`}>
            <button>BACK</button>
            </Link>  
        </>
    )
}

