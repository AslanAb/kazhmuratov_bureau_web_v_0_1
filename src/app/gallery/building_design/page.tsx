import { building_design_projects } from "@/app/data"
import Image from "next/image"
import { IProject } from "@/app/models"
import Link from "next/link"

export default function BuildingDesignPage() {
	return (
		<section className="w-full px-[15%] py-8 grid-cols-3 grid gap-3 min-h-[90vh]">
			{building_design_projects.map((project: IProject) => {
				return (
					<Link href="">
						<div className="">
							<div className="w-full h-[35vh] relative">
								<Image
									src={project.src_of_images[0].src}
									alt="project_name"
									fill={true}
									priority={true}
									style={{
										objectFit: "cover",
										objectPosition: "50% 70%"
									}}
								/>
							</div>
							<h1 className="flex justify-center">{project.project_name}</h1>
						</div>
					</Link>
				)
			})}
		</section>
	)
}