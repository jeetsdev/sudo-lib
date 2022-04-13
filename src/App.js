import "./App.css";
import { Header, MyToast } from "./components";
import { NavigationRoutes } from "./routes/navigationRoutes";

function App() {
	return (
		<div id="main__app">
			<MyToast />
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
