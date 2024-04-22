import { FriendCard } from '../FriendCard/FriendCard';
import { StatisticsSection, Title } from '../FriendList/FriendList.styled';
import PropTypes from 'prop-types'; 

export const FriendsList = ({ friends }) => {
  return (
    <StatisticsSection>
      <Title>FriendList</Title>

      <ul>
          {friends.map(({ id, avatar, name, isOnline }) => (
   <FriendCard key={id} avatar={avatar} name={name}  isOnline={isOnline} />
        ))} 
      </ul>
    </StatisticsSection>
  );
};

FriendsList.propTypes = {

  // Перевірка, чи переданий параметр є масивом,
  // і приймає PropTypes.shape в якості параметра.
  cards: PropTypes.arrayOf(

  // shape - визначає форму об'єкта, який передається у властивість
  // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)

  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
  ).isRequired,
};
