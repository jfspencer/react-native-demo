import React, { SFC, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import random from 'lodash/random';
import { connect } from 'react-redux';
import { getPagedProductsAction, selectAllProducts, selectAllProductsTotal } from '@state/product';
import { Product } from '@interface/common';
//import { styles } from './inventory-list.style'

interface SFCExt<Props> extends SFC<Props> {
  navigationOptions: any
}

interface Props extends Navigation<{}> {
  allProducts: ReadonlyArray<{ item: Product, index: string }>
  getPagedProductsAction: any
  total: number
}

const pullMoreProducts = (last: number, setPage: Function, total: number, localCount: number, productAction: any) => (info: any) => {
  console.warn(last, total, localCount)
  if (total === 0) productAction(last)
  else if (total > localCount) productAction(last)
  setPage(last + 1)
}

const getProductKey = ({ item }: { item: Product, index: string }) => item ? String(item.id) : String(random(99999))
const renderLine = ({ item }: any) => (<Text>{item.product_name}</Text>)

export const _ProductListScreen: SFCExt<Props> = ({ navigation, allProducts, total, getPagedProductsAction }) => {
  const [lastPage, setPage] = useState(0);

  useEffect(() => {
    pullMoreProducts(lastPage, setPage, total, allProducts.length, getPagedProductsAction)(null)
  }, [])

  //
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={allProducts}
        extraData={allProducts.length}
        renderItem={renderLine}
        onEndReachedThreshold={1}
        keyExtractor={getProductKey}
        onEndReached={pullMoreProducts(lastPage, setPage, total, allProducts.length, getPagedProductsAction)}>
      </FlatList>
    </View>
  );
}

_ProductListScreen.navigationOptions = { title: 'Product List' };

const mapStateToProps = (state: any) => ({
  allProducts: selectAllProducts(state),
  total: selectAllProductsTotal(state)

})

export const ProductListScreen = connect(mapStateToProps, { getPagedProductsAction }, null)(_ProductListScreen)
