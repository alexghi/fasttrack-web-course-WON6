

setTimeout(() => {
    console.log('heeere, i loaded myself')
    const fetchMyData = () => {
        console.log('fetching now')
        fetch('https://jsonplaceholder.typicode.com')

            .then((data) => {
                console.log('your response', data)
                return {
                    myData: data
                }
            })
            .then((ddd) => {
                console.log('ddd', ddd)
            })
    }
 
    const btn = document.getElementById('myBtn')
    btn.addEventListener('click', fetchMyData)


}, 2000)