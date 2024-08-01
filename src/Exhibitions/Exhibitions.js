import { Card } from '../Card/Card'
import './Exhibitions.css'

export const Exhibitions = ({exhibitions, updateArtFeature, toggleSaveExhibition, savedExhibitionIds}) => {
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
            {exhibitionCards}
        </div>
    )
}