import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditRow = () => {

    const [contact, setContact] = useState({
        id:"",
        name: "",
        number: "",
        email: ""
    })

    let { id } = useParams();

    let navigate = useNavigate();
    // --------------------get data first -------------------------
    useEffect(()=>{
        editableData();
    },[])

    const editableData = async () => {
        const result = await axios.get(`http://localhost:3333/contacts/${id}`)
        setContact(result.data);
    }

    // ----------------------modify in data-------------------------------
    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3333/contacts/${id}`, contact)
        navigate('/')
    }
    const { name, number, email } = contact;

    return (
        <div className='container'>
        <h2 style={ { fontWeight: "bolder" } }>Edit Contact</h2>
            <form onSubmit={ (e) => {
                onSubmit(e)
            } }>
                <div className='mt-3 mb-3'>
                    <input
                        type="text"
                        key={id}
                        required
                        placeholder='enter name'
                        name='name'
                        value={ name }
                        onChange={ (e) => onInputChange(e) }
                    />
                </div>
                <div className='mb-3'>
                    <input
                        type="number"
                        required
                        placeholder='enter phone number'
                        name='number'
                        value={ number }
                        onChange={ (e) => onInputChange(e) }
                    />
                </div>
                <div className='mb-3'>
                    <input
                        type="email"
                        required
                        placeholder='enter email'
                        name='email'
                        value={ email }
                        onChange={ (e) => onInputChange(e) }
                    />
                </div>
                <button type='submit' className='btn btn-primary '>Save</button>
            </form>
        </div>
    )
}
export default EditRow;