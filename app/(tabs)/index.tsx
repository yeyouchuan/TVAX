import { useAssets } from 'expo-asset'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground } from 'react-native'

import CustomHeader from '~/components/CustomHeader'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png')])

  const router = useRouter()

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <CustomHeader />
          ),
        }}
      />
      <ImageBackground
        // eslint-disable-next-line ts/no-require-imports
        source={require('~/assets/images/secondary_bg.png')}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Button
          onPress={() => router.replace('onboarding')}
        >
          <Text>
            Go to Onboarding
          </Text>
        </Button>
      </ImageBackground>
    </>
  )
}
