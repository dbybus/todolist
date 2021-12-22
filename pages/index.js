import { table, minifyRecords} from './api/utils/Airtable'
import Todo from '../components/Todo';
import { TodosContext } from '../contexts/TodosContext'
import { useContext, useEffect } from 'react';
import auth0 from './api/utils/auth0';
import TodoForm from '../components/TodoForm';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home({initialTodos}) {
  const {todos, setTodos} = useContext(TodosContext);
  const { user, error, isLoading } = useUser();

  useEffect(()=>{
    setTodos(initialTodos);
  }, [])

  return (
    <div>
      <main>
        {user ? (
            <>
              <TodoForm />
              <ul> 
                {
                  Array.isArray(todos) && todos.map(item => <Todo key={item.id} todo={item} />)
                }
              </ul>
            </>
        ) : (
            <p className="text-center mt-4">
                Please login to save todos!
            </p>
        )}
        
      </main>
      
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req, context.res);
  let todos = [];
  if (session?.user) {
      todos = await table
          .select({ filterByFormula: `userId = '${session.user.sub}'` })
          .firstPage();
  }
  return {
      props: {
          initialTodos: minifyRecords(todos),
      },
  };
}