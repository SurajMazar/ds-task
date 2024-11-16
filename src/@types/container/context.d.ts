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
    setZoom: React.Dispatch<React.SetStateAction<number>>
}
