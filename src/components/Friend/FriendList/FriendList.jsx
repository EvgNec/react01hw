import { StatisticsSection, Title } from '../FriendList/FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StatisticsSection>
      <Title>Upload stats</Title>

      <ul class="stat-list">
          {friends.map(({ id, avatar, name, isOnline }) => (
          <StatisticsCard key={id} label={label} percentage={percentage} />
        ))} 
      </ul>
    </StatisticsSection>
  );
};


