import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import create from './create'
import view from './view'
export class Snippets extends Component {
    componentDidMount(){ 
    }
    render() {
        return (
            <div>
                Snippets home
                <Switch>
                    <Route component={view} path="/:wid/:sid/:cid"/> 
                    <Route component={create} path="/:wid/:sid/"/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets)
