import {
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  PlusIcon,
  CheckIcon,
  BellIcon,
  BellAlertIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import PerfilAboutUs from './PerfilAboutUs'; 
import PerfilProductos from './PerfilProductos';
import PerfilComunidad from './PerfilComunidad';
import classNames from 'classnames';
import {perfil} from '@/data/Perfil.data'
const recomendacion =[
  {
    id:1,
    person:{
      imageUrl:"https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg",
      name:"Adidas",
      time:"2h",
    },
    section:"Ropa y calzado deportivo.",
  },
  {
    "id": 2,
    "person": {
      "imageUrl": "https://i.pinimg.com/564x/34/c3/57/34c357ee31431b6cd13fe1ebe1d47980.jpg",
      "name": "Nike",
      "time": "3h"
    },
    "section": "Ropa y calzado deportivo."
  },
  {
    "id": 3,
    "person": {
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png",
      "name": "Puma",
      "time": "1h"
    },
    "section": "Ropa y calzado deportivo."
  },
  {
    "id": 4,
    "person": {
      "imageUrl": "https://i.pinimg.com/736x/b5/17/71/b517717116fe4eef8290514aa1695929.jpg",
      "name": "Under Armour",
      "time": "4h"
    },
    "section": "Ropa y calzado deportivo."
  },
  {
    "id": 5,
    "person": {
      "imageUrl": "https://static.vecteezy.com/system/resources/previews/023/871/191/original/reebok-logo-brand-clothes-with-name-symbol-design-icon-abstract-illustration-free-vector.jpg",
      "name": "Reebok",
      "time": "2h"
    },
    "section": "Ropa y calzado deportivo."
  },
  {
    "id": 6,
    "person": {
      "imageUrl": "https://logowik.com/content/uploads/images/new-balance.jpg",
      "name": "New Balance",
      "time": "5h"
    },
    "section": "Ropa y calzado deportivo."
  }

];

export default function Perfil () {

  const [seguir,setSeguir]=useState(false);
  const [notificacion,setNotificacion] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Inicio');
  const [tabs, setTabs] = useState([
    { name: 'Inicio', current: true },
    { name: 'Acerca de', current: false },
    { name: 'Productos', current: false },
    { name: 'Publicaciones', current: false },
  ]);

  const handleTabClick = (tabName) => {
    
    console.log("antes"+selectedTab);
    setSelectedTab(tabName);
    const updatedTabs = tabs.map(tab => ({
      ...tab,
      current: tab.name === tabName,
    }));
    setTabs(updatedTabs);
    console.log("despues"+selectedTab);
  };

  const handleseguirnotificacion = () => {
    setNotificacion(true)
  }
  const handledejarseguirnotificacion= () => {
    setNotificacion(false)
  }

  const handleseguircheck = () => {
    setSeguir(true)
  }
  const handledejarseguircheck = () => {
    setSeguir(false)
  }

  const tabContainerStyle = {
    overflowX: 'auto',
    display: 'flex',
    minWidth: '100%',
  };

  const tabStyle = {
    minWidth: '150px',
  };
  return (
    <>
      <div className="min-h-full">
        <main className="py-10">
          {/* Page header */}
          <div className='max-w-3xl mx-auto md:flex flex-col md:items-center lg:max-w-7xl bg-white text-center pb-5 rounded-md'>
            <div className="w-full">
              <div className=''>
                <img className="h-32 w-full object-cover lg:h-48 rounded-t-md" src="https://sdindustrial.com.mx/wp-content/uploads/2022/11/empresas-industriales-que-son.jpg.webp" alt="" />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div className="flex">
                    <img
                      className="h-24 w-24 rounded-full ring-2 ring-primary-200 sm:h-32 sm:w-32"
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/construction-company-logo%2C-real-estate-logo-%28-design-template-10b40dd4d995ad60d9b68696f4854c36_screen.jpg?ts=1669056348"
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    
                    {!notificacion ? (
                    <button
                        type="button"
                        onClick={handleseguirnotificacion}
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <BellIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                      type="button"
                      onClick={handledejarseguirnotificacion}
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full bg-amber focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <BellAlertIcon className=" h-5 w-5 text-black" aria-hidden="true" />
                      </button>
                    )}

                    {!seguir ? (
                      <button
                          type="button"
                          onClick={handleseguircheck}
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          <PlusIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Seguir</span>
                        </button>
                    ) : (
                      <button
                      type="button"
                      onClick={handledejarseguircheck}
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <CheckIcon className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
                        <span>Siguiendo</span>
                      </button>
                    )}

                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <ChatBubbleLeftRightIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Message</span>
                      </button>

                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        <MegaphoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Report</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-5 min-w-0 flex items-end">
                <div className="flex flex-col">
                <div className='flex flex-row items-center'>
                  <h1 className="text-2xl font-bold text-gray-900 truncate flex">{perfil.nombre}</h1>
                  
                    <div className="ml-3 flex">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            perfil.reviews.average > rating ? 'text-yellow-400 '  : 'text-gray-300',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className='ml-2 flex text-sm text-gray-600'>{perfil.reviews.average}</p>
                  </div>
                  <p className='pt-4 flex text-sm text-gray-600'>{perfil.sector}  -   {perfil.ciudad}</p>
                </div>
                </div>
              </div>
            </div>
            {/* Tabs */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 bg-white md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8 mt-6 items-end">
            <div style={tabContainerStyle}>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: 'flex' }}>
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    // href={tab.href}
                    className={classNames(
                      tab.current
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                    )}
                    style={tabStyle}
                    aria-current={tab.current ? 'page' : undefined}
                    onClick={() => handleTabClick(tab.name)}
                  >
                    {tab.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>
          
          {selectedTab === 'Acerca de' && <PerfilAboutUs vision={perfil.vision} mision={perfil.mision} descripcion={perfil.descripcion} sector={perfil.sector} cliente={perfil.cliente} fundacion={perfil.fundacion} tipoEmpresa={perfil.tipoEmpresa} tamanoEmpresa={perfil.tamanoEmpresa}/>}
          {selectedTab === 'Productos' && <PerfilProductos products={perfil.productos} reviews={perfil.reviews}/>}
          {selectedTab === 'Publicaciones' && <PerfilComunidad post={perfil.posts} nombre={perfil.nombre} recomendacion={recomendacion}/>}

          {selectedTab === 'Inicio' &&
          <div className="mt-8 max-w-3xl mx-auto gap-6 lg:max-w-7xl ">
            <div className="space-y-6 w-full">

          {/* Antiguedad */}
          {/* <div className="bg-white rounded-xl">
          <div className="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">

          <div className="py-4 lg:py-0 lg:w-1/3 bg-green flex justify-end">
            <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
              <img className='w-20 h-20' src="https://cdn-icons-png.flaticon.com/512/3135/3135783.png" alt="" />
            </div>
          </div>

            <div className="py-4 lg:py-0 lg:w-1/3 bg-red">
              <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-2 flex-auto flex flex-col-reverse">
                  <h3 className="font-medium text-gray-900">10-year all-inclusive warranty</h3>
                  <p className="text-sm text-gray-500">We’ll replace it with a new one</p>
                </div>
              </div>
            </div>

            </div>

          </div> */}
  

              {/* Description list*/}
              <div className="bg-gray-50 rounded-md">
                <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                  <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                      <div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                          We built our business on great customer service
                        </h2>
                        <p className="mt-4 text-gray-500">
                          At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                          caring about that. Our new strategy is to write a bunch of things that look really good in the
                          headlines, then clarify in the small print but hope people don't actually read it.
                        </p>
                      </div>
                      <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                          alt=""
                          className="object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                      {perfil.incentives.map((incentive) => (
                        <div key={incentive.name} className="sm:flex lg:block">
                          <div className="sm:flex-shrink-0">
                            <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                          </div>
                          <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                            <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                            <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
               {/* FAQs */}
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-white rounded-md">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
                <div className="mt-12">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                    {perfil.faqs.map((item) => (
                      <div key={item.id}>
                        <dt className="text-lg leading-6 font-medium text-gray-900">{item.question}</dt>
                        <dd className="mt-2 text-base text-gray-500">{item.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>


            </div>

            {/* <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                  Timeline
                </h2>

                <div className="mt-6 flow-root">
                  <ul role="list" className="-mb-8">
                    {timeline.map((item, itemIdx) => (
                      <li key={item.id}>
                        <div className="relative pb-8">
                          {itemIdx !== timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  item.type.bgColorClass,
                                  'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                )}
                              >
                                <item.type.icon className="w-5 h-5 text-white" aria-hidden="true" />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {item.content}{' '}
                                  <a href="#" className="font-medium text-gray-900">
                                    {item.target}
                                  </a>
                                </p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime={item.datetime}>{item.date}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col justify-stretch">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Advance to offer
                  </button>
                </div>
              </div>
            </section> */}

          </div>
          }
        </main>
      </div>
    </>
  )
}
