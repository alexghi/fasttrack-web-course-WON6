function getNasaData()  {
    console.log('here')

    //https://api.nasa.gov/
    fetch('https://api.nasa.gov/planetary/apod?api_key=XXX-your key from NASA')
    .then(data => data.json() )
    .then(jsonData => jsonData)  
    .catch( e => {
        console.log('error', e)
    } )


    console.log('end of function')
}

getNasaData();

