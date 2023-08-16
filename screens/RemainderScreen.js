// ReminderScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

function ReminderScreen() {
  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      message: 'Drink water now!',
      date: new Date(Date.now() + 10 * 1000), // 10 seconds from now
    });
  };

  return (
    <View>
      <Text>Set a Water Reminder</Text>
      <Button title="Set Reminder" onPress={scheduleNotification} />
    </View>
  );
}

export default ReminderScreen;
