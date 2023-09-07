import Typography from '../../atoms/Typography/Typography';
import * as Styled from './NotificationCard.styled';
import Icon from '../../atoms/Icon/Icon';
import { useState } from 'react';
import { IconName } from '../../atoms/Icon/icon.types';

export type Notification = {
  title: string;
  description: string;
  iconName: IconName | null;
};
export type NotificationProps = {
  data: Notification;
};

const NotificationCard = ({ data: { title, description, iconName } }: NotificationProps) => {
  const [removeNotification, setRemoveNotification] = useState<boolean>(false);
  const [ifRemoveHovered, setIfRemoveHovered] = useState<boolean>(false);

  const removeIconHover = () => {
    setIfRemoveHovered(true);
  };
  const removeIconNoHover = () => {
    setIfRemoveHovered(false);
  };

  const deleteNotification = () => {
    setRemoveNotification(true);
  };

  const undoDeleteNotification = () => {
    setRemoveNotification(false);
  };

  return (
    <Styled.NotificationCardContainer>
      {!removeNotification ? (
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
            onClick={deleteNotification}
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
            <Styled.UndoButton onClick={undoDeleteNotification}>Undo</Styled.UndoButton>
          </Styled.Texts>
          <Styled.Dummy />
        </>
      )}
    </Styled.NotificationCardContainer>
  );
};

export default NotificationCard;
