import { ProfileCard } from "./ProfileCard/ProfileCard";
import user from "./ProfileCard/user.json";
import statistics from './/Statistics/data.json'
import { StatisticsList } from "./Statistics/StatisticsList/StatisticsList";

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
      <StatisticsList statistics={statistics} />
<ProfileCard   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
    </div>
  );
};
