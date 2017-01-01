import fs from 'fs'

export default function thoughtsInDateOrderDesc({ thoughts, limit }) {
  if (limit) {
    return thoughts.sort().reverse().slice(0, limit)
  } else {
    return thoughts.sort().reverse()
  }
}
