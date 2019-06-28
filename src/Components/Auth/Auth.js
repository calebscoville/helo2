import React, {Component}  from 'react'
import axios from 'axios'
import RegisterForm from './RegisterForm'


class Auth extends Component {
    componentDidMount() {
        axios.get('/ctrl/user').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        this.props.id && this.props.history.push('/dashboard')
    }

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLoginInfoUpdate = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        axios
            .post('/ctrl/login', { username, password})
            .then((res) => {
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
            })
        e.target.username.value = ''
        e.target.password.value = ''
    }

    


    render() {
        return(
            <div>
                Auth 
                 
            <>
                <form onSubmit={this.handleUserLogin}>
                    <ul>
                    <li><input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.username}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        
                        
                    <li><input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleLoginInfoUpdate}
                        /></li>
                        <li><button>Log In</button></li>
                        </ul>

                        <RegisterForm />
                </form>
            </>
            
            </div>
        )
    }
}

export default Auth

// export default withRouter(connect(null, {updateUser}) (LoginForm))