import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const FonImage = require("./assets/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer FonImage={FonImage} />
      <View style={styles.footerContainer}>
        <Button label="Use this photo" />
        <Button label="Choose this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23282D",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

});
