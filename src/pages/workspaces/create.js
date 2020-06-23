import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fire from './../../api/firebase'
export class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWS: {
                id: null
            },
        }
    }
    signout = ()=>{
        fire.signOut().then(()=>{
            this.props.history.push('/login')
        })
    }
    render() { 
        return (
            <Wrapper>
                <h4>Workspaces</h4>
                <button onClick={this.signout}>sign out</button>
                <WsContainer>
                    {
                        this.props.workspaces.map((w, i) => (
                            <WsItem index={i} key={w + i}>
                                {w.title}
                            </WsItem>
                        ))
                    }
                </WsContainer>
                <h1>Create Workspaces</h1>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => { 
    return ({
    workspaces: state.workspaces
})}

export default connect(mapStateToProps)(create)
 
const Wrapper = styled.div`

`

const WsContainer = styled.div`

`
const WsItem = styled.div`

`