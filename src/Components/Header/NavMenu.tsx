export function NavMenu() {
  return (
    <nav className=" flex justify-between items-center h-[80px] px-5 bg-slate-300 text-white">
      <h3>TodoApp</h3>
      <span>
        <a className="mr-10" href="/">
          Войти
        </a>
        <a href="/">Зарегистрироваться</a>
      </span>
    </nav>
  );
}
