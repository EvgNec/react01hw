import { StatisticsSection, Title } from '../FriendList/FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StatisticsSection>
      <Title>Upload stats</Title>

      <ul class="stat-list">
          {friends.map(({ id, avatar, name, isOnline }) => (
            //   <StatisticsCard key={id} label={label} percentage={percentage} />
              <li key={id}>
                  <span>{isOnline }</span>
                  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
</li>
        ))} 
      </ul>
    </StatisticsSection>
  );
};


