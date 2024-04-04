import { classNames } from '@/utils/class-names'

export default function BottomNav({ navigationItems }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const scroll = useScroll(document)
  const threshold = 10

  useEffect(() => {
    if (!scroll) return

    if (scroll.top > prevScrollPos && scroll.top - prevScrollPos > threshold) {
      setVisible(false)
    } else if (
      scroll.top < prevScrollPos &&
      prevScrollPos - scroll.top > threshold
    ) {
      setVisible(true)
    }

    setPrevScrollPos(scroll.top)
  }, [scroll])

  return (
    <div
      className={classNames(
        'fixed bottom-0 m-auto my-5 z-1 w-full px-5 transition ease-in-out duration-300 md:hidden',
        visible ? '' : 'translate-y-20'
      )}
    >
      <div
        className={classNames(
          'px-5 justify-between inline-flex rounded-full bg-white h-14 w-full shadow-[0px_5px_2px_0_rgba(0,0,0,0.55)]'
        )}
        sm="px-0 justify-evenly"
        // ring="2 black"
      >
        {navigationItems.map((item) => {
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-azulCoopel text-secondary' : 'text-azulCoopel'
                } rounded-b-full relative inline-flex items-center px-4 py-2 text-sm font-medium`
              }
            >
              {typeof item.icon === 'string' ? (
                <div className={classNames(item.icon, 'hw-7')} sm="hw-8" />
              ) : (
                item.icon
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
