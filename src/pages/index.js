import React, { Component } from 'react'
import { connect } from 'react-redux'  
export class Home extends Component {
    componentDidMount(){  
        this.props.history.push('/w')  
        if(!this.props.user.onboard){
            this.props.history.push('/w')
          } 
          else{
              this.props.history.push('/onboarding')
          }
          
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
