# SAW
## 概述
SAW是一个开源的(MIT协议)简单高效的直播视频服务器，支持WHIP/WHEP协议。

SAW媒体服务器与[Gstreamer](https://gstreamer.freedesktop.org/)， [FFmpeg](https://ffmpeg.org/)， [OBS Studio](https://obsproject.com/)， [VLC](https://www.videolan.org/)， [WebRTC](https://webrtc.org/)等客户端一起提供接收和分发流的能力，是一种典型的发布(推送)和订阅(播放)服务器模型。

SAW支持将RTP协议和WHIP或WHEP的转换。
## 特性
### 支持WHIP/WHEP
![WHIP和WHEP的原理](/SAW.svg)
WHIP[]()/WHEP[]()协议的实现是为了提高与其他WebRTC应用模块的互操作性，而无需自定义调整。
### SFU架构
本服务器是一款基于SFU架构的中心节点媒体服务器，只负责转发，不做合流、转码等资源开销较大的媒体处理工作，将编码解码等工作分别放在发送端和接收端，因此大大降低了服务器的压力，放宽了对服务器配置的严格要求。   
### 支持多种音视频编码格式
提供更广泛的兼容性，以帮助实现自适应流，根据终端网络连接和设备性能动态选择最合适的编码格式和比特率，以提供最佳的观看体验。
- 现在支持的编码格式如下：  
       
| protocol  | video codecs     | audio codecs |
| --------- |:----------------:| ------------:|
|   WHIP    | AV1,VP8,VP9,H264 |   Opus,G722  |
|   WHEP    | AV1,VP8,VP9,H264 |   Opus,G722  |
### 跨平台
SAW基于rust编程，可以在多个平台上运行，如Linux、Windows、macOS和Android。


