import React from 'react';
import "./widget.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleIcon from '@mui/icons-material/People';
//import GroupsIcon from '@mui/icons-material/Groups';
//import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
//import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
//import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


// const Widget = ({ type }) => {
//   let data;

//   const amount= 10000;
//   const diff= 20;

//   switch (type) {
//     case "users":
//       data={
//         title:"USERS",
//         isMoney:false,
//         link:"see all users",
//         icon:<GroupsIcon className='icon' />,
//       };
//       break;

//       case "games":
//       data={
//         title:"GAMES",
//         isMoney:false,
//         link:"View all games",
//         icon:<SportsEsportsIcon className='icon' />,
//       };
//       break;

//       case "winners":
//       data={
//         title:"WINNERS",
//         isMoney:false,
//         link:"View all users",
//         icon:<EmojiEventsIcon className='icon' />,
//       };
//       break;

//       case "luckycoins":
//       data={
//         title:"LUCKYCOINS",
//         isMoney:true,
//         link:"View all coins",
//         icon:<MonetizationOnIcon className='icon' />,
//       };
    
//       break;
//       default:
//       break;
//   }
  // useEffect (() => {
        
  //   console.log("test", data);
  //   })
  const Widget = () =>{
  return (
    <div className='widget'>
        <div className='left'>
        <span className='title'>USERS</span>
        <span className='counters'>12345
          
        </span>
        <span className='link'>View all users</span>
        </div>
        <div className='right'>
        <div className='percentage positive'>
           <KeyboardArrowUpIcon  />
           20%
        </div>
           
           <PeopleIcon/>
        </div>
    </div>
  )
  };

export default Widget;