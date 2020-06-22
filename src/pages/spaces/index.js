import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import create from './create' 
import view from './view' 
export class Spaces extends Component {
    render() {
        return (
            <div>
                Spaces for fun
                <Switch>
                    <Route component={view} path ="/w/:wid/:sid"/> 
                    <Route component={create} path ="/w/:wid/"/> 
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Spaces)
