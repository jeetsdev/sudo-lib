import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { authToken } = useAuth();
    return authToken ? (
        children
    ) : (
        <Navigate to="/login" state={location.pathname} replace />
    );
};
