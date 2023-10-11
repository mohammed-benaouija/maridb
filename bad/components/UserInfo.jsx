




'use client';
// import { useState, useEffect } from 'react';

// function FriendsPage() {
//   const [userId, setUserId] = useState(null);
//   const [friendId, setFriendId] = useState('');
//   const [friendRequests, setFriendRequests] = useState([]);
//   const [friends, setFriends] = useState([]);

//   // استرداد معرف المستخدم عند التحميل
//   useEffect(() => {
//     async () => {
//       const response = await fetch('http://localhost:3333/auth/user', {
//         credentials: 'include',
//       }); // قم بتغيير هذا العنوان إلى المسار الصحيح لاسترداد معرف المستخدم
//       const data = await response.json();  
//       console.log("ssddddddddd")
//       setUserId(data.id);

//     }
//   }, []);

//   // استرداد طلبات الصداقة الواردة عندما يتغير معرف المستخدم
//   useEffect(() => {
//     if (userId) {
//       fetch(`/api/friends/requests/${userId}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setFriendRequests(data.friendRequests);
//         })
//         .catch((error) => {
//           console.error('Error fetching friend requests:', error);
//         });
//     }
//   }, [userId]);

//   // استرداد قائمة الأصدقاء عندما يتغير معرف المستخدم
//   useEffect(() => {
//     if (userId) {
//       fetch(`/api/friends/list/${userId}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setFriends(data.friends);
//         })
//         .catch((error) => {
//           console.error('Error fetching friends list:', error);
//         });
//     }
//   }, [userId]);

//   // إرسال طلب صداقة
//   const sendFriendRequest = () => {
//     console.log(userId);
//     fetch(`http://localhost:3333/friends/send-request/${friendId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ senderId: userId }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log('Friend request sent successfully');
//         // يمكنك أيضًا تحديث القائمة أو إعادة استرداد طلبات الصداقة هنا
//       })
//       .catch((error) => {
//         console.error('Error sending friend request:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Friends</h1>
//       <div>
//         <h2>Friend Requests</h2>
//         <ul>
//           {friendRequests.map((request) => (
//             <li key={request.id}>
//               {request.sender.name} sent you a friend request
//               <button onClick={() => acceptFriendRequest(request.id)}>Accept</button>
//               <button onClick={() => refuseFriendRequest(request.id)}>Refuse</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Friends</h2>
//         <ul>
//           {friends.map((friend) => (
//             <li key={friend.id}>{friend.name}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Send Friend Request</h2>
//         <input
//           type="text"
//           placeholder="Friend's ID"
//           value={friendId}
//           onChange={(e) => setFriendId(e.target.value)}
//         />
//         <button onClick={sendFriendRequest}>Send Request</button>
//       </div>
//     </div>
//   );
// }

// export default FriendsPage;

import Cookies from 'js-cookie';

import { useEffect, useState } from 'react';

function UsersPage() {
  
  
  const [users, setUsers] = useState([]);
  const [friendId, setFriendId] = useState(0); 
  const [id, setid] = useState(0); 
  const [Email, setEmail] = useState("");
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:3333/auth/user', {
          credentials: 'include',
        });
        const content = await response.json();
        // setfoto_user(content.foto_user);
        setid(content.id);
        // setUsername(content.username);
    
        console.log(content.id);
      }
    )();
  });
  useEffect(() => {
    (
      async () => {
        const response = await fetch(`http://localhost:3333/friends/accepted-friends/${id}`, {
          credentials: 'include',
        });
        const contentt = await response.json();
        // setfoto_user(content.foto_user);
        // setUsername(content.username);
    
        console.log(contentt);
      }
    )();
  });
  useEffect(() => {
    // Fetch all users from your API endpoint
    fetch('http://localhost:3333/users') // Update the endpoint to match your backend route
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
    const sendRequest = async () => {
    try {
      const response = await fetch(`http://localhost:3333/friends/send-request/${friendId}/${id}`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Friend request sent successfully.');
      } else {
        console.error('Failed to send friend request.');
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };


//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//   {Array.isArray(users) &&
//     users.map((user) => (
//       <li key={user.id}>{user.foto_user}</li>
//     ))}
// </ul>
//     </div>
//   );
return (
  <div>
    <h1>Send Friend Request</h1>
    <div>
      <label htmlFor="friendId">Friend's ID:</label>
      <input
        type="number"
        id="friendId"
        value={friendId}
        onChange={(e) => setFriendId(Number(e.target.value))}
      />
    </div>
    <button onClick={sendRequest}>Send Friend Request</button>
  </div>
);
}

export default UsersPage;