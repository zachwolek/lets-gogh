import '../pages/Card.css'

export function Card({id, key, image_id, title}){
    return(
        <div class="artifact-card">
            <h3 classname='title'>{title}</h3>
            <div classname='image-container image-preview'>
                <img alt={`Thumbnail photo for ${title} display`} src={`https://www.artic.edu/iiif/2/${image_id}/full/250,/0/default.jpg`}/>
            </div>
            <button className='save-artifact'>SAVE</button>
        </div>
    )
}

// .image-container {
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
//   <div className=“image-container>
//   <img your img>
//   </div>