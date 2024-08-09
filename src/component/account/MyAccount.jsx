// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from "./Account.module.css";

// export default function MyAccount() {
//   const [proImg, setImg] = useState("https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_640.png");
//   const [user, setUser] = useState(null);
//   const [newFirstName, setNewFirstName] = useState("");
//   const [newLastName, setNewLastName] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [plan, setPlan] = useState(null);
//   const location = useLocation();

//   // Function to handle image file changes
//   const ChangeImg = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImg(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setImageFile(file); // Update the image file
//     }
//   };

//   // Handle changes in input fields
//   const handleFirstNameChange = (e) => setNewFirstName(e.target.value);
//   const handleLastNameChange = (e) => setNewLastName(e.target.value);
//   const handleEmailChange = (e) => setNewEmail(e.target.value);

//   // Update user data including profile image
//   const handleUpdate = async () => {
//     if (!user) return;

//     try {
//       const updatedUser = {
//         ...user,
//         firstName: newFirstName || user.firstName,
//         lastName: newLastName || user.lastName,
//         email: newEmail || user.email,
//         profileImg: imageFile ? proImg : user.profileImg, // Save new profile image or keep existing one
//       };

//       const response = await fetch(`http://localhost:5000/users/${user.id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedUser),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const updatedData = await response.json();
//       setUser(updatedData);
//       alert('User updated successfully');
//     } catch (err) {
//       console.error('Error updating user:', err);
//       alert('Error updating user');
//     }
//   };

//   // Fetch user data on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const { username } = location.state || {};

//         if (!username) {
//           console.error('No username found in location state');
//           return;
//         }

//         const response = await fetch('http://localhost:5000/users');
//         const users = await response.json();
        
//         const userData = users.find(user => user.username === username);
        
//         if (userData) {
//           setUser(userData);
//           setImg(userData.profileImg); // Set the profile image from the database
//           setPlan(userData.plan);
//         } else {
//           console.error('User not found');
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//       }
//     };

//     fetchUserData();
//   }, [location.state]);

//   if (!user) {
//     return <p>No user data available</p>;
//   }

  

//   return (
//     <div className={styles.body}>
//       <div className={styles.Account}>
//         <div className={styles.ImgPart}>
//           <img src={proImg} alt="Profile" />
//           <input type="file" name="img" id="file" onChange={ChangeImg} />
//         </div>
//         <div className={styles.InfoPart}>
//           <h4>Username:</h4>
//           <p>{user.username}</p>
//           <h4>First Name:</h4>
//           <input
//             type="text"
//             value={newFirstName || user.firstName}
//             onChange={handleFirstNameChange}
//             placeholder="New First Name"
//           />
//           <h4>Last Name:</h4>
//           <input
//             type="text"
//             value={newLastName || user.lastName}
//             onChange={handleLastNameChange}
//             placeholder="New Last Name"
//           />
//           <h4>Email:</h4>
//           <input
//             type="email"
//             value={newEmail || user.email}
//             onChange={handleEmailChange}
//             placeholder="New Email"
//           />
//           <h4>Membership Plan:</h4>
//           {/* change here */}
//           <p>{user.plan}</p>
//           <input type="text" />
//           <button onClick={handleUpdate}>Update Profile</button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./Account.module.css";

export default function MyAccount() {
  const [proImg, setImg] = useState("https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_640.png");
  const [user, setUser] = useState(null);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [plan, setPlan] = useState("");
  const location = useLocation();

  // Function to handle image file changes
  const ChangeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Update the image file
    }
  };

  // Handle changes in input fields
  const handleFirstNameChange = (e) => setNewFirstName(e.target.value);
  const handleLastNameChange = (e) => setNewLastName(e.target.value);
  const handleEmailChange = (e) => setNewEmail(e.target.value);

  // Update user data including profile image
  const handleUpdate = async () => {
    if (!user) return;

    try {
      const updatedUser = {
        ...user,
        firstName: newFirstName || user.firstName,
        lastName: newLastName || user.lastName,
        email: newEmail || user.email,
        profileImg: imageFile ? proImg : user.profileImg, // Save new profile image or keep existing one
      };

      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedData = await response.json();
      setUser(updatedData);
      alert('User updated successfully');
    } catch (err) {
      console.error('Error updating user:', err);
      alert('Error updating user');
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { username } = location.state || {};

        if (!username) {
          console.error('No username found in location state');
          return;
        }

        const response = await fetch('http://localhost:5000/users');
        const users = await response.json();
        
        const userData = users.find(user => user.username === username);
        
        if (userData) {
          setUser(userData);
          setImg(userData.profileImg); // Set the profile image from the database
          setPlan(userData.plan); // Set the plan
        } else {
          console.error('User not found');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, [location.state]);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.Account}>
        <div className={styles.ImgPart}>
          <img src={proImg} alt="Profile" />
          <input type="file" name="img" id="file" onChange={ChangeImg} />
        </div>
        <div className={styles.InfoPart}>
          <h4>Username:</h4>
          <p>{user.username}</p>
          <h4>First Name:</h4>
          <input
            type="text"
            value={newFirstName || user.firstName}
            onChange={handleFirstNameChange}
            placeholder="New First Name"
            style={{color: 'white',backgroundColor: 'black',border: 'none'}}
          />
          <h4>Last Name:</h4>
          <input
            type="text"
            value={newLastName || user.lastName}
            onChange={handleLastNameChange}
            placeholder="New Last Name"
            style={{color: 'white',backgroundColor: 'black',border: 'none'}}
          />
          <h4>Email:</h4>
          <input
            type="email"
            value={newEmail || user.email}
            onChange={handleEmailChange}
            placeholder="New Email"
            style={{color: 'white',backgroundColor: 'black',border: 'none'}}
          />
          <h4>Membership Plan:</h4>
          <p>{plan || "No Plan Selected"}</p>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </div>
  );
}
