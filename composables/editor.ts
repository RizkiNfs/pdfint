import type { Style } from '@react-pdf/types'
import { nanoid } from 'nanoid'

interface CommonProps {
  style: Style
  id:  string
  name?:  string
}

export interface ViewNode extends CommonProps {
  type: 'view'
  children?: Node[]
}

export interface PageNode extends CommonProps {
  type: 'page'
  children?: Node[]
}

export interface TextNode extends CommonProps {
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

const initialStyle = {
  common: {
    // paddingTop: '0px',
    // paddingRight: '0px',
    // paddingBottom: '0px',
    // paddingLeft: '0px',
  
    // marginTop: '0px',
    // marginRight: '0px',
    // marginBottom: '0px',
    // marginLeft: '0px',
  },
  view: {
    display: 'flex', 
    flexDirection: 'column'
  },
  text: {
    fontSize: '16px',
    lineHeight: 1.5,
    // color: 'currentColor'
    // letterSpacing: '0px',
    // textAlign: 'left',

    // textDecoration: 'none',
    // textDecorationStyle: ''
  }
  
} satisfies Record<'common'|'view'|'text',Style>

export const useFileState = (fileId: string) => useState<File>('current-file', () => ({
  id: fileId,
  pages: [{
    id: nanoid(),
    type: 'page',
    style: { ...initialStyle.view, ...initialStyle.common },
    children: []
  }]
}))

export const useSelectedNode = () => useState<Node>('selected-node')

export const useFileEditor = (fileId?: string) => {
  const route = useRoute()
  const state = useFileState(fileId || route.params.id as string)
  const selectedNode = useSelectedNode()

  return {
    state,
    selectedNode,
    initialStyle
  }
}