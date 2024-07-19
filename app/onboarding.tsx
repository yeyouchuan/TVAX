import type { ImageSourcePropType } from 'react-native'

import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Slider from '@react-native-community/slider'
import { useAssets } from 'expo-asset'
import { Stack, useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { PrimaryBackground } from '~/components/PrimaryBackground'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { Textarea } from '~/components/ui/textarea'

interface OnboardingProps {
  getStartedRoute: string
  steps: Array<{
    content?: string
    customComponent?: React.ComponentType<object>
    image?: ImageSourcePropType
    title: string
  }>
}

function Onboarding({ getStartedRoute, steps }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const fadeAnim = useRef(new Animated.Value(1)).current
  const router = useRouter()

  const handleNext = async () => {
    if (loading)
      return
    Animated.timing(fadeAnim, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start(async () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
      else {
        setLoading(true)
        await AsyncStorage.setItem('hasSeenOnboarding', 'true')
        // Simulate API request
        fetch('https://api.dify.ai/v1/workflows/run', {
          body: JSON.stringify({
            inputs: {
              age: '30',
              daily_salary: '100',
              input: 'example_input',
            },
            user: 'abc-123',
          }),
          headers: {
            'Authorization': 'Bearer app-6AM9d2Gd3LTuLkE5Gr3fMQyi',
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
          .then(response => response.json())
          .then(async (data) => {
            const timeSerie = data.data.outputs.time_serie
            await AsyncStorage.setItem('timeSerie', timeSerie)
            router.replace(getStartedRoute)
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {
            setLoading(false)
          })
      }
      Animated.timing(fadeAnim, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start()
    })
  }

  const { content, customComponent: CustomComponent, image, title } = steps[currentStep]

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          // eslint-disable-next-line ts/no-require-imports
          source={require('~/assets/images/secondary_bg.png')}
          style={{ height: '100%', width: '100%' }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="-mb-12 mt-8 flex-1 items-center justify-center">
              <ImageBackground
                className="size-full"
                resizeMode="stretch"
                // eslint-disable-next-line ts/no-require-imports
                source={require('~/assets/images/card_bg.png')}
              >
                <Animated.View className="flex-1 items-center justify-center" style={{ opacity: fadeAnim }}>
                  <View className="flex-1 px-4 pt-16">
                    <View className="mx-8">
                      <Text
                        className="text-6xl font-bold uppercase text-black"
                        style={{ transform: [{ scaleY: 0.8 }] }}
                      >
                        {title}
                      </Text>
                      {content && <Text className="text-xl">{content}</Text>}
                      {image && (
                        <Image
                          className="mt-2 size-56 self-end"
                          resizeMode="contain"
                          source={image}
                        />
                      )}
                      {CustomComponent && <CustomComponent />}
                    </View>
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
                    <Button className="mx-16 mb-32 rounded-3xl" disabled={loading} onPress={handleNext}>
                      {loading
                        ? (
                            <ActivityIndicator color="#FFFFFF" size="small" />
                          )
                        : (
                            <Text className="font-bold text-gray-300">
                              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                            </Text>
                          )}
                    </Button>
                  </View>
                </Animated.View>
              </ImageBackground>
            </View>
          </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default function Tab() {
  const [_assets] = useAssets([
    /* eslint-disable ts/no-require-imports */
    require('~/assets/images/primary_bg.png'),
    require('~/assets/images/secondary_bg.png'),
    require('~/assets/images/card_bg.png'),
    require('~/assets/images/onboarding_first.png'),
    require('~/assets/images/onboarding_second.png'),
    require('~/assets/images/onboarding_input_container.png'),
    require('~/assets/images/onboarding_ios_health.png'),
    require('~/assets/images/onboarding_ios_calendar.png'),
    /* eslint-enable ts/no-require-imports */
  ])

  const steps = [
    {
      content: 'Time is a precious resource, often equated to money, especially in professional settings. ',
      // eslint-disable-next-line ts/no-require-imports
      image: require('~/assets/images/onboarding_first.png'),
      title: 'Time is money,but how much?',
    },
    {
      content: 'Our AI system is designed to estimate the value of your time by analyzing a comprehensive set of parameters that influence professional compensation.',
      // eslint-disable-next-line ts/no-require-imports
      image: require('~/assets/images/onboarding_second.png'),
      title: 'Our AI knows the value of your time!',
    },
    {
      customComponent: function CustomComponent() {
        const [salaryValue, setSalaryValue] = useState(80)
        const [ageValue, setAgeValue] = useState(25)

        return (
          <View className="">
            <ImageBackground
              className="h-36 w-full"
              resizeMode="contain"
              // eslint-disable-next-line ts/no-require-imports
              source={require('~/assets/images/onboarding_input_container.png')}
            >
              <Textarea
                className="w-80 border-0 bg-transparent p-4 py-6 font-bold text-white placeholder:text-wrap placeholder:text-[#E8D6D0]"
                onBlur={Keyboard.dismiss}
                placeholder="Type in some information about you here!"
                placeholderTextColor="#E8D6D0"
              />
            </ImageBackground>
            <View className="flex flex-row items-center gap-1.5">
              <Feather
                color="#DB3A00"
                name="send"
                size={16}
              />
              <Text
                className="font-bold text-[#0E1F34]"
              >
                How Much Do You Earn a Day?
              </Text>
            </View>
            <Slider
              className="h-8 w-full"
              maximumTrackTintColor="#0E1F34"
              maximumValue={100}
              minimumTrackTintColor="#DB3A00"
              minimumValue={1}
              onValueChange={setSalaryValue}
              step={1}
              thumbTintColor="#E8D6D0"
              value={salaryValue}
            />
            <Text
              className="-mt-2 mb-6 font-bold text-[#0E1F34]"
            >
              {salaryValue * 100}
              ¥
            </Text>
            <View className="flex flex-row items-center gap-1.5">
              <Feather
                color="#DB3A00"
                name="smile"
                size={16}
              />
              <Text
                className="font-bold text-[#0E1F34]"
              >
                Age:
                {ageValue}
              </Text>
            </View>
            <Slider
              className="h-8 w-full"
              maximumTrackTintColor="#0E1F34"
              maximumValue={99}
              minimumTrackTintColor="#DB3A00"
              minimumValue={1}
              onValueChange={setAgeValue}
              step={1}
              thumbTintColor="#E8D6D0"
              value={ageValue}
            />
            <View className="mt-4 flex gap-4">
              <View className="flex flex-row items-center gap-1.5">
                <Image
                  className="size-6"
                  resizeMode="contain"
                  // eslint-disable-next-line ts/no-require-imports
                  source={require('~/assets/images/onboarding_ios_health.png')}
                />
                <Text
                  className="font-[800] text-[#0E1F34]"
                >
                  Health Data
                </Text>
                <Button
                  className="ml-auto flex h-8 flex-row items-center gap-1.5 rounded-3xl border bg-[#DB3A00] px-8"
                  size="sm"
                >
                  <Text className="text-[#E8D6D0]">
                    Import
                  </Text>
                  <Feather
                    color="#E8D6D0"
                    name="download"
                    size={16}
                  />
                </Button>
              </View>
              <View className="flex flex-row items-center gap-1.5">
                <Image
                  className="size-6"
                  resizeMode="contain"
                  // eslint-disable-next-line ts/no-require-imports
                  source={require('~/assets/images/onboarding_ios_calendar.png')}
                />
                <Text
                  className="font-[800] text-[#0E1F34]"
                >
                  Calendar Data
                </Text>
                <Button
                  className="ml-auto flex h-8 flex-row items-center gap-1.5 rounded-3xl border bg-[#DB3A00] px-8"
                  size="sm"
                >
                  <Text className="text-[#E8D6D0]">
                    Import
                  </Text>
                  <Feather
                    color="#E8D6D0"
                    name="download"
                    size={16}
                  />
                </Button>
              </View>
            </View>
          </View>
        )
      },
      title: 'Introduce yourself!',
    },
  ]

  return (
    <>
      <Stack.Screen
        options={{
          headerBackground: () => <PrimaryBackground />,
          headerTitle: () => (
            <Text
              className="text-2xl font-bold text-[#FFEDD5]"
              style={{ transform: [{ scaleY: 0.8 }] }}
            >
              Welcome
            </Text>
          ),
        }}
      />
      <Onboarding getStartedRoute="/" steps={steps} />
    </>
  )
}
