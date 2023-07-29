export const saveAsJSON = (data, fileName) => {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = `${fileName}.json`
  link.href = url
  link.click()
  URL.revokeObjectURL(url)
}
