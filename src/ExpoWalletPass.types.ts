import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export type ExpoWalletPassViewProps = {
  name: string;
};

export type WalletButtonProps = {
  onTap: () => void;
} & ViewProps;
