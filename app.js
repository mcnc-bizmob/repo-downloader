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
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty';
            emptyDiv.textContent = '다운로드 가능한 파일이 없습니다.';
            fileListContainer.textContent = '';
            fileListContainer.appendChild(emptyDiv);
            return;
        }
        
        // Clear container
        fileListContainer.textContent = '';
        
        // Create file list elements
        files.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.dataset.index = index;
            
            const title = document.createElement('h2');
            title.textContent = file.title;
            
            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = file.description;
            
            const fileInfo = document.createElement('div');
            fileInfo.className = 'file-info';
            
            const filename = document.createElement('span');
            filename.className = 'filename';
            filename.textContent = file.filename;
            
            const downloadLink = document.createElement('a');
            downloadLink.href = file.path;
            downloadLink.className = 'download-btn';
            downloadLink.download = '';
            downloadLink.textContent = '다운로드';
            
            // Prevent propagation when clicking the download button
            downloadLink.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            
            fileInfo.appendChild(filename);
            fileInfo.appendChild(downloadLink);
            
            fileItem.appendChild(title);
            fileItem.appendChild(description);
            fileItem.appendChild(fileInfo);
            
            // Add click handler to file item
            fileItem.addEventListener('click', () => {
                downloadLink.click();
            });
            
            fileListContainer.appendChild(fileItem);
        });
        
    } catch (error) {
        console.error('Error loading file list:', error);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = `오류: ${error.message}`;
        fileListContainer.textContent = '';
        fileListContainer.appendChild(errorDiv);
    }
}

// Load file list on page load
document.addEventListener('DOMContentLoaded', loadFileList);
