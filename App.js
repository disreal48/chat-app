import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "chat-40665.firebaseapp.com",
    projectId: "chat-40665",
    storageBucket: "chat-40665.appspot.com",
    messagingSenderId: "453478399998",
    appId: "1:453478399998:web:162dfc179023f6e4f9caaf",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
