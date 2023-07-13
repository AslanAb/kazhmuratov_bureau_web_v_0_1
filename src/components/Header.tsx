import Image from "next/image"
import logo from "../../public/logo.jpg"
import Link from "next/link"

const Header = () => {
	return (
		<header className="h-16 flex items-center justify-between px-[22%] z-0 bg-white">
			<div className="h-14 w-14 z-10">
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						style={{ objectFit: "contain" }}
						priority={true}
						width={56}
						height={56}
					/>
				</Link>
			</div>
			<div className="h-full w-3/5 flex items-center justify-between z-10">
				<Link href="/">Главная</Link>
				<Link href="/gallery">Галерея</Link>
				<Link href="/tariffs">Тарифы</Link>
				<Link href="/contacts">Контакты</Link>
			</div>
			<button className="h-8 w-32 bg-gray-400 z-10">Войти</button>
		</header>
	)
}

export default Header
