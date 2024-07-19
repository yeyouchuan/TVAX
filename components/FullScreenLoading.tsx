import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    zIndex: 9999,
  },
})

export function FullScreenLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#FFFFFF" size="large" />
    </View>
  )
}
