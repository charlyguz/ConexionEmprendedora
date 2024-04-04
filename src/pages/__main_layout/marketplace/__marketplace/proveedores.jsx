import { marketplaceProducts } from '@/data/marketplace.data'

// Ahora cada objeto en el array "productos" representa un producto real con información detallada en español.

export default function Proveedores() {
  return (
    <div className="bg-white">
      <FilterMarket
        info={{
          name: 'Proveedores',
          message:
            'Descubre proveedores de confianza para tus necesidades: explora nuestra plataforma y encuentra socios comerciales ideales.',
        }}
      />
      <div className="max-w-2xl mx-auto py-8 sm:py-10 px-4 xl:px-5 lg:max-w-7xl ">
        <div className="md:flex md:items-center md:justify-between mb-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Proveedores
          </h2>
          {/* <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a> */}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4  md:gap-y-0 ">
          {marketplaceProducts.map((product) => (
            <ProductPost key={product.id} product={product} />
          ))}
        </div>

        {/* <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
3
