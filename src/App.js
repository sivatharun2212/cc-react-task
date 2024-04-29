import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AppNavbar from "./components/Navbar";
function App() {
	return (
		<div className="App">
			<Router>
				<AppNavbar />
				<AppRoutes />
			</Router>
		</div>
	);
}

export default App;
