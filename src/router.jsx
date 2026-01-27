import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { DetailArticle } from "./pages/DetailArticle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:username/:title",
    element: <DetailArticle />
  }
])

export function Router(){
  return (
    <RouterProvider router={router} />
  )
}