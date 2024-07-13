import { View, Text,useColorScheme } from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  const theme = useColorScheme() === 'dark';
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.headText(theme)}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText(theme)}>{info}</Text>
      </View>
    </View>
  );
};

export default About;