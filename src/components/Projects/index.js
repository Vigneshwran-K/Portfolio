import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Have a look at my work on a wide range of projects including Data Analysis, Data Manipulation, Data Cleaning and Data Visualisations. 
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Viz' ?
            <ToggleButton active value="Data Viz" onClick={() => setToggle('Data Viz')}>Data Viz</ToggleButton>
            :
            <ToggleButton value="Data Viz" onClick={() => setToggle('Data Viz')}>Data Viz</ToggleButton>
          }
          <Divider />
          {toggle === 'My SQL' ?
            <ToggleButton active value="My SQL" onClick={() => setToggle('My SQL')}>My SQL</ToggleButton>
            :
            <ToggleButton value="My SQL" onClick={() => setToggle('My SQL')}>My SQL</ToggleButton>
          }
          <Divider />
          {toggle === 'Python' ?
            <ToggleButton active value="Python" onClick={() => setToggle('Python')}>Python</ToggleButton>
            :
            <ToggleButton value="Python" onClick={() => setToggle('Python')}>Python</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects