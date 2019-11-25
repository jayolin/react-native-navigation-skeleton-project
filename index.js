import { setDefaultNavigation } from "./src/navigator"
import {Navigation} from 'react-native-navigation';
import { store } from './src/store';
import { persistStore as persistStoreRaw } from 'redux-persist';
import registerScreens from './src/navigator/registerScreens';

const persistStore = storeToPersist => new Promise(async (resolve, reject) => {
    try {
        await persistStoreRaw(
            storeToPersist
        );
        resolve()
    }
    catch (e) {
        console.log(e)
    }
});

async function bootstrap() {

    registerScreens(store);
    await persistStore(store);
    setDefaultNavigation();

}

Navigation.events().registerAppLaunchedListener(() => {
    bootstrap()
});
