import {useState} from "react";


const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const {users} = props
    const [allusers, setUsers] = useState(users)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState ("");
    const [confirmPasswordError, setConfirmPasswordError] = useState ("");

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("Name Must Be Longer Than 2 Characters");
        } else {
            setFirstNameError("");
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name Not Valid, please enter more than 2 characters")
        } else {
            setLastNameError("");
        }
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email Not Valid");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password needs to be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    };

    const createUser = (e) => {
    e.preventDefault();

		// I tried 2 different ways of having all my validations in one to halt the user from submitting the form
		// without all the correct information
		// but what the issue is that users can just submit a blank form because the validations are only checking length, etc. once they click in.
		//implemented this quick check to see if there all fields are filled out 
		if(!firstname || !lastname || !email || !password || !confirmpassword) {
			alert("Please fill out all the fields");
			return; //this specifically so that when the user goes to "submit the form - nothing else is executed."
		}
		


    
    if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError) {
        const newUser = {firstname, lastname, email, password, confirmpassword};
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setHasBeenSubmitted(true);
            setUsers([...allusers, newUser]);
    } else {
        alert("There is an error with your form, please fix before submitting")
    }



    };
    return (
        <>
        <fieldset>
            <legend>UserForm.jsx</legend>
        <form onSubmit= {createUser}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for creating a user!</h3> :
                <h3>Please create a user</h3>
            }
            
            <div>
                <label>First Name:</label>
                <input type="text" value={firstname} onChange={validateFirstName} />
                {firstNameError && <p>{firstNameError}</p>}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange={validateLastName} />
                {lastNameError && <p>{lastNameError}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={validateEmail} />
                {emailError && <p>{emailError}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={validatePassword} />
                {passwordError && <p>{passwordError}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={confirmpassword} onChange={validateConfirmPassword} />
                {confirmPasswordError && <p>{confirmPasswordError}</p>}
            </div>
						<div>
							{
							!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError ?
							<input type="submit" value="Create User"/> :
							<input type="submit" value="Create User" disabled/> 
						}

						</div>
        </form>
        </fieldset>
        <fieldset>
            <legend>Info</legend>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmpassword}</p>
        </fieldset>
        <fieldset>
            <legend>Users</legend>
            <h3>All Users</h3>
						<ul>
						{allusers.map((user, index) => (
							<li key={index}>
								<p>First Name: {user.firstname}</p>
								<br />
								<p>Last Name: {user.lastname}</p>
								<br />
								<p>Email: {user.email}</p>
							</li>
						))}
						</ul>

        </fieldset>
        </>
    );
};

export default UserForm