import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StarIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';



export default function PerfilProductos ({products,reviews}) {
const [showall,setShowAll]=useState(false);
const [windowWidth, setWindowWidth] = useState(window.innerWidth)


useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

function getSlidesToShow() {
  const width = window.innerWidth
  if (width > 1080) {
    return 3
  }
  else if(width < 460){
    return 1
  }
  return 2
}

const handleShowAll = () => {
  setShowAll(!showall)
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: getSlidesToShow(),
  slidesToScroll: 1,
}

  return (
    <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-8 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
    

    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      {/* Description list*/}
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg p-2">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="applicant-information-title" className="text-lg leading-6 text-gray-900 font-bold" >
              Productos
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-primary">Descubre nuestra gama de productos textiles de calidad superior. ¡Potencia tus proyectos con Finotex!</p>
            <button
            type="button"
            onClick={handleShowAll}
            className="inline-flex justify-center px-4 py-2 mt-5 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              ver todos
            </button>
          </div>


          {!showall ? (
            <div className="mt-6 w-full p-10 bg-gray-100 rounded-md">
            <Slider {...settings} className="my-unique-slider">
            {products.map((product) => (
              <div key={product.id} className="group relative mb-5 bg-white rounded-lg">
                <div className="w-full h-56 md:h-48 lg:h-56 xl:h-64 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 max-sm:h-40">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-2 text-base  truncate px-5">
                  <a href={product.href} className="font-semibold text-[#313131]">
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 px-5">{product.color}</p>
                <div className="flex justify-between px-5 pb-5">
                  <p className="text-md font-medium text-gray-900 max-sm:text-sm">
                    {product.price}
                  </p>
                  {product.freeShipping && (
                    <p className="flex items-center text-sm font-medium text-white bg-green-500 px-2 rounded-sm max-sm:text-xs">
                      Envío gratis
                    </p>
                  )}
                </div>
              </div>
            ))}
            </Slider>
          </div>

          ):(
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-3  md:gap-y-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative mb-5 bg-white rounded-lg">
              <div className="w-full h-52 md:h-44 lg:h-52 xl:h-60 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 max-sm:h-40">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-2 text-base  truncate px-5">
                <a href={product.href} className="font-semibold text-[#313131]">
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="text-sm text-gray-600 px-5">{product.color}</p>
              <div className="flex justify-between px-5 pb-5">
                <p className="text-md font-medium text-gray-900 max-sm:text-sm">
                  {product.price}
                </p>
                {product.freeShipping && (
                  <p className="flex items-center text-sm font-medium text-white bg-green-500 px-2 rounded-sm max-sm:text-xs">
                    Envío gratis
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        )}

        </div>
      </section>


    </div>

    <div className='bg-white p-10 rounded-md flex flex-col'>
    {/* review */}
      <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Reseñas de Usuarios</h2>
            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-400 '  : 'text-gray-300',
                        'flex-shrink-0 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">Reseñas Totales {reviews.totalCount}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex-1 flex items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                        <StarIcon
                          className={classNames(
                            count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />

                        <div className="ml-3 relative flex-1">
                          <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                          {count.count > 0 ? (
                            <div
                              className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                              style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-1">
              {/* <h3 className="text-lg font-medium text-gray-900">Compartenos tu experiencia</h3>
              <p className="mt-1 text-sm text-gray-600">
                Si has comprado productos de esta empresa, compartenos tu experiencia para poder asi ayudar a otros usuariosy mejorar como empresa
              </p> */}

              <a
                href="#"
                className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Escribir una reseña
              </a>
            </div>

      </div>
      <div className='flex-grow overflow-y-auto mt-5 h-60'>
        <div className="lg:mt-0 lg:col-start-6 lg:col-span-7">

          <h3 className="sr-only">Recent reviews</h3>
          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
