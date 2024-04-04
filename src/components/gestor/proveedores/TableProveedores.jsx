export default function TableProveedores({ providers }) {
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
                    Fecha
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Cantidad
                  </th>
                  {/* <th scope="col" className="relative py-3.5 pl-1 pr-2 sm:pr-4">
                    Acciones
                    <span className="sr-only">Acciones</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {providers.map((provider) => (
                  <tr key={provider.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        {provider.image && (
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={provider.image}
                              alt=""
                            />
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {provider.name}
                          </div>
                          <div className="text-gray-500">{provider.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900 uppercase">
                        {provider.status}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{provider.phone}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{provider.cantidad}</div>
                    </td>

                    {/* <td className="flex justify-center space-x-4 py-6 items-center h-full">
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
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
