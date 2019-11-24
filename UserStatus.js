import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
const medalImage = require('../../Images/medal.png');
const gemImage = require('../../Images/diamond.png');
const chestImage = require('../../Images/chest.png');

const UserStatus = props => {
  // js de-structuring
  // data entry
  const {
    onPressProfile,
    onPressChest,
    profileImage,
    userName,
    medals,
    gems,
    backgroundColor,
  } = props;

  //data transformation
  let bgColor = 'rgb(39,147,85)'; // default color
  if (backgroundColor != null) {
    bgColor = backgroundColor; // override default color
  }

  //rendreing stuff
  return (
    <View>
      <TouchableOpacity
        onPress={onPressProfile}
        style={[styles.ProfileView, {backgroundColor: bgColor}]}>
        <View style={styles.profilePart1}>
          <Image source={profileImage} style={styles.profilePicture} />
          <Text style={styles.profileName}>{userName}</Text>
        </View>
        <View style={styles.profilePart2}>
          <Image source={medalImage} style={styles.medal} />
          <Text style={styles.medalNumber}>{medals}</Text>
          <Image source={gemImage} style={styles.diamond} />
          <Text style={styles.diamondNumber}>{gems}</Text>
        </View>
        <TouchableOpacity style={styles.chestTouch} onPress={onPressChest}>
          <Image source={chestImage} style={styles.chest} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 50,
    // backgroundColor: 'rgb(39,147,85)',
  },
  profilePicture: {
    marginLeft: 3,
    width: 45,
    height: 45,
  },
  profilePart1: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
  },
  profilePart2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  medal: {
    width: 28,
    height: 28,
  },
  medalNumber: {
    color: 'yellow',
    marginLeft: -3,
    marginRight: 4,
  },
  diamond: {
    width: 26,
    height: 26,
  },
  diamondNumber: {
    color: 'white',
  },
  chestTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
  },
  profileName: {
    fontSize: 17,
    color: 'white',
    marginLeft: 6,
  },
  chest: {
    width: 28,
    height: 28,
  },
});

export default UserStatus;
