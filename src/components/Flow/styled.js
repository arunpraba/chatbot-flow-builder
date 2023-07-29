import { styled } from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;

  .btn-group {
    display: flex;
    gap: 0.5rem;
  }

  .button {
    background: #fff;
  }
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
    background: #fff;
    width: 100%;
    color: #222;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const FlowContainer = styled.div`
  flex-grow: 1;
  height: 100%;
`

export const Alert = styled.div`
  background: ${({ isValid }) => (isValid ? '#d4edda' : '#f8d7da')};
  color: ${({ isValid }) => (isValid ? '#155724' : '#721c24')};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-left: auto;
  min-width: 20rem;
  text-align: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: white;
`

export const CardHeader = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'teal'};
  gap: 0.5rem;
  color: white;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;

  .whatsapp-icon {
    margin-left: 2rem;
  }
`

export const CardBody = styled.div`
  padding: 0.5rem;
  flex: 1;
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`
