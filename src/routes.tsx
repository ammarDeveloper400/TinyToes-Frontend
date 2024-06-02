import Login from "./pages/auth/Login"
import Signup from './pages/auth/Signup'
import { Dashboard } from "./pages/dashboard/Dashboard"



interface Routes {
    name: string
    element:JSX.Element,
    path:string

}
export const routes:Routes[]=[
{name:"login", element:<Login />, path:"/login" },
{name:"signup", element:<Signup /> , path:"/signup"},
{name:'dashboard', element:<Dashboard />, path:"/"},
{name:'dashboard', element:<Dashboard />, path:"/dashboard"},

]