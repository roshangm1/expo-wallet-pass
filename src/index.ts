import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

import ExpoWalletPassModule from "./ExpoWalletPassModule";
import ExpoWalletPassView from "./ExpoWalletPassView";
import WalletButton from "./WalletButtonView";
import {
  ChangeEventPayload,
  ExpoWalletPassViewProps,
  WalletButtonProps,
} from "./ExpoWalletPass.types";

export function canAddPasses(): boolean {
  return ExpoWalletPassModule.canAddPasses();
}

export function hasPass(passID: string, serialNumber?: string): boolean {
  return ExpoWalletPassModule.hasPass(passID, serialNumber);
}

export function addPassFromUrl(url: string): Promise<void> {
  return ExpoWalletPassModule.addPassFromUrl(url);
}

export function viewInWallet(passId: string, serialNumber?: string): void {
  return ExpoWalletPassModule.viewInWallet(passId, serialNumber);
}

export {
  ExpoWalletPassView,
  ExpoWalletPassViewProps,
  ChangeEventPayload,
  WalletButton,
  WalletButtonProps,
};
