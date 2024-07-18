import { Feather } from '@expo/vector-icons'
import { useAssets } from 'expo-asset'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground, View } from 'react-native'

import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png'), require('~/assets/images/timeline_ticket.png')])

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
      <View className="my-8 flex flex-col gap-1">
        <View className="flex flex-col">
          <View
            className="flex h-32 w-full flex-row items-center justify-between"
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
                <View className="me-8 self-end">
                  <Text
                    className="mt-2 text-6xl font-[900] tracking-tighter text-[#0E1F34]"
                    style={{
                      transform: [{ scaleY: 0.8 }],
                    }}
                  >
                    ¥600
                  </Text>
                  <View className="flex flex-row gap-4">
                    <Button
                      className="w-20 rounded-full border-[#E8D6D0] bg-[#DB3A00]"
                    >
                      <Feather
                        color="#E8D6D0"
                        name="thumbs-up"
                        size={20}
                      />
                    </Button>
                    <Button
                      className="w-20 rounded-full border-[#E8D6D0] bg-[#193557]"
                    >
                      <Feather
                        color="#E8D6D0"
                        name="thumbs-down"
                        size={20}
                      />
                    </Button>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View className="ml-2 w-8 border border-[#E8D6D0]/60" />
        <View className="flex flex-col">
          <View
            className="flex h-32 w-full flex-row items-center justify-between"
          >
            <View className="mx-2 flex w-1/12 items-center justify-center">
              <View className="flex size-5 items-center justify-center rounded-full bg-gray-200">
                <Text>2</Text>
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
                <View className="me-8 self-end">
                  <Text
                    className="mt-2 text-6xl font-[900] tracking-tighter text-[#0E1F34]"
                    style={{
                      transform: [{ scaleY: 0.8 }],
                    }}
                  >
                    ¥1000
                  </Text>
                  <View className="flex flex-row gap-4">
                    <Button
                      className="w-20 rounded-full border-[#E8D6D0] bg-[#DB3A00]"
                    >
                      <Feather
                        color="#E8D6D0"
                        name="thumbs-up"
                        size={20}
                      />
                    </Button>
                    <Button
                      className="w-20 rounded-full border-[#E8D6D0] bg-[#193557]"
                    >
                      <Feather
                        color="#E8D6D0"
                        name="thumbs-down"
                        size={20}
                      />
                    </Button>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View className="ml-2 w-8 border border-[#E8D6D0]/60" />
      </View>
    </ImageBackground>
  )
}
