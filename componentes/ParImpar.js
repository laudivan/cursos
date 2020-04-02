import React from 'react';

import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

// export default props => (
//   <View>
//     {props.numero % 2 === 0 ? (
//       <Text style={Padrao.ex}>Par</Text>
//     ) : (
//       <Text style={Padrao.ex}>Impar</Text>
//     )}
//   </View>
// );

import If from './If';

export default props => (
  <View>
    <If teste={!(props.numero % 2)}>
      <Text style={Padrao.ex}>{props.numero} é par</Text>
    </If>
    <If teste={props.numero % 2}>
      <Text style={Padrao.ex}>{props.numero} é ímpar</Text>
    </If>
  </View>
);
