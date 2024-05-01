"use client";

import React, { FormEvent, useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phno: '',
  message: ''
}

const Waitlist = () => {
  const [formInput, setFormInput] = useState(INITIAL_STATE);

  const resetFormData = () => {
    setFormInput(INITIAL_STATE);
  }

  const onChangeHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormInput({ ...formInput, [name]: value})
    console.log(formInput)
  }

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    })

    const content = await response.json();

    alert(content.data.tableRange);

    resetFormData();
  }

  return (
    <form className="flex flex-col" onSubmit={onSubmitHandler}>
      <input placeholder="Name" onChange={onChangeHandler} name="name" value={formInput.name}/>
      <input placeholder="Email" onChange={onChangeHandler} name="email" value={formInput.email}/>
      <input placeholder="Phone Number" onChange={onChangeHandler} name="phno" value={formInput.phno}/>
      <textarea placeholder="Message" onChange={onChangeHandler} name="message" value={formInput.message}></textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Waitlist;