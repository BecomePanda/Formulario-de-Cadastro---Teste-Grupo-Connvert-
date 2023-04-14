import "./App.css";
import Form from "./components/form/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/form/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/form",
    element: <Form />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
