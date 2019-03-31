import React, { SFC, useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from 'native-base';
import { Product } from '@interface/common';
import { getProductStylesAction, selectProductStyles } from '@state/product';
import { connect } from 'react-redux';

interface Props {
    //declare props here
    product: Product
    productStyles: string[]
    getProductStylesAction: Function
}

const s = StyleSheet.create({
    label: { fontSize: 12, marginHorizontal: 20 },
    line: { fontSize: 20, marginHorizontal: 20, marginVertical: 10 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, marginHorizontal: 20 }
})

const updateInput = (setter: Function) => (val: string) => setter(val)

const styleOptions = (styles: string[]) => styles.map(v => (<Picker.Item label={v} value={v} />))

export const _ProductDetailEdit: SFC<Props> = ({ product, productStyles, getProductStylesAction }) => {

    const [name, setName] = useState(product.product_name)
    const [brand, setBrand] = useState(product.brand)
    const [price, setPrice] = useState(product.shipping_price)
    const [description, setDescription] = useState(product.description)
    const [type, setType] = useState(product.product_type)
    const [style, setStyle] = useState(product.style)
    const [color, setColor] = useState('blue')

    useEffect(() => {
        getProductStylesAction()
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
                style={{ height: 50 }}
                onValueChange={(itemValue) => setStyle(itemValue)}>
                {styleOptions(productStyles)}
            </Picker>
            <Text style={s.label}>Color (Note: not exposed via product get endpoint)</Text>
            <Picker
                selectedValue={color}
                style={{ height: 50 }}
                onValueChange={(itemValue) => setColor(itemValue)}>
                <Picker.Item label="theBlue" value="theBlue" />
                <Picker.Item label="theRed" value="theRed" />
            </Picker>
        </ScrollView>
    )
}

const mapStateToProps = (state: any) => ({
    productStyles: selectProductStyles(state)
})

export const ProductDetailEdit = connect(mapStateToProps, { getProductStylesAction }, null)(_ProductDetailEdit)