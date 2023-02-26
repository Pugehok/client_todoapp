import phto from '../../logo.svg';

export const TodoDeck = () => {
  return (
    <div className="ml-3 flex w-96">
      <div className=" pb-10 mr-0 bg-emerald-100 flex-col align-middle text-center">
        <img className="" src={phto} alt="" />
        <h1 className="pb-2 m-0">Name deck</h1>
        <p className="pb-2">Количество задач: </p>
        <p className="pb-2">Выполненных задач: </p>
        <p className="pb-2">Незакрытых задач: </p>
        <p className="pb-2">Ближайший дедлайн 26.02.2022 </p>
        <button className="rounded-lg bg-slate-100 w-36  hover:bg-slate-200 ">Перейти</button>
      </div>
    </div>
  );
};
