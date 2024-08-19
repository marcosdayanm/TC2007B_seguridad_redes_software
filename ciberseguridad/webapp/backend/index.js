// Bibliotecas necesarias para iniciar
const express = require("express"); // Framework web para Node.js
const mongoose = require("mongoose"); // opción de biblioteca para manejar MongoDB en Node.js
require("dotenv").config(); // Carga variables de entorno desde un archivo .env
const cors = require("cors"); // Importar el paquete 'cors'

// Crea la aplicación de Express
const app = express();
// Define el puerto en el que correrá el servidor (toma de la variable de entorno: 5001, o por defecto el puerto: 5000)
const PORT = process.env.PORT || 5000;

// Habilitar CORS para todas las solicitudes
app.use(
  cors({
    // Permite que cualquier origen pueda acceder a la API
    exposedHeaders: ["X-Total-Count"], // Expone el encabezado X-Total-Count
  })
);

// Conexión a la base de datos MongoDB usando Mongoose
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(() => console.log('MongoDB connected'))
//    .catch(err => console.log(err));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected")) // Mensaje si la conexión es exitosa
  .catch((err) => console.log(err)); // Mensaje si ocurre un error en la conexión

// Middleware para parsear las solicitudes JSON
app.use(express.json());

// Define un modelo de ejemplo llamado "Post"
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Campo título, obligatorio
  content: { type: String, required: true }, // Campo contenido, obligatorio
});
const Post = mongoose.model("Post", PostSchema); // Crea el modelo "Post" basado en el esquema

// Ruta para crear un nuevo post en la base de datos
app.post("/api/posts", async (req, res) => {
  try {
    const newPost = new Post(req.body); // Crea un nuevo documento Post con los datos del cuerpo de la solicitud
    await newPost.save(); // Guarda el documento en la base de datos
    res.status(201).json(newPost); // Responde con el nuevo post creado
  } catch (error) {
    res.status(500).json({ message: "Error al crear el post" }); // Responde con un error si algo falla
  }
});

// Ruta para obtener todos los posts
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find(); // Obtiene todos los posts de la base de datos

    // Transformar _id a id en cada post
    const postsWithId = posts.map((post) => ({
      id: post._id, // asignar el valor de _id a id
      title: post.title,
      content: post.content,
    }));

    res.set("X-Total-Count", postsWithId.length); // Estima el tamaño de los resultados y lo agrega a X-Total-Count en la respuesta para que React-Admin pueda hacer una asignación correcta
    res.json(postsWithId); // Responde con los posts en formato JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los posts" }); // Responde con un error si algo falla
  }
});

// Ruta para probar el backend en el navegador
app.get("/", (req, res) => {
  res.send("Hello World - TC2007B!"); // Mensaje que se verá en la ventana del navegador
});

// Inicia el servidor escuchando en el puerto especificado
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
