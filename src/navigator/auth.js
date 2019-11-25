import { Navigation } from 'react-native-navigation';
import SignIn from "../modules/auth/_screens/SignIn"

export default auth = {

        stack: {

            id: 'auth-stack',
            children: [
                {
                    component: {
                        name: 'SignIn'
                    },
                }
            ]


            //other components or stacks

        }

};
