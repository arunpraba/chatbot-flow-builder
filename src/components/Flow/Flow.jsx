import {
  AppContainer,
  FlowContainer,
  Header,
  MainContainer,
  SideBarContainer,
} from './styled'

export function Flow() {
  return (
    <AppContainer>
      <Header>
        <button>Save changes</button>
      </Header>
      <MainContainer>
        <FlowContainer>Flow</FlowContainer>
        <SideBarContainer>Side Bar</SideBarContainer>
      </MainContainer>
    </AppContainer>
  )
}
