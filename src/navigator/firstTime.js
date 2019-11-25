import { Navigation } from 'react-native-navigation';
import FirstTimeScreen from "../modules/firstTimeUser/Index"

export default firstTime = {

    stack: {

        id: 'first-time-stack',
        children: [
            {
                component: {
                    name: 'FirstTime'
                },
            }
        ]


        //other components or stacks

    }

};
