import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = (stack) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async() => {
    console.log(fullName,email,password)
    try{
     var response = await axios.post('http://192.168.18.3:7070/api/user/register', {
        name: fullName,
        username: email,
        password: password
      })

      console.log(response)
    }catch(error){
      console.log(error)
    }
  }


  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 24, marginBottom: 24, backgroundColor:'white'}}>
      {/* Titulo Screen */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          marginTop: 18,
          color: '#000000',
        }}>
        Create an account
      </Text>
      {/* Desception Screen */}
      <Text
        style={{
          color: '#666666',
          fontSize: 16,
          marginTop: 25,
        }}>
        Let’s create your account
      </Text>
      {/* FullName InputText */}
      <View style={{marginTop:16}}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '700',
          }}>
          Full name
        </Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor={'#666666'}
          cursorColor="black"
          onChangeText={(text)=>{setFullName(text)}}
          selectionColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            height: 53,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 6,
          }}
        />
      </View>
      {/* Email InputText */}
      <View style={{marginTop: 16}}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '700',
          }}>
          Email
        </Text>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={'#666666'}
          cursorColor="black"
          onChangeText={(text)=>{setEmail(text)}}
          keyboardType="email-address"
          selectionColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            height: 53,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 6,
          }}
        />
      </View>
      {/* Password InputText */}
      <View style={{marginTop: 16}}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '700',
          }}>
          Password
        </Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={'#666666'}
          cursorColor="black"
          secureTextEntry={true}
          onChangeText={(text)=>{setPassword(text)}}
          selectionColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            height: 53,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 6,
          }}
        />
      </View>
      {/* Buttom SignUp */}
      <TouchableOpacity
        onPress={() => {signUp()}}
        style={{
          backgroundColor: 'black',
          paddingVertical: 17,
          width: '100%',
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Sign Up</Text>
      </TouchableOpacity>
      {/* Separator */}
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            height: 1,
            backgroundColor: '#CCCCCC',
            width: '43%',
        }}
        />
        <Text style={{fontSize: 16, color:'#666666'}}>Or</Text>
        <View
          style={{
            height: 1,
            backgroundColor: '#CCCCCC',
            width: '43%',
          }}
        />
      </View>
      {/*  SignUp  Google*/}
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: 'white',
          paddingVertical: 17,
          width: '100%',
          borderRadius: 10,
          marginTop: 16,
          borderWidth: 0.5,
          borderColor: 'black',
          flexDirection:'row',
          alignItems: 'center',
            justifyContent: 'center',
        }}>

        <Image   
         width={25}
          height={25}
          source={{
            uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1691253419/idat/google_ujqcap.png',
          }} />
        <Text style={{color: 'black', fontSize: 18, marginLeft:10, fontWeight:'600'}}>Sign Up with Google</Text>
      </TouchableOpacity>

      {/*  SignUp  Facebook*/}
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#1877F2',
          paddingVertical: 18,
          width: '100%',
          borderRadius: 10,
          marginTop: 10,
          flexDirection:'row',
          alignItems: 'center',
            justifyContent: 'center',
        }}>

        <Image   
         width={25}
          height={25}
          source={{
            uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1691253509/idat/facebook_zqfbyf.png',
          }} />
        <Text style={{color: 'white', fontSize: 18, marginLeft:10, fontWeight:'600'}}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      {/*  Label  SignIn*/}
      <View style={{
        flexDirection:"row",
         alignItems: 'center', 
         marginTop: Platform.OS === 'ios' ? 90 : 25,
         justifyContent:'center'
         }}>
          <Text style={{fontSize: 16, color: '#666666'}}>
           Already a member? 
          </Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text 
            style={{
            fontSize: 16,
            marginLeft: 8, 
            fontWeight: 'bold',
            textDecorationLine: 'underline'
             
             }}>Log In</Text>
          </TouchableOpacity>
      </View>
   
    </ScrollView>
  );
};

export default SignUp;
