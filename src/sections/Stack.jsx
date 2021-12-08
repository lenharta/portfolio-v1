import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Css3Logo, FirebaseLogo, GraphqlLogo, Html5Logo, JavascriptLogo, ReactLogo, ReduxLogo } from '../assets';
import { srConfig } from '../config';
import { usePrefersReducedMotion } from '../hooks';
import sr from '../utils/sr';


const StyledStackContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 700px;
  padding-top: 0;

  .perspective {
    perspective: 1000px;
  }
`;

const StyledStackInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 16px;
  width: 100%;
  max-height: 600px;
  padding: 0;
  margin: 0 auto;

  transform: rotateX(35deg);

  

  @media (max-width: 768px) {
    grid-gap: 6px;
    max-width: 600px;
  }

  .card {
    height: 100%;
    width:100%;
    
    div {
      ${({ theme }) => theme.mixins.flexCenter};
      background: linear-gradient(180deg, rgba(14, 18, 25, 1) 0%, rgba(22, 28, 39, 1) 100%);
      border-radius: 15px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      height: 100%;
      width: 100%;
      border-top: solid .5px var(--orange-tint);
      border-left: solid 1px var(--orange-tint);
      border-right: solid 1px var(--orange-tint);
      border-bottom: solid 10px var(--orange-tint);
      
      svg {
        height: 75%;
        width: 75%; 
      }
      &:hover,
      &:focus-visible {
        box-shadow: 0 0 32px var(--orange-tint);
        transform: scale(1.05);
        transform: translateY(-20px);
        transition: var(--transition);
      }
    }

    &:nth-child(1), &:nth-child(4), &:nth-child(5), &:nth-child(7) {
      grid-row: span 3;
    }

    &:nth-child(2), &:nth-child(3) {
      grid-row: span 2;
    }
    &:nth-child(6) {
      grid-column: 2 / span 2;
      grid-row: 3 / span 4;
    }
  }
`;

const Stack = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const one = (
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" aria-label="HTML 5">
      <div>
        <Html5Logo />
      </div>
    </a>
  )

  const two = (
    <a href="https://firebase.google.com/" aria-label="Firebase">
      <div>
        <FirebaseLogo />
      </div>
    </a>
  )
  
  const three = (
    <a href="https://graphql.org/" aria-label="Graph QL">
      <div>
        <GraphqlLogo />
      </div>
    </a>
  )
  
  const four = (
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" aria-label="CSS 3">
      <div>
        <Css3Logo />
      </div>
    </a>
  )
  
  const five = (
    <a href="https://www.javascript.com/" aria-label="Javascript">
      <div>
        <JavascriptLogo />
      </div>
    </a>
  )
  
  const six = (
    <a href="https://reactjs.org/" aria-label="React">
      <div>
        <ReactLogo />
      </div>
    </a>
  )
  
  const seven = (
    <a href="https://redux.js.org/" aria-label="Redux">
      <div>
        <ReduxLogo />
      </div>
    </a>
  )

  const stackItems = [one, two, three, four, five, six, seven]

  return (
    <>
      <StyledStackContainer id="stack" ref={revealContainer} >
        <div className="perspective">
        <StyledStackInner >
          {stackItems.map((item, i) => (
            <div key={i} className="card">{item}</div>
          ))}
        </StyledStackInner>
        </div>
      </StyledStackContainer>
    </>
  )
}

export default Stack
