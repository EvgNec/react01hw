import {
  Avatar,
  Description,
  Item,
  Label,
  Location,
  Name,
  Profile,
  ProfileContainer,
  Quantity,
  Stats,
  Tag,
} from './ProfileCard.styled';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Profile>
                      <Description>
        <Avatar src={avatar} alt="User avatar" class="avatar" />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>
      </Profile>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileContainer>
  );
};
