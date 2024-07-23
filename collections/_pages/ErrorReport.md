---
layout: page
title: 오류 보고서
permalink: /errorreport
---

![ErrorReport_01.png]({{site.url}}/assets/ErrorReport_01.png)

런처에서 오류를 감지하면 위와 같은 오류 메세지를 보여줍니다. 오류 메세지에는 오류에 관한 간략한 설명, 오류 아이디(errorId), 그리고 오류 보고서 아이디(id)를 확인할 수 있습니다.

id: 오류 보고서의 고유한 아이디

appName: 오류가 발생한 프로그램의 이름

appVersion: 오류가 발생한 프로그램의 버전

clientId: 프로그램 설치시 부여되는 고유한 아이디

osname: 오류가 발생한 클라이언트의 운영체제 이름과 버전

@timestamp: 오류가 발생한 시각, UTC 시간 (한국 시간보다 9시간 느림)

errorId: 오류의 이름, [errorId 목록]({{site.url}}/manual_posts/error_ids)

errorLog: 자세한 로그

errorContext: 오류가 발생한 기능의 이름, [errorContext 목록]({{site.url}}/manual_posts/error_contexts)