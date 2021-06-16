import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {infkurs} from '../src/Data'
import {kibkurs} from '../src/Data'
import {matkurs} from '../src/Data'
import {managementkurs} from '../src/Data'
import {finkurs} from '../src/Data'
import {economykurs} from '../src/Data'

const MainScreen = ({ navigation }) => (
  
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/LogoMain.jpg')} />
    <Button style={styles.button}
      title="Комп'ютерні науки"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: "Комп'ютерні науки", courses:  infkurs});
      }}
    />
    <Button
      title="Кібербезпека"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: 'Кібербезпека', courses: kibkurs });
      }}
    />
    <Button
      title="Математика"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: 'Математика', courses: matkurs });
      }}
    />
    <Button
      title="Фінанси і кредит"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: 'Фінанси і кредит', courses: finkurs });
      }}
    />
    <Button
      title="Менеджмент"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: 'Менеджмент', courses: managementkurs });
      }}
    />
    <Button
      title="Економіка"
      color = "#fed94f"
      onPress={() => {
        navigation.navigate('Courses', { name: 'Економіка', courses: economykurs });
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1aaca6',
    padding: 8,
    margin: 20,
  },
  logo: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  
});

export default MainScreen;