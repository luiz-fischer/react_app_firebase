export default {
  expo: {
    name: 'expo-firebase-auth-example',
    slug: 'expo-firebase-auth-example',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png',
      fundo: './assets/fundo.jpg'
    }
  }
};