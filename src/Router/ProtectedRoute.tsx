import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
