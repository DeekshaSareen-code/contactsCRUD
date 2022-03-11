// Edit Contact Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import Contacts_form from "./contacts_form";
import {  useParams } from 'react-router-dom';
// EditContact Component
const EditContact = (props) => {
const [formValues, setFormValues] = useState({
	fname: "",
    lname:"",
	email: "",
	phone: "",
});
const { id } = useParams();
//onSubmit handler
const onSubmit = (contactObject) => {
	axios
	.put(
		"http://localhost:4000/contacts/update-contact/" +id,
		contactObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Contact successfully updated");
		props.history.push("/contact-list");
		} else Promise.reject();
	})
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/contacts/update-contact/"
		+ id
	)
	.then((res) => {
		const { fname, lname, email, phone } = res.data;
		setFormValues({ fname,lname, email, phone });
	})
	.catch((err) => console.log(err));
}, [id]);

// Return Contact form
return (
	<Contacts_form
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Contacts
	</Contacts_form>
);
};

// Export EditContact Component
export default EditContact;
