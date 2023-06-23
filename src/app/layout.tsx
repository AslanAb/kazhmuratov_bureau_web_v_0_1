import "./globals.css"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className=" px-[20%] min-h-screen w-screen">
				<Header />
				<main className="min-h-1/2">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
