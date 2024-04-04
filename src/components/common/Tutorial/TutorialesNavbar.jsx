import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const TutorialesNavbar = ({ activeSection, handleNavClick }) => {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`mr-4 px-4 py-2 ${
          activeSection === 1 ? 'bg-gray-200' : 'bg-gray-100'
        }`}
        onClick={() => handleNavClick(1)}
      >
        Sección 1
      </button>
      <button
        className={`px-4 py-2 ${
          activeSection === 2 ? 'bg-gray-200' : 'bg-gray-100'
        }`}
        onClick={() => handleNavClick(2)}
      >
        Sección 2
      </button>
      {/* Agrega más botones según sea necesario para más secciones */}
    </div>
  )
}

export default TutorialesNavbar
