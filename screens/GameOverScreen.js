import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Alert,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let fontSize = 24;

  if (width < 380) {
    imageSize = 150;
    fontSize = 16;
  }

  if (height < 500) {
    imageSize = 80;
    fontSize = 16;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  const fontStyle = {
    fontSize: fontSize,
  };

  // Alert.alert("Image size berapa?", height.toString());

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={[styles.summaryText, fontStyle]}>
          Your phone needed{" "}
          <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>.
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    // fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
    // backgroundColor: "red",
  },
  buttonContainer: {
    marginTop: 24,
  },
});
