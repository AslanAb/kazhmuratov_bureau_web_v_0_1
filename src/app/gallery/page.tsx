import Image from "next/image"
import living_spaces from "@/../../public/living_spaces.jpg"
import non_living_spaces from "@/../../public/non_living_spaces.jpg"
import building_design from "@/../../public/building_design.jpg"
import GalleryCard from "@/components/GalleryCard"
import Link from "next/link"
export default function GalleryPage() {
	return (
		<section className="w-full px-[20%] min-h-screen">
			<div className="w-full flex justify-between h-[50vh] mt-14">
				<Link href="/gallery/living_spaces" className="h-full w-[45%] block">
					<GalleryCard
						cardImage={living_spaces}
						text="Интерьер жилых помещений"
					/>
				</Link>
				<Link href="/gallery/non_living_spaces" className="h-full w-[45%] block">
					<GalleryCard
						cardImage={non_living_spaces}
						text="Интерьер нежилых помещений"
					/>
				</Link>
			</div>
			<div className="w-full flex justify-center h-[50vh] my-14">
				<Link href="/gallery/building_design" className="h-full w-[45%] block">
					<GalleryCard
						cardImage={building_design}
						text="Дезайн зданий и сооружений"
					/>
				</Link>
			</div>
		</section>
	)
}
