import React from 'react';
import { View } from "react-native"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToAuthNavigation, goToMainNavigation } from '../../navigator';

class Initializing extends React.Component {

    constructor(props){

        super(props);
        //check for access token
        if(this.props.accessToken){
            goToMainNavigation()
        }
        else{
            goToAuthNavigation()
        }
    }

    async componentDidMount(){
        //console.log(this.props)
    }

    render(){
        return (
            <View/>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        accessToken: state.auth.accessToken
    };
}

export default connect(mapStateToProps)(Initializing)
