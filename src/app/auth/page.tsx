"use client"

import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import authService from "../services/auth.service"
import Field from "../ui/field/Field"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// import Router from "@/app/auth/routes"

export default function Auth() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [type, setType] = useState("login")
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onChange"
  })

  const { mutate } = useMutation(
    ["auth"],
    // @ts-ignore
    ({ email, password }) => authService.main(email, password, type),
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        setIsAuth(true)
        reset()
      }
    }
  )

  useEffect(() => {
    if (isAuth && localStorage.getItem("token")) {
      router.push("/profile")
    }
  }, [isAuth])

  const onSubmit = (data: any) => {
    mutate(data)
  }

  return (
    <div className="mt-32 w-full px-[15%] h-[50vh]">
      <div className="flex items-center w-full">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">ВОЙТИ</p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <div className="wrapper-inner-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name="email"
            register={register}
            options={{
              required: "Email is required"
            }}
            type="text"
            placeholder="Enter email"
          />

          <Field
            error={errors?.password?.message}
            name="password"
            register={register}
            options={{
              required: "Password is required"
            }}
            type="password"
            placeholder="Enter password"
          />

          <div className="flex justify-around items-center w-[50%] m-auto">
            <button
              onClick={() => setType("login")}
              className="w-32 bg-slate-800 text-white rounded mb-8"
            >
              Войти
            </button>
            <button
              onClick={() => setType("register")}
              className="w-48 bg-slate-800 text-white rounded mb-8"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
