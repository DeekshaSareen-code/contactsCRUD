import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Contacts_delete from "./contacts_delete";

const ContactList = () => {
const [contacts, setContacts] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/contacts/")
	.then(({ data }) => {
		setContacts(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return contacts.map((res, i) => {
	return <Contacts_delete obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>First Name</th>
            <th>Last Name</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ContactList;
