import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <Outlet />
        </div>
    );
};

export default Layout;
