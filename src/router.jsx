import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { DetailArticle } from "./pages/DetailArticle"
import { AdminPage } from "./pages/AdminPage"
import { Create } from "./pages/Create"
import { Dashboard } from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:username/:slug",
    element: <DetailArticle />
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "create",
        element: <Create />
      }
    ]
  }
])

export function Router(){
  return (
    <RouterProvider router={router} />
  )
}