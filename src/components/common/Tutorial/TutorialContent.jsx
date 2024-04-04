const TutorialContent = ({
  title,
  imageUrl,
  category,
  description,
  href,
  onIngresarCurso,
}) => {
  const [isCursoSelected, setIsCursoSelected] = useState(false)
  const [descriptionSize, setDescriptionSize] = useState('text-sm') // Tamaño inicial
  const [titleSize, setTitleSize] = useState('text-xl') // Tamaño inicial del título

  useEffect(() => {
    // Verifica la longitud del texto y ajusta el tamaño en consecuencia
    if (description.length > 100) {
      setDescriptionSize('text-xs')
    } else {
      setDescriptionSize('text-sm')
    }
  }, [description])

  useEffect(() => {
    // Verifica la longitud del título y ajusta el tamaño en consecuencia
    if (title.length > 10) {
      setTitleSize('text-lg') // Tamaño más pequeño
    } else {
      setTitleSize('text-xl') // Tamaño normal
    }
  }, [title])

  // Función para manejar el click en el botón "Ingrese al curso"
  const handleIngresarCurso = () => {
    setIsCursoSelected(true)
    onIngresarCurso({ title, imageUrl, description, href })
  }

  return (
    <div
      className="max-md:w-full sm:px-8 h-80 lg:h-96 2xl:h-[25rem] flex flex-col rounded-md md:px-2 max-md:mt-5 px-3"
      onClick={handleIngresarCurso}
    >
      <div className="h-2/6">
        <img
          className="w-full h-full  object-cover rounded-t-md"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="h-4/6 bg-primary p-2 flex flex-col justify-between rounded-b-md">
        <div className="h-4/6">
          <a href={href} className="block mt-2">
            <p className="font-medium text-sm text-center text-white">
              {title}
            </p>
            <div>
              <p className="pt-2 text-secondary-600 text-xs lg:text-sm text-center">
                {description}
              </p>
            </div>
          </a>
        </div>
        <div className="h-2/6 flex items-center justify-center">
          <button
            className="bg-white rounded-lg px-4 py-2 font-bold"
            onClick={handleIngresarCurso}
          >
            Ingrese al curso
          </button>
        </div>
      </div>
    </div>
  )
}

export default TutorialContent
