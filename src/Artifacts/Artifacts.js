import { Card } from '../Card/Card'

export const Artifacts = ({artifacts}) => {
    const artifactCards = artifacts.map(artifact => {
        return (
            <Card 
             id={artifact.id}
             key={artifact.id}
             image_id={artifact.image_id}
             title={artifact.title}
             artist_title={artifact.artist_title}
             alt_text={artifact.alt_text}
            />
         )
    })


    return (
        <div className='artifacts-container'>
            {artifactCards}
        </div>
    )
}