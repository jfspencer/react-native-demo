import React, { SFC, useState, useEffect } from 'react';
import { Text } from 'react-native';

interface Props {
    //declare props here
    test: any
}

export const ProductDetailCreate: SFC<Props> = ({ test }) => {
    return (
        <Text>Create</Text>
    )
}