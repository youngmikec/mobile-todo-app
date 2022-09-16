import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({submitHandler}) => {
    const [todo, setTodo] = useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setTodo(val)}
            />
            <Button 
                title="Add Todo" 
                color="#1c5253"
                onPress={() => submitHandler(todo)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#e3e3e3'
    }
})

export default AddTodo;