export default function CuentasTable ({ cuentas }) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full px-1">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Monto
                  </th>
                  <th scope="col" className="relative py-3.5 pl-1 pr-2 sm:pr-4">
                    Acciones
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {cuentas.map((cuentas) => (
                  <tr key={cuentas.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {cuentas.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      <div className="text-gray-900 uppercase">
                        {cuentas.monto}
                      </div>
                    </td>
                    <td className="flex justify-center space-x-4 py-6 items-center h-full">
                      <button
                        type="button"
                        className="text-info-400 hover:text-info"
                      >
                        <div className="i-heroicons:pencil-20-solid hw-5"></div>
                      </button>
                      <button
                        type="button"
                        className="text-danger-300/50 hover:text-danger"
                      >
                        <div className="i-heroicons:trash-20-solid hw-5"></div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <p>Estas teniendo problemas con tus cuentas?</p>
        <a href="https://www.enko.org/mx/encoppel/seccion/lecciones/41">
          <p className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  py-2">Conoce mas sobre Finanzas para tu negocio</p>
        </a>
      </div>
    </div>
  )
}
