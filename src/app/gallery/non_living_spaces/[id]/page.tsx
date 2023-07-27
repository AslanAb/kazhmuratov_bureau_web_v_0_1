"use client"
import { non_living_spaces_projects } from "@/app/data"
import Modal from "@/components/Modal"
import Image from "next/image"
import { Fragment, useState } from "react"

export default function NonLivingSpaceById({
  params
}: {
  params: { id: string }
}) {
  const data = non_living_spaces_projects[+params.id - 1]
  const [showModal, setShowModal] = useState(false)
  const [img, setImg] = useState(data.src_of_images[0])
  return (
    <Fragment>
      <div className="mt-32 px-[15%]">
        <div>
          <h1 className="text-2xl font-semibold mb-5">{data.project_name}</h1>
          <div className="h-[1px] w-full border-black border mb-5"></div>
          <h2 className="font-semibold mb-1">{data.location}</h2>
          <h2 className="font-semibold mb-5">{data.year}</h2>
          <div className="h-[1px] w-full border-black border mb-5"></div>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-16">
          {data.src_of_images.map((item) => {
            return (
              <div
                className="relative h-[35vh] w-full hover:scale-110 transition duration-200 ease-in-out delay-150"
                onClick={() => {
                  setShowModal(true)
                  setImg(item)
                }}
              >
                <Image
                  key={item.img_id}
                  src={item.src}
                  alt="project_image"
                  fill={true}
                  priority={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 70%"
                  }}
                />
              </div>
            )
          })}
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="relative h-[90vh]">
            <Image
              key={img.img_id}
              src={img.src}
              alt="img"
              fill={true}
              priority={true}
              style={{
                objectFit: "contain"
              }}
            />
          </div>
        </Modal>
      </div>
    </Fragment>
  )
}
