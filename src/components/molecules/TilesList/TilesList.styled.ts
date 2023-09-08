import styled from 'styled-components';

export const TilesDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  gap: 1rem;
`;

export const TilesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  gap: 1rem;
  padding: 0 20px;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;

  z-index: 10;
  background-color: transparent;

  gap: 4px;
  padding: 8px 15px 10px;
`;
