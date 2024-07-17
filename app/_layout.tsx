import '~/global.css'

// eslint-disable-next-line perfectionist/sort-imports
import { PortalHost } from '@rn-primitives/portal'
import { SplashScreen, Stack } from 'expo-router'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <PortalHost />
    </>
  )
}
