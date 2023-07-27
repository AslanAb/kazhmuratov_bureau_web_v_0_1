"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Profile() {
  const router = useRouter()
  let data = null
  if (localStorage.getItem("user")) {
    // @ts-ignore
    data = JSON.parse(localStorage.getItem("user"))
  }
  useEffect(() => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      router.push("/auth")
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/auth")
  }

  return (
    <div className="mt-32 w-full px-[15%]">
      <div className="flex items-center w-full mb-12">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">Личные данные</p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <h1>
        Имя: <strong>{data?.name}</strong>
      </h1>
      <h2>
        Почтовый адрес: <strong>{data?.email}</strong>
      </h2>
      <div className="flex items-center w-full mt-32">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">
          ЛАКОНИЧНО, СДЕРЖАННО, ЭЛЕГАНТНО
        </p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <div className="text-center">
        <p className=" mt-8 mb-44 min-w-fit">
          Принципом работы является подход к формированию лаконичного, но
          функционального пространства. Мы предлагаем полный спектр услуг: от
          разработки дизайн-проекта до его реализации "под ключ".
        </p>
      </div>
      <button
        className="mb-44 h-16 bg-opacity-50 bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full "
        onClick={logOut}
      >
        <span className="text-2xl">Выйти</span>
      </button>
    </div>
  )
}
