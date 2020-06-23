import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-icons-kit'
import { github } from 'react-icons-kit/feather'
import fire from './../api/firebase'
export class Login extends Component {
    state = {
        islogging: false, 
    }
    login = () => {
        this.setState({ islogging: true })
        fire.login(this.props.dispatch, this.props.user).then((u) => { 
            localStorage.setItem('authedUser',u.uid)
            this.props.dispatch({type:'UPDATE_USER',user:u})
            this.props.history.push('/')
        })
    }
    render() { 
        return (
            <>
                Login
                {
                this.state.islogging ?
                <div>logging....</div>
                :
                <button className="git-btn" onClick={this.login}><Icon icon={github} /> Sign in with GitHub</button>
                }
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(Login)
