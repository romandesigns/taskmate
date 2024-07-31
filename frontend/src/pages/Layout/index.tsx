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
          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link
                to="/"
                className="text-sm underline opacity-75 hover:opacity-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/playground"
                className="text-sm underline opacity-75 hover:opacity-100"
              >
                Playground
              </Link>
            </li>
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
