import { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

import { Input, Button } from 'react-native-elements';

import { getImages } from '../api/pexeles';

import ImageList from '../components/ImageList';


const HomeScreen = ({ openSearch }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [photos, setPhotos] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    const loadImages = async (searchTerm) => {
        const res = await getImages(searchTerm);
        setPhotos(res.data.photos);
        setTotalResults(res.data.total_results);
    }

    useEffect(() => {
        loadImages();
    }, [])


    const handleSearch = async () => await loadImages(searchTerm);

    return (
        <>
            {openSearch && (
                <View style={styles.searchSection}>
                    <Input
                        placeholder='Buscar...'
                        style={styles.input}
                        leftIcon={{ type: "feather", name: "search", color: "#fff" }}
                        onChangeText={(value) => setSearchTerm(value)}
                        inputContainerStyle={styles.searchInput}
                        leftIconContainerStyle={styles.searchLeftIcon} />
                    <Button
                        title="Search"
                        onPress={() => handleSearch()}
                        buttonStyle={styles.buttonSearch} />
                </View>
            )}
            <View style={styles.container}>
                {totalResults > 0 && (
                    <Text style={styles.totalResulText}>{totalResults} Resultados</Text>
                )}
                <ImageList photos={photos} />
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        justifyContent: "center",
    },
    totalResulText: {
        color: "#D0D0D0",
        textAlign: "right",
        width: "100%",
        paddingTop: 28,
    },
    searchSection: {
        backgroundColor: "#0D0D0D",
        width: "100%",
        paddingRight: 80,
        paddingLeft: 10,
        flex: 1 / 5,
        flexDirection: "row",
        alignItems: "center",
    },
    searchInput: {
        backgroundColor: "#2C292C",
        borderBottomWidth: 0,
        paddingHorizontal: 4,
    },
    input: {
        color: "#fff",
    },
    searchLeftIcon: {
        paddingStart: 10,
        marginRight: 7,
    },
    buttonSearch: { backgroundColor: "#229783", marginBottom: 27 },
});

export default HomeScreen;
