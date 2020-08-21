const download = async (fileUrl, method) => {
  const response = await fetch(fileUrl, { method });
  if (response.status >= 300) throw new Error(response.statusText);
  const blob = await response.blob();
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = fileUrl.substr(fileUrl.lastIndexOf('/') + 1); // Needed to get file name from url
  document.body.appendChild(a);
  a.click();
  a.remove();
}

const downloadUniqUrl = async (url) => {
  const downloadedUrls = JSON.parse(window.localStorage.getItem('downloadedUrls')) || [];
  if (!downloadedUrls.includes(url)) {
    try {
      await download(url, 'GET');
      window.localStorage.setItem('downloadedUrls', JSON.stringify([...downloadedUrls, url]))
    } catch (e) {
      alert(e);
    }
  }
}

downloadUniqUrl('https://i.imgur.com/4SdB78W.gif');



