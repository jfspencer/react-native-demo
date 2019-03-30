// @ts-ignore
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { RootNavigator } from '@nav/tabs';

//BRIDGE INSPECTOR
//import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
//MessageQueue.spy(true);

export default createAppContainer(RootNavigator);
