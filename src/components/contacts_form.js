import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const Contacts_form = (props) => {
const validationSchema = Yup.object().shape({
    // photo: Yup.object(),
	fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	phone: Yup.number()
	.positive("Invalid phone number")
	.integer("Invalid phone number")
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
		
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
        {/* <FormGroup>
		   <label >Contact Photo</label>
			<Field name="photo" type="file "
				className="form-control" accept="image/*" multiple = "false"/>
			<ErrorMessage
			name="photo"
			className="d-block invalid-feedback"
			component="span"
			/>
			
		</FormGroup> */}
		<FormGroup>
		    <label >First Name</label>
			<Field name="fname" type="text"
				className="form-control" placeholder="First Name"/>
			<ErrorMessage
			name="fname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
		    <label >Last Name</label>
			<Field name="lname" type="text"
				className="form-control" placeholder="Last Name"/>
			<ErrorMessage
			name="lname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
		    <label >Email</label>
			<Field name="email" type="text"
				className="form-control" placeholder="Email ID"/>
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
		    <label >Contact Number</label>
			<Field name="phone" type="number"
				className="form-control" placeholder="Contact"/>
			<ErrorMessage
			name="phone"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
)};

export default Contacts_form;
