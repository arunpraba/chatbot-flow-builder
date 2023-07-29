import PropTypes from 'prop-types'
import { BsArrowLeft } from 'react-icons/bs'
import { SettingsPanelHeader } from './styled'

export const SettingsPanel = ({ onChange, onBack, selectedNode }) => {
  return (
    <div>
      <SettingsPanelHeader>
        <button type="button" onClick={onBack}>
          <BsArrowLeft />
        </button>
        <span>Message</span>
      </SettingsPanelHeader>
      <input
        type="text"
        defaultValue={selectedNode.label}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

SettingsPanel.propTypes = {
  onChange: PropTypes.func,
  onBack: PropTypes.func,
  selectedNode: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
  }),
}
