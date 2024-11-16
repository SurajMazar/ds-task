import { useCallback, useState } from 'react'

/**
 * USE ARRAY HOOK FOR OBJECT
 * @param array
 */
const useArrayObj = <T extends Record<string, any>>(array: Array<T>) => {
    /**
     * DEFAULT DATA STATE
     */
    const [data, setData] = useState<Array<T>>(array)

    /**
     * REPLACE OBJECT FROM ARRAY
     * @param item
     * @param key
     */
    const update = useCallback(
        (item: T, key: keyof T) => {
            /**
             * OLD OBJECT INDEX
             */
            const oldObjectIndex = data.findIndex(
                (dataItem) => item[key] === dataItem[key]
            )

            /**
             * IF IS A VALID INDEX
             */
            if (!isNaN(oldObjectIndex)) {
                const updatedData = [...data]
                updatedData[oldObjectIndex] = item
                setData(updatedData)
            }
        },
        [setData, data]
    )

    /**
     * REPLACE OBJECTS FROM ARRAY
     * @param items
     * @param key
     */
    const replaceObjects = useCallback(
        (items: Array<T>, key: keyof T) => {
            const updatedData = [...data]

            items.forEach((item) => {
                /**
                 * OLD OBJECT INDEX
                 */
                const oldObjectIndex = data.findIndex(
                    (dataItem) => item[key] === dataItem[key]
                )

                /**
                 * IF IS A VALID INDEX
                 */
                if (!isNaN(oldObjectIndex)) {
                    updatedData[oldObjectIndex] = item
                }
            })

            setData(updatedData)
        },
        [setData, data]
    )

    /**
     * APPEND DATA TO THE ARRAY
     * @param item
     */
    const append = useCallback(
        (item: T) => {
            const updated = [...data, item]
            setData(updated)
        },
        [data, setData]
    )

    /**
     * DELETE ITEM FROM ARRAY
     * @param deletedItem
     * @param key
     */
    const deleteItem = useCallback(
        (deletedItem: T, key: keyof T) => {
            const updated = [...data].filter(
                (item) => item[key] !== deletedItem[key]
            )
            setData(updated)
        },
        [data, setData]
    )

    return {
        setData,
        data,
        update,
        replaceObjects,
        deleteItem,
        append
    }
}

export default useArrayObj
