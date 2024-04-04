import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as TutorialPreview from '@/data/tutorial.data'

// funcion para ingreso al curso
export function handleIngresarCurso(curso) {
  console.log('Ingresando al curso tutorial:', curso)
}

export default function Tutoriales() {
  const [forceUpdate, setForceUpdate] = useState(false) // Nuevo estado para forzar la actualización del componente
  const [activeSection, setActiveSection] = useState(1) // Estado para rastrear la sección activa
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null)

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow())

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function getSlidesToShow() {
    const width = window.innerWidth
    if (width < 640) {
      return 1
    } else if (width < 1024) {
      return 2
    }

    return 3
  }

  //asignar valor de sidebar
  const handleNavClick = (sectionNumber) => {
    setActiveSection(sectionNumber)
  }
  // ingreso ah algun curso
  const handleIngresarCurso = (curso) => {
    console.log('Ingresando al curso tutorial:', curso)
    setCursoSeleccionado(curso)
    console.log('ya hizo set')
    setForceUpdate(!forceUpdate)
  }
  //tambien es un ingreso al curso pero general se usa en el search
  const handleCursoSeleccionado = (curso) => {
    setCursoSeleccionado(curso)
  }
  //valor para regresar a  Tutoriales
  const handleRegresar = () => {
    setCursoSeleccionado(null)
  }
  // Renderiza el detalle del curso seleccionado si existe
  if (cursoSeleccionado) {
    return (
      <div className="relative w-full bg-primary pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-h-full overflow-y-auto lg:static">
          <TutorialDetails
            curso={cursoSeleccionado}
            onRegresar={handleRegresar}
          />
        </div>
      </div>
    )
  }

  if (activeSection === 0) {
    return (
      <div className="w-full bg-primary">
        <TutorialesRutas
          courses={TutorialPreview.Ruta1}
          onRegresarMenu={() => setActiveSection(1)}
          Nombre_ruta="Ruta 1"
        />
      </div>
    )

    // Agrega más condiciones para más rutas según sea necesario
  }

  //slide de rutas
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  }

  return (
    <>
      {/* serchbar */}
      <div className="w-full mt-4">
        <div className="max-sm:mx-10 sm:mx-14 md:mx-24 xl:mx-64">
          <TutorialSearch
            curso={[
              ...TutorialPreview.Seccion1Posts,
              ...TutorialPreview.Seccion2Posts,
              ...TutorialPreview.Seccion3Posts,
            ]}
            onCursoSeleccionado={handleCursoSeleccionado}
          />
        </div>
      </div>
      {/* Slider de rutas */}
      <div className="lg:px-40 md:px-30 w-full flex mt-8">
        <div className="max-sm:px-12 max-md:px-16 w-full">
          <Slider {...settings} className="first-slider">
            <div className=" slick-slide">
              <TutorialRutaContent
                img={TutorialPreview.Ruta1img}
                title={TutorialPreview.Ruta1title}
                desc={TutorialPreview.Ruta1desc}
                onClick={() => setActiveSection(0)}
              />
            </div>
            <div className="slick-slide">
              <TutorialRutaContent
                img={TutorialPreview.Ruta1img}
                title={TutorialPreview.Ruta2title}
                desc={TutorialPreview.Ruta1desc}
                onClick={() => setActiveSection(0)}
              />
            </div>

            <div className="slick-slide">
              <TutorialRutaContent
                img={TutorialPreview.Ruta1img}
                title={TutorialPreview.Ruta3title}
                desc={TutorialPreview.Ruta1desc}
                onClick={() => setActiveSection(0)}
              />
            </div>

            <div className="slick-slide">
              <TutorialRutaContent
                img={TutorialPreview.Ruta1img}
                title={TutorialPreview.Ruta4title}
                desc={TutorialPreview.Ruta1desc}
                onClick={() => setActiveSection(0)}
              />
            </div>
            {/* Agrega más elementos según sea necesario */}
          </Slider>
        </div>
      </div>

      {/* contenido de tutoriales  */}
      <div className="w-full bg-primary h-2/3 mt-16">
        <div className="lg:px-20 w-full max-sm:10px">
          <div className="w-full pt-4 pb-7 bg-white rounded-md px-8">
            <TutorialesSection
              title={TutorialPreview.Title5}
              texto={TutorialPreview.Texto5}
              posts={TutorialPreview.Seccion5Posts}
              onCursoSeleccionado={handleCursoSeleccionado} // Pasa la función de manejo de curso seleccionado
              onIngresarCurso={handleIngresarCurso} // Pasa la función de manejo de ingreso al curso
            />
          </div>

          {/* otras secciones */}
        </div>
      </div>
      {/* Barra de navegación movil */}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0">
        {/* <SideBar handleNavClick={handleNavClick}/> */}
      </div>
    </>
  )
}
