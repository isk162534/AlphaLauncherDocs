---
layout: manual
title: errorContext 목록
---

errorContext 는 오류 보고서에 기록되어 어떤 상황에서 오류가 발생하였는지를 알 수 있습니다. 발생한 오류이 어떤 기능에서 시작되었는 지 알 수 있습니다.

### application

- 프로그램이 시작되는 과정에서 발생함. 보통 런처가 켜지지 않거나 켜지자마자 바로 꺼지는 오류

- 오류가 발생한 정확한 위치를 파악할 수 없음. errorLog 보고 직접 분석해야 함.

### login_mojang

모장 계정으로 로그인하는 과정

### login_xbox

마이크로소프트 계정으로 로그인하는 과정

### patch

- 런처 서버와 통신하는 과정
- 런처 서버에서 파일을 다운로드

### launch

게임을 실행하는 과정 (이 errorContext는 patch로 기록됨)

### ui

UI 요소에서 발생한 오류. 보통 개발 과정에서만 발생하며 실제로 배포되는 런처에서는 매우 드물게 발생함

### authyou

보안 런처 기능에서 작업을 수행하는 과정

### processinteractor

`ProcessInteractor`에서 작업을 수행하는 과정

예시) 게임 로그 기록, 보안 런처 기능과 정보를 주고받는 과정

### update

런처 업데이트 과정

### api_mojang

`MojangAPI` 사용하는 과정

### reset_game

게임 초기화 과정

### crash_minecraft

마인크래프트 프로세스의 exit code가 0이 아님

크래시 발견한 경우