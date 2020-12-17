/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useQuery } from '@apollo/client';

import Header from './Header';
import Search from './Search';
import Todo from './Todo';
import GET_TODOS from '../queries/Queries';

const Home: () => React$Node = () => {
  const [todo, setTodo] = React.useState(null);
  const { data } = useQuery(GET_TODOS);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={styles.body}>
          <Search handler={setTodo} />
          {todo && <Todo todo={todo} />}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
