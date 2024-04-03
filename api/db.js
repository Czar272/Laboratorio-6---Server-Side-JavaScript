const conn = require('./connection.js')

// fnds
async function getAllPosts() {
    try {
      const [rows] = await conn.query('SELECT * FROM blogs')
      return rows
    } catch (e) {
      console.log(e)
      return e
    }
  }
  
  async function getPostById(id) {
    try {
      const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id}`)
      return rows
    } catch (e) {
      console.log(e)
      return e
    }
  }
  
  async function updatePost(title, content) {
    try {
      const [result] = await conn.query(`UPDATE blogs SET content = '${content}' WHERE title = '${title}'`)
      return result
    } catch (e) {
      return e
    }
  }
  
  async function createPost(title, content, banner) {
    try {
      const [result] = await conn.query(`INSERT INTO blogs (title, content, banner) VALUES ('${title}', '${content}', '${banner}')`)
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
  
  async function deletePost(id) {
    try {
      const [result] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
  
  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost,
  }