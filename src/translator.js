// import React ,{useState} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import * as Localization from "expo-localization";
// import {I18n} from "i18n-js";

// const translations={
//     en:{
//         welcome:"welcome"
//     },
//     ara:{
//         welcome:"مرحباً"
//     }
// }
// const i18n =new I18n(translations);

// i18n.locale=Localization.locale;

// i18n.enableFallback=true;

// const Translator = () => {


// const[locale,setLocale]=useState(i18n.locale);

// const changeLocale =(locale) =>{
//     i18n.locale=locale;
//     setLocale(locale);
// }


//     return (
//         <View style={styles.container}>
//             <Text>Translator</Text>
//             <Text>{i18n.t('welcome')}</Text>
//             <Text>Select Language</Text>
//             <TouchableOpacity onPress={()=>changeLocale('en')}>
//                 <Text>English</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>changeLocale('ara')}>
//                 <Text>arabic</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
// container:{
//     flex:1,
//     backgroundColor:"red",
//     alignItems:"center",
//     justifyContent:"center"
// }

// })

// export default Translator;
