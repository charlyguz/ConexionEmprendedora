

import classNames from 'classnames';
import { DateTime } from 'luxon'


export default function PerfilComunidad ({post,nombre,recomendacion}) {

  const avatarColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
  ]

  const selectRandomColor = (name) => {
    const charCode = name.charCodeAt(0)
    const colorIndex = charCode % avatarColors.length
    return avatarColors[colorIndex]
  }

  const postedAgo = DateTime.fromJSDate(post.date)
    .setLocale('es')
    .toRelative()

    return (
<div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-8 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
      <div className='bg-white space-y-6 lg:col-start-1 lg:col-span-2 p-10 rounded-md'>
      <div className="overflow-y-auto max-h-150">
        {post.map(post => (
          <div className="card my-5" key={post.id}>
            <div className="flex flex-col">
              {/* Avatar and name */}
              <div className="flex justify-start items-center gap-x-2 w-full">
                {post.user && (
                  <span
                    className={classNames(
                      'inline-flex items-center justify-center hw-7 rounded-full',
                      selectRandomColor(nombre)
                    )}
                  >
                    <span className="text-sm font-medium leading-none text-white">
                      {nombre
                        .split(' ')
                        .map((name) => name[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                  </span>
                )}
                {post.user && (
                  <p className="text-sm font-semibold">{nombre}</p>
                )}
  
                <span className="ml-auto text-gray-600">{postedAgo}</span>
              </div>
              {/* Post title */}
              <div className="text-base font-bold grow my-2">
                <p>{post.title}</p>
              </div>
              {/* Post actions */}
              <div className="flex justify-end items-stretch gap-x-2 text-sm mt-3">
                <button className="flex items-center justify-center rounded-full gap-x-2 px-3 py-1.5 bg-gray-200">
                  <div className="i-heroicons:chevron-up-20-solid hw-5" />
                  <span className="font-semibold">{post.metadata.upvotes}</span>
                </button>
                <button className="flex items-center justify-center rounded-full gap-x-2 px-3 py-1.5 bg-gray-200">
                  <div className="i-heroicons:chat-bubble-left hw-5" />
                  <span className="font-semibold">{post.metadata.comments}</span>
                </button>
                <button className="flex items-center justify-center rounded-full gap-x-2 px-3 py-1.5 bg-gray-200">
                  <div className="i-heroicons:share-20-solid hw-5" />
                  <span className="font-semibold">{post.metadata.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className='bg-white p-10 rounded-md flex flex-col'>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            <li className= 'text-lg leading-6 text-gray-900 font-bold mb-5'><h1>Perfiles Recomendados</h1></li>
            {recomendacion.map((activityItem) => (
              <li key={activityItem.id} className="py-4">
                <div className="flex space-x-3">
                  <button>
                    <img className="h-15 w-15 rounded-full border border-gray" src={activityItem.person.imageUrl} alt="" />
                  </button>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <button>
                      <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                      </button>
                      <p className="text-sm text-gray-500">{activityItem.time}</p>
                    </div>
                    <p className='text-sm text-gray-500'>
                    - {activityItem.section}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

</div>

    );


}
