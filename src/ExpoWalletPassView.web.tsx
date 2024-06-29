import * as React from 'react';

import { ExpoWalletPassViewProps } from './ExpoWalletPass.types';

export default function ExpoWalletPassView(props: ExpoWalletPassViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
