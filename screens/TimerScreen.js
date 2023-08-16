import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const TimerScreen = () => {
  const [intervalMinutes, setIntervalMinutes] = useState('60');
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        const remaining = parseInt(intervalMinutes, 10) * 60;
        setRemainingTime(remaining);
      }, 1000);
    } else {
      clearInterval(interval);
      setRemainingTime(null);
    }

    return () => clearInterval(interval);
  }, [timerRunning, intervalMinutes]);

  const handleStartStop = () => {
    setTimerRunning(!timerRunning);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drink Water Timer</Text>
      <Text>Remaining Time: {remainingTime || 'N/A'}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 100 }}
        onChangeText={text => setIntervalMinutes(text)}
        value={intervalMinutes}
        keyboardType="numeric"
      />
      <Button title={timerRunning ? 'Stop' : 'Start'} onPress={handleStartStop} />
    </View>
  );
};

export default TimerScreen;
