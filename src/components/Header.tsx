import Image from "next/image"
import logo from "../../public/logo.jpg"
import Link from "next/link"

const Header = () => {
	return (
		<header className="h-16 flex items-center justify-between z-10">
			<div className="h-full w-16 relative">
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						style={{ objectFit: "contain" }}
						fill={true}
					/>
				</Link>
			</div>
			<div className="h-full w-3/5 flex items-center justify-between">
				<Link href="/">Главная</Link>
				<Link href="/gallery">Галлерея</Link>
				<Link href="/tariffs">Тарифы</Link>
				<Link href="/contacts">Контакты</Link>
			</div>
			<button className="h-8 w-32 bg-gray-400">Войти</button>
		</header>
	)
}

export default Header
