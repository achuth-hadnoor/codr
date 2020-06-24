import React, { Component } from 'react'
import { connect } from 'react-redux'

export class onboard extends Component {
    render() {
        return (
            <div>
                <h1>How would you like to use Snipcode</h1>
                <div>
                    <span style={{padding:10,margin:5}}>personal</span>
                    <span style={{padding:10,margin:5}}>work</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(onboard)
