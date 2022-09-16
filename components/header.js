import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Todos List</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1c5253',
        height: 80,
        textAlign: 'center',
        paddingTop: 35,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center'
    }
})