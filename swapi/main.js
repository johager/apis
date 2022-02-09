console.log('test')

document.getElementById('theButton').addEventListener('click', (event) => {
    // const newP = document.createElement('p')
    // newP.textContent = 'The button was clicked'
    // document.querySelector('body').appendChild(newP)
    axios.get('https://swapi.dev/api/planets?search=Ald')
    .then((res) =>{
        console.log(res.data.results[0].residents)
        for (let resident of res.data.results[0].residents) {
            console.log(resident)
            axios.get(resident)
            .then((res) => {
                console.log("resident:", res.data)
                const newH2 = document.createElement('h2')
                newH2.textContent = res.data.name
                document.querySelector('body').appendChild(newH2)
            })
            .catch(console.log('bad resident request'))
        }
    })
    .catch(console.log('bad planets request'))
})
