import { Toaster } from "react-hot-toast";
import "./App.css";
import { Header } from "./components";
import { NavigationRoutes } from "./routes/navigationRoutes";

function App() {
  return (
    <div id="main__app">
      <Toaster position="bottom-right" reverseOrder={true} />
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <NavigationRoutes />
      </div>
    </div>
  );
}
export default App;
