	import styled from "@emotion/styled"
	import { useState } from 'react'
	
	
	
	function LandingApp() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [usernameErrors, setUsernameErrors] = useState("")
	const [passwordErrors, setPasswordErrors] = useState("")
	
	const handlePassword = (event) => {
	setPassword(event.target.value)
	}
	const handleUsername = (event) =>{
	setUsername(event.target.value)
	}
	
	const validateForm = ()=>{
	let isValid = true
	
	if(!username){
	setUsernameErrors("Username is required")
	isValid = false
	} else {
	setUsernameErrors("")
	}
	if(!password){
	setPasswordErrors("Password is required")
	isValid = false
	
	} else {
	setPasswordErrors("")
	}
	return isValid
	}
	
	const handleSubmit = (event) =>{
	event.preventDefault()
	
	if(validateForm()){
	alert('${username}, ${password}')
	
	}
	
	}
	
	return (
	<Container>
	<Card>
	<Form onSubmit={handleSubmit}>
	<h2> Login</h2>
	<Note> Login to your Account</Note>
	<Inputdiv>
	
	<Input type="text" value={username} onChange={handleUsername} placeholder="Enter your username" />
	{usernameErrors && <div style={{color:"red"}}>{usernameErrors}</div>}
	</Inputdiv>
	
	<Inputdiv>
	
	<Input type="password" value={password} onChange={handlePassword} placeholder="Enter Password" />
	{passwordErrors && <div style={{color:"red"}}>{passwordErrors}</div>}
	</Inputdiv>
	
	
	<Button type='submit'>Login</Button>
	
	
	
	
	
	</Form>
	
	</Card>
	
	
	</Container>
	)
	}
	
	export default LandingApp
	
	const Container = styled.div`
	background-color: rgba(0,0,0, 0.9);
	height: 100vh;
	display:flex;
	align-items: center;
	justify-content: center;
	`
	const Card = styled.div`
	max-width: 30%;
	height: 80%; 
	padding: 1rem 15px;
	background-color: #fff;
	min-width: 300px;
	border-radius: 5px;
	
	`
	const Form = styled.form`
	width: 100%;
	`
	
	const Note = styled.p`
	font-size: 12px;
	color: rgba(0,0,0,0.5);
	border-bottom: rgba(0,0,0,0.5);
	`
	const Inputdiv = styled.div`
	margin-bottom : 30px;
	width: 100%;
	
	`
	const Input = styled.input`
	padding : 1rem 0.5rem;
	background-color:#f2f2f2;
	width: 100%;
	border-radius: 3px;
	outline:none;
	border: none;
	box-sizing: border-box;

	`

	const Button = styled.button`
	padding : 2px 50px;
	height: 40px;
	font-size: 1rem;
	color: white;
	font-weight: Bold;
	background-color: #3598dc;
	border-radius: 5px;
	text-align: center;
	cursor:pointer;
	border: none;
	
	`
	
	
	
	
	

	
	
	
	
