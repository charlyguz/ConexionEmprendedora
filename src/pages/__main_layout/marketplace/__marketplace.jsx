const marketplacePath = '/marketplace'

const navigation = [
  {
    name: 'Hot-Sales',
    href: `${marketplacePath}/hot_sales`,
    icon: 'i-heroicons:fire-16-solid',
  },
  {
    name: 'Servicios',
    href: `${marketplacePath}/servicios`,
    icon: 'i-heroicons:clipboard-document-list-solid',
  },
  {
    name: 'Productos',
    href: `${marketplacePath}/productos`,
    icon: 'i-heroicons-shopping-cart-20-solid',
  },
  {
    name: 'Proveedores',
    href: `${marketplacePath}/proveedores`,
    icon: 'i-mdi:truck',
  },
]

export default function Marketplace() {
  return (
    <>
      {/* Static sidebar for desktop */}
      <Sidebar navigationItems={navigation} />

      <div className="md:ml-30 flex flex-col flex-1">
        <main className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 bg-white rounded-md">
          {/* Replace with your content */}
          <Outlet />
          {/* /End replace */}
        </main>

        <BottomNav navigationItems={navigation} />
      </div>
    </>
  )
}
