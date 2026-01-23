# repo-downloader
사내에서 개발 완료하여 배포하는 프로젝트 zip 파일 다운로드 사이트

## 📋 소개

GitHub Pages를 통해 ZIP 파일을 다운로드할 수 있는 정적 웹사이트입니다.
사내에서 개발된 프로젝트 소스를 압축하여 배포할 수 있습니다.

## 🚀 기능

- ✅ ZIP 파일 다운로드 기능
- ✅ 파일별 제목과 설명 관리
- ✅ 반응형 웹 디자인 (모바일 지원)
- ✅ 간단한 JSON 기반 파일 관리
- ✅ 로그인 없이 즉시 접근 가능

## 📁 프로젝트 구조

```
repo-downloader/
├── index.html          # 메인 HTML 페이지
├── style.css           # 스타일시트
├── app.js              # JavaScript 로직
├── files.json          # 파일 목록 설정
└── downloads/          # ZIP 파일 저장 디렉토리
    └── *.zip          # 다운로드할 ZIP 파일들
```

## 🔧 파일 추가/수정 방법

### 1. ZIP 파일 추가

1. 다운로드할 ZIP 파일을 `downloads/` 디렉토리에 추가합니다.
2. `files.json` 파일을 수정하여 새 파일 정보를 추가합니다.

### 2. files.json 수정 예시

```json
{
  "files": [
    {
      "title": "프로젝트 제목",
      "description": "프로젝트에 대한 설명을 입력하세요.",
      "filename": "project-name.zip",
      "path": "downloads/project-name.zip"
    },
    {
      "title": "다른 프로젝트",
      "description": "두 번째 프로젝트 설명",
      "filename": "another-project.zip",
      "path": "downloads/another-project.zip"
    }
  ]
}
```

### 3. 파일 삭제

1. `downloads/` 디렉토리에서 해당 ZIP 파일을 삭제합니다.
2. `files.json`에서 해당 파일 정보를 제거합니다.

## 🌐 GitHub Pages 배포

### 배포 설정

1. GitHub 저장소 Settings로 이동
2. 왼쪽 메뉴에서 "Pages" 선택
3. Source를 "Deploy from a branch"로 설정
4. Branch를 `main` (또는 `master`) 선택
5. 폴더는 `/ (root)` 선택
6. Save 클릭

### 접속 URL

배포 후 다음 URL로 접속 가능합니다:
```
https://[사용자명 또는 조직명].github.io/repo-downloader/
```

## 💻 로컬 테스트

로컬에서 테스트하려면 웹 서버를 실행해야 합니다 (CORS 제약 때문):

```bash
# Python 3를 사용하는 경우
python3 -m http.server 8080

# Node.js를 사용하는 경우
npx http-server

# 그 후 브라우저에서 접속
# http://localhost:8080
```

## 📝 주의사항

- ZIP 파일 크기는 GitHub의 파일 크기 제한(100MB)을 고려해야 합니다.
- 대용량 파일은 Git LFS 사용을 권장합니다.
- `files.json`의 JSON 형식이 올바른지 확인하세요 (쉼표, 중괄호 등).

## 🎨 커스터마이징

### 색상 변경
`style.css` 파일에서 다음 부분을 수정:
- 그라데이션 색상: `#667eea`, `#764ba2`
- 텍스트 색상: `#333`, `#666`

### 제목 변경
`index.html` 파일의 `<h1>` 태그 내용을 수정

## 📄 라이선스

사내 프로젝트 배포용으로 자유롭게 사용 가능합니다.
