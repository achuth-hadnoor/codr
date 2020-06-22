import React, { Component } from 'react'
import { connect } from 'react-redux'

export class createSnippets extends Component {
    render() {
        return (
            <div>
                Snippets create / view
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(createSnippets)
