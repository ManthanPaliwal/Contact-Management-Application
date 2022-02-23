import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const result = await axios.get("http://localhost:3333/contacts");
        setContacts(result.data);
    }

    // ----------add data 2nd ---------------------------------
    const [addData, setAddData] = useState({
        id: "",
        name: "",
        number: "",
        email: ""
    })

    const handleChange = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3333/contacts", addData);

    }
    const { name, email, number } = addData;
    // -------------------dalete user---------------------------
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3333/contacts/${id}`)
        getData();
    }
    return (
        <>
            <table className='table mt-5'>
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">S.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={ { backgroundColor: "#20c997" } }>
                    {
                        contacts.map((contact, id) => (
                            <tr>
                                <th scope="row" key={ contact.id }>{ id + 1 }</th>
                                <td>{ contact.name }</td>
                                <td>{ contact.number }</td>
                                <td>{ contact.email }</td>
                                <td>
                                    <Link to={ `/edit/${id + 1}` } className='btn btn-success mr-2' style={ { backgroundColor: "#155845" } }>Edit</Link>
                                    <button className='btn btn-danger' style={ { backgroundColor: "#d34e5b" } } onClick={ () => deleteUser(contact.id) }>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h2>Add New Contact</h2>
            <form onSubmit={ (e) => {
                handleSubmit(e)
            } }>
                <input type="text"
                    placeholder="jonny"
                    required
                    name='name'
                    value={ name }
                    onChange={ (e) => handleChange(e) }
                />
                <input type="number"
                    placeholder="077777777"
                    required
                    name='number'
                    value={ number }
                    onChange={ (e) => handleChange(e) }
                />
                <input type="email"
                    placeholder="jonny@gmail.com"
                    required
                    name='email'
                    value={ email }
                    onChange={ (e) => handleChange(e) }
                />
                <button type='submit'>Add Contact</button>
            </form>
        </>
    )
}
export default Home;