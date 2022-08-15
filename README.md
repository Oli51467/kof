##### 简易版拳皇

部署：

1. 下载一个nginx镜像

   ```
   docker 	pull  nginx:latest
   ```

2. 在server端新建目录结构： /Projects/web/kof

3. 将index.html、/static、/node_modules放到kof文件夹下
4. 在同一文件夹下创建Dockerfile

```
sudo touch Dockerfile
```

5. 编辑Dockerfile

```
sudo vim Dockerfile
```

```
FROM  nginx
COPY  /node_modules  /usr/share/nginx/html
COPY  /static  /usr/share/nginx/html
COPY  index.html   /usr/share/nginx/html
```

   将资源文件复制到nginx容器的指定文件夹下

6. 制作镜像

```
docker run -di --name=nginx -p 9091:80 -v /home/username/Projects/web/kof/:/usr/share/nginx/html nginx
```

7. 运行容器

```
docker start nginx
```

8. 访问101.42.155.54:9091

