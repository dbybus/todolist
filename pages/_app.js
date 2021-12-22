import '../styles/index.css'
import {TodosProvider} from "../contexts/TodosContext"
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from '../components/Layout';
export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <TodosProvider>
          <div className="container mx-auto my-10">
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </div>
      </TodosProvider>
    </UserProvider>
  );
}