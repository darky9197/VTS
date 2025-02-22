import styled from "styled-components"
import { Link } from "react-router-dom"


const Navcontainer = styled.div`
  border-bottom:1px solid var(--secondary-txt-clr);
  display: flex;
  justify-content: space-between;
  align-items:baseline;
  background-color:var(--primary-bg-clr);
  padding: 1rem;
`

function Header() {
  return (
    <Navcontainer>
      <h1>TimeTable App</h1>
      <div>
        <Link>
          <button className="btn sub-btn" style={{ color: "#000" }}>Logout</button>
        </Link>
      </div>
    </Navcontainer>
  )
}

export default Header