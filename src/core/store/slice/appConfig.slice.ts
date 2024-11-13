import { AppConfigStoreInterface } from '@/@types/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AppConfigStoreInterface = {
    darkMode: false
}

/**
 * APPLICATION SETTING CONFIG
 */
const appConfigSlice = createSlice({
    initialState,
    name: 'appConfig',
    reducers: {
        toggleDarkMode(state, action) {
            state.darkMode = action.payload
        }
    }
})

export default appConfigSlice
