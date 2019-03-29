import React, { SFC } from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';

const COMPONENT_NAME = 'VectorImage';
const NativeVectorImage = requireNativeComponent(COMPONENT_NAME);

interface Props {
    iconName: string
    width: number 
    height:number 
    color: string
  }

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', justifyContent: 'center' }
});

export const VectorImage:SFC<Props> = React.memo(({iconName, width, height, color = '', children}) => { 
    return (
        <NativeVectorImage
          style={{ ...styles.wrapper, width, height }}
          params={[iconName, String(width), String(height), color]}>
            {children}
          </NativeVectorImage>
      );

})


//ADDING NEW ASSETS

//To Add a new Vector Icon
//iOS
//  - convert SVG to PDF (design can easily do this)
//  - add pdf to Images.xcassets and name it
//  - set the following flags
//      - Check -> Preserve Vector Data
//      - Select -> Compression : GPU Smallest Size (if this is not selected the asset won't render)
//      - Select -> Scales : Single Scale
//      - Select -> AutoScaling: None

//Android
//   - From android Studio choose file -> new vector asset
//   - follow the wizard
