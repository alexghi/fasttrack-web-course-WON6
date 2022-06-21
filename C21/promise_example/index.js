function getNasaData()  {
    console.log('here')

    fetch('https://api.nasa.gov/planetary/apod?api_key=Ed74ovwewYjcfqvQi7W6trteJHatPPg6inmZ6Nhe')
    .then(data => data.json() )
    .then(jsonData => jsonData)  
    .catch( e => {
        console.log('error', e)
    } )


    console.log('end of function')
}

getNasaData();

