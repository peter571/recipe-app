
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { UrlProp } from '../types/types';

export default function ImageCard({ url}: UrlProp) {
  return (
      <Image
        style={styles.thumbnail}
        source={{ uri: url }}
        resizeMode="contain"
      />
  );
}

const styles = StyleSheet.create({
    thumbnail: {
      width: '100%',
      height: 180,
    }
  });
