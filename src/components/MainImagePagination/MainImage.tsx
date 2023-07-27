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
        timeout={250}
        classNames="transitions"
        appear={true}
      >
        <div className="h-screen w-full absolute">
          <Image
            src={img.img.src}
            alt="photo"
            fill={true}
            priority={true}
            style={{
              objectFit: "cover",
              objectPosition: "50% 70%",
              zIndex: "-20"
            }}
          />
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
