import { proveedores } from '@data/proveedores.data'

export default function GestorProveedores() {

  const [isVisible, setIsVisible] = useState(false)

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="hw-full">
      <div className="card rounded-2xl" sm="px-8">
        <div className="flex flex-col" sm="flex-row justify-between">
          <div className="">
            <h1 className="text-2xl font-semibold text-gray-900">
              Ventas
            </h1>
          </div>
          <div
            className="mt-2 flex flex-col gap-y-2"
            sm="flex-row items-stretch justify-around gap-x-2 mt-0"
            lg="gap-x-4"
          >
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm"
              sm="w-64"
              lg="w-96"
              placeholder="Buscar"
            />

            <button
              type="button"
              className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary-600 px-4 py-2 font-medium shadow-sm"
              text="sm secondary"
              hover="bg-primary-700"
              focus="outline-none ring-2 ring-primary ring-offset-2"
              border="~ transparent"
              sm="w-auto rounded-full px-3"
            >
              <div className="i-heroicons:plus-circle hw-5"></div>
              <span sm="hidden" lg="block">
                Agregar venta
              </span>
            </button>

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

              {isVisible && (
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
        </div>
        <TableProveedores providers={proveedores} />
      </div>
    </div>
  )
}
