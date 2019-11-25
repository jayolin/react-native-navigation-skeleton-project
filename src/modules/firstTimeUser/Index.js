import React from 'react';
import { View, Text, Button } from "react-native"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './_store/actions';
import { goToMainNavigation } from '../../navigator';

class FirstTime extends React.Component {

    constructor(props){
        super(props)
    }

    _completeFirstTimeSurvey = () => {

        this.props.actions.completeFirstTimeSurvey();
        goToMainNavigation();

    };

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>First Time Here? { this.props.accessToken }</Text>
                <Button onPress={this._completeFirstTimeSurvey} title="Complete Now!"/>
            </View>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        accessToken: state.auth.accessToken
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTime)
