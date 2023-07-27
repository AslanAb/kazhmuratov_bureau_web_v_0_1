import Image from "next/image"
import logo from "../../public/logo.jpg"
import Link from "next/link"

const Header = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-[15%] z-10 bg-[#2C2C2C] absolute top-0">
      <div className="h-14 w-14">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            style={{ objectFit: "contain", borderRadius: "6%" }}
            priority={true}
            width={56}
            height={56}
          />
        </Link>
      </div>
      <div className="h-full w-3/5 flex items-center justify-between text-white">
        <Link href="/">Главная</Link>
        <Link href="/gallery">Галерея</Link>
        <Link href="/tariffs">Тарифы</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <Link href="/auth" className="h-8 w-32 bg-[#CCCCCC] flex justify-center items-center">Войти</Link>
    </header>
  )
}

export default Header
