# 插件开源
Hydro 是一个开源的Online Judge。借助 Hydro 强大的插件功能，我们实现了如下插件，且全部以 LGPL 协议开源：
## ticket
### 介绍
Github：[Link](https://github.com/UranusOJ/ticket)

这是一个基于[HydroOJ](https://github.com/hydro-dev/Hydro)的工单插件。（至于为啥叫ticket...搬lg的）

写得非常粗糙，可能有一些不可名状的Bug，还请谨慎使用，如有发现Bug，可以给我们发Issues。

一个简单的工单插件。灵感来自 [洛谷](https://www.luogu.com.cn/) 工单。
## codecheck
### 介绍
Github：[Link](https://github.com/UranusOJ/codecheck)

这是一个基于 [HydroOJ](https://github.com/hydro-dev/Hydro) 的代码相似度检查插件。

写得有些丑，可能有一些不可名状的Bug，还请谨慎使用，如有发现Bug，可以给我们发Issues。

### 入口

- `/code-check/pid`：对 pid 的题目检查代码相似度

### 权限配置

`PERM.PERM_CREATE_PROBLEM`（域中可创建题目）：可以检查代码相似度

同时，对于拥有权限`PERM.PERM_CREATE_PROBLEM`的用户，可以看到每道题目侧边栏上用一个检查代码相似度的按钮

当然你可以修改权限配置，有以下几处可以修改：

- `index.ts`第84行，此处为入口
- `templates/partials/problem_sidebar_normal.html`第108行，此处为显示按钮
