import { RouterProvider } from "react-router-dom";
import { Button } from '@yumyumApp/button';
import { router } from "@yumyumApp/router";

function App() {

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App;
