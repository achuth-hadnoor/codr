import React from 'react'
import { connect } from 'react-redux' 
import { Switch, Route } from 'react-router-dom'

import styled from 'styled-components'
import Icon from 'react-icons-kit'
import arrayMove from 'array-move'; 
import { grid, settings } from 'react-icons-kit/feather'
import SortableComponent from './../../components/sortable/sortable-component';

import './../../App.css'
 
import  view from './view' 
import create  from './create'

// list of worspaces and global search on the Top

class Workspaces extends React.Component { 
    onSortEnd = ({ oldIndex, newIndex }) => {
        let { workspaces} = this.props;
        workspaces = arrayMove(workspaces, oldIndex, newIndex)
        this.props.dispatch({
            type:'UPDATE_WORKSPACES',
            workspaces:workspaces
        })
    };

    render() {
        return (
            <Container>
                <div className="sidebar">
                    <Icon icon={grid} className="options" />
                    <SortableComponent workspaces={this.props.workspaces} onSortEnd={this.onSortEnd} />
                    <div className="options">
                        <Icon icon={settings} className="settings" />
                        <span className="avatar"></span>
                    </div>
                </div>                 
            <Switch> 
                <Route component={view} path="/w/:wid" /> 
                <Route component={create} path="/w/" /> 
            </Switch>
            </Container>
        )
    }
} 

const mapStateToProps = (state) => { 
    return({
        workspaces:state.workspaces
    })
}
 

export default connect(mapStateToProps)(Workspaces)


const Container = styled.div`
display:flex;
height:100%;
width:100%;
position:absolute;
left:0;
top:0;
background:#121212;
color:#eee; 
.options{
    padding:10px;
}

.sidebar{
    display:flex;
    flex-direction:column;
    }
    .options{
        display:flex;
        flex-direction:column;
        .avatar{
            height:32px;
            width:32px;
            background:#000;
            border-radius:25px;
            margin:5px 0px;
        }
        .settings{
            padding:10px;
        }
    }
}

`;
