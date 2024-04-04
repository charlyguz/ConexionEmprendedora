import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { classNames } from '@utils/class-names'
import { Fragment } from 'react'

const gestorPath = '/gestor'

const pages = [
  {
    name: 'Punto de venta',
    to: `${gestorPath}/punto-de-venta`,
    icon: 'i-heroicons:shopping-cart',
  },
  {
    name: 'Contabilidad',
    to: `${gestorPath}/contabilidad`,
    icon: 'i-heroicons-chart-pie',
  },
  {
    name: 'Inventario',
    to: `${gestorPath}/inventario`,
    icon: 'i-heroicons:archive-box',
  },
  {
    name: 'Ventas',
    to: `${gestorPath}/ventas`,
    icon: 'i-heroicons:truck',
  },
  {
    name: 'Extras',
    to: '/extras',
    icon: 'i-heroicons:cube',
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <Popover className="relative z-5">
      <div className="grid grid-cols-3 lg:grid-cols-4 items-center bg-azulCoopel px-4 py-5">
        {/* LOGO */}
        <div className="ml-4 justify-items-start hidden lg:flex">
          <Link to="/">
            <span className="sr-only">Logo Conexion Emprendedora</span>
            <Logo />
          </Link>
        </div>

        {/* 3bars Mobile */}
        <div className="md:m-l-4 lg:hidden ">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-end text-white hover:text-amarilloCoopel  focus:outline-none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className="hidden lg:flex lg:justify-center lg:text-center lg:items-center"
          lg="gap-8 col-start-2 col-end-4"
        >
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.to}
              className="font-medium text-white hover:text-amarilloCoopel w-max"
            >
              {page.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center lg:hidden">
          {pages
            .filter((page) => {
              // Aquí aplicamos la lógica para mostrar solo ciertos elementos basados en la ruta
              // Por ejemplo, si solo quieres mostrar elementos que no sean '#'
              return location.pathname.startsWith(page.to) || page.to === '#'
            })
            .map((solution) => (
              <Link key={solution.name} to={solution.to}>
                <div className="text-white">
                  <solution.icon className="h-10 w-10" aria-hidden="true" />
                </div>
              </Link>
            ))}
        </div>

        {/* Boton usuario */}
        <div className="md:m-r-4 flex justify-end ">
          <a to="#" className="whitespace-nowrap text-base font-medium ">
            <UserCircleIcon className="h-10 w-10 text-white hover:text-amarilloCoopel" />
          </a>
        </div>
      </div>

      {/* Desplegable */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Contenido desplegable */}
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-65"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div aria-hidden="true">
                  {/* Logo */}
                  <span className="sr-only">Logo Conexion Emprendedora</span>
                  <Popover.Button as={Link} to="/">
                    <Logo isDark />
                  </Popover.Button>
                </div>

                {/* Texto Menu */}
                <div>
                  <p className="text-black ml-5 font-bold">Menu</p>
                </div>

                {/* Boton cerrar */}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                {/* Contenido del dezplegable */}
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {pages.map((solution) => (
                    <Popover.Button
                      as={Link}
                      key={solution.name}
                      to={solution.to}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-amarilloCoopel/[0.2]"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-black">
                        <div
                          className={classNames(solution.icon, 'h-6 w-6')}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-4 font-medium text-black">
                        {solution.name}
                      </div>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5">{/* footer del dezplegable aqui */}</div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
