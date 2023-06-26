import Image from "next/image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "@/components/MainImagePagination/MainImage.css"

interface IImage {
	img: {
		id: number
		src: string
	}
}

export default function MainImage(img: IImage) {
	return (
		<TransitionGroup>
			<CSSTransition
				key={img.img.id}
				timeout={1000}
				classNames="transitions"
				appear={true}
			>
				<div className="absolute h-screen w-full top-0">
					<Image
						src={img.img.src}
						alt="photo"
						fill={true}
						priority={true}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							zIndex: "-1"
						}}
					/>
				</div>
			</CSSTransition>
		</TransitionGroup>
	)
}


