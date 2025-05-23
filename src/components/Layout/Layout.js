import { Outlet } from "react-router-dom";
import { Header, Footer } from "../";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
