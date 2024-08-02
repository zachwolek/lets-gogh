export const searchExhibitions = async (searchValue) => {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then(response => getExhibitionIds(response))
    .then(exhibitionIds => getExhibitionCards(exhibitionIds))
    .catch(error => console.log(error))
}

const getExhibitionIds = async (response) => {
    if(!response.ok){
        throw new Error ('Something has gone wrong at a JSON level');
     } else {
         return response.json()
         .then(data => {
            const exhibitionIds = data.data.map(data => data.id)
            return exhibitionIds
          })
     }
}

export const getExhibitionCards = (exhibitionIds) => {
    const fetchPromises = exhibitionIds.map(id => 
    fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_title,alt_text,short_description`)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Error fetching data for ID ${id}`);
        }
        return response.json();
        })
        .then(data => data.data)
    )
    return Promise.all(fetchPromises)
}

export const getExhibitionInfo = async (id) => {
    return fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_title,description,short_description,place_of_origin,date_display,style_title`)
    .then(response => {
    if (!response.ok) {
        throw new Error(`Error fetching data for ID ${id}`);
    }
    return response.json();
    })
}
