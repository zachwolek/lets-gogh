export const getHomepage = () => {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=monet`)
    .then(response => getArtifactIds(response))
    .then(artifactIds => resolveFetchPromises(artifactIds))
    .catch(error => console.log(error))
}

export function searchArtifacts(searchValue){
    console.log(searchValue)
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then(response => getArtifactIds(response))
    .then(artifactIds => resolveFetchPromises(artifactIds))
}

function getArtifactIds(response){
    if(!response.ok){
        throw new Error ('Something has gone wrong at a JSON level');
     } else {
         return response.json()
         .then(data => {
            const artifactIds = data.data.map(data => data.id)
            return artifactIds
          })
     }
}

function resolveFetchPromises(artifactIds){
    const fetchPromises = artifactIds.map(id => 
    fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`)
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

// const artifactIds = [
//     147721,
//     265943,
//     47608,
//     153798,
//     81558,
//     52668,
//     4705,
//     4706,
//     267736,
//     268228,
//     267846,
//     147067
// ]