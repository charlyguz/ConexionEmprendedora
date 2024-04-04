export default function TableInventario({ products }) {
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
                    Clave
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Nombre/Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Existencias
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Costo compra
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Costo venta
                  </th>
                  <th scope="col" className="relative py-3.5 pl-1 pr-2 sm:pr-4">
                    Acciones
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product) => (
                  <tr key={product.id}>
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        {inventario.image && (
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={inventario.image}
                              alt=""
                            />
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {inventario.name}
                          </div>
                          <div className="text-gray-500">{inventario.email}</div>
                        </div>
                      </div>
                    </td> */}

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900 uppercase">
                        {product.barcode}
                      </div>
                    </td>

                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <p className="text-4 text-black font-semibold">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-700">
                        {product.description}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900 uppercase">
                        {product.stock}
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{product.price}</div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{product.price}</div>
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
    </div>
  )
}
