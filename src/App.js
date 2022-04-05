import "./App.css";
import { Header } from "./components";
import { NavigationRoutes } from "./routes/navigationRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationRoutes />
    </div>
  );
}
export default App;
