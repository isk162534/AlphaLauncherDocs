---
layout: manual
title: (known issue) MicrosoftOAuthException
---

### invalid_grant
```
invalid_grant, The user could not be authenticated or user interaction is required. The user must sign in again and if needed grant the client application access to the requested scope.
```

코드가 잘못된 게 아니라면 이런 오류가 발생할 수가 없음. 오류 발생하는 유저는 엑스박스 사이트 로그인조차 불가능했음. 마이크로소프트 사이트에서 로그인을 해보니 보안  경고가 나오고 보안 조치, 비밀번호 변경 하고난 후 로그인이 정상적으로 진행되었음. 아마도 해킹 시도 같은게 있었던 계정이라 로그인이 막히는듯
