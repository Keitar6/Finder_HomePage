import Typography from '../../atoms/Typography/Typography';
import * as Styled from './NotificationCard.styled';
import Icon from '../../atoms/Icon/Icon';
import { useContext, useEffect, useState } from 'react';
import { IconName } from '../../atoms/Icon/icon.types';
import { GeneralContext } from '../../../contexts/GeneralContext';

export type Notification = {
  title: string;
  description: string;
  iconName: IconName | null;
  isDissmised: boolean;
};
export type NotificationProps = {
  data: Notification;
};

const NotificationCard = ({
  data: { title, description, iconName, isDissmised },
}: NotificationProps) => {
  const [removeNotification, setRemoveNotification] = useState<boolean | null>(null);
  const [ifRemoveHovered, setIfRemoveHovered] = useState<boolean>(false);
  const { notifications, setNotifications } = useContext(GeneralContext);

  const removeIconHover = () => {
    setIfRemoveHovered(true);
  };
  const removeIconNoHover = () => {
    setIfRemoveHovered(false);
  };

  const changeStateOfTheNotification = () => {
    setRemoveNotification(!removeNotification);
  };

  useEffect(() => {
    if (removeNotification !== null) {
      setNotifications(
        notifications.map((note) =>
          note.title === title ? { ...note, isDissmised: removeNotification } : note,
        ),
      );
    }
  }, [removeNotification]);

  return (
    <Styled.NotificationCardContainer>
      {!isDissmised ? (
        <>
          <Styled.IconWrapper>
            {iconName !== null ? (
              <Icon name={iconName} size={20} color='blueDark' />
            ) : (
              <Styled.Dummy />
            )}
          </Styled.IconWrapper>

          <Styled.Texts>
            <Typography variant='smallParagraph' style={{ fontWeight: 'bold', width: '100%' }}>
              {title}
            </Typography>
            <Typography variant='smallParagraph' color='inputGrey'>
              {description}
            </Typography>
          </Styled.Texts>
          <Styled.Dummy />
          <Styled.RemoveButtonWrapper
            onMouseOver={removeIconHover}
            onMouseOut={removeIconNoHover}
            onClick={changeStateOfTheNotification}
          >
            <Icon name={'remove'} size={0} color={ifRemoveHovered ? 'text' : 'inputGrey'} />
          </Styled.RemoveButtonWrapper>
        </>
      ) : (
        <>
          <Styled.Dummy />
          <Styled.Texts>
            <Typography variant='smallParagraph' style={{ width: '100%' }}>
              This notification has been dismissed.
            </Typography>
            <Styled.UndoButton onClick={changeStateOfTheNotification}>Undo</Styled.UndoButton>
          </Styled.Texts>
          <Styled.Dummy />
        </>
      )}
    </Styled.NotificationCardContainer>
  );
};

export default NotificationCard;
