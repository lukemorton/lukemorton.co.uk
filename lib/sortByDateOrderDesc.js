import fs from 'fs'

export default function sortByDateOrderDesc (sortable) {
  return sortable.sort().reverse()
}
