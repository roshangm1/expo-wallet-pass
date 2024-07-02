# expo-wallet-pass

Wallet passes in react native

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-wallet-pass
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Usage

```
import * as WalletPass from 'expo-wallet-pass';

// Different available functions

WalletPass.canAddPasses(); // Check if device supports adding pass
WalletPass.hasPass('passid'); // Check if the pass is already in the wallet
await WalletPass.addPassFromUrl(blobJs); // base64
WalletPass.viewInWallet('passid'); // View the existing pass in the wallet
```

### Native Add to Apple Wallet Button

```
    <WalletPass.WalletButton
        onTap={() => console.log('get pass and call addPassFromUrl')}
        style={{
            height: 40,
            width: 200,
            marginTop: 16
        }}
    />
```

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](https://github.com/expo/expo#contributing).
