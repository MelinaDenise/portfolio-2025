# Portfolio Personal 2025 – Melina Denise Gallo

Este es mi **portfolio personal**, desarrollado durante el segundo semestre de la tecnicatura. Incluye los contenidos de las 10 clases de Git y GitHub, así como ejemplos prácticos de mis conocimientos y proyectos.

---

## Contenido del Portfolio

1. **Carátula** – Imagen principal del portfolio.  
2. **Sobre mí** – Presentación personal, objetivos y perfil profesional.  
3. **Educación** – Formación académica y cursos.  
4. **Experiencia Laboral** – Resumen de trabajos y prácticas profesionales.  
5. **Mi trabajo** – Proyectos realizados y ejemplos prácticos.  
6. **Gracias** – Cierre y contacto.

---

## Resumen de las Clases

- **Clase 1:** Uso de GitHub, creación de repositorios, configuración de README.md y primeros commits locales y remotos.  
- **Clase 2:** Configuración de llaves SSH, sincronización de repositorios locales con GitHub y manejo básico de ramas.  
- **Clase 3:** Cambio de rama principal de `master` a `main`, instalación y uso de `gitk` para historial gráfico y commits visuales.  
- **Clase 4:** Primer push de archivos, creación de README.md y buenas prácticas para commits y organización de carpetas.  
- **Clase 5:** Uso de **tags** para marcar versiones estables en GitHub y cómo listarlos.  
- **Clase 6:** Manejo de errores al crear tags duplicados y solución de conflictos.  
- **Clase 7:** Gestión avanzada de tags y control de versiones en repositorios colaborativos.  
- **Clase 8:** Manejo de ramas en GitHub: creación, fusión (merge) y organización de ramas de desarrollo.  
- **Clase 9:** Configuración de múltiples colaboradores en un repositorio, permisos y buenas prácticas de trabajo en equipo.  
- **Clase 10:** Flujo de trabajo profesional: merge de ramas de desarrollo a `main`, control de versiones y commits descriptivos.

---

## Tecnologías utilizadas

- HTML5  
- CSS3  
- Git y GitHub  
- Visual Studio Code

---

## Comandos principales utilizados

```bash
# Inicialización y conexión con remoto
git init
git remote add origin git@github.com:MelinaDenise/portfolio-2025.git

# Manejo de archivos
git add .
git commit -m "Mensaje descriptivo"
git push origin main

# Manejo de ramas
git branch
git checkout main
git merge <rama>
git branch -M main
git config --global init.defaultBranch main

# Sincronización
git pull origin main
git fetch

# Manejo de tags
git tag
git tag <nombre_tag>
git push origin <nombre_tag>