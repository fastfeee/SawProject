# Docker
推荐使用Docker启动SAW，这是最简单也是最方便的方式。
## Live Streaming
SAW支持直播
### 用docker启动SAW
```sh
docker run --name live777-server --rm --network host ghcr.io/binbat/live777-server:main live777
```

### 推流

- 使用[Gstreamer](https://gstreamer.freedesktop.org/download/)的镜像推流：
> *注：支持多种编码格式*   

::: details 查看更多编码格式的推流
- 视频:VP8
```sh
docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:main gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint="http://localhost:3000/whip/777"
```
- 视频:VP9
```sh
docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:main  gst-launch-1.0 videotestsrc ! videoconvert ! vp9enc ! rtpvp9pay ! whipsink whip-endpoint="http://localhost:3000/whip/777"
```
- 视频:H264
```sh
docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:main  gst-launch-1.0 videotestsrc ! videoconvert ! x264enc ! rtph264pay ! whipsink whip-endpoint="http://localhost:3000/whip/777"
```
- 音频:Opus
```sh
docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:main 
gst-launch-1.0 audiotestsrc ! audioconvert ! opusenc ! rtpopuspay ! whipsink whip-endpoint="http://localhost:3000/whip/777"
```
- 音频:G722
> 注: GStreamer G722 在 gstreamer-libav 需要 avenc_g722 
```sh
docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:main  gst-launch-1.0 audiotestsrc ! audioconvert ! avenc_g722 ! rtpg722pay ! whipsink whip-endpoint="http://localhost:3000/whip/777
```
:::
- 或直接选用[Gstreamer](https://gstreamer.freedesktop.org/download/)或 [OBS]((https://obsproject.com/forum/threads/obs-studio-30-beta.168984/))推流 :
> 注:  
> 1. OBS Studio 需要**30或更高的版本**        
> 2. OBS WHIP 协议目前仅能支持**H264**视频编码和**Opus**音频编码
:::
### 播放视频
- 打开浏览器，输入网址:```http://localhost:3000/```


