import '../styles/index.css'
import {TodosProvider} from "../contexts/TodosContext"
import { UserProvider } from "@auth0/nextjs-auth0";
export default function MyApp({ Component, pageProps }) {
  return (
      <TodosProvider>
        <div className="container mx-auto my-10 max-w-xl">
          <Component {...pageProps} />
        </div>
      </TodosProvider>

  );
}