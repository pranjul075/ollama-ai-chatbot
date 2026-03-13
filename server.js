const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/chat", async (req, res) => {

  const userMessage = req.body.message

  try {

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "tinyllama",
      prompt: userMessage,
      stream: false
    })

    res.json({
      reply: response.data.response
    })

  } catch (error) {
    res.status(500).json({ error: "AI error" })
  }

})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})