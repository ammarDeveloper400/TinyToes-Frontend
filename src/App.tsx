import { createBrowserRouter, RouterProvider } from "react-router";
import { authRoutes, appRoutes } from "./routes";

const routes = [...appRoutes, ...authRoutes];
const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
