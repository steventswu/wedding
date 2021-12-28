import React from 'react'
import styled from 'styled-components'
import WeddingNote from '../assets/imgs/weddingnote.png'
import WeddingNote2 from '../assets/imgs/weddingnote.png'

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #f9e4e4;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: inherit.4rem;
      .pic {
        width: 7.5rem;
        height: 3.8rem;
        background-image: url(${WeddingNote});
        background-size: 100%, 100%;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        @media screen and (max-width: 428px) {
          width: 5.3rem;
          height: 2.8rem;
        }
      }
      .pic2 {
        width: 7.5rem;
        height: 3.8rem;
        background-image: url(${WeddingNote2});
        background-size: 100%, 100%;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        @media screen and (max-width: 428px) {
          width: 5.3rem;
          height: 2.8rem;
        }
      }
    }
  }
`
export default function Couple({}) {
  return (
    <StyledWrapper>
      <div className="cp">
        <div className="profile">
          <div className="pic" />
          <div className="pic2" />
        </div>
      </div>
    </StyledWrapper>
  )
}
