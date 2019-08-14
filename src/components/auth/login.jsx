import React, {useState} from 'react';
import { Card, TextField, CardContent, Button, CardActions } from '@material-ui/core';
import { createSession, checkSession } from "./auth";

const Login = () => {
    
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div className="login">
            <Card>
                <p>Login!</p>
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
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => createSession(values.email, values.password)} color="primary">
                        Enter!
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
  
}

export default Login