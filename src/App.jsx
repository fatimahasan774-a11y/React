import ShoppingCard from './shoppingCard'
import MouseTracker from './MouseTracker'
import CountdownTimer from './CountdownTimer';
// import Fruit from './Fruits'
import UserList from "./UserList.jsx";
const App = ()=>{

    const users = [
    { id: 1, name: "Fatima", email: "fatima@gmail.com" },
    { id: 2, name: "Abdalla", email: "abdalla@gmail.com" },
  ];

  return (
  <>
  <UserList users={users} />;
  {/* <Fruit/> */}
  {/* <CountdownTimer/> */}
{/* <TodoList/> */}
{/* <ShoppingCard/> */}
{/* <MouseTracker/> */}
  </>
 )
  

}
export default App;



