import Image, { StaticImageData } from "next/image"
interface ICardImageAndText {
	cardImage: StaticImageData
	text: string
}

function GalleryCard({ cardImage, text }: ICardImageAndText) {
	return (
		<div className="w-full relative h-full flex items-center justify-center text-transparent  hover:text-white hover:bg-black hover:bg-opacity-30">
			<Image
				src={cardImage.src}
				fill={true}
				style={{
					objectFit: "cover",
					objectPosition: "center",
					zIndex: "-1"
				}}
				alt="living_spaces"
				placeholder="blur"
				blurDataURL={cardImage.blurDataURL}
			/>
			<h1 className="text-2xl font-bold w-2/3 text-center">{text}</h1>
		</div>
	)
}

export default GalleryCard
