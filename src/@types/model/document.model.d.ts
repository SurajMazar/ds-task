import { PageModelInterface } from '@/@types/model/page.model'

export interface DocumentModelInterface {
    doc_id: string
    excel_type: boolean
    pages: Array<PageModelInterface>
    status: string
    title: string
    type: string
}
