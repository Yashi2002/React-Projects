import styled from 'styled-components'
import { Button } from '../styled/Button';
export const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src = "./images/dices 1.png" alt="dices"></img>
      </div>
      <div className='content'>
      <h1>Dice Game</h1>
      <Button
      onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
};

const Container = styled.div`
display: flex;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;

  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;


