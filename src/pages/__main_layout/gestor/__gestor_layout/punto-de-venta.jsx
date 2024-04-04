import { inventarioProductos } from '@data/punto-de-venta.data'
import { LOCAL_STORAGE_KEYS } from '@helpers/constants'

export default function PuntoDeVenta() {
  const [products] = useLocalStorageState(LOCAL_STORAGE_KEYS.PRODUCTS, {
    defaultValue: inventarioProductos,
  })

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
        <div className=" m-t-10 text-lg md:text-2xl font-bold">
          <p className="m-b-10 flex justify-center">
            Bienvenido a tu punto de venta
          </p>
          <div className="w-70 h-70 flex justify-center" md="w-xs h-xs">
            <img src="/assets/gestor-recursos/POS.png" alt="nada" />
          </div>
        </div>
      )
    } else if (content === 'new') {
      return (
        <div className="card w-full min-h-3xl z-1">
          {showQr && (
            <div className="absolute h-1/3 w-1/3 justify-center items-center z-2 top-0 left-0 right-0 bottom-0 m-auto">
              <div className="relative">
                <button
                  className="bg-black  rounded-lg text-white px-4 py-2 font-semibold absolute top-0 right-0 mt-4 mr-4 z-2"
                  onClick={handleNotShowQr}
                >
                  Cerrar
                </button>
                <Qr2 />
              </div>
            </div>
          )}
          <h1 className="text-3xl font-semibold mb-6">Nueva venta</h1>
          <div className="w-full" lg="w-1/2">
            <PuntoVentaSearch products={products} onAddProduct={addProduct} />
          </div>

          <div className="flex"></div>

          <div className="my-6 flex flex-col gap-y-4" lg="flex-row gap-x-10">
            <p
              className="text-2xl font-bold text-center w-full"
              md="text-left text-3xl w-max"
            >
              Total a pagar: ${total}
            </p>
            <div
              className="flex text-sm justify-around"
              lg="ml-auto gap-x-20 text-4"
            >
              <button
                className="bg-black  rounded-lg text-white px-2 py-1 sm:px-4 sm:py-2 font-semibold flex items-center gap-x-2"
                onClick={handleShowQr}
              >
                <div className="i-heroicons-qr-code sm:hw-6 hw-4" />
                Escanear
              </button>
              <button
                className="bg-success rounded-lg text-white  px-2 py-1  sm:px-4 sm:py-2 font-semibold flex items-center gap-x-2 cursor-pointer"
                disabled={toSaleProducts.length === 0}
              >
                <div className="i-heroicons:check-20-solid sm:hw-6 hw-4" />
                Finalizar
              </button>

              <button className="bg-danger rounded-lg text-white px-2 py-1  sm:px-4 sm:py-2 font-semibold flex items-center sm:gap-x-2">
                <div className="i-heroicons:x-mark-20-solid sm:hw-6 hw-4" />
                Cancelar
              </button>
            </div>
          </div>
          <div className="px-4" md="px-0">
            {/* Tabla de productos */}
            <PuntoVentaProductsTable
              products={toSaleProducts}
              onRemoveProduct={removeProduct}
              increaseProductQuantity={increaseProductQuantity}
              decreaseProductQuantity={decreaseProductQuantity}
            />
          </div>
        </div>
      )
    }
  }

  const [toSaleProducts, setToSaleProducts] = useState([])
  const [showQr, setShowQr] = useState(false)

  const handleShowQr = () => {
    setShowQr(true)
  }

  const handleNotShowQr = () => {
    setShowQr(false)
  }

  const total = useMemo(() => {
    return toSaleProducts.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1)
    }, 0)
  }, [toSaleProducts])

  const addProduct = (product) => {
    setToSaleProducts((prev) => [...prev, { ...product, quantity: 1 }])
  }

  const clearProducts = () => {
    setToSaleProducts([])
  }

  const removeProduct = (product) => {
    setToSaleProducts((prev) => prev.filter((item) => item.id !== product.id))
  }

  const increaseProductQuantity = (product) => {
    setToSaleProducts((prev) =>
      prev.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    )
  }

  const decreaseProductQuantity = (product) => {
    setToSaleProducts(
      (prev) =>
        prev.map((item) => {
          if (item.id === product.id) {
            // if (item.quantity === 1) {
            //   return undefined
            // }

            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          }
          return item
        })
      // .filter(Boolean)
    )
  }

  return (
    <div>
      <div className="flex items-center justify-center">{renderContent()}</div>

      <div className="flex items-center justify-center">
        <button
          className="max-md:mt-6 mt-5 uppercase text-sm font-semibold inline-flex items-center rounded-lg text-white  bg-azulCoopel dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-3 "
          onClick={handleClick}
        >
          {isActivated ? 'Terminar jornada' : 'Iniciar Jornada'}
        </button>
      </div>
    </div>
  )
}
