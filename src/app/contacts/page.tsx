export default function ContactsPage() {
  return (
    <div className="mt-32 w-full px-[15%]">
      <div className="flex items-center w-full mb-12">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">КОНТАКТЫ</p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <h2>г. Астана, ул. Сарайшык 7/7, БЦ "Лазурный"</h2>
      <h2 className="mb-12">+7 702 516-9141 (WhatsApp, Telegram)</h2>
      <div className="flex items-center w-full">
        <div className="h-[1px] w-full border-black border"></div>
        <p className="font-semibold mx-2 min-w-fit">
          ЛАКОНИЧНО, СДЕРЖАННО, ЭЛЕГАНТНО
        </p>
        <div className="h-[1px] w-full border-black border"></div>
      </div>
      <div className="text-center px-[15%]">
        <p className=" mt-8 mb-12 min-w-fit">
          Принципом работы является подход к формированию лаконичного, но
          функционального пространства. Мы предлагаем полный спектр услуг: от
          разработки дизайн-проекта до его реализации "под ключ".
        </p>
      </div>
      {/* <button className="mb-44 h-16 bg-opacity-50 bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full">
        <span className="text-2xl">Оставить заявку</span>
      </button> */}
    </div>
  )
}
