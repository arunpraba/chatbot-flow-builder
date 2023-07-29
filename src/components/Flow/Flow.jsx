import { useState, useRef, useCallback } from 'react'
import { nanoid } from 'nanoid'

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from 'reactflow'

import { Panel } from '../Panel'
import { MessageNode } from './MessageNode'

import {
  AppContainer,
  Header,
  MainContainer,
  FlowContainer,
  Alert,
} from './styled'

import { saveAsJSON } from '../../utils'
import { SAVE, DOWNLOAD, FLOW_KEY, DEFAULT_VIEWPORT } from './constants'
import { getInitialValues } from './helper'

const nodeTypes = {
  message: MessageNode,
}

export const Flow = () => {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(() =>
    getInitialValues('nodes')
  )
  const [edges, setEdges, onEdgesChange] = useEdgesState(() =>
    getInitialValues('edges')
  )
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [selectedNode, setSelectedNode] = useState(null)
  const [hasFlowError, setHasFlowError] = useState(false)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const handleDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData('application/reactflow')

      if (!type) return

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = {
        id: nanoid(),
        type,
        position,
        data: { label: `${type} node` },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes]
  )

  const handleNodeLabelChange = (label) => {
    const newNode = { ...selectedNode }
    newNode.data.label = label
    setSelectedNode(newNode)
    const newNodes = [...nodes]
    const nodeIndex = newNodes.findIndex((node) => node.id === selectedNode.id)
    newNodes[nodeIndex] = newNode
  }

  const handleNodeClick = (event, node) => {
    event.preventDefault()
    setSelectedNode(node)
  }

  const handleCloseSettings = () => {
    setSelectedNode(null)
  }

  const handleSaveOrDownload = (type) => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject()
      // I am not quite clear about the #7th requirement of the task, could you please clarify it?
      // Just doing a simple check here, but I think it's not enough

      const isInValid =
        flow.nodes.length === 1 || flow.edges.length !== flow.nodes.length - 1
      setHasFlowError(isInValid)
      setTimeout(() => setHasFlowError(false), 3000)
      if (isInValid) return
      if (type === DOWNLOAD) {
        const flowName = prompt(
          'Please enter the name of the flow',
          'Flow name'
        )
        saveAsJSON(flow, flowName || 'Flow')
      } else if (type === SAVE) {
        localStorage.setItem(FLOW_KEY, JSON.stringify(flow))
      }
    }
  }

  return (
    <AppContainer>
      <Header>
        {hasFlowError && <Alert>Flow is invalid</Alert>}
        <div className="ml-auto btn-group">
          <button
            disabled={nodes.length === 0}
            type="button"
            className="button"
            title={
              nodes.length === 0 ? 'Add nodes to download' : 'Download JSON'
            }
            onClick={() => handleSaveOrDownload(DOWNLOAD)}
          >
            Download JSON
          </button>
          <button
            disabled={nodes.length === 0}
            title={
              nodes.length === 0
                ? 'Add nodes to save'
                : 'Save changes to device'
            }
            type="button"
            className="button"
            onClick={() => handleSaveOrDownload(SAVE)}
          >
            Save changes
          </button>
        </div>
      </Header>
      <MainContainer>
        <ReactFlowProvider>
          <FlowContainer ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              defaultViewport={DEFAULT_VIEWPORT}
              nodeTypes={nodeTypes}
              onNodeClick={handleNodeClick}
              fitView
            >
              <Background variant={BackgroundVariant.Dots} />
              <Controls />
            </ReactFlow>
          </FlowContainer>
          <Panel
            onChange={handleNodeLabelChange}
            onBack={handleCloseSettings}
            selectedNode={
              selectedNode
                ? { label: selectedNode.data.label, id: selectedNode.id }
                : null
            }
          />
        </ReactFlowProvider>
      </MainContainer>
    </AppContainer>
  )
}
