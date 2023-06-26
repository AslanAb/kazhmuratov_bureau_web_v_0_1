"use client"
import Image from "next/image"
import { useState } from "react"
import {
	pagination_curcle_active,
	pagination_curcle_default,
	pagination_left,
	pagination_right
} from "@/../../public"
import MainImage from "@/components/MainImagePagination/MainImage"
import { CSSTransition } from "react-transition-group"
import "@/components/MainImagePagination/MainImage.css"
import mainImages from "@/app/data/main_page_images"
import IImages from "@/app/models"

export default function MainImagePagination() {
	const [img, setImg] = useState(mainImages[0])

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

	return (
		<div className="flex-col items-center -z-10">
			<div className="">
				<CSSTransition
					in={true}
					timeout={1000}
					classNames="transitions"
					appear={true}
				>
					<MainImage img={img} />
				</CSSTransition>
			</div>
			<div className="absolute top-[50%] flex justify-between px-[5%] w-full">
				<button onClick={toTheLeft} className="w-8">
					<Image src={pagination_left} alt="left"></Image>
				</button>
				<button onClick={toTheRight} className="w-8">
					<Image src={pagination_right} alt="right"></Image>
				</button>
			</div>
			<div className="absolute h-fit flex justify-center w-full bottom-10">
				{mainImages.map(item => {
					return (
						<button onClick={() => activateImage(item)} key={item.id}>
							<Image
								src={item.id === img.id ? pagination_curcle_active : pagination_curcle_default}
								alt="icon"
								width={16}
								height={16}
								className="mx-2"
							/>
						</button>
					)
				})}
			</div>
		</div>
	)
}
