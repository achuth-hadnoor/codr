import React, { Component } from 'react'
import { connect } from 'react-redux'

export class create extends Component {
    render() {
        return (
            <div>
                create space
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(create)
