import { Tabs } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import { Image } from 'react-native'

import { PrimaryBackground } from '~/components/PrimaryBackground'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerBackground: () => <PrimaryBackground />,
        headerTintColor: '#FFEDD5',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: '900',
          letterSpacing: -0.43,
          // 通过 scaleY 来压缩字体高度
          transform: [{ scaleY: 0.8 }],
        },
        tabBarActiveTintColor: '#FFEDD5',
        tabBarBackground: () => <PrimaryBackground />,
        tabBarIconStyle: {
          // Fixed the icon scaling issue
          transform: [{ scaleX: 1.15 }],
        },
        tabBarInactiveTintColor: '#193557',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Time Ticket',
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name="calendar.day.timeline.left"
              tintColor={focused ? '#FFEDD5' : '#193557'}
            />
          ),
          title: 'Timeline',
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="stretch"
              // eslint-disable-next-line ts/no-require-imports
              source={require('~/assets/images/tab_swap.png')}
              style={{
                height: 52,
                marginTop: -30,
                // when focused, the icon will be scaled up
                transform: [{
                  scale: focused ? 1 : 0.95,
                }],
                width: 50,
              }}
            />
          ),
          title: 'Swap',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name={focused ? 'person.crop.circle.fill' : 'person.crop.circle'}
              tintColor={focused ? '#FFEDD5' : '#193557'}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}
