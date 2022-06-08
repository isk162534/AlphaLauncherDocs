---
layout: page
title: 주문 제작
---

## 1. 거래

### 거래 과정​

1. 런처 어떻게 제작할지 상의, 가격 책정
2. 런처 제작, 완성
3. 완성된 런처의 작동 영상 보여드림
4. 제작비 입금
5. 완성된 런처 전송
6. 업데이트 

### 거래 방식​

- 계좌 이체 / 문화상품권
- 문화상품권으로 거래할 시 **수수료 10%** 가 추가로 있습니다. (중고나라에서 문상거래시 보통 10%때감)
- 제작비가 10만원 이상일 때는 **네이버 안전거래** 가 가능합니다.
- 제작비가 10만원 이상일 때는 제작비의 **40%를 선입금** 받습니다. 

### 개발 취소

- 제가 개발 취소하는 경우 : 100% 환불
- 선입금 받고난 후 구매자의 요청으로 개발 취소하는 경우 : 개발 상황에 따라 선입금하신 금액의 50%~100%까지 환불해드릴 수 있습니다. 

*간혹 개발이 완료되었는데 돈이 없다며 개발을 취소하는 경우가 있습니다. 이런 일이 일어나지 않길 바랍니다 ㅠㅠ*

### 개발 기간

개발 기간은 런처마다 모두 다릅니다.

### 제작 완료 후 업데이트

버그 수정, 유지보수는 제작 완료 후 1년간 무료. (+더 늘어날 수 있음)

제작 완료 후 기능 추가/수정은 추가 비용을 지불하셔야 합니다. 

자동패치 기능을 사용하실 경우: 업데이트에 제한이 없으며 서버 비용만 지불하시면 됩니다.

수동패치 기능을 사용하실 경우: 패치파일(모드파일) 업데이트 10회 무료, 그 이후로는 추가비용 있습니다.

## 2. 런처

### 사양

- win32 프로그램
- .NET Core 6.0.0 사용
- WPF 사용

### 오픈소스 라이브러리

- [CmlLib.Core](https://github.com/CmlLib/CmlLib.Core/wiki/Licenses-and-Dependencies)
- [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md)
- [ICSharpCode.SharpZipLib](https://github.com/icsharpcode/SharpZipLib/blob/master/LICENSE.txt)
- [log4net](https://logging.apache.org/log4net/license.html)
- [Microsoft.Web.WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- [SevenZip](https://www.7-zip.org/sdk.html)
- [XboxAuthNet](https://github.com/AlphaBs/XboxAuthNet)

### 요구사양

#### 운영체제 (OS)

- 64-bit Windows 7
- 64-bit Windows 10
- 64-bit Windows 11

(윈도우 사용자의 97.7%가 위 OS를 이용하고 있습니다. [2019년 statcounter 조사결과](https://gs.statcounter.com/windows-version-market-share/desktop/south-korea))

(32비트에서도 작동은 하지만 고사양 서버의 경우 이용이 어렵습니다)

(다른 OS 에서는 정상작동을 보장하지 않습니다. 맥에서 사용 불가)

#### 실행하기 위해 설치되있어야 하는 소프트웨어 :

- .NET 6.0 Desktop Runtime (간편설치기에서 자동으로 설치합니다)
- Microsoft WebView2 Runtime (간편설치기에서 자동으로 설치합니다) 

### 사용 권한과 저작권

[License]({{site.url}}/pages/License)

[OpenSourceLicense]({{site.url}}/pages/OpenSourceLicense)

## 기능

### 필수 기능

모든 런처에 기본적으로 들어가있는 기능입니다. 요청하지 않아도 기본으로 들어가는 기능들입니다.

- 모장 계정 정품 로그인, 자동 로그인 (필수, 자동 로그인 해제 불가)

- 마인크래프트 전용 자바 설치

- 마인크래프트 다운로드/실행 (모든 버전 실행 가능)

- 별도 폴더에 게임 다운로드 (%appdata%/런처이름/game)

- 최대 램 설정 (Xmx)

- 자바 초기화, 게임 초기화, 자바 설치 확인, 웹뷰 설치 확인

- 라이센스 표시

- 마이크로소프트 계정으로 로그인

- 런처 간편설치기

### 기본 기능

추가비용 없이 작업 가능한 기능입니다.

- 자동패치 / 수동패치 ([자세한 설명](https://cafe.naver.com/alphacml/35))

- 서버 바로 접속 (게임 실행 후 설정한 서버로 바로 접속합니다) (일부 버전에서는 작동하지 않음)

- 링크 바로가기 버튼 (디스코드 버튼, 홈페이지 버튼 등등)

### 추가 기능

추가비용이 있습니다.

- 네이버 카페 특정 게시판의 글 목록을 불러와 표시 (공지사항 표시): 0.5만원

- 스킨 표시

- 서버 상태 표시 (서버 ON/OFF, 접속한 플레이어 수)

- 스킨 바꾸기: 1만원

- 게임 설정 바꾸기 (리소스팩 적용, 언어 설정 등등): 바꿀 설정, 동작 방식에 따라 가격 다름

- 보안런처 (서버에서 설정한 모드로만 서버 접속 허용. 유저가 직접 모드 추가/수정/삭제할 시 서버 접속 차단): 3만원

이외 필요한 기능이 있다면 말해주세요. 주문 제작인 만큼 원하시는 기능을 자유롭게 알려주시면 됩니다.

## 디자인

런처 화면을 어떻게 만들지 직접 디자인해주셔야합니다.

우마공에 런처 디자인을 해주는 디자이너분들이 있으니 그런분들에게 외주해도 좋습니다.

디자인 크기, 사진 크기에 제한은 없습니다. 디자인 크기가 곧 런처 창의 크기가 됩니다. 

추천 사이즈 : 1024x576, 1280x720

참고 디자인 모음

[https://cafe.naver.com/alphacml/120](https://cafe.naver.com/alphacml/120)

### 기본 디자인

저렴한 기본 디자인입니다. 직접 바꿀 수 있는 디자인에 제한이 있습니다.

- 런처 배경사진만 사진 파일로 보내주시면 됩니다.
- UI 요소(버튼, 입력 칸, 글씨 등등) 의 위치, 크기, 글꼴, 색상 정도만 바꿀 수 있습니다. 모양을 바꾸는 건 안됩니다.
- 창 크기 조절 불가능

### 커스텀 디자인

디자인에 제한이 없습니다. 어떤 디자인이든 원하시는 대로 작업 가능합니다. (기술적 한계가 있는 경우 제외)

UI 요소(버튼, 입력 칸, 글씨 등등)의 모양, 위치, 등등 모든 것을 원하는 대로 디자인 가능합니다. 

아래 기능 사용시 제작 기간/비용이 늘어날 수 있습니다:   

- 애니메이션 효과
- 창 크기 조절  

​
## 정보

네이버 카페: 제작한 런처들을 볼 수 있습니다.   
[https://cafe.naver.com/alphabcml](https://cafe.naver.com/alphabcml)

자주 뜨는 오류 해결방법:   
[https://cafe.naver.com/alphacml/3](https://cafe.naver.com/alphacml/3)

