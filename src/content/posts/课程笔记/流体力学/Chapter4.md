---
title: FluidMechanics—Chapter4：Basic Equations of Steady Total Flow
published: 2026-06-14
description: 总流分析法、连续性方程、伯努利方程、水头线、方程扩展与恒定总流动量方程
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

本章在课件中划分为 **Chapter 4: Basic Equations of Steady Total Flow**，对应教材第 5 章“恒定总流基本方程”。

这一章的核心链条是：

> 先把复杂流动截取成一个 **控制体（control volume）**，再用 **连续性方程（continuity equation）** 管质量、用 **伯努利方程（Bernoulli equation）** 管机械能、用 **动量方程（momentum equation）** 管受力。

三个方程分别回答：

- **连续性方程**：流进去多少，流出来多少？
- **伯努利方程**：流体的机械能如何转化与损失？
- **动量方程**：流向或流速改变时，边界需要施加多大的力？

本章最重要的解题习惯是：

1. 先选控制体与计算断面；
2. 再画受力图、标高程、压强和速度方向；
3. 判断未知量属于流量、能量还是力；
4. 按需要联立连续性方程、伯努利方程和动量方程。

:::TIP
**教学范围判断**

两份课件完整覆盖了教材第 5 章的四个主体部分：

- 总流分析法；
- 恒定不可压缩总流连续性方程；
- 恒定总流伯努利方程及其扩展；
- 恒定总流动量方程。

课件没有明确宣布某一节不考，因此本章主体内容均应视为考试范围。教材中部分较长的推导、未在课件中展开的习题和移动控制体问题，放在练习或拓展位置，不作为笔记主干。
:::

:::WARNING
课件中有一页讨论“等直径倾斜管内两断面速度大小”，给出的速度结论与恒定不可压缩流的连续性方程冲突。对同一根等直径刚性管，截面平均速度应满足 $v_1=v_2$。考试时优先使用连续性方程检查结果。
:::

---

## 目录

- [第一部分：课程笔记](#第一部分课程笔记)
  - [1 总流分析法](#1-总流分析法)
  - [2 恒定总流连续性方程](#2-恒定总流连续性方程)
  - [3 恒定总流伯努利方程](#3-恒定总流伯努利方程)
  - [4 水头线](#4-水头线)
  - [5 伯努利方程的扩展](#5-伯努利方程的扩展)
  - [6 恒定总流动量方程](#6-恒定总流动量方程)
  - [7 本章公式与解题检查表](#7-本章公式与解题检查表)
  - [8 教材型补充例题](#8-教材型补充例题)
  - [9 高频判断与易错结论](#9-高频判断与易错结论)
  - [10 英文题目常见表达](#10-英文题目常见表达)
  - [11 三大方程之间的关系](#11-三大方程之间的关系)
- [第二部分：练习题](#第二部分练习题)
  - [A1 总流概念与连续性方程](#a1-总流概念与连续性方程)
  - [A2 伯努利方程与水头线](#a2-伯努利方程与水头线)
  - [A3 流量计、泵与气流伯努利方程](#a3-流量计泵与气流伯努利方程)
  - [A4 动量方程与综合题](#a4-动量方程与综合题)

---

# 第一部分：课程笔记

## 1 总流分析法

### 1.1 元流、总流、控制体与过流断面

#### 元流（element flow）

元流是横截面积无限小的流束，可以理解为沿一条流线周围截取出的极细流管。

特点：

- 横截面积为 $dA$；
- 同一断面上各点的运动参数可视为相同；
- 当横截面积趋近于零时，元流轴线趋近于流线。

#### 总流（total flow）

总流是具有有限横截面积的流束，由大量元流组成。

特点：

- 横截面积为 $A$；
- 同一断面上点速度 $u$ 一般随位置变化；
- 工程计算通常用断面平均速度 $v$ 表示整个断面的运动。

#### 控制体（control volume）

控制体是人为选定的一块空间区域。分析时重点研究：

- 哪些流体穿过控制面；
- 控制体内流体受到哪些外力；
- 质量、能量和动量如何通过控制面传递。

#### 控制断面 / 过流断面（control cross-section / flow cross-section）

过流断面是与流线近似正交的断面。它通常位于控制体的入口或出口。

> **图片占位：** 插入课件中“障碍物前后控制体与 1-1、2-2 控制断面”示意图。

### 1.2 总流分析的三个步骤

总流分析法可以概括为：

1. **从元流出发**：先写元流的质量、能量或动量关系；
2. **对整个断面积分**：把无数元流的贡献相加；
3. **引入断面平均量**：用平均速度及修正系数把积分结果写成工程上可用的形式。

### 1.3 为什么控制断面应选在渐变流区

#### 渐变流（gradually-varied flow）

渐变流中，流线近似为平行直线；若流线有弯曲，其曲率半径也很大。均匀流可看作渐变流的极限情况。

渐变流断面具有两个关键性质：

- 速度方向近似垂直于断面；
- 断面内法向加速度很小，动水压强近似按静水压强规律分布。

因此，在同一渐变流断面上有

$$
z+\frac{p}{\rho g}=C.
$$

这里：

- $z$：断面上计算点相对基准面的高程，单位 m；
- $p$：该点压强，单位 Pa；
- $\rho$：流体密度，单位 $\mathrm{kg/m^3}$；
- $g$：重力加速度，单位 $\mathrm{m/s^2}$；
- $p/(\rho g)$：压强水头，单位 m。

这条关系只保证**同一个渐变流断面内**的测压管水头相同。不同断面之间的 $z+p/(\rho g)$ 通常会变化。

#### 急变流（rapidly-varied flow）

急变流中流线明显弯曲、扩散或收缩，法向加速度不可忽略。例如：

- 弯头内部；
- 突然扩大、突然缩小附近；
- 闸门、孔口附近；
- 射流碰撞区域。

急变区本身可以包含在控制体内部，但计算断面应尽量放到急变区前后已经恢复为渐变流的位置。

> **图片占位：** 插入课件“渐变流—急变流—渐变流及可选控制断面”示意图。

### 1.4 断面平均速度（cross-sectional mean velocity）

点速度记为 $u$，断面平均速度记为 $v$：

$$
v=\frac{1}{A}\int_A u\,dA=\frac{Q}{A}.
$$

其中：

- $A$：过流断面面积，单位 $\mathrm{m^2}$；
- $Q$ 或 $q_V$：体积流量，单位 $\mathrm{m^3/s}$；
- $u$：断面上某一点的局部速度；
- $v$：使 $Q=vA$ 成立的等效平均速度。

几何意义：真实速度分布曲线与断面围成的“体积”，等于底面积为 $A$、高度为 $v$ 的柱体体积。

> **图片占位：** 插入课件“点速度分布与平均速度矩形等面积”示意图。

### 1.5 动量修正系数 $\beta$

单位时间通过断面的真实动量流率为

$$
\rho\int_A u^2\,dA.
$$

为了用平均速度表示，引入动量修正系数（momentum correction factor）$\beta$：

$$
\boxed{\beta=\frac{\displaystyle\int_A u^2\,dA}{Av^2}}.
$$

于是动量流率可写成

$$
\boxed{\rho\beta Q\mathbf v}.
$$

其中 $\mathbf v$ 为断面平均速度矢量。

一般有 $\beta\ge 1$。速度分布越不均匀，$\beta$ 越大。

- 工程中较均匀的湍流断面：$\beta\approx1.02\sim1.05$；
- 许多基础计算直接取 $\beta=1$；
- 圆管充分发展层流：$\beta=4/3$。

### 1.6 动能修正系数 $\alpha$

单位时间通过断面的真实动能为

$$
\frac{\rho}{2}\int_A u^3\,dA.
$$

引入动能修正系数（kinetic-energy correction factor）$\alpha$：

$$
\boxed{\alpha=\frac{\displaystyle\int_A u^3\,dA}{Av^3}}.
$$

于是单位时间通过断面的动能可写成

$$
\boxed{\rho Q\frac{\alpha v^2}{2}}.
$$

一般有 $\alpha\ge1$。

- 工程中较均匀的湍流断面：$\alpha\approx1.05\sim1.10$；
- 基础计算常取 $\alpha=1$；
- 圆管充分发展层流：$\alpha=2$。

:::TIP
$\alpha$ 与速度的三次方有关，$\beta$ 与速度的二次方有关，因此相同速度分布下通常有 $\alpha>\beta>1$。
:::

---

## 2 恒定总流连续性方程

### 2.1 单入口、单出口

对固定边界内的不可压缩流体，质量守恒给出

$$
\boxed{Q_1=Q_2}
$$

或

$$
\boxed{v_1A_1=v_2A_2}.
$$

物理意义：流量不变时，断面越小，平均速度越大。

$$
v\propto\frac{1}{A}.
$$

适用对象包括刚性边界内的理想流体、实际流体、恒定流和满足相应控制体条件的非恒定不可压缩流。

对于密度变化明显的流体，应使用质量流量形式

$$
\boxed{\rho_1v_1A_1=\rho_2v_2A_2=\dot m}.
$$

### 2.2 分流与汇流

对节点控制体：

$$
\boxed{\sum Q_{\mathrm{in}}=\sum Q_{\mathrm{out}}}.
$$

若约定流出节点为正、流入节点为负，则

$$
\boxed{\sum_{i=1}^{n}Q_i=0}.
$$

例如一股流量 $Q_1$ 分成 $Q_2,Q_3$：

$$
Q_1=Q_2+Q_3.
$$

### 2.3 连续性方程的常见错误

1. **面积用错**：圆管面积为 $A=\pi d^2/4$；
2. **把点速度当平均速度**：总流公式中的 $v$ 是断面平均速度；
3. **忽略支流**：节点处必须把全部入口与出口都纳入；
4. **单位未统一**：mm、cm 应先换成 m；
5. **等直径管算出不同平均速度**：恒定不可压缩流下应立即回查。

---

## 3 恒定总流伯努利方程

### 3.1 实际流体元流伯努利方程

理想流体沿同一流线满足

$$
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C.
$$

实际流体存在黏性耗散。元流从断面 1 到断面 2 时：

$$
\boxed{
z_1+\frac{p_1}{\rho g}+\frac{u_1^2}{2g}
=
z_2+\frac{p_2}{\rho g}+\frac{u_2^2}{2g}+h_{w,1-2}'
}.
$$

$h_{w,1-2}'$ 表示单位重量流体从 1 到 2 损失的机械能，单位为 m。

### 3.2 毕托管测速原理（Pitot tube）

毕托管把来流的动能转化为压强能。设测得的动压水头差为 $\Delta h$，元流能量损失写成

$$
h_w'=\zeta\frac{u^2}{2g},
$$

则

$$
(1-\zeta)\frac{u^2}{2g}=\Delta h.
$$

所以

$$
\boxed{u=c\sqrt{2g\Delta h}},
\qquad
\boxed{c=\frac{1}{\sqrt{1-\zeta}}}.
$$

其中：

- $c$：毕托管系数，通常接近 1；
- $\zeta$：测速过程的局部损失系数；
- $\Delta h$：总压孔与静压孔之间的水头差。

> **图片占位：** 插入课件“毕托管总压孔、静压孔与液柱差 $\Delta h$”示意图。

### 3.3 恒定总流伯努利方程

将元流能量方程乘以单位时间通过元流的重量 $\rho g\,dQ$，再对整个总流断面积分，可得

$$
\boxed{
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}
=
z_2+\frac{p_2}{\rho g}+\alpha_2\frac{v_2^2}{2g}+h_{w,1-2}
}.
$$

其中：

- $z$：位置水头（elevation head）；
- $p/(\rho g)$：压强水头（pressure head）；
- $\alpha v^2/(2g)$：平均速度水头（velocity head）；
- $h_w$：两断面之间的平均水头损失（head loss）；
- $\alpha$：动能修正系数。

方程每一项的单位均为长度 m，表示**单位重量流体具有的机械能**。

若要写单位时间的能量关系，应将整个方程乘以 $\rho gQ$。

### 3.4 适用条件

基本形式适用于：

1. 恒定流；
2. 不可压缩流体；
3. 质量力仅考虑重力；
4. 两个计算断面位于渐变流区或均匀流区；
5. 1、2 之间沿同一股总流，基本形式下流量保持不变；
6. 两断面之间没有泵、风机、涡轮等机械能输入或输出；
7. 流动损失统一归入 $h_w$。

两断面之间允许存在弯头、阀门、突扩、突缩等急变区。

### 3.5 “三选一列”解题法

#### ① 选基准面（datum plane）

基准面可任意选取，常选：

- 某一管轴；
- 下游出口中心；
- 某一水池自由液面。

选取后所有 $z$ 必须相对同一基准面。

#### ② 选计算断面（calculation sections）

优先选：

- 已知量多的断面；
- 大水池自由液面，常有 $v\approx0$、表压 $p=0$；
- 自由出流断面，常有表压 $p=0$；
- 未知量所在断面。

断面应放在渐变流区。

#### ③ 选计算点（calculation point）

- 管流通常选断面中心；
- 明渠通常选自由液面；
- 同一渐变流断面上 $z+p/(\rho g)$ 为常数，因此点的位置可按方便选取。

#### ④ 列方程

先写完整式，再代入零项：

$$
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}
=
z_2+\frac{p_2}{\rho g}+\alpha_2\frac{v_2^2}{2g}+h_w.
$$

压强必须采用同一基准：全用绝对压强，或全用表压。

### 3.6 各项的物理意义与几何意义

| 项 | 物理意义 | 几何意义 |
|---|---|---|
| $z$ | 单位重量流体的位置能 | 位置水头 |
| $p/(\rho g)$ | 单位重量流体的压强能 | 压强水头 |
| $z+p/(\rho g)$ | 单位重量流体的总势能 | 测压管水头 |
| $\alpha v^2/(2g)$ | 单位重量流体的平均动能 | 速度水头 |
| $z+p/(\rho g)+\alpha v^2/(2g)$ | 单位重量流体的总机械能 | 总水头 |

### 3.7 课件例题：虹吸管顶部压强

已知：

- 虹吸管直径各处相同，故 $v_2=v_3=v$；
- 顶部断面 2 比上游自由液面高 2 m；
- 出口断面 3 比上游自由液面低 3 m；
- $h_{w,1-2}=0.6v^2/(2g)$；
- $h_{w,2-3}=0.5v^2/(2g)$；
- 取 $\alpha=1$，自由液面与出口均为大气压。

先在自由液面 1 与出口 3 之间列伯努利方程：

$$
0=-3+\frac{v^2}{2g}
+0.6\frac{v^2}{2g}
+0.5\frac{v^2}{2g}.
$$

因此

$$
2.1\frac{v^2}{2g}=3,
\qquad
\boxed{\frac{v^2}{2g}=1.43\ \mathrm{m}}.
$$

再在自由液面 1 与顶部断面 2 之间列方程：

$$
0=2+\frac{p_2}{\rho g}
+\frac{v^2}{2g}
+0.6\frac{v^2}{2g}.
$$

代入速度水头：

$$
\frac{p_2}{\rho g}
=-2-1.6\times1.43
=-4.29\ \mathrm{m}.
$$

所以

$$
\boxed{p_2=-42.0\ \mathrm{kPa}}
$$

为表压，断面 2 出现真空。虹吸管顶部过高会使绝对压强降低，严重时可能发生汽化与空化。

> **图片占位：** 插入课件“虹吸管自由液面—顶部—出口三断面”示意图。

### 3.8 用连续性方程检查伯努利结论

伯努利方程描述能量转化，连续性方程约束流量。两者必须同时满足。

例如恒定不可压缩流通过等直径管：

$$
A_1=A_2\quad\Rightarrow\quad v_1=v_2.
$$

此时两断面的压强差由高程差与水头损失决定：

$$
\frac{p_1-p_2}{\rho g}
=(z_2-z_1)+h_w.
$$

因此不能只凭“位置更低”或“压强更小”单独判断速度大小。

---
### 3.9 课件现象：向两张纸之间吹气

两张薄纸平行悬挂，向纸间吹气后，纸间气流速度增大，静压降低；纸外侧压强相对较高，因此两张纸会向中间靠拢。

这一现象可用伯努利关系作定性解释，但使用时应明确：

- 比较的是纸片内外两侧的压强；
- 气流由吹气和卷吸共同形成；
- 纸片弯曲后的真实流场较复杂，课堂结论用于说明速度能与压强能之间的转化。

---

## 4 水头线

### 4.1 总水头线与测压管水头线

定义总水头

$$
H=z+\frac{p}{\rho g}+\alpha\frac{v^2}{2g},
$$

定义测压管水头

$$
H_p=z+\frac{p}{\rho g}.
$$

沿流程把各断面的 $H$ 连起来，得到 **总水头线（total head line / energy grade line, EGL）**；把各断面的 $H_p$ 连起来，得到 **测压管水头线（piezometric head line / hydraulic grade line, HGL）**。

两条线之间的竖直距离为速度水头：

$$
\boxed{H-H_p=\alpha\frac{v^2}{2g}}.
$$

> **图片占位：** 插入课件“管轴线、测压管水头线、总水头线及速度水头”完整示意图。

### 4.2 水力坡降与测压管水头线坡度

水力坡降（hydraulic slope）定义为单位流程长度上的总水头损失：

$$
\boxed{J=\frac{dh_w}{ds}=-\frac{dH}{ds}>0}.
$$

测压管水头线坡度为

$$
\boxed{J_p=-\frac{d}{ds}\left(z+\frac{p}{\rho g}\right)}.
$$

其中 $s$ 为沿流线或管轴方向的流程长度。

### 4.3 水头线的基本规律

1. **理想流体**：无水头损失，总水头线为水平线；
2. **实际流体**：无泵等能量输入时，总水头线沿流向下降；
3. **测压管水头线**：可以下降、水平或上升；
4. **均匀流**：速度水头不变，总水头线与测压管水头线平行；
5. **管径减小**：速度增大，HGL 与 EGL 的间距增大；
6. **管径增大**：速度减小，HGL 与 EGL 的间距减小；
7. **局部损失位置**：EGL 发生明显下降；
8. **泵位置**：EGL 与 HGL 均发生向上的跃升；
9. **涡轮位置**：EGL 与 HGL 均发生向下的跃降。

### 4.4 典型边界处的水头线

#### 大水池自由液面

大水池面积远大于管道面积，通常取

$$
v\approx0,
\qquad p=0\quad\text{（表压）}.
$$

因此 EGL 与 HGL 均通过自由液面。

#### 自由出流管口

出口与大气相通，表压 $p=0$：

- HGL 通过出口断面的管轴中心；
- EGL 位于管轴上方 $\alpha v^2/(2g)$。

#### 管道流入静水池

若下游水池近似静止，出口射流的速度水头最终全部耗散。水池自由液面处 EGL 与 HGL 重合。

#### 突然扩大

突然扩大时 $v_2<v_1$，速度水头显著减小。虽然存在局部损失，HGL 通常仍会上升；EGL 始终下降。

#### 突然缩小

突然缩小时速度增大且存在局部损失，EGL 下降，HGL 通常下降得更明显。

### 4.5 真空区判断

管内某点的表压为负，当且仅当

$$
\frac{p}{\rho g}<0.
$$

在水头线图上：

- 管轴高程为 $z$；
- HGL 高程为 $z+p/(\rho g)$。

若 HGL 位于管轴线下方，则

$$
z+\frac{p}{\rho g}<z,
$$

说明该段为真空区。

:::WARNING
真空表示表压为负，绝对压强仍应大于零。若绝对压强降到液体汽化压强附近，可能发生汽化与空化。
:::

### 4.6 课件问答：水平变径管的 HGL

对无损失水平管，EGL 水平：

$$
\frac{p}{\rho g}+\frac{v^2}{2g}=C.
$$

因此：

- 收缩段：$v$ 增大，$p/(\rho g)$ 降低，HGL 下降；
- 等直径段：$v$ 不变，HGL 水平；
- 扩散段：$v$ 减小，HGL 上升。

实际流动中 EGL 仍会因损失下降，HGL 是否上升取决于速度水头减少量能否超过损失。

---

## 5 伯努利方程的扩展

### 5.1 分流

一股总流在节点处分成多股流动时，连续性方程为

$$
Q_1=Q_2+Q_3.
$$

伯努利方程可分别沿每一条支路列写：

$$
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}
=
z_2+\frac{p_2}{\rho g}+\alpha_2\frac{v_2^2}{2g}+h_{w,1-2},
$$

$$
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}
=
z_3+\frac{p_3}{\rho g}+\alpha_3\frac{v_3^2}{2g}+h_{w,1-3}.
$$

### 5.2 汇流

两股流体汇合时，各入口机械能流率之和等于出口机械能流率与损失功率之和：

$$
\boxed{
\rho gQ_1E_1+\rho gQ_2E_2
=
\rho gQ_3E_3
+\rho gQ_1h_{w,1-3}
+\rho gQ_2h_{w,2-3}
}
$$

其中

$$
E_i=z_i+\frac{p_i}{\rho g}+\alpha_i\frac{v_i^2}{2g}.
$$

:::TIP
汇流问题中，不同入口的单位重量机械能可能不同。此时应按各自流量加权，直接写单管形式 $E_1=E_3$ 往往会出错。
:::

> **图片占位：** 插入课件“分流节点与汇流节点”示意图。

### 5.3 有机械能输入或输出

流体经过泵、风机、涡轮等机械设备时：

$$
\boxed{
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}
+H_p-H_t
=
z_2+\frac{p_2}{\rho g}+\alpha_2\frac{v_2^2}{2g}+h_w
}.
$$

其中：

- $H_p$：泵或风机给单位重量流体输入的机械能，称泵水头；
- $H_t$：涡轮从单位重量流体取出的机械能；
- $h_w$：管路损失。

若只用课件中的 $\pm H$ 记号：

- 流体获得能量时取 $+H$；
- 流体向机械输出能量时取 $-H$。

泵的水功率为

$$
P_w=\rho gQH_p.
$$

若泵效率为 $\eta_p$，轴功率为

$$
\boxed{P_{\mathrm{shaft}}=\frac{\rho gQH_p}{\eta_p}}.
$$

### 5.4 课件例题：射流器（jet device）

已知：

$$
Q_1=0.004\ \mathrm{m^3/s},
\qquad
Q_2=0.0005\ \mathrm{m^3/s},
$$

$$
h=5\ \mathrm m,
\qquad
D=0.05\ \mathrm m,
$$

忽略损失，求供水水头 $H$ 与真空室真空度。

汇流后流量为

$$
Q_3=Q_1+Q_2=0.0045\ \mathrm{m^3/s}.
$$

管道面积

$$
A=\frac{\pi D^2}{4}.
$$

汇流后断面 3 的单位重量动能为

$$
E_3=\frac{1}{2g}\left(\frac{Q_3}{A}\right)^2
=0.268\ \mathrm m.
$$

入口 1 的单位重量机械能为 $E_1=H$，吸水入口 4 位于基准面下方 5 m，故 $E_4=-5\ \mathrm m$。

对汇流整体列能量平衡：

$$
E_1Q_1+E_4Q_2=E_3Q_3.
$$

于是

$$
H=\frac{E_3Q_3-E_4Q_2}{Q_1}
=0.927\ \mathrm m.
$$

若错误地只在断面 1 与 3 之间写 $E_1=E_3$，会得到 $H=0.268\ \mathrm m$，遗漏了被吸入流体的能量需求。

再对吸水面 4 与真空室断面 5 列伯努利方程：

$$
-h=\frac{1}{2g}\left(\frac{Q_2}{A}\right)^2+\frac{p_2}{\rho g}.
$$

所以

$$
\frac{p_2}{\rho g}
=-\left[h+\frac{1}{2g}\left(\frac{Q_2}{A}\right)^2\right]
=-5.0033\ \mathrm m.
$$

真空度为

$$
\boxed{p_v=-\frac{p_2}{\rho g}=5.0033\ \mathrm{mH_2O}}.
$$

### 5.5 课件例题：抽水系统轴功率

已知两水池液面高差 15 m，

$$
Q=0.03\ \mathrm{m^3/s},
\qquad
d=0.15\ \mathrm m,
\qquad
\eta_p=0.76,
$$

管路损失

$$
h_w=10\frac{v^2}{2g}.
$$

管内平均速度

$$
v=\frac{Q}{\pi d^2/4}=1.70\ \mathrm{m/s}.
$$

在两水池自由液面之间列伯努利方程：

$$
H_p=15+10\frac{v^2}{2g}=16.47\ \mathrm m.
$$

轴功率

$$
P_{\mathrm{shaft}}
=\frac{\rho gQH_p}{\eta_p}
=6.37\ \mathrm{kW}.
$$

### 5.6 低速气流伯努利方程

当气流速度较低、密度变化可以忽略时，可把气体视为不可压缩流体。由于外界大气压随高程变化，课件将气流伯努利方程写成压强形式：

$$
\boxed{
p_1+\frac{\rho v_1^2}{2}
+(\rho_a-\rho)g(z_2-z_1)
=
p_2+\frac{\rho v_2^2}{2}+p_w
}.
$$

其中：

- $\rho$：管内气体密度；
- $\rho_a$：周围空气密度；
- $p_1,p_2$：相对于各自高程处大气压的静压；
- $\rho v^2/2$：动压；
- $(\rho_a-\rho)g(z_2-z_1)$：位压或浮升压；
- $p_w=\rho gh_w$：压强损失。

当 $z_1=z_2$ 或 $\rho=\rho_a$ 时，位压项为零。

### 5.7 课件例题：自然通风烟囱高度

已知：

$$
d=1\ \mathrm m,
\quad Q=10\ \mathrm{m^3/s},
\quad \rho=0.7\ \mathrm{kg/m^3},
\quad \rho_a=1.2\ \mathrm{kg/m^3},
$$

烟囱底部入口面积为烟囱截面积的 2 倍，入口真空度为 $10\ \mathrm{mmH_2O}$，损失为

$$
p_w=0.035\frac{H}{d}\frac{\rho v_2^2}{2}.
$$

烟囱速度

$$
v_2=\frac{Q}{\pi d^2/4}=12.74\ \mathrm{m/s},
\qquad
v_1=\frac12v_2.
$$

入口表压

$$
p_1=-1000g\times0.01=-98\ \mathrm{Pa},
$$

出口 $p_2=0$。代入气流伯努利方程：

$$
p_1+\frac{\rho v_1^2}{2}
+(\rho_a-\rho)gH
=
\frac{\rho v_2^2}{2}+p_w.
$$

解得

$$
\boxed{H=48.29\ \mathrm m}.
$$

这个结果说明，自然抽烟需要足够的密度差与烟囱高度来克服动能增加和沿程损失。

---

## 6 恒定总流动量方程

### 6.1 方程形式

动量定理：控制体内流体所受外力的矢量和，等于单位时间流出控制体的动量减去流入控制体的动量。

对单入口、单出口的恒定不可压缩总流：

$$
\boxed{
\sum\mathbf F
=
\rho Q\left(\beta_2\mathbf v_2-\beta_1\mathbf v_1\right)
}.
$$

直角坐标分量形式为

$$
\boxed{
\begin{aligned}
\sum F_x&=\rho Q(\beta_2v_{2x}-\beta_1v_{1x}),\\
\sum F_y&=\rho Q(\beta_2v_{2y}-\beta_1v_{1y}),\\
\sum F_z&=\rho Q(\beta_2v_{2z}-\beta_1v_{1z}).
\end{aligned}}
$$

若有多个入口和出口：

$$
\boxed{
\sum\mathbf F
=
\sum_{\mathrm{out}}\rho Q\beta\mathbf v
-
\sum_{\mathrm{in}}\rho Q\beta\mathbf v
}.
$$

### 6.2 外力包括什么

$\sum\mathbf F$ 包括控制体内流体受到的全部外力：

1. **质量力**：主要为重力；
2. **压力**：控制断面上的压强合力；
3. **固体边界作用力**：管壁、弯头、叶片、闸门对流体的作用力；
4. **黏性剪切力**：需要时计入，很多短控制体问题中与其他力相比可忽略。

计算中一般采用表压，这样外部大气压在封闭控制面上的合力可自动抵消。

### 6.3 适用条件

课件中的基本形式适用于：

- 恒定流；
- 不可压缩流体；
- 入口与出口断面位于渐变流区或均匀流区；
- 控制体内部可以包含急变流；
- 基本推导以固定控制体为主；
- 工程计算常取 $\beta=1$。

### 6.4 动量方程为什么没有显式的 $h_w$

动量方程直接平衡“外力—动量流率”。水头损失对应的黏性作用已经通过壁面剪切力、局部边界力及流场变化包含在 $\sum\mathbf F$ 中，因此不再单独出现一个 $h_w$ 项。

伯努利方程中 $h_w$ 表示机械能不可逆损失；动量方程关心的是力和速度矢量变化。二者描述的物理量不同。

### 6.5 标准解题步骤

1. **选控制体**：入口、出口放在渐变流断面；
2. **定坐标轴**：尽量沿主要流向取轴；
3. **画流体自由体图**：标出压力、重力、边界作用力；
4. **分解速度**：写出每个入口和出口速度的分量及正负号；
5. **列连续性方程**：求未知流量或速度；
6. **需要时列伯努利方程**：求未知压强或速度大小；
7. **列动量方程**：始终使用“流出减流入”；
8. **由作用反作用转换答案**：流体对结构的力，与结构对流体的力大小相等、方向相反。

:::WARNING
动量方程得到负值只说明实际方向与预设正方向相反。不要把负号直接丢掉。
:::

> **图片占位：** 插入课件“弯管控制体、入口出口速度与外力”示意图。

### 6.6 课件例题：溢流坝所受水平力

上游水深 $H_1=1.5\ \mathrm m$，下游水深 $H_2=0.6\ \mathrm m$，取单位宽度，忽略损失。

连续性方程：

$$
Q=v_1H_1=v_2H_2.
$$

伯努利方程：

$$
H_1+\frac{v_1^2}{2g}
=
H_2+\frac{v_2^2}{2g}.
$$

联立得

$$
v_1=1.83\ \mathrm{m/s},
\qquad
v_2=4.58\ \mathrm{m/s},
$$

$$
Q=2.75\ \mathrm{m^3/s}
$$

（单位宽度）。

两断面的静水压力合力为

$$
P_1=\frac{\rho gH_1^2}{2},
\qquad
P_2=\frac{\rho gH_2^2}{2}.
$$

设坝体对水流的水平作用力为 $F_R'$，沿流向列动量方程：

$$
P_1-P_2-F_R'=\rho Q(v_2-v_1).
$$

解得

$$
F_R'=1.71\ \mathrm{kN}.
$$

水流对坝体的力方向相反，大小为

$$
\boxed{F_R=1.71\ \mathrm{kN/m}}.
$$

### 6.7 课件例题：$60^\circ$ 水平弯管推力

已知

$$
d_1=1\ \mathrm m,
\quad d_2=0.75\ \mathrm m,
\quad Q=1.57\ \mathrm{m^3/s},
\quad p_1=5.05\times10^4\ \mathrm{Pa},
$$

弯角 $\phi=60^\circ$，忽略损失。

连续性方程给出

$$
v_1=\frac{4Q}{\pi d_1^2}=2.00\ \mathrm{m/s},
$$

$$
v_2=\frac{4Q}{\pi d_2^2}=3.56\ \mathrm{m/s}.
$$

水平等高且无损失，伯努利方程给出

$$
\frac{p_1}{\rho g}+\frac{v_1^2}{2g}
=
\frac{p_2}{\rho g}+\frac{v_2^2}{2g},
$$

所以

$$
p_2=4.62\times10^4\ \mathrm{Pa}.
$$

对弯头内水体列 $x,y$ 方向动量方程。取 $y$ 轴向上，出口流速的 $y$ 分量向下：

$$
p_1A_1-p_2A_2\cos\phi-F_{Rx}'
=
\rho Q(v_2\cos\phi-v_1),
$$

$$
p_2A_2\sin\phi-F_{Ry}'
=
\rho Q(-v_2\sin\phi).
$$

解得管壁对水流作用力分量的大小

$$
F_{Rx}'=29.8\ \mathrm{kN},
\qquad
F_{Ry}'=22.5\ \mathrm{kN}.
$$

合力

$$
F_R'=\sqrt{F_{Rx}'^2+F_{Ry}'^2}
=37.3\ \mathrm{kN},
$$

$$
\theta=\tan^{-1}\frac{22.5}{29.8}=37.1^\circ.
$$

水流对弯头的推力与上述合力方向相反。

### 6.8 课件例题：高低孔射流碰撞消能

坝前水深 $H=150\ \mathrm m$，碰撞点距坝面水平距离 $a=50\ \mathrm m$，距坝趾高度 $z=50\ \mathrm m$。两股射流流量相等，忽略碰撞前的水头损失。

碰撞点相对上游水面的总落差为

$$
h=H-z=100\ \mathrm m.
$$

#### （1）求两孔深度

水平抛射关系可整理为

$$
h_1=\frac{h-\sqrt{h^2-a^2}}{2},
\qquad
h_2=\frac{h+\sqrt{h^2-a^2}}{2}.
$$

代入 $h=100\ \mathrm m$、$a=50\ \mathrm m$：

$$
\boxed{h_1=6.7\ \mathrm m},
\qquad
\boxed{h_2=93.3\ \mathrm m}.
$$

#### （2）求碰撞角

两股射流在碰撞点的速度大小相同：

$$
v=\sqrt{2gh}=44.3\ \mathrm{m/s}.
$$

几何关系给出

$$
\cos\alpha_1=\sqrt{\frac{h_1}{h}},
\qquad
\cos\alpha_2=\sqrt{\frac{h_2}{h}}.
$$

所以

$$
\alpha_1=75^\circ,
\qquad
\alpha_2=15^\circ,
$$

碰撞夹角为

$$
\boxed{\alpha=60^\circ}.
$$

#### （3）求碰撞后主流方向与速度

两股流量相等，忽略碰撞区重力，按 $x,y$ 方向列动量方程，可得

$$
\boxed{\theta=45^\circ},
$$

$$
v'=\frac{v(\cos\alpha_1+\cos\alpha_2)}{2\cos\theta}
=38.36\ \mathrm{m/s}.
$$

#### （4）求碰撞消能效率

碰撞前后单位重量动能之比给出

$$
\eta
=1-\frac{v'^2}{v^2}
=1-\left(\frac{38.36}{44.3}\right)^2
=0.25.
$$

所以

$$
\boxed{\eta=25\%}.
$$

> **图片占位：** 插入课件“高低孔射流轨迹、碰撞角和碰撞后主流方向”示意图。

---

## 7 本章公式与解题检查表

### 7.1 四个核心量

$$
\boxed{Q=vA}
$$

$$
\boxed{\beta=\frac{\int_Au^2dA}{Av^2}}
$$

$$
\boxed{\alpha=\frac{\int_Au^3dA}{Av^3}}
$$

$$
\boxed{H=z+\frac{p}{\rho g}+\alpha\frac{v^2}{2g}}
$$

### 7.2 三个核心方程

#### 连续性方程

$$
\boxed{\sum Q_{\mathrm{in}}=\sum Q_{\mathrm{out}}}
$$

#### 伯努利方程

$$
\boxed{
z_1+\frac{p_1}{\rho g}+\alpha_1\frac{v_1^2}{2g}+H_p-H_t
=
z_2+\frac{p_2}{\rho g}+\alpha_2\frac{v_2^2}{2g}+h_w
}
$$

#### 动量方程

$$
\boxed{
\sum\mathbf F
=
\sum_{\mathrm{out}}\rho Q\beta\mathbf v
-
\sum_{\mathrm{in}}\rho Q\beta\mathbf v
}
$$

### 7.3 看到题目后先判断

| 题目要求 | 主方程 | 常需联立 |
|---|---|---|
| 求流量、平均速度 | 连续性方程 | 伯努利方程 |
| 求压强、真空度、液面差 | 伯努利方程 | 连续性方程、测压计关系 |
| 求泵水头、轴功率 | 扩展伯努利方程 | 连续性方程、效率公式 |
| 求弯管、喷嘴、闸门、叶片受力 | 动量方程 | 连续性方程、伯努利方程 |
| 画 EGL/HGL | 伯努利方程与边界条件 | 连续性方程 |

### 7.4 最后检查

- 计算断面是否位于渐变流区？
- $v$ 是否为断面平均速度？
- 圆管面积是否写成 $\pi d^2/4$？
- 所有压强是否采用同一基准？
- 水头损失是否沿流向取正？
- 泵水头是否加在流体获得能量的一侧？
- 动量是否严格按“流出减流入”？
- 压力方向是否指向控制体内部？
- 求出的结构受力是否做了作用反作用转换？
- 数值单位是否统一为 SI 制？

---
## 8 教材型补充例题

### 8.1 射流停滞点压强

水平水流在断面 A 的速度为 $v_A=10\ \mathrm{m/s}$、表压为 $p_A=98\ \mathrm{kPa}$，随后在同一高程的 B 点完全停滞。忽略水头损失。

因为

$$
z_A=z_B,\qquad v_B=0,
$$

伯努利方程给出

$$
\frac{p_A}{\rho g}+\frac{v_A^2}{2g}
=\frac{p_B}{\rho g}.
$$

所以

$$
p_B=p_A+\frac12\rho v_A^2
=98\times10^3+\frac12\times1000\times10^2.
$$

$$
\boxed{p_B=148\ \mathrm{kPa}}.
$$

该题体现了动压向静压的转化。停滞点速度为零，压强达到局部最大值。

### 8.2 溢流坝出口速度

上游水库库底高程为 $120.0\ \mathrm m$，下游河床高程为 $105.0\ \mathrm m$。收缩出口断面的水深为 $h_c=1.2\ \mathrm m$，水头损失

$$
h_w=0.1\frac{v_c^2}{2g}.
$$

取 $\alpha_c=1$，忽略上游水库流速。以上游自由液面和出口自由液面为计算断面：

$$
z_1=120-105=15\ \mathrm m,
\qquad z_c=1.2\ \mathrm m.
$$

两点均为大气压，故

$$
15=1.2+\frac{v_c^2}{2g}+0.1\frac{v_c^2}{2g}.
$$

解得

$$
\boxed{v_c=15.68\ \mathrm{m/s}}.
$$

这类题中，出口计算点通常取自由液面；出口高程需要包含出口水深，不能直接取河床高程。

### 8.3 抽水系统轴功率变式

水泵将水输送到自由液面高出 $12\ \mathrm m$ 的水池。已知

$$
Q=0.025\ \mathrm{m^3/s},\qquad d=0.12\ \mathrm m,\qquad
h_w=8\frac{v^2}{2g},\qquad \eta_p=0.78.
$$

管内平均速度

$$
v=\frac{Q}{\pi d^2/4}=2.21\ \mathrm{m/s}.
$$

在两个水池自由液面之间列扩展伯努利方程：

$$
H_p=12+8\frac{v^2}{2g}=13.99\ \mathrm m.
$$

轴功率为

$$
P_{\mathrm{shaft}}
=\frac{\rho gQH_p}{\eta_p}
=\boxed{4.40\ \mathrm{kW}}.
$$

计算泵功率时，应先求流体实际获得的泵水头，再除以泵效率。

---

## 9 高频判断与易错结论

### 9.1 “流速越大，压强越小”需要条件

这句话只能在同一条流线上、同一高程、损失和机械能输入均可控制时使用。完整关系始终是

$$
z+\frac{p}{\rho g}+\alpha\frac{v^2}{2g}+H_p-H_t-h_w=\text{常量}.
$$

高程变化、泵水头或水头损失均可能改变压强判断。遇到倾斜管、长管或带泵管路，应直接列完整方程。

### 9.2 管径变化先用连续性方程

恒定不可压缩单管流满足

$$
v_1A_1=v_2A_2.
$$

因此，平均速度首先由面积比决定。伯努利方程随后用于计算压强变化。对等直径管，$v_1=v_2$；此时压强差主要补偿高程差和水头损失。

### 9.3 HGL 上升不代表流体获得能量

扩散管或突扩管中，速度水头减少，部分动能转化为压强能，HGL 可以上升。只要没有泵，EGL 仍应沿流向下降。判断能量增减时看 EGL，判断压强与真空区时看 HGL。

### 9.4 同一断面与不同断面要分清

渐变流断面内有

$$
z+\frac{p}{\rho g}=C.
$$

该常数只属于当前断面。沿流程换到另一个断面后，测压管水头会受到速度变化、沿程损失和局部损失影响。

### 9.5 水头损失不会使连续性方程失效

水头损失改变机械能，不会破坏质量守恒。刚性单管中的恒定不可压缩流即使具有很大阻力，仍满足 $Q_1=Q_2$。阻力会改变建立该流量所需的压强差或泵水头。

### 9.6 动量题中的压力方向

控制断面上的压力始终沿断面内法线指向控制体内部。入口压力通常顺着入口流向推动流体；出口压力通常逆着出口流向推回控制体。弯管题中最常见的错误来自出口压力方向画反。

### 9.7 受力对象必须写清

动量方程直接求得的是“外界对控制体内流体的合力”。若题目要求水流对弯头、闸门或叶片的力，需要再用作用反作用关系改变方向。答案中应明确写出受力对象，避免只给一个无方向的数值。

### 9.8 真空度与表压

若表压 $p<0$，真空度通常定义为

$$
p_v=-p>0
$$

或用水柱高度表示为 $p_v/(\rho g)$。进行汽化判断时必须换成绝对压强：

$$
p_{\mathrm{abs}}=p_{\mathrm{atm}}+p.
$$

### 9.9 方程数量检查

连续性方程通常提供流量约束，伯努利方程提供标量能量关系，二维动量方程可提供两个方向的受力关系。列完方程后，应比较独立方程数与未知量数；未知量仍多时，需要加入测压计关系、几何关系或设备特性。

---

## 10 英文题目常见表达

本课程考试题目为英文，读题时应先识别“对象—已知量—忽略项—所求量”。下面是本章高频表达。

### 10.1 流量与断面

- **discharge / volumetric flow rate**：体积流量 $Q$；
- **mass flow rate**：质量流量 $\dot m$；
- **cross-sectional mean velocity**：断面平均速度 $v$；
- **point velocity / local velocity**：点速度 $u$；
- **flow cross-section**：过流断面；
- **control volume**：控制体；
- **branch / bifurcation / confluence**：支管、分流、汇流。

看到 “the flow divides into two branches” 时，先写 $Q_1=Q_2+Q_3$。看到 “the pipe diameter changes from $d_1$ to $d_2$” 时，先用面积比求速度比。

### 10.2 压强与水头

- **gauge pressure**：表压；
- **absolute pressure**：绝对压强；
- **vacuum pressure / vacuum head**：真空度 / 真空水头；
- **pressure head**：压强水头 $p/(\rho g)$；
- **piezometric head**：测压管水头 $z+p/(\rho g)$；
- **velocity head**：速度水头 $\alpha v^2/(2g)$；
- **total head**：总水头；
- **head loss**：水头损失。

“Both sections are open to the atmosphere” 表示两处表压均为零。“The reservoir is sufficiently large” 通常表示自由液面速度可取零。

### 10.3 设备与能量

- **pump head**：泵水头；
- **shaft power**：轴功率；
- **pump efficiency**：泵效率；
- **energy input / energy output**：机械能输入 / 输出；
- **free discharge**：自由出流；
- **differential manometer**：差压计；
- **Pitot tube / Venturi meter**：毕托管 / 文丘里流量计。

“Neglect head loss” 表示取 $h_w=0$；“account for the head loss” 表示必须保留损失项；“take the kinetic-energy correction factor as 1.2” 表示速度水头应写成 $1.2v^2/(2g)$。

### 10.4 受力题中的介词

- **force exerted by the water on the elbow**：水流对弯头的力；
- **force exerted by the elbow on the water**：弯头对水流的力；
- **support force required to hold the bend**：固定弯管所需的支座力；
- **thrust on the vane**：叶片所受推力。

“by A on B” 中，A 是施力者，B 是受力者。动量方程先求控制体内流体受到的外力，再根据题目要求决定是否反向。

### 10.5 常见命令词

- **determine / calculate / find**：求解；
- **derive / prove / show that**：推导或证明；
- **sketch / draw**：画示意图；
- **compare**：比较大小并说明依据；
- **state the assumptions**：列出适用条件；
- **indicate the direction**：标明方向。

对 “determine the magnitude and direction” 类型题，只写合力大小不完整；还应给出方向角或分量正负。

---

## 11 三大方程之间的关系

### 11.1 连续性方程提供运动学约束

连续性方程来自质量守恒，不涉及压强、损失或外力。它通常先把多个断面速度化成一个未知量。例如圆管变径时

$$
v_2=\frac{A_1}{A_2}v_1.
$$

把这个关系代入伯努利方程或动量方程，可以显著减少未知量。

### 11.2 伯努利方程提供标量能量关系

伯努利方程只比较机械能的大小，不直接包含速度方向。弯管前后即使速度方向改变，只要速度大小、压强、高程和损失已知，仍可用伯努利方程求未知压强；方向变化产生的结构受力需要交给动量方程。

### 11.3 动量方程提供矢量受力关系

动量方程必须保留速度方向。相同的速度大小在 $180^\circ$ 转弯后会产生很大的动量变化，而伯努利方程中的速度水头保持不变。对二维问题，应分别沿 $x,y$ 方向列方程。

### 11.4 三式联立的典型顺序

弯管、喷嘴和闸门综合题通常按以下顺序进行：

1. 用连续性方程由流量求各断面速度；
2. 用伯努利方程由速度求未知压强；
3. 画控制体受力图；
4. 用动量方程求边界作用力；
5. 用作用反作用关系得到结构受力。

若题目已经给出各断面压强和速度，可直接进入动量方程。若只问流量或压强，通常无需列动量方程。

### 11.5 方程不能互相替代

- 连续性方程无法计算水头损失；
- 伯努利方程无法单独确定弯头支座力；
- 动量方程无法单独给出泵轴功率；
- 差压计读数需要先转换为测压管水头差，再进入伯努利方程；
- 结构几何关系、射流轨迹关系和设备效率属于额外条件。

### 11.6 最小控制体原则

控制体选得过大，会引入过多未知压力、重力和边界力；选得过小，入口或出口可能落在急变流区。较好的控制体应满足：

- 边界尽量沿固体壁面或流线；
- 入口与出口尽量位于渐变流区；
- 控制体内包含所求受力对象附近的流动转折；
- 未知外力数量尽量少。

这一原则可以减少方程数量和符号错误，是动量题稳定得分的关键。

---

# 第二部分：练习题

题目来源标记如下：

- `【历年真题】`：直接整理自所给历年卷；
- `【课件例题/变式】`：依据课堂例题改变数据或提问方式；
- `【教材例题/习题】`：依据教材第 5 章例题、思考题与习题；
- `【综合变式】`：围绕核心方程设计的少量综合题。

:::TIP
建议先遮住答案独立完成。计算题至少写出：控制体或计算断面、所用方程、代入过程、单位和方向。
:::

---

## A1 总流概念与连续性方程

### A1-1 圆管层流的修正系数

`【教材习题 5-1、5-2 综合】`

**English**

The velocity distribution in a circular pipe is

$$
u=u_{\max}\left[1-\left(\frac rR\right)^2\right].
$$

Determine the cross-sectional mean velocity $v$, the momentum correction factor $\beta$, and the kinetic-energy correction factor $\alpha$.

**中文**

圆管内速度分布为

$$
u=u_{\max}\left[1-\left(\frac rR\right)^2\right].
$$

求断面平均速度 $v$、动量修正系数 $\beta$ 和动能修正系数 $\alpha$。

<details>
<summary>答案与讲解</summary>

圆管面积为 $A=\pi R^2$，面积微元为

$$
dA=2\pi r\,dr.
$$

平均速度：

$$
v=\frac1A\int_Au\,dA
=\frac{2\pi}{\pi R^2}\int_0^R
u_{\max}\left(1-\frac{r^2}{R^2}\right)r\,dr.
$$

积分得

$$
\boxed{v=\frac{u_{\max}}2}.
$$

动量修正系数：

$$
\beta=\frac{\int_Au^2dA}{Av^2}.
$$

令 $x=r/R$，有

$$
\int_Au^2dA
=2\pi R^2u_{\max}^2\int_0^1(1-x^2)^2x\,dx
=\frac{\pi R^2u_{\max}^2}{3}.
$$

而

$$
Av^2=\pi R^2\frac{u_{\max}^2}{4}.
$$

所以

$$
\boxed{\beta=\frac43}.
$$

动能修正系数：

$$
\alpha=\frac{\int_Au^3dA}{Av^3}.
$$

同理

$$
\int_Au^3dA
=2\pi R^2u_{\max}^3\int_0^1(1-x^2)^3x\,dx
=\frac{\pi R^2u_{\max}^3}{4},
$$

$$
Av^3=\pi R^2\frac{u_{\max}^3}{8}.
$$

故

$$
\boxed{\alpha=2}.
$$

最终结果：

$$
\boxed{v=u_{\max}/2,\quad \beta=4/3,\quad \alpha=2}.
$$
</details>

### A1-2 矩形明渠连续性方程

`【24–25 春夏真题】`

**English**

A rectangular artificial channel has a width of $B=2.1\ \mathrm m$. At Sections 1-1 and 2-2, the water depths are $h_1=0.5\ \mathrm m$ and $h_2=0.3\ \mathrm m$, respectively. The mean velocity at Section 1-1 is $v_1=3\ \mathrm{m/s}$. Determine the discharge $Q$ and the mean velocity $v_2$.

**中文**

矩形人工渠道宽 $B=2.1\ \mathrm m$，断面 1-1、2-2 的水深分别为 $h_1=0.5\ \mathrm m$、$h_2=0.3\ \mathrm m$，断面 1-1 平均流速 $v_1=3\ \mathrm{m/s}$。求流量 $Q$ 和断面 2-2 平均流速 $v_2$。

<details>
<summary>答案与讲解</summary>

断面 1 面积：

$$
A_1=Bh_1=2.1\times0.5=1.05\ \mathrm{m^2}.
$$

流量：

$$
Q=v_1A_1=3\times1.05
=\boxed{3.15\ \mathrm{m^3/s}}.
$$

断面 2 面积：

$$
A_2=Bh_2=2.1\times0.3=0.63\ \mathrm{m^2}.
$$

由 $Q=v_2A_2$：

$$
v_2=\frac{Q}{A_2}
=\frac{3.15}{0.63}
=\boxed{5.00\ \mathrm{m/s}}.
$$

水深减小使过流面积减小，流量不变时平均速度增大。
</details>

### A1-3 分流节点

`【教材连续性方程改编】`

**English**

Water flows through a main pipe of diameter $D_1=0.30\ \mathrm m$ with mean velocity $v_1=2.0\ \mathrm{m/s}$. It divides into two branches. Branch 2 has $D_2=0.20\ \mathrm m$ and $v_2=1.5\ \mathrm{m/s}$. Branch 3 has $D_3=0.15\ \mathrm m$. Determine $Q_3$ and $v_3$.

**中文**

水流在直径 $D_1=0.30\ \mathrm m$ 的主管中以平均速度 $v_1=2.0\ \mathrm{m/s}$ 流动，随后分成两支。支管 2 的直径 $D_2=0.20\ \mathrm m$、平均速度 $v_2=1.5\ \mathrm{m/s}$；支管 3 的直径 $D_3=0.15\ \mathrm m$。求 $Q_3$ 和 $v_3$。

<details>
<summary>答案与讲解</summary>

主管流量：

$$
Q_1=\frac{\pi D_1^2}{4}v_1
=\frac{\pi(0.30)^2}{4}\times2.0
=0.1414\ \mathrm{m^3/s}.
$$

支管 2 流量：

$$
Q_2=\frac{\pi D_2^2}{4}v_2
=\frac{\pi(0.20)^2}{4}\times1.5
=0.0471\ \mathrm{m^3/s}.
$$

节点连续性方程：

$$
Q_1=Q_2+Q_3.
$$

所以

$$
Q_3=0.1414-0.0471
=\boxed{0.0942\ \mathrm{m^3/s}}.
$$

支管 3 速度：

$$
v_3=\frac{Q_3}{\pi D_3^2/4}
=\frac{0.0942}{\pi(0.15)^2/4}
=\boxed{5.33\ \mathrm{m/s}}.
$$
</details>

### A1-4 渐变流断面上的压强分布

`【24–25 春夏判断题变式】`

**English**

Judge the statement: “On the same cross-section of a steady gradually-varied flow, the pressure head $p/(\rho g)$ is constant.” Explain your answer.

**中文**

判断：“恒定渐变流的同一过流断面上，压强水头 $p/(\rho g)$ 为常数。”说明理由。

<details>
<summary>答案与讲解</summary>

该说法错误。

渐变流断面上的动水压强近似服从静水压强分布，因此恒定的是

$$
\boxed{z+\frac{p}{\rho g}=C}.
$$

断面上不同点的高程 $z$ 不同，所以 $p/(\rho g)$ 会随高程变化。

同一断面越低的位置，压强水头通常越大。
</details>

---

## A2 伯努利方程与水头线

### A2-1 突然扩大后测压管水头是否上升

`【21–22 秋冬真题】`

**English**

A horizontal pipe suddenly enlarges from area $A_1$ to $A_2$, where $A_2>A_1$. Prove that the piezometric head downstream is higher than that upstream. For a sudden enlargement, use

$$
h_L=\frac{(v_1-v_2)^2}{2g}.
$$

**中文**

水平管道由面积 $A_1$ 突然扩大到 $A_2$，且 $A_2>A_1$。证明扩大后测压管水头高于扩大前。突扩局部损失取

$$
h_L=\frac{(v_1-v_2)^2}{2g}.
$$

<details>
<summary>答案与讲解</summary>

水平管道中 $z_1=z_2$。伯努利方程为

$$
\frac{p_1}{\rho g}+\frac{v_1^2}{2g}
=
\frac{p_2}{\rho g}+\frac{v_2^2}{2g}+h_L.
$$

因此

$$
\frac{p_2-p_1}{\rho g}
=
\frac{v_1^2-v_2^2}{2g}
-\frac{(v_1-v_2)^2}{2g}.
$$

化简：

$$
v_1^2-v_2^2-(v_1-v_2)^2
=2v_2(v_1-v_2).
$$

所以

$$
\frac{p_2-p_1}{\rho g}
=\frac{v_2(v_1-v_2)}{g}.
$$

由连续性方程，$A_2>A_1$ 导致 $v_2<v_1$，故

$$
\boxed{\frac{p_2-p_1}{\rho g}>0}.
$$

水平管中测压管水头差等于压强水头差，因此扩大后 HGL 上升。

同时存在 $h_L>0$，所以 EGL 仍然下降。
</details>

### A2-2 总水头线与测压管水头线判读

`【24–25 春夏真题改编】`

**English**

Water flows from a large reservoir through an inclined pipe containing two local fittings and finally discharges freely into the atmosphere. Describe how the total head line and the piezometric head line should be drawn. State their positions at the reservoir surface, across local fittings, and at the outlet.

**中文**

水从大水池经一根倾斜管道流动，管道中有两个局部构件，最终自由出流到大气。说明总水头线和测压管水头线应如何绘制，并指出它们在水池自由液面、局部构件和出口处的位置。

<details>
<summary>答案与讲解</summary>

应遵循以下规则：

1. **水池自由液面**：$p=0$、$v\approx0$，EGL 与 HGL 均从自由液面出发；
2. **普通等直径管段**：速度水头近似不变，两条线近似平行下降；
3. **局部构件处**：存在局部损失，EGL 出现向下跃降；若前后管径相同，HGL 也下降相同高度；
4. **变径处**：两线间距按 $\alpha v^2/(2g)$ 改变；收缩时间距增大，扩散时间距减小；
5. **自由出口**：表压 $p=0$，HGL 通过出口管轴；EGL 位于其上方一个速度水头；
6. **无泵条件**：EGL 沿流向不能上升。

> **作图占位：** 画出管轴、自由液面、两处局部损失的竖直跌落、出口 HGL 通过管轴，并使 EGL 始终位于 HGL 上方。
</details>

---
## A3 流量计、泵与气流伯努利方程

### A3-1 毕托管测速

`【课件例题变式】`

**English**

A Pitot tube is used to measure water velocity. The measured head difference is $\Delta h=0.18\ \mathrm m$, and the Pitot coefficient is $c=1.02$. Determine the local velocity.

**中文**

用毕托管测量水流速度，测得水头差 $\Delta h=0.18\ \mathrm m$，毕托管系数 $c=1.02$。求局部流速。

<details>
<summary>答案与讲解</summary>

毕托管公式：

$$
u=c\sqrt{2g\Delta h}.
$$

代入 $g=9.8\ \mathrm{m/s^2}$：

$$
u=1.02\sqrt{2\times9.8\times0.18}
=\boxed{1.92\ \mathrm{m/s}}.
$$

这里求得的是测速点的局部速度 $u$，未必等于整个管道断面的平均速度 $v$。
</details>

### A3-2 铅直文丘里流量计

`【24–25 春夏真题】`

**English**

A vertical Venturi meter carries water. The inlet diameter is $d_1=0.40\ \mathrm m$, and $d_1/d_2=2$. A mercury differential manometer reads $\Delta h=30\ \mathrm{mm}$. The head loss between Sections 1 and 2 is

$$
h_w=0.2\frac{v_2^2}{2g}.
$$

The kinetic-energy correction factors are $\alpha_1=1.0$ and $\alpha_2=1.2$. Determine the discharge. Take the relative density of mercury as 13.6.

**中文**

铅直文丘里流量计中流过水。入口直径 $d_1=0.40\ \mathrm m$，且 $d_1/d_2=2$。水银差压计读数 $\Delta h=30\ \mathrm{mm}$。两断面间水头损失为

$$
h_w=0.2\frac{v_2^2}{2g}.
$$

动能修正系数 $\alpha_1=1.0$、$\alpha_2=1.2$。取水银相对密度 13.6，求流量。

<details>
<summary>答案与讲解</summary>

差压计给出两断面的测压管水头差：

$$
\left(z_1+\frac{p_1}{\rho g}\right)
-
\left(z_2+\frac{p_2}{\rho g}\right)
=(13.6-1)\Delta h.
$$

所以

$$
\Delta H_p=12.6\times0.030=0.378\ \mathrm m.
$$

由连续性方程：

$$
\frac{A_1}{A_2}=\left(\frac{d_1}{d_2}\right)^2=4,
$$

$$
v_2=4v_1.
$$

伯努利方程整理为

$$
\Delta H_p
=\alpha_2\frac{v_2^2}{2g}
-\alpha_1\frac{v_1^2}{2g}
+h_w.
$$

代入 $v_2=4v_1$：

$$
0.378
=1.2\frac{16v_1^2}{2g}
-\frac{v_1^2}{2g}
+0.2\frac{16v_1^2}{2g}.
$$

因此

$$
0.378=21.4\frac{v_1^2}{2g},
$$

$$
v_1=0.588\ \mathrm{m/s}.
$$

入口面积

$$
A_1=\frac{\pi(0.40)^2}{4}=0.1257\ \mathrm{m^2}.
$$

流量

$$
Q=A_1v_1
=0.1257\times0.588
=\boxed{0.0739\ \mathrm{m^3/s}}.
$$

检查：

$$
v_2=4v_1=2.35\ \mathrm{m/s}.
$$
</details>

### A3-3 泵水头与轴功率

`【教材泵送系统题型】`

**English**

A pump delivers water at $Q=0.020\ \mathrm{m^3/s}$ between two large reservoirs. The upper free surface is $10\ \mathrm m$ above the lower one, and the total head loss is $3\ \mathrm m$. The pump efficiency is $0.75$. Determine the pump head and shaft power.

**中文**

水泵以 $Q=0.020\ \mathrm{m^3/s}$ 在两个大水池之间输水，上下游自由液面高差为 $10\ \mathrm m$，总水头损失为 $3\ \mathrm m$，泵效率为 $0.75$。求泵水头和轴功率。

<details>
<summary>答案与讲解</summary>

两个自由液面的压强均为大气压，速度均近似为零：

$$
H_p=\Delta z+h_w=10+3=\boxed{13\ \mathrm m}.
$$

$$
P_{\mathrm{shaft}}=\frac{\rho gQH_p}{\eta_p}
=\frac{1000\times9.8\times0.020\times13}{0.75}
=\boxed{3.40\ \mathrm{kW}}.
$$
</details>

### A3-4 低速气流中的位压

`【课件气流伯努利方程变式】`

**English**

Air of density $\rho=0.8\ \mathrm{kg/m^3}$ rises through an equal-diameter duct by $25\ \mathrm m$. The ambient-air density is $\rho_a=1.2\ \mathrm{kg/m^3}$. The inlet gauge pressure is $p_1=-20\ \mathrm{Pa}$ and the pressure loss is $p_w=60\ \mathrm{Pa}$. Determine the outlet gauge pressure.

**中文**

密度 $\rho=0.8\ \mathrm{kg/m^3}$ 的气体在等直径风道中上升 $25\ \mathrm m$。外界空气密度 $\rho_a=1.2\ \mathrm{kg/m^3}$，入口表压 $p_1=-20\ \mathrm{Pa}$，压强损失 $p_w=60\ \mathrm{Pa}$。求出口表压。

<details>
<summary>答案与讲解</summary>

等直径风道中 $v_1=v_2$，动压项相消。气流伯努利方程化为

$$
p_1+(\rho_a-\rho)g(z_2-z_1)=p_2+p_w.
$$

因此

$$
p_2=-20+(1.2-0.8)\times9.8\times25-60
=\boxed{18\ \mathrm{Pa}}.
$$

密度较小的气体上升时获得正的浮升压。
</details>

---

## A4 动量方程与综合题

### A4-1 竖直射流冲击水平平板

`【22–23 秋冬真题】`

**English**

A water jet is discharged vertically upward with flow rate $Q=2.0\times10^{-3}\ \mathrm{m^3/s}$ from a nozzle of area $A_0=4.0\ \mathrm{cm^2}$. A horizontal plate is located $h=0.40\ \mathrm m$ above the nozzle. Neglect air resistance. Determine the vertical force exerted by the jet on the plate.

**中文**

水以流量 $Q=2.0\times10^{-3}\ \mathrm{m^3/s}$ 从面积 $A_0=4.0\ \mathrm{cm^2}$ 的喷嘴竖直向上喷出，水平平板位于喷嘴上方 $h=0.40\ \mathrm m$。忽略空气阻力，求射流对平板的竖直作用力。

<details>
<summary>答案与讲解</summary>

喷嘴出口速度：

$$
v_0=\frac{Q}{A_0}
=\frac{2.0\times10^{-3}}{4.0\times10^{-4}}
=5.0\ \mathrm{m/s}.
$$

自由射流中压强均为大气压。喷嘴出口到平板前列伯努利方程：

$$
\frac{v_0^2}{2g}
=h+\frac{v^2}{2g}.
$$

所以平板前速度

$$
v=\sqrt{v_0^2-2gh}
=\sqrt{25-2\times9.8\times0.40}
=4.14\ \mathrm{m/s}.
$$

水撞击平板后沿水平方向散开，竖直出口动量分量为零。

取竖直向上为正，对撞击区列动量方程：

$$
F_{\text{plate on water}}
=\rho Q(0-v).
$$

其大小为

$$
F=\rho Qv
=1000\times2.0\times10^{-3}\times4.14
=\boxed{8.28\ \mathrm N}.
$$

射流对平板的力方向竖直向上。
</details>

### A4-2 $180^\circ$ 导叶最大允许射流速度

`【24–25 春夏真题】`

**English**

A stationary guide vane turns a horizontal free jet through $180^\circ$. The jet diameter is $d$, and the maximum allowable support force is $F$. Neglect energy loss and gravity. Determine the maximum jet velocity $v$.

**中文**

固定导叶使水平自由射流转弯 $180^\circ$ 后水平射出。射流直径为 $d$，支座最大允许受力为 $F$。忽略能量损失和重力，求最大射流速度 $v$。

<details>
<summary>答案与讲解</summary>

忽略损失，入口与出口速度大小相等。取入口方向为 $+x$：

$$
v_{1x}=v,
\qquad
v_{2x}=-v.
$$

自由射流断面表压为零。动量方程：

$$
F_{x,\text{vane on water}}
=\rho Q(-v-v)
=-2\rho Qv.
$$

所以水流对导叶的力大小为

$$
F=2\rho Qv.
$$

又

$$
Q=Av=\frac{\pi d^2}{4}v.
$$

因此

$$
F=2\rho\frac{\pi d^2}{4}v^2
=\frac{\rho\pi d^2}{2}v^2.
$$

最大允许速度：

$$
\boxed{v_{\max}=\sqrt{\frac{2F}{\rho\pi d^2}}}.
$$
</details>

### A4-3 水平面内 $90^\circ$ 弯管受力

`【教材习题 5-18 改编】`

**English**

Water flows through a $90^\circ$ elbow in a horizontal plane. The inlet diameter is $d_1=0.25\ \mathrm m$, the outlet diameter is $d_2=0.20\ \mathrm m$, and the discharge is $Q=0.12\ \mathrm{m^3/s}$. The gauge pressures at both sections are $p_1=p_2=1.764\times10^5\ \mathrm{Pa}$. Neglect the weight of water in the elbow. Determine the force components exerted by the water on the elbow.

**中文**

水流通过水平面内的 $90^\circ$ 弯管。入口直径 $d_1=0.25\ \mathrm m$，出口直径 $d_2=0.20\ \mathrm m$，流量 $Q=0.12\ \mathrm{m^3/s}$。两断面表压均为 $p_1=p_2=1.764\times10^5\ \mathrm{Pa}$。忽略弯管内水体重力，求水流对弯管的作用力分量。

<details>
<summary>答案与讲解</summary>

取入口方向为 $+x$，出口方向为 $+y$。

断面面积与速度：

$$
A_1=\frac{\pi d_1^2}{4}=0.04909\ \mathrm{m^2},
\qquad
v_1=\frac{Q}{A_1}=2.445\ \mathrm{m/s},
$$

$$
A_2=\frac{\pi d_2^2}{4}=0.03142\ \mathrm{m^2},
\qquad
v_2=\frac{Q}{A_2}=3.820\ \mathrm{m/s}.
$$

设弯管壁对水的作用力为 $R_x,R_y$。

$x$ 方向：

$$
p_1A_1+R_x
=\rho Q(0-v_1).
$$

故

$$
R_x=-\rho Qv_1-p_1A_1.
$$

水流对弯管的 $x$ 向力与之相反：

$$
F_x=\rho Qv_1+p_1A_1
=\boxed{8.95\ \mathrm{kN}}.
$$

$y$ 方向中，出口压力作用于控制体的方向为 $-y$：

$$
-p_2A_2+R_y
=\rho Q(v_2-0).
$$

所以

$$
R_y=\rho Qv_2+p_2A_2.
$$

水流对弯管的作用方向为 $-y$，大小

$$
F_y=\rho Qv_2+p_2A_2
=\boxed{6.00\ \mathrm{kN}}.
$$

因此水流对弯管的合力大小为

$$
F=\sqrt{F_x^2+F_y^2}
=\boxed{10.78\ \mathrm{kN}}.
$$

方向：沿 $+x$ 与 $-y$ 的合成方向。
</details>

---

## 考前最后速记

1. 同一渐变流断面：

$$
z+\frac{p}{\rho g}=C.
$$

2. 不可压缩总流：

$$
Q=vA.
$$

3. 伯努利方程：

$$
z+\frac{p}{\rho g}+\alpha\frac{v^2}{2g}
\quad\text{按流向减少 }h_w，经过泵增加 }H_p.
$$

4. 水头线关系：

$$
\mathrm{EGL}-\mathrm{HGL}=\alpha\frac{v^2}{2g}.
$$

5. 动量方程：

$$
\sum\mathbf F
=\text{流出动量流率}-\text{流入动量流率}.
$$

6. 压力对控制体的作用方向始终指向控制体内部。

7. 结构受力与结构对流体的作用力方向相反。
