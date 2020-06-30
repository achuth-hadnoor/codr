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
                        <Route component={viewSnippets} path="/w/:wid/s/s:id/c/:cid" />
                        <Route component={createSnippets} path="/w/:wid/s/s:id/c" />
                        <Route component={view} path="/w/:wid/s/s:id/c" />
                        <Route component={create} path="/w/:wid/s" />
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
