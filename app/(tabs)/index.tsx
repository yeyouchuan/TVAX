import { useAssets } from 'expo-asset'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground, View } from 'react-native'

import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png')])

  // const router = useRouter()

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      {/* <Button
        onPress={() => router.replace('onboarding')}
      >
        <Text>
          Go to Onboarding
        </Text>
      </Button> */}
      <View className="my-8 flex flex-col gap-0.5">
        <View className="flex flex-col">
          <View
            className="flex h-28 w-full flex-row items-center justify-between"
          >
            <View className="mx-2 flex w-1/12 items-center justify-center">
              <View className="flex size-5 items-center justify-center rounded-full bg-gray-200">
                <Text>1</Text>
              </View>
            </View>
            <ImageBackground
              className="w-11/12"
              resizeMode="stretch"
              // eslint-disable-next-line ts/no-require-imports
              source={require('~/assets/images/timeline_ticket.png')}
            >
              <View
                className="flex-1"
              >
              </View>
            </ImageBackground>
          </View>
          <View className="ml-2 w-8 border border-[#E8D6D0]/60" />
        </View>
      </View>
    </ImageBackground>
  )
}
