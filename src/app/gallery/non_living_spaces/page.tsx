import { non_living_spaces_projects } from "@/app/data"
import Image from "next/image"
import { IProject } from "@/app/models"
import Link from "next/link"

export default function NonLivingSpacesPage() {
  return (
    <section className="w-full px-[15%] py-8 grid-cols-3 grid gap-3 h-fit mt-32">
      {non_living_spaces_projects.map((project: IProject) => {
        return (
          <Link href={`/gallery/non_living_spaces/${project.id}`}>
            <div className="w-full h-[35vh] relative text-transparent hover:text-white hover:bg-black hover:bg-opacity-30">
              <Image
                src={project.src_of_images[0].src}
                alt="project_name"
                fill={true}
                priority={true}
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 70%",
                  zIndex: "-1"
                }}
              />
              <div className="bottom-0 absolute w-full flex justify-center">
                <h1 className="text-2xl font-semibold">
                  {project.project_name}
                </h1>
              </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}
