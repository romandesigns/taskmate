import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "../../providers/theme";
import { ModeToggle } from "@/components/ui/theme-toggle";

function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav>
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-black">
              TASKMATE
            </Link>
          </div>
          <ul>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
      {<Outlet />}
    </ThemeProvider>
  );
}

export default Layout;
