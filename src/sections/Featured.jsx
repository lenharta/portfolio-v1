import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { usePrefersReducedMotion } from '../hooks'
import { srConfig } from '../config'
import sr from '../utils/sr'
import { disneyPlus, Gpt3 } from '../assets';
import { FeaturedProject } from '../components'

const StyledFeaturedSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  max-width: 1000px;

  .section__heading-top {
    margin-bottom: 100px;

    @media (max-width: 480px) {
      margin-bottom: 40px;
    }
  }
`;



const Featured = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <>
      <StyledFeaturedSection id="projects">
        <h2 className="section__heading-top" ref={revealContainer}>Projects</h2>
        <FeaturedProject
          projectImg={Gpt3}
          alt="Gpt 3"
          title="OpenAI GPT3 Mock Website"
          content="A mock website promoting OpenAI's GPT-3 API that is now open to the public. "
          tech="React | CSS3 | JSX | Netlify"
          githubLink="https://github.com/lenharta/gpt3"
          url="#"
        />
        <FeaturedProject
          projectImg={disneyPlus}
          alt="Gpt 3"
          title="Disney+ App Clone"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit cursus 
            risus at. Netus et malesuada fames ac. Justo nec ultrices dui sapien."
          tech="React | Styled Components | Redux | Firebase"
          githubLink="https://github.com/lenharta"
          url="#"
        />
        <FeaturedProject
          projectImg={Gpt3}
          alt="Gpt 3"
          title="Travel Companion App"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit cursus 
            risus at. Netus et malesuada fames ac. Justo nec ultrices dui sapien."
          tech="React | Styled Components | Axios | Google Maps API"
          githubLink="https://github.com/lenharta"
          url="#"
        />
      </StyledFeaturedSection>
    </>
  )
}

export default Featured