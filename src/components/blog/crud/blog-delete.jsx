import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import cookie from 'react-cookies'

export default function DeleteBlogEntry(props) {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function deleteEntry(id) {
    axios({
        url: `https://node-blog-api-app.herokuapp.com/api/blog/${id}`,
        headers: {'Authorization':`Token ${cookie.load('session').token}`},        
        method: "DELETE"
    }).then((res)=>{
        if (res.status === 200){
            let blogEntries = props.blogEntries.filter(element => element._id !== id)
            props.setBlogEntries(blogEntries)
            handleOpen()
        }
    },(err)=>{
        console.log(err)
    })
  }

  return (
    <>
        <Button size="small" color="primary" onClick={handleOpen}>
            Delete
        </Button>
        {open ? <Dialog
            open
            onClose={handleOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete the post {props.element.title}?</DialogTitle>
            <DialogActions>
                <Button onClick={() => deleteEntry(props.element._id)} color="primary" autoFocus>
                    Yes
                </Button>
                <Button onClick={handleOpen} color="primary" >
                    No
                </Button>
            </DialogActions>
        </Dialog> : ""}
    </>
  );
}