import { DocumentModelInterface } from '@/@types/model/document.model'
import { PageModelInterface } from '@/@types/model/page.model'
import {SectionChildInterface, SectionModelInterface} from '@/@types/model/section.model'
import { BboxesModelInterface } from '@/@types/model/bbox.model'
import React from 'react'

export interface DocumentViewerContextInterface {
    loadingDocuments: boolean
    loadingBBoxes: boolean
    loadingSections: boolean
    bboxes?: BboxesModelInterface
    documents: Array<DocumentModelInterface>
    pages: Array<PageModelInterface>
    currentPage: number | null
    sections: Array<SectionModelInterface>
    zoom: number
    zoomFactor:number
    pageSectionChildren:Array<SectionChildInterface>
    deletePageSectionChildren: (deletedItem: SectionChildInterface, key: keyof SectionChildInterface) => void
    setZoom: React.Dispatch<React.SetStateAction<number>>
    showBbox:boolean
    setShowBbox:React.Dispatch<React.SetStateAction<boolean>>
    selectedSections:Array<number>
    setSelectedSections:React.Dispatch<React.SetStateAction<Array<number>>>
    hoverActiveSection?:number
    setHoverActiveSection:React.Dispatch<React.SetStateAction<number|undefined>>
}
