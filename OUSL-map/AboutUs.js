import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    // Add functionality for button press here
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/Source/img2.jpg')}
        style={styles.aboutUsImage}
      />
      <Text style={styles.aboutUsText}>About Us</Text>
      <Text style={styles.aboutUsParagraph}>
      Three futuristic minds united in code, we're your developers from the future. With tech wizardry at our fingertips, we craft software solutions that seem like they're from another dimension. From web galaxies to mobile universes, we're on a mission to turn your sci-fi dreams into digital realities. Beam us up for out-of-this-world code!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  aboutUsText: {
    color: '#9D9D9D',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 20,
  },
  aboutUsImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    alignSelf: 'center', // Align the image in the center
    marginTop: 10, // Add margin to separate the image from the text
  },
  aboutUsParagraph: {
    color: '#343434',
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 10, // Add margin to the left to align with the image
    marginRight: 10, // Add margin to the right to align with the image
  },
  button: {
    backgroundColor: '#BA7815',
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    width: 150,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

