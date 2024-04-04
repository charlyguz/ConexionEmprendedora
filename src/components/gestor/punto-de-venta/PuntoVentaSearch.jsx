import { Combobox } from '@headlessui/react'
import { classNames } from '@utils/class-names'
import { useState } from 'react'

export default function PuntoVentaSeach({ products, onAddProduct }) {
  const [query, setQuery] = useState('')

  const filteredProducts =
    query === ''
      ? []
      : products.filter((product) => {
          return (
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
          )
        })

  return (
    <Combobox
      as="div"
      className={classNames(
        'relative w-full transform divide-y divide-gray-100 overflow-visible rounded-xl bg-white shadow-2xl transition-all',
        'ring-2 ring-black ring-opacity-25'
      )}
      onChange={(product) => onAddProduct(product)}
    >
      <div className="relative">
        <div
          className="i-heroicons:magnifying-glass-20-solid pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className={classNames(
            'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400',
            'focus:ring-0',
            'sm:text-sm'
          )}
          placeholder="Buscar productos"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filteredProducts.length > 0 && (
        <Combobox.Options
          static
          className={classNames(
            'absolute top-15 max-h-96 w-full scroll-py-3 overflow-y-auto p-3 bg-white shadow-2xl rounded-xl',
            'ring-2 ring-black ring-opacity-50'
          )}
        >
          {filteredProducts.map((product) => (
            <Combobox.Option
              key={product.id}
              value={product}
              className={({ active }) =>
                classNames(
                  'flex cursor-default select-none rounded-xl p-3',
                  active && 'bg-gray-100 ring-2 ring-gray-900'
                )
              }
            >
              {({ active }) => (
                <PuntoVentaSeachItem item={product} active={active} />
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== '' && filteredProducts.length === 0 && (
        <div
          className="absolute top-15 max-h-96 w-full py-14 px-6 text-center text-sm bg-white shadow-2xl rounded-xl"
          ring="2 black opacity-50"
          sm="px-14"
        >
          <div className="i-heroicons:exclamation-circle mx-auto h-6 w-6 text-gray-400" />
          <p className="mt-4 font-semibold text-gray-900">
            No se encontró ningún producto
          </p>
          <p className="mt-2 text-gray-500">
            Prueba con otro término de búsqueda
          </p>
        </div>
      )}
    </Combobox>
  )
}
