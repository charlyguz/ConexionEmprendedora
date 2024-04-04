import React, { useState } from 'react'
// import { FolderOpenIcon, BookOpenIcon, ChipIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/outline';
import {
  FolderOpenIcon,
  BookOpenIcon,
  CpuChipIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'Gestion\nEmpresarial',
    icon: FolderOpenIcon,
    href: '#',
    current: true,
  },
  { name: 'Fiscal', icon: BookOpenIcon, href: '#', current: false },
  { name: 'Tecnologia', icon: CpuChipIcon, href: '#', current: false },
  { name: 'Recursos\nHumanos', icon: UserGroupIcon, href: '#', current: false },
  {
    name: 'Gestion\nde\nRiesgos',
    icon: PresentationChartLineIcon,
    href: '#',
    current: false,
  },
]

function Sidebar({ handleNavClick }) {
  const [activeItem, setActiveItem] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <>
      {/* barra visible en escritorio */}
      <div className="hidden sm:block">
        <div className="flex flex-col h-screen">
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  // agrega estilos al pasar el mouse
                  activeItem === item.name || activeIndex === index
                    ? 'bg-white text-primary rounded-full'
                    : 'text-color'
                } flex items-center px-2 py-2 text-sm font-medium group`}
                onMouseEnter={() => {
                  setActiveItem(item.name)
                  setActiveIndex(index)
                }} //lo activa
                onMouseLeave={() => {
                  setActiveItem(null)
                  setActiveIndex(null)
                }} // reinicia el estado
                onClick={() => handleNavClick(index + 1)} // Actualiza la sección activa
              >
                <span className="flex items-center">
                  <span className="rounded-full bg-white h-14 w-14 flex items-center justify-center">
                    {' '}
                    {/* Estilo contenedor del icono */}
                    <item.icon className="h-10 w-10" aria-hidden="true" />
                  </span>
                  {(activeItem === item.name || activeIndex === index) && (
                    <span className="ml-3">{item.name}</span>
                  )}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      {/* barra visible en movil */}
      <div className="block sm:hidden">
        <div className="bg-white m-4 rounded-full">
          <nav className="flex px-1 py-1 overflow-x-auto">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  // agrega estilos al pasar el mouse
                  activeItem === item.name || activeIndex === index
                    ? 'bg-primary rounded-full'
                    : ''
                } px-2 py-1 text-sm font-medium group`}
                onMouseEnter={() => {
                  setActiveItem(item.name)
                  setActiveIndex(index)
                }} //lo activa
                onMouseLeave={() => {
                  setActiveItem(null)
                  setActiveIndex(null)
                }} // reinicia el estado
                onClick={() => handleNavClick(index + 1)} // Actualiza la sección activa
              >
                <span className="">
                  <span
                    className={`rounded-full h-14 w-14 flex items-center justify-center ${
                      activeItem === item.name ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    <item.icon className="h-10 w-10" aria-hidden="true" />
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
