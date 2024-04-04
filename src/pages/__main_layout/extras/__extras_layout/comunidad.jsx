import { posts } from '@/data/comunidad.data'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function ExtrasComunidad() {
  return (
    <div md="mx-10" lg="mx-20" xl="mx-50">
      {/* Search bar */}
      <div className="flex justify-center items-center px-4 w-full max-md:pt-8">
        <div className="relative w-full text-gray-400" md="w-1/2" lg="w-3/4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
            <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            type="text"
            placeholder="Buscar en comunidad"
            className="block w-full pl-10 placeholder-gray-500 sm:text-base  bg-secondary
            rounded-2xl border-b  focus:border-none border-gray-300  focus:border-primary"
          />
        </div>
      </div>
      {/* Posts */}
      <div className="grid grid-cols-1 mt-8 gap-5 px-4">
        {posts.map((post) => (
          <ComunidadPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
