// Load and display file list
async function loadFileList() {
    const fileListContainer = document.getElementById('file-list');
    
    try {
        const response = await fetch('files.json');
        
        if (!response.ok) {
            throw new Error('파일 목록을 불러올 수 없습니다.');
        }
        
        const data = await response.json();
        const files = data.files;
        
        if (!files || files.length === 0) {
            fileListContainer.innerHTML = '<div class="empty">다운로드 가능한 파일이 없습니다.</div>';
            return;
        }
        
        // Create file list HTML
        const fileListHTML = files.map(file => `
            <div class="file-item" onclick="downloadFile('${file.filename}')">
                <h2>${escapeHtml(file.title)}</h2>
                <div class="description">${escapeHtml(file.description)}</div>
                <div class="file-info">
                    <span class="filename">${escapeHtml(file.filename)}</span>
                    <a href="${file.path}" class="download-btn" download onclick="event.stopPropagation()">다운로드</a>
                </div>
            </div>
        `).join('');
        
        fileListContainer.innerHTML = fileListHTML;
        
    } catch (error) {
        console.error('Error loading file list:', error);
        fileListContainer.innerHTML = `<div class="error">오류: ${escapeHtml(error.message)}</div>`;
    }
}

// Download file when clicking on file item
function downloadFile(filename) {
    // Find the download link and trigger click
    const link = document.querySelector(`a[download][href*="${filename}"]`);
    if (link) {
        link.click();
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load file list on page load
document.addEventListener('DOMContentLoaded', loadFileList);
