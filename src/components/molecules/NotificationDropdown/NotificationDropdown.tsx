import { animations } from '../../../theme/animations';
import Icon from '../../atoms/Icon/Icon';
import NotificationCard from '../NotificationCard/NotificationCard';
import * as Styled from './NotificationDropdown.styled';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import { GeneralContext } from '../../../contexts/GeneralContext';

const NotificationDropdown: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [notificationsHasBeenSeen, setNotificationsHasBeenSeen] = useState<boolean>(false);
  const { notifications } = useContext(GeneralContext);

  const ref = useRef<HTMLDivElement | null>(null);
  const onClickOutside = () => {
    setIsDropdownOpen(false);
  };

  const changeStateOfNotificationDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setNotificationsHasBeenSeen(true);
  };

  const notificationsLabel = (count: number) => {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Styled.DropdownBox ref={ref}>
      <Styled.Bell>
        <IconButton
          aria-label={notificationsLabel(100)}
          onClick={changeStateOfNotificationDropdown}
        >
          <Badge
            badgeContent={!notificationsHasBeenSeen ? notifications.length : 0}
            color='error'
            sx={{ animation: animations.pulse }}
          >
            <Icon color='text' name='bell' />
          </Badge>
        </IconButton>
      </Styled.Bell>
      {isDropdownOpen ? (
        <Styled.Wrapper>
          <Styled.Container>
            {notifications.map((notification, index) => (
              <NotificationCard
                key={`Notification:${index} - ${notification.title}`}
                data={notification}
              />
            ))}
          </Styled.Container>
        </Styled.Wrapper>
      ) : null}
    </Styled.DropdownBox>
  );
};
export default NotificationDropdown;
