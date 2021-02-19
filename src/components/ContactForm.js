import React, {useState} from 'react'
import styled from 'styled-components'
import * as emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    emailSent:null
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const { register } = useForm();



    const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_64la3dm', 'template_qf91iyo', e.target ,'user_eZC4b4nANEXPZwpXJw4VO')
    .then((response) => {
      // console.log('SUCCESS!');
       setValues({
        name:"",
        email:"",
        message:"",
        emailSent:true
    });

    }, (err) => {
       // console.log('FAILED...', err);
    });
    e.target.reset();

  }

  return (
    <>
      <FormContainer>
      <h1>Contact Form</h1>
      <Form onSubmit={handleSubmit}   >

        <FormItem>
          <Label htmlFor="name">Your Name:</Label>
            <Input type="text"
                  name='name'
                  placeholder='Tatiana'
                  value={values.name}
                  onChange={handleChange}
                  ref={register({
    required: 'Email is required',
  })} />
        </FormItem>

        <FormItem>
          <Label htmlFor="email">Email:</Label>
            <Input type='email'
                  name='email'
                  placeholder='Tatiana@email.com'
                  value={values.email}
                  onChange={handleChange}
                  ref={register({
    required: 'Email is required',
  })} />
        </FormItem>

        <FormItem>
          <Label htmlFor="message">What's up?</Label>
            <Message rows="5"
                    placeholder='Lets do something!'
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    ref={register({
    required: 'Email is required',
  })}/>
        </FormItem>

          <Submit>
            Submit
          </Submit>
          {values.emailSent === true && <p>Thanks! I'll get back to you ASAP</p>}
          {values.emailSent === false && <p> Hmm Something went wrong. Try again?</p>}
        </Form>
      </FormContainer>
    </>
  )
}

export default ContactForm;

const FormContainer = styled.div `
  padding:3rem 0;
  margin: 100px auto;
  width: 50vw;
  border-radius: 10px;
  height: auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:rgba(244,244,244,0.2);

  @media screen and (max-width:786px){
    width: 75vw;
  }
  @media screen and (max-width:480px){
    width: 90vw;
  }
`

const Form = styled.form `
  margin-top:3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormItem = styled.div `
  display:flex;
  flex-direction:column;
  margin-bottom: 0.5rem;
  width: 80%;
`
const Label = styled.label `
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 6px;
  color: #f26a2e;
`
const Input = styled.input `
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  border: none;
`
const Message = styled.textarea `
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  border: none;
  height:200px;
`
const Submit = styled.button `
  background:#f26a2e;
  white-space:nowrap;
  padding: 10px 32px;
  font-size: 20px;
  color:#fff;
  outline:none;
  border:none;
  min-width:100px;
  text-decoration:none;
  transition:0.3s !important;
  border-radius: 50px ;
  margin-top:20px;

  &:hover{
    background:#077bf1;
    transform:translateY(-2px);
  }

  &:active{
    transform:scale(0.95);
  }
`

