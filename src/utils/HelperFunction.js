import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData=async (key,value)=>{
  await AsyncStorage.setItem(key,JSON.stringify(value));
}

 export const getData= async (key)=>{
    return await AsyncStorage.getItem(key);
}