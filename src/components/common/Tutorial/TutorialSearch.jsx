import { useState } from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const TutorialSearch = ({ curso, onCursoSeleccionado }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(curso)
  const [showResults, setShowResults] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    const filtered = curso.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredPosts(filtered)
    setShowResults(event.target.value.length > 0)
  }

  const handleCursoSelection = (selectedCurso) => {
    onCursoSeleccionado(selectedCurso)
  }

  // Agrupa los cursos por categoría
  const categorias = {}
  filteredPosts.forEach((post) => {
    if (!categorias[post.category.name]) {
      categorias[post.category.name] = []
    }
    categorias[post.category.name].push(post)
  })

  return (
    <div className="w-full relative text-gray-400">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
        <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar en tutoriales"
        className="block w-full pl-10 placeholder-gray-500 sm:text-base focus:ring-0 bg-secondary
        rounded-2xl border-b  focus:border-none border-none "
      />
      {showResults && (
        <div className="bg-white absolute w-full z-5 mt-2 border border-gray-300 max-h-80 overflow-y-auto">
          <ul className="px-3 py-2">
            {/* Itera sobre cada categoría y muestra los cursos filtrados */}
            {Object.entries(categorias).map(([categoria, cursos]) => (
              <li key={categoria}>
                <div className="font-normal text-gray-800">{categoria}</div>
                <ul>
                  {cursos.map((curso) => (
                    <li key={curso.title}>
                      <button
                        className="text-gray-600 ml-10"
                        onClick={() => handleCursoSelection(curso)}
                      >
                        {curso.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TutorialSearch
