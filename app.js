const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post')

const app = express()
mongoose.connect('mongodb://localhost/clean-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Connected to MongoDB'))
.catch(err=>console.log(err)) ;


app.set('view engine', 'ejs')


//middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//create post
/*Post.create({
    title:'Post Title 1',
    description: 'Post desciption 1'
},
{
    title: 'Post Title 2',
    description: 'Post description 2'
},
{
    title: 'Post Title 3',
    description: 'Post description 3'
}
)*/

app.get('/', async(req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    });
})

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/add_post', (req, res) => {
    res.render('add_post')
})

app.post('/posts', async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatildi.`);
})