import React, { SFC, useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from 'native-base';
import { Product } from '@interface/common';
import { getProductStylesAction, selectProductStyles, getProductColorsAction, selectProductColors } from '@state/product';
import { connect } from 'react-redux';

interface Props {
    //declare props here
    product: Product
    productStyles: string[]
    productColors: string[]
    getProductStylesAction: Function
    getProductColorsAction: Function
}

const s = StyleSheet.create({
    label: { fontSize: 12, marginHorizontal: 20 },
    line: { fontSize: 20, marginHorizontal: 20, marginVertical: 10 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, marginHorizontal: 20 }
})

const updateInput = (setter: Function) => (val: string) => setter(val)

const pickerOptions = (options: string[]) => options.map(v => (<Picker.Item label={v} value={v} />))

export const _ProductDetailEdit: SFC<Props> = ({ product, productStyles, productColors, getProductStylesAction, getProductColorsAction }) => {

    const [name, setName] = useState(product.product_name)
    const [brand, setBrand] = useState(product.brand)
    const [price, setPrice] = useState(product.shipping_price)
    const [description, setDescription] = useState(product.description)
    const [type, setType] = useState(product.product_type)
    const [style, setStyle] = useState(product.style)
    const [color, setColor] = useState('blue')

    useEffect(() => {
        getProductStylesAction()
        getProductColorsAction()
    }, [])


    return (
        <ScrollView>
            <Text style={s.line}>ID: {product.id}</Text>
            <Text style={s.label}>Name</Text>
            <TextInput returnKeyType={'next'} style={s.input} value={name} onChangeText={updateInput(setName)}></TextInput>
            <Text style={s.label}>Brand</Text>
            <TextInput returnKeyType={'next'} style={s.input} value={brand} onChangeText={updateInput(setBrand)}></TextInput>
            <Text style={s.label}>Ship Price (TODO needs input mask)</Text>
            <TextInput returnKeyType={'next'} style={s.input} value={String(price)} onChangeText={updateInput(setPrice)}></TextInput>
            <Text style={s.label}>Description</Text>
            <TextInput returnKeyType={'next'} style={{ ...s.input, height: 80 }} multiline={true} numberOfLines={4} value={description} onChangeText={updateInput(setDescription)}></TextInput>
            <Text style={s.label}>Type</Text>
            <TextInput returnKeyType={'done'} style={s.input} value={type} onChangeText={updateInput(setType)}></TextInput>
            <Text style={s.label}>Style</Text>
            <Picker
                selectedValue={style}
                style={s.input}
                onValueChange={(itemValue) => setStyle(itemValue)}>
                {pickerOptions(productStyles)}
            </Picker>
            <Text style={s.label}>Color (Note: not exposed via product get endpoint)</Text>
            <Picker
                selectedValue={color}
                style={s.input}
                onValueChange={(itemValue) => setColor(itemValue)}>
                {pickerOptions(productColors)}
            </Picker>
        </ScrollView>
    )
}

const mapStateToProps = (state: any) => ({
    productStyles: selectProductStyles(state),
    productColors: selectProductColors(state)
})

export const ProductDetailEdit = connect(mapStateToProps, { getProductStylesAction, getProductColorsAction }, null)(_ProductDetailEdit)