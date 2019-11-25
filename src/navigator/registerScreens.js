import {Navigation} from 'react-native-navigation';
import SignIn from '../modules/auth/_screens/SignIn';
import FirstTimeScreen from '../modules/firstTimeUser/Index';
import Home from '../modules/home/Index';
import Initializing from '../modules/initializing/Index';
import { Provider } from 'react-redux';

export default function (store){

    Navigation.registerComponentWithRedux('SignIn', () => SignIn, Provider, store);
    Navigation.registerComponentWithRedux('FirstTime', () => FirstTimeScreen, Provider, store);
    Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
    Navigation.registerComponentWithRedux('Initializing', () => Initializing, Provider, store);

}
