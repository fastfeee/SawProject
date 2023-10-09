# 工具
![支持的协议转换功能](/tool.svg)   
除了利用已经实现WHIP协议的原生平台外，SAW添加了**可以实现rtp和WHIP或WHEP相互转换**的工具，使其可以兼容更多的媒体播放器。
::: tip 例如
```ffmpeg -> whipinto -> SAW -> whepfrom -> ffplay```
:::   

## whipinto
- 编译
```sh
cargo build --package=whipinto --release
whipinto -c vp8 -u http://localhost:3000/whip/777 --port 5003
```
- 视频源测试，以ffmpeg[开始下载](https://ffmpeg.org/download.html)为例：
```sh
ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -f rtp 'rtp://127.0.0.1:5003?pkt_size=1200'
```
> *注:**支持参数命令***
```sh
cargo run --package=whipinto -- -c vp8 -u http://localhost:3000/whip/777 --command \
"ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -cpu-used 5 -deadline 1 -g 10 -error-resilient 1 -auto-alt-ref 1 -f rtp 'rtp://127.0.0.1:{port}?pkt_size=1200'"
```
- 在VLC[开始下载](https://www.videolan.org/vlc/) 中的RTP流  
> *注: VLC不能支持所有的视频编码格式*
```sh
vlc -vvv <INPUT_FILE> --sout '#transcode{vcodec=h264}:rtp{dst=127.0.0.1,port=5003}'
```
## whepform
- 编译
```sh
cargo build --package=whepfrom --release
```
- 将发送的RTP协议转换WHEP，再使用WHEP协议拉流
```sh
whepfrom -c vp8 -u http://localhost:3000/whep/777 -t localhost:5004
```
- Use ffplay

::: details ffplay的使用
- 对于 ffplay, 需要一个SDP文件
```text
cat > stream.sdp << EOF
v=0
m=video 5004 RTP/AVP 96
c=IN IP4 127.0.0.1
a=rtpmap:96 VP8/90000
EOF
```
- 使用 ffplay
```sh
ffplay -protocol_whitelist rtp,file,udp -i stream.sdp
```
- *因此，建议如下使用：*
```sh
cargo run --package=whepfrom -- -c vp8 -u http://localhost:3000/whep/777 -t 127.0.0.1:5004 --command 'ffplay -protocol_whitelist rtp,file,udp -i stream.sdp' 
```
:::
- 使用 VLC 播放器
```
vlc stream.sdp
```
