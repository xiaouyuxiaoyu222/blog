---
title: FluidMechanics-Chapter6：流体阻力及能量损失
published: 2026-06-16
description: Flow resistance, laminar and turbulent pipe flow, frictional and local head losses, boundary layer, drag and settling
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

这一章研究一个核心问题：

> **真实流体为什么会损失机械能，以及如何计算这些损失。**

整章的逻辑链条是：

1. 黏性与湍动产生阻力；
2. 阻力做功，使机械能不可逆地转化为内能，表现为水头损失；
3. 先判断流态，再确定沿程阻力系数；
4. 将沿程损失与各处局部损失相加；
5. 对物体绕流，还要分析边界层、分离、尾流和绕流阻力。

本章常见英文术语：

- **flow resistance**：流动阻力
- **energy loss / head loss**：能量损失 / 水头损失
- **frictional head loss**：沿程水头损失
- **minor/local head loss**：局部水头损失
- **laminar flow**：层流
- **turbulent flow**：湍流
- **viscous sublayer**：黏性底层
- **boundary layer**：边界层
- **drag force**：绕流阻力

:::TIP
**教学范围判断**

四份课件依次覆盖本章 Section 1–9：阻力概述、两种流态、圆管层流、湍流、圆管湍流沿程损失、非圆管损失、局部损失、边界层、绕流阻力。课件中没有发现明确的“not required”或“not examined”标注，因此本笔记全部纳入。

课件中的外部论文链接属于 **extended reading**；雷诺应力和混合长度的完整推导考试优先级较低，但其定义、物理意义和最终公式仍应掌握。
:::

:::WARNING
**本章最容易混淆的三组量**

1. $u$：某点速度；$\bar u$：时均速度；$v$：断面平均速度；
2. $\tau_0$：壁面切应力；$u_*$：摩阻流速，它有速度量纲，但不是实际流速；
3. $\lambda$：沿程阻力系数；$\zeta$：局部阻力系数。二者对应的损失形式不同。
:::

---

## 目录

- [第一部分：课程笔记](#第一部分课程笔记)
  - [1 流动阻力与水头损失](#1-流动阻力与水头损失)
  - [2 层流与湍流](#2-层流与湍流)
  - [3 圆管层流](#3-圆管层流)
  - [4 湍流基本理论](#4-湍流基本理论)
  - [5 圆管湍流沿程损失](#5-圆管湍流沿程损失)
  - [6 非圆管与明渠沿程损失](#6-非圆管与明渠沿程损失)
  - [7 局部水头损失](#7-局部水头损失)
  - [8 边界层](#8-边界层)
  - [9 绕流阻力与球体沉降](#9-绕流阻力与球体沉降)
  - [10 本章综合整理](#10-本章综合整理)
  - [11 最后速记](#11-最后速记)
- [第二部分：练习题](#第二部分练习题)
  - [A 基础概念与判断](#a-基础概念与判断)
  - [B 圆管层流与湍流计算](#b-圆管层流与湍流计算)
  - [C 沿程损失、局部损失与明渠](#c-沿程损失局部损失与明渠)
  - [D 边界层与绕流](#d-边界层与绕流)

---

# 第一部分：课程笔记

## 1 流动阻力与水头损失

### 1.1 阻力与能量损失的根源

真实流体运动时会产生机械能损失，其根源可概括为：

- **fluid viscosity（流体黏性）**：相邻流层存在相对运动，产生黏性切应力；
- **turbulence（湍动）**：流体微团发生脉动、横向交换与涡旋混合，进一步耗散机械能。

机械能并没有消失，而是不可逆地转化为内能。工程上通常用单位重量流体损失的机械能表示，即 **水头损失 $h_w$**，单位为 m。

### 1.2 两类流动阻力

#### 沿程阻力与沿程水头损失

**Frictional resistance / frictional head loss** 指流体沿着形状和尺寸基本不变的长直流段运动时，由壁面切应力持续作用而产生的阻力和能量损失。

记为：

$$
h_f
$$

主要特点：

- 分布在整段流路上；
- 与管长有关；
- 在均匀流中，断面速度分布沿程不变，但总水头仍持续下降。

#### 局部阻力与局部水头损失

**Local resistance / minor head loss** 指管道形状、尺寸或流动方向突然改变时，由速度分布剧烈重组、流动分离和涡旋产生的阻力与能量损失。

记为：

$$
h_j
$$

典型位置：

- 突然扩大、突然缩小；
- 弯头、阀门、闸门；
- 管道进口与出口；
- 三通、分流、汇流等。

:::NOTE
“minor loss”中的 minor 只表示损失发生在局部构件处，不代表数值一定很小。短管、阀门很多的管路中，局部损失可能占主要部分。
:::

### 1.3 水头损失叠加原理

两断面之间的总水头损失等于所有沿程损失和局部损失之和：

$$
\boxed{
 h_w=\sum_{i=1}^{n}h_{f,i}+\sum_{k=1}^{m}h_{j,k}
}
$$

其中：

- $h_w$：两断面之间的总水头损失，m；
- $h_{f,i}$：第 $i$ 段等直径或等断面流段的沿程损失，m；
- $h_{j,k}$：第 $k$ 个局部构件造成的局部损失，m；
- $n$：沿程流段数量；
- $m$：局部构件数量。

> **插图占位｜图 6-1**：插入课件《Flow resistance-fundamentals》第 7 页“总水头线、测压管水头线及弯头、突扩、突缩、闸门造成的损失”示意图。重点标出总水头线始终下降，局部构件处下降更明显。

### 1.4 Darcy–Weisbach 公式

圆管恒定均匀流的沿程水头损失：

$$
\boxed{
 h_f=\lambda\frac{L}{d}\frac{v^2}{2g}
}
$$

其中：

- $\lambda$：Darcy friction factor，沿程阻力系数，无量纲；
- $L$：管长，m；
- $d$：圆管内径，m；
- $v$：断面平均流速，m/s；
- $g$：重力加速度，m/s$^2$。

对非圆形断面，引入水力半径：

$$
R=\frac{A}{\chi}
$$

于是：

$$
\boxed{
 h_f=\lambda\frac{L}{4R}\frac{v^2}{2g}
}
$$

其中：

- $A$：过流断面面积；
- $\chi$：湿周，即流体与固体边界接触的周长；
- $R$：水力半径。

圆管有：

$$
R=\frac{\pi d^2/4}{\pi d}=\frac d4
$$

因此 $4R=d$，可回到圆管公式。

### 1.5 局部损失的一般式

$$
\boxed{
 h_j=\zeta\frac{v^2}{2g}
}
$$

其中：

- $\zeta$：local loss coefficient，局部阻力系数；
- $v$：与该 $\zeta$ 配套定义的特征流速。

:::WARNING
查表得到 $\zeta$ 后，必须确认它以哪一段流速为基准。对于突扩、突缩、三通等不同直径构件，选错流速会直接造成数量级错误。
:::

### 1.6 均匀流基本方程

取长度为 $L$ 的均匀流段，对其作沿流向受力平衡。由于均匀流前后断面速度分布相同，沿程损失等于测压管水头下降：

$$
h_f=JL
$$

其中 $J$ 为水力坡度：

$$
J=\frac{h_f}{L}
$$

对任意以原流线为边界的子流管：

$$
\boxed{
\tau=\rho gR'J
}
$$

对整个断面壁面：

$$
\boxed{
\tau_0=\rho gRJ
}
$$

其中：

- $\tau$：子流管边界上的切应力；
- $\tau_0$：壁面切应力；
- $R'=A'/\chi'$：子流管的水力半径；
- $R=A/\chi$：整个断面的水力半径；
- $\rho$：流体密度。

这组公式只来自整体受力平衡，因此：

> **对圆管、非圆管、明渠，层流与湍流均成立。**

### 1.7 摩阻流速

定义 **friction velocity（摩阻流速）**：

$$
\boxed{
 u_*=\sqrt{\frac{\tau_0}{\rho}}
}
$$

由 $\tau_0=\rho gRJ$ 得：

$$
\boxed{
 u_*=\sqrt{gRJ}
}
$$

再由 Darcy–Weisbach 公式得：

$$
\boxed{
 u_*=v\sqrt{\frac{\lambda}{8}}
}
$$

$u_*$ 反映壁面摩擦强弱，是湍流近壁区无量纲化的重要速度尺度。

### 1.8 圆管断面切应力分布

对半径为 $r$ 的同心流管：

$$
R'=\frac{\pi r^2}{2\pi r}=\frac r2
$$

于是：

$$
\tau=\rho g\frac r2J
$$

在管壁 $r=r_0$：

$$
\tau_0=\rho g\frac{r_0}{2}J
$$

两式相除：

$$
\boxed{
\frac{\tau}{\tau_0}=\frac r{r_0}
}
$$

因此圆管均匀流中：

- 中心 $r=0$：$\tau=0$；
- 向管壁线性增大；
- 管壁 $r=r_0$：$\tau=\tau_0$，达到最大值。

这个线性分布对圆管层流和湍流都成立，因为它来自整体动量平衡。

---

## 2 层流与湍流

### 2.1 两种流态

#### 层流

**Laminar flow** 中，流体质点分层、有序运动，各层之间横向混合很弱。

特点：

- 运动规则；
- 脉动很弱；
- 黏性力占主导；
- 水头损失与平均速度一次方成正比。

#### 湍流

**Turbulent flow** 中，速度、压力等物理量在时间和空间上发生不规则脉动，流体微团强烈掺混。

特点：

- 随机性和无序性；
- 强烈横向动量交换；
- 涡旋众多；
- 能量耗散较强；
- 工程流动中非常常见。

### 2.2 Reynolds experiment

雷诺实验通过向玻璃管中注入细染色液束观察流态：

- 低流速：染色线保持清晰，说明为层流；
- 增大流速：染色线摆动并扩散，进入过渡状态；
- 高流速：染色液迅速混合，成为湍流。

实验还发现，升速和降速时发生转捩的速度不同：

- **upper critical Reynolds number**：升速过程中层流失稳的上临界值，受扰动影响较大；
- **lower critical Reynolds number**：降速过程中湍流恢复层流的下临界值，较稳定。

工程上使用下临界雷诺数作为判别标准。

> **插图占位｜图 6-2**：插入课件《Flow resistance-fundamentals》第 17 页雷诺实验装置与染色线形态，并插入第 19 页 $\lg h_f-\lg v$ 图。

### 2.3 水头损失与流速的关系

实验可写成：

$$
h_f=kv^m
$$

取对数：

$$
\lg h_f=\lg k+m\lg v
$$

其中斜率 $m$ 反映流态：

- 层流：$m=1$，即 $h_f\propto v$；
- 湍流：通常 $m\approx1.75\sim2.0$；
- 水力粗糙区：$\lambda$ 与 $Re$ 无关，故 $h_f\propto v^2$。

### 2.4 Reynolds number

圆管流动：

$$
\boxed{
Re=\frac{vd}{\nu}=\frac{\rho vd}{\mu}
}
$$

其中：

- $v$：断面平均速度；
- $d$：圆管直径；
- $\nu$：运动黏度；
- $\mu$：动力黏度。

物理意义：

$$
\boxed{
Re\sim\frac{\text{惯性力}}{\text{黏性力}}
}
$$

圆管判别：

$$
\boxed{
Re<2300\quad\Rightarrow\quad\text{层流}
}
$$

$$
2300\lesssim Re\lesssim4000\quad\Rightarrow\quad\text{过渡区}
$$

$$
Re>4000\quad\Rightarrow\quad\text{通常按湍流处理}
$$

对于非圆管有压流，可使用水力直径：

$$
d_e=4R
$$

并写为：

$$
Re=\frac{vd_e}{\nu}
$$

课件对明渠采用：

$$
Re_R=\frac{vR}{\nu}
$$

对应下临界值约为：

$$
Re_{R,c}=575
$$

因为 $d_e=4R$，所以 $2300/4=575$，两种写法本质一致。

### 2.5 为什么用下临界雷诺数

上临界值受入口扰动、管壁振动、来流脉动等影响很大；下临界值较稳定，主要由断面形状决定。

因此判断时使用下临界值：

- $Re<Re_c$：一定为层流；
- $Re>Re_c$：层流已可能失稳，继续结合数值范围判断过渡或湍流。

### 2.6 课堂例题：自来水管流态

已知：

$$
d=0.1\ \text{m},\qquad v=1.0\ \text{m/s},\qquad \nu=1.31\times10^{-6}\ \text{m}^2/\text{s}
$$

则：

$$
Re=\frac{vd}{\nu}
=\frac{1.0\times0.1}{1.31\times10^{-6}}
=7.63\times10^4
$$

故为湍流。

保持层流的最大平均速度：

$$
v_{\max}=\frac{Re_c\nu}{d}
=\frac{2300\times1.31\times10^{-6}}{0.1}
\approx0.030\ \text{m/s}
$$

### 2.7 课堂例题：矩形明渠流态

已知：

$$
b=0.2\ \text{m},\quad h=0.1\ \text{m},\quad v=0.12\ \text{m/s}
$$

过流面积与湿周：

$$
A=bh=0.02\ \text{m}^2
$$

$$
\chi=b+2h=0.4\ \text{m}
$$

水力半径：

$$
R=\frac A\chi=0.05\ \text{m}
$$

若 $20^\circ\mathrm C$ 水的 $\nu\approx1.0\times10^{-6}\ \text{m}^2/\text{s}$：

$$
Re_R=\frac{vR}{\nu}
=\frac{0.12\times0.05}{1.0\times10^{-6}}
=6000>575
$$

故为湍流。

---

## 3 圆管层流

### 3.1 推导前提

圆管层流速度分布的推导基于：

- 恒定流；
- 不可压缩流体；
- 圆管内充分发展均匀层流；
- 牛顿流体；
- 轴对称流动；
- 管壁满足无滑移条件。

:::WARNING
入口段速度分布仍在发展，不满足充分发展条件，因此本节抛物线速度分布与 $\lambda=64/Re$ 不能直接用于入口附近。
:::

### 3.2 速度分布

设：

- 管半径为 $r_0$；
- 距管轴半径为 $r$；
- 距壁面距离为 $y=r_0-r$；
- 轴向速度为 $u(r)$。

切应力分布：

$$
\tau=\frac12\rho gJr
$$

牛顿内摩擦定律：

$$
\tau=\mu\frac{du}{dy}=-\mu\frac{du}{dr}
$$

联立：

$$
-\mu\frac{du}{dr}=\frac12\rho gJr
$$

积分：

$$
u=-\frac{\rho gJ}{4\mu}r^2+C
$$

管壁无滑移：

$$
r=r_0,\qquad u=0
$$

得到：

$$
\boxed{
 u(r)=\frac{\rho gJ}{4\mu}\left(r_0^2-r^2\right)
}
$$

速度沿半径呈抛物线分布；在三维中形成旋转抛物面。

> **插图占位｜图 6-3**：插入课件《Flow resistance-fundamentals》第 28–29 页圆管层流速度抛物线与切应力线性分布图。标出中心速度最大、壁面速度为零。

### 3.3 最大速度与断面平均速度

中心 $r=0$：

$$
\boxed{
 u_{\max}=\frac{\rho gJ}{4\mu}r_0^2
}
$$

因此：

$$
\boxed{
 u=u_{\max}\left[1-\left(\frac r{r_0}\right)^2\right]
}
$$

断面平均速度：

$$
v=\frac1A\int_Au\,dA
$$

积分可得：

$$
\boxed{
 v=\frac12u_{\max}
}
$$

即：

$$
\boxed{
 u_{\max}=2v
}
$$

也可将速度分布写成：

$$
\boxed{
 u=2v\left[1-\left(\frac r{r_0}\right)^2\right]
}
$$

### 3.4 动能与动量修正系数

圆管层流速度分布很不均匀：

$$
\boxed{
\alpha=2
}
$$

$$
\boxed{
\beta=\frac43
}
$$

其中：

- $\alpha$：kinetic-energy correction factor，动能修正系数；
- $\beta$：momentum correction factor，动量修正系数。

### 3.5 Hagen–Poiseuille 关系

由平均速度：

$$
v=\frac{\rho gJr_0^2}{8\mu}
$$

又 $J=h_f/L$、$r_0=d/2$：

$$
h_f=\frac{32\mu Lv}{\rho gd^2}
$$

压强降形式：

$$
\boxed{
\Delta p=\frac{32\mu Lv}{d^2}
}
$$

流量形式：

$$
Q=v\frac{\pi d^2}{4}
$$

所以：

$$
\boxed{
Q=\frac{\pi d^4}{128\mu}\frac{\Delta p}{L}
}
$$

这说明在其他条件不变时：

$$
Q\propto d^4
$$

因此管径增大一倍，层流流量增大为原来的 $2^4=16$ 倍。

### 3.6 层流沿程阻力系数

将层流损失与 Darcy–Weisbach 公式对比：

$$
\frac{32\mu Lv}{\rho gd^2}
=\lambda\frac Ld\frac{v^2}{2g}
$$

得到：

$$
\boxed{
\lambda=\frac{64}{Re}
}
$$

因此层流中：

- $\lambda$ 只与 $Re$ 有关；
- 与相对粗糙度 $\Delta/d$ 无关；
- $h_f\propto v$。

### 3.7 壁面切应力

由摩阻系数关系：

$$
\boxed{
\tau_0=\frac{\lambda}{8}\rho v^2
}
$$

层流中代入 $\lambda=64/Re$：

$$
\tau_0=\frac{8\mu v}{d}
$$

### 3.8 课堂例题：油在圆管内层流

已知：

$$
\rho=850\ \text{kg/m}^3,\quad
\nu=0.18\times10^{-4}\ \text{m}^2/\text{s}
$$

$$
d=0.1\ \text{m},\quad v=0.0635\ \text{m/s}
$$

1. 中心最大速度：

$$
u_{\max}=2v=0.127\ \text{m/s}
$$

2. 距中心 $r=20\ \text{mm}$，$r_0=50\ \text{mm}$：

$$
u=0.127\left[1-\left(\frac{0.02}{0.05}\right)^2\right]
=0.107\ \text{m/s}
$$

3. 雷诺数与阻力系数：

$$
Re=\frac{vd}{\nu}
=\frac{0.0635\times0.1}{0.18\times10^{-4}}
\approx353
$$

$$
\lambda=\frac{64}{353}\approx0.181
$$

4. 壁面切应力：

$$
\tau_0=\frac{\lambda}{8}\rho v^2
\approx0.077\ \text{Pa}
$$

5. 每千米管长损失：

$$
h_f=\lambda\frac{1000}{0.1}\frac{0.0635^2}{2g}
\approx0.37\ \text{m}
$$

### 3.9 课堂例题：毛细管黏度计

已知：

$$
d=6\ \text{mm},\quad L=2\ \text{m},\quad
Q=77\times10^{-6}\ \text{m}^3/\text{s}
$$

水银压差计读数：

$$
h_p=0.3\ \text{m},\quad
\rho_{\mathrm{oil}}=900\ \text{kg/m}^3
$$

水银密度取 $13600\ \text{kg/m}^3$。

压差对应油柱水头：

$$
h_f=\left(\frac{\rho_{Hg}}{\rho}-1\right)h_p
\approx4.23\ \text{m}
$$

平均速度：

$$
v=\frac{4Q}{\pi d^2}\approx2.72\ \text{m/s}
$$

层流关系：

$$
h_f=\frac{64}{Re}\frac Ld\frac{v^2}{2g}
=\frac{32\nu Lv}{gd^2}
$$

解得：

$$
\boxed{
\nu\approx8.6\times10^{-6}\ \text{m}^2/\text{s}
}
$$

$$
\boxed{
\mu=\rho\nu\approx7.7\times10^{-3}\ \text{Pa}\cdot\text{s}
}
$$

校核：

$$
Re=\frac{vd}{\nu}\approx1.91\times10^3<2300
$$

假设层流成立。

---

## 4 湍流基本理论

### 4.1 湍流断面结构

圆管湍流断面可分为：

1. **viscous sublayer（黏性底层）**：紧贴壁面，流体横向脉动受到壁面抑制，黏性切应力占主导；
2. **turbulent core region（湍流核心区）**：远离壁面，湍动交换强烈，湍流切应力占主导。

:::NOTE
“黏性底层”是湍流内部的一小层，并不意味着整个管流属于层流。判定整个管流流态要看断面平均速度和雷诺数。
:::

> **插图占位｜图 6-4**：插入课件《Flow resistance-Turbulence》第 3–5 页“黏性底层与湍流核心区”示意图。

### 4.2 瞬时量、时均量与脉动量

以速度为例：

$$
\boxed{
 u_i=\bar u_i+u_i'
}
$$

其中：

- $u_i$：instantaneous velocity，瞬时速度；
- $\bar u_i$：time-averaged velocity，时均速度；
- $u_i'$：fluctuating velocity，脉动速度。

时均速度：

$$
\boxed{
\bar u_i=\frac1T\int_0^Tu_i(t)\,dt
}
$$

脉动量的时均值为零：

$$
\overline{u_i'}=0
$$

压力同样可分解：

$$
p=\bar p+p'
$$

### 4.3 湍流中的恒定流

湍流瞬时速度始终在波动，因此不能用“瞬时速度是否变化”判断恒定流。

若时均量不随时间改变：

$$
\frac{\partial\bar u}{\partial t}=0
$$

则称为恒定湍流。

### 4.4 湍流强度

常用湍流强度定义为脉动速度均方根与平均速度之比：

$$
\boxed{
I=\frac{\sqrt{\dfrac{\overline{u_x'^2}+\overline{u_y'^2}+\overline{u_z'^2}}{3}}}{\bar u}
}
$$

它反映速度脉动相对于平均运动的强弱。

### 4.5 湍流总切应力

湍流中总切应力由两部分组成：

$$
\boxed{
\tau=\tau_\nu+\tau_t
}
$$

#### 黏性切应力

$$
\boxed{
\tau_\nu=\mu\frac{d\bar u}{dy}
}
$$

它与动力黏度和时均速度梯度有关，近壁区占主导。

#### Reynolds stress

二维情况下：

$$
\boxed{
\tau_t=-\rho\overline{u'v'}
}
$$

它来自脉动造成的横向质量和动量交换。

物理意义：

- 与密度和脉动强度有关；
- 不直接由分子黏度决定；
- 在湍流核心区通常占主导。

负号来自典型脉动相关性：高动量流体向低速区运动、低动量流体向高速区运动，使 $u'$ 与 $v'$ 往往异号。

### 4.6 Prandtl mixing-length theory

Prandtl 假设流体微团在横向移动一段距离后，才与周围流体充分混合。这一特征距离称为 **mixing length $l$**。

近壁区取：

$$
\boxed{
l=\kappa y
}
$$

其中：

- $y$：距壁面距离；
- $\kappa\approx0.4$：Kármán 常数。

湍流切应力可近似写成：

$$
\boxed{
\tau_t=\rho l^2\left|\frac{d\bar u}{dy}\right|\frac{d\bar u}{dy}
}
$$

若速度梯度为正，可简写为：

$$
\tau_t=\rho l^2\left(\frac{d\bar u}{dy}\right)^2
$$

定义涡黏度：

$$
\boxed{
\eta=\rho l^2\left|\frac{d\bar u}{dy}\right|
}
$$

于是：

$$
\boxed{
\tau=(\mu+\eta)\frac{d\bar u}{dy}
}
$$

$\eta$ 不是流体本身的物性参数，它依赖流态、位置和湍动强度。

### 4.7 黏性底层速度分布

黏性底层中湍流切应力可忽略，且切应力近似等于壁面切应力：

$$
\tau_0\approx\mu\frac{d\bar u}{dy}
$$

积分并用壁面无滑移条件：

$$
\bar u=\frac{\tau_0}{\mu}y
$$

引入摩阻流速 $u_*$ 和运动黏度 $\nu$：

$$
\boxed{
\frac{\bar u}{u_*}=\frac{yu_*}{\nu}
}
$$

令：

$$
u^+=\frac{\bar u}{u_*},\qquad y^+=\frac{yu_*}{\nu}
$$

则：

$$
\boxed{
u^+=y^+}
$$

即黏性底层中速度沿 $y$ 近似线性分布。

### 4.8 黏性底层厚度

实验取黏性底层边缘：

$$
y^+\approx11.6
$$

所以：

$$
\boxed{
\delta_l=\frac{11.6\nu}{u_*}
}
$$

用 $u_*=v\sqrt{\lambda/8}$：

$$
\boxed{
\delta_l=\frac{32.8d}{Re\sqrt\lambda}
}
$$

结论：

- 黏性底层通常很薄；
- 在管径和流体性质不变时，流速增大、$Re$ 增大，$\delta_l$ 变薄；
- 粗糙凸起是否伸出黏性底层，决定管壁在水力学上表现为光滑或粗糙。

### 4.9 湍流核心区速度分布

在近壁湍流核心区，取：

$$
\tau\approx\tau_0,\qquad l=\kappa y
$$

可得对数律：

$$
\boxed{
\frac{\bar u}{u_*}=\frac1\kappa\ln y+C
}
$$

严格的无量纲形式为：

$$
\boxed{
\frac{\bar u}{u_*}=\frac1\kappa\ln\left(\frac{yu_*}{\nu}\right)+B
}
$$

光滑管经验式：

$$
\boxed{
\frac{\bar u}{u_*}=5.75\lg\left(\frac{yu_*}{\nu}\right)+5.5
}
$$

粗糙管经验式：

$$
\boxed{
\frac{\bar u}{u_*}=5.75\lg\left(\frac y\Delta\right)+8.48
}
$$

其中 $\Delta$ 为等效粗糙高度。

### 4.10 指数速度分布

圆管湍流也常用幂律近似：

$$
\boxed{
\frac{u}{u_{\max}}=\left(\frac y{r_0}\right)^{1/n}
}
$$

经典的 **one-seventh power law**：

$$
\frac{u}{u_{\max}}=\left(\frac y{r_0}\right)^{1/7}
$$

湍流速度分布比层流更均匀：

- 层流：$u_{\max}=2v$；
- 湍流：$u_{\max}$ 通常约为 $1.15v\sim1.26v$。

---

## 5 圆管湍流沿程损失

### 5.1 绝对粗糙度与相对粗糙度

- $\Delta$：absolute roughness，绝对粗糙度；
- $\Delta/d$：relative roughness，相对粗糙度。

相同粗糙高度对小管影响更明显，因此实际判断要使用 $\Delta/d$。

### 5.2 Nikuradse experiment

Nikuradse 在人工均匀砂粒粗糙管中测量 $\lambda$，得到不同 $Re$ 和 $\Delta/d$ 下的阻力规律。

按 $\lambda$ 的控制因素可分为五个区域：

1. 层流区：
   $$
   \lambda=\frac{64}{Re}
   $$
2. 层流向湍流过渡区：$\lambda$ 不稳定；
3. 水力光滑湍流区：
   $$
   \lambda=f(Re)
   $$
4. 光滑向粗糙的过渡湍流区：
   $$
   \lambda=f\left(Re,\frac\Delta d\right)
   $$
5. 水力粗糙湍流区：
   $$
   \lambda=f\left(\frac\Delta d\right)
   $$

> **插图占位｜图 6-5**：插入课件《Flow resistance-Turbulence》第 21–22 页 Nikuradse 图及粗糙凸起与黏性底层的三种相对关系。

### 5.3 三个湍流阻力区的物理解释

#### 水力光滑区

粗糙凸起完全埋在黏性底层中，主流感受不到粗糙度：

$$
\lambda=f(Re)
$$

#### 过渡粗糙区

一部分粗糙凸起伸出黏性底层：

$$
\lambda=f\left(Re,\frac\Delta d\right)
$$

#### 水力粗糙区

粗糙凸起明显穿出黏性底层，形状阻力占主导：

$$
\lambda=f\left(\frac\Delta d\right)
$$

此时 $\lambda$ 与 $Re$ 无关，所以：

$$
h_f\propto v^2
$$

### 5.4 光滑管与完全粗糙管公式

光滑湍流区：

$$
\boxed{
\frac1{\sqrt\lambda}
=-2\lg\left(\frac{2.51}{Re\sqrt\lambda}\right)
}
$$

完全粗糙区：

$$
\boxed{
\frac1{\sqrt\lambda}
=-2\lg\left(\frac{\Delta}{3.7d}\right)
}
$$

### 5.5 Colebrook–White equation

适用于圆管湍流的光滑区、过渡粗糙区和粗糙区：

$$
\boxed{
\frac1{\sqrt\lambda}
=-2\lg\left(
\frac{2.51}{Re\sqrt\lambda}
+\frac{\Delta}{3.7d}
\right)
}
$$

它是隐式方程，需要迭代或借助 Moody 图。

### 5.6 Barr 显式公式

课件采用：

$$
\boxed{
\frac1{\sqrt\lambda}
=-2\lg\left(
\frac{5.1286}{Re^{0.89}}
+\frac{\Delta}{3.7d}
\right)
}
$$

它可直接计算，适合考试手算。

### 5.7 Moody diagram

Moody 图以：

- 横轴 $Re$；
- 纵轴 $\lambda$；
- 曲线参数 $\Delta/d$

表示圆管阻力规律。

读图步骤：

1. 计算 $Re$；
2. 计算 $\Delta/d$；
3. 找到对应相对粗糙度曲线；
4. 在给定 $Re$ 处读取 $\lambda$；
5. 代入 Darcy–Weisbach 公式。

> **插图占位｜图 6-6**：插入课件《Flow resistance-Turbulence》第 28 页 Moody diagram。建议在图旁标注层流直线 $64/Re$、光滑管曲线和完全粗糙区水平趋势。

### 5.8 课件给出的阻力分区判别

课件依据 Moody 图给出一组工程判别边界：

1. 若
   $$
   Re\le 4000
   $$
   则处于层流区或层流向湍流的过渡区；
2. 若
   $$
   \frac\Delta d\le0.0008,
   \qquad
   4000<Re\le10\left(\frac\Delta d\right)^{-1}
   $$
   可按水力光滑湍流区处理；
3. 若
   $$
   Re>576.12\left(\frac\Delta d\right)^{-1.119}
   $$
   可按水力粗糙湍流区处理；
4. 其余情况属于光滑区向粗糙区的过渡区。

这些阈值是根据 Moody 图整理的经验边界。计算时直接使用 Moody 图或 Colebrook–White 公式通常更稳妥，不建议脱离课件强行死记。

### 5.9 圆管湍流计算流程

给定 $Q,d,L,\nu,\Delta$：

1. 平均速度：
   $$
   v=\frac{4Q}{\pi d^2}
   $$
2. 雷诺数：
   $$
   Re=\frac{vd}{\nu}
   $$
3. 判断流态；
4. 若为层流：$\lambda=64/Re$；
5. 若为湍流：用 Moody、Colebrook 或 Barr 求 $\lambda$；
6. 计算：
   $$
   h_f=\lambda\frac Ld\frac{v^2}{2g}
   $$

### 5.10 课堂例题：粗糙圆管沿程损失

已知：

$$
L=500\ \text{m},\quad d=0.2\ \text{m},\quad
\Delta=0.1\ \text{mm}
$$

$$
Q=10\times10^{-3}\ \text{m}^3/\text{s},\quad
\nu=1.31\times10^{-6}\ \text{m}^2/\text{s}
$$

平均速度：

$$
v=\frac{Q}{\pi d^2/4}=0.318\ \text{m/s}
$$

雷诺数：

$$
Re=\frac{vd}{\nu}\approx4.86\times10^4
$$

相对粗糙度：

$$
\frac\Delta d=\frac{0.0001}{0.2}=5.0\times10^{-4}
$$

用 Barr 公式：

$$
\lambda\approx0.0227
$$

沿程损失：

$$
h_f=0.0227\frac{500}{0.2}\frac{0.318^2}{2g}
\approx0.293\ \text{m}
$$

---

## 6 非圆管与明渠沿程损失

### 6.1 非圆形有压管

定义等效直径：

$$
\boxed{
 d_e=4R=\frac{4A}{\chi}
}
$$

湍流沿程损失：

$$
\boxed{
 h_f=\lambda\frac{L}{d_e}\frac{v^2}{2g}
}
$$

课件给出的近似适用范围：

- 矩形管：长宽比小于约 8；
- 椭圆管：长短轴比小于约 3。

:::WARNING
直接用 $d_e=4R$ 代替圆管直径主要用于湍流。非圆管层流的阻力系数还与断面形状有关，不能一概使用 $64/Re$。
:::

### 6.2 Chezy formula

明渠均匀流：

$$
\boxed{
 v=C\sqrt{RJ}
}
$$

其中：

- $C$：Chezy coefficient，谢才系数，量纲为 m$^{1/2}$/s；
- $R=A/\chi$：水力半径；
- $J$：水力坡度，均匀流中等于底坡。

与 Darcy 阻力系数的关系：

$$
\boxed{
 C=\sqrt{\frac{8g}{\lambda}}
}
$$

### 6.3 Manning formula

$$
C=\frac1nR^{1/6}
$$

代入 Chezy 公式：

$$
\boxed{
 v=\frac1nR^{2/3}J^{1/2}
}
$$

流量：

$$
\boxed{
 Q=Av=\frac A nR^{2/3}J^{1/2}
}
$$

其中 $n$ 为 Manning roughness coefficient，曼宁糙率。

:::NOTE
Manning 公式是经验公式，$n$ 的数值与所采用的单位制配套。本课程公式和表值均按 SI 制使用。
:::

课件给出的常见范围：

- 铸铁管、钢管：$n\approx0.011\sim0.013$；
- 混凝土管：$n\approx0.011\sim0.014$。

### 6.4 课堂例题：新供水管流量

已知：

$$
d=0.4\ \text{m},\quad L=100\ \text{m},\quad
n=0.011,\quad h_f=0.4\ \text{m}
$$

圆管满流：

$$
A=\frac{\pi d^2}{4}=0.126\ \text{m}^2
$$

$$
R=\frac d4=0.1\ \text{m}
$$

$$
J=\frac{h_f}{L}=0.004
$$

Manning 公式：

$$
v=\frac1{0.011}(0.1)^{2/3}(0.004)^{1/2}
\approx1.24\ \text{m/s}
$$

$$
Q=Av\approx0.156\ \text{m}^3/\text{s}
$$

---

## 7 局部水头损失

### 7.1 一般表达式

$$
\boxed{
 h_j=\zeta\frac{v^2}{2g}
}
$$

湍流中，局部损失通常与速度平方成正比。

$\zeta$ 主要受以下因素影响：

- 局部构件几何形状；
- 面积比；
- 转弯角度；
- 阀门开度；
- 选取的基准流速；
- 某些情况下还受 $Re$ 影响。

### 7.2 突然扩大损失

设水平管道从断面 1 突然扩大到断面 2，且：

$$
A_2>A_1,\qquad v_1>v_2
$$

动量方程、能量方程和连续方程联立得到 Borda–Carnot 公式：

$$
\boxed{
 h_j=\frac{(v_1-v_2)^2}{2g}
}
$$

利用连续方程：

$$
v_1A_1=v_2A_2
$$

若以 $v_1$ 为基准：

$$
\boxed{
 h_j=\left(1-\frac{A_1}{A_2}\right)^2\frac{v_1^2}{2g}
}
$$

$$
\boxed{
\zeta_1=\left(1-\frac{A_1}{A_2}\right)^2
}
$$

若以 $v_2$ 为基准：

$$
\boxed{
 h_j=\left(\frac{A_2}{A_1}-1\right)^2\frac{v_2^2}{2g}
}
$$

$$
\boxed{
\zeta_2=\left(\frac{A_2}{A_1}-1\right)^2
}
$$

> **插图占位｜图 6-7**：插入课件《Flow resistance-local loss》第 3 页突扩控制体图，标出 $p_1A_1$、$p_2A_2$、回流区及 $v_1,v_2$。

### 7.3 突然缩小损失

课件给出的近似式，以缩小后速度 $v_2$ 为基准：

$$
\boxed{
 h_j=\zeta\frac{v_2^2}{2g}
}
$$

$$
\boxed{
\zeta\approx0.5\left(1-\frac{A_2}{A_1}\right)
}
$$

突然缩小后先形成收缩断面，再发生扩散和混合，因此损失机理与反向突扩不同。

### 7.4 管道出口

管道排入很大的水池或容器：

$$
\frac{A_{pipe}}{A_{pool}}\approx0
$$

可看成突然扩大：

$$
\boxed{
\zeta_{out}=1.0
}
$$

$$
\boxed{
 h_{out}=\frac{v^2}{2g}
}
$$

物理意义：管内速度水头几乎全部耗散。

### 7.5 管道进口

课件给出的典型值：

- 直角进口：
  $$
  \zeta\approx0.5
  $$
- 圆角进口：
  $$
  \zeta\approx0.05\sim0.25
  $$
- 外伸进口：
  $$
  \zeta\approx1.0
  $$

进口越接近流线型，流动分离越弱，损失越小。

### 7.6 多级突扩的优化

速度由 $v_1$ 降到 $v_2$，中间加入速度为 $v$ 的管段，两次突扩总损失：

$$
h_j=\frac{(v_1-v)^2}{2g}+\frac{(v-v_2)^2}{2g}
$$

令：

$$
\frac{dh_j}{dv}=0
$$

得到：

$$
\boxed{
 v=\frac{v_1+v_2}{2}
}
$$

此时：

$$
\boxed{
 h_{j,\min}=\frac{(v_1-v_2)^2}{4g}
}
$$

单次突扩：

$$
h_{j,1}=\frac{(v_1-v_2)^2}{2g}
$$

所以两级等速度差突扩的最小损失为单次突扩的：

$$
\boxed{
\frac12
}
$$

### 7.7 减小局部损失的方法

核心原则：

> 让固体边界变化更平缓，使流线转弯和断面变化更连续。

例如：

- 突扩改为渐扩；
- 突缩改为圆滑收缩；
- 弯头增大曲率半径；
- 进口做成圆角；
- 避免阀门局部强烈节流。

---

## 8 边界层

### 8.1 边界层概念

当大雷诺数流体沿固体表面流动时，黏性影响主要集中在紧邻壁面的薄层内，该薄层称为 **boundary layer（边界层）**。

- 边界层内：速度梯度大，黏性不可忽略；
- 边界层外：速度梯度很小，可近似按理想流体或势流处理。

这使真实高 $Re$ 流动可分区求解。

### 8.2 边界层厚度

通常定义边界层边缘速度达到外部来流速度的约 $99\%$：

$$
u(y=\delta)\approx0.99U_\infty
$$

其中：

- $U_\infty$：边界层外来流速度；
- $\delta$：边界层厚度。

边界层沿流向逐渐增厚。

### 8.3 层流边界层与湍流边界层

边界层可经历：

1. 层流边界层；
2. 转捩区；
3. 湍流边界层。

局部雷诺数：

$$
\boxed{
Re_x=\frac{U_\infty x}{\nu}
}
$$

课件给出的光滑平板临界范围：

$$
\boxed{
3\times10^5<Re_{x,cr}<3\times10^6
}
$$

临界值受来流扰动强度影响，并非固定常数。

湍流边界层最靠近壁面处仍存在黏性底层。

> **插图占位｜图 6-8**：插入课件《Flow resistance-local loss》第 15–17 页光滑平板上层流边界层、转捩区、湍流边界层和黏性底层示意图。

### 8.4 光滑平板边界层厚度近似式

零压强梯度光滑平板：

层流边界层：

$$
\boxed{
\delta\approx\frac{5x}{\sqrt{Re_x}}
}
$$

湍流边界层：

$$
\boxed{
\delta\approx\frac{0.377x}{Re_x^{1/5}}
}
$$

这些是经验近似式，使用前要确认流态和适用条件。

### 8.5 压强梯度与边界层分离

若沿流向压强不变：

$$
\frac{dp}{dx}=0
$$

平板边界层通常只会持续增厚，不发生分离。

若沿流向压强升高：

$$
\boxed{
\frac{dp}{dx}>0
}
$$

称为 **adverse pressure gradient（逆压梯度）**。

流体沿流向减速，近壁低动量流体受到黏性阻力后可能停滞并反向运动，导致边界层脱离壁面。

分离点满足：

$$
\boxed{
\tau_0=\mu\left(\frac{\partial u}{\partial y}\right)_{y=0}=0
}
$$

分离点后出现回流和涡旋。

> **插图占位｜图 6-9**：插入课件《Flow resistance-local loss》第 19–20 页逆压梯度下边界层分离图。标出分离点、$\tau_0=0$、回流区。

### 8.6 Wake

边界层分离后，分离流线与物体后部包围的区域称为 **wake（尾流区）**。

尾流的影响：

- 增大绕流阻力；
- 消耗机械能；
- 产生冲刷或淤积；
- 交替脱落的涡旋可能诱发结构振动。

减小尾流的主要方法：

- 将物体外形设计得更流线化；
- 减缓逆压梯度；
- 推迟边界层分离。

---

## 9 绕流阻力与球体沉降

### 9.1 Drag 与 lift

固体与流体存在相对运动时，流体对固体的作用力可分解为：

- **drag force $F_D$**：平行于来流方向；
- **lift force $F_L$**：垂直于来流方向。

### 9.2 Kármán vortex street

钝体绕流发生边界层分离后，两侧涡旋可能交替脱落，形成 **Kármán vortex street（卡门涡街）**。

若涡脱落频率接近结构固有频率，可能发生共振，造成：

- 立管振动；
- 桥梁拉索风致振动；
- 构件疲劳破坏。

> **插图占位｜图 6-10**：插入课件《Flow resistance-Cd》第 4 页卡门涡街图。

### 9.3 绕流阻力公式

$$
\boxed{
F_D=C_D\frac{\rho u_0^2}{2}A
}
$$

其中：

- $F_D$：绕流阻力，N；
- $C_D$：drag coefficient，阻力系数；
- $\rho$：流体密度；
- $u_0$：未受扰动来流与物体的相对速度；
- $A$：物体迎流投影面积。

绕流阻力可理解为两部分的合力：

- **skin-friction drag**：物体表面切应力形成的摩擦阻力；
- **pressure drag / form drag**：前后压强不对称形成的压差阻力。

流线型物体的摩擦阻力相对重要；钝体发生分离并形成大尾流后，压差阻力通常占主导。

$C_D$ 主要取决于：

- 物体形状；
- 雷诺数；
- 表面粗糙度；
- 分离与尾流状态。

### 9.4 小球阻力系数

球体：

$$
Re=\frac{u_0d}{\nu}
$$

课件给出的分段近似：

$$
\boxed{
C_D=
\begin{cases}
\dfrac{24}{Re}, & Re<1,\\[6pt]
\dfrac{13}{\sqrt{Re}}, & 1<Re<10^3,\\[6pt]
0.44, & 10^3<Re<2\times10^5.
\end{cases}
}
$$

### 9.5 Stokes drag

当 $Re<1$：

$$
C_D=\frac{24}{Re}
$$

代入一般阻力公式，球的迎流面积 $A=\pi d^2/4$：

$$
\boxed{
F_D=3\pi\mu du_0
}
$$

### 9.6 球体终端沉降速度

球体下沉达到稳定时：

$$
G=F_B+F_D
$$

即：

$$
\rho_sg\frac{\pi d^3}{6}
=
ho g\frac{\pi d^3}{6}+3\pi\mu du_0
$$

解得：

$$
\boxed{
 u_0=\frac{d^2g(\rho_s-\rho)}{18\mu}
}
$$

其中：

- $\rho_s$：球体密度；
- $\rho$：流体密度；
- $d$：球径；
- $u_0$：球相对于流体的终端沉降速度。

:::WARNING
该式由 Stokes 阻力推导，必须校核：

$$
Re=\frac{u_0d}{\nu}<1
$$

若不满足，应改用相应 $C_D(Re)$ 关系重新求解。
:::

---

## 10 本章综合整理

### 10.1 计算题总流程

遇到管路能量损失问题：

1. 画流动系统，划分等直径流段与局部构件；
2. 由连续方程求各段平均速度；
3. 计算各段 $Re$；
4. 判断层流或湍流；
5. 求各段 $\lambda$；
6. 计算沿程损失：
   $$
   h_f=\lambda\frac Ld\frac{v^2}{2g}
   $$
7. 查取各局部构件 $\zeta$，确认基准速度；
8. 计算局部损失：
   $$
   h_j=\zeta\frac{v^2}{2g}
   $$
9. 叠加：
   $$
   h_w=\sum h_f+\sum h_j
   $$
10. 与 Bernoulli 方程联立求未知流量、压强或所需作用水头。

### 10.2 圆管层流与湍流对比

| 项目 | 圆管层流 | 圆管湍流 |
|---|---|---|
| 判别 | $Re<2300$ | 通常 $Re>4000$ |
| 主要动量传递 | 分子黏性 | 湍动交换 + 分子黏性 |
| 速度分布 | 抛物线，较不均匀 | 对数律/幂律，较均匀 |
| $u_{\max}/v$ | $2$ | 约 $1.15\sim1.26$ |
| 切应力总分布 | 由中心向壁面线性增大 | 同样线性增大 |
| 阻力系数 | $\lambda=64/Re$ | $\lambda=f(Re,\Delta/d)$ |
| 粗糙度影响 | 无 | 视阻力区而定 |
| 水头损失与速度 | $h_f\propto v$ | $h_f\propto v^{1.75\sim2}$ |
| 修正系数 | $\alpha=2,\beta=4/3$ | 工程中常近似 $\alpha\approx\beta\approx1$ |

### 10.3 高频易错点

1. 圆管切应力在中心为零，壁面最大；并非断面均匀分布。
2. 湍流断面靠壁处存在黏性底层，仍由黏性切应力主导。
3. 水力光滑不等于几何表面绝对光滑，它取决于粗糙凸起与黏性底层厚度的相对关系。
4. 水力粗糙区 $\lambda$ 与 $Re$ 无关，但水头损失仍随 $v^2$ 增大。
5. $\lambda=64/Re$ 只适用于充分发展圆管层流。
6. 突扩的局部阻力系数随选用 $v_1$ 或 $v_2$ 而变化，实际 $h_j$ 不变。
7. 出口损失 $\zeta=1$ 表示速度水头在大水池中耗散。
8. 边界层分离的关键条件是逆压梯度与近壁动量不足；分离点壁面切应力为零。
9. Stokes 沉降速度算完后必须校核 $Re<1$。

---

---

## 11 最后速记

### 11.1 三个总公式

$$
\boxed{h_w=\sum h_f+\sum h_j}
$$

$$
\boxed{h_f=\lambda\frac Ld\frac{v^2}{2g}}
$$

$$
\boxed{h_j=\zeta\frac{v^2}{2g}}
$$

### 11.2 均匀流与圆管切应力

$$
\boxed{\tau_0=\rho gRJ}
$$

$$
\boxed{\frac\tau{\tau_0}=\frac r{r_0}}
$$

$$
\boxed{u_*=\sqrt{\frac{\tau_0}{\rho}}=v\sqrt{\frac\lambda8}}
$$

### 11.3 圆管层流

$$
\boxed{Re<2300}
$$

$$
\boxed{u=2v\left[1-\left(\frac r{r_0}\right)^2\right]}
$$

$$
\boxed{u_{\max}=2v}
$$

$$
\boxed{\lambda=\frac{64}{Re}}
$$

$$
\boxed{Q=\frac{\pi d^4}{128\mu}\frac{\Delta p}{L}}
$$

### 11.4 湍流

$$
\boxed{u_i=\bar u_i+u_i'}
$$

$$
\boxed{\tau=\mu\frac{d\bar u}{dy}-\rho\overline{u'v'}}
$$

$$
\boxed{\delta_l=\frac{11.6\nu}{u_*}}
$$

$$
\boxed{
\frac1{\sqrt\lambda}
=-2\lg\left(
\frac{2.51}{Re\sqrt\lambda}+\frac\Delta{3.7d}
\right)
}
$$

### 11.5 非圆管与明渠

$$
\boxed{d_e=4R=\frac{4A}{\chi}}
$$

$$
\boxed{v=C\sqrt{RJ}}
$$

$$
\boxed{v=\frac1nR^{2/3}J^{1/2}}
$$

### 11.6 局部损失

突扩：

$$
\boxed{h_j=\frac{(v_1-v_2)^2}{2g}}
$$

出口：

$$
\boxed{\zeta=1}
$$

### 11.7 边界层与绕流

$$
\boxed{Re_x=\frac{U_\infty x}{\nu}}
$$

分离点：

$$
\boxed{\tau_0=0}
$$

阻力：

$$
\boxed{F_D=C_D\frac{\rho u_0^2}{2}A}
$$

Stokes 沉降：

$$
\boxed{u_0=\frac{d^2g(\rho_s-\rho)}{18\mu},\quad Re<1}
$$

---

## 资料对应说明

- 《English_Flow resistance-fundamentals》：Section 1–3，阻力概述、流态判别、圆管层流；
- 《English_Flow resistance-Turbulence》：Section 4–6，湍流理论、圆管湍流阻力、非圆管与明渠；
- 《English_Flow resistance-local loss》：Section 7–8，局部损失与边界层；
- 《English_Flow resistance-Cd》：Section 9 与全章总结，绕流阻力和球体沉降；
- 教材第 6 章：用于补充推导、适用条件与习题；
- 四份历年卷：用于筛选 Reynolds 数、圆管切应力、黏性底层、粗糙区、层流流量和突扩损失等高频考点。

---

# 第二部分：练习题

本部分按照“概念判断 → 管内流动 → 能量损失 → 边界层与绕流”的顺序安排，共 **16 题**。

题目来源标记：

- `【24–25 真题】`：直接整理自 2024–2025 春夏期末卷；
- `【历年卷改编】`：依据 2021–2024 历年卷中的同类考点整理；
- `【课件例题】`：来自本章四份课堂课件；
- `【教材习题】`：来自教材第 6 章习题；
- `【综合变式】`：围绕课堂公式设计的少量综合题。

:::TIP
建议先合上答案独立作答：

- 概念题：每题 2–4 分钟；
- 单公式计算题：每题 6–8 分钟；
- 综合损失题：每题 10–15 分钟。
:::

---

## A 基础概念与判断

### A1 Reynolds number 的物理意义

`【24–25 真题】`

**English**

The Reynolds number represents the ratio of ______ force to ______ force in a fluid flow.

**中文**

雷诺数表示流动中 ______ 力与 ______ 力之比。

<details>
<summary>答案与讲解</summary>

$$
\boxed{\text{inertial force / viscous force}}
$$

即：

$$
\boxed{Re\sim\frac{\text{惯性力}}{\text{黏性力}}}
$$

$Re$ 小，黏性作用相对显著，流动趋于有序；$Re$ 大，惯性作用强，扰动更容易发展为湍流。
</details>

### A2 管径变化与层流流量

`【24–25 真题与 23–24 真题改编】`

**English**

A fully developed laminar flow occurs in a circular pipe. The pipe length and the pressure difference between its ends remain unchanged. If the pipe diameter is doubled, the flow rate becomes eight times the original value. True or false?

**中文**

圆管内为充分发展层流，管长和两端压强差保持不变。若管径增大为原来的 2 倍，流量变为原来的 8 倍。判断正误。

<details>
<summary>答案与讲解</summary>

$$
\boxed{\text{False}}
$$

Hagen–Poiseuille 公式：

$$
Q=\frac{\pi d^4}{128\mu}\frac{\Delta p}{L}
$$

其余条件不变时：

$$
Q\propto d^4
$$

所以：

$$
\frac{Q_2}{Q_1}=\left(\frac{d_2}{d_1}\right)^4=2^4=16
$$

正确结论为流量增大到原来的 **16 倍**。
</details>

### A3 圆管切应力与粗糙区阻力

`【24–25 真题】`

**English**

Judge the following statements.

1. The shear stress is uniformly distributed over the cross-section of a uniform circular-pipe flow.
2. In the fully rough turbulent regime, the friction factor is independent of Reynolds number.

**中文**

判断下列说法：

1. 圆管均匀流过流断面上的切应力均匀分布。
2. 在水力粗糙湍流区，沿程阻力系数与雷诺数无关。

<details>
<summary>答案与讲解</summary>

1. $\boxed{\text{False}}$

   圆管均匀流：

   $$
   \frac\tau{\tau_0}=\frac r{r_0}
   $$

   切应力从中心的 0 线性增加到壁面的最大值 $\tau_0$。

2. $\boxed{\text{True}}$

   水力粗糙区中粗糙凸起穿出黏性底层，阻力主要由粗糙形状决定：

   $$
   \lambda=f\left(\frac\Delta d\right)
   $$

   因而与 $Re$ 无关。
</details>

### A4 黏性底层厚度

`【24–25 真题】`

**English**

For water flowing in a pipe, the pipe diameter, water temperature and friction factor remain constant. As the flow rate increases, the thickness of the viscous sublayer will:

A. increase  
B. decrease  
C. remain unchanged  
D. be uncertain

**中文**

管径、水温和沿程阻力系数保持不变。随流量增大，黏性底层厚度将：

A. 增大  
B. 减小  
C. 不变  
D. 无法判断

<details>
<summary>答案与讲解</summary>

$$
\boxed{\text{B. decrease}}
$$

$$
\delta_l=\frac{32.8d}{Re\sqrt\lambda}
$$

在 $d,\nu,\lambda$ 不变时，流量增大意味着 $v$ 增大，从而 $Re=vd/\nu$ 增大，所以 $\delta_l$ 变小。
</details>

### A5 为什么使用下临界雷诺数

`【课件思考题】`

**English**

Why is the lower critical Reynolds number, rather than the upper critical Reynolds number, used as the criterion for distinguishing laminar and turbulent flows?

**中文**

为什么判别层流和湍流时使用下临界雷诺数，而不使用上临界雷诺数？

<details>
<summary>答案与讲解</summary>

上临界雷诺数对应升速过程中层流失稳，其数值对入口扰动、设备振动和来流脉动很敏感，不稳定。

下临界雷诺数对应降速过程中湍流恢复为层流，其数值较稳定，主要由过流断面形状决定。因此工程判别采用下临界值。

圆管中通常取：

$$
Re_c\approx2300
$$
</details>

### A6 圆管湍流的速度与切应力分布

`【21–22 真题改编】`

**English**

Describe the velocity distribution and shear-stress distribution of a fully developed turbulent flow in a circular pipe, and sketch them qualitatively.

**中文**

说明圆管充分发展湍流的速度分布和切应力分布特点，并定性画图。

<details>
<summary>答案与讲解</summary>

**速度分布：**

- 管壁无滑移，$u=0$；
- 黏性底层中近似线性分布；
- 湍流核心区近似满足对数律或幂律；
- 断面速度较层流均匀，中心速度约为 $1.15v\sim1.26v$。

**总切应力分布：**

$$
\frac\tau{\tau_0}=\frac r{r_0}
$$

- 管轴处为 0；
- 向壁面线性增大；
- 管壁处达到 $\tau_0$。

**组成变化：**

- 近壁区：黏性切应力占主导；
- 核心区：Reynolds 湍流切应力占主导。

> 作图时，速度曲线应比层流抛物线更“平坦”；切应力画成从中心 0 到壁面最大值的直线。
</details>

---

## B 圆管层流与湍流计算

### B1 通风管流态与最大层流流量

`【教材习题 6-2】`

**English**

Air flows through a ventilation pipe of diameter $d=0.25\ \mathrm m$ at an average velocity of $v=3\ \mathrm{m/s}$. At $30^\circ\mathrm C$, the kinematic viscosity is $\nu=16.07\times10^{-6}\ \mathrm{m^2/s}$.

1. Determine the flow regime.
2. Determine the maximum flow rate for which laminar flow can be maintained, using $Re_c=2300$.

**中文**

通风管直径 $d=0.25\ \mathrm m$，平均风速 $v=3\ \mathrm{m/s}$，$30^\circ\mathrm C$ 时运动黏度 $\nu=16.07\times10^{-6}\ \mathrm{m^2/s}$。

1. 判断流态；
2. 取 $Re_c=2300$，求保持层流的最大流量。

<details>
<summary>答案与讲解</summary>

1. 雷诺数：

$$
Re=\frac{vd}{\nu}
=\frac{3\times0.25}{16.07\times10^{-6}}
\approx4.67\times10^4
$$

因此：

$$
\boxed{\text{turbulent flow}}
$$

2. 最大层流平均速度：

$$
v_{\max}=\frac{Re_c\nu}{d}
=\frac{2300\times16.07\times10^{-6}}{0.25}
\approx0.148\ \mathrm{m/s}
$$

断面面积：

$$
A=\frac{\pi d^2}{4}=0.0491\ \mathrm{m^2}
$$

最大流量：

$$
Q_{\max}=Av_{\max}
\approx0.0491\times0.148
=7.26\times10^{-3}\ \mathrm{m^3/s}
$$

$$
\boxed{Q_{\max}\approx7.3\times10^{-3}\ \mathrm{m^3/s}}
$$
</details>

### B2 粗糙圆管沿程损失

`【课件例题】`

**English**

A pipe has length $L=500\ \mathrm m$, diameter $d=0.20\ \mathrm m$, roughness height $\Delta=0.10\ \mathrm{mm}$ and carries water at $10^\circ\mathrm C$ at a flow rate $Q=0.010\ \mathrm{m^3/s}$. Take $\nu=1.31\times10^{-6}\ \mathrm{m^2/s}$. Use the Barr equation to determine the frictional head loss.

**中文**

管长 $500\ \mathrm m$、直径 $0.20\ \mathrm m$、粗糙高度 $0.10\ \mathrm{mm}$，输送 $10^\circ\mathrm C$ 水，流量 $0.010\ \mathrm{m^3/s}$，取 $\nu=1.31\times10^{-6}\ \mathrm{m^2/s}$。用 Barr 公式求沿程水头损失。

<details>
<summary>答案与讲解</summary>

平均速度：

$$
v=\frac{4Q}{\pi d^2}=0.318\ \mathrm{m/s}
$$

雷诺数：

$$
Re=\frac{vd}{\nu}
\approx4.86\times10^4
$$

相对粗糙度：

$$
\frac\Delta d=\frac{0.0001}{0.2}=5.0\times10^{-4}
$$

Barr 公式：

$$
\frac1{\sqrt\lambda}
=-2\lg\left(
\frac{5.1286}{Re^{0.89}}+\frac\Delta{3.7d}
\right)
$$

解得：

$$
\lambda\approx0.0227
$$

沿程损失：

$$
h_f=0.0227\frac{500}{0.2}\frac{0.318^2}{2g}
\approx0.293\ \mathrm m
$$

$$
\boxed{h_f\approx0.29\ \mathrm m}
$$
</details>

### B3 均匀圆管流的切应力

`【教材习题 6-6】`

**English**

A uniform pipe flow has $L=100\ \mathrm m$, $d=0.020\ \mathrm m$ and hydraulic gradient $J=0.008$. For water with $\rho=1000\ \mathrm{kg/m^3}$, determine:

1. the wall shear stress;
2. the shear stress at $r=0.005\ \mathrm m$;
3. the head loss.

**中文**

均匀圆管流长 $100\ \mathrm m$、直径 $0.020\ \mathrm m$、水力坡度 $J=0.008$。取水密度 $1000\ \mathrm{kg/m^3}$，求壁面切应力、$r=0.005\ \mathrm m$ 处切应力和水头损失。

<details>
<summary>答案与讲解</summary>

圆管水力半径：

$$
R=\frac d4=0.005\ \mathrm m
$$

1. 壁面切应力：

$$
\tau_0=\rho gRJ
=1000\times9.81\times0.005\times0.008
$$

$$
\boxed{\tau_0=0.392\ \mathrm{Pa}}
$$

2. 半径 $r$ 处的同心流管水力半径为 $R'=r/2$：

$$
\tau=\rho g\frac r2J
$$

$$
\tau=1000\times9.81\times\frac{0.005}{2}\times0.008
$$

$$
\boxed{\tau=0.196\ \mathrm{Pa}}
$$

也可用：

$$
\tau=\tau_0\frac r{r_0}
=0.392\times\frac{0.005}{0.010}
=0.196\ \mathrm{Pa}
$$

3. 水头损失：

$$
\boxed{h_f=JL=0.008\times100=0.80\ \mathrm m}
$$
</details>

---

## C 沿程损失、局部损失与明渠

### C1 推导突然扩大损失

`【21–22 真题改编】`

**English**

For a horizontal pipe with a sudden enlargement from area $A_1$ to $A_2$, derive the head-loss formula

$$
h_j=\frac{(v_1-v_2)^2}{2g}.
$$

Assume steady incompressible flow and take $\alpha_1=\alpha_2=\beta_1=\beta_2=1$.

**中文**

水平管道由 $A_1$ 突然扩大到 $A_2$。假设恒定不可压缩流，且 $\alpha_1=\alpha_2=\beta_1=\beta_2=1$，推导：

$$
h_j=\frac{(v_1-v_2)^2}{2g}.
$$

<details>
<summary>答案与讲解</summary>

连续方程：

$$
A_1v_1=A_2v_2=Q
$$

取突扩区域为控制体。除入口断面上的压力 $p_1A_1$ 外，突扩台阶环形面上还受近似为 $p_1$ 的压力：

$$
p_1(A_2-A_1)
$$

因此总的上游压力作用为：

$$
p_1A_1+p_1(A_2-A_1)=p_1A_2
$$

沿流向动量方程：

$$
(p_1-p_2)A_2=\rho Q(v_2-v_1)
$$

利用 $Q=A_2v_2$：

$$
\frac{p_1-p_2}{\rho}=v_2(v_2-v_1)
$$

能量方程：

$$
\frac{p_1}{\rho g}+\frac{v_1^2}{2g}
=
\frac{p_2}{\rho g}+\frac{v_2^2}{2g}+h_j
$$

将动量方程给出的压强关系代入，化简得：

$$
\boxed{h_j=\frac{(v_1-v_2)^2}{2g}}
$$

进一步利用 $v_2=v_1A_1/A_2$：

$$
\boxed{
 h_j=\left(1-\frac{A_1}{A_2}\right)^2\frac{v_1^2}{2g}
}
$$

**得分关键：**必须同时列出连续、动量、能量三个方程，并说明速度与动量修正系数取 1。
</details>

### C2 两级突扩的最小损失

`【课件例题】`

**English**

A flow slows down from velocity $v_1$ to $v_2$ through a sudden enlargement. An intermediate pipe is inserted, producing two successive sudden enlargements. Neglect interaction between the two local regions.

1. Determine the intermediate velocity $v$ that minimizes the total head loss.
2. Compare the minimum loss with that of a single sudden enlargement.

**中文**

流速由 $v_1$ 经突扩降至 $v_2$。在中间加入一段管道，使过程变为两次连续突扩，忽略两局部区相互影响。求使总损失最小的中间速度，并与单次突扩比较。

<details>
<summary>答案与讲解</summary>

两次突扩总损失：

$$
h_j=\frac{(v_1-v)^2}{2g}+\frac{(v-v_2)^2}{2g}
$$

求极小值：

$$
\frac{dh_j}{dv}
=\frac{-2(v_1-v)+2(v-v_2)}{2g}=0
$$

因此：

$$
\boxed{v=\frac{v_1+v_2}{2}}
$$

代回：

$$
h_{j,\min}
=2\times\frac{[(v_1-v_2)/2]^2}{2g}
=\frac{(v_1-v_2)^2}{4g}
$$

单次突扩：

$$
h_{j,1}=\frac{(v_1-v_2)^2}{2g}
$$

所以：

$$
\boxed{h_{j,\min}=\frac12h_{j,1}}
$$

本质：将总速度差均匀分配到两次突扩，可减弱每次混合损失。
</details>

### C3 梯形明渠均匀流

`【教材习题 6-15】`

**English**

A trapezoidal earth channel has bottom width $b=2\ \mathrm m$, side slope $m=1.5$ (horizontal to vertical), water depth $h=1.5\ \mathrm m$, bed slope $J=0.0004$ and Manning coefficient $n=0.0225$. Determine the mean velocity and discharge.

**中文**

梯形土渠底宽 $b=2\ \mathrm m$，边坡系数 $m=1.5$，水深 $h=1.5\ \mathrm m$，底坡 $J=0.0004$，曼宁糙率 $n=0.0225$。求平均流速与流量。

<details>
<summary>答案与讲解</summary>

梯形断面面积：

$$
A=h(b+mh)
=1.5(2+1.5\times1.5)
=6.375\ \mathrm{m^2}
$$

湿周：

$$
\chi=b+2h\sqrt{1+m^2}
$$

$$
\chi=2+2\times1.5\sqrt{1+1.5^2}
\approx7.408\ \mathrm m
$$

水力半径：

$$
R=\frac A\chi
\approx0.861\ \mathrm m
$$

Manning 公式：

$$
v=\frac1nR^{2/3}J^{1/2}
$$

$$
v=\frac1{0.0225}(0.861)^{2/3}(0.0004)^{1/2}
\approx0.804\ \mathrm{m/s}
$$

$$
\boxed{v\approx0.80\ \mathrm{m/s}}
$$

流量：

$$
Q=Av=6.375\times0.804
\approx5.13\ \mathrm{m^3/s}
$$

$$
\boxed{Q\approx5.13\ \mathrm{m^3/s}}
$$
</details>

### C4 引水管所需作用水头

`【教材习题 6-23 改编】`

**English**

Water is discharged from a large reservoir through a pipe of diameter $d=0.50\ \mathrm m$ and total length $L=1200\ \mathrm m$. The flow rate is $Q=0.20\ \mathrm{m^3/s}$ and the Darcy friction factor is $\lambda=0.015$. The system contains a sharp-edged entrance with $\zeta_e=0.5$, three bends each with $\zeta_b=0.8$, and a valve with $\zeta_v=0.2$. The outlet is a free jet. Determine the required head $H$ between the reservoir surface and the outlet centreline.

**中文**

大水池通过直径 $0.50\ \mathrm m$、总长 $1200\ \mathrm m$ 的管道自由出流。流量 $0.20\ \mathrm{m^3/s}$，Darcy 阻力系数 $\lambda=0.015$。系统有直角进口 $\zeta_e=0.5$、3 个弯头且每个 $\zeta_b=0.8$、阀门 $\zeta_v=0.2$。求水池自由液面到出口中心的所需作用水头 $H$。

<details>
<summary>答案与讲解</summary>

管内平均速度：

$$
A=\frac{\pi d^2}{4}=0.1963\ \mathrm{m^2}
$$

$$
v=\frac QA=\frac{0.20}{0.1963}
\approx1.019\ \mathrm{m/s}
$$

速度水头：

$$
\frac{v^2}{2g}\approx0.0529\ \mathrm m
$$

从自由液面到自由射流出口列 Bernoulli 方程：

$$
H=\frac{v^2}{2g}+h_f+\sum h_j
$$

沿程损失：

$$
h_f=\lambda\frac Ld\frac{v^2}{2g}
$$

局部损失系数总和：

$$
\sum\zeta=0.5+3\times0.8+0.2=3.1
$$

因此：

$$
H=\left[1+\lambda\frac Ld+\sum\zeta\right]\frac{v^2}{2g}
$$

$$
H=\left[1+0.015\frac{1200}{0.5}+3.1\right]0.0529
$$

$$
H=(40.1)(0.0529)\approx2.12\ \mathrm m
$$

$$
\boxed{H\approx2.12\ \mathrm m}
$$

**易错点：**出口为自由射流，因此出口速度水头 $v^2/(2g)$ 要保留；只有排入大水池时才可用出口局部损失 $\zeta=1$ 代替该速度耗散过程。
</details>

---

## D 边界层与绕流

### D1 光滑平板边界层厚度

`【综合变式】`

**English**

Water with $\nu=1.0\times10^{-6}\ \mathrm{m^2/s}$ flows over a smooth flat plate at $U_\infty=1.0\ \mathrm{m/s}$.

1. At $x=0.10\ \mathrm m$, assume a laminar boundary layer and estimate its thickness.
2. At $x=5.0\ \mathrm m$, assume a turbulent boundary layer and estimate its thickness.

Use

$$
\delta_l=\frac{5x}{\sqrt{Re_x}},\qquad
\delta_t=\frac{0.377x}{Re_x^{1/5}}.
$$

**中文**

运动黏度 $1.0\times10^{-6}\ \mathrm{m^2/s}$ 的水以 $1.0\ \mathrm{m/s}$ 流过光滑平板。分别估算 $x=0.10\ \mathrm m$ 处的层流边界层厚度和 $x=5.0\ \mathrm m$ 处的湍流边界层厚度。

<details>
<summary>答案与讲解</summary>

1. $x=0.10\ \mathrm m$：

$$
Re_x=\frac{U_\infty x}{\nu}
=\frac{1.0\times0.10}{1.0\times10^{-6}}
=1.0\times10^5
$$

$$
\delta_l=\frac{5\times0.10}{\sqrt{10^5}}
=1.58\times10^{-3}\ \mathrm m
$$

$$
\boxed{\delta_l\approx1.58\ \mathrm{mm}}
$$

2. $x=5.0\ \mathrm m$：

$$
Re_x=\frac{1.0\times5.0}{1.0\times10^{-6}}
=5.0\times10^6
$$

$$
\delta_t=\frac{0.377\times5.0}{(5.0\times10^6)^{1/5}}
\approx8.62\times10^{-2}\ \mathrm m
$$

$$
\boxed{\delta_t\approx0.086\ \mathrm m}
$$

结果反映边界层沿流向不断增厚。
</details>

### D2 边界层分离

`【课件思考题】`

**English**

Explain how boundary-layer separation is formed. State the condition at the separation point and give one effective method for reducing the wake.

**中文**

说明边界层分离如何形成，写出分离点条件，并给出一种减小尾流区的方法。

<details>
<summary>答案与讲解</summary>

当流体沿流向进入升压区：

$$
\frac{dp}{dx}>0
$$

外部主流减速。边界层内近壁流体原本动量较小，又持续受到黏性阻力，可能先停滞，再出现反向流动。边界流线随之离开壁面，形成分离与尾流。

分离点：

$$
\boxed{
\tau_0=\mu\left(\frac{\partial u}{\partial y}\right)_{y=0}=0
}
$$

减小尾流的方法：将物体设计为流线型，使断面变化平缓，减弱逆压梯度并推迟分离。
</details>

### D3 烟气中的颗粒能否沉降

`【教材习题 6-24】`

**English**

Flue gas rises at $0.60\ \mathrm{m/s}$. Its kinematic viscosity is $2.23\times10^{-4}\ \mathrm{m^2/s}$ and density is $0.20\ \mathrm{kg/m^3}$. A spherical particle has diameter $d=0.10\ \mathrm{mm}$ and density $\rho_s=1.1\times10^3\ \mathrm{kg/m^3}$. Determine whether the particle can settle downward. Use Stokes' law and verify its validity.

**中文**

烟气以 $0.60\ \mathrm{m/s}$ 向上运动，运动黏度 $2.23\times10^{-4}\ \mathrm{m^2/s}$、密度 $0.20\ \mathrm{kg/m^3}$。球形颗粒直径 $0.10\ \mathrm{mm}$、密度 $1.1\times10^3\ \mathrm{kg/m^3}$。用 Stokes 公式判断颗粒能否向下沉降，并校核适用性。

<details>
<summary>答案与讲解</summary>

动力黏度：

$$
\mu=\rho\nu
=0.20\times2.23\times10^{-4}
=4.46\times10^{-5}\ \mathrm{Pa\cdot s}
$$

颗粒相对于烟气的终端沉降速度：

$$
u_0=\frac{d^2g(\rho_s-\rho)}{18\mu}
$$

代入 $d=1.0\times10^{-4}\ \mathrm m$：

$$
u_0\approx0.134\ \mathrm{m/s}
$$

校核：

$$
Re=\frac{u_0d}{\nu}
=\frac{0.134\times10^{-4}}{2.23\times10^{-4}}
\approx0.060<1
$$

Stokes 公式适用。

烟气向上速度为 $0.60\ \mathrm{m/s}$，大于颗粒相对向下沉降速度 $0.134\ \mathrm{m/s}$。以地面为参考，颗粒速度为：

$$
0.60-0.134=0.466\ \mathrm{m/s}\quad\text{向上}
$$

因此：

$$
\boxed{\text{颗粒不能向下沉降，将被烟气向上携带。}}
$$
</details>

---
