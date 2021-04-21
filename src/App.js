import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {
  return (
    <div className="todo-app">
      <h1 className='main-heading'>Todo APP</h1>
      <TodoList/>
    </div>
  );
}

export default App;
