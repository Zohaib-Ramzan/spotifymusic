import React , {useState ,useEffect} from "react";
import {View , Text , StyleSheet , SafeAreaView, ActivityIndicator, StatusBar} from "react-native"
import {setupPlayer , addTrack, playbackService} from "../MusicPlayerService"
import MusicPlayer from "./screens/MusicPlayer";

const App = (): JSX.Element => {

  const [isPlayerReady , setIsPlayerReady] = useState(false)

  async function setup() {
    console.log("hope")
    let isSetup = await setupPlayer()
   
    // playbackService();

    if (isSetup) {
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return(
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"}/>
    <MusicPlayer />
  </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})

export default App