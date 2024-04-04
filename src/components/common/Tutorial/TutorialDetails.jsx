// import { ArrowLeftIcon } from '@heroicons/react/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import YouTube from 'react-youtube'

const TutorialDetails = ({ curso, onRegresar }) => {
  const isSmallScreen = window.innerWidth < 640

  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-white rounded-md shadow-md pb-6 p-10">
        <div className="flex items-center justify-between pl-5 w-full">
          <button onClick={onRegresar} className="mb-2">
            <ArrowLeftIcon className="h-7 w-7 text-primary" />
          </button>
        </div>
        <div className={`flex flex-col x-5 pb-5 mt-1 w-full`}>
          <div className="w-full">
            <div
              className="text-gray-500 space-y-6"
              style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}
            >
              <div className="tutorial-description w-full ">
                <div className=" mb-5 w-full flex justify-center">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {curso.title}
                  </h2>
                </div>
                {curso.inf ? <p className="mb-4">{curso.inf.intro}</p> : null}
                {/* Aquí se agrega el reproductor de video */}
                <div className="relative w-full h-70 aspect-w-16 aspect-h-9 my-5 flex justify-center">
                  {curso.video === '#' ? (
                    <iframe
                      className="w-full lg:w-150 h-full items-center justify-between rounded-md"
                      src="https://www.youtube.com/embed/dbtyoNPFfp0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  ) : (
                    <iframe
                      className="w-full lg:w-150 h-full items-center justify-between rounded-md"
                      src={curso.video} // Utiliza el enlace del video
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  )}
                </div>
                {/* Resto del contenido */}
                {curso.inf ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: curso.inf.contenido }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialDetails
