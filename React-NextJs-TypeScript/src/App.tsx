import "./App.css";
import { useRoutes } from "react-router-dom";
import Homepage from "./page/client/Homepage";
import ProductDetail from "./page/client/ProductDetail";
import AdminLayout from "./component/layout/AdminLayout";
import ClientLayout from "./component/layout/ClientLayout";
import Register from "./page/Register";
import Login from "./page/Login";
import ListProduct from "./page/admin/product/ListProduct";
import AddProduct from "./page/admin/product/AddProduct";
import EditProduct from "./page/admin/product/EditProduct";

function App() {
  const element = useRoutes([
    {
      path: "admin",
      element: <AdminLayout/>,
      children:[
        //show path element các trang admin
        {
          path: "products/list",
          element: <ListProduct/>
        },
        {
          path: "products/add",
          element: <AddProduct/>
        },
        {
          path: "products/edit/:id",
          element: <EditProduct/>
        },
      ]
    },
    {
      path: "/",
      element:<ClientLayout/>,
      children:[
        {
          path: "/",
          element:<Homepage/>,
        },
        {
          path: "/product/:id",
          element:<ProductDetail/>,
        },
        {
          path: "register",
          element: <Register/>,
        },
        {
          path: "login",
          element: <Login/>,
        }
      ]
    },
    
  ]);
  return element;
}

export default App;
