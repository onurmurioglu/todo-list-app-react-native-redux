import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {

    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if(todo.trim().length === 0) {
            Alert.alert("Lütfen bir görev metni giriniz...");
            setTodo("");
            return;
        }

        dispatch( addTask({
            task: todo,

        }));

        setTodo("");
    }

    const [todo, setTodo] = useState("");

    return(
        <View>
            <Text style = {{

                    fontSize:  26,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 40,
                    fontStyle: 'italic'

                }}>
                
                TO DO List
            
            </Text>

            <View style = {{
                justifyContent: "center",
                alignItems: "center"
            }}>

            <TextInput style = {{
                borderColor: "gray",
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 10,
                margin: 10,
                width:"90%",
                borderRadius: 5
            }}

                placeholder= "Add task"
                onChangeText = {setTodo}
                value = {todo}
            />

            <TouchableOpacity 
                style= {{

                    backgroundColor: "black",
                    padding: 10,
                    margin: 10,
                    width: "90%",
                    height: 50,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onPress = {onSubmitTask}
            >

                <Text style = {{ color: "white", fontSize: 20 }}>Add</Text>

            </TouchableOpacity>

            </View>

        </View>
    );
};

export default TodoHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
