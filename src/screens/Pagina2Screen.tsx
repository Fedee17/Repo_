import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {};

export const Pagina2Screen = ( { navigation }: Props ) => {
    return (
        <View style={ styles.globalMargin }>    
            <Text>Pagina2Screen</Text>

            <Button 
                title="Ir a página 2"
                onPress={ () => navigation.navigate( "Pagina3Screen" )}
            />
            
        </View>
    )
}
