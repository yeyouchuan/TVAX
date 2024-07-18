import type { ImageSourcePropType } from 'react-native'

import { useAssets } from 'expo-asset'
import { Image, ImageBackground, ScrollView, View } from 'react-native'

import { Text } from '~/components/ui/text'

interface TagProps {
  icon?: ImageSourcePropType
  label: string
}

function Tag({ icon, label }: TagProps) {
  return (
    <View className="m-1 flex flex-row items-center justify-center gap-1 rounded-md bg-black px-3 py-1">
      <Text className="text-gray-200">{label}</Text>
      {icon && (
        <Image
          className="size-5"
          source={icon}
        />
      )}
    </View>
  )
}

interface RatioProps {
  value: number
}

function Ratio({ value }: RatioProps) {
  const filledCount = Math.ceil(value)
  const totalCount = 5
  // eslint-disable-next-line ts/no-require-imports
  const filledImage = require('~/assets/images/profile_ratio_fill.png')
  // eslint-disable-next-line ts/no-require-imports
  const unfilledImage = require('~/assets/images/profile_ratio.png')

  return (
    <ImageBackground
      className="mx-12 mt-4 h-24"
      resizeMode="contain"
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/profile_ratio_container.png')}
    >
      <View className="flex flex-row items-center justify-around p-4 px-8">
        {Array.from({ length: totalCount }).map((_, index) => (
          <Image
            className="h-16 w-8"
            key={index}
            resizeMode="contain"
            source={index < filledCount ? filledImage : unfilledImage}
          />
        ))}
      </View>
    </ImageBackground>
  )
}

export default function Tab() {
  const [_assets] = useAssets([
    /* eslint-disable ts/no-require-imports */
    require('~/assets/images/secondary_bg.png'),
    require('~/assets/images/card_bg.png'),
    require('~/assets/images/profile_avatar.png'),
    require('~/assets/images/profile_tag_star.png'),
    require('~/assets/images/profile_ratio_container.png'),
    require('~/assets/images/profile_ratio.png'),
    require('~/assets/images/profile_ratio_fill.png'),
    /* eslint-enable ts/no-require-imports */
  ])

  return (
    <ImageBackground
      className="size-full"
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="mt-20 flex-1 items-center justify-center">
          <ImageBackground
            className="size-full"
            resizeMode="stretch"
            // eslint-disable-next-line ts/no-require-imports
            source={require('~/assets/images/card_bg.png')}
          >
            <View className="mx-7">
              <View className="-mt-16 h-32 w-full">
                <Image
                  className="size-44"
                  resizeMode="contain"
                  // eslint-disable-next-line ts/no-require-imports
                  source={require('~/assets/images/profile_avatar.png')}
                />
                <Text
                  className="absolute bottom-0 right-8 text-2xl font-bold text-[#193557]"
                  style={{
                    transform: [{ scaleY: 0.8 }],
                  }}
                >
                  Wilson
                </Text>
              </View>
              <View className="mt-10 flex flex-row flex-wrap justify-center px-5">
                <Tag
                  // eslint-disable-next-line ts/no-require-imports
                  icon={require('~/assets/images/profile_tag_star.png')}
                  label="Sexy"
                />
                <Tag label="Hardworker" />
                <Tag label="Emo" />
                <Tag label="Cute" />
                <Tag
                  // eslint-disable-next-line ts/no-require-imports
                  icon={require('~/assets/images/profile_tag_star.png')}
                  label="NSFW"
                />
              </View>
              <View className="flex items-center">
                <Text className="mt-6 text-2xl font-bold">Current TPP</Text>
                <Text
                  className="mt-2 text-8xl font-[900] tracking-tighter text-[#0E1F34]"
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
              <Ratio value={1.8} />
              <View className="flex items-center">
                <Text className="mt-6 text-2xl font-bold">Time Rating</Text>
                <Text
                  className="mt-2 text-8xl font-[900] tracking-tighter text-[#0E1F34]"
                  style={{
                    transform: [{ scaleY: 0.8 }],
                  }}
                >
                  1.8
                </Text>
              </View>
              <View className="h-20" />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
