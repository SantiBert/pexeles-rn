import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardImage = ({ image }) => {

    const navegation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.cardImage}
            onPress={() => navegation.navigate('ImageScreen', { image })}>
            <Image
                source={
                    {
                        uri: image.src.portrait
                            ? image.src.portrait
                            : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png"
                    }
                }
                style={{ height: 180, width: '100%' }} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '50%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5,
    }
})

export default CardImage;
