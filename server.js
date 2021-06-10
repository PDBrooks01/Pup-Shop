require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')
const errorController = require('./controllers/error')

app.use(bodyparser.json())
//CORS
const whitelist = ['http://localhost:3000', 'https://pup-shop-frontend.herokuapp.com/home']
const corsOptions = {
    origin: function (origin, callback) {
      // console.log('this is the origin.............', origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}
app.use(cors(corsOptions))
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,UPDATE,DELETE')
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
  next()
})


app.use('/auth',authRoutes)
app.use('/cart',cartRoutes)
app.use('/home',productRoutes)
app.use(errorController.get404)
app.use(errorController.get500)



app.listen(PORT,()=>{
  console.log(`Server is ready to roll on Port ${PORT}...`)
})
