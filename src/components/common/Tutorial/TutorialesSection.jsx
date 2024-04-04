import './App.css'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TutorialesSection = ({ title, texto, posts, onIngresarCurso }) => {
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

    return 2
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
  }

  return (
    <div className="rounded-md relative w-full flex justify-center ">
      {/* Alineación centrada para el Slider */}
      <div className="max-w-lg w-full md:max-w-none">
        {/* Ajuste del ancho del contenedor del Slider */}
        <div className="flex flex-col items-center  md:flex-row ">
          {/* Agrega el título y el texto */}
          <div className="max-md:w-full max-md:mt-8 text-center w-1/4 md:pr-8 ">
            <h1 className="lg:text-3xl md:text-xl text-xl sm:text-3xl tracking-tight font-extrabold text-gray-900">
              {title}
            </h1>
            <p className="mt-3  mx-auto text-lg md:text-sm lg:text-lg text-gray-500 pb-4">
              {/* {texto} */}
              Potencia tu visi&oacute;n empresarial con conocimientos
              estrat&eacute;gicos y practicos.
            </p>
          </div>

          <div className="w-3/4 max-md:hidden">
            {/* Contenedor del Slider con ancho máximo */}
            <Slider {...settings} className="my-unique-slider">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="transform transition duration-300 hover:scale-101 cursor-pointer"
                >
                  <TutorialContent
                    title={post.title}
                    imageUrl={post.imageUrl}
                    category={post.category}
                    description={post.description}
                    href={post.href}
                    video={post.video}
                    onIngresarCurso={() => onIngresarCurso(post)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col lg:ml-3 md:hidden mt-8">
            {posts.map((post) => (
              <div key={post.title}>
                <TutorialContent
                  title={post.title}
                  imageUrl={post.imageUrl}
                  category={post.category}
                  description={post.description}
                  href={post.href}
                  video={post.video}
                  onIngresarCurso={() => onIngresarCurso(post)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialesSection
