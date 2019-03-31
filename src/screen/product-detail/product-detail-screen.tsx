import React from 'react';
import { LayoutMode } from '@interface/common';
import { ProductDetailCreate } from './product-layout-create';
import { ProductDetailView } from './product-layout-view';
import { ProductDetailEdit } from './product-layout-edit';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { navigate } from '@nav/util/nav-service';
//import { styles } from './inventory-list.style'



interface Props extends Navigation<{ id: number, layout: LayoutMode }> {
  state: any
}

const s = StyleSheet.create({
  button: { margin: 10, fontSize: 20, padding: 10 },
  headerButton: { marginRight: 20, fontSize: 20 }
})

export class ProductDetailScreen extends React.Component<Props> {
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
    const { id, layout } = this.props.navigation.state.params
    return (
      <>
        {layout == 'Create' && <ProductDetailCreate test={1} />}
        {layout == 'View' && <ProductDetailView test={1} />}
        {layout == 'Edit' && <ProductDetailEdit test={1} />}
      </>

    );
  }
}
