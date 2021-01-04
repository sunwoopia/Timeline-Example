import React from "react";
import styled from "styled-components";

class Header extends React.Component {
    render() {
        return (
            <HeadDiv>
                <div>Sunrain</div>
            </HeadDiv>
        )
    }
}
export default Header;

const HeadDiv = styled.div`
  width: 100%;
  height: 80px;
  
`
