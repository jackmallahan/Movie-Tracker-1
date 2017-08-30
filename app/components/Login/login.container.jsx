import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/actions'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    console.log('state in mstp ', state);
    
    return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     handleSubmit: (newUser) => {
    //         console.log('in handleSubmit')
    //         dispatch(getUser(newUser))
    // }

    return bindActionCreators({getUser}, dispatch)
}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login)