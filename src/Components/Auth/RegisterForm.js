import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
// import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'
// import 'reset-css'
import {Link} from 'react-router-dom'

// import {
//     AppContainer,
//     FormContainer,
//     Image,
//     FormHeader,
//     FormTitle,
//     FormInput,
//     FormBtn
//   } from '../AppStylesMany';

class RegisterForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            city: '',
            image: '',
        }
    }
    handleUserRegister = async (e) => {
        e.preventDefault()
        const { firstname, lastname, email, username, password, city, image } = this.state
        await axios
            .post('/ctrl/register', { firstname, lastname, email, username, password, city, image })
            .then((res) => {
                this.props.updateUser(res.data)
                // this.props.history.push('/patrondash')
            })
            .catch((err) => {
                console.log(err)
            })

        this.setState({
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            city: '',
            image: ''
        })
    }

    handleRegisterInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                {/* <FormContainer style={{ width: '115px', height: '150px', margin: 20, padding: '10px' }}> */}
                <form onSubmit={this.handleUserRegister}>
                    <ul>
                        <li>
                    <input
                        type='text'
                        placeholder='first name'
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='last name'
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                    <input
                        type='text'
                        placeholder='city'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                        </li>
                        <li>
                        <input
                        type='text'
                        placeholder='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleRegisterInfoUpdate}
                    />
                    </li>
                        <li>
                    <button onClick={this.handleUserRegister}>Register</button>
                    </li>
                    </ul>
                </form>
                {/* </FormContainer> */}
            </>
        )
    }
}



export default withRouter (RegisterForm)

// export default withRouter(connect(null, {updateUser}) (RegisterForm))