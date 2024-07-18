import { useAssets } from 'expo-asset'
import { ImageBackground } from 'react-native'

export function PrimaryBackground() {
  // Combined with the configuration in app.json,
  // this will accelerate the loading process.
  // eslint-disable-next-line ts/no-require-imports
  const [_assets] = useAssets([require('~/assets/images/primary_bg.png'), require('~/assets/images/tab_swap.png')])

  return (
    <ImageBackground
      // eslint-disable-next-line ts/no-require-imports
      source={require('~/assets/images/primary_bg.png')}
      style={{ height: '100%', width: '100%' }}
    />
  )
}
