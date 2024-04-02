import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

const PORT = 3000
app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, ()=>{
    console.log(`My app is listining at ${PORT} Port`)
})

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.post('/', (req, res) =>{
    console.log(req.body)
})