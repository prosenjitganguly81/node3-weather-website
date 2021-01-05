const request = require ('request')

const geocode = (address,callback ) =>  {

      
      const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJvc2VuZ2FuZ3MiLCJhIjoiY2tqYmdveTdlMXI2azJ0bXQ0aHR4eG12ayJ9.PI1u6QwLGupF3vR1GDyXuQ&limit=1'
      

      request({url ,json : true },(error,{body})=>  {
      if(error){
          callback('Unable to connect remote service',undefined)

      }else if(body.features.length===0) {

          callback('Unable to find location , please another one',undefined)

      }else{

          callback(undefined,{
          long  : body.features[0].center[1],
          lat : body.features[0].center[0],
          place : body.features[0].place_name 
        })
      }

  })
}

module.exports= geocode