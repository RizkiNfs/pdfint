import { nanoid } from 'nanoid'

interface CommonProps {
  style: Record<string, any>
  id:  string
  name?:  string
}

interface ViewNode extends CommonProps {
  type: 'view'
  children?: Node[]
}

interface PageNode extends CommonProps {
  type: 'page'
  children?: Node[]
}

interface TextNode extends CommonProps {
  type: 'text'
  children?: string
}

export type Node = ViewNode | TextNode | PageNode

export interface Page extends CommonProps {
  children?: Node[]
  name?: string
}

export interface File {
  pages: PageNode[],
  id: string
}

export const useFileState = (fileId: string) => useState<File>('current-file', () => ({
  id: fileId,
  pages: [{
    id: nanoid(),
    type: 'page',
    style: { display: 'flex', flexDirection: 'column' },
    children: []
  }]
}))

export const useSelectedNode = () => useState<Node>('selected-node')

export const useFileEditor = (fileId?: string) => {
  const route = useRoute()
  const state = useFileState(fileId || route.query.id as string)
  const selectedNode = useSelectedNode()

  return {
    state,
    selectedNode,
  }
}