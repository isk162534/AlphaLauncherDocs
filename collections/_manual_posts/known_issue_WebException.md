---
layout: manual
title: (known issue) WebException
---

### System.ComponentModel.Win32Exception (0x80090330)
```
 System.Net.WebException: An exception occurred during a WebClient request.
 ---> System.IO.IOException: The decryption operation failed, see inner exception.
 ---> System.ComponentModel.Win32Exception (0x80090330): 지정한 데이터의 암호를 해독하지 못했습니다.
   --- End of inner exception stack trace ---
   at System.Net.Security.SslStream.ReadAsyncInternal[TIOAdapter](Memory1 buffer, CancellationToken cancellationToken)
   at System.Runtime.CompilerServices.PoolingAsyncValueTaskMethodBuilder1.StateMachineBox1.System.Threading.Tasks.Sources.IValueTaskSource<TResult>.GetResult(Int16 token)
   at System.Net.Http.HttpConnection.ReadAsync(Memory1 destination)
   at System.Net.Http.HttpConnection.ContentLengthReadStream.ReadAsync(Memory1 buffer, CancellationToken cancellationToken)
   at System.Net.WebClient.DownloadBitsAsync(WebRequest request, Stream writeStream, AsyncOperation asyncOp, Action3 completionDelegate)
   --- End of inner exception stack trace ---
   at AlphabetUpdate.Client.PatchHandler.AlphabetFileUpdater.CheckAndDownloadFile(WebClient webClient, String path, UpdateFile file, Boolean checkHash)
```

https://github.com/dotnet/runtime/issues/43682

윈도우 버그이고 윈도우 업데이트하면 해결될듯