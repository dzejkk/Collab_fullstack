import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div className="main=layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
