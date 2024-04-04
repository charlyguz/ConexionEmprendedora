import { React, useState, useEffect } from 'react'

const CardDownload = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* <!-- Dropdown menu --> */}
      <div
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Descargar
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isVisible && (
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg  shadow-xl w-44 dark:bg-gray-700 absolute b">
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="/assets/pdf/prueba-2.pdf"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  PDF
                </a>
              </li>
              <li>
                <a
                  href="/assets/pdf/prueba-1.xls"
                  download
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Excel
                </a>
              </li>
              <li>
                <a
                  href="/assets/Sql/prueba-1.sql"
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
  )
}

export default CardDownload
