export const WelcomePage = () => {
  return (
    <div className="  bg-zinc-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-1/2">
        <h1 className="text-xl  font-bold">Привет, мир!👋 </h1>
        <p className="text-md ">
          Ты попал на простое веб-приложение начинающего fullstack разработчика
        </p>
        <p className="text-md">Для продолжения зарегистрируйся или авторизуйся</p>
      </div>
    </div>
  );
};
