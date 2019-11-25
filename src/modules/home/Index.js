import React from 'react';
import { View, Text, Button } from "react-native"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './_store/actions';
import { goToAuthNavigation } from '../../navigator';

class Home extends React.Component {

    constructor(props){
        super(props)
    }

    _logUserOut = () => {
        this.props.actions.logout();
        goToAuthNavigation()
    };

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>
                <Button title="Logout" onPress={this._logUserOut}/>
            </View>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
