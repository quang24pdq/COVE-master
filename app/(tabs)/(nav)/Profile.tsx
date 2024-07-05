import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { router } from 'expo-router';

const ProfilePage = () => {


  return (
    <View style={{backgroundColor: '#faf2f2',flex: 1}} >
      <Image source={require("../../../assets/images/Background.png")}style={{width: '100%', height: "30%",borderBottomLeftRadius: 50,borderBottomRightRadius:50}}/> 
      <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/images/Profile (2).png")} style={styles.profileImage} />
        <Text style={styles.username}>Brainteach Graphics</Text>
        <Text style={styles.handle}>@brainteach</Text>
      </View>
      <View style={{display: 'flex',flexDirection: "row", gap: 5,justifyContent: 'center',alignContent: 'center'}}> 
      <Pressable style={styles.buttontop} onPress={() => router.push('../FriendsPage')}>
        <Text style={styles.buttontopText}>Your Friends</Text>
      </Pressable>
      <Pressable style={styles.buttontop} onPress={() => router.push('EditProfilePage')}>
        <Text style={styles.buttontopText}>Edit Profile</Text>
      </Pressable>
      </View>
      <Pressable style={styles.button} onPress={() => router.push('SettingsPage')}>
        <Text style={styles.buttonText}>My Public Profile</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('SettingsPage')}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('')}>
        <Text style={styles.buttonText}>Get Cove Premium</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('')}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    top: -50,
    padding: '5@s',
    position:"relative",
  },
  header: {
    alignItems: 'center',
    marginBottom: '20@s',
    
    },
  profileImage: {
    width: '80@s',
    height: '80@s',
    borderRadius: '40@s',
  },
  username: {
    fontSize: '18@s',
    fontWeight: 'bold',
    marginTop: '10@s',
  },
  handle: {
    fontSize: '14@s',
    color: '#666',
  },
  buttontop: {
    backgroundColor: '#800000',
    padding: '10@s',
    paddingHorizontal: '20@s',
    marginVertical: '10@s',
    borderRadius: '50@s',
  },
  buttontopText: {
    fontSize: '12@s',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: '15@s',
    marginVertical: '10@s',
    borderRadius: '10@s',
    borderwidth: '5@s',
    borderColor: "#faf2f2"
    
  },
  buttonText: {
    fontSize: '16@s',
    color: '#333',
  },
});

export default ProfilePage;
