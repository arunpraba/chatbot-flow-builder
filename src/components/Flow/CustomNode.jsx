import PropTypes from 'prop-types'
import { Handle, Position } from 'reactflow'
import { BsChatText, BsWhatsapp } from 'react-icons/bs'
import { styled } from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: white;
`
const CardHeader = styled.div`
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

const CardBody = styled.div`
  padding: 0.5rem;
  flex: 1;
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`

export const CustomNode = ({ data }) => {
  return (
    <>
      <Card>
        <CardHeader bgColor={data.bgColor}>
          <BsChatText />
          <span>Send Message</span>
          <BsWhatsapp className="whatsapp-icon" />
        </CardHeader>
        <CardBody>{data.label}</CardBody>
      </Card>
      <Handle type="target" position={Position.Left} isConnectable />
      <Handle type="source" position={Position.Right} isConnectable />
    </>
  )
}

CustomNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
  }).isRequired,
}
