import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// placeholder for css
// import './customerAdd.css'

function ValidateForm(data) {
	if (data.firstName === '' || data.lastName === '' || data.emailAdd === '' || data.contactNumber) {
		return false
	}
}

function CustomerForm() {
	const [FormData, setFormData] = useState({
		firstName: '',
		lastName: '',
		emailAdd: '',
		contactNumber: ''
	})

	// const testPrint = e => {
	// 	e.preventDefault();
    //  console.log(FormData);
	// }

	const handleSubmit = async (event) => {
		event.preventDefault()
		
		if (ValidateForm(FormData) === false) {
			alert("All fields are mandatory.")
			return
		}

		// console.log(FormData.firstName)

		const data = {
			firstName: FormData.firstName,
			lastName: FormData.lastName,
			emailAdd: FormData.emailAdd,
			contactNumber: FormData.contactNumber
		}

		// console.log(JSON.stringify(data))

		fetch('http://localhost:8000/api/addCustomer', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(response => {
			if (response.status >= 200 && response.status < 300) {
				// console.log(response);
				window.location.reload();
				return response;
			} else {
				console.log(response)
				console.log('Something went wrong');
			}
				}).catch(err => err);
	}

	const handleChange = event => {
		setFormData({ 
			...FormData,
			[event.target.name]: event.target.value })
		// console.log(event.target.name)
		// console.log(event.target.value)
	}
	return(
		<div>
			<h1>Welcome to Customer Information Management Site</h1>
			<h2>New Customer</h2>
			{/* <form onSubmit={testPrint}> */}
			<form onSubmit={handleSubmit}>
				{/* <fieldset> */}
					<label>
						<p>First Name</p>
						<input name="firstName" onChange={handleChange}></input>
					</label>
					<label>
						<p>Last Name</p>
						<input name="lastName" onChange={handleChange}></input>
					</label>
					<label>
						<p>Email Address</p>
						<input name="emailAdd" onChange={handleChange}></input>
					</label>
					<label>
						<p>Contact Number</p>
						<input name="contactNumber" onChange={handleChange}></input>
					</label>
					<label>
						<br></br>
						<br></br>
						<input type='submit' />
					</label>
				{/* </fieldset> */}
			</form>
		</div>
	)
}

export default CustomerForm