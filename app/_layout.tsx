import AsyncStorage from '@react-native-async-storage/async-storage'
import { PortalHost } from '@rn-primitives/portal'
import { useAssets } from 'expo-asset'
import { Stack, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'

import '~/global.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  // Loading this asset cause root layout case landing need it
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/card_bg.png')])
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem('hasSeenOnboarding')
      setHasSeenOnboarding(value === 'true')
    }
    checkOnboardingStatus()
  }, [])

  useEffect(() => {
    if (hasSeenOnboarding !== null) {
      if (!hasSeenOnboarding) {
        router.replace('/onboarding')
      }
      else {
        router.replace('/')
      }
    }
  }, [hasSeenOnboarding, router])

  if (hasSeenOnboarding === null) {
    return null // or a loading spinner
  }

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
