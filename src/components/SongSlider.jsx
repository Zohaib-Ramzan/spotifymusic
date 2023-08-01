import { View, Text , StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import TrackPlayer, {useProgress} from "react-native-track-player"

const SongSlider = () => {
      const [isSeeking , setIsSeeking] = useState(false)
      const [seek , setSeek] = useState(0)
      const {position , duration} = useProgress()

  return (
    <View>
      <Slider 
      value={isSeeking ? seek : position}
      minimumValue={0}
      maximumValue={duration}
      thumbTintColor='#FFF'
      maximumTrackTintColor='#FFF'
      onValueChange={(value)=> {
        TrackPlayer.pause();
        setIsSeeking(true);
        setSeek(value)
      }}
      onSlidingComplete={(value)=> {
        TrackPlayer.seekTo(value);
        TrackPlayer.play();
      }}
      style={styles.sliderContainer}
       /> 
       <View style={styles.timeContainer}>
        <Text style={styles.time}>
            {new Date(position*1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
            {new Date((duration-position)*1000).toISOString().substring(15, 19)}
        </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });


export default SongSlider