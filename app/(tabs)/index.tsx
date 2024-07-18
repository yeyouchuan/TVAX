import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAssets } from 'expo-asset'
import { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'

import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function Tab() {
  const [_assets] = useAssets([
    /* eslint-disable ts/no-require-imports */
    require('~/assets/images/secondary_bg.png'),
    require('~/assets/images/timeline_ticket.png'),
    require('~/assets/images/timeline_ticket_soon.png'),
    /* eslint-enable ts/no-require-imports */
  ])

  const [timeSerie, setTimeSerie] = useState<number[]>([])
  // const router = useRouter()
  const currentHour = new Date().getHours()

  useEffect(() => {
    const fetchTimeSerie = async () => {
      const data = await AsyncStorage.getItem('timeSerie')
      if (data) {
        setTimeSerie(JSON.parse(data))
      }
    }
    fetchTimeSerie()
  }, [])

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
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
          {timeSerie.map((value, index) => {
            const isSoon = index >= currentHour
            return (
              <>
                <View className="flex flex-col" key={index}>
                  <View
                    className="flex h-32 w-full flex-row items-center justify-between"
                  >
                    <View className="mx-2 flex w-1/12 items-center justify-center">
                      <View className="flex size-6 items-center justify-center rounded-full bg-gray-200">
                        <Text>{index + 1}</Text>
                      </View>
                    </View>
                    <ImageBackground
                      className="w-11/12"
                      resizeMode="stretch"
                      source={isSoon
                        // eslint-disable-next-line ts/no-require-imports
                        ? require('~/assets/images/timeline_ticket_soon.png')
                        // eslint-disable-next-line ts/no-require-imports
                        : require('~/assets/images/timeline_ticket.png')}
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
                            ¥
                            {(value * 1500).toFixed(0)}
                          </Text>
                          {!isSoon && (
                            <View className="flex flex-row gap-4 self-end">
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
                          )}
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
                {index !== timeSerie.length - 1
                && <View className="ml-2 w-8 border border-[#E8D6D0]/60" />}
              </>
            )
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
