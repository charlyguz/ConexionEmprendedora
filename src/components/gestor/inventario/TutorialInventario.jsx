import { inventario } from '@data/inventarioTutorial.data'

export default function TutorialInventario() {
  return (
    <div className="mt-8 flex flex-col p-l-5 p-r-5 p-b-10">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full px-1">
          <div>
            <h1 className="text-base font-semibold">
              ¿Por que es importante tener un inventario?
            </h1>
            <p className="m-t-5">
              Tener un inventario en una empresa es como tener un mapa de todo
              lo que tienes y necesitas.{' '}
            </p>
            <p className="m-b-5">
              El inventario es una lista detallada de todos los productos y
              materiales que tienes disponibles para vender o utilizar en tu
              negocio.
            </p>
          </div>

          <img
            className="justify-center items-center h-2xl w-2xl mx-auto"
            src="https://static.enko.org/platform/lessons/320/parts/1847/P2__Compu.jpg"
            alt="Inventario Coopel Emprende"
          />
          <div>
            <p className=" m-y-5">
              Para empezar a hacer un inventario desde cero, lo primero que
              debes considerar es la logística, ya que hacer el recuento de tu
              mercancía no es poca cosa. Por ello, te recomiendo seguir estos
              pasos:
            </p>

            <h2>1. Define la clasificación</h2>
            <p className="p-2 mb-5">
              Este paso implica organizar tus productos en categorías
              específicas según sus características. Por ejemplo, podrías
              clasificarlos por tipo, tamaño, o función. La clasificación te
              ayuda a entender mejor qué tienes y cómo gestionarlo.
            </p>
            <h2>2. Realiza el conteo y registra los resultados</h2>
            <p className="p-2 mb-5">
              Este paso implica organizar tus productos en categorías
              específicas según sus características. Por ejemplo, podrías
              clasificarlos por tipo, tamaño, o función. La clasificación te
              ayuda a entender mejor qué tienes y cómo gestionarlo.
            </p>

            <h2>3. Haz un recuento</h2>
            <p className="p-2 mb-5">
              Este paso implica organizar tus productos en categorías
              específicas según sus características. Por ejemplo, podrías
              clasificarlos por tipo, tamaño, o función. La clasificación te
              ayuda a entender mejor qué tienes y cómo gestionarlo.
            </p>
          </div>

          <h1 className="m-y-8 text-xl font-semibold text-gray-900">
            {' '}
            Un Ejemplo
          </h1>

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
                  Descripcion
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
              {inventario.map((inventario) => (
                <tr key={inventario.clave}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900 uppercase">
                      {inventario.clave}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900 uppercase">
                      {inventario.descripcion}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900 uppercase">
                      {inventario.existencias}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">
                      {inventario.costo_compra}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{inventario.costo_veta}</div>
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
  )
}
