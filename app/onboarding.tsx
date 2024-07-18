import type { ImageSourcePropType } from 'react-native'

import { Stack, useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Animated, Image, ImageBackground, View } from 'react-native'

import { PrimaryBackground } from '~/components/PrimaryBackground'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

interface OnboardingProps {
  getStartedRoute: string
  steps: Array<{
    content: string
    image: ImageSourcePropType
    title: string
  }>
}

function Onboarding({ getStartedRoute, steps }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const fadeAnim = useRef(new Animated.Value(1)).current
  const router = useRouter()

  const handleNext = () => {
    Animated.timing(fadeAnim, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
      else {
        router.replace(getStartedRoute)
      }
      Animated.timing(fadeAnim, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start()
    })
  }

  const { content, image, title } = steps[currentStep]

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
      style={{ height: '100%', width: '100%' }}
    >
      <View className="-mb-12 mt-20 flex-1 items-center justify-center">
        <ImageBackground
          className="size-full"
          resizeMode="stretch"
          // eslint-disable-next-line ts/no-require-imports
          source={require('~/assets/images/card_bg.png')}
        >
          <Animated.View className="flex-1 items-center justify-center" style={{ opacity: fadeAnim }}>
            <View className="mx-7 flex-1 px-4 pt-16">
              <Text
                className="text-6xl font-bold uppercase text-black"
                style={{ transform: [{ scaleY: 0.8 }] }}
              >
                {title}
              </Text>
              <Text className="text-xl">{content}</Text>
              <Image
                className="mt-2 size-56 self-end"
                resizeMode="contain"
                source={image}
              />
              <Text
                accessible={false}
                className="my-8 mt-auto font-bold"
                ellipsizeMode="clip"
                numberOfLines={1}
              >
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </Text>
              <Button className="mx-16 mb-32 rounded-3xl" onPress={handleNext}>
                <Text className="text-gray-200">
                  {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                </Text>
              </Button>
            </View>
          </Animated.View>
        </ImageBackground>
      </View>
    </ImageBackground>
  )
}

export default function Tab() {
  const steps = [
    {
      content: 'I haven’t thought about the detailed explanation in the following line yet, so I’ll leave it blank for now.',
      // eslint-disable-next-line ts/no-require-imports
      image: require('~/assets/images/profile_avatar.png'),
      title: 'Time is money,but how much?',
    },
    {
      content: 'Here is another description for the second step.',
      // eslint-disable-next-line ts/no-require-imports
      image: require('~/assets/images/profile_tag_star.png'),
      title: 'Another Step',
    },
  ]

  return (
    <>
      <Stack.Screen
        options={{
          headerBackground: () => <PrimaryBackground />,
          headerTitle: 'Welcome',
        }}
      />
      <Onboarding getStartedRoute="/" steps={steps} />
    </>
  )
}
