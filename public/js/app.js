console.log('this is a client side java script')

const weatherform =document.querySelector('form')
const search= document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')
console.log(weatherform)
weatherform.addEventListener('submit',(e) => {
    e.preventDefault()

    const address=search.value
    messageOne.textContent='Loading..'
    messageTwo.textContent=''
    fetch('http://localhost:3000/weather?address='+address).then( (response) => {
    response.json().then((data)=> {
        if (data.error) {
            messageOne.textContent=data.error
            //console.log(data.error)

        }
        else {
            messageOne.textContent=data.place
            messageTwo.textContent='Temperature is '+data.forecast.temparature+' and feels like '+ data.forecast.feelslike
            //console.log( data.place)
            console.log(data.forecast)  
        }

    })


    })
})

