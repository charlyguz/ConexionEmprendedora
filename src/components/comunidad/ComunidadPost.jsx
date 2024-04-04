import { classNames } from '@/utils/class-names'
import { DateTime } from 'luxon'

export default function ComunidadPost({ post }) {
  const avatarColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
  ]

  const [isUpvoted, setIsUpvoted] = useState(false)
  const [postUpvotes, setPostUpvotes] = useState(post.metadata.upvotes)
  const toggleUpvote = () => {
    if (isUpvoted) {
      setPostUpvotes(postUpvotes - 1)
    } else {
      setPostUpvotes(postUpvotes + 1)
    }

    setIsUpvoted(!isUpvoted)
  }

  const selectRandomColor = (name) => {
    const charCode = name.charCodeAt(0)
    const colorIndex = charCode % avatarColors.length
    return avatarColors[colorIndex]
  }

  const postedAgo = DateTime.fromJSDate(post.metadata.date)
    .setLocale('es')
    .toRelative()

  return (
    <div className="card cursor-pointer bg-slate-100">
      <div className="flex flex-col justify-between h-full">
        {/* Avatar and name */}
        <div className="flex justify-start items-center gap-x-2 w-full">
          <span
            className={classNames(
              'inline-flex items-center justify-center hw-7 rounded-full',
              selectRandomColor(post.user.name)
            )}
          >
            <span className="text-xs font-medium leading-none text-white">
              {post.user.name
                .split(' ')
                .map((name) => name[0])
                .slice(0, 2)
                .join('')}
            </span>
          </span>
          <p className="lg:text-base text-sm font-semibold">{post.user.name}</p>

          <span className="ml-auto text-sm text-gray-600">{postedAgo}</span>
        </div>
        {/* Post title */}
        <div className="text-lg font-bold grow my-2">
          <p>{post.title}</p>
        </div>
        {/* Post actions */}
        <div className="flex justify-end items-stretch gap-x-2 text-gray-600">
          <button
            className={classNames(
              'flex items-center justify-center rounded-full text-sm gap-x-2 px-3 py-1.5',
              isUpvoted ? 'bg-primary text-secondary' : 'bg-gray-200'
            )}
            focus={isUpvoted ? 'ring-2 ring-primary ring-offset-2' : ''}
            onClick={() => toggleUpvote()}
          >
            <div
              className={classNames('i-heroicons:chevron-up-20-solid hw-4')}
            />
            <span className="font-semibold">{postUpvotes}</span>
          </button>
          <button className="flex items-center justify-center rounded-full gap-x-2 px-3 py-1.5 bg-gray-200">
            <div className="i-heroicons:chat-bubble-left hw-4" />
            <span className="font-semibold text-sm">
              {post.metadata.comments}
            </span>
          </button>
          <button className="flex items-center justify-center rounded-full gap-x-2 px-3 py-1.5 bg-gray-200">
            <div className="i-heroicons:share-20-solid hw-4" />
            <span className="font-semibold text-sm">
              {post.metadata.shares}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
