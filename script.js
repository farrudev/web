document.addEventListener("DOMContentLoaded", () => {

const esBtn = document.getElementById("es")
const enBtn = document.getElementById("en")

esBtn.onclick = () => {

document.getElementById("title").innerText = "Hola, soy FARRUKOOO"
document.getElementById("subtitle").innerText = "CONFIGURADOR MEDIO"
document.getElementById("desc").innerText = "Hola, soy farru, tengo 15 años y vivo en chile, me especializo en la configuracion de plugins principalmente YAML, Bots de discord y administrador de servidores, tengo 2 años de experiencia y me encuentro en constante aprendimiento, si me necesitas no dudes en contactarme."

document.getElementById("navSkills").innerText = "HABILIDADES"
document.getElementById("navProjects").innerText = "REFERENCIAS Y PROYECTOS"
document.getElementById("navContact").innerText = "CONTACTAME"

document.getElementById("skillsTitle").innerText = "Mis habilidades"
document.getElementById("projectsTitle").innerText = "Referencias y proyectos"
document.getElementById("contactTitle").innerText = "CONTACTAME"

document.getElementById("contactDesc").innerText = "Contactame a través de Discord."

document.getElementById("skill1").innerText = "YAML / Configuración"
document.getElementById("skill2").innerText = "Gestión de Equipos"
document.getElementById("skill3").innerText = "Solución de Problemas"

}

enBtn.onclick = () => {

document.getElementById("title").innerText = "Hi, I'm FARRUKOOO"
document.getElementById("subtitle").innerText = "PLUGIN CONFIGURATOR"
document.getElementById("desc").innerText = "Hi, I'm Farru, I'm 15 years old and I live in Chile. I specialize in plugin configuration mainly YAML, Discord bots and server administration. I have 2 years of experience and I'm constantly learning."

document.getElementById("navSkills").innerText = "SKILLS"
document.getElementById("navProjects").innerText = "REFERENCES & PROJECTS"
document.getElementById("navContact").innerText = "CONTACT ME"

document.getElementById("skillsTitle").innerText = "My skills"
document.getElementById("projectsTitle").innerText = "References and projects"
document.getElementById("contactTitle").innerText = "CONTACT ME"

document.getElementById("contactDesc").innerText = "Contact me through Discord."

document.getElementById("skill1").innerText = "YAML / Configuration"
document.getElementById("skill2").innerText = "Team Management"
document.getElementById("skill3").innerText = "Problem Solving"

}

})
