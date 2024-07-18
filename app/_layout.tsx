import { PortalHost } from '@rn-primitives/portal'
import { useAssets } from 'expo-asset'
import { Stack } from 'expo-router'

import '~/global.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  // Loading this asset cause root layout case landing need it
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/card_bg.png')])

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
