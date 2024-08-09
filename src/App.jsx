import React from "react";
import { Route, Routes } from "react-router-dom";

const Layout = React.lazy(() => import("./layout/Layout"));

// Pages
const Login = React.lazy(() => import("./views/Login/Login"));
const Register = React.lazy(() => import("./views/Register/Register"));
const Page404 = React.lazy(() => import("./views/Page404"));
const Page500 = React.lazy(() => import("./views/Page500"));

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route
          exact
          path="/register"
          name="Register Page"
          element={<Register />}
        />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
