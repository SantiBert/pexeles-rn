import { Text, View, FlatList } from 'react-native';
import React, { Component } from 'react';
import CardImage from './CardImage';

const ImageList = ({ photos }) => {

    const renderItems = ({ item }) => <CardImage image={item} />

    return (
        <View>
            < FlatList
                data={photos}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
                numColumns={2} />
        </View>
    );

}

export default ImageList;
