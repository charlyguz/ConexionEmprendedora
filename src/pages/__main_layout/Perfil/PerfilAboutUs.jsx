
export default function PerfilAboutUs ({vision,mision,descripcion,sector,cliente,fundacion,tamanoEmpresa,tipoEmpresa}) {
  return (
    
    <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-8  lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 ">
    <div className="space-y-6 lg:col-start-1 lg:col-span-2 w-full">
      {/* Description list*/}
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="applicant-information-title" className="text-lg leading-6 text-gray-900 font-bold" >
              Acerca de nosotros
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-primary">Conoce un poco acerca de nuestra empresa</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="gap-x-4 gap-y-8" >
              <div className="pb-5">
                <dt className="text-md text-primary font-semibold">Descripcion de la empresa</dt>
                <dd className="mt-1 text-sm text-gray-900">{descripcion}</dd>
              </div>
              <div className="pb-5">
                <dt className="text-md text-primary font-semibold">Mision</dt>
                <dd className="mt-1 text-sm text-gray-900">{mision}</dd>
              </div>
              <div className="pb-5">
                <dt className="text-md text-primary font-semibold">Vision</dt>
                <dd className="mt-1 text-sm text-gray-900">{vision}</dd>
              </div>
              <div className="pb-5">
                <dt className="text-md text-primary font-semibold">Sector</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {sector}
                </dd>
              </div>
              <div className="flex flex-wrap">
                <div className="pb-5 pr-20">
                  <dt className="text-md text-primary font-semibold">Fudada en:</dt>
                  <dd className="mt-1 text-sm text-gray-900">{fundacion}</dd>
                </div>
                <div className="pb-5 pr-20">
                  <dt className="text-md text-primary font-semibold">Tipo de empresa</dt>
                  <dd className="mt-1 text-sm text-gray-900">{tipoEmpresa}</dd>
                </div>
                <div className="pb-5">
                  <dt className="text-md text-primary font-semibold">Tamaño de la empresa</dt>
                  <dd className="mt-1 text-sm text-gray-900">{tamanoEmpresa}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div>
            <a
              href="#"
              className="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
            >
              Read full application
            </a>
          </div>
        </div>
      </section>
       {/* mapa */}
      <div className='rounded-md bg-white lg:h-1/4 sm:h-100 mb-10'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120357.17949749633!2d-99.24309396239354!3d19.49167089445108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f832e6577b77%3A0xa761f60a69775822!2sFinos%20Textiles%20de%20M%C3%A9xico%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1711755696044!5m2!1ses!2smx"
            className="w-full h-full rounded-md"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

    </div>


    <div>
    {/* clientes */}
    <div className='bg-white rounded-md p-5 '>
      <ul role="list" className="divide-y divide-gray-200">
        <li><h1 className='text-lg leading-6 text-gray-900 font-bold my-5'>
          Algunos de nuestros clientes
        </h1>
        </li>
        {cliente.map((clientes) => (
          <li key={clientes.id} className="py-4">
            <div className="flex space-x-3">
              <img className="h-10 w-10 rounded-full" src={clientes.img} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{clientes.nombre}</h3>
                </div>
                <p className="text-sm text-gray-500">
                  {clientes.desc}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

    </div>
  
    


    </div>
  )
}
