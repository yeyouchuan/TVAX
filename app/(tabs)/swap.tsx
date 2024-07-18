import { useAssets } from 'expo-asset'
import { ImageBackground } from 'react-native'

export default function Tab() {
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/secondary_bg.png')])

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
