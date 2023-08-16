import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const WaterReminderApp = () => <AppNavigator />;

AppRegistry.registerComponent('WaterReminderApp', () => WaterReminderApp);
