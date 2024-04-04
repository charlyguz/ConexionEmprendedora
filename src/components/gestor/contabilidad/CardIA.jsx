import { SparklesIcon } from '@heroicons/react/24/solid'

export default function CardIA() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    // Establecer un temporizador para cambiar la visibilidad después de 5 segundos
    setTimeout(() => {
      setIsVisible(!isVisible)
    }, 2000)
  }

  return (
    <div>
      <div className="mt-15 flex justify-center">
        <button
          onClick={toggleVisibility}
          className=" group border-none w-60 h-20 rounded-full flex justify-center items-center gap-5 bg-azulCoopel cursor-pointer transition-all duration-500 ease-in-out "
          hover="bg-gradient-to-b from-azulCoopel to-blue-400 shadow-lg shadow-indigo-500/50 translate-y-[-2px]"
        >
          <SparklesIcon className="w-8 h-8 transition duration-700 text-[#f8ecec] group-hover:scale-115 group-hover:text-white" />
          <span className="transition duration-700 font-semibold text-[#f8ecec] group-hover:scale-115 group-hover:text-white">
            Analizar
          </span>
        </button>
      </div>
      {isVisible && (
        <div class="lg:mx-46 mt-15 w-auto h-auto bg-gray-100 relative flex justify-center items-center overflow-hidden rounded-[20px] before:content-[''] before:absolute before:w-full  before:h-[130%] before:animate-ping after:content-[''] after:absolute after:bg-gray-100 after:inset-[8px] after:rounded-[15px]">
          {/* <p class="p-5 z-10 text-primary ">Basándome en los índices financieros, esta empresa muestra una sólida posición financiera: buena liquidez, eficiencia operativa, y excelente rentabilidad sobre el capital, lo que indica una gestión financiera efectiva. Sin embargo, es crucial considerar también los riesgos potenciales como fluctuaciones de mercado, cambios regulatorios, competencia intensa, y riesgos operacionales que podrían impactar su rendimiento futuro. Te recomiendo evaluar estos factores en conjunto con su sólida posición financiera antes de tomar una decisión de inversión.</p> */}
          <TypewriterEffect
            className="p-5 z-10 text-primary"
            text="Basándome en los índices financieros, esta empresa muestra una sólida posición financiera: buena liquidez, eficiencia operativa, y excelente rentabilidad sobre el capital, lo que indica una gestión financiera efectiva. Sin embargo, es crucial considerar también los riesgos potenciales como fluctuaciones de mercado, cambios regulatorios, competencia intensa, y riesgos operacionales que podrían impactar su rendimiento futuro. Te recomiendo evaluar estos factores en conjunto con su sólida posición financiera antes de tomar una decisión de inversión."
            speed={75}
          />
        </div>
      )}
    </div>
  )
}
