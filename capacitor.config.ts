import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.genderreveal.app',
  appName: 'Gender Reveal',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
