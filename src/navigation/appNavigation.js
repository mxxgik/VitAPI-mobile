import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './authNav';

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    );
}