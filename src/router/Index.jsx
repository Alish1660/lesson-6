import App from "../App";
import { Login } from "../components/login/Login";
import { Cars } from "../components/cars/Cars";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../components/main/main";
import Brand from "../components/brand/brand";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Cars />} />
          <Route path="brand" element={<Brand />} />
        </Route>
        {/* <Route path="cars" element={<Cars />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
