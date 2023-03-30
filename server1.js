//-------Main Requirements-----
const express = require('express')
const fs = require('fs')
//Initialize Express
const app = express()
const PORT = 3000
const hobbies = ['Gardening', 'Reading', 'Cooking']
const contact = { email: 'sandhydandamudi@gmail.com', num: '111-111-1111' }
const fruits = ['Apple', 'Banana', 'Orange']
const animals = ['Dog', 'Cat', 'Deer']
//-------MiddleWare------
app.engine('madeline', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', options.message)
            .replace('#content#', options.content)
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'madeline')
//-----Routing----
//1.
app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am Sandhya' })
})
//2.
app.get('/About', (req, res) => {
    res.render('template', { title: 'About', message: 'Sandhya', content: 'Learning Software Engineering at Perscholas' })
})
//3.
app.get('/Skills', (req, res) => {
    res.render('template', { title: 'Skills', message: 'Technical Skills', content: 'HTML, CSS, JavaScript,React,Express' })
})
//4.
app.get('/Hobbies', (req, res) => {
    res.render('template', { title: 'Hobbies', message: 'My Hobbies', content: hobbies })
})
//5.
app.get('/Contact', (req, res) => {
    res.render('template', { title: 'Contact', message: 'Contact Details', content: 'Email:' + contact.email + 'Number' + contact.num })
})
//6.
app.get('/fruits/:index', (req, res) => {
    res.render('template1', { title: 'Contact', message: 'Fruit', content: fruits[req.params.index] })
})
// //7.
app.get('/fruits/', (req, res) => {
    res.render('template1', { title: 'fruits', message: 'Fruits', content: fruits })
})
// //8.
app.get('/animals', (req, res) => {
    res.render('template1', { title: 'animals', message: 'Animals', content: animals })
})
// //9.
app.get('/Cities', (req, res) => {
    res.render('template1', { title: 'Cities', message: 'Cities', content: 'Newyork,Chicago,Washington DC' })
})
// //10.
app.get('/Stores', (req, res) => {
    res.render('template1', { title: 'stores', message: 'Shops', content: 'Target, ShopRite, Wholefoods' })
})




//--------{Server Info}-----
//Tell the app to listen on port 3000 for HTTp requests from clients
app.listen(PORT, () => {
    console.log(`currently listening on port ${PORT}`)
})