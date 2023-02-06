import { Outlet } from "react-router-dom";

import Navigation from "../components/shared/navigation/Navigation";

function Layout() {
  return (
    <main style={{ width: "100vw" }}>
      {/* Navigation */}
      <Navigation />
      {/* Content */}
      <Outlet />
      {/*Footer */}
    </main>
  );
}
export default Layout;
