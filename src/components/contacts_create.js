
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Contacts_form from "./contacts_form";


const CreateContact = () => {
const [formValues, setFormValues] =
	useState({ fname:'',lname:'', email: '', phone: '' })
// onSubmit handler
const onSubmit = contactObject => {
	axios.post(
'http://localhost:4000/contacts/create-contact',
	contactObject)
	.then(res => {
		if (res.status === 200)
		alert('Contact successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return contact form
return(
	<Contacts_form initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Contact
	</Contacts_form>
    )
}

export default CreateContact;
