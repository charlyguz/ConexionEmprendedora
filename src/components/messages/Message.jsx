import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import {
  PaperAirplaneIcon,
  PhotoIcon,
  PaperClipIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline'

const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 2,
    subject:
      'Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil',
    sender: 'Virginia Abshire',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 3,
    subject:
      'Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus',
    sender: 'Kyle Gulgowski',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 4,
    subject: 'Eos sequi et aut ex impedit',
    sender: 'Hattie Haag',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 5,
    subject: 'Quisquam veniam explicabo',
    sender: 'Wilma Glover',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
]
const message = {
  name: 'Daniel Tecla',
  sender: 'joearmstrong@example.com',
  status: 'Desconectado',
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

const message_2 = {
  name: 'Daniel Tecla',
  status: 'Desconectado',
  items: [
    {
      id: 1,
      receive: true,
      date: 'Hoy a las 10:00 am',
      message:
        'Hola buen día, me gustaría saber si tienes el producto en existencia',
    },
    {
      id: 2,
      receive: false,
      date: 'Hoy a las 10:05 am',
      message: 'Hola, si tenemos el producto en existencia',
    },
    {
      id: 3,
      receive: true,
      date: 'Hoy a las 10:23 am',
      message: 'Perfecto, ¿cuánto cuesta?',
    },
    {
      id: 4,
      receive: false,
      date: 'Hoy a las 10:25 am',
      message: 'El precio es de $100, y tenemos envío gratis a todo el país.',
    },
    {
      id: 5,
      receive: true,
      date: 'Hoy a las 10:43 am',
      message: 'Gracias, ¿cómo puedo hacer la compra?',
    },
    {
      id: 6,
      receive: false,
      date: 'Hoy a las 11:03 am',
      message:
        'Puedes hacer la compra en el apartado de tienda dentro de esta misma página, si tienes alguna duda, no dudes en preguntar por este medio, estamos para servirte',
    },
    {
      id: 7,
      receive: false,
      date: 'Hoy a las 11:05 am',
      message: 'Recuerda que la plataforma es segura',
    },
    {
      id: 8,
      receive: true,
      date: 'Hoy a las 11:10 am',
      message: 'Gracias, haré la compra enseguida',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class AutoExpandingTextArea extends React.Component {
  constructor(props) {
    super(props)
    this.textAreaRef = React.createRef()
  }

  componentDidMount() {
    this.textAreaRef.current.style.height = '2rem'
    this.textAreaRef.current.style.height = `${this.textAreaRef.current.scrollHeight}px`
  }

  handleInput = (e) => {
    this.textAreaRef.current.style.height = '2rem'
    this.textAreaRef.current.style.height = `${this.textAreaRef.current.scrollHeight}px`
  }

  handleKeyPress = (e) => {
    if (e.code === 'Enter' && !e.shiftKey && window.innerWidth > 640) {
      e.preventDefault()
      // Verificar si el textarea está vacío
      if (this.textAreaRef.current.value.trim() !== '') {
        console.log(this.textAreaRef.current.value)
        // Aquí puedes llamar a la función que envía el formulario
      } else {
        console.log('Textarea is empty')
      }
    }
  }

  render() {
    return (
      <textarea
        ref={this.textAreaRef}
        onInput={this.handleInput}
        onKeyDown={this.handleKeyPress}
        id="message-reply"
        placeholder="Responder"
        className="block w-full pl-8 py-2 placeholder-gray-500 text-sm bg-white border-0 
        focus:border-white focus:outline-none focus:ring-0 focus:text-gray-500 resize-none overflow-y-auto sm:max-h-30 align-middle max-sm:max-h-20"
      />
    )
  }
}

export default function Message() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="h-full w-full flex flex-col max-md:pt-4 md:py-6">
        {/* Top nav*/}

        {/* Bottom section */}
        <div className="min-h-0 flex-1 flex overflow-hidden md:mx-8">
          {/* Main area */}
          <main className="min-w-0 flex-1 border-gray-200 xl:flex gap-8">
            <section
              aria-labelledby="message-heading"
              className="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last bg-white rounded-b-md  rounded-t-md"
            >
              <div className="flex-shrink-0  border-b border-gray-200 ">
                <div className="bg-white pt-2 pb-3 shadow">
                  <div className="px-4 flex justify-between sm:items-baseline sm:pr-6 lg:px-8 sm:ml-4">
                    <div className="xl:hidden cursor-pointer p-2 m-auto">
                      <ArrowUturnLeftIcon className="h-5 w-5 text-gray-500" />
                    </div>

                    <div className="sm:w-0 flex-1 pl-3">
                      <h1
                        id="message-heading"
                        className="max-md:text-sm text-base font-medium text-gray-900"
                      >
                        {message.name}
                      </h1>
                      <p className="mt-1 max-md:text-xs text-sm text-gray-500 truncate">
                        {message.status}
                      </p>
                    </div>

                    <div className="m-auto items-center">
                      <Menu as="div" className="relative text-left">
                        <div>
                          <Menu.Button className="-my-2 p-1 rounded-full bg-white flex items-center text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
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
                                    <span>Ver perfil</span>
                                  </button>
                                )}
                              </Menu.Item>
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
                                    <span>Reportar</span>
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
              </div>
              {/* Mensaje header
               Es toda la lógica de mostrar el correo seleccionado */}
              <div className="max-h-full flex-1 overflow-y-auto">
                {/* Thread section*/}
                <ul
                  role="list"
                  className="py-4 space-y-2 sm:px-4 sm:space-y-4 px-2"
                >
                  {message_2.items.map((item) =>
                    item.receive ? (
                      <li key={item.id} className="w-full flex justify-start">
                        <div className="bg-secondary-600 px-4 py-2 shadow rounded-b-2xl rounded-tr-xl sm:px-6 sm:max-w-2/3">
                          <div
                            className="text-base text-black text-justify"
                            dangerouslySetInnerHTML={{ __html: item.message }}
                          />
                          <div className="sm:flex sm:justify-end sm:items-baseline">
                            <p className="mt-1 text-xs text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                              <time>{item.date}</time>
                            </p>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={item.id} className="w-full flex justify-end">
                        <div className="bg-white px-4 py-6 shadow  rounded-b-2xl rounded-tl-2xl sm:px-6 border-1 border-secondary sm:max-w-2/3">
                          <div
                            className="text-base text-black text-justify"
                            dangerouslySetInnerHTML={{ __html: item.message }}
                          />
                          <div className="sm:flex sm:justify-end sm:items-baseline">
                            <p className="mt-1 text-xs text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                              <time>{item.date}</time>
                            </p>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="px-3 flex flex-row border-t-2 py-2">
                <div className="p-2 cursor-pointer max-sm:hidden m-auto">
                  <PaperClipIcon className="h-5 w-5 text-gray-500" />
                </div>
                <div className="p-2 cursor-pointer m-auto">
                  <PhotoIcon className="h-5 w-5 text-gray-500" />
                </div>
                <AutoExpandingTextArea />
                <div className="p-2 cursor-pointer m-auto">
                  <PaperAirplaneIcon className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </section>
            {/* Lista de mensajes*/}
            <aside className="hidden lg:block xl:flex-shrink-0 xl:order-first">
              <div className="h-full relative flex flex-col  w-[28rem] border-r border-gray-200 bg-white rounded-md pb-4">
                <div className="flex-shrink-0">
                  <div className="h-16  px-6 flex flex-col justify-center pt-2">
                    <div className="flex items-baseline space-x-3">
                      <h2 className="text-base font-medium text-gray-900">
                        Mensajes
                      </h2>
                      <p className="text-xs font-medium text-gray-500">
                        {messages.length} mensajes
                      </p>
                    </div>
                  </div>

                  {/* Barra de busqueda*/}
                  <div className="min-w-0 flex-1 pb-1 px-3">
                    <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500 ">
                      <label htmlFor="desktop-search" className="sr-only">
                        Buscar en mensajes
                      </label>
                      <input
                        id="desktop-search"
                        type="search"
                        placeholder="Buscar en mensajes"
                        className="block w-full pl-12 placeholder-gray-500 sm:text-base focus:ring-0 bg-secondary
                        rounded-2xl border-b  focus:border-none border-none"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                        <MagnifyingGlassIcon
                          className="h-3 w-3 text-gray-500"
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
                    {messages.map((message) => (
                      <li
                        key={message.id}
                        className="relative bg-white py-5 px-6 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <a
                              href={message.href}
                              className="block focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-black truncate">
                                {message.sender}
                              </p>
                            </a>
                          </div>
                          <time
                            dateTime={message.datetime}
                            className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                          >
                            {message.date}
                          </time>
                        </div>
                        <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {message.preview}
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
