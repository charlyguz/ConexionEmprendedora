import { Dialog, Transition } from '@headlessui/react'
import { classNames } from '@utils/class-names'
import { Fragment } from 'react'

const tutorialPath = '/tutorial'

const navigation = [
  {
    name: 'Gestion Empresarial',
    href: `${tutorialPath}/gestion`,
    icon: 'i-heroicons-presentation-chart-line-20-solid',
  },
  {
    name: 'Fiscal',
    href: `${tutorialPath}/fiscal`,
    icon: 'i-heroicons-building-library-16-solid',
  },
  {
    name: 'Tecnología',
    href: `${tutorialPath}/tecnologia`,
    icon: 'i-heroicons-cursor-arrow-rays-solid',
  },
  {
    name: 'Recursos Humanos',
    href: `${tutorialPath}/recursos-humanos`,
    icon: 'i-heroicons-user-group-20-solid',
  },
  {
    name: 'Gestión de riesgos',
    href: `${tutorialPath}/gestion-riesgo`,
    icon: 'i-heroicons-shield-exclamation-20-solid',
  },
]

export default function Marketplace() {
  return (
    <>
      {/* Static sidebar for desktop */}
      <Sidebar navigationItems={navigation} />

      <div className="md:ml-30 flex flex-col flex-1">
        <main className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 rounded-md">
          {/* Replace with your content */}
          <Outlet />
          {/* /End replace */}
        </main>

        <BottomNav navigationItems={navigation} />
      </div>
    </>
  )
}
