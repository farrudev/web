document.addEventListener("DOMContentLoaded", () => {

const esBtn = document.getElementById("es")
const enBtn = document.getElementById("en")

esBtn.onclick = () => {

document.getElementById("title").innerText = "Hola, soy FARRUKOOO"
document.getElementById("subtitle").innerText = "CONFIGURADOR MEDIO"

document.getElementById("desc").innerText =
"Hola, soy farru, tengo 15 años y vivo en chile, me especializo en la configuracion de plugins principalmente YAML, Bots de discord y administrador de servidores, tengo 2 años de experiencia y me encuentro en constante aprendimiento, si me necesitas no dudes en contactarme."

}

enBtn.onclick = () => {

document.getElementById("title").innerText = "Hi, I'm FARRUKOOO"
document.getElementById("subtitle").innerText = "PLUGIN CONFIGURATOR"

document.getElementById("desc").innerText =
"Hi, I'm Farru, I'm 15 years old and I live in Chile. I specialize in plugin configuration mainly YAML, Discord bots and server administration. I have 2 years of experience and I'm constantly learning."

}

})
