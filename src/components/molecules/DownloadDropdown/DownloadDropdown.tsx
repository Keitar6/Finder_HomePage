import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import QRDropdownItem from '../QRDropdownItem/QRDropdownItem';
import * as Styled from './DownloadDropdown.styled';
import { FC, useState } from 'react';

const DownloadDropdown: FC = () => {
  const [isQRDropdownOpen, setIsQRDropdownOpen] = useState<boolean>(false);

  const openQRDropdown = () => {
    setIsQRDropdownOpen(true);
  };
  const closeQRDropdown = () => {
    setIsQRDropdownOpen(false);
  };

  return (
    <Styled.DownloadWrapper onMouseOver={openQRDropdown} onMouseOut={closeQRDropdown}>
      <Icon name='download' />
      <Typography color='blueDark' variant='boldParagraph'>
        App
      </Typography>
      {isQRDropdownOpen ? <QRDropdownItem /> : null}
    </Styled.DownloadWrapper>
  );
};
export default DownloadDropdown;
