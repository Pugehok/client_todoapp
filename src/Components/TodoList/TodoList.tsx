import { TodoDeck } from '../TodoDeck/TodoDecks';

//! Поправить верстку отностильно sidebar'а
export const TodoList = () => {
  return (
    <div className="  h-screen  w-1/2 inline-block mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-48 ml-96">
        <TodoDeck />
        <TodoDeck />
        <TodoDeck />
        <TodoDeck />
      </div>
    </div>
  );
};
