---
layout: page
title: 오류 보고서
permalink: /errorreport
---

오류 보고서의 자세한 내용을 볼 수 있습니다. 

id: 오류 보고서의 고유한 아이디

appName: 오류가 발생한 프로그램의 이름

appVersion: 오류가 발생한 프로그램의 버전

clientId: 프로그램 설치시 부여되는 고유한 아이디

osname: 오류가 발생한 클라이언트의 운영체제 이름과 버전

@timestamp: 오류가 발생한 시각, UTC 시간 (한국 시간보다 9시간 느림)

errorId: 오류의 이름, [errorId 목록](/manual_posts/error_ids)

errorLog: 자세한 로그

errorContext: 오류가 발생한 기능의 이름, [errorContext 목록](/manual_posts/error_contexts)

오류 보고서의 아이디를 아래 칸에 입력하고 버튼을 누르면 됩니다. 

{% include errorreport.html %}