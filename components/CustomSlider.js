// create a custom slider component to display the waveform of the audio file

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ( {duration, currentDuration, onSlidingComplete} ) => {
    return (
        <View style={styles.waveformContainer}>
            <Slider
                style={{width: 200, height: 40}}
                value={currentDuration}
                minimumValue={0}
                maximumValue={duration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onSlidingComplete={onSlidingComplete}
                step={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    waveformContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    }
});

export default CustomSlider;