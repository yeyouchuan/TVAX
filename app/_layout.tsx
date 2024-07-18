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
  const [_assets] = useAssets([
    /* eslint-disable ts/no-require-imports */
    require('~/assets/images/card_bg.png'),
    require('~/assets/images/onboarding_first.png'),
    require('~/assets/images/onboarding_second.png'),
    require('~/assets/images/onboarding_input_container.png'),
    require('~/assets/images/onboarding_ios_calendar.png'),
    require('~/assets/images/onboarding_ios_health.png'),
    require('~/assets/images/primary_bg.png'),
    require('~/assets/images/profile_ratio.png'),
    require('~/assets/images/profile_ratio_container.png'),
    require('~/assets/images/profile_ratio_fill.png'),
    require('~/assets/images/profile_tag_star.png'),
    require('~/assets/images/secondary_bg.png'),
    require('~/assets/images/timeline_ticket.png'),
    require('~/assets/images/timeline_ticket_soon.png'),
    /* eslint-enable ts/no-require-imports */
  ])
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
