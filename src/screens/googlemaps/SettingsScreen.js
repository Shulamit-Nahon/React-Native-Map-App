import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function SettingsScreen({navigation}) {
  const reloadPage = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Button style={styles.button} title="Reload" onPress={reloadPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    top: 0,
    marginBottom: 20,
  },
});
