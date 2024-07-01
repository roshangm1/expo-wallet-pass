import ExpoWalletPassModule from "./ExpoWalletPassModule";
import WalletButton from "./WalletButtonView";
import { WalletButtonProps } from "./ExpoWalletPass.types";

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

export { WalletButton, WalletButtonProps };
