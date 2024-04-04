import ReactApexChart from 'react-apexcharts' // Corregido a 'react-apexcharts'

export default function ActivosGraph() {
  const [isActivated, setIsActivated] = useState(false)

  const handleClick = () => {
    changeContent() // Llama a la primera función
    toggleButton() // Llama a la segunda función
  }

  const toggleButton = () => {
    // Cambia el estado cada vez que el botón es clickeado
    setIsActivated(!isActivated)
  }

  const [content, setContent] = useState('initial')

  const changeContent = () => {
    setContent((prevContent) => (prevContent === 'initial' ? 'new' : 'initial'))
  }

  const renderContent = () => {
    if (content === 'initial') {
      return (
        <div>
          <ReactApexChart
            options={options}
            series={options.series}
            type="donut"
            height={250}
          />
        </div>
      )
    } else if (content === 'new') {
      return (
        <div>
          <p className="m-b-5">
            Te recomendamos ver el siguiente video si no tienes experiencia
          </p>
          <video className="w-full" height="250" controls>
            <source
              src="https://static.enko.org/videos/enko_08-08-22/p3_+video(3).mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
          {/* <p className='m-t-5'>Recuerda si  tienes una pregunta pudes consultarlo con nuestro chat inteligente</p> */}
        </div>
      )
    }
  }

  const [isVisibleDownload, setIsVisibleDownload] = useState(false)

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsVisibleDownload(!isVisibleDownload)
  }

  const options = {
    series: [25.4, 15.2, 23.5, 2.4, 5.4, 1.5],
    colors: ['#1C64F2', '#FC54F8', '#16BDCA', '#FDBA8C', '#E74694', '#00FF52'],
    chart: {
      height: 320,
      width: '100%',
      type: 'donut',
      redrawOnWindowResize: true,
    },
    stroke: {
      colors: ['transparent'],
      lineCap: '',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Total',
              fontFamily: 'Inter, sans-serif',
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
                return '$' + sum + 'k'
              },
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: function (value) {
                return value + 'k'
              },
            },
          },
          size: '80%',
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: [
      'Caja',
      'Bancos',
      'Cuentas por cobrar',
      'Inventarios',
      'Activos fijos',
      'Inversiones',
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif',
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k'
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k'
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  }

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-md dark:bg-gray-800 p-4 md:p-6 grid">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
            Activos
          </h5>
        </div>

        <div className="relative">
          <button
            onClick={toggleMenu} // Cambiamos el evento para que el menú se toggle con el clic
            type="button"
            data-tooltip-target="data-tooltip"
            data-tooltip-placement="bottom"
            className="inline-flex items-center justify-center text-gray-500 w-8 h-8 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
          >
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
            <span className="sr-only">Download data</span>
          </button>

          {isVisibleDownload && (
            <div className="z-1 bg-white divide-y divide-gray-100 rounded-lg shadow-xl border border-gray-200 w-44 dark:bg-gray-700 absolute right-0 mt-2">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li onClick={toggleMenu}>
                  <a
                    href="/assets/pdf/prueba-2.pdf"
                    download
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    PDF
                  </a>
                </li>
                <li onClick={toggleMenu}>
                  <a
                    href="/assets/pdf/prueba-1.xls"
                    download
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Excel
                  </a>
                </li>
                <li onClick={toggleMenu}>
                  <a
                    href="/assets/Sql/prueba-1.sql"
                    download
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Base de datos
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">{renderContent()}</div>

      <div className="flex items-end">
        <button
          className="mt-5 uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          onClick={handleClick}
        >
          {isActivated ? 'Ya tengo experiencia' : 'Conocer mas'}
        </button>
      </div>
    </div>
  )
}
