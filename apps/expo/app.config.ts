import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
    },
  },
  owner: process.env.EXPO_PUBLIC_EAS_OWNER,
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'Fantasy Football Rox',
  slug: 'fantasy-football-rox',
  updates: {
    url: 'https://u.expo.dev/825fbd1d-3b9c-4d8c-9845-502a6820c0b8',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
