---
layout: manual
title: (known issue) HttpRequestException
---

### #1
```
System.Net.Http.HttpRequestException: The SSL connection could not be established, see inner exception.
```
윈도우 업데이트를 하지 않았던 경우. 연결 가능한 TLS 버전이 너무 낮아 서버에 접속을 할 수 없었다. 윈도우 업데이트로 해결.

### #2
```
System.Net.Http.HttpRequestException: The SSL connection could not be established, see inner exception.
 ---> System.IO.IOException:  Received an unexpected EOF or 0 bytes from the transport stream.
```
학교 와이파이를 사용중인 환경에서 발생하였던 오류. 학교에서 게임 서버를 차단하여 게임 파일을 다운로드 할 수 없었다. 

### #3
패치 화이트리스트 기능을 사용하면서, `errorContext: patch` 이고, `errorLog` 가 아래와 같은 상황:
```
System.Net.Http.HttpRequestException: Response status code does not indicate success: 403 (Forbidden).
```
화이트리스트 기능에서 패치를 차단한 경우다. 런처 서버에서 `common.php ` 파일 설정을 확인.


### InnerException 확인하기

오류 로그 두번째 줄에 ---> 으로 시작하는 부분이 InnerException 이다. HttpRequestException 의 InnerException 은 대부분 SocketException 이며, 자세한 정보는 [SocketException]({{ '/manual_posts/known_issue_SocketException' | relative_url }}) 에서 확인 가능