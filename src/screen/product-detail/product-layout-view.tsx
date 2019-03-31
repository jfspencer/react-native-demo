import React, { SFC, useState, useEffect } from 'react';
import { Text } from 'react-native';

interface Props {
    //declare props here
    test: any
}

export const ProductDetailView: SFC<Props> = ({ test }) => {
    return (
        <Text>View</Text>
    )
}