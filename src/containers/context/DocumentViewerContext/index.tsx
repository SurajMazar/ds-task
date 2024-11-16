'use client'
import React, {createContext, PropsWithChildren, useEffect, useMemo, useState} from 'react'
import {DocumentViewerContextInterface} from '@/@types/container/context'
import {DocumentModelInterface} from '@/@types/model/document.model'
import {PageModelInterface} from '@/@types/model/page.model'
import {SectionChildInterface, SectionModelInterface} from '@/@types/model/section.model'
import {BboxesModelInterface} from '@/@types/model/bbox.model'
import {useQuery} from 'react-query'
import DataService from '@/core/service/data.service'
import useArrayObj from "@/core/hooks/useArrayObj";

export const DocumentViewerContext =
    createContext<DocumentViewerContextInterface>(
        {} as DocumentViewerContextInterface
    )

export const DocumentViewerContextWrapper: React.FC<PropsWithChildren> = ({
                                                                              children
                                                                          }) => {
    /**
     * COMPONENT STATE
     */
    const [documents, setDocuments] = useState<Array<DocumentModelInterface>>(
        []
    )
    const [pages, setPages] = useState<Array<PageModelInterface>>([])
    const [bboxes, setBboxes] = useState<BboxesModelInterface | undefined>()
    const [sections, setSection] = useState<Array<SectionModelInterface>>([])
    const [currentPage, setCurrentPage] = useState<number | null>(null)
    const [zoom, setZoom] = useState(75)
    const [showBbox, setShowBbox] = useState(false)
    const [selectedSections, setSelectedSections] = useState<Array<string>>([])
    const [hoverActiveSection, setHoverActiveSection] = useState<string>()


    /**
     * HOOKS
     */
    const {data: psc, setData, deleteItem} = useArrayObj<SectionChildInterface>([])


    /**
     * FETCHING THE NECESSARY DATA
     */
    const {isLoading: loadingDocuments} = useQuery(
        ['ds-documents'],
        () => {
            return DataService.fetchDocuments()
        },
        {
            onSuccess(data) {
                setDocuments(data?.documents)
                setPages(data?.documents?.[0]?.pages ?? [])
                setCurrentPage(
                    data?.documents?.[0]?.pages?.length > 0 ? 1 : null
                )
            }
        }
    )

    const {isLoading: loadingBBoxes} = useQuery(
        ['ds-bbox'],
        () => {
            return DataService.fetchBboxes()
        },
        {
            onSuccess(data) {
                setBboxes(data?.bboxes)
            }
        }
    )

    const {isLoading: loadingSections} = useQuery(
        ['ds-sections'],
        () => {
            return DataService.fetchSections()
        },
        {
            onSuccess(data) {
                setSection(data?.sections)
            }
        }
    )

    const zoomFactor = useMemo(() => {
        return (zoom - 39) / 100
    }, [zoom])


    /**
     * CURRENT PAGE SECTION
     */
    useEffect(() => {
        const formatted = sections?.reduce((acc, item) => {
            return [
                ...acc,
                ...(item?.children?.filter(child => child.content?.page === currentPage))
            ]
        }, [] as Array<SectionChildInterface>)
        setData(formatted)
    }, [sections, currentPage, setData])


    return (
        <DocumentViewerContext.Provider
            value={{
                loadingDocuments,
                loadingBBoxes,
                loadingSections,
                documents,
                sections,
                pages,
                currentPage,
                bboxes,
                zoom,
                setZoom,
                zoomFactor,
                pageSectionChildren: psc,
                deletePageSectionChildren: deleteItem,
                showBbox,
                setShowBbox,
                selectedSections,
                setSelectedSections,
                hoverActiveSection,
                setHoverActiveSection,
            }}
        >
            {children}
        </DocumentViewerContext.Provider>
    )
}
