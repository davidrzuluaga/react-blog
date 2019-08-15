import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon, TextField } from '@material-ui/core';
import cookie from 'react-cookies'
import axios from 'axios';

export default function CreateBlogEntry(props) {
  const [values, setValues] = React.useState({
    title: '',
    description: ''
  });
  const [open, setOpen] = React.useState(false);
  const [checkVal, setCheckVal] = React.useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleOpen() {
    setOpen(!open);
    setValues({title: '', description: ''});
    setCheckVal(false);
  }

  function checkValues(title, description, image) {
    if (title && description) {
        axios({
            headers: {'Authorization':`Token ${cookie.load('session').token}`},
            method: 'POST',
            url: `${process.env.REACT_APP_NODE_SERVER_URL}/api/blog`,
            data: { title, description, picture: image, user: cookie.load('session')._id }
        }).then(response => {
            let blogEntries = props.blogEntries.concat(response.data.Blog)
            props.setBlogEntries(blogEntries)
            handleOpen()
        }).catch((err) =>{
            alert("Algo salió mal.")
        })
    } else {
        setCheckVal(true)
    }
  }

  return (
    <>
        <Button color="inherit" onClick={handleOpen}>
            <Icon>
                <i className="material-icons">create</i>
            </Icon>
            Create a post
        </Button>
        {open ? <Dialog
            open
            onClose={handleOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">New post</DialogTitle>
            <DialogContent>
                <TextField
                    id="outlined-name"
                    label="Title"
                    value={values.title}
                    onChange={handleChange('title')}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="outlined-dense-multiline"
                    label="Content"
                    value={values.description}
                    onChange={handleChange('description')}
                    variant="outlined"
                    margin="normal"
                    rowsMax="10"                
                    multiline
                    fullWidth
                />
                <TextField
                    id="outlined-name"
                    label="Image Link"
                    value={values.image}
                    onChange={handleChange('image')}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                {checkVal ? <p>Please write a valid title and post content.</p> : ""}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => checkValues(values.title,values.description,values.image)} color="primary" autoFocus>
                    Create
                </Button>
                <Button onClick={handleOpen} color="primary" >
                    Close
                </Button>
            </DialogActions>
        </Dialog> : ""}
    </>
  );
}