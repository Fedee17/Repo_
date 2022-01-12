import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const LogoFidel = () => {
    return (
        <View style={{
            alignItems:'center',
            // flex:1,

        }}>
            <Image 
                source={require('../assets/fidel_backend.png')}
                style={ styles.avatar }
            />
        </View>
    )
}