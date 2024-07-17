import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'blue',
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome color={color} name="home" size={28} />,
          title: 'Timeline',
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome color={color} name="cog" size={28} />,
          title: 'Swap',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome color={color} name="user" size={28} />,
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}
