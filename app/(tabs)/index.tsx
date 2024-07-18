import { useAssets } from 'expo-asset'
import { Image, ImageBackground, ScrollView, View } from 'react-native'

import { Text } from '~/components/ui/text'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png'), require('~/assets/images/card_bg.png'),
  ])

  return (
    <ImageBackground
      className="size-full"
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
    >
      <ScrollView>
        <View className="mt-20 flex-1 items-center justify-center">
          <ImageBackground
            className="size-full min-h-[600]"
            resizeMode="stretch"
            // eslint-disable-next-line ts/no-require-imports
            source={require('~/assets/images/card_bg.png')}
          >
            <View className="mx-7">
              <View className="-mt-12 h-32 w-full">
                <Image
                  className="size-36"
                  resizeMode="contain"
                  // eslint-disable-next-line ts/no-require-imports
                  source={require('~/assets/images/profile_avatar.png')}
                />
                <Text
                  className="absolute bottom-2 right-8 text-2xl font-bold text-[#193557]"
                  style={{
                    transform: [{ scaleY: 0.8 }],
                  }}
                >
                  Wilson
                </Text>
                <View className="flex flex-row flex-wrap justify-center px-5">
                  <View className="m-1 rounded-md bg-black px-3 py-1">
                    <Text className="text-gray-200">Sexy</Text>
                  </View>
                  <View className="m-1 rounded-md bg-black px-3 py-1">
                    <Text className="text-gray-200">Hardworker</Text>
                  </View>
                  <View className="m-1 rounded-md bg-black px-3 py-1">
                    <Text className="text-gray-200">Emo</Text>
                  </View>
                  <View className="m-1 rounded-md bg-black px-3 py-1">
                    <Text className="text-gray-200">Cute</Text>
                  </View>
                  <View className="m-1 rounded-md bg-black px-3 py-1">
                    <Text className="text-gray-200">NSFW</Text>
                  </View>
                </View>
                <View className="flex items-center">
                  <Text className="mt-6 text-2xl font-bold">Current TPP</Text>
                  <Text
                    className="mt-2 text-8xl font-[900] tracking-tighter"
                    style={{
                      transform: [{ scaleY: 0.8 }],
                    }}
                  >
                    ¥1000
                  </Text>
                  <Text className="mx-12 -mt-2 text-sm leading-tight">
                    <Text className="text-sm font-bold leading-tight">TPP (time price prediction) </Text>
                    estimates the monetary value of an individual's time based on factors like profession, experience, location, and health.
                  </Text>
                </View>
                <View></View>
                <View className="flex items-center">
                  <Text className="mt-6 text-2xl font-bold">Time Rating</Text>
                  <Text
                    className="mt-2 text-8xl font-[900] tracking-tighter"
                    style={{
                      transform: [{ scaleY: 0.8 }],
                    }}
                  >
                    1.8
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
