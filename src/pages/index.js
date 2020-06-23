import React, { Component } from 'react'
import { connect } from 'react-redux'  
export class Home extends Component {
    componentDidMount(){
        // this.props.user.autherduser
    }
    render() {
        return (
            <div>
                home
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
