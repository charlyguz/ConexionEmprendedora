import { inventarioProductos } from '@data/punto-de-venta.data'
import { LOCAL_STORAGE_KEYS } from '@helpers/constants'

export default function GestorInventario() {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
  const [products, setProducts] = useLocalStorageState(
    LOCAL_STORAGE_KEYS.PRODUCTS,
    {
      defaultValue: inventarioProductos,
    }
  )

  const onAddProduct = (product) => {
    // Add product to inventory at top
    setProducts([product, ...products])
  }

  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow(true)
  }

  const handleNotShow = () => {
    setIsShow(false)
  }

  return (
    <>
      {!isShow ? (
        <div className="w-full">
          <div className="card rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between">
              <button
                className="inline-flex items-center justify-center space-x-2 rounded-md bg text-blue-600  hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100  px-4 py-2 font-medium shadow-sm self-end"
                type="button"
                onClick={handleShow}
              >
                Si tengo experiencia
              </button>

              {/* Texto "Inventarios" centrado */}
              <div className="flex-grow justify-center items-center text-center p-r-40">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Inventarios
                </h1>
              </div>
            </div>

            <TutorialInventario />
          </div>
        </div>
      ) : (
        <>
          <InventarioAgregarProducto
            isOpen={isAddProductModalOpen}
            setIsOpen={setIsAddProductModalOpen}
            onAddProduct={onAddProduct}
          />
          <div className="hw-full">
            <div className="card rounded-2xl" sm="px-8">
              <button
                className="inline-flex items-center justify-center space-x-2 rounded-md bg text-blue-600  hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100  px-4 py-2 font-medium shadow-sm self-end"
                type="button"
                onClick={handleNotShow}
              >
                No tengo experiencia
              </button>
              <div className="flex flex-col" sm="flex-row justify-between">
                <div className="">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Inventarios
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
                    placeholder="Buscar producto"
                  />
                  <button
                    type="file"
                    accept=".xlsx,.xls"
                    className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary-600 px-4 py-2 font-medium shadow-sm"
                    text="sm secondary"
                    hover="bg-primary-700"
                    focus="outline-none ring-2 ring-primary ring-offset-2"
                    border="~ transparent"
                    sm="w-auto rounded-full px-3"
                  >
                    <div className="i-heroicons:plus-circle hw-5"></div>
                    <span sm="hidden" lg="block">
                      Importar Excel o Base de Datos
                    </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary-600 px-4 py-2 font-medium shadow-sm"
                    text="sm secondary"
                    hover="bg-primary-700"
                    focus="outline-none ring-2 ring-primary ring-offset-2"
                    border="~ transparent"
                    sm="w-auto rounded-full px-3"
                    onClick={() => setIsAddProductModalOpen(true)}
                  >
                    <div className="i-heroicons:plus-circle hw-5"></div>
                    <span sm="hidden" lg="block">
                      Agregar producto
                    </span>
                  </button>
                </div>
              </div>

              <TableInventario products={products} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
