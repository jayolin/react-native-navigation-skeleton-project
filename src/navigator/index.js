import { Navigation } from 'react-native-navigation'
import { store } from '../store'

import home from './home';
import auth from './auth';
import firstTime from './firstTime';
import initializing from './initializing'

export const setDefaultNavigation = () => {
    Navigation.setRoot({
        root: initializing,
    });
};

export const goToMainNavigation = () => {
    Navigation.setRoot({

        root: home

    })
};

export const goToAuthNavigation = () => {
    Navigation.setRoot({

        root: auth

    })
};

export const goToFirstTimeNavigation = () => {
    Navigation.setRoot({

        root: firstTime

    })
};
