import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  NativeModules,
} from 'react-360';

const { AudioModule } = NativeModules;

// List of all available panorama images
const PANORAMAS = [
  'IMG-20250818-WA0000.jpg',
  'IMG-20250818-WA0002.jpg',
  'IMG-20250915-WA0000.jpg',
  'IMG-20250915-WA0001.jpg',
  'IMG-20250915-WA0002.jpg',
  'IMG-20250915-WA0003.jpg',
  'IMG-20250915-WA0004.jpg',
  'IMG-20250915-WA0005.jpg',
  'IMG-20250915-WA0006.jpg',
  'IMG-20250915-WA0007.jpg',
  'IMG-20250915-WA0008.jpg',
  'IMG-20250915-WA0009.jpg',
  'IMG-20250915-WA0010.jpg',
  'IMG-20250915-WA0011.jpg',
  'IMG-20250915-WA0012.jpg',
  'IMG-20250915-WA0013.jpg',
  'IMG-20250915-WA0014.jpg',
  'IMG-20250915-WA0015.jpg',
  'IMG-20250915-WA0016.jpg',
  'IMG-20250915-WA0017.jpg',
  'IMG-20250915-WA0018.jpg',
  'IMG-20250915-WA0019.jpg',
  'IMG-20250915-WA0020.jpg',
  'IMG-20250915-WA0021.jpg',
  'IMG-20250915-WA0022.jpg',
  'IMG-20250915-WA0023.jpg',
  'IMG-20250915-WA0024.jpg',
  'IMG-20250915-WA0025.jpg',
  'IMG-20250915-WA0026.jpg',
  'IMG-20250915-WA0027.jpg',
  'IMG-20250915-WA0028.jpg',
  'IMG-20250915-WA0029.jpg',
  'IMG-20250915-WA0030.jpg',
  'IMG-20250915-WA0031.jpg',
  'IMG-20250915-WA0032.jpg',
  'IMG-20251101-WA0006.jpg',
];

export default class ChillInVR extends React.Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    // Set initial panorama
    this.changePanorama(0);
  }

  changePanorama = (index) => {
    const panoramaImage = PANORAMAS[index];
    Environment.setBackgroundImage(
      { uri: `static_assets/${panoramaImage}` },
      { format: '2D' }
    );
    this.setState({ currentIndex: index });
  };

  nextPanorama = () => {
    const nextIndex = (this.state.currentIndex + 1) % PANORAMAS.length;
    this.changePanorama(nextIndex);
  };

  previousPanorama = () => {
    const prevIndex = 
      (this.state.currentIndex - 1 + PANORAMAS.length) % PANORAMAS.length;
    this.changePanorama(prevIndex);
  };

  render() {
    const { currentIndex } = this.state;
    
    return (
      <View style={styles.panel}>
        <View style={styles.header}>
          <Text style={styles.title}>ChillInVR</Text>
          <Text style={styles.subtitle}>
            Panorama {currentIndex + 1} of {PANORAMAS.length}
          </Text>
        </View>
        
        <View style={styles.controls}>
          <VrButton onClick={this.previousPanorama} style={styles.button}>
            <Text style={styles.buttonText}>← Previous</Text>
          </VrButton>
          
          <VrButton onClick={this.nextPanorama} style={styles.button}>
            <Text style={styles.buttonText}>Next →</Text>
          </VrButton>
        </View>
        
        <View style={styles.info}>
          <Text style={styles.infoText}>
            Use the buttons to navigate between panoramas
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 600,
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 30,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 30,
    color: '#cccccc',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    minWidth: 200,
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  info: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    color: '#aaaaaa',
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('ChillInVR', () => ChillInVR);
