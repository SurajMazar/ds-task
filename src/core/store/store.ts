import { configureStore } from '@reduxjs/toolkit'
import AppConfigSlice from '@/core/store/slice/appConfig.slice'

/**
 * STORE INITIALIZATION
 */
const store = configureStore({
    reducer: {
        appConfig: AppConfigSlice.reducer
    }
})

export default store
