import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import moment from 'moment';

const HomeScreen = () => {
  const [lastDrinkTime, setLastDrinkTime] = useState(null);

  const handleDrink = () => {
    const currentTime = moment().format('HH:mm:ss');
    setLastDrinkTime(currentTime);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Water Reminder App</Text>
      <Text>Last Drink Time: {lastDrinkTime || 'N/A'}</Text>
      <Button title="I drank water!" onPress={handleDrink} />
    </View>
  );
};

export default HomeScreen;
