import { useAssets } from 'expo-asset'
import { Stack } from 'expo-router'
import { ImageBackground } from 'react-native'

import CustomHeader from '~/components/CustomHeader'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png')])

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
      </ImageBackground>
    </>
  )
}
