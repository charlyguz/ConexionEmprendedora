const TutorialRutaContent = ({ img, title, desc, onClick }) => {
  return (
    <div className="h-20 flex px-3" onClick={onClick}>
      <button className="bg-white h-full w-full rounded-md flex justify-between items-center gap-2 p-5">
        <img src={img} alt="imagen de ruta" className="h-12 w-12 rounded-md " />
        <div className="flex flex-col justify-center ">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-600 ">{desc}</p>
        </div>
      </button>
    </div>
  )
}

export default TutorialRutaContent
