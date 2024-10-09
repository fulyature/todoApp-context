import AppRouter from "./router/AppRouter";
import "./App.css";
import TodoProvider from "./context/TodoProvider";
function App() {
  return (
    <TodoProvider>
      <AppRouter />
    </TodoProvider>
  );
}

export default App;
