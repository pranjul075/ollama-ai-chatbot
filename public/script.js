let history = []

const chatBox = document.getElementById("chat-box")

async function sendMessage(){

const input = document.getElementById("message")
const msg = input.value.trim()

if(msg === "") return
chatBox.innerHTML += `<div class="message user">${msg}</div>`
chatBox.scrollTop = chatBox.scrollHeight
history.push({
role: "user",
content: msg
})

input.value=""
chatBox.innerHTML += `
<div class="message ai" id="typing">
🤖 AI is typing<span class="dots"></span>
</div>
`

chatBox.scrollTop = chatBox.scrollHeight

try{

const res = await fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
history: history
})
})

const data = await res.json()

document.getElementById("typing").remove()

chatBox.innerHTML += `<div class="message ai">🤖 ${data.reply}</div>`
history.push({
role: "assistant",
content: data.reply
})

chatBox.scrollTop = chatBox.scrollHeight

}catch(error){

document.getElementById("typing").remove()

chatBox.innerHTML += `<div class="message ai">⚠️ Error connecting to AI</div>`

}

}
document.getElementById("message").addEventListener("keypress", function(e){
if(e.key === "Enter"){
sendMessage()
}
})