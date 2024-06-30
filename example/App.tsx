import { Button, StyleSheet, Text, View } from "react-native";

import * as ExpoWalletPass from "expo-wallet-pass";

const blobToDataUrl = async (blob: any) =>
  new Promise((r) => {
    let a = new FileReader();
    a.onload = r;
    a.readAsDataURL(blob);
  }).then((e: any) => e.target.result);

export default function App() {
  const getPass = async () => {
    const passId = "pass.app.brainants.leadsquik";
    if (ExpoWalletPass.hasPass(passId)) {
      ExpoWalletPass.viewInWallet(passId);
      return;
    }
    const resp = await fetch("http://localhost:4000/generatePass", {
      body: JSON.stringify({
        name: "Test User",
        company: "BB",
        jobTitle: "Cofounder",
        id: "",
        email: "roshan@brainants.com",
      }),
      method: "POST",
    });
    const passBlob = await resp.blob();
    const dataUrl = await blobToDataUrl(passBlob);

    try {
      await ExpoWalletPass.addPassFromUrl(dataUrl);
    } catch (err) {
      console.log(Object.entries(err));
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {ExpoWalletPass.canAddPasses() ? "Yes Can add wallet" : "Noppppe"}
      </Text>
      <Button
        title="Has Pass"
        onPress={() =>
          console.log(ExpoWalletPass.hasPass("pass.app.brainants.leadsquik"))
        }
      />

      <ExpoWalletPass.WalletButton onTap={getPass} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
