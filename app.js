const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('const blog = { id: 1, title: "Blog title", description: "Blog description" }')
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatildi.`);
})