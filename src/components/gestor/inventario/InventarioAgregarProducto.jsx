import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { classNames } from '@/utils/class-names'

export default function InventarioAgregarProducto({
  isOpen,
  setIsOpen,
  onAddProduct,
}) {
  const cancelButtonRef = useRef(null)

  const [formData, setFormData] = useState({
    barcode: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
  })

  const resetFormData = () => {
    setFormData({
      barcode: '',
      name: '',
      description: '',
      price: 0,
      stock: 0,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    const newValue =
      name === 'price'
        ? parseFloat(value)
        : name === 'stock'
        ? parseInt(value)
        : value

    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onAddProduct(formData)

    setIsOpen(false)

    resetFormData()
  }

  const onCancel = () => {
    setIsOpen(false)

    // resetFormData()
  }

  const onClose = () => {
    setIsOpen(false)

    // resetFormData()
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/65 backdrop-blur-[6px] transition-opacity sm:backdrop-blur-[8px]" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
          <div className="sm:flex min-h-full max-sm:w-full items-end sm:justify-center p-4 text-center sm:items-center sm:p-0 max-sm:pt-10">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  'relative transform overflow-hidden rounded-lg bg-gray-900/75 text-left shadow-xl transition-all',
                  'p-6',
                  'sm:p-8',
                  'ring-[2px] ring-slate-50/25',
                  'sm:w-full sm:max-w-lg sm:p-6 sm:rounded-xl'
                )}
              >
                <div className="relative isolate">
                  {/* Form title */}
                  <div className="mt-2 mb-2 sm:mb-4 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl text-center font-semibold leading-6 text-white my-4 sm:mb-6"
                    >
                      {/* Title */}
                      Agregar producto
                    </Dialog.Title>
                    <div>
                      <p className="text-gray-400 text-sm text-center sm:text-md">
                        Ingresa la información del producto
                      </p>
                    </div>
                  </div>
                  {/* End form title */}
                  <div className="mx-auto max-w-7xl">
                    <form noValidate onSubmit={handleSubmit} className="">
                      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg overflow-y-scroll-auto min-h-[45vh] max-h-[55vh]">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="barcode"
                              className="block text-sm font-semibold leading-6 text-white"
                            >
                              Código de barras
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="barcode"
                                type="text"
                                name="barcode"
                                value={formData.barcode}
                                onChange={handleChange}
                                className={classNames(
                                  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10',
                                  'focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                                  'sm:text-sm sm:leading-6'
                                )}
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-semibold leading-6 text-white"
                            >
                              Nombre del producto
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={classNames(
                                  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm',
                                  'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                                  'sm:text-sm sm:leading-6'
                                )}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="description"
                              className="block text-sm font-semibold leading-6 text-white"
                            >
                              Descripción del producto
                            </label>
                            <div className="mt-2.5">
                              <textarea
                                id="description"
                                name="description"
                                rows={2}
                                value={formData.description}
                                onChange={handleChange}
                                className={classNames(
                                  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm',
                                  'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                                  'sm:text-sm sm:leading-6'
                                )}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="price"
                              className="block text-sm font-semibold leading-6 text-white"
                            >
                              Precio
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="price"
                                type="number"
                                name="price"
                                min="0"
                                step="0.01"
                                value={formData.price}
                                onChange={handleChange}
                                className={classNames(
                                  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm',
                                  'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                                  'sm:text-sm sm:leading-6'
                                )}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="stock"
                              className="block text-sm font-semibold leading-6 text-white"
                            >
                              En existencia
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="stock"
                                type="number"
                                name="stock"
                                min="0"
                                step="0.01"
                                value={formData.stock}
                                onChange={handleChange}
                                className={classNames(
                                  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm',
                                  'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                                  'sm:text-sm sm:leading-6'
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Agregar
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={onCancel}
                          ref={cancelButtonRef}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
