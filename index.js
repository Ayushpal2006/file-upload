const express  = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const port  = 3000;

app.use(fileUpload())

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("hell")
})

app.post('/', (req, res) => {
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/upload/' + image.name);
    
    res.sendStatus(200);
});

app.listen(port,()=>{
    console.log(`running on  ${port}`)
})