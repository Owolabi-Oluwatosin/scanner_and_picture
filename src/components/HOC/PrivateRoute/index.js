import { Navigate, Outlet, useLocation } from "react-router";

const useAuth = () => {
    return true;
}

export const PrivateRoute = (props) => {
    const isAuth = useAuth();
    const location = useLocation();
    return isAuth ? <Outlet /> : <Navigate replace to='/home' state={{ from: location }} />;
}