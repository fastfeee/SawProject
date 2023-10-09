# 编译和配置
SAW 可以从源码编译和启动，但推荐更简单的Docker方式启动。
## Live Streaming
直播是SAW的典型场景，支持推直播流后浏览器直接观看的方式。   
### 前提
- 安装 **rust**([开始下载](https://www.rust-lang.org/tools/install))。   
- 通过命令行接口访问SAW的终端。     
> *本项目基于rust开发，请提前安装rust。*  
### 运行 SAW
- 下载源码: 
```
git clone https://github.com/binbat/live777.git
```
- 编译，注意需要切换```live777```目录
```sh
cd live777
cargo build
```
- 启动服务器
```sh
cargo run
``` 
### 推流
- 使用[Gstreamer](https://gstreamer.freedesktop.org/download/) 或 [OBS]((https://obsproject.com/forum/threads/obs-studio-30-beta.168984/))推流 :
```sh 
gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint="http://localhost:3000/whip/777"
``` 
> Note:   
> 1. OBS Studio 需要**30或更高的版本**        
> 2. OBS WHIP 协议目前仅能支持**H264**视频编码和**Opus**音频编码
  
### 播放视频
- 打开浏览器，输入网址:```http://localhost:3000/```
