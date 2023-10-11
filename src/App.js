import AllReports from "./pages/AllReports";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/",
          element: <Welcome></Welcome>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        { path: "/sales", element: <Sales></Sales> },
        {
          path: "/Allreports",
          element: <AllReports></AllReports>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
