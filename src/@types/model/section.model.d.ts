export interface SectionModelInterface {
    children: Array<SectionChildInterface>
    id: number
    title: string
    type: string
}

export interface SectionChildInterface {
    acc: number
    content: {
        confidence: number
        is_valid_format: true
        orig_value: string
        page: number
        position: [number, number, number, number]
        position_label?: []
        review_required: boolean
        validation_source: string
        value: string
        type?:string
    }
    doc_id: string
    format: string
    format_message: string
    id: number
    id_auto_extract: number
    id_auto_extract_label: string
    ignore: boolean
    label: string
    low_confidence: boolean
    no_items_row: number
    order: number
    org_id: string
    p_title: string
    p_type: string
    parent_id: number
    time_spent: number
    type: string
    user_id: string
}
