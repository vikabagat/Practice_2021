import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Rozklad = ({route}) => {
  let imgName;
  switch (route.params.rozklad.img) {
    case 'inf_1.jpg': imgName = require('../assets/inf_1.jpg'); break;
    case 'inf_2.jpg': imgName = require('../assets/inf_2.jpg'); break;
    case 'inf_3.jpg': imgName = require('../assets/inf_3.jpg'); break;
    case 'kib_1.jpg': imgName = require('../assets/kib_1.jpg'); break;
    case 'kib_2.jpg': imgName = require('../assets/kib_2.jpg'); break;
    case 'kib_3.jpg': imgName = require('../assets/kib_3.jpg'); break;
    case 'mat_1-2.jpg': imgName = require('../assets/mat_1-2.jpg'); break;
    case 'mat_3-4.jpg': imgName = require('../assets/mat_3-4.jpg'); break;
    case 'fin_1-2.jpg': imgName = require('../assets/fin_1-2.jpg'); break;
    case 'fin_3-4.jpg': imgName = require('../assets/fin_3-4.jpg'); break;
    case 'management_1-2.jpg': imgName = require('../assets/management_1-2.jpg'); break;
    case 'management_3-4.jpg': imgName = require('../assets/management_3-4.jpg'); break;
    case 'economy_1-2.jpg': imgName = require('../assets/economy_1-2.jpg'); break;
    case 'economy_3.jpg': imgName = require('../assets/economy_3.jpg'); break;
    case 'empty-box.jpg': imgName = require('../assets/empty-box.jpg'); break;
  }
  return (
    <View style={styles.container}>
    <Text style={styles.txt}> РОЗКЛАД ЗАНЯТЬ 14.06 -19.06 </Text>
    <Image style={styles.img} source={imgName} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1aaca6',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    
  },
  img: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 80,
  },
  txt: {
    textAlign: 'center',
    backgroundColor: '#1aaca6',
    color : "#fed94f",
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Rozklad;