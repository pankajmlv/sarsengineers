import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xayvnnwa");
  if (state.succeeded) {
      return <p style={{color: '#ffffff', fontWeight: 'bold'}}>Thanks for reaching out to us!!</p>;
  }
  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
      <div className="row mb-2">
        <div className='col'>
      <label htmlFor="email" style={{color: '#ffffff', fontWeight: 'bold'}}>
        Email Address
      </label>
      </div>
      <div className='col'>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      </div>
      <div className="row">
      <div className='col'>
      <label htmlFor="message" style={{color: '#ffffff', fontWeight: 'bold'}}>
        Message
      </label>
      </div>
      <div className='col'>
      <textarea
        id="message"
        name="message"
        cols={23}
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      </div>
      <div className="row justify-content-end mr-0 mt-2">
      <Button variant="contained" endIcon={<SendIcon />} type='submit' disabled={state.submitting}>
       Send
      </Button>
      </div>
    </form>
    </div>
  );
}