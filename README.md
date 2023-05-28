这是一个使用Next.js 13 App路由器创建的全栈Airbnb克隆的存储库：React、Tailwind、Prisma、MongoDB、NextAuth。

特点：

* Tailwind设计
* Tailwind动画和效果
* 完全响应
* 凭证认证
* Google身份验证
* Github身份验证
* 使用Cloudinary CDN上传图像
* 使用react-hook-form处理和验证客户端表单
* 使用react-toast处理服务器错误
* 使用react-date-range的日历
* 页面加载状态
* 页面为空状态
* 预订/预订系统
* 客人预订取消
* 所有者预订取消
* 属性的创建和删除
* 定价计算
* 按类别、日期范围、地图位置、客人数量、房间和浴室数量的高级搜索算法
  * 例如，我们将过滤掉在您旅行的期间具有预订的属性
* 收藏夹系统
* 可共享的URL过滤器
  * 假设您选择了一个类别、位置和日期范围，您将能够与在另一个浏览器中的未登录朋友分享URL，并且他们将看到相同的结果
* 如何在路由处理程序（app/api）中编写POST和DELETE路由
* 如何通过直接访问数据库在服务器React组件中获取数据（WITHOUT API！像魔术一样！）
* 如何处理文件（例如error.tsx和loading.tsx），这些文件是新的Next 13模板文件，用于统一加载和错误处理
* 如何处理服务器和子组件之间的关系！

### 先决条件

**Node版本14.x**

### 克隆存储库

```shell
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

### 安装包

```shell
npm i
```

### 设置 .env 文件


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### 配置Prisma

```shell
npx prisma db push

```

### 启动应用

```shell
npm run dev
```

## 可用命令

使用npm运行命令`npm run [command]`

| 命令         | 说明                              |
| :-------------- | :--------------------------------------- |
| `dev`           | 启动应用程序的开发实例 |