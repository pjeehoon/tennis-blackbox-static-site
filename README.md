# Tennis Blackbox Static Site

## 프로젝트 개요
- 워드프레스 기반 사이트를 정적 사이트로 변환하여 Cloudflare Pages 등에서 배포
- 깃허브에 커밋 → Cloudflare가 변경 감지 후 자동 배포

## 로컬 개발 환경에서 사이트 실행하기

정적 HTML 파일을 직접 더블클릭(file://)로 열면 일부 기능이 동작하지 않을 수 있습니다.  
반드시 아래와 같이 로컬 웹서버를 실행한 뒤, http://localhost:8080 등으로 접속하세요.

### 파이썬 내장 서버 사용법

1. 터미널(명령 프롬프트)에서 프로젝트 폴더로 이동
2. 아래 명령어 실행

   ```bash
   python3 -m http.server 8080
   ```

3. 브라우저에서 [http://localhost:8080](http://localhost:8080) 접속

- 8080 대신 3000, 5000 등 원하는 포트로 변경 가능
- 이미 사용 중인 포트가 있으면 다른 번호를 사용하세요.

### Node.js가 있다면

```bash
npm install -g serve
serve -l 8080
```

---

**file:///로 직접 열지 말고, 반드시 http://localhost:xxxx 형태로 접속해야 실제 배포 환경과 동일하게 테스트할 수 있습니다.**

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