import AppLayout from "./layout/AppLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Categories from "./pages/categories/Categories";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Reviews from "./pages/reviews/Reviews";

interface Routes {
  name: string;
  element: JSX.Element;
  path: string;
}
export const authRoutes: Routes[] = [
  { name: "login", element: <Login />, path: "/login" },
  { name: "signup", element: <Signup />, path: "/signup" },
];
const withLayout = (component: JSX.Element) => (
  <AppLayout>{component}</AppLayout>
);
export const appRoutes: Routes[] = [
  {
    name: "dashboard",
    element: withLayout(<Dashboard />),
    path: "/",
  },
  {
    name: "dashboard-alt",
    element: withLayout(<Dashboard />),
    path: "/dashboard",
  },
  {
    name: "products",
    element: withLayout(<Products />),
    path: "/products",
  },
  {
    name: "categories",
    element: withLayout(<Categories />),
    path: "/categories",
  },
  {
    name: "reviews",
    element: withLayout(<Reviews />),
    path: "/reviews",
  },
];
