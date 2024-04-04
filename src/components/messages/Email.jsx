import { emails } from '@/data/email.data'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ArchiveBoxIcon as ArchiveIconSolid,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  ArrowUturnLeftIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid'
import {
  ArchiveBoxIcon as ArchiveIconOutline,
  NoSymbolIcon,
  FlagIcon,
  InboxIcon,
  PencilSquareIcon as PencilAltIcon,
  UserCircleIcon,
  ArrowLeftIcon as ReturnIcon,
} from '@heroicons/react/24/outline'

const sidebarNavigation = [
  { name: 'Open', href: '#', icon: InboxIcon, current: true },
  { name: 'Archive', href: '#', icon: ArchiveIconOutline, current: false },
  { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
  { name: 'Spam', href: '#', icon: NoSymbolIcon, current: false },
  { name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
]

const message = {
  subject: 'Re: New pricing for existing customers',
  sender: 'joearmstrong@example.com',
  status: 'Open',
  items: [
    {
      id: 1,
      author: 'Joe Armstrong',
      date: 'Yesterday at 7:24am',
      datetime: '2021-01-28T19:24',
      body: "<p>Thanks so much! Can't wait to try it out.</p>",
    },
    {
      id: 2,
      author: 'Monica White',
      date: 'Wednesday at 4:35pm',
      datetime: '2021-01-27T16:35',
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
    },
    {
      id: 3,
      author: 'Joe Armstrong',
      date: 'Wednesday at 4:09pm',
      datetime: '2021-01-27T16:09',
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Email() {
  const [open, setOpen] = useState(false)

  const handleShowClick = (id) => {
    consolejson.log(id)
  }

  return (
    <>
      <div className="h-full w-full flex flex-col max-md:pt-4 md:py-6 rounded-lg shadow-md">
        {/* Top nav*/}
        <header className="flex-shrink-0 relative h-16 bg-white flex items-center lg:hidden md:mx-8 rounded-t-md">
          <div className="mx-auto lg:hidden">
            <div className="relative">
              <label htmlFor="inbox-select" className="sr-only">
                Elegir bandeja de entrada
              </label>
              <select
                id="inbox-select"
                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-black"
              >
                <option value="/open">Abierto</option>
                <option value="/archived">Archivado</option>
                <option value="/assigned">Asignado</option>
                <option value="/flagged">Marcado</option>
                <option value="/spam">No deseado</option>
                <option value="/drafts">Borradores</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 left-2 p-4 flex items-center">
              <div className="cursor-pointer p-2 hover:bg-secondary rounded-full">
                <ReturnIcon className="h-6 w-6 text-gray-400 " />
              </div>
            </div>
          </div>
        </header>

        {/* Bottom section */}
        <div className="min-h-0 flex-1 flex overflow-hidden md:mx-8">
          {/* Navegador de correos*/}
          <nav
            aria-label="Sidebar"
            className="hidden xl:block xl:flex-shrink-0 xl:bg-white xl:overflow-y-auto xl:rounded-l-md xl:border-r-2 xl:border-secondary"
          >
            <div className="relative w-16 flex flex-col p-3 space-y-3">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:bg-secondary',
                    'flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-lg'
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>

          {/* Main area */}
          <main className="min-w-0 flex-1 border-gray-200 xl:flex gap-8">
            <section
              aria-labelledby="message-heading"
              className="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last bg-white rounded-b-md  lg:rounded-t-md"
            >
              {/* Top section */}
              <div className="flex-shrink-0  border-b border-gray-200 ">
                {/* Barra de herramientas*/}
                <div className="h-16 flex flex-col justify-center">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="py-3 flex justify-between">
                      {/* Botones de archivar, responder */}
                      <div>
                        <span className="relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
                          <span className="inline-flex sm:shadow-sm">
                            <div className="m-auto max-lg:hidden xl:hidden px-4">
                              <div className="cursor-pointer hover:bg-secondary px-4  py-1 rounded-full">
                                <ReturnIcon className="h-6 w-6 text-gray-400" />
                              </div>
                            </div>
                            <button
                              type="button"
                              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <ArrowUturnLeftIcon
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Responder</span>
                            </button>
                            <button
                              type="button"
                              className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <PencilIcon
                                className="mr-2.5 h-5 w-5 text-yellow-400"
                                aria-hidden="true"
                              />
                              <span>Nota</span>
                            </button>
                            <button
                              type="button"
                              className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <UserPlusIcon
                                className="mr-2.5 h-5 w-5 text-green-800"
                                aria-hidden="true"
                              />
                              <span>Asignar</span>
                            </button>
                          </span>

                          <span className="hidden lg:flex space-x-3">
                            <button
                              type="button"
                              className="hidden sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <ArchiveIconSolid
                                className="mr-2.5 h-5 w-5 text-blue-500"
                                aria-hidden="true"
                              />
                              <span>Archivar</span>
                            </button>
                          </span>

                          <Menu
                            as="span"
                            className="-ml-px relative block sm:shadow-sm lg:hidden"
                          >
                            <div>
                              <Menu.Button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3">
                                <span className="sr-only sm:hidden">Más</span>
                                <span className="hidden sm:inline">Más</span>
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block sm:hidden px-4 py-2 text-sm'
                                        )}
                                      >
                                        Nota
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block sm:hidden px-4 py-2 text-sm'
                                        )}
                                      >
                                        Asignar
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        Archivar
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </span>
                      </div>

                      {/* Botones de siguiente email o anterior */}
                      <nav aria-label="Pagination">
                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                          <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                          >
                            <span className="sr-only">Siguiente</span>
                            <ChevronUpIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                          <a
                            href="#"
                            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                          >
                            <span className="sr-only">Anterior</span>
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                        </span>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mensaje header
               Es toda la lógica de mostrar el correo seleccionado */}
              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="bg-white pt-3 pb-3 shadow">
                  <div className="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
                    <div className="sm:w-0 sm:flex-1">
                      <h1
                        id="message-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        {emails[3].subject}
                      </h1>
                      <p className="mt-1 text-sm text-gray-500 truncate">
                        {emails[3].sender}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                        {emails[3].status}
                      </span>
                      <Menu
                        as="div"
                        className="ml-3 relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <span className="sr-only">Abrir opciones</span>
                            <EllipsisVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                      'w-full flex justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>Copiar dirección de correo</span>
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
                {/* Thread section*/}
                <ul
                  role="list"
                  className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8"
                >
                  {emails[3].history.map((item) => (
                    <li
                      key={item.id}
                      className="bg-[#e7e7e7] px-4 pt-3 pb-4 shadow sm:rounded-md sm:px-6 max-sm:mx-2"
                    >
                      <div className="sm:flex sm:justify-between sm:items-baseline">
                        <h3 className="text-sm font-medium">
                          <span className="text-gray-900">{item.author}</span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                          <time dateTime={item.datetime}>{item.date}</time>
                        </p>
                      </div>
                      <div
                        className="mt-4 space-y-6 text-sm text-gray-800"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Lista de mensajes*/}
            <aside className="hidden lg:block xl:flex-shrink-0 xl:order-first">
              <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white rounded-r-md">
                <div className="flex-shrink-0">
                  <div className="h-16  px-6 flex flex-col justify-center">
                    <div className="flex items-baseline space-x-3">
                      <h2 className="text-base font-medium text-gray-900">
                        Buzón de correo
                      </h2>
                      <p className="text-xs font-medium text-gray-500">
                        {emails.length} nuevos
                      </p>
                    </div>
                  </div>

                  {/* Barra de busqueda*/}
                  <div className="min-w-0 flex-1 pb-1 px-3">
                    <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
                      <label htmlFor="desktop-search" className="sr-only">
                        Buscar en buzón
                      </label>
                      <input
                        id="desktop-search"
                        type="search"
                        placeholder="Buscar en buzón"
                        className="block w-full pl-10 placeholder-gray-500 sm:text-base focus:ring-0 bg-secondary
                        rounded-2xl border-b  focus:border-none border-none "
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                        <MagnifyingGlassIcon
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <nav
                  aria-label="Message list"
                  className="min-h-0 flex-1 overflow-y-auto h-full"
                >
                  <ul
                    role="list"
                    className="border-b border-gray-300 divide-y divide-gray-200"
                  >
                    {emails.map((email_element) => (
                      <li
                        key={email_element.id}
                        className="relative bg-white py-5 px-6 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 cursor-pointer"
                        onKeyDown={() => handleShowClick(email_element.id)}
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <div
                              id={email_element.id}
                              className="block focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {email_element.sender}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {email_element.subject}
                              </p>
                            </div>
                          </div>
                          <time
                            dateTime={email_element.datetime}
                            className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                          >
                            {email_element.date}
                          </time>
                        </div>
                        <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {email_element.preview}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </>
  )
}
