import { create } from "zustand";

interface useLanguageStore {
    lang:string,
    setSpanish:()=>void,
    setEnglish:()=>void
}

const useLanguage = create<useLanguageStore>((set)=>({
    lang:"Spanish",
    setSpanish:()=>set({lang:"Spanish"}),
    setEnglish:()=>set({lang:"English"})
}))

export default useLanguage