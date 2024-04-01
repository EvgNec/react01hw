import { ProfileCard } from "./ProfileCard/ProfileCard";
import user from "./ProfileCard/user.json";
import statistics from './/Statistics/data.json'
import { Statistics } from "./Statistics/Statistics";
import { StatisticsList } from "./Statistics/StatisticsList";

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
      {/* <Statistics /> */}
      <StatisticsList statistics={statistics} />
{/* <ProfileCard   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/> */}
    </div>
  );
};
