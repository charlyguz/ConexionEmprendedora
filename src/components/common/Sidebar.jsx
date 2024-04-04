import { classNames } from '@utils/class-names'

const Tooltip = ({ text }) => {
  return (
    <div
      className="absolute hidden bottom-1/2 -right-10 z-1 bg-primary/65 w-max"
      rounded-md
      translate="x-full y-1/2"
      backdrop-blur-sm
      group-hover-flex
      group-focus-visible-block
      p="x-2.5 y-1.5"
      ring="2 secondary"
      text="4 secondary left"
    >
      <span>{text}</span>
    </div>
  )
}

export default function Sidebar({ navigationItems }) {
  return (
    <div
      className="hidden"
      md="flex flex-col h-full top-0 justify-center my-auto min-w-30 w-auto fixed z-1 bg-azulCoopel overflow-visible"
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="h-1/2 py-5% mx-1">
        <nav className="flex flex-col items-center px-0 flex-grow justify-evenly h-full">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'bg-white text-azulCoopel'
                    : 'text-secondary hover:(bg-secondary text-azulCoopel/[0.75])',
                  'group relative flex items-center p-3 text-sm font-medium rounded-full'
                )
              }
            >
              {typeof item.icon === 'string' ? (
                <div className={classNames(item.icon, 'hw-7')} sm="hw-8" />
              ) : (
                item.icon
              )}

              <Tooltip text={item.name} />
            </NavLink>
          ))}
          {/* <nav className="">
          </nav> */}
        </nav>
      </div>
    </div>
  )
}
