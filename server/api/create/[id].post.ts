import type { File, ViewNode, TextNode, Node } from '../../../composables/editor'
import type { CElement, PropsWithChildren } from 'react'
import { createElement as e } from 'react'
import ReactPDF, { View, Text, Document, Page, renderToStream } from '@react-pdf/renderer'

const renderChildren = (i: Node) => {
  if(i.type === 'text') return renderText(i)
  if(i.type === 'view') return renderView(i)
}

const renderText = (props: TextNode) => {
  return e(
    Text,
    { style: props.style, key: props.id },
    props.children
  )
}

const renderView = (props: ViewNode): CElement<PropsWithChildren<ReactPDF.ViewProps>, ReactPDF.View> => {
  return e(
    View, 
    { style: props.style, key: props.id }, 
    props.children?.map(renderChildren)
  )
}


export default defineEventHandler(async (event) => {

  const { schema } = await readBody<{ schema: File }>(event)

  const doc = () => e(
    Document, 
    {}, 
    schema.pages.map((page) => {
      return e(Page, { key: page.id, size: 'A4'}, page.children?.map(renderChildren))
    })
  )

  const stream = await renderToStream(doc())
  setResponseHeader(event, 'Content-Type', 'application/pdf')
  //@ts-ignore
  return sendStream(event, stream)
})
