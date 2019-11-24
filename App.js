import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import UserStatus from './src/components/UserStatus';

const settingImage = require('./Images/setting.png');
const shopImage = require('./Images/shop.png');
const profileImage = require('./Images/profile.png');
const reportImage = require('./Images/report.png');

export default class Menu extends Component {
  constructor() {
    super();
  }

  onPressStartButton = () => {
    Alert.alert('Initializing Game ...');
  };

  onPressProfile = () => {
    Alert.alert('Loading Profile ...');
  };

  onPressChest = () => {
    Alert.alert('Opening Chest!');
  };

  onPressSettings = () => {
    Alert.alert('(    Settings   )');
  };

  onPressShop = () => {
    Alert.alert('opening shop!');
  };

  onPressReport = () => {
    Alert.alert('Reporting problems! ... I guess? :)');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <UserStatus
            onPressChest={this.onPressChest}
            onPressProfile={this.onPressProfile}
            profileImage={profileImage}
            userName={'Ahmad'}
            medals={2}
            gems={50}
            // backgroundColor={'white'}
          />
        </View>
        <View style={styles.middle} />
        <View style={styles.BottomMenu}>
          <TouchableOpacity
            style={styles.StartButton}
            onPress={this.onPressStartButton}>
            <Text style={styles.StartButtonText}>شروع بازی</Text>
          </TouchableOpacity>
          <View style={styles.BottomMenuBar}>
            <TouchableOpacity
              onPress={this.onPressSettings}
              style={styles.settingTouch}>
              <Image style={styles.settingSize} source={settingImage} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onPressShop}
              style={styles.shopTouch}>
              <Image style={styles.shopSize} source={shopImage} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onPressReport}
              style={styles.reportTouch}>
              <Image style={styles.reportSize} source={reportImage} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53,69,163)',
  },

  BottomMenu: {
    flex: 3,
    justifyContent: 'space-between',
  },
  StartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    backgroundColor: 'rgb(39,147,85)',
  },
  StartButtonText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Arial',
  },
  BottomMenuBar: {
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middle: {
    flex: 4,
  },
  settingTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingSize: {
    width: 25,
    height: 25,
  },
  shopSize: {
    width: 25,
    height: 25,
  },
  shopTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportSize: {
    width: 25,
    height: 25,
  },
});
