import Image, { StaticImageData } from "next/image"
interface ICardImageAndText {
	cardImage: StaticImageData
	text: string
}

function GalleryCard({ cardImage, text }: ICardImageAndText) {
	return (
		<div className="w-full relative h-full flex items-center">
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
			<h1 className=" text-2xl font-bold text-white w-1/2 ml-4">{text}</h1>
		</div>
	)
}

export default GalleryCard
