import { BsChatText } from 'react-icons/bs'
import { PanelContainer, TextContainer } from './styled'

export const Panel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <PanelContainer>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'custom')}
        draggable
      >
        <TextContainer>
          <BsChatText />
          <span>Message</span>
        </TextContainer>
      </div>
    </PanelContainer>
  )
}
