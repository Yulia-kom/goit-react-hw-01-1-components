import propTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.p`
  background-color: ${p => p.theme.colors.background};
`;

// display: flex;
//   flex-direction: column;
//   width: 300px;
//   margin: 25px auto 50px;
//   padding-top: 20px;
//   background-color: #fff;---
//   border-radius: 5px;
//   box-shadow: 0 1px 4px #000, -23px 0 20px -23px rgb(0 0 0 / 80%),
//     23px 0 20px -23px rgb(0 0 0 / 80%), inset 0 0 40px rgb(0 0 0 / 10%);

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box>
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt={avatar}
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </Box>
  );
}

// export default function Profile({ username, tag, location, avatar, stats }) {
//   return (
//     <div className="Profile">
//       <div className="description">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt={avatar}
//           className="avatar"
//         />
//         <p className="name">{username}</p>
//         <p className="tag">@{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};
