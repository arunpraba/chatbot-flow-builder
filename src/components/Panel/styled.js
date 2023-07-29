import { styled } from 'styled-components'

export const PanelContainer = styled.div`
  border-right: 1px solid #eee;
  padding: 1rem;
  background: #fcfcfc;

  @media screen and (min-width: 768px) {
    width: 20%;
    max-width: 250px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  place-items: center;
  flex-direction: column;
`

export const SettingsPanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    cursor: pointer;
    background: #fff;
    border: 0;
    padding: 0;
    color: #222;
  }
`
