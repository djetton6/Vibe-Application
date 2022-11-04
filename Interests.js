import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Tile } from 'react-native-elements';



export default function Interests() {
    return (
        <View style={styles.container}>
          <Text className="titleScreen">Select Your Interests</Text>
          <StatusBar style="auto" />
          <Tile
            imageSrc={require('./img/path')}
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured caption="Some Caption Text"
        />;
        </View>
      );

}