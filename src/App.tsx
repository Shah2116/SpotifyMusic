import { useState, useEffect } from 'react';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { setupPlayer, addTrack } from '../musicPlayerServices';

function App(): JSX.Element {
  const [isPlayerReady, setIsplayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer()
    if (isSetup) {
      await addTrack()
    }
    setIsplayerReady(isSetup)

  }

  useEffect(() => {
setup()
  }, [])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  

  return (
    <SafeAreaView >
      <StatusBar />
      <Text>
        Testing seems ok
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  }

});

export default App;
