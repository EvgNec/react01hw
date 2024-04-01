import { ProfileCard } from "./ProfileCard/ProfileCard";
import user from "./ProfileCard/user.json";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<Statistics/>
{/* <ProfileCard   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/> */}
    </div>
  );
};
