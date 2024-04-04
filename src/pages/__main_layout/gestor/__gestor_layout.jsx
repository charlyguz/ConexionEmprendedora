import { useLocation } from 'react-router-dom'
const gestorPath = '/gestor'

const navigation = [
  {
    name: 'Citas',
    href: `${gestorPath}/citas`,
    icon: 'i-heroicons:calendar-16-solid',
  },
  {
    name: 'Contabilidad',
    href: `${gestorPath}/contabilidad`,
    icon: 'i-heroicons-chart-pie-20-solid',
  },
  {
    name: 'Inventario',
    href: `${gestorPath}/inventario`,
    icon: 'i-heroicons:archive-box-20-solid',
  },
  {
    name: 'Ventas',
    href: `${gestorPath}/proveedores`,
    icon: 'i-mdi:truck',
  },
  {
    name: 'Punto de venta',
    href: `${gestorPath}/punto-de-venta`,
    icon: 'i-heroicons:shopping-cart-20-solid',
  },
]

export default function GestorLayout() {
  const location = useLocation()
  return (
    <>
      {/* Static sidebar for desktop */}
      {/* <Sidebar navigationItems={navigation} /> */}
      <div className="h-5 bg-amarilloCoopel"></div>
      <div className=" flex flex-col flex-1">
        <main className="hw-full">
          <div className="flex flex-col flex-1 px-4" lg="py-10 px-20">
            {location.pathname === `${gestorPath}/contabilidad` && <IABubble />}
            {/* Replace with your content */}
            <Outlet />
            {/* /End replace */}
          </div>
        </main>

        {/* <BottomNav navigationItems={navigation} /> */}
        <div className="h-5 bg-white"></div>
      </div>

      <div className="hidden sm:block h-5 bg-amarilloCoopel"></div>
    </>
  )
}
