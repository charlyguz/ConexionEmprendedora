import React, { useState, useEffect } from 'react'
import * as TutorialPreview from '@/data/tutorial.data'

const TutorialesRutas = ({ courses, onRegresarMenu, Nombre_ruta }) => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showMenu, setShowMenu] = useState(false) // Estado para controlar si se muestra el menú en dispositivos móviles

  // Función para manejar el clic en un curso
  const handleCourseClick = (courseTitle) => {
    // Buscar el curso en todas las secciones
    let selected = null
    Object.values(TutorialPreview).forEach((seccion) => {
      if (Array.isArray(seccion)) {
        // Verifica si seccion es un array
        const cursoEncontrado = seccion.find(
          (curso) => curso.title === courseTitle
        )
        if (cursoEncontrado) {
          selected = cursoEncontrado
          return // Salir del bucle forEach si se encuentra el curso
        }
      }
    })

    if (selected) {
      setSelectedCourse(selected)
    } else {
      console.log('Curso no encontrado')
    }
  }

  // Función para manejar el regreso al menú principal
  const handleRegresar = () => {
    setSelectedCourse(null)
    onRegresarMenu() // Llama a la función de callback para regresar al menú de Tutoriales
  }

  // Se ejecuta al cargar la sección
  useEffect(() => {
    // Verificar si hay cursos en la lista
    if (Object.values(courses).length > 0) {
      // Obtener el título del primer curso en la lista
      const primerCurso = Object.values(courses)[0]
      // Llamar a handleCourseClick con el título del primer curso
      handleCourseClick(primerCurso)
    }
  }, [courses]) // Ejecutar solo cuando cambia la lista de cursos

  return (
    <div className="flex py-8">
      <div
        className={`lg:w-1/7 lg:bg-primary ${
          showMenu ? 'bg-white' : 'bg-primary'
        } p-4 flex-shrink-0`}
      >
        <div className="lg:hidden flex justify-end mb-4">
          {/* Botón de hamburguesa para mostrar/ocultar el menú en dispositivos móviles */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-600 focus:outline-none bg-white rounded-sm"
          >
            <img
              src={
                showMenu
                  ? 'https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png'
                  : 'https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png'
              }
              alt="Icono de hamburguesa"
              className="h-6 w-6"
            />
          </button>
        </div>
        {/* Aplicar la clase 'hidden' para ocultar el menú en dispositivos móviles cuando 'showMenu' es falso */}
        <ul
          className={`mt-4 ${
            showMenu ? 'block' : 'hidden'
          } lg:block overflow-y-auto lg:overflow-y-visible lg:pr-4`}
        >
          {Object.values(courses).map((course, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-xl bg-gray-100 p-2 my-5 text-primary hover:underline mb-2"
              onClick={() => handleCourseClick(course)}
            >
              {course}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 lg:min-w-auto p-4 lg:pr-10 lg:ml-20">
        {selectedCourse ? (
          <div className="">
            <TutorialDetails
              curso={selectedCourse}
              onRegresar={handleRegresar}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TutorialesRutas
