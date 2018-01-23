// @flow
import React from 'react';
// import PropTypes from 'prop-types';
import EasyBluetooth from 'easy-bluetooth-classic';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

var config = {
  "uuid": "00001101-0000-1000-8000-00805f9b34fb",
  "deviceName": "Bluetooth Example Project",
  "bufferSize": 1024,
  "characterDelimiter": "\n"
};

EasyBluetooth.init(config)
  .then(function (config) {
    console.log("config done!");
  })
  .catch(function (ex) {
    console.warn(ex);
  });

export default class BApp extends React.Component {
  static navigationOptions = {
    title: 'BApp',
  };

  constructor(props) {
    super(props);
    this.state = {
      example: '',
    };
    console.log("BLUE TOOTH NESS")
  }

  scan = () => {
    console.log("START SCAN")
    EasyBluetooth.startScan()
      .then(function (devices) {
        console.log("all devices found:");
        console.log(devices);
      })
      .catch(function (ex) {
        console.log("error");
        console.warn(ex);
      });
  }


  render() {
    return (
      <View>

        <Button style={{height: 100}} onPress={() => {this.scan()} }>
          <View>
          <Text>BApp</Text>
          </View>
        </Button>
      </View>
    );
  }
}

// BApp.propTypes = {
//   myprop: PropTypes.number,
// };
// BApp.defaultProps = {
//   myprop: 0,
// };