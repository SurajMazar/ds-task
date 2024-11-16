import axios from 'axios'
import { BboxesModelInterface } from '@/@types/model/bbox.model'
import { DocumentModelInterface } from '@/@types/model/document.model'
import { SectionModelInterface } from '@/@types/model/section.model'

class DataService {
    /**
     * FETCH BBOXES
     */
    static async fetchBboxes() {
        const response = await axios.get('/api/bboxes')
        return {
            bboxes: response?.data?.data as BboxesModelInterface
        }
    }

    /**
     * FETCH DOCUMENTS
     */
    static async fetchDocuments() {
        const response = await axios.get('/api/documents')
        return {
            documents: response?.data?.data
                ?.documents as Array<DocumentModelInterface>
        }
    }

    /**
     * FETCH SECTIONS
     */
    static async fetchSections() {
        const response = await axios.get('/api/sections')
        return {
            sections: response?.data?.data
                ?.sections as Array<SectionModelInterface>
        }
    }
}

export default DataService
