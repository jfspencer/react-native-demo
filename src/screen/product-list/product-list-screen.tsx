import React, { SFC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setNavRef } from '@nav/util/nav-service';
//import { styles } from './inventory-list.style'

interface SFCExt<Props> extends SFC<Props> {
  navigationOptions: any
}

interface Props extends Navigation<{}> {
  state: any
}

export const _ProductListScreen: SFCExt<Props> = ({ navigation }) => {


  useEffect(() => {
    setNavRef(navigation)

  }, [])


  return (
    <View style={{ flex: 1 }}>
      <Text>Hello</Text>
    </View>
  );

}

_ProductListScreen.navigationOptions = {
  title: 'Product List'
};

function mapStateToProps({ product }: any) {
  return { allProducts: product.allProducts }
}

export const ProductListScreen = connect(mapStateToProps)(_ProductListScreen)
