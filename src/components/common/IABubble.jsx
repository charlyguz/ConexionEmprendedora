import { SparklesIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function IABubble() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div
        className={`${
          isOpen ? 'right-4 md:top-35' : 'left-3/4 top-1 w-15 -15'
        } group fixed flex justify-center items-center w-13 h-13 sm:h-15 sm:w-15 rounded-full bg-gradient-to-t from-blue-700 to-blue border-2 border-white hover:border-4 hover:w-16 hover:h-16 sm:z-30 z-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SparklesIcon
          className="h-8 w-8 text-white group-hover:w-10 group-hover:h-10"
          aria-hidden="true"
        />
      </div>
      <div
        className={`${
          isOpen ? 'hidden' : 'block'
        } fixed sm:top-20 sm:right-1/8 sm:w-2/3 sm:h-4/5 w-sm h-xl border-primary rounded-md z-45 `}
      >
        <div className=" h-full w-full items-center justify-center p-2">
          <AImodel />
        </div>
      </div>
    </>
  )
}
