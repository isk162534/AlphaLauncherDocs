---
layout: manual
title: (문제해결 메뉴얼) 보안 런처 오류
---

## 증상

- 보안 런처 오류 메세지가 뜬다.
- 런처로 서버에 접속했는데도 '런처로 접속해주세요' 메세지가 발생한다.

## 메뉴얼

보안 런처 기능을 사용하는 서버에게만 해당되는 메뉴얼입니다.  

먼저 보안 런처 관련 문제는 개발자에게 문의하는 것이 가장 확실합니다. 여기서는 보안 런처 운영 시 자주 실수하는 부분이나 문제를 최대한 빨리 해결하는 방법에 대해서만 설명합니다. 

### 보안 런처 끄기

일단 최대한 빨리 문제를 해결하고 싶은 경우, 단순히 서버에서 보안 런처 플러그인을 빼면 됩니다. 보안 런처 플러그인의 이름은 `UserAuth` 입니다.  
다만 이렇게 하는 경우 게임 서버에서의 보안 기능만 꺼진 것이지 런처 쪽에서 보안 기능은 계속 작동하고 있기 때문에, 유저들이 수동 설치하여 서버에 접속할 수 있도록 모드나 각종 파일을 배포하시면 됩니다.  

### 'AuthYou 오류' 메세지

런처에서 'AuthYou 오류' 메세지가 뜨면서 강제종료되는 문제

가장 흔한 경우가 런처 서버에 모드나 파일 업데이트 한 뒤에 업데이트 적용 과정을 거치지 않은 경우입니다. 파일 업데이트를 한 뒤에는 반드시 업데이트 주소에 접속해 주세요. (업데이트 주소는 런처 서버를 설정할 때 전달해드린 URL 입니다)

런처 파일 업데이트를 진행한 직후, 서버에 접속해 있는 모든 유저들은 서버와 연결이 끊기게 됩니다. 실시간으로 유저 파일을 검사하기 때문에 런처 업데이트를 진행하면 서버에 접속중인 유저들도 즉시 업데이트를 진행하기 위하여 게임이 종료됩니다. 이때 런처에서 'AuthYou 오류' 메세지를 볼 수 있습니다. 다시 런처를 실행하면 자동으로 새로 업데이트된 파일을 다운받고 서버에 접속하기 때문에 문제 없습니다. 

### '런처로 접속해 주세요' 관련 오류

분명히 런처를 통해 게임을 실행해서 서버에 접속했는데도 서버에서는 '런처로 접속해 주세요' 같은 메세지를 보내면서 추방 당하는 문제

- 같은 네트워크 안에서 서버 접속을 시도하는 경우

    보안 런처의 작동 구조상 접속하는 유저의 아이피가 내부 네트워크 아이피인 경우, 제대로 작동하지 않을 수 있습니다. 내부 네트워크에서의 연결을 허용하려면 플러그인 설정 파일에서 "allowLocalIp" 값을 true 로 바꾸세요. (주의: 이 값을 true 로 설정하기 전에 반드시 개발자에게 말해주세요)

- 특정 도메인 서비스를 사용하는 경우

    일부 도메인 서비스를 사용하는 경우, 기본적으로 보안 런처 기능을 사용할 수 없습니다. (대표적으로 mcv.kr) 이러한 도메인 서비스와 보안 런처 기능을 함께 사용하고 싶다면 런처 개발자에게 문의해 주세요.

