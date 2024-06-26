import './Expo.fx';

export { disableErrorHandling } from './errors/ExpoErrorManager';
export { default as registerRootComponent } from './launch/registerRootComponent';
export { isRunningInExpoGo, getExpoGoProjectConfig } from './environment/ExpoGo';
export {
  requireNativeModule,
  requireOptionalNativeModule,
  reloadAppAsync,
} from 'expo-modules-core';
