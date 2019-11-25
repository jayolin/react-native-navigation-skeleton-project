import React from 'react';
import { View, Text, Button } from "react-native"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../_store/actions';
import { goToMainNavigation, goToFirstTimeNavigation } from '../../../navigator';

class SignIn extends React.Component {

    constructor(props){
        super(props)
    }

    _signUserIn = () => {

        this.props.actions.signUserIn();
        this.props.firstTimeUser ? goToFirstTimeNavigation() : goToMainNavigation()

    };

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Sign In</Text>
                <Button onPress={this._signUserIn} title="Sign In Now"/>
            </View>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        firstTimeUser: state.firstTimeUser.firstTimeUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
