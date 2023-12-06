// import React, { createContext, useState, useEffect } from "react";
// import { getData } from "./HelperFunction";
// import english from "../constants/english";
// import arabic from "../constants/arabic";


// const LanguageContext = createContext();

// export const LanguageProvider = ({Welcome }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState(english);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const value = await getData("lang");
//     console.log(value);
//     if (value === "arabic") {
//       setSelectedLanguage(arabic);
//     } else {
//       setSelectedLanguage(english);
//     }
//   };

//   return (
//     <LanguageContext.Provider value={{ selectedLanguage }}>
//       <Welcome/>
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageContext;