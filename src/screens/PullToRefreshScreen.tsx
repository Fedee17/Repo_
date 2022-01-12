import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
    
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()
    
    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                />
            }
        >
            <View>
                <HeaderTitle title='PulToRefresh' />
                
                {
                    data && <HeaderTitle title={ data } /> 
                    
                }
                
            </View>
        </ScrollView>    
    )
}
