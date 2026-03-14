# 🤖 Ollama AI Chatbot

A **local AI chatbot** built using **Node.js, Express, and Ollama** that runs a **Large Language Model (LLM) directly on your machine**.  
This project demonstrates how to integrate a **locally hosted LLM into a full-stack web application** without relying on external AI APIs.

---

## 🚀 Features
- 💬 Chat interface similar to modern AI assistants  
- 🧠 Runs a **local LLM using Ollama**  
- ⚡ Backend powered by **Node.js + Express**  
- 📜 Conversation history support  
- ⌨️ Press **Enter** to send messages  
- 🤖 AI typing indicator  
- 🎨 Clean chat UI with **HTML + CSS**  
- 🔒 Fully **local AI inference (no cloud required)**  

---

## 🧠 Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js
- Express.js

**AI Runtime**
- Ollama

**Model Used**
- TinyLlama (1B parameter LLM)

---

## 🏗️ System Architecture

```
User (Browser)
      ↓
Frontend (HTML + JavaScript)
      ↓
Express API Server (Node.js)
      ↓
Ollama Local API
      ↓
TinyLlama LLM
```

---

## 📂 Project Structure

```
ollama-ai-chatbot
│
├── server.js          # Express backend server
├── package.json       # Project dependencies
│
└── public
    ├── index.html     # Chat UI
    ├── style.css      # Styling
    └── script.js      # Chat logic
```

---

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/pranjul075/ollama-ai-chatbot.git
cd ollama-ai-chatbot
```

**2. Install dependencies**

```bash
npm install
```

**3. Install Ollama**

Download from:  
https://ollama.com

Check installation:

```bash
ollama --version
```

**4. Download the model**

```bash
ollama pull tinyllama
```

**5. Start the server**

```bash
node server.js
```

**6. Open in browser**

```
http://localhost:3000
```

Now you can chat with your **local AI model**.

---

## 💡 What This Project Demonstrates

- Integrating **LLMs with Node.js**
- Running **AI models locally**
- Building a **full-stack AI application**
- Using **Ollama as a local AI runtime**

---

## 🔮 Future Improvements
- Streaming responses (ChatGPT-style typing)
- Multiple chat sessions
- Voice input support
- RAG (chat with documents)
- Docker deployment
- Support for larger models (Mistral / LLaMA)

---

## 👨‍💻 Author

**Pranjul Katiyar**

GitHub  
https://github.com/pranjul075  

LinkedIn  
https://linkedin.com/in/pranjulkatiyar  

---

## ⭐ Support

If you found this project helpful, consider giving it a **star ⭐ on GitHub**.

Built while learning **Large Language Models (LLMs) and Generative AI**.
