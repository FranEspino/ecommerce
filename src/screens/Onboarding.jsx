import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';

const Onboarding = (stack) => {
  return (
    <>
      <View style={{ marginLeft: 16, paddingTop: 29,backgroundColor:'white'}}>
        <Text style={{
             fontSize: 50, 
             color:'black', 
             fontFamily: 'Poppins-Black',
             lineHeight: 60,
  

             }}>
          Define Yourself In Your Unique Way.
        </Text>
      </View>

      <View style={{position: 'absolute', bottom: Platform.OS === 'ios' ? -36 : -100}}>
        <Image
          width={Platform.OS ==='ios' ? 440 : 400}
          height={Platform.OS ==='ios' ? 690 : 680}
          source={{
            uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1691248213/idat/onboarding_gxyvdw.png',
          }}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {stack.navigation.navigate('SignUp')}}
          style={{
            backgroundColor: 'black',
            paddingVertical: 17,
            width: '80%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Onboarding;
