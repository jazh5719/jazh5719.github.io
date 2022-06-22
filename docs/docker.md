---
content: "docker使用记录"
description: "docker使用记录"
---

# docker

## 启动容器

docker run --name nginx-test -p 8080:80 -d nginx

- **--name nginx-test**：容器名称。
- **-p 8080:80**： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
- **-d nginx**： 设置容器在在后台一直运行。

1.进入 docker 终端发现会发现 vi 或者 vim 命令没有⽤，apt-get update 后 apt-get install vim

修改 nginx 配置
cd /etc/nginx

vim nginx.conf

#### 查看映射端口

1.列表 docker ps 2.查看某一个 docker port xx(id)
