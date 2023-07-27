import Image from "next/image"
import livingRoomIcon from "@/../public/icon_directions_living_rooms.svg"
import nonlivingRoomIcon from "@/../public/icon_directions_nonliving_rooms.svg"
import archIcon from "@/../public/icon_directions_arch.svg"

const MainPageComponent = () => {
  return (
    <div className="">
      <div>
        <p className=" my-24 text-2xl text-center font-bold">
          Наши основные направления
        </p>
        <div className="grid-cols-3 grid gap-3 px-[15%]">
          <div className=" h-52">
            <Image
              src={livingRoomIcon}
              alt="icon"
              style={{ objectFit: "contain", margin: "auto" }}
              priority={true}
              width={95}
              height={80}
            ></Image>
            <p className="text-center mt-1 font-bold">
              Дизайн жилых интерьеров
            </p>
            <p className="text-center mt-1">Квартиры и загородные дома</p>
          </div>
          <div className=" h-52">
            <Image
              src={nonlivingRoomIcon}
              alt="icon"
              style={{ objectFit: "contain", margin: "auto" }}
              priority={true}
              width={80}
              height={80}
            ></Image>
            <p className="text-center mt-1 font-bold">Интерьер для бизнеса</p>
            <p className="text-center mt-1">
              Офисы, гостиницы, рестораны, кафе и др.
            </p>
          </div>
          <div className=" h-52 ">
            <Image
              src={archIcon}
              alt="icon"
              style={{ objectFit: "contain", margin: "auto" }}
              priority={true}
              width={80}
              height={80}
            ></Image>
            <p className="text-center mt-1 font-bold">
              Архитектура и проектирование
            </p>
            <p className="text-center mt-1">
              Архитектурное и инженерное проектирование
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full px-[15%]">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">
          ЛАКОНИЧНО, СДЕРЖАННО, ЭЛЕГАНТНО
        </p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <div className="text-center px-[15%]">
        <p className=" mt-8 mb-44 min-w-fit">
          Принципом работы является подход к формированию лаконичного, но
          функционального пространства. Мы предлагаем полный спектр услуг: от
          разработки дизайн-проекта до его реализации "под ключ".
        </p>
      </div>
    </div>
  )
}

export default MainPageComponent
