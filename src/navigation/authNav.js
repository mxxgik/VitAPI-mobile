import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Login/Login';
import RegisterScreen from '../../screens/Register/Register';


const Stack = createNativeStackNavigator();


export default function AuthNav() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{title: 'Login'}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
}