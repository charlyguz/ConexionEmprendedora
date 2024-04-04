/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ScaleIcon,
  NewspaperIcon,
  BarsIcon,
  UserGroupIcon,
  TableCellsIcon,
  XMarkIcon,
  ChevronDownIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  FilmIcon,
} from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/24/outline'

const gestorEmpresarial = [
  {
    name: 'Citas',
    description:
      'Mejorar la organización, planificación y comunicación dentro de tu empresa.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Contabilidad',
    description:
      'Obten un control financiero y toma mejores decisiones en tu empresa.',
    href: '#',
    icon: ScaleIcon,
  },
  {
    name: 'Inventario',
    description:
      'Conoce que articulos tienes disponibles en cualquier momento y analiza la tendencia en tus ventas.',
    href: '#',
    icon: TableCellsIcon,
  },
  {
    name: 'Proovedores',
    description:
      'Los contactos que hayas tenido a traves del marketplace o el foro mas cerca que nunca.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Contratos',
    description: 'Lorem.',
    href: '#',
    icon: NewspaperIcon,
  },
]
const pages = [
  {
    name: 'Gestor Empresarial',
    description: 'Impulsa tu negocio, gestiona tu éxito..',
    href: '#',
    icon: CalculatorIcon,
  },
  {
    name: 'Marketplace',
    description: 'lorem.',
    href: '#',
    icon: BuildingStorefrontIcon,
  },
  { name: 'Comunidad', description: 'Lorem.', href: '#', icon: UsersIcon },
  {
    name: 'Mensajes',
    description: 'Lorem1.',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  { name: 'Tutoriales', description: 'Lorem.', href: '#', icon: FilmIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative ">
      <div className="flex justify-between items-center bg-primary px-4 py-2 sm:px-6  md:space-x-10">
        {/* LOGO */}
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Logo Conexion Emprendedora</span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_20_86)">
                <rect width="150" height="150" rx="50" fill="white" />
                <g filter="url(#filter0_d_20_86)">
                  <path
                    d="M45.304 96.3068C39.4233 96.3068 34.3594 94.9183 30.1122 92.1413C25.8651 89.3643 22.598 85.5392 20.3111 80.6658C18.0241 75.7925 16.8807 70.2249 16.8807 63.9631C16.8807 57.5923 18.0514 51.9703 20.3928 47.0969C22.7614 42.1964 26.0556 38.3712 30.2756 35.6214C34.5227 32.8445 39.4777 31.456 45.1406 31.456C49.5511 31.456 53.526 32.2727 57.0653 33.9062C60.6046 35.5398 63.5041 37.8267 65.7639 40.767C68.0236 43.7074 69.4257 47.1378 69.9702 51.0582H60.3324C59.5973 48.1996 57.9638 45.6676 55.4318 43.4624C52.9271 41.2299 49.5511 40.1136 45.304 40.1136C41.5469 40.1136 38.2526 41.0937 35.4212 43.054C32.617 44.987 30.4253 47.7231 28.8462 51.2624C27.2944 54.7745 26.5185 58.8991 26.5185 63.6364C26.5185 68.4825 27.2808 72.7024 28.8054 76.2962C30.3572 79.8899 32.5353 82.6805 35.3395 84.668C38.1709 86.6554 41.4924 87.6491 45.304 87.6491C47.8087 87.6491 50.082 87.2135 52.1239 86.3423C54.1658 85.4711 55.8947 84.2188 57.3104 82.5852C58.7261 80.9517 59.7334 78.9915 60.3324 76.7045H69.9702C69.4257 80.4072 68.078 83.7423 65.9272 86.7099C63.8036 89.6502 60.9858 91.9916 57.4737 93.734C53.9889 95.4492 49.9323 96.3068 45.304 96.3068Z"
                    fill="#191D35"
                  />
                </g>
                <path
                  d="M117.178 88.6272C122.656 86.0729 126.817 82.6604 129.662 78.3899C132.471 74.1061 133.931 69.2801 134.041 63.9117C134.115 58.5301 132.794 52.9277 130.079 47.1045C127.363 41.2813 123.909 36.6437 119.716 33.1918C115.487 29.7267 110.879 27.6398 105.892 26.9311C100.869 26.2092 95.7916 27.0449 90.6593 29.4382C87.6983 30.8189 85.0045 32.6758 82.5778 35.009C80.1511 37.3422 78.2712 40.1714 76.9379 43.4967C75.5932 46.7973 75.0633 50.5891 75.3482 54.8721C75.6331 59.1551 77.0125 63.9491 79.4863 69.2542L81.2122 72.9553L125.034 52.5208L121.513 44.9704L86.5742 61.2628C85.0784 58.0551 84.3853 54.8937 84.4947 51.7786C84.5795 48.675 85.4546 45.8487 87.1198 43.2999C88.7603 40.7625 91.1598 38.7574 94.3181 37.2847C97.7973 35.6623 101.21 35.1222 104.557 35.6643C107.868 36.1933 110.84 37.5108 113.475 39.6168C116.109 41.7229 118.157 44.3427 119.618 47.4764L121.965 52.51C123.967 56.8034 124.924 60.7881 124.836 64.464C124.711 68.1269 123.679 71.3568 121.739 74.154C119.788 76.9264 117.048 79.1353 113.519 80.7807C111.224 81.8507 109.002 82.4965 106.853 82.7179C104.667 82.9261 102.59 82.6928 100.623 82.0179C98.6448 81.3183 96.8253 80.1541 95.1645 78.5253L87.8304 84.8291C90.0534 87.2771 92.7198 89.0978 95.8297 90.2912C98.928 91.4598 102.301 91.9296 105.949 91.7004C109.586 91.4465 113.329 90.4221 117.178 88.6272Z"
                  fill="#191D35"
                />
                <g filter="url(#filter1_d_20_86)">
                  <path
                    d="M53.0341 113.773V111.5L71.3295 102.182V105.818L57.2955 112.58L57.4091 112.352V112.92L57.2955 112.693L71.3295 119.455V123.091L53.0341 113.773ZM97.6967 113.773L79.4013 123.091V119.455L93.4354 112.693L93.3217 112.92V112.352L93.4354 112.58L79.4013 105.818V102.182L97.6967 111.5V113.773Z"
                    fill="#191D35"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_20_86"
                  x="12.8809"
                  y="31.4559"
                  width="61.0894"
                  height="72.8508"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_20_86"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_20_86"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_20_86"
                  x="49.0342"
                  y="102.182"
                  width="52.6626"
                  height="28.9092"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_20_86"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_20_86"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_20_86">
                  <rect width="150" height="150" rx="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        {/* 3bars Mobile */}
        <div className="-mr-2 -my-2 lg:hidden">
          <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-end text-gray-400 hover:text-white  focus:outline-none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        {/* Gestor empresarial */}
        <Popover.Group as="nav" className="hidden lg:flex space-x-10">
          <Popover className="relative">
            {/* Botones */}
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-white' : 'text-gray-400',
                    'group rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none '
                  )}
                >
                  <span>Gestor empresarial</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-white' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-white'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  {/* Desplegable */}
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {gestorEmpresarial.map((solution) => (
                          // Continido del dezplegable
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            {/* Icono */}
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-DEFAULT text-white sm:h-12 sm:w-12">
                              <solution.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>

                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {solution.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {solution.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Footer del dezplegable */}
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                              Impulsa tu negocio, gestiona tu éxito.
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {/* Botones */}

          <a
            href="#"
            className="text-base font-medium text-gray-400 hover:text-white"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-400 hover:text-white"
          >
            Comunidad
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-400 hover:text-white"
          >
            Mensajes
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-400 hover:text-white"
          >
            Tutoriales
          </a>
        </Popover.Group>

        {/* Boton usuario */}
        <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" className="whitespace-nowrap text-base font-medium ">
            <UserCircleIcon class="h-10 w-10 text-white" />
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* Logo */}
                  <span className="sr-only">Logo Conexion Emprendedora</span>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_20_71)">
                      <rect width="150" height="150" rx="50" fill="#191D35" />
                      <g filter="url(#filter0_d_20_71)">
                        <path
                          d="M45.304 96.3068C39.4233 96.3068 34.3594 94.9183 30.1122 92.1413C25.8651 89.3643 22.598 85.5392 20.3111 80.6658C18.0241 75.7925 16.8807 70.2249 16.8807 63.9631C16.8807 57.5923 18.0514 51.9703 20.3928 47.0969C22.7614 42.1964 26.0556 38.3712 30.2756 35.6214C34.5227 32.8445 39.4777 31.456 45.1406 31.456C49.5511 31.456 53.526 32.2727 57.0653 33.9062C60.6046 35.5398 63.5041 37.8267 65.7639 40.767C68.0236 43.7074 69.4257 47.1378 69.9702 51.0582H60.3324C59.5973 48.1996 57.9638 45.6676 55.4318 43.4624C52.9271 41.2299 49.5511 40.1136 45.304 40.1136C41.5469 40.1136 38.2526 41.0937 35.4212 43.054C32.617 44.987 30.4253 47.7231 28.8462 51.2624C27.2944 54.7745 26.5185 58.8991 26.5185 63.6364C26.5185 68.4825 27.2808 72.7024 28.8054 76.2962C30.3572 79.8899 32.5353 82.6805 35.3395 84.668C38.1709 86.6554 41.4924 87.6491 45.304 87.6491C47.8087 87.6491 50.082 87.2135 52.1239 86.3423C54.1658 85.4711 55.8947 84.2188 57.3104 82.5852C58.7261 80.9517 59.7334 78.9915 60.3324 76.7045H69.9702C69.4257 80.4072 68.078 83.7423 65.9272 86.7099C63.8036 89.6502 60.9858 91.9916 57.4737 93.734C53.9889 95.4492 49.9323 96.3068 45.304 96.3068Z"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M117.178 88.6272C122.656 86.0729 126.817 82.6604 129.662 78.3899C132.471 74.1061 133.931 69.2801 134.041 63.9117C134.115 58.5301 132.794 52.9277 130.079 47.1045C127.363 41.2813 123.909 36.6437 119.716 33.1918C115.487 29.7267 110.879 27.6398 105.892 26.9311C100.869 26.2092 95.7916 27.0449 90.6593 29.4382C87.6983 30.8189 85.0045 32.6758 82.5778 35.009C80.1511 37.3422 78.2712 40.1714 76.9379 43.4967C75.5932 46.7973 75.0633 50.5891 75.3482 54.8721C75.6331 59.1551 77.0125 63.9491 79.4863 69.2542L81.2122 72.9553L125.034 52.5208L121.513 44.9704L86.5742 61.2628C85.0784 58.0551 84.3853 54.8937 84.4947 51.7786C84.5795 48.675 85.4546 45.8487 87.1198 43.2999C88.7603 40.7625 91.1598 38.7574 94.3181 37.2847C97.7973 35.6623 101.21 35.1222 104.557 35.6643C107.868 36.1933 110.84 37.5108 113.475 39.6168C116.109 41.7229 118.157 44.3427 119.618 47.4764L121.965 52.51C123.967 56.8034 124.924 60.7881 124.836 64.464C124.711 68.1269 123.679 71.3568 121.739 74.154C119.788 76.9264 117.048 79.1353 113.519 80.7807C111.224 81.8507 109.002 82.4965 106.853 82.7179C104.667 82.9261 102.59 82.6928 100.623 82.0179C98.6448 81.3183 96.8253 80.1541 95.1645 78.5253L87.8304 84.8291C90.0534 87.2771 92.7198 89.0978 95.8297 90.2912C98.928 91.4598 102.301 91.9296 105.949 91.7004C109.586 91.4465 113.329 90.4221 117.178 88.6272Z"
                        fill="white"
                      />
                      <g filter="url(#filter1_d_20_71)">
                        <path
                          d="M53.0341 113.773V111.5L71.3295 102.182V105.818L57.2955 112.58L57.4091 112.352V112.92L57.2955 112.693L71.3295 119.455V123.091L53.0341 113.773ZM97.6967 113.773L79.4013 123.091V119.455L93.4354 112.693L93.3217 112.92V112.352L93.4354 112.58L79.4013 105.818V102.182L97.6967 111.5V113.773Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_20_71"
                        x="12.8809"
                        y="31.4559"
                        width="61.0894"
                        height="72.851"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_20_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_20_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_20_71"
                        x="49.0342"
                        y="102.182"
                        width="52.6626"
                        height="28.9089"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_20_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_20_71"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_20_71">
                        <rect width="150" height="150" rx="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* Texto Menu */}
                <div>
                  <p className="text-base ml-5 font-bold">Menu</p>
                </div>

                {/* Boton cerrar */}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-black focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                {/* Contenido del dezplegable */}
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {pages.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-DEFAULT text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
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
