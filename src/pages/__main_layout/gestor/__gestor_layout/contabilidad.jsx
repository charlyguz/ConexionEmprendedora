import { cuentas } from '@data/cuentas.data'
import { proveedores } from '@data/proveedores.data'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export default function GestorContabilidad() {
  const [isSimplified, setIsSimplified] = useState(true)
  const [openDetails, setOpenDetails] = useState(true)
  const [isOpenFilter, setIsOpen] = useState(false)
  const [data, setData] = useState({ ingresos: 200, gastos: 300, total: -100 })

  const handleFilter = (filter) => {
    let factor = 1
    switch (filter) {
      case 'Dia':
        factor = 1
        break
      case 'Semana':
        factor = 7
        break
      case 'Mes':
        factor = 30
        break
      case 'Trimestre':
        factor = 90 // Aproximadamente 90 días en un trimestre
        break
      case 'Año':
        factor = 365
        break
      default:
        factor = 1
    }

    const newData = {
      ingresos: 200 * factor,
      gastos: 300 * factor,
      total: (200 - 300) * factor,
    }

    setData(newData)
  }

  return (
    <>
      <div className=" w-full flex items-center justify-center  max-lg:pt-10 pb-8 gap-4">
        <button
          className="text-white bg-azulCoopel hover:bg-blue-800 font-medium rounded-lg text-2xl max-md:text-lg px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setIsSimplified(!isSimplified)}
        >
          {isSimplified ? 'Completo' : 'Simplificado'}
        </button>
      </div>
      <div>
        <div className={`${isSimplified ? 'block' : 'hidden'} hw-full w-full`}>
          <div className="relative ">
            <button
              onClick={() => setIsOpen(!isOpenFilter)}
              className="bg-azulCoopel  text-white hover:bg-blue-800 px-3 py-1 rounded text-lg font-semibold flex flex-row gap-1 items-center"
            >
              Filtro
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {isOpenFilter && (
              <div className="absolute mt-2 bg-white border rounded shadow w-1/4">
                <button
                  onClick={() => handleFilter('Dia')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray"
                >
                  Dia
                </button>
                <button
                  onClick={() => handleFilter('Semana')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray"
                >
                  Semana
                </button>
                <button
                  onClick={() => handleFilter('Mes')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray"
                >
                  Mes
                </button>
                <button
                  onClick={() => handleFilter('Mes')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray"
                >
                  Trimestre
                </button>
              </div>
            )}
          </div>
          <div className="m-t-2  grid gap-4 md:grid-cols-2">
            <div
              className={`${
                openDetails ? 'hidden' : 'block'
              } fixed top-20   w-4/5 right-1/10 h-4/5 bg-white border-2 border-gray-400 rounded-md z-60`}
            >
              <div className="px-6 pt-6 flex items-end">
                <XMarkIcon
                  className="h-6 w-6 "
                  onClick={() => setOpenDetails(!openDetails)}
                />
              </div>
              <TableProveedores providers={proveedores} />
            </div>
            <div className="h-full w-full bg-gray-100 rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 flex justify-center items-center">
              <div>
                <div className="flex justify-between">
                  {/* Ingresos */}
                  <div>
                    <h3 className="lg:text-4xl text-2xl font-bold leading-none text-gray-900 dark:text-white  mb-5  ">
                      Ingresos
                    </h3>
                    <p className="text-xl font-normal text-gray-800 dark:text-gray-400 w-full flex justify-center">
                      ${data.ingresos} mxn
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    className=" flex flex-col justify-center "
                    onClick={() => setOpenDetails(!openDetails)}
                  >
                    <button className="text-gray-500 hover:text-black bg-gradient-to-r font-medium rounded-lg text-base text-center">
                      Detalles
                      <div className="flex items-center justify-center ">
                        <ChevronDownIcon className="h-4 w-4" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full bg-gray-100 rounded-lg shadow dark:bg-gray-800 p-4 sm:p-6 flex justify-center items-center">
              <div className="flex justify-between">
                {/* Gastos */}
                <div>
                  <h5 className="lg:text-4xl text-2xl font-bold leading-none text-gray-900 dark:text-white pe-1 mb-5">
                    Gastos
                  </h5>
                  <p className="text-xl font-normal text-gray-800 dark:text-gray-400 flex justify-center">
                    ${data.gastos} mxn
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-t-4">
            <div className="h-full w-full bg-gray-100 rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 flex justify-center items-center">
              <div>
                <h5 className="lg:text-4xl text-2xl font-bold leading-none text-gray-900 dark:text-white pe-1 mb-5">
                  Total
                </h5>
                <p className="text-xl font-normal text-red-500 dark:text-red-500 self-center">
                  ${data.total} mxn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isSimplified ? 'hidden' : 'block'} hw-full w-full`}>
        {/* <Status /> */}

        {/* <div className="m-t-8 grid gap-4 md:grid-cols-2">
          <IngresosGraph />
          <GastosGraph />
        </div> */}

        <div className="m-t-4 grid gap-4 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
          <ActivosGraph />

          <PasivosGraph />

          <CapitalContableGraph />
        </div>

        <div className="m-t-4">
          <IndicadoresFinancieros />
        </div>

        <div className="hw-full">
          <div className="card rounded-2xl bg-white my-4" sm="px-8">
            <div className="flex flex-col" sm="flex-row justify-between">
              <div className="">
                <h1 className="mt-4 text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
                  Cuentas
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
                  placeholder="Buscar cuenta"
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
                    Agregar cuenta
                  </span>
                </button>
              </div>
            </div>
            <CuentasTable cuentas={cuentas} />
          </div>
        </div>

        <CardIA />
      </div>
    </>
  )
}
