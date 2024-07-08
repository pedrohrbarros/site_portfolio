import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'
import { ReactNode, useCallback, useEffect } from "react"
import { EmblaCarouselType } from 'embla-carousel'
import { useSliderStore } from "@/hooks/slider"

export default function Carousel({ children }: { children: ReactNode[] }	) {
  const [embla_ref, emblaAPI] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const slider_store = useSliderStore((state) => state)

  const setSlider = useCallback((emblaAPI: EmblaCarouselType) => {
    if (emblaAPI.slidesInView()[0] === 0 && emblaAPI.slidesInView()[1] === 2) {
      slider_store.setSlideInView(0)
    } else {
      slider_store.setSlideInView(emblaAPI.slidesInView()[emblaAPI.slidesInView().length - 1])
    }
  }, [slider_store])

  useEffect(() => {
    if (emblaAPI) emblaAPI.on('slidesInView', setSlider)
  }, [emblaAPI, setSlider])

  return (
    <div className="w-full h-full overflow-hidden" ref={embla_ref}>
      <div className="flex">
        {children.map((child: ReactNode, index: number) => (
          <div className="w-full h-full flex-[0_0_100%] min-w-0" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}