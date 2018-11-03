import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//import Text from './Input'

class Input extends React.Component {
  
  render() {
    return (
      <View >
     <TextInput placeholder={this.props.place} secureTextEntry={this.props.secure} onChangeText={this.props.change}  ref={this.props.ref} maxLength={this.props.max} ></TextInput>
     </View>
    );
  }
}


export default class App extends React.Component {
 
  render() {
    return (
 <View style={styles.container}>
    <Input place={'entrada'} secure={true} ref={input => this.entra = input} max={2} />
    <Input place={"entrou"}/>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
