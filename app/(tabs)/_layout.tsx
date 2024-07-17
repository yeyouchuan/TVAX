import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

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
            <Ionicons
              color={focused ? 'blue' : 'gray'}
              name={focused ? 'calendar' : 'calendar-outline'}
              size={24}
            />
          ),
          title: 'Timeline',
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? 'blue' : 'gray'}
              name={focused ? 'sync' : 'sync-outline'}
              size={24}
            />
          ),
          title: 'Swap',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? 'blue' : 'gray'}
              name={focused ? 'person' : 'person-outline'}
              size={24}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}
