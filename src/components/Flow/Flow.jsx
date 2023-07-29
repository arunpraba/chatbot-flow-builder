import { useState, useRef, useCallback } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from 'reactflow'
import { AppContainer, Header, MainContainer, FlowContainer } from './styled'
import Panel from '../Panel'

const initialNodes = []

const defaultViewport = {
  zoom: 0.5,
  x: 0,
  y: 0,
}

let id = 0
const getId = () => `dndnode_${id++}`

export const Flow = () => {
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData('application/reactflow')
      console.log({ type })

      if (!type) return

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes]
  )

  return (
    <AppContainer>
      <Header>
        <button>Save changes</button>
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
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              defaultViewport={defaultViewport}
            >
              <Background variant={BackgroundVariant.Dots} />
              <Controls />
            </ReactFlow>
          </FlowContainer>
          <Panel />
        </ReactFlowProvider>
      </MainContainer>
    </AppContainer>
  )
}
