const navigation = {
  Equipo: [
    { name: 'Charly', href: 'https://github.com/charlyguz' },
    { name: 'Tecla', href: 'https://github.com/danielctecla' },
    { name: 'Manuel', href: 'https://github.com/mvnueloc' },
    { name: 'Hariel', href: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/charlyguz/Conexion-Emprendedora',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
export default function Footer() {
  return (
    <footer
      className="bg-azulCoopel hidden sm:block md:pl-30"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* <img
              className="h-10"
              src="https://img.freepik.com/vector-gratis/fondo-plantilla-logo_1390-55.jpg?t=st=1710997323~exp=1711000923~hmac=7868b9275e883d4ef7316dbcd47f7c3e5d028e20d908a1c37116d299d4536ba6&w=826"
              alt="Company name"
            /> */}
            <p>
              <span className="sr-only">Logo Conexion Emprendedora</span>
              <Logo />
            </p>
            <p className="text-white">
              Creando un mejor lugar para vivir atraves de la tecnologia.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 md:gap-8 xl:col-span-2">
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Equipo
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.Equipo.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white p-1"
                      hover="bg-amarilloCoopel/[0.6]  rounded-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-white xl:text-center">
            &copy; 2024 ESCoders.
          </p>
        </div>
      </div>
    </footer>
  )
}
