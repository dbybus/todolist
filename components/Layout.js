import Navbar from './navbar'
import { useUser } from '@auth0/nextjs-auth0';
export default function Layout({ children }) {
    const { user, error, isLoading } = useUser();
    console.log(user)
  return (
    <>
      <Navbar user={user}/>
      <main>{children}</main>
    </>
  )
}