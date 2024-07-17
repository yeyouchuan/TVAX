import * as React from 'react'
import { View } from 'react-native'
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated'

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Text } from '~/components/ui/text'
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip'
import { Info } from '~/lib/icons/Info'

const GITHUB_AVATAR_URI
  = 'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg'

export default function Tab() {
  const [progress, setProgress] = React.useState(78)

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100))
  }
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-secondary/30 p-6">
      <Card className="w-full max-w-sm rounded-2xl p-6">
        <CardHeader className="items-center">
          <Avatar alt="Rick Sanchez's Avatar" className="size-24">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
          <View className="p-3" />
          <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
          <View className="flex-row">
            <CardDescription className="text-base font-semibold">Scientist</CardDescription>
            <Tooltip delayDuration={150}>
              <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                <Info className="size-4 text-foreground/70" size={14} strokeWidth={2.5} />
              </TooltipTrigger>
              <TooltipContent className="px-4 py-2 shadow">
                <Text className="native:text-lg">Freelance</Text>
              </TooltipContent>
            </Tooltip>
          </View>
        </CardHeader>
        <CardContent>
          <View className="flex-row justify-around gap-3">
            <View className="items-center">
              <Text className="text-sm text-muted-foreground">Dimension</Text>
              <Text className="text-xl font-semibold">C-137</Text>
            </View>
            <View className="items-center">
              <Text className="text-sm text-muted-foreground">Age</Text>
              <Text className="text-xl font-semibold">70</Text>
            </View>
            <View className="items-center">
              <Text className="text-sm text-muted-foreground">Species</Text>
              <Text className="text-xl font-semibold">Human</Text>
            </View>
          </View>
        </CardContent>
        <CardFooter className="flex-col gap-3 pb-0">
          <View className="flex-row items-center overflow-hidden">
            <Text className="text-sm text-muted-foreground">Productivity:</Text>
            <LayoutAnimationConfig skipEntering>
              <Animated.View
                className="w-11 items-center"
                entering={FadeInUp}
                exiting={FadeOutDown}
                key={progress}
              >
                <Text className="text-sm font-bold text-sky-600">
                  {progress}
                  %
                </Text>
              </Animated.View>
            </LayoutAnimationConfig>
          </View>
          <Progress className="h-2" indicatorClassName="bg-sky-600" value={progress} />
          <View />
          <Button
            className="shadow shadow-foreground/5"
            onPress={updateProgressValue}
            variant="outline"
          >
            <Text>Update</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  )
}
