import Image from "next/image"
import logo from "../../public/logo.jpg"
import Link from "next/link"
import insta from "../../public/instagram-menu.svg"

const Footer = () => {
  return (
    <footer className="bg-[rgb(33,33,33)] min-h-[275px] px-[15%] pt-12">
      <div className="flex justify-around items-start">
        <div className="flex items-center w-1/3">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "1px transparent white"
              }}
              priority={true}
              width={80}
              height={80}
            />
          </Link>
          <div className="text-white font-semibold text-2xl ml-2">
            <p>Kazhmuratov</p>
            <p>Bureau</p>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="h-full flex items-center justify-between text-white underline">
            <Link href="/gallery">Галерея</Link>
            <Link href="/tariffs">Тарифы</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
          <div className=" w-full mt-4 flex justify-center items-center">
            <Link
              href="https://www.instagram.com/kazhmuratov_bureau/"
              target="_blanc"
            >
              <Image src={insta} alt="insta" priority={true} height={36} />
            </Link>
          </div>
        </div>
        <div className="text-white font-semibold text-lg text-right w-1/3">
          <p>г. Астана, ул. Сарайшык 7/7, БЦ "Лазурный"</p>
          <p>Почта для поставщиков и резюме: kazhmuratov.bureau@gmail.com</p>
        </div>
      </div>
	  <p className="text-white mt-20">2023 © Студия дизайна интерьера Kazhmuratov Bureau</p>
    </footer>
  )
}

export default Footer
