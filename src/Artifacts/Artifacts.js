import { Card } from '../Card/Card'

export const Artifacts = ({artifacts}) => {
    const artifactCards = artifacts.map(artifact => {
        return (
            <Card 
             id={artifact.id}
             key={artifact.id}
             image_id={artifact.image_id}
             title={artifact.title}
            />
         )
    })


    return (
        <div className='artifacts-container'>
            {artifactCards}
        </div>
    )
}