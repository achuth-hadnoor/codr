import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import spaces from '../spaces' 

// show list of spaces in the worspace to easily edit and create 

export class view extends Component {
    render() {
        return (
            <div>
                { this.props.match.params.wid }
                <Switch>
                    <Route component={spaces} path="/w/:wid/s/:sid"/>
                    <Route component={spaces} path="/w/:wid/s"/>
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
