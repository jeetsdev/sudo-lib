import "./App.css";
import { Header, MyToast } from "./components";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { NavigationRoutes } from "./routes/navigationRoutes";

function App() {
	// setting document title here...
	useDocumentTitle();

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
