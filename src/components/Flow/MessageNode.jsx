import PropTypes from 'prop-types'
import { Handle, Position } from 'reactflow'
import { BsChatText, BsWhatsapp } from 'react-icons/bs'
import { Card, CardHeader, CardBody } from './styled'

export const MessageNode = ({ data }) => {
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

MessageNode.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
  }).isRequired,
}
