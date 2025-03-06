const translations = {
  es: {
    perfil: "Perfil",
    privacidad: "Privacidad",
    contacto: "Hablemos",
    mensajeWhatsApp: "Hola, me gustaría conversar contigo acerca de una oportunidad laboral.",
    parrafo1:
      "Profesional en Administración de Empresas, Tecnólogo en Administración del Talento Humano y Técnico en Informática, con experiencia en desarrollo web, móvil y automatización de procesos (RPA). Especializado en la creación de aplicaciones multiplataforma utilizando HTML5, CSS3, JavaScript, Capacitor, archivos JSON, consumo de APIs, Android Studio y Xcode, además de herramientas para automatización UiPath y Python.",
    parrafo2:
      "Con habilidades en el uso de GitHub para control de versiones y GitHub pages, Cloudflare para la gestión de dominios y optimización web, experiencia en desarrollo frontend mobile y web con nipple.js, pdf.js, xlsx.js (SheetJS), FileSaver.js y terser.js.",
    parrafo3:
      "Proactivo, autodidacta y apasionado por la tecnología, con capacidad de adaptación y aprendizaje continuo. Con experiencia previa en reclutamiento IT, legislación laboral colombiana y gestión de talento, comprendiendo necesidades del negocio y trabajando en equipos multidisciplinarios.",
  },
  en: {
    perfil: "Profile",
    privacidad: "Privacity",
    contacto: "Let's chat",
    mensajeWhatsApp: "Hello, I would like to talk to you about a job opportunity.",
    parrafo1:
      "Professional in Business Administration, Technologist in Human Talent Management, and Technician in Informatics, with experience in web and mobile development, as well as process automation (RPA). Specialized in creating cross-platform applications using HTML5, CSS3, JavaScript, Capacitor, JSON files, API consumption, Android Studio, and Xcode, in addition to automation tools like UiPath and Python.",
    parrafo2:
      "Skilled in using GitHub for version control and GitHub Pages, Cloudflare for domain management and web optimization, with experience in frontend mobile and web development using nipple.js, pdf.js, xlsx.js (SheetJS), FileSaver.js, and terser.js.",
    parrafo3:
      "Proactive, self-taught, and passionate about technology, with adaptability and continuous learning ability. Previous experience in IT recruitment, Colombian labor legislation, and talent management, understanding business needs and working in multidisciplinary teams.",
  },
};

document.querySelectorAll(".flag").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    document.getElementById(
      "perfil"
    ).innerHTML = `<a href="#" class="active" id="perfil">${translations[lang].perfil}</a>`;
    document.getElementById(
      "privacidad"
    ).innerHTML = `<a href="privacidad.html" class="active" id="privacidad">${translations[lang].privacidad}</a>`;
    document.getElementById("contacto").innerHTML = 
    `<a href="https://api.whatsapp.com/send?phone=573143394021&text=${encodeURIComponent(translations[lang].mensajeWhatsApp)}" 
        class="btn" target="_blank" id="contacto">
        ${translations[lang].contacto} <i class="bx bx-message-dots"></i>
    </a>`;
    document.getElementById(
      "parrafo1"
    ).innerHTML = `<p>${translations[lang].parrafo1}</p>`;
    document.getElementById(
      "parrafo2"
    ).innerHTML = `<p>${translations[lang].parrafo2}</p>`;
    document.getElementById(
      "parrafo3"
    ).innerHTML = `<p>${translations[lang].parrafo3}</p>`;
  });
});
