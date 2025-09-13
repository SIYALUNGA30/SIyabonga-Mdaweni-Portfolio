export const resumeConfig = {
  resumeUrl: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/siyabonga_mdaweni_capaciti_org_za/Edgo4pB1WKdNn2S8AYm3Qt4BcTRf6MeDk5nT-6aezIyg7g?e=MkhEcP",
  fileName: "Siyabonga_Mdaweni_Resume.pdf",
  buttonText: "Download Resume"
};

const getDirectDownloadUrl = (url: string): string => {
  if (url.includes('drive.google.com')) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
  }
  if (url.includes('dropbox.com')) {
    return url.replace('?dl=0', '?dl=1').replace('?dl=', '?dl=1');
  }
  if (url.includes('sharepoint.com') && url.includes(':b:')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}download=1`;
  }
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com')) {
    return url.replace('/view', '/download').replace('?', '&').replace('&', '?download=1&');
  }
  return url;
};

export const downloadResume = async () => {
  if (resumeConfig.resumeUrl === "https://your-resume-link-here.pdf") {
    alert("Please update the resume URL in /components/ResumeConfig.ts");
    return;
  }
  
  try {
    const directDownloadUrl = getDirectDownloadUrl(resumeConfig.resumeUrl);
    
    try {
      const response = await fetch(directDownloadUrl, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = resumeConfig.fileName;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
        return;
      }
    } catch (fetchError) {
      console.log('Fetch method failed, trying alternative method...');
    }
    
    const link = document.createElement('a');
    link.href = directDownloadUrl;
    link.download = resumeConfig.fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Download failed:', error);
    
    window.open(resumeConfig.resumeUrl, '_blank', 'noopener,noreferrer');
    
    alert('Download initiated. If the file opens in a new tab instead of downloading, please right-click the file and select "Save As" to download it.');
  }
};
