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
    sendLatestChanges: Function
}

const s = StyleSheet.create({
    label: { fontSize: 12, marginHorizontal: 20 },
    line: { fontSize: 20, marginHorizontal: 20, marginVertical: 10 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, marginHorizontal: 20 }
})

const pickerOptions = (options: string[]) => options.map(v => (<Picker.Item label={v} value={v} />))

export const _ProductDetailEdit: SFC<Props> =
    ({ product, productStyles, productColors, getProductStylesAction, getProductColorsAction, sendLatestChanges }) => {

        const [latestProduct, setLatestProduct] = useState(product)
        useEffect(() => {
            getProductStylesAction()
            getProductColorsAction()
            setLatestProduct(latestProduct)
        }, [])

        //onBlur={mergeChanges(['product_name',name], sendLatestChanges)}
        const updateProduct = (sendChanges: Function, key: string) => (val: string) => {
            const next = { ...latestProduct }
            next[key] = val
            sendChanges(next)
            setLatestProduct(next)
            console.log(next)
        }

        return (
            <ScrollView>
                <Text style={s.line}>ID: {product.id}</Text>
                <Text style={s.label}>Name</Text>
                <TextInput returnKeyType={'next'} style={s.input} value={latestProduct.product_name}
                    onChangeText={updateProduct(sendLatestChanges, 'product_name')} />

                <Text style={s.label}>Brand</Text>
                <TextInput returnKeyType={'next'} style={s.input} value={latestProduct.brand}
                    onChangeText={updateProduct(sendLatestChanges, 'brand')} />

                <Text style={s.label}>Ship Price (TODO needs input mask)</Text>
                <TextInput returnKeyType={'next'} style={s.input} value={String(latestProduct.shipping_price)}
                    onChangeText={updateProduct(sendLatestChanges, 'shipping_price')} />

                <Text style={s.label}>Description</Text>
                <TextInput returnKeyType={'next'} style={{ ...s.input, height: 80 }} multiline={true} numberOfLines={4}
                    value={latestProduct.description}
                    onChangeText={updateProduct(sendLatestChanges, 'description')} />

                <Text style={s.label}>Style</Text>
                <Picker
                    selectedValue={product.style}
                    style={s.input}
                    onValueChange={updateProduct(sendLatestChanges, 'style')}>
                    {pickerOptions(productStyles)}
                </Picker>
            </ScrollView>
        )
    }

const mapStateToProps = (state: any) => ({
    productStyles: selectProductStyles(state),
    productColors: selectProductColors(state)
})

export const ProductDetailEdit = connect(mapStateToProps, { getProductStylesAction, getProductColorsAction }, null)(_ProductDetailEdit)