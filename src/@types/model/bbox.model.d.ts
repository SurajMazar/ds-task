export interface BboxesModelInterface {
    bboxes: Array<{
        page: number
        rectangle: [number, number, number, number]
    }>
    doc_id: string
}
