import React from 'react'
import ReactApexChart from 'react-apexcharts' // Corregido a 'react-apexcharts'

export default function IndicadoresFinancieros() {
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
            chart={options.chart}
            type="bar"
            height={250}
          />
        </div>
      )
    } else if (content === 'new') {
      return (
        <div>
          <p className="m-b-5">
            Te recomendamos ver el siguiente contenido si no tienes experiencia
            (click)
          </p>
          <div className="flex items-center justify-center">
            <a href="https://www.enko.org/mx/encoppel/seccion/analisis-de-estados-financieros-331/286">
              <img src="/assets/gestor-recursos/indices.png" alt="" />
            </a>
          </div>
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
    colors: ['#1A56DB', '#FDBA8C'],
    series: [
      {
        name: '2024',
        color: '#1A56DB',
        data: [
          { x: 'Coeficiente de liquidez', y: 1.33 },
          { x: 'Punto de equilibrio', y: 0.5 },
          { x: 'Utilidad operativa', y: 0.63 },
          { x: 'Rendimiento sobre activos', y: 0.12 },
          { x: 'Rendimiento sobre capital', y: 1.19 },
        ],
      },
    ],
    chart: {
      type: 'bar',
      height: '320px',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadiusApplication: 'end',
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  }

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-lg dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
            Indicadores Financieros
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 m-l-3">
            2024
          </p>
        </div>

        <div className="relative">
          <button
            onClick={toggleMenu} // Cambiamos el evento para que el menú se toggle con el clic
            type="button"
            data-tooltip-target="data-tooltip"
            data-tooltip-placement="bottom"
            className="inline-flex items-center justify-center text-gray-500 w-8 h-8 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
          >
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

      <div>
        {renderContent()}
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
