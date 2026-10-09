---
title: Oceanography-Lesson5：海水运动方程（一）
published: 2026-09-28
description: 数学预备知识、流体运动的拉格朗日与欧拉观点、随体导数、流线/迹线/染色线、连续性方程
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 概述

本节正式进入 **第三章：海水运动方程**。课堂从数学工具开始，随后建立描述海水运动的基本变量，介绍研究流体运动的两种观点，最后从 **质量守恒** 推出连续性方程。

本节的主线可以压缩成：

> **数学工具** $\rightarrow$ **海水运动的基本变量** $\rightarrow$ **拉格朗日 / 欧拉观点** $\rightarrow$ **随体导数** $\rightarrow$ **流场几何描述** $\rightarrow$ **质量守恒** $\rightarrow$ **连续性方程**

本堂课实际讲到 **第二节：连续性方程** 并下课。课件章目录还列有“第三节：作用在海水微团上的外力”和“第四节：动量方程”，但本节尚未展开，因此这里不提前写入正文。

课堂对应录音大致从 **00:25:11** 开始第三章，到 **01:31:40** 结束。

---

## 目录

- [概述](#概述)
- [预备知识](#预备知识)
  - [场 Field](#场-field)
  - [标量与矢量](#标量与矢量)
  - [矢量分析：点积与叉积](#矢量分析点积与叉积)
  - [Nabla 算子](#nabla-算子)
  - [梯度 Gradient](#梯度-gradient)
  - [散度 Divergence](#散度-divergence)
  - [旋度 Curl](#旋度-curl)
  - [通量 Flux](#通量-flux)
  - [高斯定理 Gauss theorem](#高斯定理-gauss-theorem)
  - [斯托克斯定理 Stokes theorem](#斯托克斯定理-stokes-theorem)
  - [散度与旋度的局地意义](#散度与旋度的局地意义)
- [流体的运动方程组](#流体的运动方程组)
  - [描述海水运动的 7 个基本变量](#描述海水运动的-7-个基本变量)
  - [牛顿三定律与海洋中的适用性](#牛顿三定律与海洋中的适用性)
- [第一节 研究流体的两种运动观点](#第一节-研究流体的两种运动观点)
  - [拉格朗日观点](#拉格朗日观点)
  - [欧拉观点](#欧拉观点)
  - [两种观点的比较](#两种观点的比较)
  - [随体导数 Material derivative](#随体导数-material-derivative)
  - [当地导数与迁移导数](#当地导数与迁移导数)
  - [流线、迹线与染色线](#流线迹线与染色线)
- [第二节 连续性方程](#第二节-连续性方程)
  - [连续性方程的物理本质](#连续性方程的物理本质)
  - [拉格朗日观点下的推导](#拉格朗日观点下的推导)
  - [欧拉观点下的推导](#欧拉观点下的推导)
  - [连续性方程的等价形式](#连续性方程的等价形式)
  - [不可压缩流体](#不可压缩流体)
- [本节知识链](#本节知识链)
- [易错点整理](#易错点整理)

---

## 预备知识

这一部分的目的很明确：

> 后面所有海水运动方程都要用到 **向量、微分算子、通量和积分定理**。  
> 如果这里不熟，后面看到 $\nabla p$、$\nabla\cdot\vec u$、$\nabla\times\vec u$ 会很容易混乱。

### 场 Field

在数学和物理中，把空间坐标的函数统称为 **场（field）**。

即：空间中每一个位置都有一个物理量与之对应。

海洋中常见的场包括：

- 温度场 $T(x,y,z,t)$
- 盐度场 $S(x,y,z,t)$
- 密度场 $\rho(x,y,z,t)$
- 压强场 $p(x,y,z,t)$
- 速度场 $\vec u(x,y,z,t)$

这里的区别在于：

- 温度、盐度、密度、压强只有“大小” $\rightarrow$ **标量场**
- 速度既有“大小”又有“方向” $\rightarrow$ **矢量场**

### 标量与矢量

#### 标量 Scalar

选定测量单位以后，只需要一个数值就可以完整描述。

课堂列出的典型标量：

- 长度
- 质量
- 时间
- 密度
- 功
- 能量
- 温度
- 电流强度

#### 矢量 Vector

除了大小，还必须给出方向。

典型矢量：

- 力
- 位移
- 速度
- 加速度
- 动量
- 冲量
- 电场强度
- 磁感应强度

在笛卡尔坐标系中，一个三维矢量可以写成

$$
\vec a=(a_1,a_2,a_3)
$$

或

$$
\vec a=a_1\vec i+a_2\vec j+a_3\vec k
$$

---

### 矢量分析：点积与叉积

设

$$
\vec a=(a_1,a_2,a_3),\qquad
\vec b=(b_1,b_2,b_3)
$$

两者夹角为 $\theta$。

#### 点积 Scalar product / Dot product

$$
\vec a\cdot\vec b
=
a_1b_1+a_2b_2+a_3b_3
=
|\vec a||\vec b|\cos\theta
$$

结果是 **标量**。

物理上，它衡量两个矢量在“同一方向上”的程度：

- $\theta=0$：点积最大
- $\theta=90^\circ$：点积为 0
- $\theta>90^\circ$：点积为负

#### 叉积 Vector product / Cross product

$$
\vec a\times\vec b
=
\begin{vmatrix}
\vec i & \vec j & \vec k\\
a_1&a_2&a_3\\
b_1&b_2&b_3
\end{vmatrix}
$$

其大小为

$$
|\vec a\times\vec b|
=
|\vec a||\vec b|\sin\theta
$$

结果是一个 **矢量**：

- 大小衡量两矢量“垂直”的程度
- 方向同时垂直于 $\vec a$ 和 $\vec b$
- 方向由 **右手定则** 决定

展开：

$$
\vec a\times\vec b
=
(a_2b_3-a_3b_2)\vec i
-
(a_1b_3-a_3b_1)\vec j
+
(a_1b_2-a_2b_1)\vec k
$$

:::TIP
课堂在这里提醒了一遍行列式展开的符号：

$$
+\quad-\quad+
$$

也就是 $\vec j$ 对应的第二项前面带负号。
:::

---

### Nabla 算子

课堂称为 **Hamilton 算子 / Nabla 算子**，符号为

$$
\nabla
$$

在笛卡尔坐标系下：

$$
\nabla
=
\left(
\frac{\partial}{\partial x},
\frac{\partial}{\partial y},
\frac{\partial}{\partial z}
\right)
$$

它是一个 **矢量微分算子**：

- “矢量”属性：有 $x,y,z$ 三个方向分量
- “微分”属性：每个分量又是偏微分运算

最重要的一点：

> $\nabla$ 的微分作用只作用在它 **后面的量** 上，因此不能像普通矢量一样随意交换乘法顺序。

例如：

$$
\nabla\cdot\vec a
=
\frac{\partial a_1}{\partial x}
+
\frac{\partial a_2}{\partial y}
+
\frac{\partial a_3}{\partial z}
$$

这是一个已经算完的 **标量**。

但

$$
\vec a\cdot\nabla
=
a_1\frac{\partial}{\partial x}
+
a_2\frac{\partial}{\partial y}
+
a_3\frac{\partial}{\partial z}
$$

本身仍然是一个 **微分算子**，后面还应该继续作用于某个函数。

例如它作用在温度 $T$ 上：

$$
(\vec a\cdot\nabla)T
=
a_1\frac{\partial T}{\partial x}
+
a_2\frac{\partial T}{\partial y}
+
a_3\frac{\partial T}{\partial z}
$$

所以：

$$
\boxed{\nabla\cdot\vec a\neq \vec a\cdot\nabla}
$$

:::WARNING
这是后面“随体导数”最容易看错的地方。

$$
(\vec u\cdot\nabla)\varphi
$$

表示的是“速度矢量 $\vec u$ 与微分算子 $\nabla$ 做点积以后，再去作用于 $\varphi$”。

它不能理解成普通的三个量随意交换。
:::

---

### 梯度 Gradient

梯度作用于 **标量场**。

若

$$
T=T(x,y,z)
$$

则温度梯度为

$$
\nabla T
=
\left(
\frac{\partial T}{\partial x},
\frac{\partial T}{\partial y},
\frac{\partial T}{\partial z}
\right)
$$

结果是一个 **矢量**。

#### 梯度的物理意义

> 一个标量场的梯度，指向该标量 **增加最快的方向**；其大小表示沿这个方向的最大变化率。

因此：

- 温度本身没有方向
- 但“温度往哪里升得最快”有方向
- 所以 $\nabla T$ 是矢量

对二维等值线图而言：

> **梯度总是垂直于等值线，并指向数值增大的方向。**

:::EXAMPLE
课堂用海表温度图举例：

- 白色 / 红色区域温度较高
- 蓝色区域温度较低
- 某一点的温度梯度应从低温一侧指向高温一侧
- 梯度方向与当地等温线垂直

同时要注意：图上的小箭头是叠加的 **速度矢量**，并不是温度梯度。
:::

> **【Slides 图占位｜Slide 29–30】**  
> 插入“梯度方向示意图 + 海表温度场与速度矢量图”。重点标注：梯度垂直等值线，并指向温度增大最快方向。

---

### 散度 Divergence

散度作用于 **矢量场**。

设

$$
\vec a=(a_1,a_2,a_3)
$$

则

$$
\nabla\cdot\vec a
=
\frac{\partial a_1}{\partial x}
+
\frac{\partial a_2}{\partial y}
+
\frac{\partial a_3}{\partial z}
$$

结果是一个 **标量**。

对于速度场

$$
\vec u=(u,v,w)
$$

有

$$
\nabla\cdot\vec u
=
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}
$$

#### 散度的物理意义

散度描述矢量场在某一点的 **发散 / 汇聚程度**。

可以把一个很小的流体体积想象成小盒子：

- 流出去的多于流进来的 $\rightarrow$ 盒子有“膨胀趋势” $\rightarrow$ 散度为正
- 流进来的多于流出去的 $\rightarrow$ 盒子有“压缩趋势” $\rightarrow$ 散度为负
- 流进 = 流出 $\rightarrow$ 散度为零

课堂用 **源（source）** 和 **汇（sink）** 来理解：

$$
\nabla\cdot\vec a>0
\quad\Rightarrow\quad
\text{source}
$$

$$
\nabla\cdot\vec a<0
\quad\Rightarrow\quad
\text{sink}
$$

:::EXAMPLE
把水龙头放在水槽内部：

- 水龙头不断向外放水，相当于内部存在“源”
- 周围流体向外发散
- 散度为正

如果中间有一个排水口：

- 周围水不断向中间汇聚
- 相当于“汇”
- 散度为负
:::

> **【Slides 图占位｜Slide 32–33】**  
> 插入“source / sink 示意图”和课堂展示的二维散度场。用于区分向外发散（正散度）与向内汇聚（负散度）。

---

### 旋度 Curl

旋度也作用于 **矢量场**。

对于速度场

$$
\vec u=(u,v,w)
$$

旋度为

$$
\operatorname{rot}(\vec u)
=
\nabla\times\vec u
=
\begin{vmatrix}
\vec i&\vec j&\vec k\\
\frac{\partial}{\partial x}&
\frac{\partial}{\partial y}&
\frac{\partial}{\partial z}\\
u&v&w
\end{vmatrix}
$$

展开为

$$
\nabla\times\vec u
=
\left(
\frac{\partial w}{\partial y}-\frac{\partial v}{\partial z},
\frac{\partial u}{\partial z}-\frac{\partial w}{\partial x},
\frac{\partial v}{\partial x}-\frac{\partial u}{\partial y}
\right)
$$

结果仍然是一个 **矢量**。

速度场的旋度也称为 **涡度（vorticity）**：

$$
\boxed{\vec\omega=\nabla\times\vec u}
$$

#### 旋度的物理意义

> 衡量流场在某一点附近的局地旋转程度。

可以想象在流体中放一个非常小的桨轮：

- 如果小桨轮会转，说明当地存在旋转
- 转得越明显，旋度越大
- 旋度方向由右手定则确定

如果流动在纸面内：

- 四指沿流体旋转方向弯曲
- 大拇指方向就是旋度方向

例如：

- 逆时针旋转 $\rightarrow$ 旋度垂直纸面向外
- 顺时针旋转 $\rightarrow$ 旋度垂直纸面向里

:::TIP
“流动方向”与“旋度方向”不要混淆。

二维图里的水流在纸面内转，但旋度矢量通常垂直于纸面。
:::

> **【Slides 图占位｜Slide 41–42】**  
> 插入“均一旋度场 / 非均一旋度场”和二维旋转流示意图。建议在图旁标注右手定则。

---

### 通量 Flux

通量描述“一个场通过某个面积的量”。

先定义面积矢量：

$$
d\vec S=\vec n\,dS
$$

其中 $\vec n$ 为曲面的单位法向量。

#### 标量场的通量

若 $\varphi$ 为标量场，则

$$
\iint_S \varphi\,d\vec S
$$

结果是一个 **矢量**。

原因很直观：

- $\varphi$ 是标量
- $d\vec S$ 有方向
- 积分之后仍保留方向

#### 矢量场的标通量

若 $\vec a$ 为矢量场，则

$$
\iint_S \vec a\cdot d\vec S
$$

结果是一个 **标量**。

点积只保留 $\vec a$ 在曲面法向方向上的分量。

#### 体积流量

若 $\vec u$ 为速度场，则

$$
Q
=
\iint_S \vec u\cdot d\vec S
$$

表示单位时间通过曲面 $S$ 的 **体积流量**。

如果 $S$ 是闭合控制面的边界，并取外法向为正：

- $Q>0$：净流出
- $Q<0$：净流入

课堂在这里已经为连续性方程埋下伏笔：

> 如果物质不生不灭，区域内质量 / 密度的变化，只可能来自边界上的流入和流出。

---

### 高斯定理 Gauss theorem

高斯定理也称 **散度定理（divergence theorem）**。

设 $V$ 是三维体积，$\partial V$ 是包围它的闭合曲面，则

$$
\boxed{
\iint_{\partial V}\vec a\cdot d\vec S
=
\iiint_V \nabla\cdot\vec a\,dV
}
$$

左边：

$$
\iint_{\partial V}\vec a\cdot d\vec S
$$

表示通过整个闭合曲面的 **净向外通量**。

右边：

$$
\iiint_V \nabla\cdot\vec a\,dV
$$

表示体积内部所有“源”和“汇”的代数总和。

因此：

> **边界上的净流出 = 内部所有源 / 汇的总效应。**

:::EXAMPLE
课堂用水槽解释：

如果水槽内部有水龙头不断出水：

- 内部有正散度，即“源”
- 为了不让水无限堆积，必须有同样多的水从边界流出去

如果内部有排水口：

- 内部有负散度，即“汇”
- 就必须有水从边界流入补充

这就是高斯定理的物理图像。
:::

> **【Slides 图占位｜Slide 45–47】**  
> 插入“闭合体积 + 外法向量 + 内部 source/sink”的高斯定理示意图。

---

### 斯托克斯定理 Stokes theorem

斯托克斯定理把 **旋度** 和 **环流** 联系起来。

设曲面为 $A$，其边界闭合曲线为 $C=\partial A$，则

$$
\boxed{
\iint_A
(\nabla\times\vec u)\cdot d\vec A
=
\oint_C \vec u\cdot d\vec s
}
$$

左边：

- 曲面上所有局地旋转的总效果
- 即旋度穿过曲面的通量

右边：

- 沿曲面边界一圈的 **环流（circulation）**

定义

$$
\Gamma
=
\oint_C \vec u\cdot d\vec s
$$

因此 Stokes 定理可以理解为：

> **边界一圈测到的总环流 = 曲面内部全部局地旋转的总和。**

:::EXAMPLE
课堂用了“小轮子”来理解：

- 在流体中放一个很小的轮子，当地旋度越大，轮子转得越明显
- 如果把整个曲面内部无数小轮子的旋转效果加起来
- 就等价于沿着最外侧闭合边界测得的总环流
:::

#### 曲线方向与法向方向

二者必须满足右手定则：

- 四指沿着闭合曲线 $C$ 的正方向弯曲
- 大拇指指向曲面法向 $d\vec A$ 的正方向

> **【Slides 图占位｜Slide 48–49】**  
> 插入“曲面 A、边界 C、法向量”的 Stokes 定理示意图。

---

### 散度与旋度的局地意义

课堂把 Gauss / Stokes 定理进一步缩小到“无穷小体积 / 面积”。

#### 散度：单位体积的净通量

由高斯定理：

$$
\iint_{\partial V}\vec a\cdot d\vec S
=
\iiint_V\nabla\cdot\vec a\,dV
$$

当体积 $V\rightarrow 0$ 时：

$$
\boxed{
\nabla\cdot\vec a
=
\lim_{V\rightarrow 0}
\frac{1}{V}
\iint_{\partial V}\vec a\cdot d\vec S
}
$$

所以散度可以理解为：

> **无穷小体积的单位体积净向外通量。**

这就是为什么：

- 正散度对应膨胀 / 发散
- 负散度对应压缩 / 汇聚

#### 旋度：单位面积的局地环流

由 Stokes 定理：

$$
\oint_C\vec u\cdot d\vec s
=
\iint_A(\nabla\times\vec u)\cdot d\vec A
$$

对很小的平面面积 $A$，法向量为 $\vec n$：

$$
\boxed{
(\nabla\times\vec u)\cdot\vec n
=
\lim_{A\rightarrow 0}
\frac{1}{A}
\oint_C\vec u\cdot d\vec s
}
$$

所以：

> **旋度在某个方向上的分量 = 垂直该方向的无穷小面积上，单位面积的环流。**

:::WARNING
课件为了直观，把“旋度”直接和“环流 / 面积”写在一起。严格地说，

$$
\frac{\Gamma}{A}
$$

首先给出的是 **旋度在该面积法向方向上的分量**：

$$
(\nabla\times\vec u)\cdot\vec n
$$

这样写在数学上更严谨。
:::

---

## 流体的运动方程组

### 描述海水运动的 7 个基本变量

课堂把海水运动状态归结为 7 个基本未知量。

#### 一个矢量场：速度

$$
\vec u=(u,v,w)
$$

也就是三个速度分量：

1. $u$：$x$ 方向速度
2. $v$：$y$ 方向速度
3. $w$：$z$ 方向速度

#### 四个标量场

1. 温度 $T$ 或位温 $\theta$
2. 盐度 $S$
3. 密度 $\rho$
4. 压强 $p$

合计：

$$
3+4=7
$$

也就是 **7 个未知变量**。

因此如果要完整求解海水运动，最终需要建立一套足够的方程组来约束它们。

本节首先建立其中最基础的一条守恒关系：

> **连续性方程——质量守恒。**

> **【Slides 图占位｜Slide 54–59】**  
> 插入“流体的运动方程组：7 个基本变量 + Newton 三定律”这一页。

---

### 牛顿三定律与海洋中的适用性

#### 牛顿第一定律

物体不受外力时，保持：

- 静止
- 或匀速直线运动

因此要改变运动状态，就必须有力。

#### 牛顿第二定律

$$
\vec F=m\vec a
$$

加速度：

- 与合外力成正比
- 与质量成反比
- 方向与合外力相同

#### 牛顿第三定律

两个物体之间的作用力与反作用力：

- 大小相等
- 方向相反
- 位于同一直线上

#### 为什么海洋问题还需要额外处理？

牛顿定律最自然地适用于：

- 低速运动
- 宏观物体
- 惯性坐标系

海洋研究通常相对地球来描述，而地球在自转：

> 地球坐标系是 **非惯性坐标系**。

课堂说明后续的处理方法：

- 仍希望把运动方程写成 Newton 第二定律的形式
- 因此在旋转坐标系中需要引入相应的惯性力项
- 其中最重要的就是 **科里奥利力（Coriolis force）**

同时，真实海水运动过于复杂，后续还会根据问题尺度做近似和简化：

- 哪些因素重要
- 哪些因素可以忽略
- 密度如何近似
- 是否考虑黏性等

这些是后续海洋 N-S 方程简化的核心。

---

## 第一节 研究流体的两种运动观点

流体由数量极多的流体质点组成。

研究流体时有两种完全不同的“看法”：

> **拉格朗日：盯着水走。**  
> **欧拉：站在原地看水经过。**

---

### 拉格朗日观点

Lagrangian viewpoint 的着眼点是：

> **流体质点。**

选定某一个流体质点后，跟着它一起运动，研究：

- 它去了哪里
- 速度怎样变化
- 温度怎样变化
- 密度怎样变化
- 其他物理属性怎样随时间改变

#### 如何标记某个质点？

因为质点一直在移动，不能用“它现在在哪里”来给它永久命名。

所以用它在初始时刻 $t=0$ 的位置

$$
\vec r_0
$$

来标记它。

以后该质点的位置写成：

$$
\vec r=\vec r(\vec r_0,t)
$$

某个物理量写成：

$$
\varphi_L=\varphi_L(\vec r_0,t)
$$

这里：

- $\vec r_0$ 决定“是哪一个质点”
- $t$ 决定“现在是什么时刻”

#### 海洋学例子：漂流浮标

把一个漂流浮标丢进海里：

- 浮标跟着海流运动
- 它的位置随时间变化
- 我们追踪同一个浮标的轨迹

这就是典型的 Lagrangian 思想。

---

### 欧拉观点

Eulerian viewpoint 的着眼点是：

> **空间中的固定位置。**

在空间中固定一个位置

$$
\vec r=(x,y,z)
$$

然后研究不同时间经过这里的流体状态。

物理量写成：

$$
\varphi_E=\varphi_E(\vec r,t)
$$

这里：

- $\vec r$ 是固定空间位置
- $t$ 是时间

欧拉观点不关心：

- 现在流过来的水以前在哪里
- 它以后会流到哪里

只关心：

> **此时此刻，在这个位置上的水是什么状态。**

#### 海洋学例子：定点观测

例如在某个固定位置布放海洋仪器：

- 流速仪
- 温度计
- 压力传感器

仪器固定不动，让不同水团不断流过。

这就是 Eulerian 观测。

---

### 两种观点的比较

| | Lagrangian 拉格朗日 | Eulerian 欧拉 |
|---|---|---|
| 着眼点 | 流体质点 | 空间固定点 |
| “谁不动” | 质点编号 $\vec r_0$ 固定 | 空间坐标 $\vec r$ 固定 |
| 描述形式 | $\varphi_L(\vec r_0,t)$ | $\varphi_E(\vec r,t)$ |
| 优点 | 物理意义直观，直接知道粒子从哪里来到哪里去 | 适合建立场方程，工程与观测中最常用 |
| 缺点 | 流体质点数量巨大，直接追踪很困难 | 不能直接给出某一个质点的完整轨迹 |
| 典型应用 | 漂流浮标、污染物扩散、泥沙输运、水团追踪 | 固定海洋仪器、流速 / 压力 / 温度场、N-S 方程 |

:::EXAMPLE
课堂用了“鸭子过桥”的比喻：

**拉格朗日：**

- 坐在小船上
- 认准其中一只鸭子
- 一直跟着这只鸭子走

**欧拉：**

- 站在桥上不动
- 数经过桥下的鸭子
- 上一秒和下一秒经过的可以是不同鸭子

这个比喻非常适合记忆。
:::

> **【Slides 图占位｜Slide 60–63】**  
> 插入“拉格朗日质点轨迹 / 欧拉固定空间点”对比图，以及课堂的“鸭子过桥”示意图。

---

### 随体导数 Material derivative

这是本节最关键的公式之一。

#### 问题从哪里来？

欧拉观点给出的物理量是

$$
\varphi=\varphi(x,y,z,t)
$$

但如果现在问：

> **“跟着某一团水一起运动，这团水感受到的 $\varphi$ 到底变化多快？”**

由于水团本身在移动：

$$
x=x(t),\qquad y=y(t),\qquad z=z(t)
$$

所以沿着这个水团的轨迹，

$$
\varphi
=
\varphi[x(t),y(t),z(t),t]
$$

要对它求时间变化率，就必须使用多元函数的链式法则。

#### 第一步：链式法则

$$
\frac{D\varphi}{Dt}
=
\frac{\partial\varphi}{\partial t}
+
\frac{dx}{dt}\frac{\partial\varphi}{\partial x}
+
\frac{dy}{dt}\frac{\partial\varphi}{\partial y}
+
\frac{dz}{dt}\frac{\partial\varphi}{\partial z}
$$

因为

$$
\frac{dx}{dt}=u,\qquad
\frac{dy}{dt}=v,\qquad
\frac{dz}{dt}=w
$$

所以

$$
\boxed{
\frac{D\varphi}{Dt}
=
\frac{\partial\varphi}{\partial t}
+
u\frac{\partial\varphi}{\partial x}
+
v\frac{\partial\varphi}{\partial y}
+
w\frac{\partial\varphi}{\partial z}
}
$$

又因为

$$
\vec u=(u,v,w)
$$

以及

$$
\nabla\varphi
=
\left(
\frac{\partial\varphi}{\partial x},
\frac{\partial\varphi}{\partial y},
\frac{\partial\varphi}{\partial z}
\right)
$$

因此后三项正好就是：

$$
\vec u\cdot\nabla\varphi
$$

最终得到矢量形式：

$$
\boxed{
\frac{D\varphi}{Dt}
=
\frac{\partial\varphi}{\partial t}
+
(\vec u\cdot\nabla)\varphi
}
$$

其中 $\varphi$ 可以是：

- 温度
- 压强
- 密度
- 盐度
- 速度分量
- 其他流体物理量

#### 为什么叫“随体导数”？

因为

$$
\frac{D\varphi}{Dt}
$$

描述的是：

> **跟着某一个流体质点一起运动时，这个质点实际经历的物理量变化率。**

---

### 当地导数与迁移导数

随体导数可以分成两部分：

$$
\frac{D\varphi}{Dt}
=
\underbrace{\frac{\partial\varphi}{\partial t}}_{\text{当地导数}}
+
\underbrace{(\vec u\cdot\nabla)\varphi}_{\text{迁移 / 对流导数}}
$$

#### 1. 当地导数 Local derivative

$$
\frac{\partial\varphi}{\partial t}
$$

含义：

> 固定在同一个空间位置，观察该点的物理量怎样随时间变化。

如果 $\varphi=T$：

$$
\frac{\partial T}{\partial t}
$$

就是固定观测点的水温随时间变化率。

:::EXAMPLE
课堂例子：

假设水完全不流动，但太阳持续照射。

即使

$$
u=v=w=0
$$

这个位置的水仍然会因为太阳加热而升温，因此

$$
\frac{\partial T}{\partial t}>0
$$

这就是当地变化。
:::

---

#### 2. 迁移导数 / 对流导数 Advective derivative

$$
(\vec u\cdot\nabla)\varphi
$$

展开：

$$
u\frac{\partial\varphi}{\partial x}
+
v\frac{\partial\varphi}{\partial y}
+
w\frac{\partial\varphi}{\partial z}
$$

含义：

> 因为流体本身在运动，把别处不同的物理量“搬运”到这里，从而引起变化。

它必须同时具备：

1. **有空间梯度**
2. **有跨梯度方向的流动**

只有速度而没有空间差异，搬过来的东西都一样，不会产生对流变化。

只有空间差异而没有流动，也没有东西被搬运过来。

:::EXAMPLE
课堂用了两个非常直观的例子。

**上游有温泉：**

- 上游水温高
- 下游观测点较冷
- 水流把高温水带到下游

于是观测点升温，这部分属于 **对流项**。

**上游有冰川融水：**

- 冰川融水温度低
- 冷水被流动带到观测点
- 观测点因此降温

这同样属于对流变化。
:::

---

#### 两部分可以相互抵消

非常重要：

$$
\frac{DT}{Dt}=0
$$

并不意味着

$$
\frac{\partial T}{\partial t}=0
$$

和

$$
(\vec u\cdot\nabla)T=0
$$

分别都成立。

完全可能出现：

- 当地太阳加热：

$$
\frac{\partial T}{\partial t}>0
$$

- 同时冰川冷水被输送过来：

$$
(\vec u\cdot\nabla)T<0
$$

两者恰好抵消：

$$
\frac{DT}{Dt}=0
$$

所以一个水团的总变化率要看 **局地变化 + 输运变化** 的共同结果。

:::TIP
建议把随体导数背成一句话：

> **我站在这里看到的变化 + 水流从别处带来的变化 = 跟着这团水真正经历的变化。**
:::

---

### 流线、迹线与染色线

流场有三种常见的几何描述。

#### 1. 流线 Streamline

定义：

> 在某一瞬间，空间中处处与当地速度矢量相切的曲线。

特点：

- 描述某一时刻的 **速度场几何结构**
- 是一张瞬时“快照”
- 并不一定是某个真实质点曾经走过的轨迹

二维中可写为

$$
\frac{dx}{u}
=
\frac{dy}{v}
$$

三维中：

$$
\frac{dx}{u}
=
\frac{dy}{v}
=
\frac{dz}{w}
$$

#### 2. 迹线 Pathline

定义：

> 单个流体质点在连续时间中的真实运动轨迹。

这就是典型的 Lagrangian 描述。

如果质点位置为

$$
\vec r(t)
$$

则满足

$$
\frac{d\vec r}{dt}
=
\vec u(\vec r,t)
$$

把不同时间的位置连起来，就是该质点的迹线。

#### 3. 染色线 / 脉线 Streakline

定义：

> 某一给定时刻，所有曾经经过同一个固定空间点的流体质点所组成的曲线。

经典实验：

- 在固定点连续滴入染料
- 某一时刻拍照
- 照片上所有染料所在的线，就是 streakline

#### 三者什么时候相同？

若流动为 **定常流 / 稳态流**：

$$
\frac{\partial\vec u}{\partial t}=0
$$

则：

$$
\boxed{
\text{streamline}
=
\text{pathline}
=
\text{streakline}
}
$$

若为 **非定常流**，三者通常不同。

> **【Slides 图占位｜Slide 68】**  
> 插入 streamline / pathline / streakline 三图对比。建议在图下注明：“稳态流三者重合，非稳态流一般不同”。

---

## 第二节 连续性方程

### 连续性方程的物理本质

连续性方程来自最基本的物理原则：

> **质量守恒。**

物质不能凭空产生，也不能凭空消失。

因此，对于任意一团流体：

- 如果跟着这团水一起走，它的总质量不会改变
- 如果固定看一个空间区域，区域内质量的改变一定来自边界上的净流入 / 净流出

这两个视角分别对应：

1. Lagrangian
2. Eulerian

最终必须得到同一个局地方程。

---

### 拉格朗日观点下的推导

#### Step 1：选定一团“固定身份”的流体质点

选一个随流体一起运动、一起变形的物质体积

$$
V(t)
$$

它的边界也跟着流体走。

关键：

> 框的形状可以改变，但里面始终是 **同一批流体质点**。

因此这团流体的总质量是

$$
m
=
\iiint_{V(t)}
\rho\,dV
$$

由于质量守恒：

$$
\boxed{
\frac{Dm}{Dt}=0
}
$$

---

#### Step 2：把质量守恒写成体积分

课堂课件直接写成：

$$
\frac{Dm}{Dt}
=
\iiint_{V(t)}
\left[
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
\right]dV
=
0
$$

这里的括号里有两部分：

$$
\frac{\partial\rho}{\partial t}
$$

表示固定位置密度的局地变化；

$$
\nabla\cdot(\rho\vec u)
$$

表示质量通量的净发散。

:::NOTE
为便于理解，课件中这一步可以看成一个“移动控制体”的输运关系：

> **物质体内部总质量的变化 = 内部局地变化 + 边界随流体运动造成的输运效果。**

因为这个控制体本身就是跟着流体一起跑的，所以它始终包住同一批质点。
:::

---

#### Step 3：利用“任意体积”条件

上式对 **任意** 物质体积 $V(t)$ 都成立：

$$
\iiint_{V(t)}
\left[
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
\right]dV
=
0
$$

如果括号内在某处不等于 0，就总能选一个足够小的控制体只包住那一小块区域，使积分不为 0。

因此只能有：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
=
0
}
$$

这就是连续性方程。

> **【Slides 图占位｜Slide 69–71】**  
> 插入“随流体变形的物质体”示意图：$t$ 时刻与 $t+\Delta t$ 时刻形状不同，但框内始终是同一批质点。

---

### 欧拉观点下的推导

欧拉观点更适合直接理解“固定控制体”。

#### Step 1：取一个固定不动的控制体

取空间中固定的体积

$$
V
$$

它的边界

$$
A=\partial V
$$

也固定不动。

这一回：

- 框不动
- 水不断从框中流进流出

所以框内“是哪一批质点”会不断改变。

---

#### Step 2：写出控制体内部质量

控制体内总质量：

$$
M
=
\iiint_V\rho\,dV
$$

因为 $V$ 固定，所以单位时间的质量变化为

$$
\frac{dM}{dt}
=
\iiint_V
\frac{\partial\rho}{\partial t}
\,dV
$$

---

#### Step 3：计算穿过边界的质量通量

速度为 $\vec u$。

体积流量微元：

$$
\vec u\cdot d\vec A
$$

乘上密度 $\rho$：

$$
\rho\vec u\cdot d\vec A
$$

就是质量流量微元。

对整个闭合边界积分：

$$
\iint_A
\rho\vec u\cdot d\vec A
$$

取 **外法向为正**，因此它代表：

> **净向外质量通量。**

所以：

- 正值：净流出
- 负值：净流入

---

#### Step 4：质量守恒

控制体内质量增加率 = 净流入率。

而“净流入” = “负的净流出”，所以：

$$
\boxed{
\iiint_V
\frac{\partial\rho}{\partial t}
\,dV
=
-
\iint_A
\rho\vec u\cdot d\vec A
}
$$

这个负号非常重要。

---

#### Step 5：用高斯散度定理

由

$$
\iint_A
\rho\vec u\cdot d\vec A
=
\iiint_V
\nabla\cdot(\rho\vec u)
\,dV
$$

所以

$$
\iiint_V
\frac{\partial\rho}{\partial t}
\,dV
=
-
\iiint_V
\nabla\cdot(\rho\vec u)
\,dV
$$

移到同一边：

$$
\iiint_V
\left[
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
\right]dV
=
0
$$

因为这对任意固定控制体 $V$ 都成立：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
=
0
}
$$

与拉格朗日观点得到完全相同的结果。

> **【Slides 图占位｜Slide 72–75】**  
> 插入“固定控制体：质点流入与流出”的示意图，并标出外法向 $d\vec A$ 与质量通量 $\rho\vec u\cdot d\vec A$。

---

### 连续性方程的等价形式

最基本形式：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
=
0
}
$$

利用乘积求导公式：

$$
\nabla\cdot(\rho\vec u)
=
\vec u\cdot\nabla\rho
+
\rho\nabla\cdot\vec u
$$

所以：

$$
\frac{\partial\rho}{\partial t}
+
\vec u\cdot\nabla\rho
+
\rho\nabla\cdot\vec u
=
0
$$

前两项正好构成密度的随体导数：

$$
\frac{D\rho}{Dt}
=
\frac{\partial\rho}{\partial t}
+
\vec u\cdot\nabla\rho
$$

因此：

$$
\boxed{
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\vec u
=
0
}
$$

再除以 $\rho$：

$$
\boxed{
\frac{1}{\rho}
\frac{D\rho}{Dt}
+
\nabla\cdot\vec u
=
0
}
$$

这几个形式表达的是同一件事。

#### 如何理解最后一个式子？

$$
\frac{1}{\rho}\frac{D\rho}{Dt}
=
-\nabla\cdot\vec u
$$

如果

$$
\nabla\cdot\vec u>0
$$

流体微团有膨胀趋势，则

$$
\frac{D\rho}{Dt}<0
$$

密度下降。

如果

$$
\nabla\cdot\vec u<0
$$

流体微团有压缩趋势，则

$$
\frac{D\rho}{Dt}>0
$$

密度升高。

这正好把“散度”和“密度变化”连接起来。

---

### 不可压缩流体

课堂最后引入假设：

> 流体不可压缩。

它表示跟着流体质点运动时，该质点的密度不因压缩 / 膨胀发生改变：

$$
\boxed{
\frac{D\rho}{Dt}=0
}
$$

代入

$$
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\vec u
=
0
$$

得到

$$
\rho\nabla\cdot\vec u=0
$$

因为海水密度 $\rho\neq 0$：

$$
\boxed{
\nabla\cdot\vec u=0
}
$$

在笛卡尔坐标系下：

$$
\boxed{
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}
=
0
}
$$

这就是不可压缩流体最常见的连续性方程。

#### 物理意义

任取一个很小的流体微团：

> 单位时间从各个方向流出去的总体积，必须和流进来的总体积相等。

也就是：

$$
\text{净体积通量}=0
$$

因此一个不可压缩流体微团不能因为流动而凭空变大或变小。

:::WARNING
“不可压缩”对应的是

$$
\frac{D\rho}{Dt}=0
$$

也就是 **跟着流体质点走，密度不变**。

不要直接把它写成

$$
\frac{\partial\rho}{\partial t}=0
$$

后者只表示某一个固定空间点的密度不随时间变化，物理意义不同。

另外，课件最后一页的随体导数分母排版混用了 $\partial t$；结合前文定义，这里应理解为

$$
\frac{D\rho}{Dt}
$$

而非 $\frac{D\rho}{\partial t}$。
:::

> **【Slides 图占位｜Slide 76–77】**  
> 插入连续性方程从一般形式化到不可压缩形式的公式页，重点框出  
> $\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\vec u)=0$  
> 和  
> $\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}=0$。

---

## 本节知识链

把本节所有内容串起来：

### 1. 为什么先讲 $\nabla$？

因为海洋里的物理量都是“场”。

我们需要描述：

- 标量如何在空间变化 $\rightarrow$ **梯度**
- 流体是否在发散 / 汇聚 $\rightarrow$ **散度**
- 流体是否在旋转 $\rightarrow$ **旋度**

于是自然出现：

$$
\nabla\varphi,\qquad
\nabla\cdot\vec u,\qquad
\nabla\times\vec u
$$

### 2. 为什么讲 Gauss 定理？

连续性方程要把：

> **边界上的流入 / 流出**

转化为：

> **控制体内部的局地变化**

Gauss 定理正好完成：

$$
\text{surface flux}
\longleftrightarrow
\text{volume divergence}
$$

即：

$$
\iint_{\partial V}\rho\vec u\cdot d\vec S
=
\iiint_V\nabla\cdot(\rho\vec u)dV
$$

### 3. 为什么讲 Lagrangian / Eulerian？

物理守恒最直观的说法是 Lagrangian：

> 跟着一团水走，它的质量不变。

但真正建立偏微分方程更方便的是 Eulerian：

> 在固定空间点上描述 $\rho(x,y,z,t)$ 和 $\vec u(x,y,z,t)$。

随体导数

$$
\frac{D}{Dt}
=
\frac{\partial}{\partial t}
+
\vec u\cdot\nabla
$$

就是连接这两个视角的桥梁。

### 4. 最终得到什么？

一般连续性方程：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\vec u)
=
0
}
$$

等价形式：

$$
\boxed{
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\vec u
=
0
}
$$

不可压缩海水：

$$
\boxed{
\nabla\cdot\vec u=0
}
$$

也就是：

$$
\boxed{
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}
=
0
}
$$

---

## 易错点整理

### 1. $\nabla\cdot\vec a$ 和 $\vec a\cdot\nabla$ 不一样

$$
\nabla\cdot\vec a
$$

是散度，算出来是一个标量。

$$
\vec a\cdot\nabla
$$

是微分算子，需要继续作用于后面的函数。

---

### 2. 梯度、散度、旋度的输入输出要记清

| 运算 | 输入 | 输出 | 物理意义 |
|---|---|---|---|
| $\nabla\varphi$ | 标量 | 矢量 | 最大增长方向 |
| $\nabla\cdot\vec a$ | 矢量 | 标量 | 发散 / 汇聚 |
| $\nabla\times\vec a$ | 矢量 | 矢量 | 局地旋转 |

一句话：

> **标量做梯度变矢量；矢量做散度变标量；矢量做旋度仍是矢量。**

---

### 3. Gradient 指向“增大最快”，不是“减小最快”

如果图上高值在左、低值在右：

$$
\nabla T
$$

应指向左。

它垂直于等值线。

---

### 4. Divergence 看“净流出”

取外法向为正：

- 净流出 $>$ 0 $\rightarrow$ 正散度
- 净流入 $>$ 0 $\rightarrow$ 负散度

---

### 5. Curl 的方向不在二维旋转平面内

二维流动在 $x-y$ 平面旋转时：

$$
\nabla\times\vec u
$$

通常沿 $z$ 方向。

用右手定则判断正负。

---

### 6. 当地导数与随体导数不要混

$$
\frac{\partial T}{\partial t}
$$

是固定位置的温度变化。

$$
\frac{DT}{Dt}
$$

是跟着水团一起走时，水团实际经历的温度变化。

两者之间差一个对流项：

$$
\frac{DT}{Dt}
=
\frac{\partial T}{\partial t}
+
\vec u\cdot\nabla T
$$

---

### 7. 稳态不等于“水不动”

稳态只表示：

$$
\frac{\partial}{\partial t}=0
$$

流场可以有很大的速度，只要每个固定空间点的场量不随时间改变即可。

---

### 8. 连续性方程里的负号来自“外法向为正”

控制体边界通量

$$
\iint_A\rho\vec u\cdot d\vec A
$$

定义的是 **净流出**。

而控制体质量增加来自 **净流入**，因此：

$$
\frac{dM}{dt}
=
-\text{净流出}
$$

---

### 9. “不可压缩”不要写成 $\partial\rho/\partial t=0$

课堂最后真正需要的是：

$$
\frac{D\rho}{Dt}=0
$$

再由连续性方程推出：

$$
\nabla\cdot\vec u=0
$$

这条关系后面会反复使用。

---

## 一句话总结

> 本节真正建立的是一条从 **“跟着水团看质量不变”** 到 **“固定空间中 $\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\vec u)=0$”** 的桥梁；Nabla 算子、Gauss 定理、Lagrangian / Eulerian 观点和随体导数，全部是在为这一步服务。
