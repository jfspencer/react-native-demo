import React, { SFC } from 'react';
import { Text } from 'react-native';

interface Props {
    //declare props here
    sendLatestChanges: Function
}

export const ProductDetailCreate: SFC<Props> = ({ }) => {
    return (
        <Text>Create</Text>
    )
}