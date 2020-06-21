import React from 'react';
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { grid, settings } from 'react-icons-kit/feather'
import './App.css'
import arrayMove from 'array-move';
import SortableComponent from './components/sortable/sortable-component';
import { x } from 'react-icons-kit/feather';
class App extends React.Component {
    state = {
        selectedWorkspace: {
            id: 1,
            title: 'mindhq',
        },
        user: {
            workspaces: [1, 2]
        },
        workspaces: [{
            id: 1,
            title: "mindHQ",
            spaces: ['1', '2']
        }, {
            id: 2,
            title: "open Snip",
            spaces: ['1', '2']
        }, {
            id: 3,
            title: "notes Snip Note",
            spaces: ['1', '2']
        }, {
            id: 4,
            title: "samelSnipper",
            spaces: ['1', '2']
        }],
        spaces: [{}],
        snips: [{}],
        editWorkspace:false
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ workspaces }) => ({
            workspaces: arrayMove(workspaces, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <Container>
                <div className="sidebar">
                    <Icon icon={grid} className="options" onClick={()=>{this.setState({editWorkspace:!this.state.editWorkspace})}}/>
                    <SortableComponent workspaces={this.state.workspaces} onSortEnd={this.onSortEnd} />
                    <div className="options">
                        <Icon icon={settings} className="settings" />
                        <span className="avatar"></span>
                    </div>
                </div>
                {
                    this.state.editWorkspace && <WorkspaceWrapper>
                        <WorkspaceContainer>
                            <Icon icon={x} onClick={()=>{this.setState({editWorkspace:!this.state.editWorkspace})}}/>
                    </WorkspaceContainer>
                    </WorkspaceWrapper>
                }
            </Container>
        )
    }
}

export default App;

const Container = styled.div`
display:flex;
height:100%;
width:100%;
position:absolute;
left:0;
top:0;
background:#121212;
color:#eee;
text-align:center;
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

const WorkspaceWrapper = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    justify-container:center;
    align-items:center;
    `;

const WorkspaceContainer = styled.div`
    background:#222;
    padding:10px;
    box-shadow:0px 0px 10px 1px rgba(0,0,0,.4);
    margin:auto;
    max-height:300px;
    max-width:400px;
    height:100%;
    width:100%;
    border-radius:5px;
`