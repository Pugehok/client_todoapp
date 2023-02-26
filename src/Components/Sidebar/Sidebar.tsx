import { Link } from 'react-router-dom';
import Arrow from './arrow-back-svgrepo-com.svg';
import Logo from './Logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import Board from './Board.svg';
import UserPhoto from './user.jpg';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
export const Sidebar = () => {
  useEffect(() => {
    setStatusSideBar(Boolean(window.localStorage.getItem('isOpenSideBar')));
    console.log(`${isOpenSideBar} - its local `);
  });

  const [isOpenSideBar, setStatusSideBar] = useState(Boolean);

  const handelerSiderBarStatus = (arg: boolean) => {
    console.log(String(arg));
    if (arg) {
      window.localStorage.setItem('isOpenSideBar', String(arg));
      setStatusSideBar(arg);
    } else {
      window.localStorage.removeItem('isOpenSideBar');
      setStatusSideBar(arg);
    }
  };

  return (
    <div className="h-1/2 inline-block ">
      {isOpenSideBar ? (
        <div className="w-56 h-screen bg-sky-200 m-0  text-white rounded-lg shadow-lg border-1 border-sky-250 my-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-5">
              <Link to={'/'} className=" w-10  ml-1 text-xl font- float-left  ">
                <img src={Logo} className="w-10 h-9 float-left fill-white" />
              </Link>
              <span className="ml-1 text-xl font-medium">ToDo</span>
            </div>
            <button className="w-10 mr-3 mt-5">
              <img src={Arrow} onClick={() => handelerSiderBarStatus(false)} />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col mt-6">
            <img
              className="w-20 h-20 rounded-full border-2 border-sky-150"
              src={UserPhoto}
              alt=""
            />
            <span className="text-lg font-Unbounded mt-1">@pugehok</span>
            <ul className="flex flex-col ml-4 mt-3">
              <li className="flex items-center py-2">
                <Link to={'/todos'} className="text-2xl font-">
                  Мои доски
                </Link>
                <img src={Board} className="w-5 h-5 ml-2 " />
              </li>

              <li className="flex items-center py-2 ">
                <p className="text-2xl font-">Настройки</p>
                <img src={Settings} className="w-5 h-5 ml-2" />
              </li>

              <li className="flex items-center ml-5 pt-2 ">
                <p className=" text-2xl font-">Выйти</p>
                <img src={Settings} className="w-5 h-5 ml-2" />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-32 h-screen">
          <button className="w-10 mr-3 mt-5">
            <img
              src={Arrow}
              onClick={() => handelerSiderBarStatus(true)}
              className="bg-slate-400 w-10 h-10 rounded-full"
            />
          </button>
        </div>
      )}
    </div>
  );
};
