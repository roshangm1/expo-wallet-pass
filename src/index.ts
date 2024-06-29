import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoWalletPass.web.ts
// and on native platforms to ExpoWalletPass.ts
import ExpoWalletPassModule from './ExpoWalletPassModule';
import ExpoWalletPassView from './ExpoWalletPassView';
import { ChangeEventPayload, ExpoWalletPassViewProps } from './ExpoWalletPass.types';

// Get the native constant value.
export const PI = ExpoWalletPassModule.PI;

export function hello(): string {
  return ExpoWalletPassModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoWalletPassModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoWalletPassModule ?? NativeModulesProxy.ExpoWalletPass);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoWalletPassView, ExpoWalletPassViewProps, ChangeEventPayload };
