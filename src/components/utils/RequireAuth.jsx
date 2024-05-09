import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const roles = JSON.parse(localStorage.getItem("roles"));
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user
                ? <Navigate to="/not-found" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;