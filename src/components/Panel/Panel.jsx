import PropTypes from 'prop-types'
import { PanelContainer } from './styled'
import { NodesPanel } from './NodesPanel'
import { SettingsPanel } from './SettingsPanel'

export const Panel = ({ onChange, onBack, selectedNode }) => {
  return (
    <PanelContainer>
      {selectedNode ? (
        <SettingsPanel
          onChange={onChange}
          onBack={onBack}
          selectedNode={selectedNode}
        />
      ) : (
        <NodesPanel />
      )}
    </PanelContainer>
  )
}

Panel.propTypes = {
  onChange: PropTypes.func,
  onBack: PropTypes.func,
  selectedNode: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }),
}
