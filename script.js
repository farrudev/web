const title = document.getElementById("title")
const desc = document.getElementById("desc")

const navSkills = document.getElementById("navSkills")
const navProjects = document.getElementById("navProjects")
const navContact = document.getElementById("navContact")

const skillsTitle = document.getElementById("skillsTitle")
const projectsTitle = document.getElementById("projectsTitle")
const contactTitle = document.getElementById("contactTitle")

const skill1 = document.getElementById("skill1")
const skill2 = document.getElementById("skill2")
const skill3 = document.getElementById("skill3")

// simple idioma toggle
document.addEventListener("keydown", (e) => {

if(e.key === "e"){
title.innerText = "Hi, I'm FARRUKOOO"
desc.innerText = "Plugin configurator, Discord bot dev and server manager."

navSkills.innerText = "SKILLS"
navProjects.innerText = "PROJECTS"
navContact.innerText = "CONTACT"

skillsTitle.innerText = "SKILLS"
projectsTitle.innerText = "PROJECTS"
contactTitle.innerText = "CONTACT"

skill1.innerText = "YAML / Config"
skill2.innerText = "Team Management"
skill3.innerText = "Problem Solving"
}

if(e.key === "s"){
title.innerText = "Hola, soy FARRUKOOO"
desc.innerText = "Configurador de plugins, bots de Discord y administrador."

navSkills.innerText = "HABILIDADES"
navProjects.innerText = "PROYECTOS"
navContact.innerText = "CONTACTO"

skillsTitle.innerText = "HABILIDADES"
projectsTitle.innerText = "PROYECTOS"
contactTitle.innerText = "CONTACTO"

skill1.innerText = "YAML / Configuración"
skill2.innerText = "Gestión de Equipos"
skill3.innerText = "Solución de Problemas"
}

})
