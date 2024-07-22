---
layout: manual
title: (known issue) hs_err_pid######.log
---

https://gaming.stackexchange.com/questions/96496/is-there-a-list-of-error-codes-for-minecraft

## EXCEPTION_ACCESS_VIOLATION (0xc0000005), SIGSEGV (0xb)

An access violation/segmentation fault occurs when a program attempts to access memory that it has not been assigned. This is a very broad type of error with many possible causes, but it is almost always the result of a software bug.

Find the part of the crash log that states "problematic frame", and see if it matches any of the ones found below:

### case 1

```
#
# A fatal error has been detected by the Java Runtime Environment:
#
#  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x00007ffc6033ec33, pid=18088, tid=5848
#
# JRE version: Java(TM) SE Runtime Environment (8.0_51-b16) (build 1.8.0_51-b16)
# Java VM: Java HotSpot(TM) 64-Bit Server VM (25.51-b03 mixed mode windows-amd64 compressed oops)
# Problematic frame:
# C  [ig12icd64.dll+0x18ec33]
#
# Failed to write core dump. Minidumps are not enabled by default on client versions of Windows
#
# If you would like to submit a bug report, please visit:
#   http://bugreport.java.com/bugreport/crash.jsp
# The crash happened outside the Java Virtual Machine in native code.
# See problematic frame for where to report the bug.
#

---------------  T H R E A D  ---------------

Current thread (0x0000000003664000):  JavaThread "Render thread" [_thread_in_native, id=5848, stack(0x0000000003560000,0x0000000003660000)]

siginfo: ExceptionCode=0xc0000005, reading address 0x0000000000000020

Registers:
RAX=0x0000000090b501d8, RBX=0x0000000094b4ffa0, RCX=0x0000000000000000, RDX=0x0000000090b50160
RSP=0x000000000365c7b0, RBP=0x000000000365c8b0, RSI=0x0000000000000000, RDI=0x0000000000000000
R8 =0x0000000094b4ffa4, R9 =0x0000000000000008, R10=0x000000009095ab20, R11=0x0000000000000001
R12=0x0000000090b501d8, R13=0x0000000000000001, R14=0x0000000000000008, R15=0x0000000090b1af40
RIP=0x00007ffc6033ec33, EFLAGS=0x0000000000010202

Top of Stack: (sp=0x000000000365c7b0)
0x000000000365c7b0:   0000000000000009 0000000057d32f5f
0x000000000365c7c0:   00000000237a3500 0000000057d352fd
0x000000000365c7d0:   000000000365c8b8 0000000057d352fd
0x000000000365c7e0:   0000000000000000 0000010000000014
0x000000000365c7f0:   0000000900000001 0000000000000001
0x000000000365c800:   0000000094ff8960 00007ffcc587b90b
0x000000000365c810:   0000000026646900 0000000090b1af40
0x000000000365c820:   0000000000000000 0000000057d4b90a
0x000000000365c830:   0000000000000100 0000000057d4b90a
0x000000000365c840:   0000000000000000 0000000090b1af00
0x000000000365c850:   000000009095ab20 00000000005c0000
0x000000000365c860:   00000000005c02ac 0000000003664d98
0x000000000365c870:   0000000090b501d8 00000000005c0d80
0x000000000365c880:   00007ffc60bbd610 00007ffc6033f780
0x000000000365c890:   00007ffc60bbe8c0 0000000000000030
0x000000000365c8a0:   0000000094b4ffa0 0000000000000008 

Instructions: (pc=0x00007ffc6033ec33)
0x00007ffc6033ec13:   48 3b f0 73 67 2b c6 4c 8d 04 b3 44 8b c8 49 8b
0x00007ffc6033ec23:   57 18 4a 8b 04 32 48 8b 88 d8 00 00 00 48 8b 02
0x00007ffc6033ec33:   0f 10 41 20 0f 10 11 0f 10 59 10 0f 10 49 30 0f
0x00007ffc6033ec43:   29 45 20 f2 0f 10 41 40 48 8b 88 d8 00 00 00 66 


Register to memory mapping:

RAX=0x0000000090b501d8 is an unknown value
RBX=0x0000000094b4ffa0 is an unknown value
RCX=0x0000000000000000 is an unknown value
RDX=0x0000000090b50160 is an unknown value
RSP=0x000000000365c7b0 is pointing into the stack for thread: 0x0000000003664000
RBP=0x000000000365c8b0 is pointing into the stack for thread: 0x0000000003664000
RSI=0x0000000000000000 is an unknown value
RDI=0x0000000000000000 is an unknown value
R8 =0x0000000094b4ffa4 is an unknown value
R9 =0x0000000000000008 is an unknown value
R10=0x000000009095ab20 is an unknown value
R11=0x0000000000000001 is an unknown value
R12=0x0000000090b501d8 is an unknown value
R13=0x0000000000000001 is an unknown value
R14=0x0000000000000008 is an unknown value
R15=0x0000000090b1af40 is an unknown value


Stack: [0x0000000003560000,0x0000000003660000],  sp=0x000000000365c7b0,  free space=1009k
Native frames: (J=compiled Java code, j=interpreted, Vv=VM code, C=native code)
C  [ig12icd64.dll+0x18ec33]
C  [ig12icd64.dll+0xa0b7ee]
C  [ig12icd64.dll+0x9933f7]
C  [ig12icd64.dll+0x9d17f6]
C  [ig12icd64.dll+0x2786d7]
C  [ig12icd64.dll+0x18a010]
C  [ig12icd64.dll+0x2a493e]
C  [ig12icd64.dll+0x99b7cc]
C  [ig12icd64.dll+0x295f43]
C  [ig12icd64.dll+0x2969f6]
C  0x0000000004b246cf

Java frames: (J=compiled Java code, j=interpreted, Vv=VM code)
J 6685  org.lwjgl.opengl.GL11C.glDrawArrays(III)V (0 bytes) @ 0x0000000004b24649 [0x0000000004b24600+0x49]
J 14862 C2 net.minecraft.client.renderer.WorldVertexBufferUploader.draw(Ljava/nio/ByteBuffer;ILnet/minecraft/client/renderer/vertex/VertexFormat;ILnet/optifine/render/MultiTextureData;)V (79 bytes) @ 0x0000000005857bf4 [0x00000000058579a0+0x254]
J 14718 C2 net.minecraft.client.renderer.WorldVertexBufferUploader.func_181679_a(Lnet/minecraft/client/renderer/BufferBuilder;)V (58 bytes) @ 0x0000000005ad35e8 [0x0000000005ad3240+0x3a8]
j  net.minecraft.client.renderer.RenderType.func_228631_a_(Lnet/minecraft/client/renderer/BufferBuilder;III)V+67
j  net.minecraft.client.renderer.IRenderTypeBuffer$Impl.func_228462_a_(Lnet/minecraft/client/renderer/RenderType;)V+45
j  net.minecraft.client.renderer.IRenderTypeBuffer$Impl.getBuffer(Lnet/minecraft/client/renderer/RenderType;)Lcom/mojang/blaze3d/vertex/IVertexBuilder;+44
j  net.minecraft.client.gui.FontRenderer$CharacterRenderer.accept(ILnet/minecraft/util/text/Style;I)Z+213
j  net.minecraft.util.text.TextProcessing.func_238344_a_(Lnet/minecraft/util/text/Style;Lnet/minecraft/util/ICharacterConsumer;IC)Z+22
j  net.minecraft.util.text.TextProcessing.func_238341_a_(Ljava/lang/String;Lnet/minecraft/util/text/Style;Lnet/minecraft/util/ICharacterConsumer;)Z+124
j  net.minecraft.util.IReorderingProcessor.func_242245_b(Ljava/lang/String;Lnet/minecraft/util/text/Style;Lnet/minecraft/util/ICharacterConsumer;)Z+3
j  net.minecraft.util.IReorderingProcessor$$Lambda$7692.accept(Lnet/minecraft/util/ICharacterConsumer;)Z+9
j  net.minecraft.client.gui.FontRenderer.func_238426_c_(Lnet/minecraft/util/IReorderingProcessor;FFIZLnet/minecraft/util/math/vector/Matrix4f;Lnet/minecraft/client/renderer/IRenderTypeBuffer;ZII)F+27
j  net.minecraft.client.gui.FontRenderer.func_238424_b_(Lnet/minecraft/util/IReorderingProcessor;FFIZLnet/minecraft/util/math/vector/Matrix4f;Lnet/minecraft/client/renderer/IRenderTypeBuffer;ZII)I+65
j  net.minecraft.client.gui.FontRenderer.func_238416_a_(Lnet/minecraft/util/IReorderingProcessor;FFIZLnet/minecraft/util/math/vector/Matrix4f;Lnet/minecraft/client/renderer/IRenderTypeBuffer;ZII)I+18
j  net.minecraft.client.gui.FontRenderer.func_238415_a_(Lnet/minecraft/util/IReorderingProcessor;FFILnet/minecraft/util/math/vector/Matrix4f;Z)I+27
j  net.minecraft.client.gui.FontRenderer.func_238407_a_(Lcom/mojang/blaze3d/matrix/MatrixStack;Lnet/minecraft/util/IReorderingProcessor;FFI)I+18
j  net.minecraft.client.gui.AbstractGui.func_238472_a_(Lcom/mojang/blaze3d/matrix/MatrixStack;Lnet/minecraft/client/gui/FontRenderer;Lnet/minecraft/util/text/ITextComponent;III)V+28
j  net.minecraft.client.gui.screen.ConnectingScreen.func_230430_a_(Lcom/mojang/blaze3d/matrix/MatrixStack;IIF)V+74
J 14730 C1 net.minecraft.client.gui.ResourceLoadProgressGui.func_230430_a_(Lcom/mojang/blaze3d/matrix/MatrixStack;IIF)V (836 bytes) @ 0x0000000005aec5c4 [0x0000000005aebd60+0x864]
J 14642 C1 net.minecraft.client.renderer.GameRenderer.func_195458_a(FJZ)V (1147 bytes) @ 0x0000000005a7fb7c [0x0000000005a71e20+0xdd5c]
J 13939 C1 net.minecraft.client.Minecraft.func_195542_b(Z)V (994 bytes) @ 0x0000000005898944 [0x00000000058935e0+0x5364]
j  net.minecraft.client.Minecraft.func_99999_d()V+68
j  net.minecraft.client.main.Main.main([Ljava/lang/String;)V+1379
v  ~StubRoutines::call_stub
j  sun.reflect.NativeMethodAccessorImpl.invoke0(Ljava/lang/reflect/Method;Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;+0
j  sun.reflect.NativeMethodAccessorImpl.invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;+100
j  sun.reflect.DelegatingMethodAccessorImpl.invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;+6
j  java.lang.reflect.Method.invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;+56
j  net.minecraftforge.fml.loading.FMLClientLaunchProvider.lambda$launchService$0(Lcpw/mods/modlauncher/api/ITransformingClassLoader;[Ljava/lang/String;)Ljava/lang/Void;+50
j  net.minecraftforge.fml.loading.FMLClientLaunchProvider$$Lambda$496.call()Ljava/lang/Object;+12
j  cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch([Ljava/lang/String;Lcpw/mods/modlauncher/api/ITransformingClassLoader;)V+11
j  cpw.mods.modlauncher.LaunchServiceHandler.launch(Ljava/lang/String;[Ljava/lang/String;Lcpw/mods/modlauncher/TransformingClassLoader;Lcpw/mods/modlauncher/LaunchPluginHandler;)V+57
j  cpw.mods.modlauncher.LaunchServiceHandler.launch(Lcpw/mods/modlauncher/ArgumentHandler;Lcpw/mods/modlauncher/TransformingClassLoader;Lcpw/mods/modlauncher/LaunchPluginHandler;)V+19
j  cpw.mods.modlauncher.Launcher.run([Ljava/lang/String;)V+116
j  cpw.mods.modlauncher.Launcher.main([Ljava/lang/String;)V+37
v  ~StubRoutines::call_stub

---------------  P R O C E S S  ---------------

Java Threads: ( => current thread )
  0x000000006455b000 JavaThread "Keep-Alive-Timer" daemon [_thread_blocked, id=15460, stack(0x000000002d540000,0x000000002d640000)]
  0x0000000064559800 JavaThread "Server Connector #1" [_thread_in_native, id=9636, stack(0x0000000039c90000,0x0000000039d90000)]
  0x0000000064558800 JavaThread "Sound engine" daemon [_thread_blocked, id=4976, stack(0x000000002d740000,0x000000002d840000)]
  0x0000000064555800 JavaThread "Worker-Main-15" daemon [_thread_blocked, id=16408, stack(0x0000000040000000,0x0000000040100000)]
  0x0000000064553800 JavaThread "Java2D Disposer" daemon [_thread_blocked, id=12940, stack(0x0000000063c80000,0x0000000063d80000)]
  0x0000000023b1d800 JavaThread "pixelmon_spawning_1" daemon [_thread_blocked, id=19656, stack(0x0000000062e20000,0x0000000062f20000)]
  0x0000000032c82000 JavaThread "pixelmon_spawning_0" daemon [_thread_blocked, id=19032, stack(0x0000000063f00000,0x0000000064000000)]
  0x0000000032c88000 JavaThread "pixelmon_extras_contact_0" daemon [_thread_blocked, id=2296, stack(0x00000000626b0000,0x00000000627b0000)]
  0x0000000032c87800 JavaThread "pixelmon_async_storage_0" daemon [_thread_blocked, id=17696, stack(0x000000005e4c0000,0x000000005e5c0000)]
  0x0000000032c7c000 JavaThread "Configurate-WatchService-0" daemon [_thread_blocked, id=12916, stack(0x00000000527e0000,0x00000000528e0000)]
  0x0000000032c83000 JavaThread "Thread-11" daemon [_thread_in_native, id=21380, stack(0x00000000526e0000,0x00000000527e0000)]
  0x0000000032c7a000 JavaThread "Thread-10" daemon [_thread_in_native, id=16148, stack(0x0000000032a60000,0x0000000032b60000)]
  0x0000000032c7b800 JavaThread "Worker-Main-13" daemon [_thread_blocked, id=20128, stack(0x000000003e2b0000,0x000000003e3b0000)]
  0x0000000032c79000 JavaThread "Worker-Main-11" daemon [_thread_blocked, id=15516, stack(0x000000003d030000,0x000000003d130000)]
  0x0000000032c7e800 JavaThread "Worker-Main-8" daemon [_thread_blocked, id=12404, stack(0x000000003cd30000,0x000000003ce30000)]
  0x0000000023b27800 JavaThread "Narrator" [_thread_blocked, id=9884, stack(0x000000003c670000,0x000000003c770000)]
  0x0000000023b21800 JavaThread "ClientBattleTimer" daemon [_thread_blocked, id=9344, stack(0x000000003a930000,0x000000003aa30000)]
  0x0000000023b25000 JavaThread "modloading-worker-0" daemon [_thread_blocked, id=18680, stack(0x0000000039d90000,0x0000000039e90000)]
  0x0000000023b23000 JavaThread "modloading-worker-5" daemon [_thread_blocked, id=1164, stack(0x0000000039a90000,0x0000000039b90000)]
  0x0000000023b20800 JavaThread "modloading-worker-3" daemon [_thread_blocked, id=3556, stack(0x0000000038030000,0x0000000038130000)]
  0x0000000023b1c000 JavaThread "Snooper Timer" daemon [_thread_blocked, id=9956, stack(0x00000000326d0000,0x00000000327d0000)]
  0x0000000023b1b800 JavaThread "Timer hack thread" daemon [_thread_blocked, id=17608, stack(0x000000002cc30000,0x000000002cd30000)]
  0x0000000023b1f000 JavaThread "Worker-Bootstrap-5" daemon [_thread_blocked, id=8020, stack(0x000000002da70000,0x000000002db70000)]
  0x0000000021b96800 JavaThread "Worker-Bootstrap-1" daemon [_thread_blocked, id=10496, stack(0x000000002cd80000,0x000000002ce80000)]
  0x0000000023727000 JavaThread "Thread-2" daemon [_thread_in_native, id=13416, stack(0x0000000024fa0000,0x00000000250a0000)]
  0x0000000023baf800 JavaThread "Thread-1" daemon [_thread_blocked, id=10796, stack(0x0000000024ea0000,0x0000000024fa0000)]
  0x000000002262e800 JavaThread "Service Thread" daemon [_thread_blocked, id=13596, stack(0x00000000229d0000,0x0000000022ad0000)]
  0x0000000021b99800 JavaThread "C1 CompilerThread3" daemon [_thread_blocked, id=13524, stack(0x00000000224d0000,0x00000000225d0000)]
  0x0000000021b9a800 JavaThread "C2 CompilerThread2" daemon [_thread_blocked, id=17724, stack(0x00000000223d0000,0x00000000224d0000)]
  0x0000000021b99000 JavaThread "C2 CompilerThread1" daemon [_thread_blocked, id=19904, stack(0x00000000222d0000,0x00000000223d0000)]
  0x0000000021b7f800 JavaThread "C2 CompilerThread0" daemon [_thread_blocked, id=10416, stack(0x00000000221d0000,0x00000000222d0000)]
  0x0000000021b7e800 JavaThread "Attach Listener" daemon [_thread_blocked, id=19488, stack(0x00000000220d0000,0x00000000221d0000)]
  0x0000000021b8e000 JavaThread "Signal Dispatcher" daemon [_thread_blocked, id=20460, stack(0x0000000021fd0000,0x00000000220d0000)]
  0x0000000021b69000 JavaThread "Surrogate Locker Thread (Concurrent GC)" daemon [_thread_blocked, id=3520, stack(0x0000000021ed0000,0x0000000021fd0000)]
  0x0000000021b52800 JavaThread "Finalizer" daemon [_thread_blocked, id=18260, stack(0x0000000021dd0000,0x0000000021ed0000)]
  0x0000000021b52000 JavaThread "Reference Handler" daemon [_thread_blocked, id=9664, stack(0x0000000021cd0000,0x0000000021dd0000)]
=>0x0000000003664000 JavaThread "Render thread" [_thread_in_native, id=5848, stack(0x0000000003560000,0x0000000003660000)]

Other Threads:
  0x0000000021b49800 VMThread [stack: 0x0000000021bd0000,0x0000000021cd0000] [id=20576]
  0x00000000225d5800 WatcherThread [stack: 0x0000000022ad0000,0x0000000022bd0000] [id=12412]
```

인텔 내장 그래픽 드라이버 문제. 대부분 노트북

그래픽 드라이버 업데이트 혹은 버전 변경 후 해결

외장 그래픽이 설치된 노트북이라면 외장 그래픽 사용하는게 좋다.

[MinecraftForum](https://www.minecraftforum.net/forums/support/java-edition-support/3190528-solution-for-ig-icd64-dll-crash-on-older-versions)

[MC-32606](https://bugs.mojang.com/browse/MC-32606)

리소스팩의 특정 폰트를 렌더링하지 못해서 발생하는 문제. 그래픽 카드 드라이버 업데이트 후 해결

로그

```
ig4icd32.dll
ig4dev32.dll
ig7icd64.dll
ig7dev64.dll
ig8dev64.dll
ig9icd64.dll // 가장 흔함
ig11icd64.dll
ig12icd64.dll
ig75icd64.dll

atioglx1.dll
atioglx2.dll
atioglx3.dll
atioglxx.dll
atio6axx.dll

nvoglv64.dll
```

### case 2

```
#
# A fatal error has been detected by the Java Runtime Environment:
#
#  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x000000007103dda0, pid=26936, tid=29096
#
# JRE version: Java(TM) SE Runtime Environment (8.0_51-b16) (build 1.8.0_51-b16)
# Java VM: Java HotSpot(TM) 64-Bit Server VM (25.51-b03 mixed mode windows-amd64 compressed oops)
# Problematic frame:
# [thread 3960 also had an error]
V  [jvm.dll+0xadda0]
#
# Failed to write core dump. Minidumps are not enabled by default on client versions of Windows
#
# An error report file with more information is saved as:
# C:\Users\User\AppData\Roaming\PixelmonScarlet\game\hs_err_pid26936.log
#
# If you would like to submit a bug report, please visit:
#   http://bugreport.java.com/bugreport/crash.jsp
#
Uhh, nope. It's just AL lib: (EE) alc_cleanup: 1 device not closed
```

### case 3

```
#
# A fatal error has been detected by the Java Runtime Environment:
#
#  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x0000000029d3a882, pid=8296, tid=7400
#
# JRE version: Java(TM) SE Runtime Environment (8.0_51-b16) (build 1.8.0_51-b16)
# Java VM: Java HotSpot(TM) 64-Bit Server VM (25.51-b03 mixed mode windows-amd64 compressed oops)
# Problematic frame:
# C  0x0000000029d3a882
#
# Failed to write core dump. Minidumps are not enabled by default on client versions of Windows
#
# An error report file with more information is saved as:
# C:\Users\ADMIN\AppData\Roaming\PixelmonScarlet\game\hs_err_pid8296.log
#
# If you would like to submit a bug report, please visit:
#   http://bugreport.java.com/bugreport/crash.jsp
# The crash happened outside the Java Virtual Machine in native code.
# See problematic frame for where to report the bug.
#
Uhh, nope. It's just AL lib: (EE) alc_cleanup: 1 device not closed
```

