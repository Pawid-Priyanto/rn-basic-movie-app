import React from 'react';
import { SafeAreaView, FlatList, View, Text, StatusBar } from 'react-native';

function TodoList(props) {
    const todos = props.todos;

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                  <View style={{ backgroundColor: '#f9c2ff',
                                  padding: 20,
                                  marginVertical: 8,
                                  marginHorizontal: 16 }}>
                  <Text style={{fontSize: 32,}}>{item.todo}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
           />
          </SafeAreaView>
    )
}

export default TodoList