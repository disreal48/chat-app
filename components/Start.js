import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const backgroundImage = require("../assets/background.png");

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("#090C08");

  const auth = getAuth();

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          userID: result.user.uid,
          name: name,
          bgColor: bgColor,
        });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Chat APP</Text>
        <View style={styles.box}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.bgColorText}>Choose Background Color:</Text>
          <View style={styles.bgColorButtons}>
            <TouchableOpacity
              style={[styles.bgColorButton, { backgroundColor: "#090C08" }]}
              onPress={() => setBgColor("#090C08")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.bgColorButton, { backgroundColor: "#474056" }]}
              onPress={() => setBgColor("#474056")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.bgColorButton, { backgroundColor: "#8A95A5" }]}
              onPress={() => setBgColor("#8A95A5")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.bgColorButton, { backgroundColor: "#B9C6AE" }]}
              onPress={() => setBgColor("#B9C6AE")}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.startChatButton}
              onPress={() => {
                if (name == "") {
                  Alert.alert("You need a username");
                } else {
                  signInUser();
                }
              }}
            >
              <Text style={styles.starChatText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "70%",
    marginTop: "15%",
  },
  box: {
    backgroundColor: "white",
    padding: "5%",
    margin: "5%",
    height: "44%",
    width: "88%",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    fontColor: "#FFFFFF",
    alignSelf: "center",
    padding: "5%",
    width: "88%",
    height: "20%",
    borderWidth: 2,
    borderColor: "#757083",
    oppacity: "50%",
  },
  bgColorText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#757083",
    alignSelf: "center",
    marginTop: "10%",
    width: "88%",
    height: "20%",
    marginBottom: "-10%",
  },
  bgColorButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bgColorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  startChatButton: {
    backgroundColor: "#757083",
    alignSelf: "center",
    padding: "5%",
    width: "88%",
    height: "40%",
    marginTop: "10%",
  },
  starChatText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: "2%",
  },
});

export default Start;
