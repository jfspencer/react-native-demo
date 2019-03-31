import React from 'react';
import { LayoutMode, Product } from '@interface/common';
import { ProductDetailCreate } from './product-layout-create';
import { ProductDetailView } from './product-layout-view';
import { ProductDetailEdit } from './product-layout-edit';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectProductById } from '@state/product';




interface Props extends Navigation<{ id: number, layout: LayoutMode }> {
  product: Product
  state: any
}

const s = StyleSheet.create({
  button: { margin: 10, fontSize: 20, padding: 10 },
  headerButton: { marginRight: 20, fontSize: 20 }
})

export class _ProductDetailScreen extends React.Component<Props> {
  static staticSetState: any
  componentDidMount() {
    this.setState({ layout: this.props.navigation.state.params.layout })
    ProductDetailScreen.staticSetState = this.setState
  }


  static navigationOptions = ({ navigation }: any) => {
    const options: any = { title: `${navigation.state.params.layout} Product` }
    if (navigation.state.params.layout === 'View')
      options.headerRight = (<TouchableOpacity style={s.headerButton} onPress={() => navigation.push('ProductDetail', { id: navigation.state.params.id, layout: 'Edit' })}><Text>Edit</Text></TouchableOpacity>)
    else options.headerRight = (<TouchableOpacity style={s.headerButton} onPress={() => navigation.pop()}><Text>Save</Text></TouchableOpacity>)
    return options;
  };

  render() {
    const { product } = this.props
    const { layout } = this.props.navigation.state.params
    return (
      <>
        {layout == 'Create' && <ProductDetailCreate />}
        {layout == 'View' && <ProductDetailView product={product} />}
        {layout == 'Edit' && <ProductDetailEdit product={product} />}
      </>

    );
  }
}

const mapStateToProps = (state: any, ownProps: Props) => ({
  product: selectProductById(state, ownProps.navigation.getParam('id', null))
})

export const ProductDetailScreen = connect(mapStateToProps, null, null)(_ProductDetailScreen)