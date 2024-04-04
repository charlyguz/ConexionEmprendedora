const extrasPath = '/extras'

const navigation = [
  {
    name: 'Marketplace',
    description: 'lorem.',
    href: `${extrasPath}/marketplace`,
    icon: 'i-heroicons:building-storefront-solid',
  },
  {
    name: 'Comunidad',
    description: 'Lorem.',
    href: `${extrasPath}/comunidad`,
    icon: 'i-heroicons:users-solid',
  },
  {
    name: 'Mensajes',
    description: 'Lorem1.',
    href: `${extrasPath}/mensajes`,
    icon: 'i-heroicons:chat-bubble-left-right-solid',
  },
  {
    name: 'Buzón de entrada',
    description: 'Lorem2.',
    href: `${extrasPath}/buzon-de-entrada`,
    icon: 'i-heroicons:inbox-solid',
  },
]

export default function ExtrasLayout() {
  return (
    <>
      {/* Static sidebar for desktop */}
      <Sidebar navigationItems={navigation} />

      <div className="md:ml-30 flex flex-col flex-1">
        <main className="hw-full">
          <div className="flex flex-col flex-1 px-4" lg="py-10 px-20">
            {/* <IABubble /> */}
            {/* Replace with your content */}
            <Outlet />
            {/* /End replace */}
          </div>
        </main>

        <BottomNav navigationItems={navigation} />
      </div>
    </>
  )
}
