import * as React from 'react'
import { Dimensions, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

import { Card } from '~/components/ui/card'
import { Text } from '~/components/ui/text'

export default function Tab() {
  return (
    <View className="flex-1 items-center gap-5 bg-secondary/30 p-6">
      <LineChart
        bezier
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          decimalPlaces: 2, // optional, defaults to 2dp
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '6',
            stroke: '#ffa726',
            strokeWidth: '2',
          },
          style: {
            borderRadius: 16,
          },
        }}
        data={{
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        }}
        height={220}
        style={{
          borderRadius: 16,
          marginVertical: 8,
        }}
        width={Dimensions.get('window').width * 0.9} // from react-native
        yAxisInterval={1} // optional, defaults to 1
        yAxisLabel="$"
        yAxisSuffix="k"
      />
      <Text className="text-lg uppercase text-gray-500">
        Resent trader
      </Text>
      <Card className="w-full max-w-sm rounded-2xl p-6">
      </Card>
      <Text className="text-lg uppercase text-gray-500">
        Swap Users
      </Text>
      <Card className="w-full max-w-sm rounded-2xl p-6">
      </Card>
    </View>
  )
}
