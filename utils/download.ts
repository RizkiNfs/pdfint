
export const download = (obj: Blob | MediaSource, filename: string) => {

  if(typeof window === 'undefined'){
    return
  }

  const url = window.URL.createObjectURL(obj)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  a.remove()

}