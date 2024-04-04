import {
  BuildingStorefrontIcon,
  CalculatorIcon,
  FilmIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'

const imagenes = [
  'assets/fundacion.png',
  'assets/talentLand.png', // Asegúrate de tener estas imágenes en tu carpeta public
  'assets/conexionEmprendedoraBanner.png',
]

export default function index() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
        ),
      1500 // Intervalo de 1.5 segundos entre cada imagen
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  return (
    <>
      <div className="bg-white">
        <main>
          {/* Hero section */}
          <div className="relative">
            <div
              className="absolute
             bottom-0 h-1/2"
            />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden rounded-2xl">
                <div className="absolute inset-0 m-t-5">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-amarilloCoopel mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      CONEXION EMPRENDEDORA
                    </span>
                    <span className="block text-gray-300">
                      Emprendedores conectados
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-300 sm:max-w-3xl">
                    Creando un mejor lugar para vivir atraves de la tecnologia.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-1 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-white font-medium rounded-md shadow-sm text-black bg-azulCoopel sm:px-8"
                      >
                        Empieza Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Banner */}

          <div className=" from-primary ">
            <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="mb-10 text-center text-sm font-semibold uppercase text-black tracking-wide">
                SPONSORS
              </p>

              {/* Mobile */}
              <div className="flex w-full justify-center md:hidden">
                <div className="flex overflow-hidden w-full gap-15 ">
                  {/* Renderizar tres veces la imagen actual */}
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <img
                      key={idx}
                      src={imagenes[currentIndex]}
                      alt={`Slide ${currentIndex}`}
                      className="md:w-82 lg:w-1/3 sm:w-full h-25 scale-75"
                    />
                  ))}
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex justify-between md:mx-5 lg:mx-25 md:gap-10 lg:gap-15">
                <img
                  sm="w-xs h-20"
                  md="w-xs h-20"
                  src="assets/fundacion.png"
                  alt="Fundacion Coopel"
                />
                <img
                  sm="w-sm h-25"
                  md="w-xs h-25"
                  src="assets/talentLand.png"
                  alt="Talent Land"
                />
                <img
                  sm="w-xs h-20 hidden lg:inline"
                  md="w-xs h-20"
                  src="assets/conexionEmprendedoraBanner.png"
                  alt="Conexion Empresarial"
                />
              </div>
            </div>
          </div>

          {/* seccion que es conexion emprendedora */}
          <div className="max-w-screen mx-auto my-auto pt-8 text-black ">
            <div className="w-7/8 h-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="flex justify-center items-center">
                <img
                  src="/assets/que-es-landing.png"
                  alt="imagen analizando graficas sin fondo"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h2 className="mb-15 text-3xl font-extrabold tracking-tight text-black text-center">
                    ¿Qué es?
                  </h2>
                  <div className="w-full h-full bg-black mb-3"></div>
                  <p className="p-3 mt-4 mb-4 text-base font-normal text-md lg:text-xl  text-blacke">
                    Esta aplicación facilita el crecimiento, regularización y
                    aprendizaje en el manejo de negocios para los propietarios
                    de microempresas en México. Nos enfocamos en mejorar la
                    operatividad empresarial al ofrecer un punto de venta rápido
                    y eficiente. Esta herramienta ayuda significativamente a
                    reducir errores humanos y optimiza el proceso de cobro de
                    productos, lo que se traduce en una experiencia más fluida
                    tanto para los propietarios como para los clientes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* aqui va el roadmap */}
          {/* ---------------------Roadmap--------------------- */}
          <div className="my-10 mx-10 md:mx-60 lg:mx-120">
            <h2 className="mb-15 text-3xl font-extrabold tracking-tight text-black text-center">
              Roadmap
            </h2>

            <ol className="relative border-s border-azulCoopel ">
              {/* Gestor */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-8 ring-azulCoopel/[0.7]">
                  <CalculatorIcon className="w-4 h-4 text-blue-800" />
                </span>
                <h3 className="m-l-4 flex items-center mb-1 text-lg font-bold text-black lg:text-xl ">
                  Contabilidad
                  <span className="flex gap-1 bg-purple-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    IA <SparklesIcon className="w-3 h-3 mt-1" />
                  </span>
                </h3>
                <p className="mt-4 mb-4 text-base font-normal text-black lg:text-xl">
                  Presentamos dos versiones: una simplificada para una rápida
                  comprensión de la salud financiera de su negocio en diferentes
                  periodos de tiempo, y otra completa para análisis más
                  detallados. Y cuando estés listo para crecer, nuestra versión
                  completa, junto con los cursos de Coppel Emprende y su amigo
                  inteligente, la guiará hacia el éxito.
                </p>
                <Link
                  to="/gestor"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-700  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Visitar
                </Link>
              </li>

              {/* Marketplace */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-8 ring-azulCoopel/[0.7]">
                  <BuildingStorefrontIcon className="w-4 h-4 text-blue-800" />
                </span>
                <h3 className="m-l-4 flex items-center mb-1 text-lg font-bold text-black lg:text-xl">
                  Punto de venta
                </h3>
                <p className="mt-4 mb-4 text-base font-normal text-black lg:text-xl">
                  El punto de venta es la piedra angular de nuestra aplicacion,
                  ya que representa la herramienta principal para los usuarios.
                  Con un enfoque en la esencia de la gestion de efectivo y la
                  visualizacion como registro de los productos vendidos al
                  momento, nuestro punto de venta ofrece un experiencia amigable
                  y eficiente. Para priorizar el facil uso y el entendimiento
                  intuitivo del punto de venta, hemos desarrollado una interfaz
                  simplificada y limpia, con botones claramente etiquetados para
                  una experiencia sin complicaciones ayudando a generar una .
                </p>
                <Link
                  to="/gestor/punto-de-venta"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-700  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Visitar
                </Link>
              </li>

              {/* Comunidad */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-8 ring-azulCoopel/[0.7]">
                  <UsersIcon className="w-4 h-4 text-blue-800" />
                </span>
                <h3 className="m-l-4 flex items-center mb-1 text-lg font-bold text-black lg:text-xl">
                  Inventario
                </h3>
                <div className="lg:text-xl">
                  <p className="mt-4 mb-4 text-base font-normal text-black">
                    Permite una administración sencilla y visual del inventario.
                    Esta sección está diseñada para simplificar la actualización
                    y gestión de productos, garantizando actualizaciones
                    automáticas de cada producto dentro de tu negocio.
                  </p>
                </div>
                <Link
                  to="/gestor/inventario"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-700  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Visitar
                </Link>
              </li>

              {/* Ventas */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-8 ring-azulCoopel/[0.7]">
                  <UsersIcon className="w-4 h-4 text-blue-800" />
                </span>
                <h3 className="m-l-4 flex items-center mb-1 text-lg font-bold text-black lg:text-xl">
                  Ventas
                </h3>
                <div className="lg:text-xl">
                  <p className="mt-4 mb-4 text-base font-normal text-black">
                    Esta funcionalidad proporciona una vista integral y
                    detallada de todas las transacciones realizadas a través de
                    nuestro punto de venta integrado, facilitando a los usuarios
                    el monitoreo y análisis de la salud financiera de su empresa
                    de manera eficiente.
                  </p>
                </div>
                <Link
                  to="//gestor/ventas"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-700  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Visitar
                </Link>
              </li>
            </ol>
          </div>
          {/* ---------------------Roadmap--------------------- */}

          {/* AI sections explaning */}
          <div className="relative pt-16 pb-32 overflow-hidden ">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />

            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                        <SparklesIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-black">
                        Tu amigo inteligente estara SIEMPRE contigo
                      </h2>
                      <p className="mt-4 text-lg text-black">
                        PERO LO MEJOR ES QUE SIEMPRE TENDRAS UN AMIGO
                        INTELIGENTE EN TU CAMINO CON EL ANALISIS PERSONALIZADO
                        DE NUESTRA IA PUEDES DARLE ESE BOOST QUE NECESITA TU
                        NEGOCIO.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        >
                          Empieza Ahora con AI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-3 ring-purple-600 ring-opacity-100 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/assets/ejemplo-layoutIA.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
