---
title: Oceanography-Lesson11：基本方程复习与尺度分析
published: 2026-10-19
description: 球坐标系、海水运动基本方程组与边界条件复习；第五章第一节尺度分析、Rossby数、Ekman数、Peclet数；静压、f平面、β平面与Boussinesq近似
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 本次课程的重要要求（作业 / 考试）

:::WARNING
**第三—五章作业（第二次）**

- **提交时间**：**期中考试之前**交给**助教**。老师于录音 **01:38:20—01:38:33** 说明；未给出具体日期、平台或文件格式，须以随后发布的通知为准。
- **作业范围**：第三—五章，共 **7 题**，原题完整列于文末「[作业原题](#第三五章作业原题第二次)」，包含受力、控制方程、热传导、边界条件、平均方程、尺度分析、几种近似及其适用条件。
- **考试提示①**（00:19:29—00:19:39）：**球坐标系下复杂的整组动量方程无须背诵**，但应知道其各项的来源、含义及与局地直角坐标系的区别。
- **考试提示②**（00:28:42—00:28:52）：局地直角坐标动量方程中的**非传统科氏力项** $-\tilde f w$ 和 $+\tilde f u$，作业及考试中可以同时保留，也可以同时省略；**三分量的处理须保持同一近似方案**。
- **考试提示③**（01:18:23—01:19:21）：无量纲数重点掌握「**哪一项与哪一项之比**」，从方程估算并推回定义，比死记公式更重要。
:::

![教师公布的第三—五章作业七题](/images/physical-oceanography/lesson10/slide_81.jpg)

## 概述

本堂课可分为两个阶段：

1. **00:04—00:42，复习前面所学**：局地直角与球坐标、七个未知量对应的基本方程组、海面和海底边界条件、湍流时间平均方程。
2. **00:42—01:38，第五章新课**：为什么要简化基本方程 → 怎样做尺度分析 → 由连续方程获得垂向速度尺度 → 对水平动量、垂直动量和热传导方程分别比较量级 → 得到四种常用近似。

> **本节的主线**：**完整方程组包含很多物理过程**，但特定海水运动只由其中部分机制主导。利用特征尺度比较每一项的数量级，才能有依据地忽略次要项，得到可以求解、同时保留主要物理的简化方程。

以大尺度海洋环流为例：

$$
\boxed{\text{连续方程}\Rightarrow W\sim\frac DL U}
\quad\longrightarrow\quad
\boxed{Ro=\frac{U}{FL}\ll1}
\quad\longrightarrow\quad
\boxed{\text{垂向近似静压平衡}}
$$

其中 $L,D$ 分别是水平、垂向长度尺度，$U,W$ 分别是水平、垂向速度尺度，$F$ 是科氏参数的特征值。每个结论均有**适用条件**，在湍流、强对流或小尺度运动中需要重新估算。

---

## 目录

- [一、上节课知识复习](#一上节课知识复习)
  - [局地直角坐标系与球坐标系](#11-局地直角坐标系与球坐标系)
  - [局地直角坐标系的运动方程](#12-局地直角坐标系的运动方程)
  - [海水运动的七个基本方程](#13-海水运动的七个基本方程)
  - [边界条件与时间平均](#14-边界条件与时间平均)
- [二、第五章第一节：尺度分析](#二第五章第一节尺度分析)
  - [为什么要尺度分析](#21-为什么要尺度分析)
  - [特征尺度、无量纲化及导数的量级](#22-特征尺度无量纲化及导数的量级)
  - [连续性方程：纵横比与垂向速度](#23-连续性方程纵横比与垂向速度)
  - [水平动量方程的尺度分析](#24-水平动量方程的尺度分析)
  - [Rossby 数、时变 Rossby 数与 Ekman 数](#25-rossby-数时变-rossby-数与-ekman-数)
  - [垂直动量方程的尺度分析](#26-垂直动量方程的尺度分析)
  - [热传导方程与 Peclet 数](#27-热传导方程与-peclet-数)
- [三、第五章第二节：常用近似](#三第五章第二节常用近似)
  - [静压近似](#31-静压近似hydrostatic-approximation)
  - [f 平面近似](#32-f-平面近似f-plane)
  - [β 平面近似](#33-β-平面近似β-plane)
  - [Boussinesq 近似](#34-boussinesq-近似)
- [四、关键结论、辨析及自测](#四关键结论辨析及自测)
- [第三—五章作业原题（第二次）](#第三五章作业原题第二次)

---

## 一、上节课知识复习

### 1.1 局地直角坐标系与球坐标系

**局地直角坐标系**：以某个海区为参考点，令 $x$ 指东、$y$ 指北、$z$ 指上，相应速度为 $(u,v,w)$。适合海域范围较小、地球曲率对问题影响可以忽略的情形。

**球坐标系**：用经度 $\lambda$、纬度 $\varphi$、地心距离 $r$ 表示位置；各方向单位矢量随空间位置变化。适合描述全球大洋及曲率不可忽略的大尺度运动。

![两套坐标系的空间几何关系](/images/physical-oceanography/lesson10/slide_02.jpg)

![球坐标中的经纬度、径向方向与坐标面](/images/physical-oceanography/lesson10/slide_07.jpg)

两者对应关系（把地球视作球体）：

$$
\begin{cases}
x=r\cos\varphi\cos\lambda,\\
y=r\cos\varphi\sin\lambda,\\
z=r\sin\varphi.
\end{cases}
$$

**为什么经度变化引起的速度要乘 $\cos\varphi$？** 纬圈半径为 $r\cos\varphi$，在时间 $dt$ 内经度变化 $d\lambda$ 对应弧长 $r\cos\varphi\,d\lambda$，于是：

$$
\boxed{u=r\cos\varphi\frac{d\lambda}{dt}},\qquad
\boxed{v=r\frac{d\varphi}{dt}},\qquad
\boxed{w=\frac{dr}{dt}}.
$$

![球坐标与直角坐标的转换关系](/images/physical-oceanography/lesson10/slide_08.jpg)

**重要差异：球坐标的微分算子含有几何尺度因子。** 例如标量 $a$ 的梯度为

$$
\nabla a=\frac{1}{r\cos\varphi}\frac{\partial a}{\partial\lambda}\boldsymbol e_\lambda
+\frac1r\frac{\partial a}{\partial\varphi}\boldsymbol e_\varphi
+\frac{\partial a}{\partial r}\boldsymbol e_r.
$$

速度散度为

$$
\nabla\cdot\boldsymbol V=
\frac{1}{r\cos\varphi}\frac{\partial u}{\partial\lambda}
+\frac{1}{r\cos\varphi}\frac{\partial(v\cos\varphi)}{\partial\varphi}
+\frac{1}{r^2}\frac{\partial(r^2w)}{\partial r}.
$$

因而球坐标质量连续方程为

$$
\frac{\partial\rho}{\partial t}+
\frac{1}{r\cos\varphi}\frac{\partial(\rho u)}{\partial\lambda}
+\frac{1}{r\cos\varphi}\frac{\partial(\rho v\cos\varphi)}{\partial\varphi}
+\frac1{r^2}\frac{\partial(r^2\rho w)}{\partial r}=0.
$$

![球坐标梯度、散度和连续方程（课件）](/images/physical-oceanography/lesson10/slide_09.jpg)

:::TIP
**理解曲率项的关键**：局地直角系中的 $\boldsymbol i,\boldsymbol j,\boldsymbol k$ 在同一局地坐标框架内固定；球坐标的方向基矢会随着位置改变。对速度矢量求导时，还要考虑**基矢自身的变化**，因而会出现如 $uv\tan\varphi/r$、$u^2/r$ 等曲率项。

老师明确表示：复杂的球坐标动量方程**了解即可，不要求整组背诵**。课件第 10—11 张保留完整形式供查阅。
:::

![球坐标三方向的完整运动方程，供辨认曲率项](/images/physical-oceanography/lesson10/slide_10.jpg)

| 对比 | 局地直角坐标系 | 球坐标系 |
|---|---|---|
| 几何 | 局部切平面 | 球面与径向坐标 |
| 基矢 | 在局地近似中固定 | 随位置变化 |
| 推导与计算 | 形式较简洁 | 包含更多曲率与尺度因子 |
| 主要适用情形 | 区域海洋 | 全球大洋、经纬跨度较大的环流 |
| 课件举例 | ROMS、区域 POM | 全球 MITgcm、CESM 等框架 |

![教师对两种坐标系适用范围的比较](/images/physical-oceanography/lesson10/slide_12.jpg)

### 1.2 局地直角坐标系的运动方程

#### （1）随体导数与惯性项

令 $\boldsymbol V=u\boldsymbol i+v\boldsymbol j+w\boldsymbol k$，随体导数为

$$
\boxed{\frac{D}{Dt}=\frac{\partial}{\partial t}+u\frac{\partial}{\partial x}+v\frac{\partial}{\partial y}+w\frac{\partial}{\partial z}}.
$$

它衡量**跟着同一海水微团移动时**所观察到的变化。例如 $u$ 分量的加速度：

$$
\underbrace{\frac{Du}{Dt}}_{\text{某一微团的加速度}}=
\underbrace{\frac{\partial u}{\partial t}}_{\text{局地变化}}
+\underbrace{u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}+w\frac{\partial u}{\partial z}}_{\text{平流（对流）加速度}}.
$$

:::EXAMPLE
**例：流场不随时间变，海水微团还能加速吗？**

设流速随 $x$ 增大而变大，虽然 $\partial u/\partial t=0$，海水微团沿 $x$ 前进时会进入速度更快的区域，因而 $u\partial u/\partial x\ne0$。这说明**稳态流也可以有非零随体加速度**。
:::

#### （2）重力与科氏力的局地分量

取地理纬度 $\varphi$，地球自转角速度 $\Omega$：

$$
\boldsymbol\Omega=\Omega\cos\varphi\,\boldsymbol j+\Omega\sin\varphi\,\boldsymbol k,
\qquad\boldsymbol g=-g\boldsymbol k.
$$

令 $f=2\Omega\sin\varphi$（通常称**科氏参数**）、$\tilde f=2\Omega\cos\varphi$，则

$$
\boxed{-2\boldsymbol\Omega\times\boldsymbol V
=(fv-\tilde f w)\boldsymbol i-fu\boldsymbol j+\tilde f u\boldsymbol k}.
$$

用行列式验证：

$$
-2\boldsymbol\Omega\times\boldsymbol V
=-2\begin{vmatrix}
\boldsymbol i&\boldsymbol j&\boldsymbol k\\
0&\Omega\cos\varphi&\Omega\sin\varphi\\
u&v&w
\end{vmatrix}.
$$

![地球自转角速度投影与科氏力三分量](/images/physical-oceanography/lesson10/slide_05.jpg)

必须记住正负号：$x$ 方向 $+fv-\tilde f w$；$y$ 方向 $-fu$；$z$ 方向 $+\tilde f u$。其中 $\tilde f$ 相关两项常被称为**非传统科氏力项**。课上特别强调：**采用保留或忽略这组项时，书写要前后一致。**

#### （3）动量方程

课程中采用的矢量形式（$\gamma$ 是运动黏性系数；$\phi_T$ 是引潮势，以下沿用课件符号）：

$$
\boxed{\frac{D\boldsymbol V}{Dt}=-\frac1\rho\nabla p
-2\boldsymbol\Omega\times\boldsymbol V+\boldsymbol g
+\gamma\nabla^2\boldsymbol V-\nabla\phi_T}.
$$

分别表示：惯性加速度 = 压强梯度力 + 科氏力 + 重力 + 分子黏性力 + 引潮势产生的单位质量体力。

三个分量写为

$$
\begin{aligned}
\frac{Du}{Dt}&=-\frac1\rho\frac{\partial p}{\partial x}+fv-\tilde f w+\gamma\nabla^2u-\frac{\partial\phi_T}{\partial x},\\
\frac{Dv}{Dt}&=-\frac1\rho\frac{\partial p}{\partial y}-fu+\gamma\nabla^2v-\frac{\partial\phi_T}{\partial y},\\
\frac{Dw}{Dt}&=-\frac1\rho\frac{\partial p}{\partial z}+\tilde f u-g+\gamma\nabla^2w-\frac{\partial\phi_T}{\partial z}.
\end{aligned}
$$

![直角坐标系动量方程的完整分量形式](/images/physical-oceanography/lesson10/slide_06.jpg)

### 1.3 海水运动的七个基本方程

老师上课请同学回答的核心题：**海水层流基本方程组是哪七个方程、七个未知量是什么？**

七个基本未知量可取

$$
\boxed{u,\ v,\ w,\ p,\ \rho,\ s,\ \theta}.
$$

其中 $s$ 为盐度，$\theta$ 为课件采用的温度变量。方程数的统计：

| 方程类别 | 数目 | 控制的问题 |
|---|---:|---|
| 动量方程 | 3 | $u,v,w$ 怎样因受力而改变 |
| 质量连续方程 | 1 | 质量是否守恒 |
| 盐度扩散方程 | 1 | 盐度怎样平流、扩散 |
| 热传导方程 | 1 | 温度怎样平流、扩散 |
| 海水状态方程 | 1 | 密度怎样依赖温度、盐度和压强 |
| **合计** | **7** | **七方程、七未知量** |

质量守恒（可压缩的一般形式）：

$$
\boxed{\frac{D\rho}{Dt}+\rho\nabla\cdot\boldsymbol V=0}
\qquad\Longleftrightarrow\qquad
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\boldsymbol V)=0.
$$

若已采用不可压缩近似，则 $D\rho/Dt\simeq0$，体积连续方程简化为 $\nabla\cdot\boldsymbol V=0$。盐、热的课堂理想化表达为

$$
\begin{aligned}
\frac{Ds}{Dt}&=k_D\nabla^2s,\\
\frac{D\theta}{Dt}&=k_\theta\nabla^2\theta,\\
\rho&=\rho(\theta,s,p).
\end{aligned}
$$

这里 $k_D,k_\theta$ 分别是标量扩散系数；实际海洋中它们可因方向、湍流强度而不同。

![老师复习的层流矢量基本方程组](/images/physical-oceanography/lesson10/slide_16.jpg)

**答题注意**：$\boldsymbol V$ 或 $\boldsymbol U$ 可以作为**整个三维速度矢量**的记号，但要加粗或加箭头，并且全篇统一；单独 $u,v$ 则表示东西向和南北向的速度分量。老师在 00:26:54—00:27:28 特别强调这一点。

### 1.4 边界条件与时间平均

#### （1）自由海面的运动学边界条件

设海面 $z=\zeta(x,y,t)$，海表面微团始终沿着海面移动（无水体质量交换），写成

$$
F=z-\zeta(x,y,t)=0,\quad\frac{DF}{Dt}=0,
$$

逐项展开：

$$
\boxed{\frac{\partial\zeta}{\partial t}
+u_s\frac{\partial\zeta}{\partial x}
+v_s\frac{\partial\zeta}{\partial y}-w_s=0}.
$$

三项的物理意义：$\partial_t\zeta$ 是海面高度的局地变化；$\boldsymbol V_{H,s}\cdot\nabla_H\zeta$ 是沿海面坡度的水平平流；$w_s$ 是自由表面水体的垂直速度。海面高度随这两种运动共同演变。

若考虑蒸发、降雨等净淡水通量 $b$，课件约定的符号下：

$$
\frac{\partial\zeta}{\partial t}+\boldsymbol V_{H,s}\cdot\nabla_H\zeta-w_s=-\frac b\rho.
$$

**注意符号约定**：课件 $b$ 代表铅直方向单位面积、单位时间上的纯水通量；实际使用时应明确“向上为正”还是“向下为正”。上式与课堂 PPT 的号数保持一致。

#### （2）海底、内界面动力学边界条件

固定海底 $z=-h(x,y)$，不可穿透条件为

$$
\boxed{w_b=-u_b\frac{\partial h}{\partial x}-v_b\frac{\partial h}{\partial y}}
\qquad\Longleftrightarrow\qquad
\boldsymbol V_{H,b}\cdot\nabla h+w_b=0.
$$

海水内部介质交界面两侧的应力必须平衡（不考虑额外界面力时）：

$$
\boxed{\boldsymbol\sigma_1\boldsymbol n_1+\boldsymbol\sigma_2\boldsymbol n_2=\boldsymbol0}.
$$

若两侧使用**同一个方向**的法向量，则也可写成牵引力连续 $\boldsymbol\sigma_1\boldsymbol n=\boldsymbol\sigma_2\boldsymbol n$。课堂 PPT 用 $(\boldsymbol P\cdot\boldsymbol n)_1=(\boldsymbol P\cdot\boldsymbol n)_2$ 表示两侧同向法线下的对应关系。应力张量含**各向同性压力**以及**黏性剪切应力**。

![海面、海底和内界面的平均化边界条件](/images/physical-oceanography/lesson10/slide_27.jpg)

#### （3）海面的盐量与热量边界条件

- **盐度**：蒸发带走淡水通常使海水盐度升高；降雨输入淡水往往降低表层盐度。因此即使盐不直接进入大气，淡水通量也会影响海表盐度边界条件。
- **温度**：需考虑海气界面的热量通量 $Q$，它控制海表热通量边界条件；$\rho c_p$ 用来将热通量转换成温度变化对应的量。
- **湍流化处理**：用湍流盐扩散系数和湍流热扩散系数表示相应的通量，水平与垂向系数可分别记为 $K_{sx},K_{sy},K_{sz}$ 及 $K_{\theta x},K_{\theta y},K_{\theta z}$。

以课堂第 28 张课件的约定为例，海面时间平均盐通量条件可整理为

$$
K_{sx}\frac{\partial s}{\partial x}\frac{\partial\zeta}{\partial x}
+K_{sy}\frac{\partial s}{\partial y}\frac{\partial\zeta}{\partial y}
-K_{sz}\frac{\partial s}{\partial z}=-\frac{b}{\rho}s.
$$

实际课程中还需按具体热通量 $Q$ 的正方向写出对应的海面热量通量边界条件。

![湍流盐、热通量替代分子通量的边界条件（课件）](/images/physical-oceanography/lesson10/slide_28.jpg)

#### （4）为什么要对方程做时间平均？

老师复习了**雷诺分解**：

$$
u=\overline u+u',\quad v=\overline v+v',\quad w=\overline w+w'.
$$

平均流速代表较慢变化的背景流，脉动 $u',v',w'$ 代表湍流偏离。将它们代入原方程并取平均后，非线性项会出现额外的相关量，例如 $\overline{u'v'}$，体现**雷诺应力**；盐、热的脉动也产生湍流输运通量。

例如（此处展示闭合形式的典型做法）：

$$
\frac{\partial\overline u}{\partial t}
+\overline{\boldsymbol V}\cdot\nabla\overline u-f\overline v
=-\frac{1}{\rho}\frac{\partial\overline p}{\partial x}
+\frac{\partial}{\partial x}\left(A_x\frac{\partial\overline u}{\partial x}\right)
+\frac{\partial}{\partial y}\left(A_y\frac{\partial\overline u}{\partial y}\right)
+\frac{\partial}{\partial z}\left(A_z\frac{\partial\overline u}{\partial z}\right).
$$

这里 $A_x,A_y,A_z$ 用于参数化湍流黏性输运；这与原始分子黏性系数的物理来源不同。**闭合需要额外假设**，实际雷诺应力不必总能准确地写成简单梯度形式。

![时间平均的动量方程、连续方程](/images/physical-oceanography/lesson10/slide_23.jpg)

:::NOTE
**与本节新课的衔接**：时间平均已经把高速湍流脉动的作用移入湍流输运项，却仍然保留了惯性力、科氏力、压强梯度力、摩擦力等很多机制。因此还需要下面的**尺度分析**，进一步判断哪些项可以近似忽略。
:::

---

## 二、第五章第一节：尺度分析

### 2.1 为什么要尺度分析？

课件第五章题为**「基本方程的简化与应用」**，章内四节：

1. 基本方程的尺度分析和简化（**本节重点**）。
2. 几种常用的近似和假设（本堂课讲到第 4 种开头）。
3. 常用的几种简化方程组（后续课程）。
4. 平均方程与垂向边界层模型（后续课程）。

![第五章章节结构](/images/physical-oceanography/lesson10/slide_30.jpg)

完整方程往往难以解析求解，而实际海洋中的各类运动控制机制不同。例如：

- **海盆尺度环流**：空间跨度很大，变化时间可为数月乃至数年；科氏力及大尺度压强梯度力十分重要。
- **潮汐**：空间范围可能很大，时间尺度却通常取半日或一日等潮汐周期；时间变化项不一定能够省略。
- **小尺度湍流**：空间尺度可到厘米、毫米，时间尺度可到秒甚至更短；惯性和湍流扩散项通常需要保留。

所以尺度分析需要先指明：**研究哪种海水运动、取什么尺度、忽略项与保留项之间相差多少**。如果改变研究对象，原先的简化未必继续成立。

### 2.2 特征尺度、无量纲化及导数的量级

#### （1）特征尺度

**特征尺度（characteristic scale）**：能代表某类运动有关物理量典型大小的数值，通常可取其代表值、平均幅值或最大幅值的量级。它主要服务于**数量级估算**。

假设某物理量 $y$ 的特征尺度是 $Y$，引入无因次量 $y^*$：

$$
\boxed{y=Yy^*},\qquad y^*=O(1).
$$

$O(1)$ 表示数量级约为 1（可以是 0.3、2 等），**不意味着处处等于 1**。课堂 PDF/PPT 中的上横线在这部分表示**无量纲变量**，需与前面雷诺时间平均的上横线区分。本文用上标 $*$ 避免混淆。

课上例子：若某长度在几百米量级，研究量级时可用 $10^2\,\mathrm m$ 代表，不必在尺度分析中区分 401 m 和 402 m。

#### （2）一阶导数为何估算为 $Y/X$？

假设 $y=y(x,t)$，令

$$
y=Yy^*,\qquad x=Xx^*,\qquad t=Tt^*.
$$

由链式法则：

$$
\begin{aligned}
\frac{\partial y}{\partial x}
&=\frac{\partial(Yy^*)}{\partial(Xx^*)}
=Y\frac{\partial y^*}{\partial x^*}\frac{\partial x^*}{\partial x}\\
&=\boxed{\frac{Y}{X}\frac{\partial y^*}{\partial x^*}}.
\end{aligned}
$$

如果 $\partial y^*/\partial x^*=O(1)$，则

$$
\boxed{\frac{\partial y}{\partial x}\sim\frac YX},
\quad
\frac{\partial y}{\partial t}\sim\frac YT.
$$

**二阶导数再对 $x$ 求一次导**：

$$
\frac{\partial^2y}{\partial x^2}=
\frac{Y}{X^2}\frac{\partial^2 y^*}{\partial x^{*2}}
\quad\Rightarrow\quad
\boxed{\frac{\partial^2 y}{\partial x^2}\sim\frac{Y}{X^2}}.
$$

为什么分母是 $X^2$，而分子仍为 $Y$？因为**两次求导都是对同一个变量 $x$ 求导**，每求一次导便多引入一个 $1/X$，$Y$ 只出现一次。老师在 **00:55:12—00:55:47** 明确提醒这个常见错误。

![无量纲化：函数及一、二阶导数的尺度](/images/physical-oceanography/lesson10/slide_46.jpg)

:::WARNING
**数量级估算的前提**：无量纲函数及其导数确实在所选尺度上为 $O(1)$。如存在很薄的边界层或剧烈锋面，导数可很大，应改用边界层厚度等更合适的尺度；不能机械套用 $Y/X$。
:::

#### （3）本课采用的基本尺度

| 物理量 | 特征尺度 | 无量纲写法 | 单位 |
|---|---|---|---|
| 水平坐标 $x,y$ | $L$ | $x=Lx^*,\ y=Ly^*$ | m |
| 垂向坐标 $z$ | $D$ | $z=Dz^*$ | m |
| 时间 $t$ | $T$ | $t=Tt^*$ | s |
| 水平速度 $u,v$ | $U$ | $u=Uu^*,\ v=Uv^*$ | m/s |
| 垂直速度 $w$ | $W$ | $w=Ww^*$ | m/s |
| 科氏参数 $f$ | $F$ | $f=Ff^*$ | $\mathrm{s}^{-1}$ |
| 压强 $p$ | $P$ | $p=Pp^*$ | Pa |

![课程给出的七类基本特征尺度](/images/physical-oceanography/lesson10/slide_53.jpg)

**为什么水平与垂向要取不同尺度？** 对许多大尺度海洋过程，海洋宽度可达数百至数千千米，而水深典型为几千米，因此 $L\gg D$。同时水平速度 $U$ 和垂向速度 $W$ 往往也相差很大。

:::NOTE
**单位核对**：录音在 00:45:52、00:56:31 等处将海盆尺度转写成“$10^5$ 千米”，这一数值超出真实地球上海盆的尺度，可能存在口误或语音识别误差。作数量级演算时必须统一为 SI 单位。例如 $L=10^6\,\mathrm m$（1000 km）、$D=10^3\,\mathrm m$（1 km）是便于说明的**示例尺度**，并非老师限定的唯一取值。
:::

### 2.3 连续性方程：纵横比与垂向速度

#### （1）从不可压缩连续方程出发

对于不可压缩流体：

$$
\boxed{\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}=0}.
$$

按上表代入无量纲变量：

$$
\frac{U}{L}\frac{\partial u^*}{\partial x^*}
+\frac{U}{L}\frac{\partial v^*}{\partial y^*}
+\frac{W}{D}\frac{\partial w^*}{\partial z^*}=0.
$$

假设三个无量纲导数具有可比较的数量级，并且不存在显著抵消造成的退化，得到

$$
\frac UL\sim\frac WD
\quad\Rightarrow\quad
\boxed{W\sim\frac DL U}.
$$

这里的 $\sim$ 表示**数量级相当**；只需比较阶数量，不必数值完全相等。老师举例强调：数量级估计容许几倍差异，但不应把相差数千倍的两个量看成同一尺度。

#### （2）纵横比 $\delta$

定义

$$
\boxed{\delta=\frac DL},\qquad
\boxed{\frac WU\sim\delta}.
$$

于是**海洋越“薄”，相应的大尺度垂向速度一般越小**。

:::EXAMPLE
**例：海盆尺度运动**

取 $L=10^6\,\mathrm m$、$D=10^3\,\mathrm m$、$U=0.1\,\mathrm{m/s}$：

$$
\delta=\frac{10^3}{10^6}=10^{-3},\qquad
W\sim10^{-3}\times0.1=10^{-4}\,\mathrm{m/s}.
$$

垂向特征速度约为水平特征速度的千分之一。

若研究三维各向近似相当的局地湍流，$D\sim L$，则 $\delta\sim1$，无法继续使用 $W\ll U$ 的假设。
:::

![连续方程的尺度替换和纵横比关系](/images/physical-oceanography/lesson10/slide_50.jpg)

> **关键限制**：$W\ll U$ 来自这里的尺度选择、不可压缩连续性及流场变化估计。并非任何海洋运动都具有这个特征；强对流、局地湍流等可违反这一结论。

### 2.4 水平动量方程的尺度分析

老师从**时间平均后的 $x$ 方向动量方程**入手，并作如下处理：

1. 使用 $u=Uu^*$ 等无量纲变量。
2. 大尺度主体海洋中**暂忽略分子黏性力**；保留参数化的**湍流黏性力**。
3. 暂不研究天体引潮势；分开表示水平与垂向湍流摩擦（$A_h,A_z$）。
4. 在本节推导中将 $A_h,A_z$ 暂取常数，以便讨论数量级。

课程使用的代表式可写成（为简洁，省略平均横线）：

$$
\boxed{\begin{aligned}
\frac{\partial u}{\partial t}
+u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}
-fv+f\cot\varphi\,w
=-\frac1\rho\frac{\partial p}{\partial x}
+A_h\left(\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}\right)
+A_z\frac{\partial^2u}{\partial z^2}.
\end{aligned}}
$$

这里 $f\cot\varphi=2\Omega\cos\varphi=\tilde f$（在 $f\ne0$ 且纬度定义适用时），因而 $f\cot\varphi\,w$ 是非传统科氏项。在赤道附近不宜将 $f\cot\varphi$ 按两个因子分别求量级，应直接保留 $\tilde f$ 的有限表达式。

#### （1）逐项估算数量级

| 动量方程中的项 | 估算的特征量 | 原因 |
|---|---|---|
| $\partial u/\partial t$ | $U/T$ | 速度变化量 / 时间尺度 |
| $u\partial_xu$、$v\partial_yu$ | $U^2/L$ | $U\times U/L$ |
| $w\partial_zu$ | $WU/D$ | $W\times U/D$ |
| $fv$ | $FU$ | 科氏参数乘水平速度 |
| $\tilde f w$ | $\tilde F W$ | 非传统科氏项 |
| $\rho^{-1}\partial_xp$ | $P/(\rho L)$ | 压力尺度 / 水平长度 |
| $A_h\nabla_h^2u$ | $A_hU/L^2$ | 水平二阶导 |
| $A_z\partial_z^2u$ | $A_zU/D^2$ | 垂向二阶导 |

注意 $A_h$、$A_z$ 的单位都是 $\mathrm{m^2/s}$；即使垂向系数较小，由于除的是更小的 $D^2$，**垂向摩擦项仍可能很重要**。

#### （2）为什么统一除以 $FU$？

科氏力是许多大尺度海洋运动的重要作用项。用其尺度 $FU$ 除以上表中每一个量，相当于将**所有机制相对科氏力的重要性**放在同一个比较基准下：

$$
\begin{aligned}
\frac{U/T}{FU}&=\frac1{FT},\\
\frac{U^2/L}{FU}&=\frac U{FL},\\
\frac{WU/D}{FU}&=\frac WU\frac U{FD},\\
\frac{P/(\rho L)}{FU}&=\frac P{\rho FUL},\\
\frac{A_hU/L^2}{FU}&=\frac{A_h}{FL^2},\\
\frac{A_zU/D^2}{FU}&=\frac{A_z}{FD^2}.
\end{aligned}
$$

因 $W/U\sim D/L$，可验证**垂向平流项**和**水平平流项**在此假设下同阶：

$$
\frac{WU/D}{FU}\sim\frac U{FL}.
$$

这也是老师在黑板上要求同学逐项计算的过程（录音 01:07—01:15）。

![水平动量方程分项尺度与无量纲数定义](/images/physical-oceanography/lesson10/slide_54.jpg)

#### （3）得到无量纲化方程

令

$$
Ro=\frac U{FL},\quad Ro_T=\frac1{FT},\quad
E_h=\frac{A_h}{FL^2},\quad E_z=\frac{A_z}{FD^2},\quad
\Pi_p=\frac P{\rho FUL}.
$$

并在 $f\sim F$ 的参考纬度附近讨论，则方程形如

$$
\boxed{\begin{aligned}
Ro_T\frac{\partial u^*}{\partial t^*}
+Ro\left(u^*\partial_{x^*}u^*+v^*\partial_{y^*}u^*+w^*\partial_{z^*}u^*\right)
-v^*+\delta\cot\varphi\,w^*
=-\Pi_p\partial_{x^*}p^*
+E_h\nabla_{h*}^2u^*+E_z\partial_{z^*}^2u^*.
\end{aligned}}
$$

此处将无量纲的 $w^*$ 按 $w=Ww^*$ 定义，压力比例 $\Pi_p$ 保持显式；**不应先验地把压强梯度力删去**，实际它可能与科氏力形成主导平衡。

![课件中的水平动量无量纲方程](/images/physical-oceanography/lesson10/slide_55.jpg)

### 2.5 Rossby 数、时变 Rossby 数与 Ekman 数

#### （1）Rossby 数：平流惯性 / 科氏力

$$
\boxed{Ro=\frac{U^2/L}{FU}=\frac U{FL}}.
$$

物理意义：**平流非线性项与科氏力项的数量级之比**。

- $Ro\ll1$：科氏力相对平流惯性显著，常可忽略水平动量方程中的非线性平流项。
- $Ro\sim1$：两者同等重要，均需考虑。
- $Ro\gg1$：平流惯性主导，科氏力对该尺度的运动可能为次要项。

![老师对 Rossby 数三种量级的解释](/images/physical-oceanography/lesson10/slide_57.jpg)

:::EXAMPLE
**例：同样流速，为什么小尺度漩涡的 Rossby 数更大？**

取 $U=0.1\,\mathrm{m/s}$，$F=10^{-4}\,\mathrm{s^{-1}}$：

- 如果 $L=10^6\,\mathrm m$，则 $Ro=10^{-3}$。
- 如果 $L=10^4\,\mathrm m$，则 $Ro=0.1$。
- 如果 $L=10^3\,\mathrm m$，则 $Ro=1$。

**仅改变水平长度**，惯性与科氏力的相对作用就会改变。对于 $Ro=0.1$ 这样的数值是否足够小，要结合所需精度及具体方程判断；没有对所有场景通用的绝对阈值。
:::

#### （2）时变 Rossby 数：局地加速度 / 科氏力

$$
\boxed{Ro_T=\frac{U/T}{FU}=\frac1{FT}}.
$$

$1/F$ 是地球旋转影响的重要**时间尺度**（惯性振荡的完整周期为 $2\pi/|f|$）：

- $Ro_T\ll1$：运动时间尺度 $T\gg1/F$，**局地时间变化相对科氏力较弱**；在合适的准稳态问题中可忽略。
- $Ro_T\sim1$：局地变化与科氏力同阶。
- $Ro_T\gg1$：时间变化很快，不能忽略局地加速度。

![时变 Rossby 数的物理意义](/images/physical-oceanography/lesson10/slide_60.jpg)

**易混淆**：$Ro$ 比较的是**平流加速度**与科氏力；$Ro_T$ 比较的是**局地加速度**与科氏力。空间尺度很大并不自动意味着时间变化很慢；例如海盆范围的潮汐有显著的时变项。

#### （3）Ekman 数：湍流摩擦 / 科氏力

教师将 Ekman 数分为水平和垂向两种：

$$
\boxed{E_h=\frac{A_hU/L^2}{FU}=\frac{A_h}{FL^2}},\qquad
\boxed{E_z=\frac{A_zU/D^2}{FU}=\frac{A_z}{FD^2}}.
$$

- $E_h$：**水平湍流摩擦力 / 科氏力**。
- $E_z$：**垂向湍流摩擦力 / 科氏力**。
- 某一 Ekman 数 $\ll1$：与科氏项比较，对应方向的湍流摩擦可在该特定近似中忽略。
- $E\sim1$：摩擦与科氏力都重要。
- $E\gg1$：该摩擦项相比科氏力更强，简化模型必须先考虑它。

![Ekman 数的定义和海洋湍流黏性系数量级](/images/physical-oceanography/lesson10/slide_62.jpg)

课堂列出的参考范围：$A_h\sim10^2$—$10^4\,\mathrm{m^2/s}$；$A_z\sim10^{-4}$—$10^{-2}\,\mathrm{m^2/s}$。这些**是用来解释数量级的经验范围**，应按具体海域、尺度、参数化模型重新选取，不可当作固定常数。

| 场景 | 哪些项可能主要？ | 由什么决定？ |
|---|---|---|
| 大尺度、厚水层，$L,D$ 均大 | 科氏力及压强梯度力；内部摩擦可弱 | $E_h,E_z\ll1$ |
| 水平范围大、垂向很薄（如某些边界层） | 科氏力与**垂向**湍流摩擦 | $E_h\ll1$，但 $E_z$ 可为 $O(1)$ |
| 很小的三维局地湍流 | 惯性与湍流耗散 | 常需重新评估 $Ro,E_h,E_z$，也可能需要放弃大尺度近似 |

![尺度改变时水平、垂向 Ekman 数如何影响方程简化](/images/physical-oceanography/lesson10/slide_63.jpg)

:::TIP
**老师对无量纲数的记忆方法**：先问自己“它表示哪两项的比值”，再按 $u\partial_xu\sim U^2/L$、$fv\sim FU$ 直接相除，就能推出 $Ro=U/(FL)$。对于 Ekman 数同理。不同教材对 Ekman 数的常数因子或特征黏性系数选取可能不同，此处**以本课定义为准**。
:::

### 2.6 垂直动量方程的尺度分析

#### （1）写出垂向方程

忽略分子黏性及引潮力，并取湍流黏性系数为常数：

$$
\begin{aligned}
\frac{\partial w}{\partial t}
+u\frac{\partial w}{\partial x}
+v\frac{\partial w}{\partial y}
+w\frac{\partial w}{\partial z}
= -\frac1\rho\frac{\partial p}{\partial z}
+\tilde f u-g
+A_h\nabla_h^2w+A_z\frac{\partial^2w}{\partial z^2}.
\end{aligned}
$$

![垂向动量方程原式](/images/physical-oceanography/lesson10/slide_65.jpg)

和水平动量方程相比，垂向多了**$-g$ 重力**，而压力梯度沿 $z$ 方向变化。

#### （2）同样以水平科氏力尺度 $FU$ 为基准

$$
\begin{array}{c|c|c}
\text{项} & \text{量级} & \text{除以 }FU\text{ 后}\\\hline
\partial_tw & W/T & W/(FTU)\sim\delta Ro_T\\
u\partial_xw & UW/L & W/(FL)\sim\delta Ro\\
w\partial_zw & W^2/D & W^2/(DFU)\sim\delta Ro\\
\rho^{-1}\partial_zp & P/(\rho D) & P/(\rho DFU)\\
\tilde f u & \tilde F U & \tilde F/F\\
g & g & g/(FU)\\
A_h\nabla_h^2w & A_hW/L^2 & \delta E_h\\
A_z\partial_z^2w & A_zW/D^2 & \delta E_z
\end{array}
$$

其中 $\delta=D/L\sim W/U$。课件的无量纲公式中出现了 $\delta Ro$、$\delta E_h$、$\delta E_z$ 等项，来源正是**垂向速度的特征尺度 $W$ 远小于 $U$**。

![垂直动量方程的量级比较及无量纲系数](/images/physical-oceanography/lesson10/slide_68.jpg)

#### （3）为何会得到静压平衡？

老师比较了两类力：对于典型海洋参数，$g/(FU)$ 可以高达 $10^5$ 量级，而非传统科氏项 $\tilde f u/(FU)$ 通常只有 $O(1)$ 左右。许多大尺度、缓慢运动的垂向惯性与摩擦项也较小。

**最重要的物理判断**：大重力项并没有使方程“发散”，因为同样有一个大尺度的**垂向压强梯度力**与之抵消。保留主导的两项：

$$
-\frac1\rho\frac{\partial p}{\partial z}-g\simeq0
\quad\Longrightarrow\quad
\boxed{\frac{\partial p}{\partial z}\simeq-\rho g}.
$$

这就是**静压平衡（hydrostatic balance）**的来源。

:::WARNING
**关键逻辑**：不能因为 $g/(FU)$ 很大便“忽略重力”或“忽略压强项”。它们是互相平衡的两个大项；剩余加速度由二者的**小差值**决定。正式做非静压误差估算时，应在扣除背景静压平衡之后，比较垂向加速度与可变压强梯度的残差；仅凭大项相消不能对所有流动断定静压近似成立。
:::

### 2.7 热传导方程与 Peclet 数

#### （1）出发方程

对时间平均温度 $\theta$，教师用水平、垂向分别取值的湍流扩散系数：

$$
\frac{\partial\theta}{\partial t}
+u\frac{\partial\theta}{\partial x}
+v\frac{\partial\theta}{\partial y}
+w\frac{\partial\theta}{\partial z}
=K_{\theta h}\left(\frac{\partial^2\theta}{\partial x^2}+\frac{\partial^2\theta}{\partial y^2}\right)
+K_{\theta z}\frac{\partial^2\theta}{\partial z^2}.
$$

令 $\theta=\Theta\theta^*$，$x=Lx^*$，$z=Dz^*$，$t=Tt^*$，将方程两侧除以**水平温度平流的尺度** $U\Theta/L$：

$$
\frac L{UT}\partial_{t^*}\theta^*
+u^*\partial_{x^*}\theta^*
+v^*\partial_{y^*}\theta^*
+w^*\partial_{z^*}\theta^*
=\frac{1}{Pe_h}\nabla_{h*}^2\theta^*+
\frac1{Pe_z}\partial_{z^*}^2\theta^*.
$$

这里在垂向平流项使用了 $W/D\sim U/L$。

#### （2）Peclet 数（贝克莱数）

$$
\boxed{Pe_h=\frac{UL}{K_{\theta h}}},\qquad
\boxed{Pe_z=\frac{WD}{K_{\theta z}}
\sim\frac{UD^2}{LK_{\theta z}}}.
$$

**本质：热量平流输运的量级 / 热扩散输运的量级。** 因为热量扩散与平流都有水平和垂向方向，所以按老师课件分别定义两个 Peclet 数。

- $Pe\gg1$：平流远强于相应方向的扩散，扩散项在该极限下可被忽略；若没有热源或其他输运项，得到 $D\theta/Dt\simeq0$。
- $Pe\ll1$：扩散远强于平流，**可以先忽略对应平流项**。只有在稳态、其他输运项可忽略等进一步条件下，才能写出 $\nabla^2\theta\simeq0$。
- $Pe\sim1$：平流和扩散都不可忽略。

![热方程的尺度分析与 Peclet 数](/images/physical-oceanography/lesson10/slide_73.jpg)

:::NOTE
**补充说明（比 PPT 条目更严格）**：当 $Pe_h\ll1$ 而 $Pe_z$ 不小，仍必须保留垂向平流及其竞争项。单凭某个 Peclet 数的大小，不能直接把**整个**三维热传导方程化成 $\Delta\theta=0$ 或 $D\theta/Dt=0$。还需要明确时间尺度、边界条件及另一方向的输运。
:::

---

## 三、第五章第二节：常用近似

课堂后半段开始讲解四个重要简化：

1. 静压近似（静力近似）
2. $f$ 平面近似
3. $\beta$ 平面近似
4. Boussinesq 近似（**本课讲到开头，下节继续**）

![课件列出的四种常用近似](/images/physical-oceanography/lesson10/slide_74.jpg)

### 3.1 静压近似（Hydrostatic approximation）

**核心式**：

$$
\boxed{\frac1\rho\frac{\partial p}{\partial z}+g=0}
\quad\Longleftrightarrow\quad
\boxed{\frac{\partial p}{\partial z}=-\rho g}.
$$

#### （1）静压近似的前提

对老师讨论的大尺度海洋运动，$\delta\ll1$，且垂直加速度、垂直黏性效应及非传统科氏力相对于垂向主导的压强—重力平衡足够弱。由于垂向加速度小，海水微团在垂向近似处于**力平衡**。

#### （2）如何积分得到任意深度的压强？

海面 $z=\zeta$ 处压力记作 $p_a$，对任意海内深度 $z<\zeta$：

$$
\begin{aligned}
\int_{p(z)}^{p_a}dp
&=-\int_z^\zeta\rho(z')g\,dz',\\
\boxed{p(z)}&=\boxed{p_a+\int_z^\zeta\rho(z')g\,dz'}.
\end{aligned}
$$

若密度近似常数 $\rho_0$、$g$ 近似常数：

$$
\boxed{p(z)=p_a+\rho_0g(\zeta-z)}.
$$

**如何得到海表坡度产生的水平压强梯度？** 若 $p_a,\rho_0$ 视为常数，则

$$
\frac1{\rho_0}\frac{\partial p}{\partial x}=g\frac{\partial\zeta}{\partial x},
\qquad
\frac1{\rho_0}\frac{\partial p}{\partial y}=g\frac{\partial\zeta}{\partial y}.
$$

代回水平动量方程，可见海表面微小的坡度能够通过压强梯度驱动大尺度海流。

![静压条件、静压积分及其对水平动量方程的影响](/images/physical-oceanography/lesson10/slide_75.jpg)

:::TIP
**适用范围**：大尺度环流中静压近似非常常见。但在小尺度强对流、显著垂向加速、内部波的部分高频短波情形或细尺度湍流中，垂向加速度可能不可忽略，应考虑**非静压模型**。
:::

### 3.2 $f$ 平面近似（$f$-plane）

科氏参数随纬度变化：

$$
f=2\Omega\sin\varphi.
$$

若研究区域的纬度跨越不大，取参考纬度 $\varphi_0$：

$$
\boxed{f\simeq f_0=2\Omega\sin\varphi_0=\text{常数}}.
$$

这就是 **$f$ 平面近似**。

**简化的意义**：把随纬度变化的系数变成常数，常能令运动方程更易求解，并保留科氏效应的主导作用。许多局地海区可以使用。

**老师举例（01:33:51—01:34:54）**：研究长江口北纬约 30° 附近的局地海流，可在适当尺度内将 $f$ 视为常量；研究跨越很宽纬度范围的黑潮时，这一近似可能不准确。

![f 平面近似：用固定参考纬度取科氏参数](/images/physical-oceanography/lesson10/slide_76.jpg)

### 3.3 $\beta$ 平面近似（$\beta$-plane）

当 $f$ 的**纬向变化不能忽略**，而又希望保留局部平面上的简单方程，可在参考纬度 $\varphi_0$ 处做一阶 Taylor 展开。

$$
\begin{aligned}
f(\varphi)&=2\Omega\sin\varphi\\
&\simeq2\Omega\sin\varphi_0
+2\Omega\cos\varphi_0(\varphi-\varphi_0).
\end{aligned}
$$

对近似球形地球的经向距离，令 $y-y_0\simeq a(\varphi-\varphi_0)$，其中 $a$ 为地球半径，则

$$
\boxed{f=f_0+\beta(y-y_0)},\qquad
\boxed{\beta=\left.\frac{\partial f}{\partial y}\right|_{\varphi_0}
=\frac{2\Omega\cos\varphi_0}{a}}.
$$

如果把参考点定为 $y_0=0$，则简写成 $\boxed{f=f_0+\beta y}$。

![β 平面的 Taylor 展开推导及 β 的定义](/images/physical-oceanography/lesson10/slide_78.jpg)

$f$ 平面与 $\beta$ 平面的区别：

| | $f$ 平面 | $\beta$ 平面 |
|---|---|---|
| $f$ 的处理 | $f=f_0$ | $f=f_0+\beta y$ |
| 纬度变化 | 忽略一阶变化 | 保留一阶线性变化 |
| 优点 | 方程系数更简单 | 能研究与科氏参数纬向变化有关的过程 |
| 限制 | 纬度跨度不能使 $f$ 变化显著 | 一阶展开仍需适当的纬向范围 |
| 老师提到的后续应用 | 局地海区 | 黑潮、大洋环流、Rossby 波等 |

:::NOTE
**常见误区**：$\beta$ 平面仍是以某一参考纬度为中心的**局部近似**。对于真正跨越很大纬度、包含赤道或极区的全球问题，可能需要完整的球面几何和真实变化的 $f(\varphi)$。老师用黑潮帮助理解“必须保留 $f$ 随纬度变化”，不意味着任意范围都能用单一 $\beta$ 平面精确描述。
:::

### 3.4 Boussinesq 近似

老师在 **01:36:41—01:38:07** 开始讲 Boussinesq 近似，并明确说**下一次课将继续展开**。此处记录课堂已涉及的思想，同时补上最必要的推导逻辑，便于自学。

#### （1）为什么可以简化密度？

大多数海洋内部过程的密度变化相对参考密度较小。写作

$$
\boxed{\rho=\rho_0+\rho'},\qquad \left|\frac{\rho'}{\rho_0}\right|\ll1.
$$

$\rho_0$ 为参考密度，$\rho'$ 为偏差。

Boussinesq 近似的规则：**密度变化对惯性与多数非浮力项的贡献通常可忽略，重力产生的浮力效应中仍保留密度差异。**

例如水平动量方程中压力梯度前的 $1/\rho$ 常以 $1/\rho_0$ 近似；连续方程通常变为

$$
\boxed{\nabla\cdot\boldsymbol V=0}.
$$

这使得方程更容易处理。

#### （2）为什么唯独重力浮力项需要保留 $\rho'$？

从竖直方向的压力及重力合力出发：

$$
-\frac1\rho\frac{\partial p}{\partial z}-g.
$$

将压强也分解为**背景静压**和**扰动压强**：

$$
p=p_0(z)+p',\quad\frac{dp_0}{dz}=-\rho_0g.
$$

在适当小扰动近似下：

$$
\begin{aligned}
-\frac1\rho\frac{\partial p}{\partial z}-g
&\simeq-\frac1{\rho_0}\frac{\partial p'}{\partial z}
-\frac{\rho'}{\rho_0}g.
\end{aligned}
$$

因此引入**浮力变量**

$$
\boxed{b_{\mathrm{buoy}}=-g\frac{\rho'}{\rho_0}}.
$$

若 $\rho'<0$，该水团比周围参考水体轻，$b_{\mathrm{buoy}}>0$，具有向上浮力加速度；若更重，$b_{\mathrm{buoy}}<0$。如果把这里的 $\rho'$ 也直接抹掉，就会丢失密度差造成的浮力、分层及部分海洋运动机制。

![课堂展示的 Boussinesq 近似与密度处理](/images/physical-oceanography/lesson10/slide_79.jpg)

:::WARNING
**课堂进度与补充推导的界限**：老师这次重点讲到「参考密度 $\rho_0$ 可在多数项中替代 $\rho$，重力/浮力相关项仍保留密度扰动」，随即宣布下节课继续。本小节关于背景压力 $p_0$、扰动压力 $p'$ 与浮力 $b_{\mathrm{buoy}}$ 的逐步推导，是为了理解原理所作的**教学补充**，不表示老师本次已在课堂上逐行推过。
:::

---

## 四、关键结论、辨析及自测

### 一张表复习本堂课的无量纲数

| 符号 | 课堂定义 | **比较哪两项？** | 小于 1 很多时通常说明 |
|---|---|---|---|
| $\delta$ | $D/L\sim W/U$ | 垂向 / 水平尺度 | 海洋很“薄”，$W\ll U$ |
| $Ro$ | $U/(FL)$ | **平流惯性 / 科氏力** | 平流非线性弱 |
| $Ro_T$ | $1/(FT)$ | **局地加速度 / 科氏力** | 局地变化弱 |
| $E_h$ | $A_h/(FL^2)$ | **水平湍流摩擦 / 科氏力** | 水平摩擦弱 |
| $E_z$ | $A_z/(FD^2)$ | **垂向湍流摩擦 / 科氏力** | 垂向摩擦弱 |
| $Pe_h$ | $UL/K_{\theta h}$ | **水平热平流 / 水平热扩散** | 水平热扩散占优 |
| $Pe_z$ | $WD/K_{\theta z}$ | **垂向热平流 / 垂向热扩散** | 垂向热扩散占优 |

*说明：涉及科氏力的数量级比值通常取 $F=|f_0|$ 的正值；在 $f_0=0$ 的赤道恰好不能直接用这些以 $F$ 为分母的定义比较，需要重新选择主要项和尺度。*

### 不能混淆的五个问题

1. **数量级相等**意味着近似同阶，与逐点数值相等不同；$W\sim DU/L$ 是尺度关系。
2. **静压平衡**涉及 $z$ 方向压力梯度与重力；**地转平衡**涉及水平压力梯度与科氏力。它们分别控制不同方向。
3. **水平湍流黏性系数很大**不意味着水平摩擦一定主导，要比较 $A_h/L^2$ 与 $A_z/D^2$、$F$ 的相对大小。
4. **$f$ 平面**取固定纬度的常数科氏参数；**$\beta$ 平面**保留其纬向线性变化。二者都属于近似。
5. **Boussinesq 近似**保留了密度扰动产生的浮力效应；水体动力仍可能受到盐度、温度变化的影响。

### 课上可能继续提问（附简答）

**Q1：为什么尺度分析要先确定特征尺度？** 因为方程每一项的大小取决于具体运动的长度、时间、速度及扩散系数尺度。先选尺度才能比较各项。

**Q2：$\partial_xu$ 和 $\partial_{xx}u$ 分别是什么量级？** $U/L$ 和 $U/L^2$。二次求导只让分母多出一个 $L$。

**Q3：连续性方程如何证明大尺度海洋中 $w$ 相对小？** $U/L\sim W/D\Rightarrow W/U\sim D/L\ll1$，前提是不可压缩及导数变化的特征尺度合理。

**Q4：为什么比较水平动量方程时要除以 $FU$？** 将科氏项归一化为量级 1，让其他力的相对大小可直接读出，例如 $Ro$、$E_h$、$E_z$。

**Q5：Rossby 数和 Ekman 数各自说明什么？** Rossby 数比较平流惯性与科氏力；Ekman 数比较湍流摩擦与科氏力。

**Q6：垂向动量方程为什么能简化成静压关系？** 大尺度、缓慢运动时垂向惯性和其他修正项小，压力梯度与重力承担主导平衡：$\partial_zp\simeq-\rho g$。

**Q7：为什么海洋中常用 $\beta$ 平面？** 它比 $f$ 平面多保留科氏参数随纬度的一阶变化，可用于解释部分大尺度环流及 Rossby 波机制。

**Q8：为什么 Boussinesq 近似仍保留密度扰动？** 密度偏差虽小，它与重力相乘产生浮力，可决定分层、对流等重要现象。

---

## 第三—五章作业原题（第二次）

以下逐题整理自**本次课件第 81 张**（01:38:20 起老师要求期中前交助教）：

1. **作用于海水微团的力有哪些？** 简述各力的定义、表达式和特征。
2. **写出描述海水运动的控制方程（运动方程）的向量形式**，解释每一项的物理意义。
3. **基于热量守恒，导出海水热传导方程。**
4. **导出自由海面有质量交换的运动学边界条件和温度边界条件。**
5. **写出直角坐标系下海水平均流的基本方程组**，说明方程组中各项的物理意义，指出平均流基本方程组与瞬时流基本方程组的异同；**导出自由海面时间平均盐量满足的边界条件**。
6. **简述简化海水方程组的尺度分析思路**，简述 **Rossby 数与 Ekman 数**的定义和物理意义。
7. **什么是 $f$ 平面近似、$\beta$ 平面近似、静压近似和 Boussinesq 近似？** 分析指出这些近似的有效性条件。

> 第 1—5 题主要综合前几节的内容；本课新增内容直接对应**第 6—7 题**。第 4—5 题要求**“导出”**边界条件，建议复习此前的专门讲义，不能只背本节复习中的结论。Boussinesq 近似下节课继续讲，建议听完之后再定稿第 7 题。

---

## 资料来源与校核说明

- **课程来源**：袁野平老师，《物理海洋学》，**2026-10-19 第 1—2 节**；本次 PPT 共 84 张，其中第 82—84 张为课堂结束后的桌面截图。
- **录音来源**：《上课录音10.docx》。该 Word 文档含有部分被异常 XML 结构包裹的转写文字；本笔记从 `word/document.xml` 中按段落恢复文本，再结合 PPT 和时间戳校核。口语中的同音误识别（如“螺丝倍数”“XM 数”“贝克兰数”“不曾涅斯克”等）统一恢复为 Rossby、Ekman、Peclet、Boussinesq。
- **图像来源**：本次上传的《上课PPT10.pptx》，每张图以 `slide_XX.jpg` 保存，路径统一为 `/images/physical-oceanography/lesson10/`；已裁去原课堂截屏两侧无关的黑边。
- **笔记结构**：沿用提供的参考 Markdown 的 frontmatter、概述、目录、分层标题、例题、注意事项与公式形式。参考文件自身内容是《数据库系统》的 E-R Model 讲义，因此只用作**排版风格参考**，没有将其学科内容混入本文。
- **笔记中的推导**：凡明确标注为「补充」「示例」或「更严格的说明」的部分，是为便于自学而增加的解释；课堂未讲的下一节、后续章内容不视为本堂课既定讲授内容。
