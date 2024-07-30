export const getHomepage = async () => {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=monet`)
        //returns the search of 10 artifacts
    .then(response => getArtifactIds(response))
        //collects an array of IDs
    .then(artifactIds => resolveFetchPromises(artifactIds))
        //returns an array of promises if specific information
    .catch(error => console.log(error))
}

export const searchArtifacts = async (searchValue) => {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then(response => getArtifactIds(response))
    .then(artifactIds => resolveFetchPromises(artifactIds))
    .catch(error => console.log(error))
}

const getArtifactIds = async (response) => {
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

const resolveFetchPromises = (artifactIds) => {
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