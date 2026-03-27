export const resumeConfig = {
  // Using a direct download formatted link for OneDrive
  resumeUrl: "https://1drv.ms/b/c/12ec0c86c07230f5/IQDhIdGzZbkmQYzlVfMz9tpDASnzBC92N4IyKaQIpvqVvTA",
  fileName: "Siyabonga_Mdaweni_Resume.pdf",
  buttonText: "Download Resume"
};

/**
 * Formats the URL to try and force a download behavior depending on the provider
 */
const getDirectDownloadUrl = (url: string): string => {
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com')) {
    // If it's a short link, it might need the download parameter
    const separator = url.includes('?') ? '&' : '?';
    // download=1 forces OneDrive to try and serve the file directly
    return `${url}${separator}download=1`;
  }
  return url;
};

/**
 * Triggers the browser's download manager
 */
export const downloadResume = async () => {
  const finalUrl = getDirectDownloadUrl(resumeConfig.resumeUrl);
  
  // Create a hidden link and click it
  const link = document.createElement('a');
  link.href = finalUrl;
  link.setAttribute('download', resumeConfig.fileName);
  
  // Some browsers need the link to be in the DOM
  link.style.display = 'none';
  document.body.appendChild(link);
  
  // Use a targeted click
  link.click();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(link);
  }, 200);
};