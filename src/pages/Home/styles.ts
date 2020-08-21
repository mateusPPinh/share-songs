import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #0CCE6B;

  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    height: 75px;
    width: 220px;
    border: 0;
    border-radius: 4px;
    background: #7159c1;
    font-size: 19px;
    color: #ffff;
    font-weight: bold;
    transition: background 0.2s;
    text-transform: uppercase;
    letter-spacing: 1.5;

    &:hover {
      background: ${shade(0.1, '#7159c1')};
    }
  }
`;