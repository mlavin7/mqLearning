import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const WrapperComponent = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const { authenticated, history } = props;
        
        useEffect(() => {
            const redirect = () => {
                if (!localStorage.getItem('token') && !authenticated) history.push('/');
                console.log("redirect -> authenticated", authenticated);
                console.log("redirect -> localStorage.getItem('token')", localStorage.getItem('token'));
            };
            redirect()
        }, [authenticated]);

        return <WrappedComponent { ...props }/>
    }
    const mapStateToProps = ({ loginReducer: { authenticated } }) => ({
        authenticated
    });
    return connect(mapStateToProps)(AuthComponent) 
}
export default WrapperComponent