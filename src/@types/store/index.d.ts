import store from "@/core/store/store";

export interface AppConfigStoreInterface {
    darkMode: boolean
}

export type RootStateInterface = ReturnType<typeof store.getState>
