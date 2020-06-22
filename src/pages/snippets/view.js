import React, { Component } from 'react'
import { connect } from 'react-redux'

export class viewSnippets extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.sid}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(viewSnippets)
