import { Route, Routes} from 'react-router-dom'

// STYLES
import "../public/css/ga-styles.css";

/** CONTEXT */
import {
  GeneralContextProvider,
} from "./contexts";

// COMPONENTS
import { Home } from "./pages";
import SuperLayout from "./layout/SuperLayout.jsx";

function App() {
  return (
    <Routes>
      {["/", "/home"].map((path, i) => {
        return (
          <Route
            key={i}
            path={path}
            element={
                <SuperLayout>
                  <Home />
                </SuperLayout>
            }
          />
        );
      })}
    </Routes>
    // <Outlet />
  );
}

export default App
