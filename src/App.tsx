import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from './routes';



const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  )
}

export default App