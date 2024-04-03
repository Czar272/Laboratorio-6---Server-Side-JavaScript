const express = require('express')
const cors = require('cors') // Importa el módulo de CORS


// Importa la configuración de Swagger que cree


const {
    getAllPosts, getPostById, createPost, deletePost, updatePost,
} = require('./db.js')

const app = express()
const port = 3000
// This line is necessary to parse the request body
app.use(express.json())




const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/', (req, res) => {
  res.send('Estas dentro de la api!')
})


app.get('/blogs', async (req, res) => {
  try {
    const blogs = await getAllPosts()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).send('Error interno del servidor')
  }
})


app.get('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params
    const blogs = await getPostById(id)
    if (blogs.length === 0) {
      return res.status(404).send('Blog not found')
    }
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

app.post('/blogs', async (req, res) => {
  try {
    
    const [title, content, banner] = [req.body.title, req.body.content, req.body.banner]
    if (!title || !content || !banner) {
      return res.status(400).send('Falta título o contenido en la solicitud')
    }
    console.log(title, content, banner)
    const blogs = await createPost(title, content, banner)
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'error creating the character' })
  }
})



app.delete('/blogs/:id', async (request, response) => {
  try {
    console.log('delete blog')
    const { id } = request.params
    console.log(id)
    const result = await deletePost(id)
    response.status(200).json(result)
  } catch (error) {
    response.status(500).json({ message: 'error deleting the character' })
  }
})

app.use((req, res) => {
  res.status(501).send('Método HTTP no implementado')
})

app.use((req, res) => {
  res.status(400).send('no endpoint was found')
})

