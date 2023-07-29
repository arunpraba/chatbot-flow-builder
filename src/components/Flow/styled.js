import { styled } from 'styled-components'

export const AppContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
  background: #f5f5f5;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
`

export const MainContainer = styled.main`
  flex-grow: 1;
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FlowContainer = styled.section`
  flex: 80%;
  background-color: lightblue;
  height: 100%;
`

export const SideBarContainer = styled.section`
  flex: 20%;
  background-color: palevioletred;
  height: 100%;
`
