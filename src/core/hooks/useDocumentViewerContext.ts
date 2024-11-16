import { DocumentViewerContext } from '@/containers/context/DocumentViewerContext'
import { useContext } from 'react'

const useDocumentViewerContext = () => {
    return useContext(DocumentViewerContext)
}

export default useDocumentViewerContext
