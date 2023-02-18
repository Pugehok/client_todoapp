import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <nav className=" flex justify-between items-center h-[80px] px-5 bg-sky-200 text-white shadow  rounded-lg">
      <h3 className="font-bold uppercase text-2xl ">TodoApp</h3>
      <span>
        <Link className="mr-10 text-xl font-unboded" to="/login">
          Войти
        </Link>
        <Link className=" text-xl font-bold" to="/register">
          Зарегистрироваться
        </Link>
      </span>
    </nav>
  );
}
