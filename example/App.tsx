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
    const resp = await fetch(
      "https://us-central1-leads-quik.cloudfunctions.net/generatePass",
      {
        body: JSON.stringify({
          name: "Roshan Gautam",
          company: "Brainants Technology",
          jobTitle: "Cofounder",
          id: "",
          email: "roshan@brainants.com",
        }),
        method: "POST",
      }
    );
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
      <Button title="Add Pass" onPress={getPass} />
      <Button
        title="Has Pass"
        onPress={() =>
          console.log(ExpoWalletPass.hasPass("pass.app.brainants.leadsquik"))
        }
      />

      <ExpoWalletPass.WalletButton
        onPress={() => {
          console.log("Button Pressed");
        }}
      />
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
