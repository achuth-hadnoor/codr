import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fire from './../../api/firebase'
import  SortableComponent from './components/sortable-component'
import arrayMove from 'array-move'
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
    onSortEnd = ({ oldIndex, newIndex }) => {
        let { workspaces} = this.props;
        workspaces = arrayMove(workspaces, oldIndex, newIndex) 
        this.props.dispatch({
            type:'UPDATE_WORKSPACES',
            workspaces 
        })
    };
    editWorkspace = ()=>{
        debugger
    }
    render() { 
        return (
            <Wrapper>
                <h3>Workspaces</h3>
                <button onClick={this.signout}>sign out</button> 
               
                <SortableComponent 
                    workspaces={this.props.workspaces} 
                    onSortEnd={this.onSortEnd}  
                    axis = "xy" 
                    onClick={this.editWorkspace}
                    />
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
 