// import { Alert } from "./Alert";

// export const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };


// import { HiUser } from "react-icons/hi";

// const UserMenu = ({ name }) => {
//   return (
//     <div>
//       <p><HiUser /> {name}</p>
//     </div>
//   );
// };


import {Profil} from "./Profil"

const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308
    }
  };
  
  
  const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
    );
  };

  export default App;
  
