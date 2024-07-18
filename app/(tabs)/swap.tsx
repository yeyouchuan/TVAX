import { useAssets } from 'expo-asset'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { ImageBackground } from 'react-native'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png')])
  const router = useRouter()

  useEffect(() => {
    router.replace('onboarding')
  }, [router])

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/secondary_bg.png')}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
    </ImageBackground>
  )
}
