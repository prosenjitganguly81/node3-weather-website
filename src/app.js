const path= require('path')
const express= require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//define paths for express config
const pathDirectory= path.join(__dirname,'../public')
const viewDirectory=path.join(__dirname,'../templates/views')
const partialDirectory=path.join(__dirname,'../templates/partials')


// setup handlebars
const app= express()
app.set('views',viewDirectory)
app.set('view engine','hbs')
hbs.registerPartials(partialDirectory)
app.use(express.static(pathDirectory))

app.get('',(req,res)=>{

    res.render('index',{
        title:'Weather',
        forecast:'This is a lovely weather',
        name:'Prosenjit Ganguly'

       
    })
})


app.get('/about',(req,res)=>{

    res.render('about',{
        title:'About',
        name:'Prosenjit Ganguly'

       
    })
})

//Code start

app.get('/weather',(req,res)=>{

    console.log(req.query)
    if (!req.query.address)
    return res.send('Please provide address here')
    
geocode(req.query.address,(error,{long,lat,place})=>{
    
    if(error){
       
        return res.send({error})
  
    }
   
    forecast(long,lat,(error,forecastdata)=>{
      
        if (error)
        {
            return res.send({error})
        }
        res.send({
            place,
            forecast:forecastdata,
            address: req.query.address

        })
        
    })


})

})
// //Code end

app.get('/products',(req,res)=>{
    res.send({
        products:[]
    })
})     
    





app.listen(3000,()=>{
    console.log("Server is up and running on port 3000")
})