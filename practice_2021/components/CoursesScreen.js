import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const CoursesScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    {route.params.courses.map(rozklad => (
      <Button
      color = "#1aaca6"
        title={rozklad.title}
        onPress={() => {
          navigation.navigate('Rozklad', {
            name: rozklad.title,
            rozklad: rozklad,
          });
        }}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default CoursesScreen;