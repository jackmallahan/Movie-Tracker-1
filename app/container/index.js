import { connect } from 'react-redux'
// import thunk from 'redux-thunk'
import { getUser } from '../actions/actions.jsx'
import Login from '../components/Login/Login.jsx'

const mapStateToProps = (state) => {
    console.log('state in mstp ', state);
    
    return { users: state.loginReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (user, password) => {
            console.log('in handleSubmit')
            dispatch(getUser(user, password))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)