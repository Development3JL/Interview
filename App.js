import "./css/bootstrap-theme.css";
import "./css/bootstrap-theme.css.map";
import "./css/bootstrap-theme.min.css";
import "./css/bootstrap-theme.min.css.map";
import "./css/bootstrap.css";
import "./css/bootstrap.css.map";
import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
import "./css/components.css";
import "./css/core.css";
import "./css/datepicker.css";
import "./css/elements.css";
import "./css/icons.css";
import "./css/menu_md.css";
import "./css/menu.css";
import "./css/pages.css";
import "./css/responsive.css";
import "./css/variables.css";

import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MyTasks from "./components/MyTasks";
import ManageTasks from "./components/ManageTasks";
import CompletedTasks from "./components/CompletedTasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/managetasks" Component={ManageTasks} />
					<Route path="/myTasks" Component={MyTasks} />
					<Route path="/completedtasks" Component={CompletedTasks} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
