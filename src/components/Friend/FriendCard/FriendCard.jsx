import PropTypes from 'prop-types';

export const FriendCard
    = ({ avatar, name, isOnline }) =>
    {
        return (
              <li>
                  <span>{isOnline }</span>
                  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
</li>
        );
    }
    
FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};