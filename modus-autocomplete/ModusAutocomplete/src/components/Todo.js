/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useQuery } from '@apollo/client';

const Todo: (props) => React$Node = (props) => {
  const { todo } = props;
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>{todo.title}</Text>
          <Text style={styles.sectionDescription}>
            Completed:{' '}
            {todo.completed ? 'Yes, good work' : 'No, you have work todo'}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Todo;
