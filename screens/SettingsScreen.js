import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [targetWaterIntake, setTargetWaterIntake] = useState('8');

  const handleSave = () => {
    // Save the targetWaterIntake value to storage or database
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 100 }}
        onChangeText={text => setTargetWaterIntake(text)}
        value={targetWaterIntake}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default SettingsScreen;
