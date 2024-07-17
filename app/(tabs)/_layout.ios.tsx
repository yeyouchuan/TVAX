import { Tabs } from 'expo-router'
import { SymbolView } from 'expo-symbols'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
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
