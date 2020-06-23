import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-icons-kit'
import { github } from 'react-icons-kit/feather'
import fire from './../api/firebase'
import styled from 'styled-components'
export class Login extends Component {
    state = {
        islogging: false, 
    }
    login = () => {
        this.setState({ islogging: true })
        fire.login(this.props.dispatch, this.props.user).then((u) => {  
            localStorage.setItem('authedUser',u.uid)
            localStorage.setItem('user',JSON.stringify(u)) 
            u.theme = this.props.user.theme;
            u.onboard = this.props.user.onboard
            this.props.dispatch({type:'UPDATE_USER',user:u})
            this.props.history.push('/')
        })
    }
    render() { 
        return (
            <Wrapper>
                Login
                {
                this.state.islogging ?
                <div>logging....</div>
                :
                <GITHUBLOGIN onClick={this.login}><Icon icon={github} /> Sign in with GitHub</GITHUBLOGIN>
                }
            </Wrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(Login)

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`

const GITHUBLOGIN = styled.button`
    padding: 10px 15px;
    background:${props=>props.theme.color};
    color:${props=>props.theme.background};
    border:none;
    border-radius:5px;
`
