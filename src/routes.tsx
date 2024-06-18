import AppLayout from "./layout/AppLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Categories from "./pages/categories/Categories";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";

interface Routes {
  name: string;
  element: JSX.Element;
  path: string;
}
export const authRoutes: Routes[] = [
  { name: "login", element: <Login />, path: "/login" },
  { name: "signup", element: <Signup />, path: "/signup" },
];

export const appRoutes: Routes[] = [
  {
    name: "Dashboard",
    element: (
      <AppLayout>
        <Dashboard />
      </AppLayout>
    ),
    path: "/",
  },
  {
    name: "Dashboard",
    element: (
      <AppLayout>
        <Dashboard />
      </AppLayout>
    ),
    path: "/dashboard",
  },
  {
    path: "/products",
    name: "Products",
    element: (
      <AppLayout>
        <Products />
      </AppLayout>
    ),
  },
  {
    name: "Category",
    path: "/categories",
    element: (
      <AppLayout>
        <Categories />
      </AppLayout>
    ),
  },
];
