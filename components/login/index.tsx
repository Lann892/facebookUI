import React, { useState, useCallback } from "react";
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import tw from "twrnc";
import { Logo, Meta } from "../images";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Utiliza useMemo para evitar que la función se re-crea en cada renderizado
  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  // Utiliza useMemo para evitar que la función se re-crea en cada renderizado
  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  return (
    <View style={[tw`flex-1 justify-center items-center`]}>
      <LinearGradient
        colors={["rgba(253, 240, 240, .7)", "rgba(224, 244, 255, .7)"]}
        //horizontal
        start={{ x: 0, y: 1 }}
        style={tw`flex-1 justify-center items-center w-full`}>
        <KeyboardAvoidingView
          behavior="padding"
          style={[tw`flex-1 justify-center items-center w-full`]}>
          <Image source={Logo} style={tw`h-15 w-15 m-20`} />

          <TextInput
            placeholder="Mobile number or email"
            autoFocus
            value={email}
            onChangeText={handleEmailChange}
            style={[
              tw`border border-gray-300 p-4.5 rounded-xl w-11/12 bg-white`,
              { fontSize: 15.5 },
            ]}
            textContentType="oneTimeCode"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            style={[
              tw`border border-gray-300 p-4.5 rounded-xl w-11/12 bg-white mt-3`,
              { fontSize: 15.5 },
            ]}
          />
          <TextInput />

          <View style={tw`w-full justify-center items-center`}>
            <TouchableOpacity
              style={[
                tw`rounded-3xl w-11/12 p-3 justify-center items-center`,
                { backgroundColor: "#0064e0" },
              ]}>
              <Text
                style={{ color: "white", fontWeight: "600", fontSize: 15.5 }}>
                Log in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[tw`mt-4`]}>
              <Text style={{ fontSize: 15, fontWeight: "500", opacity: 0.85 }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              tw`w-full items-center`,
              {
                justifyContent: "flex-end",
                flex: 1 / 3,
                marginTop: "28%",
                marginBottom: -85,
              },
            ]}>
            <TouchableOpacity
              style={[
                tw`rounded-3xl w-11/12 p-3 justify-center items-center`,
                {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "#0064e0",
                },
              ]}>
              <Text
                style={{ color: "#0064e0", fontWeight: "600", fontSize: 15.5 }}>
                Create new account
              </Text>
            </TouchableOpacity>

            <View
              style={{
                opacity: 0.6,
                flexDirection: "row",
              }}>
              <Image
                source={Meta}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 16.5,
                  fontWeight: "500",
                  marginTop: 15,
                  marginLeft: 3,
                }}>
                Meta
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
};

export default Login;
