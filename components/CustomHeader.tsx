import React, { useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  activeText: {
    color: '#DB3A00',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 4,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 32,
    justifyContent: 'center',
  },
  switchBackground: {
    backgroundColor: '#E8D6D0',
    borderRadius: 25,
    height: '100%',
    position: 'absolute',
    width: 100, // Adjust this value based on your design
  },
  switchContainer: {
    backgroundColor: '#191B20',
    borderColor: '#191B20',
    borderRadius: 25,
    borderWidth: 3,
    flexDirection: 'row',
    overflow: 'hidden',
    width: 200, // Adjust this value based on your design
  },
  text: {
    color: '#E8D6D0',
    fontSize: 16,
  },
})

function CustomHeader() {
  const [active, setActive] = useState('Sell')
  const [animatedValue] = useState(new Animated.Value(0))

  const handleSwitch = (value: 'Buy' | 'Sell') => {
    setActive(value)
    Animated.timing(animatedValue, {
      duration: 300,
      toValue: value === 'Sell' ? 0 : 1,
      useNativeDriver: false,
    }).start()
  }

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust this value based on your design
  })

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Animated.View style={[
          styles.switchBackground,
          { transform: [{ translateX }] },
        ]}
        />
        <TouchableOpacity onPress={() => handleSwitch('Sell')} style={styles.button}>
          <Text style={[styles.text, active === 'Sell' && styles.activeText]}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSwitch('Buy')} style={styles.button}>
          <Text style={[styles.text, active === 'Buy' && styles.activeText]}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomHeader
