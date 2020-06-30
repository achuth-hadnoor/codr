import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWorkspaceByID } from '../../api'; 
import { Switch, Route } from 'react-router-dom';
import viewSpaces from '../spaces/view' 
import createSpaces from '../spaces/create'
// show list of spaces in the worspace to easily edit and create 

export class view extends Component {
    constructor() {
        super();
        this.state = {
            openNewSpace : false
        }
    }
    componentDidMount() {
        getWorkspaceByID(this.props.dispatch, this.props.workspace.id);
    }
    toggleNewSpacesModal = () => {
        this.setState((prevState) => ({
            openNewSpace: !prevState.openNewSpace,
        }));
    };

    render() {
        return (
            <div>
                {this.props.match.params.wid}
               {/* {list of spaces in the selected workspace} */} 
               <Switch>
                    <Route component={viewSpaces} path="/w/:wid/s/s:id" />
                    <Route component={createSpaces} path="/w/:wid/s" />
               </Switch>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps
    const { wid } = match.params;
    // const workspace = state.user.workspaces.filter(({id})=>id === wid && true)  
    return ({
        ...ownProps,
        user: state.user,
        workspace: state.workspaces,
        selectedWorkspace: state.workspace
    })
}

export default connect(mapStateToProps)(view)
