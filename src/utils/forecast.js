const request = require ('request')

const forecast = (long,lat,callback ) =>  {

      
    const url ='http://api.weatherstack.com/current?access_key=5e5ed1c2bb356249e5b923736079cf45&query='+long+','+lat
    
     request({url ,json : true  },(error,{body})=>{
     
      if(error){
          callback('Unable to connect remote service',undefined)

      }else if(body.error) {

          callback('Unable to find location , please another one',undefined)

      }else{

          callback(undefined,{
          temparature : body.current.temperature,
          feelslike: body.current.feelslike
        })
      }

  })
}

module.exports= forecast