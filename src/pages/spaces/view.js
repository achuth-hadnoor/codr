import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { Switch, Route } from 'react-router-dom'
import snippets from './../snippets' 

// show list of snippets 

export class view extends Component {  
      componentDidMount(){
        debugger;
    }
    render() {
        return (
            <div>
               {this.props.match.params.sid}
                <Switch>
                    <Route compobnent={snippets} path="/:wid/:sid/:cid"/>
                    <Route compobnent={snippets} path="/:wid/:sid/"/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(view)
