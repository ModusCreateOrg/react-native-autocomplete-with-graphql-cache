/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { ApolloConsumer } from '@apollo/client';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import GET_TODOS from '../queries/Queries';

const Search: (props) => React$Node = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setResults] = useState([]);
  const [tempResults, setTempResults] = useState([]);

  const search = async (value, client) => {
    setSearchKeyword(value);
    setShowResults(true);

    if (value.length > 0) {
      const { data } = await client.query({
        query: GET_TODOS,
      });

      if (data) {
        const results = data.getTodos.filter((element) => {
          return element.title.includes(value.toLowerCase());
        });
        const newItems = results.length > 0 ? results : searchResults;
        setResults(newItems);
      }
    }
  };

  const handleSelect = (item) => {
    setSearchKeyword(item.title);
    setShowResults(false);
    props.handler(item);
  };

  return (
    <ApolloConsumer>
      {(client) => (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Search todos</Text>
            <TextInput
              placeholder="Search "
              placeholderTextColor="#000"
              style={styles.searchBox}
              onChangeText={(text) => search(text, client)}
              value={searchKeyword}
            />
          </View>
          <View style={styles.sectionContainer}>
            {showResults && (
              <FlatList
                data={searchResults}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.resultItem}
                      onPress={() => handleSelect(item)}
                    >
                      <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id}
                style={styles.searchResultsContainer}
              />
            )}
          </View>
        </View>
      )}
    </ApolloConsumer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    zIndex: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: 'gray',
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
  },
  searchResultsContainer: {
    width: 340,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
});

export default Search;
