import { create } from 'zustand'

interface SliderState {
  slide_in_view: number
  setSlideInView: (new_slide_in_view: number) => void
}

export const useSliderStore = create<SliderState>((set) => ({
  slide_in_view: 0,
  setSlideInView: (new_slide_in_view: number) => set({ slide_in_view: new_slide_in_view })
}))