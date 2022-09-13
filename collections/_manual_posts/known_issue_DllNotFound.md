---
layout: manual
title: (known issue) DllNotFoundException
---

## 증상

- 런처를 실행해도 아무 창이 뜨지 않고 바로 꺼짐
- 아래와 같은 오류 보고서가 생성됨
- 로그 파일에 errorLog 와 비슷한 내용이 들어있음

### 로그1

errorContext: `application`

errorLog:
```
System.DllNotFoundException: Dll was not found.
   at System.Windows.Media.MediaContextNotificationWindow..ctor(MediaContext ownerMediaContext)
   at System.Windows.Media.MediaContext..ctor(Dispatcher dispatcher)
   at System.Windows.Media.MediaContext.From(Dispatcher dispatcher)
   at System.Windows.Media.Visual.VerifyAPIReadWrite()
   at System.Windows.Media.VisualCollection.Add(Visual visual)
   at System.Windows.Controls.UIElementCollection.AddInternal(UIElement element)
   at System.Windows.Controls.UIElementCollection.Add(UIElement element)
   at System.Windows.Controls.UIElementCollection.System.Collections.IList.Add(Object value)
   at System.Xaml.Schema.XamlTypeInvoker.AddToCollection(Object instance, Object item)
   at MS.Internal.Xaml.Runtime.ClrObjectRuntime.Add(Object collection, XamlType collectionType, Object value, XamlType valueXamlType)
```

런처의 EXE 파일이 있는 폴더 안에 `wpfgfx_cor3.dll` 파일이 존재하지 않는 경우 위 오류가 발생함. 

https://github.com/dotnet/wpf/issues/2009

### 로그2

errorContext: `application`

errorLog:
```
System.DllNotFoundException: Dll was not found.
   at __std_type_info_destroy_list(__type_info_node* )
   at __scrt_uninitialize_type_info()
   at _app_exit_callback()
   at <CrtImplementationDetails>.LanguageSupport.DomainUnload(Object A_0, EventArgs A_1)
   at <CrtImplementationDetails>.ModuleUninitializer.SingletonDomainUnload(Object source, EventArgs arguments)
   at System.AppContext.OnProcessExit()
```

https://github.com/microsoft/appcenter-sdk-dotnet/issues/1390

## 해결 방법

런처 재설치를 시도해서 필요한 파일이 모두 제대로 설치되는지 확인해봐야함. 

## 추가 정보

왜 파일이 존재하지 않는지 정확한 원인은 알 수 없음.

백신에서 해당 파일을 삭제한 경우, 유저가 런처 파일을 건들인 경우가 의심됨. 

2022.09.13

2022년 8월 2일 `321b9354215899feb64c98ca53d8801331c30db9` 커밋에서 `PublishSingleFile` 옵션을 `true` 로 바꾼 후 오류 빈도 증가, 해당 옵션을 다시 `false` 로 변경함.