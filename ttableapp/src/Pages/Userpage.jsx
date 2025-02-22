import styled from 'styled-components';
import Header from '../Components/Header/Header'

const Backgroundcontainer = styled.section`
  background-color: var(--secondary-bg-clr);
  min-height:100vh;
`


function Userpage() {
  return (
    <Backgroundcontainer>
      <Header/>
      
      
    </Backgroundcontainer>
  )
}

export default Userpage;
