import React, {useState} from 'react';
import { Card, TextField, CardContent, Button, CardActions } from '@material-ui/core';
import { registerUser, redirectIfLogged } from "./auth";

const SignUp = () => {
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });
    // eslint-disable-next-line  
    const [start, setStart] = useState(() => redirectIfLogged())

    const [checkVal, setCheckVal] = React.useState(false);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    function checkValues(email, password) {
        if (email && password) {
            registerUser(email, password)
        } else {
            setCheckVal(true)
        }
    }

    return (
        <div className="login">
            <Card>
                <p>SignUp!</p>
                <CardContent className="content">
                    <TextField
                        id="outlined-name"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        onChange={handleChange('password')}
                        type="password"
                        margin="normal"
                        variant="outlined"
                    />
                    {checkVal ? <p>Please write a valid email and password.</p> : ""}
                    <p><a href="/login">Click here to login</a></p>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => checkValues(values.email, values.password)} color="primary">
                        Register!
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
  
}

export default SignUp