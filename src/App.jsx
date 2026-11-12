// // import ShoppingCard from './shoppingCard'
// // import MouseTracker from './MouseTracker'
// // import CountdownTimer from './CountdownTimer';
// // import Fruit from './Fruits'
// // import UserList from "./UserList.jsx";
// // import ToggleMessage from './ToggleMessage';
// // import Login from './Login';
// // import Button from './Button';
// // import  DoubleCounter  from './DoubleCounter'
// import TodoApp from  './TodoApp';
// import MultiStepForm  from './MultiStepForm '
// const App = ()=>{

//   //   const users = [
//   //   { id: 1, name: "Fatima", email: "fatima@gmail.com" },
//   //   { id: 2, name: "Abdalla", email: "abdalla@gmail.com" },
//   // ];

//   return (
//   <>
//   <MultiStepForm />
//   {/* <TodoApp/> 
//   */}
//   {/* < DoubleCounter /> */}

//   {/* <Button/> */}
//   {/* <Login/> */}
//   {/* <ToggleMessage/> */}
//   {/* // <UserList users={users} />; */}
//   {/* <Fruit/> */}
//   {/* <CountdownTimer/> */}
// {/* <TodoList/> */}
// {/* <ShoppingCard/> */}
// {/* <MouseTracker/> */}
//   </>
//  )
  

// }
// export default App;



// App.jsx
// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext';
// import ThemedComponent from './ThemedComponent';

// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </button>
//       <ThemedComponent />
//     </ThemeContext.Provider>
//   );
// }

// export default App;



import { LanguageProvider, useLanguage } from "./LanguageContext";

function SwitchButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Switch to Spanish" : "Switch to English"}
    </button>
  );
}

function Greeting() {
  const { language } = useLanguage();

  return <h1>{language === "en" ? "Hello!" : "¡Hola!"}</h1>;
}

function App() {
  return (
    <LanguageProvider>
      <SwitchButton />
      <Greeting />
    </LanguageProvider>
  );
}

export default App;