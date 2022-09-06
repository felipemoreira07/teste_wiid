import { NavRoutes } from "./routes";
import { ColorModeContextProvider } from "./store/ColorModeContext";

function App() {
  return (
    <ColorModeContextProvider>
      <NavRoutes />
    </ColorModeContextProvider>
  );
}

export default App;
