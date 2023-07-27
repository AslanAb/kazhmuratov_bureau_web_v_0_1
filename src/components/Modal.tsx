import Image from "next/image"

export default function Modal({
  isVisible,
  onClose,
  children
}: {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") {
      onClose()
    }
  }
  if (!isVisible) return null
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[90%] flex flex-col">
        <button
          className="place-self-end h-[30px]"
          onClick={() => onClose()}
        >
          <Image
            key="close-tag"
            src="/../public/close-page.png"
            alt="img"
            width={25}
            height={25}
          />
        </button>
        <div className="bg-white rounded">{children}</div>
      </div>
    </div>
  )
}
