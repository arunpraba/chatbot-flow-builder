import { BsChatText } from 'react-icons/bs'
import { TextContainer } from './styled'

export const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <button
      className="dndnode"
      onDragStart={(event) => onDragStart(event, 'message')}
      draggable
    >
      <TextContainer>
        <BsChatText />
        <span>Message</span>
      </TextContainer>
    </button>
  )
}
