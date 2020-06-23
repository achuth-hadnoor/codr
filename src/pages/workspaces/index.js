import React from 'react'
import { connect } from 'react-redux' 
import { Switch, Route } from 'react-router-dom'
  
import  view from './view' 
import create  from './create'
import Sidebar from './components/sidebar'
import styled from 'styled-components';
import Icon from 'react-icons-kit'
import { chevronLeft,chevronRight } from 'react-icons-kit/feather';
import { bell } from 'react-icons-kit/feather';
// list of worspaces and global search on the Top
class Workspaces extends React.Component {  
    render() {
        return (
            <Wrapper>
                <Sidebar user={this.props.user} workspaces={this.props.workspaces} onSortEnd={this.onSortEnd} shouldCancelStart={this.shouldCancelStart}/>      
                   <Container>
                    <div  style={{display:'flex',padding:'0px 10px'}}>
                        <Icon icon={chevronLeft} style={{padding:10}} onClick={()=>{this.props.history.go(-1)}}/>
                        <Icon icon={chevronRight} style={{padding:10}} onClick={()=>{this.props.history.go(+1)}}/>
                        <div style={{flex:1}}/>
                        <Icon icon={bell} style={{padding:10}}/>
                    </div>
                    <Switch> 
                        <Route component={view} path="/w/:wid" /> 
                        <Route component={create} path="/w/" /> 
                    </Switch>         
                   </Container>
            </Wrapper>
        )
    }
} 

const mapStateToProps = (state) => { 
    return({
        workspaces:state.workspaces,
        user:state.user
    })
}
 
const Wrapper = styled.div`
    display:flex;
    flex:1;
    height:100%;
` 

const Container = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    height:100%;
` 

export default connect(mapStateToProps)(Workspaces)
 