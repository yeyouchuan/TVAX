import { useAssets } from 'expo-asset'
import { Tabs } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import { ImageBackground } from 'react-native'

function HeaderBackground() {
  // Combined with the configuration in app.json,
  // this will accelerate the loading process.
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/bg.png')])

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/bg.png')}
      style={{ height: '100%', width: '100%' }}
    />
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerBackground: () => <HeaderBackground />,
        headerTintColor: '#FFEDD5',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: '900',
          letterSpacing: -0.43,
          // 通过 scaleY 来压缩字体高度
          transform: [{ scaleY: 0.8 }],
        },
        tabBarActiveTintColor: 'blue',
        tabBarBackground: () => <HeaderBackground />,
        tabBarIconStyle: {
          // Fixed the icon scaling issue
          transform: [{ scaleX: 1.15 }],
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
              tintColor={focused ? 'blue' : 'gray'}
            />
          ),
          title: 'Timeline',
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name="clock.arrow.2.circlepath"
              tintColor={focused ? 'blue' : 'gray'}
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
              tintColor={focused ? 'blue' : 'gray'}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}
