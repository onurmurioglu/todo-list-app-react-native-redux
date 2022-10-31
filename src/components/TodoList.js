import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';

const TodoList = () => {

const dispatch = useDispatch();

const todos = useSelector(state => state.tasks);

const data = [
    {
        id: 1,
        title: "TO DO Apps",
    },

    {
        id: 2,
        title: "Made using Redux Toolkit",
    },
]; 

const onDelete = (id) => {
    dispatch(
        deleteTask({
             id: id,
        }));
};

const renderItem = ({ item }) => {
    return(
        <View style = {styles.item}>

            <Text style = {styles.title}>{ item.name }</Text>

            <TouchableOpacity 
                style = {styles.deleteButton}
                onPress = {() => onDelete(item.id)}
            >

                <FontAwesome5 name="trash" size={32} color="red" />   
            </TouchableOpacity>

            

        </View>
    )
}



    return(
        <View>

            <FlatList

                data = {todos}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}

            />

        </View>
    )

}

export default TodoList;

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#e9e9e9',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },

    title: {
        fontSize: 18,
    },
    delete: {
        fontSize: 24,
        color: 'red'
    }
  }); 