import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const HomeScreen = () => {
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState()
    useEffect(()=>{
    checkIfLocationEnabled();
    getCurrentLocation();
    },[])
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})