import IconNavMovies from '@/components/icons/IconNavMovies.vue'
import IconNavTVSeries from '@/components/icons/IconNavTVSeries.vue'
import { h, type defineComponent } from 'vue'
type Category = 'MOVIE' | 'TVSERIES'
const IconRegistry: Record<Category, ReturnType<typeof defineComponent>> = {
  MOVIE: h(IconNavMovies),
  TVSERIES: h(IconNavTVSeries)
}

export function getIcon(category: Category) {
  return IconRegistry[category] || null
}
