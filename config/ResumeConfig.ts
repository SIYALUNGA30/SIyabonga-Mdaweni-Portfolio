// Resume Configuration
// Update the resumeUrl with your actual resume link
export const resumeConfig = {
  // Replace this URL with your actual resume link
  // Examples:
  // - Google Drive: https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
  // - Dropbox: https://www.dropbox.com/s/YOUR_FILE_ID/resume.pdf?dl=1
  // - Direct link: https://your-website.com/resume.pdf
  resumeUrl: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/siyabonga_mdaweni_capaciti_org_za/Edgo4pB1WKdNn2S8AYm3Qt4BcTRf6MeDk5nT-6aezIyg7g?e=MkhEcP",
  
  // You can also customize the filename for download
  fileName: "Siyabonga_Mdaweni_Resume.pdf",
  
  // Display text for buttons
  buttonText: "Download Resume"
};

// Helper function to convert cloud sharing links to direct download links
const getDirectDownloadUrl = (url: string): string => {
  // Handle Google Drive links
  if (url.includes('drive.google.com')) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
  }
  
  // Handle Dropbox links
  if (url.includes('dropbox.com')) {
    return url.replace('?dl=0', '?dl=1').replace('?dl=', '?dl=1');
  }
  
  // Handle SharePoint links - convert to direct download
  if (url.includes('sharepoint.com') && url.includes(':b:')) {
    // For SharePoint, we'll try to force download by adding download=1 parameter
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}download=1`;
  }
  
  // Handle OneDrive links
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com')) {
    return url.replace('/view', '/download').replace('?', '&').replace('&', '?download=1&');
  }
  
  // For other direct links, return as-is
  return url;
};

// Helper function to handle resume download
export const downloadResume = async () => {
  if (resumeConfig.resumeUrl === "https://your-resume-link-here.pdf") {
    alert("Please update the resume URL in /components/ResumeConfig.ts");
    return;
  }
  
  try {
    const directDownloadUrl = getDirectDownloadUrl(resumeConfig.resumeUrl);
    
    // Method 1: Try fetch and blob download (works for CORS-enabled files)
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
        
        // Clean up the blob URL
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
        return;
      }
    } catch (fetchError) {
      console.log('Fetch method failed, trying alternative method...');
    }
    
    // Method 2: Direct link download (fallback)
    const link = document.createElement('a');
    link.href = directDownloadUrl;
    link.download = resumeConfig.fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    
    // For some browsers, we need to add the link to the DOM
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Fallback: Open in new tab if download fails
    window.open(resumeConfig.resumeUrl, '_blank', 'noopener,noreferrer');
    
    // Show user-friendly message
    alert('Download initiated. If the file opens in a new tab instead of downloading, please right-click the file and select "Save As" to download it.');
  }
};
