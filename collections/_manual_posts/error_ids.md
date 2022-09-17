---
layout: manual
title: errorId 목록
---

errorId 는 오류 보고서에 기록되어 오류의 종류를 나타냅니다. 발생한 오류가 어떤 종류의 오류인지 errorId 를 통해 분류할 수 있습니다. 

### WebView2InstallError_FileNotFoundException

WebView2 가 정상적으로 설치되지 않음

[Link](/error_posts/E_A_01)

### WebView2InstallError

WebView2 가 정상적으로 설치되지 않음

[Link](/error_posts/E_A_01)

### AuthYouException_serverrefuse

보안런처 서버에서 접속을 차단한 경우. 서버에서 허가하지 않은 모드파일이나 리소스팩을 적용하였을 때 발생함

### AuthYouException

보안런처 관련 오류. InnerException 참고

### Exception_unknown

등록되지 않은 오류. InnerException 참고

### HttpRequestException

서버와의 통신 중에 발생한 오류. InnerException 참고.

[Link](/manual_posts/known_issue_HttpRequestException)

### IOException_used_by_another_process

접근하려는 파일이 다른 프로세스에 의해 사용중인 경우.

### IOException_full_disk

디스크 용량이 모자람

### IOException_unknown

IO 작업 실패. errorLog와 InnerException 참고

### MicrosoftOAuthException

마이크로소프트 OAuth 과정에서 문제가 발생

### MinecraftAuthException_nogame

게임을 구매하지 않은 계정으로 로그인을 시도함

### MinecraftAuthException_noprofile

게임을 구매하지 않은 계정으로 로그인을 시도함

### MinecraftAuthException_NOT_FOUND

게임을 구매하지 않은 계정으로 로그인을 시도함

### MinecraftAuthException_unknown

마이크로소프트 계정으로 로그인을 하는 과정에서 문제가 발생함. 마인크래프트 로그인 서버와 통신하는 과정에서 문제가 발생함. 

보통 InnerException 에 더 자세한 원인이 있음

### MinecraftCrashLog_unknown

마인크래프트 크래시 감지

### MinecraftCrashLog_02

마인크래프트 크래시 감지

[Link](/error_posts/E_C_02)

### MinecraftCrashLog_03

마인크래프트 크래시 감지

[Link](/error_posts/E_C_03)

### MinecraftCrashLog_04

마인크래프트 크래시 감지

[Link](/error_posts/E_C_04)

### MinecraftCrashLog_05

마인크래프트 크래시 감지

[Link](/error_posts/E_C_05)

### MojangException

모장 서버와 통신하는 과정에서 문제 발생. `MojangAPI` 에서 발생한 예외를 뜻함.

`MojangAPI`는 스킨 변경, 닉네임 변경 등등 모장에서 제공하는 API를 구현한 라이브러리임.

현재 `MojangAPI`를 이용한 기능은 '스킨 바꾸기'만 있기 때문에 이 오류가 발생했다는 것은 '스킨 바꾸기'기능을 수행하는 중에 문제가 발생했다는 것을 의미함.

### WebView2RuntimeNotFoundException

WebView2 가 정상적으로 설치되지 않음

[Link](/error_posts/E_A_01)

### Win32Exception

-

### XboxAuthException_noprofile

엑스박스 계정이 존재하지 않음

[Link](/error_posts/E_B_03)

### XboxAuthException_countryban

로그인 할 수 없는 국가의 계정

### XboxAuthException_child

나이 인증이 필요한 엑스박스 계정

[Link](/error_posts/E_B_04)

### XboxAuthException_familychild

가족 등록이 필요한 엑스박스 계정

[Link](/error_posts/E_B_05)

### XboxAuthException_forbidden

정확한 원인을 알 수 없는 오류. SisuAuth 과정에서 문제가 발생함.

이 오류가 발생하면 자동으로 MsalClient 로그인 방식으로 전환함으로써 오류를 우회함. 

런처 설정에서 `MsalClient 로그인` 을 체크하면 됨.

### XboxAuthException_unknown

엑스박스 로그인 과정에서 문제가 발생. errorLog와 InnerException을 참고

