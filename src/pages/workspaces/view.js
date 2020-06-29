import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { getWorkspaceByID } from '../../api';

// show list of spaces in the worspace to easily edit and create 

export class view extends Component {
    componentDidMount(){ 
        getWorkspaceByID(this.props.dispatch , this.props.workspace.id);
    }
    render() {
        return (
            <div>
                {this.props.match.params.wid}
                {/* {
                    show lists of spaces under workspace
                } */}
                {/* {
                    show list of snippets
                } */}
                {/* {
                    show selected snippet
                } */}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => { 
    const {match} = ownProps
    const {wid} = match.params;
    // const workspace = state.user.workspaces.filter(({id})=>id === wid && true) 
    debugger 
    return ({
        ...ownProps,
        user:state.user,
        workspace:state.user.workspaces[wid],
        selectedWorkspace: state.workspace
    })
}

export default connect(mapStateToProps)(view)
