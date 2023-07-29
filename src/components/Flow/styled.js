import { styled } from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 90%;

  .dndnode {
    padding: 1rem;
    border: 1px solid #1a192b;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const FlowContainer = styled.div`
  flex-grow: 1;
  height: 100%;
`
