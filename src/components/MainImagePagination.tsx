"use client"
import Image from "next/image"
import { useState } from "react"
import pagination_icon_right from "../../public/pagination_right.png"
import pagination_icon_left from "../../public/pagination_left.png"
import curcle_default from "../../public/pagination_curcle_default.png"
import curcle_active from "../../public/pagination_curcle_active.png"
import { Transition } from "react-transition-group"

interface IImages {
	id: number
	src: string
}
const mainImages: IImages[] = [
	{
		id: 1,
		src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/969bf269371699.5b7eb39fcef9b.jpg"
	},
	{
		id: 2,
		src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d88d0a69371699.5b7eb39fcf618.jpg"
	},
	{
		id: 3,
		src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4d594969371699.5b7eb39fd0382.jpg"
	}
]

export default function MainImagePagination() {
	const [img, setImg] = useState(mainImages[0])
	const [loader, setLoader] = useState(true)
	const toTheLeft = () => {
		if (mainImages.indexOf(img) === 0) {
			setImg(mainImages[mainImages.length - 1])
		} else {
			setImg(mainImages[mainImages.indexOf(img) - 1])
		}
	}
	const toTheRight = () => {
		if (mainImages.indexOf(img) === mainImages.length - 1) {
			setImg(mainImages[0])
		} else {
			setImg(mainImages[mainImages.indexOf(img) + 1])
		}
	}
	const activateImage = (item: IImages): any => {
		if (mainImages.indexOf(item) || mainImages.indexOf(item) === 0) {
			return setImg(mainImages[mainImages.indexOf(item)])
		}
	}
	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 }
	}

	return (
		<div className="flex-col items-center min-h-1/2">
			<div className="min-h-1/2 relative -top-16">
				<Transition in={true} timeout={1000} unmountOnExit mountOnEnter>
					{state => (
						<Image
							src={img.src}
							alt="photo"
							fill={true}
							style={{
								objectFit: "cover",
								objectPosition: "bottom",
								zIndex: "-1"
							}}
							className=" transition-all"
						/>
					)}
				</Transition>
			</div>
			<div className="absolute top-[30%] flex justify-between w-[61%] px-2">
				<button onClick={() => toTheLeft()} className=" w-5">
					<Image src={pagination_icon_left} alt="left"></Image>
				</button>
				<button onClick={toTheRight} className=" w-5">
					<Image src={pagination_icon_right} alt="right"></Image>
				</button>
			</div>
			<div className="relative h-fit flex justify-center w-full bottom-24">
				{mainImages.map(item => {
					if (item.id === img.id) {
						return (
							<button onClick={() => activateImage(item)} key={item.id}>
								<Image
									src={curcle_active}
									alt="icon"
									width={14}
									height={14}
									className="mx-2"
								/>
							</button>
						)
					} else {
						return (
							<button onClick={() => activateImage(item)} key={item.id}>
								<Image
									src={curcle_default}
									alt="icon"
									width={14}
									height={14}
									className="mx-2"
								/>
							</button>
						)
					}
				})}
			</div>
		</div>
	)
}
