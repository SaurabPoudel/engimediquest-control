import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Register } from "./components/modules/Users/Register/Register";
import { Login } from "./components/modules/Users/Login/Login";

const LOGIN_ROUTE = "/login";
const REGISTER_ROUTE = "/register";
export default function Layout() {
  //   const location = useLocation();
  return (
    <>
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <AuthenticatedRoutes />
      </Routes>
    </>
  );
}
function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
}
