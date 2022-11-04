import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Tile } from 'react-native-elements';



const Interests = () => {
    return (
        <View style={styles.container}>
          <Text className="titleScreen">Select Your Interests</Text>
          <StatusBar style="auto" />
          <Tile
            imageSrc={require('https://i.etsystatic.com/19755900/r/il/6860a7/2152303502/il_794xN.2152303502_ba5a.jpg')}
            title="Sports"
            featured caption="Local Sports Teams In Your Area"
        />;
        </View>
      );
}

export default Interests