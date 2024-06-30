import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { WalletButtonProps } from "./ExpoWalletPass.types";

const NativeView: React.ComponentType<WalletButtonProps> =
  requireNativeViewManager("WalletButton");

export default function WalletButtonView(props: WalletButtonProps) {
  return (
    <NativeView
      style={{
        width: 200,
        height: 40,
      }}
      {...props}
    />
  );
}
