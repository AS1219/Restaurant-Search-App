import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView, 
    Button
} from "react-native";

const SettingsScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text 
            style={{ 
            fontSize: 25, 
            textAlign: 'center', 
            marginBottom: 16
            }}>
              Settings Screen!
          </Text>
          <Button title="Sign Out" onPress={() => {signOut()}} />
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SettingsScreen;