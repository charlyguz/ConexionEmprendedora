export default function PuntoVentaSearchItem({ item, active }) {
  return (
    <div className="grid grid-cols-2 p-3 w-full gap-y-3" sm="px-6 py-4">
      <div
        className="flex flex-col justify-between gap-y-1 grid-col-span-2"
        sm="grid-col-span-1"
      >
        <p className="text-4 font-medium text-primary truncate">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>

      <div
        className="grid-col-span-2 flex flex-row-reverse justify-around items-end"
        sm="grid-col-span-1 flex-col justify-between gap-y-4"
      >
        <div>
          {item.stock > 0 ? (
            <p className="px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-info-300/65 text-info-700">
              {item.stock} en existencia
            </p>
          ) : (
            <p className="px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Agotado
            </p>
          )}
        </div>
        <p className="flex items-center text-sm gap-x-1">
          <span className="text-gray-500 hidden" sm="inline">
            Precio:
          </span>
          <span className="px-2.5 py-0.5 inline-flex leading-5 font-semibold rounded-full bg-success-200/65 text-success-700">
            ${item.price}
          </span>
        </p>
      </div>
    </div>
  )
}
