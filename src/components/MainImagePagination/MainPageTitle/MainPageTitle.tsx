const MainPageTitle = () => {
  return (
    <div className="absolute top-[30%] px-[15%] w-full text-white">
      <h1 className=" text-6xl font-bold">
        Современный дизайн интерьера и ремонт
      </h1>
      <h2 className="text-2xl w-2/4 my-5">
        Комплексное сопровождение во время ремонта, комплектация материалами и
        мебелью «под ключ» в г.Алматы и г.Астана
      </h2>
      <button className=" h-16 bg-opacity-50 bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full">
        <span className="text-2xl">Рассчитать Ваш проект</span>
      </button>
    </div>
  )
}

export default MainPageTitle
