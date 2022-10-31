import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const RootApp = () => {

      return(
          <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            
              <TodoHeader/>
            <ScrollView>
              <TodoList/>
            </ScrollView>
          </SafeAreaView>
      )

  }

  return (
    <Provider store = {store}>
        <RootApp/>
    </Provider>
  );
}

