import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <nav className=" flex justify-between items-center h-[80px] px-5 bg-sky-200 text-white shadow bg-white rounded-lg">
      <h3 className="font-bold uppercase ">TodoApp</h3>
      <span>
        <Link className="mr-10" to="/login">
          Войти
        </Link>
        <Link to="/register">Зарегистрироваться</Link>
      </span>
    </nav>
  );
}
