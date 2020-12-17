/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('../../logo.jpeg')}
    style={styles.background}
    imageStyle={styles.logo}
  />
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
    marginTop: 20,
  },
  logo: {
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -350,
    marginBottom: -10,
  },
});

export default Header;
