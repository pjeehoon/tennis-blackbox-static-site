# Tennis Blackbox Static Site

## 프로젝트 개요
- 워드프레스 기반 사이트를 정적 사이트로 변환하여 Cloudflare Pages 등에서 배포
- 깃허브에 커밋 → Cloudflare가 변경 감지 후 자동 배포

## 로컬 테스트 방법

정적 사이트 특성상, 단순히 `index.html` 파일을 더블클릭해서 여는 방식은 실제 서비스와 다르게 보일 수 있습니다. 반드시 **정적 웹 서버**를 사용해 테스트하세요.

### Python 내장 서버 사용 (추천)

1. 터미널에서 프로젝트 폴더로 이동
2. 아래 명령어 실행
   ```sh
   python3 -m http.server 8080
   ```
   또는
   ```sh
   python -m http.server 8080
   ```
3. 브라우저에서 [http://localhost:8080](http://localhost:8080) 접속

### Node.js 기반 서버 사용 (선택)

- `npx serve` 또는 `npx http-server` 등도 사용 가능

### 주의사항
- 정적 서버를 사용해야 CSS, JS, 이미지 등 리소스가 올바르게 로드됩니다.
- Cloudflare Pages 등 실제 배포 환경과 거의 동일하게 확인할 수 있습니다.

## SEO(검색엔진 최적화) 안내

이 프로젝트는 검색엔진 최적화를 위해 아래와 같은 파일을 반드시 포함해야 합니다.

### 사이트맵 파일
- `sitemaps.xml` : 전체 사이트맵 인덱스
- `category-sitemap1.xml` : 카테고리별 페이지 목록
- `page-sitemap1.xml` : 일반 페이지 목록
- `post-sitemap1.xml` : 포스트(글) 목록
- `post_tag-sitemap1.xml` : 태그별 페이지 목록
- `sitemaps_xsl.xsl` : 사이트맵 XML을 사람이 보기 좋게 스타일링(선택)

**이 파일들은 구글, 네이버 등 검색엔진이 사이트 구조를 파악하는 데 필수적입니다.**

### robots.txt 활용
- 사이트 루트에 `robots.txt` 파일을 두고, 아래와 같이 사이트맵 경로를 명시하면 검색엔진이 더 빠르고 정확하게 사이트를 인식합니다.

```
User-agent: *
Allow: /
Sitemap: https://tennisblackbox.net/sitemaps.xml
```

### 주의사항
- 워드프레스에서 정적 사이트로 변환할 때마다, 최신 사이트맵 파일이 포함되어야 합니다.
- 사이트맵 파일이 없으면 검색엔진 노출이 제한될 수 있습니다.

## 기타 참고
- 워드프레스의 동적 기능(댓글, 로그인 등)은 정적 사이트에선 동작하지 않음 