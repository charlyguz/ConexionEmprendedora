import { classNames } from '@utils/class-names'

const commPath = '/comm'

const tabs = [
  { name: 'Correo', href: `${commPath}/correo` },
  { name: 'Mensajes', href: `${commPath}/mensajes` },
]

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="text-black h-screen w-full">
      <Navbar />
      <div className="w-full px-10 md:px-40 lg:px-90 xl:px-96">
        <div className="block">
          <nav
            className="relative z-0  shadow flex divide-x divide-gray-400 rounded-md bg-white"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <NavLink
                key={tab.name}
                to={tab.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700',
                    'group relative min-w-0 flex-1 overflow-hidden py-2.5 px-4 text-sm font-medium text-center hover:bg-gray-100 focus:z-10 ',
                    tabIdx === 0 ? 'rounded-l-md' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-md' : ''
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-semibold">{tab.name}</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        isActive ? 'bg-indigo-500' : 'bg-transparent',
                        'absolute inset-x-0 bottom-0 h-0.7'
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      {/* Your content is here */}
      <Outlet />
    </main>
  )
}
