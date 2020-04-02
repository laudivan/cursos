import React from 'react';
import {Text} from 'react-native';

/* Aula 003 */
// export default function(props) {
//   return <Text>{props.texto}</Text>;
// }

// export default props => <Text>Arrow: {props.texto}</Text>;

/* Aula 04, usando o estilo Padrao */
import Padrao from '../estilo/Padrao';

export default props => <Text style={Padrao.ex}>Arrow: {props.texto}</Text>;
