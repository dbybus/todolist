import { createContext, useState } from "react";
const TodosContext = createContext();

const TodosProvider = ({children}) => {
    const [ todos, setTodos ] = useState([]);

    const refreshTodos = async () => {
        try {
            const res = await fetch('/api/getTodos');
            const latestTodos = res.json();
            setTodos(latestTodos);
        } catch (error) {
            console.log(error);
        }
    }

    const addTodo = async (todo) => {
        try {
            const res = await fetch('/api/createTodo',
            {
               method: 'POST',
               body: JSON.stringify(todo),
               headers: {'Content-Type': 'application/json'} 
            });
            const newTodo = res.json();
            setTodos((prevTodos) => {
                const updatedTodos = [newTodo, ...prevTodos];
                return updatedTodos;
            });
        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = async (updatedTodo) => {
        try {
            await fetch('/api/updateTodo',
            {
               method: 'PUT',
               body: JSON.stringify(updatedTodo),
               headers: {'Content-Type': 'application/json'} 
            });

            setTodos((prevTodos) => {
                const existingTodos = [...prevTodos];
                const existingTodo = existingTodos.find((item) => item.id === updatedTodo.id);
                existingTodo.fields = updatedTodo.fields;

                return existingTodos;               
            });
            console.log("MY Todos",todos)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {
        console.log(id)
        try {
            await fetch('/api/deleteTodo',
            {
               method: 'DELETE',
               body: JSON.stringify({id}),
               headers: {'Content-Type': 'application/json'} 
            });

            setTodos((prevTodos) => {
                return prevTodos.filter((item) => item.id !== id);
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <TodosContext.Provider 
            value={{
                todos,
                setTodos,
                refreshTodos,
                updateTodo,
                deleteTodo,
                addTodo,
            }}>
                {children}
            </TodosContext.Provider>
    )
}

export {TodosProvider, TodosContext};