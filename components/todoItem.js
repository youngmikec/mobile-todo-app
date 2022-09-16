import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const TodoItem = ({item, pressHandler}) => {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)} >
            <View style={styles.todoItem}>
                {
                    item.isCompleted && <AntDesign name="checkcircle" size={20} color="#1c5253" />
                }
                <Text style={styles.todoText}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    todoItem: {
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 10,
        borderStyle: 'dashed',
        marginTop: 10,
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    todoText: {
        marginHorizontal: 10,
    },
    completed: {
        color: '#1c5253', 
    }
})