import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import QRCode from '../../../assets/img/QRCode.svg';
import CenterWrapper from '../../atoms/CenterWrapper/CenterWrapper';
import * as Styled from './QRDropdownItem.styled';

const QRDropdownItem = () => (
  <Styled.Wrapper>
    <Styled.QRDropdown>
      <Styled.QRImage src={QRCode} alt='QR Code --> Download application' />
      <Styled.Texts>
        <Typography variant='smallParagraph' style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Free Credit Score
        </Typography>
        <Typography variant='smallParagraph' style={{ textAlign: 'center' }}>
          Scan to download the ultimate money app
        </Typography>
      </Styled.Texts>
      <CenterWrapper>
        <Button variant='hoverReverse' style={{ borderRadius: '100rem' }}>
          Get it now
        </Button>
      </CenterWrapper>
    </Styled.QRDropdown>
  </Styled.Wrapper>
);

export default QRDropdownItem;
