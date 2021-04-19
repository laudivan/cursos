import React, {Component} from 'react';
import {View} from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, {MegaSena} from './componentes/Multi';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Ariel é lindo!!!" />
        <ParImpar numero={35} />
        <Inverter>laudivaN</Inverter>
        <MegaSena numeros={8} />
      </View>
    );
  }
}
