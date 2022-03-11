// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateContact from "./components/contacts_create";
import EditContact from "./components/contacts_update";
import ContactList from "./components/contacts_list";
import Home from "./components/home";
// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-contact"}
				className="nav-link">
				Contacts Management App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-contact"}
					className="nav-link">
					Create Contacts
				</Link>
				</Nav>

				<Nav>
				<Link to={"/contact-list"}
					className="nav-link">
					Contacts List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path="/"
					exact element={<CreateContact/>} />
				<Route path="/create-contact"
					element={<CreateContact/>} />
				<Route path="/edit-contact/:id"
					element={<EditContact/>} />
				<Route path="/contact-list"
					element={<ContactList/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;

