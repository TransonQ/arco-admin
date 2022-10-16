# json-server

本案例用于模拟请求

## 安装

```
npm i -D json-server
```

## 命令

```
命令1：json-server db.json
命令2：json-server --watch app.js
命令3：json-server --watch -c ./server.json
命令4：json-server --port 8888 --watch db.json（不指定端口时默认端口是3000）
```

## 添加脚本 package.json

```json
{
  ...,
  "ip": "json-server/ip.sh",
  "jserver": "json-server --watch -c json-server/server.json json-server/db.json",
}
```

## 查看本地环境 ip

```bash
npm run ip # mac系统需要先给予执行权限 chmod 755 json-server/ip.sh
```

## server.json

```json
{
  "host": "localhost", // 本地ip
  "port": 3005,
  "watch": true,
  "routes": "json-server/routes.json",
  "delay": 400
}
```
