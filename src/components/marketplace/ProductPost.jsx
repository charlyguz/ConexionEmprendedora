import { classNames } from '@/utils/class-names'

export default function ProductPost({ product }) {
  return (
    <div key={product.id} className="group relative mb-5">
      <div className="relative w-full  overflow-visible">
        {product.coincidenceRate && (
          <div className="absolute right-0 m-2 group/coincidence cursor-pointer">
            <ProductCoincidenceInfo
              productCoincidenceInfo={product.coincidenceMeta}
              className={classNames(
                'absolute',
                'z-2',
                'invisible',
                'top-full',
                'right-0',
                'mt-2',
                'group-hover/coincidence:visible'
              )}
              xl="mt-4"
            />
            <span
              className="inline-flex relative z-1 items-center px-2.5 py-1 rounded-lg font-medium bg-white"
              text="xs danger"
              ring="2 danger"
            >
              <span>{product.coincidenceRate}%</span>
              <span className="hidden" sm="inline" md="hidden" lg="inline">
                &nbsp; de coincidencia
              </span>
            </span>
          </div>
        )}
        <div className="overflow-hidden group-hover:opacity-75 rounded-lg">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-auto object-center object-cover aspect-square transition duration-400 cursor-pointer"
            group-hover="scale-120"
          />
        </div>
      </div>
      <h3 className="mt-2 text-base  truncate">
        <a href={product.href} className="font-semibold text-[#313131]">
          <span className="absolute inset-0" />
          {product.name}
        </a>
      </h3>
      <p className="text-sm text-gray-600">{product.color}</p>
      <div className="flex justify-between">
        <p className="text-md font-medium text-gray-900 max-sm:text-sm">
          {product.price}
        </p>
        {product.freeShipping && (
          <p className="flex items-center text-sm font-medium text-white bg-green-500 px-2 rounded-md max-sm:text-xs">
            Envío gratis
          </p>
        )}
      </div>
    </div>
  )
}
