import { Root } from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Root/>,
    children : [
      {
        path: "/home",
        element : <h2>Home</h2>,
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
