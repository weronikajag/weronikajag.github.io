// Simple client-side include loader. Places the contents of includes/header.html
// and includes/footer.html into elements with IDs 'site-header' and 'site-footer'.
async function loadHTMLContent(id, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
    const responseHtml = await response.text();
    const element = document.getElementById(id);
    if (element) element.innerHTML = responseHtml;
  } catch (err) {
    // Keep failure silent for users; log for debugging.
    console.error('Include failed:', url, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Use relative paths so the site works as a project site under
  // https://username.github.io/repo/ as well as a user site.
  loadHTMLContent('site-header', 'includes/header.html');
  loadHTMLContent('site-footer', 'includes/footer.html');
});
