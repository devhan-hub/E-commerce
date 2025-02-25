import useAuth from "../customHook/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const currentUser = useAuth();

    if (currentUser === null) {
        return <div className="d-flex align-items-center justify-content">Loading...</div>;
    }

    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
