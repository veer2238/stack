import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (

       
        
        <View style={styles.bottomView}>
        <Text style={styles.textStyle}>Bottom View</Text>
      </View>
      
    )
  }
}

export default Footer

const styles = StyleSheet.create({
    
    bottomView: {
        display:"flex",
      width: '100%',
      height: 90,
      backgroundColor: '#EE5407',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
      
    },
  
    textStyle: {
      color: '#fff',
      fontSize: 28,
      
    },

   
  });