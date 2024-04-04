export default function PuntoVentaProductsTable({
  products,
  onRemoveProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
}) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                    Código
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="relative text-sm py-3.5 pl-1 pr-2 sm:pr-4"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 min-w-full">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <p className="text-4 text-black font-semibold">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-700">
                        {product.description}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                      {product.barcode}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-bold">
                      ${product.price}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 flex items-center gap-x-2">
                      <button
                        className="text-black"
                        onClick={() => decreaseProductQuantity(product)}
                      >
                        <div className="i-heroicons:minus-circle-solid hw-6" />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="text-black"
                        onClick={() => increaseProductQuantity(product)}
                      >
                        <div className="i-heroicons:plus-circle-solid hw-6" />
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-bold">
                      ${product.price * (product.quantity || 1)}
                    </td>
                    <td className="flex justify-center space-x-4 py-6 items-center h-full">
                      <button
                        type="button"
                        className="text-danger-300/50 hover:text-danger"
                        onClick={() => onRemoveProduct(product)}
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
