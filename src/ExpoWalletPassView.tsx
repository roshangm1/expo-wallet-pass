import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoWalletPassViewProps } from './ExpoWalletPass.types';

const NativeView: React.ComponentType<ExpoWalletPassViewProps> =
  requireNativeViewManager('ExpoWalletPass');

export default function ExpoWalletPassView(props: ExpoWalletPassViewProps) {
  return <NativeView {...props} />;
}
