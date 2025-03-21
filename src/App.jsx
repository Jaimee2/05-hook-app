import CounterApp from "./CounterApp.jsx";
import CounterWithCustomHook from "./CounterWithCustomHook.jsx";
import SimpleForm from "./02-useEffect/SimpleForm.jsx";
import FormWithCustomHooks from "./02-useEffect/FormWithCustomHooks.jsx";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
import FocusScreen from "./04-useReff/FocusScreen.jsx";
import Memorize from "./06-memos/Memorize.jsx";
import TodoApp from "./08-useReducer/TodoApp.jsx";

function App() {

    return (
        <div className="mb-30 p-10">
            <h1 className="p-5 text-4xl font-semibold">Hello world</h1>
            <CounterApp/>
            <CounterWithCustomHook/>
            <SimpleForm/>
            <FormWithCustomHooks/>
            <MultipleCustomHooks/>
            <FocusScreen/>
            <Memorize/>
            <TodoApp/>
        </div>
    )
}

export default App
