import React from 'react';
import { View } from 'react-native';
//import { styles } from './inventory-list.style'

interface Props extends Navigation<{}> {
  state: any
}

export class ProductDetailScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Inventory List'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        "Hello"
      </View>
    );
  }
}
