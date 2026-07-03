---
title: FluidMechanics—Chapter5：Dimensional Analysis and Similarity Principle
published: 2026-06-15
description: 量纲、量纲和谐原理、瑞利法、Buckingham π 定理、流动相似理论、相似准数与模型实验
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

本章在课程中的标题是 **Chapter 5 Dimensional Analysis and Similarity Principle（量纲分析与相似原理）**，对应教材第 7 章。

这一章解决两类问题：

1. **方程还不知道时，怎样先判断它可能具有怎样的结构？**
2. **原型太大、太贵或无法直接实验时，怎样用小模型预测原型？**

完整思路是：

> 量纲与量纲和谐原理 → 瑞利法 / Buckingham $\pi$ 定理 → 相似条件与相似准数 → 选择主导力 → 建立模型比尺 → 将模型数据换算到原型。

本章最重要的三条主线：

- **量纲分析只能确定函数结构，通常不能给出无量纲常数或具体函数形式；**
- **模型和原型要先几何相似，再根据主导力选择相似准则；**
- **所有比尺均先明确“原型 / 模型”的方向，再进行计算。**

:::TIP
**本笔记统一规定**

$$
\lambda_X=\frac{X_p}{X_m},
$$

其中下标 $p$ 表示原型（prototype），下标 $m$ 表示模型（model）。

例如：

$$
\lambda_L=\frac{L_p}{L_m}=50
$$

表示原型长度是模型的 50 倍。
:::

### 教学范围判断

课件完整覆盖了教材第 7 章的四部分：

1. Dimension（量纲）
2. Method of dimensional analysis（量纲分析方法）
3. Basics of flow similarity theory（流动相似理论基础）
4. Model experiment（模型实验）

课件中没有明确说明哪一节不考，因此本笔记保留全部课堂内容。

其中 **Cauchy number（柯西数）** 和 **Mach number（马赫数）** 在课件中以 *Extension* 单列，建议作为低优先级拓展掌握：知道定义、物理意义和适用场景即可；其余内容均属于本章核心范围。

历年卷显示，本章常见考法集中在：

- 量纲与单位；
- $Re$、$Fr$ 的物理意义；
- 重力相似下 $\lambda_v,\lambda_Q,\lambda_t$ 与 $\lambda_L$ 的关系；
- 模型与原型之间的流量、速度、力和功率换算。

---

## 目录

- [第一部分：课程笔记](#第一部分课程笔记)
  - [1 量纲](#1-量纲)
  - [2 量纲分析方法](#2-量纲分析方法)
  - [3 流动相似理论基础](#3-流动相似理论基础)
  - [4 模型实验](#4-模型实验)
  - [5 本章速记](#5-本章速记)
- [第二部分：练习题](#第二部分练习题)
  - [A 量纲与基本概念](#a-量纲与基本概念)
  - [B 量纲分析方法](#b-量纲分析方法)
  - [C 相似理论与模型实验](#c-相似理论与模型实验)

---

# 第一部分：课程笔记

## 1 量纲

### 1.1 Unit 与 Dimension

#### Unit（单位）

单位是测量某个物理量时选定的标准大小。

例如长度可以用：

- m
- cm
- mm

单位改变后，物理量的数值会改变。

#### Dimension（量纲）

量纲表示物理量所属的类别和性质，不考虑采用什么单位。

例如长度的量纲始终为：

$$
[L].
$$

无论长度用 m、cm 还是 km 表示，其量纲都不会改变。

简单区分：

- **单位回答“用什么尺子量”；**
- **量纲回答“它属于哪一类物理量”。**

### 1.2 Fundamental dimension 与 Derived dimension

#### Fundamental dimension（基本量纲）

基本量纲彼此独立，无法由其他量纲推导出来。

流体力学通常采用 $M-L-T$ 系统：

- $[M]$：质量 mass
- $[L]$：长度 length
- $[T]$：时间 time

#### Derived dimension（导出量纲）

导出量纲由基本量纲组合得到。

一般写成：

$$
[q]=M^aL^bT^c.
$$

课件也使用 $L^\alpha T^\beta M^\gamma$ 的排列方式，含义完全相同。

### 1.3 常见物理量的量纲

| 物理量 | 符号 | 定义或关系 | 量纲 |
|---|---:|---|---|
| 长度 | $L$ | — | $L$ |
| 面积 | $A$ | $L^2$ | $L^2$ |
| 体积 | $V$ | $L^3$ | $L^3$ |
| 时间 | $t$ | — | $T$ |
| 速度 | $v$ | $L/t$ | $LT^{-1}$ |
| 加速度 | $a$ | $v/t$ | $LT^{-2}$ |
| 质量 | $m$ | — | $M$ |
| 密度 | $\rho$ | $m/V$ | $ML^{-3}$ |
| 力 | $F$ | $ma$ | $MLT^{-2}$ |
| 压强 / 应力 | $p,\tau$ | $F/A$ | $ML^{-1}T^{-2}$ |
| 动力黏度 | $\mu$ | $\tau /(du/dy)$ | $ML^{-1}T^{-1}$ |
| 运动黏度 | $\nu$ | $\mu/\rho$ | $L^2T^{-1}$ |
| 体积流量 | $Q$ | $vA$ | $L^3T^{-1}$ |
| 质量流量 | $\dot m$ | $\rho Q$ | $MT^{-1}$ |
| 功 / 能量 | $E$ | $FL$ | $ML^2T^{-2}$ |
| 功率 | $N$ 或 $P$ | $E/t$ | $ML^2T^{-3}$ |
| 表面张力系数 | $\sigma$ | $F/L$ | $MT^{-2}$ |
| 体积模量 | $K$ | 压强量纲 | $ML^{-1}T^{-2}$ |

:::WARNING
$\mu$ 与 $\nu$ 很容易混淆：

$$
[\mu]=ML^{-1}T^{-1},\qquad [\nu]=L^2T^{-1}.
$$

$\nu$ 中没有质量量纲。
:::

### 1.4 几何量纲、运动量纲与动力量纲

按照是否含有 $M,L,T$，可作如下分类：

- **几何量纲（geometric dimension）**：只含长度 $L$；
- **运动量纲（kinematic dimension）**：含 $L,T$，不含 $M$；
- **动力量纲（dynamic dimension）**：含 $M,L,T$。

例如：

- 面积 $[A]=L^2$：几何量纲；
- 速度 $[v]=LT^{-1}$：运动量纲；
- 压强 $[p]=ML^{-1}T^{-2}$：动力量纲。

### 1.5 Dimensionless quantity（量纲一的量）

若

$$
[q]=M^0L^0T^0=1,
$$

则 $q$ 是量纲一的量，也称：

- dimensionless quantity
- dimensionless number
- pure number

例如：

$$
Re=\frac{vL}{\nu},
$$

其量纲为：

$$
[Re]=\frac{LT^{-1}\cdot L}{L^2T^{-1}}=1.
$$

量纲一的量有三个重要特点：

1. 数值不随单位制改变；
2. 没有普通物理量的尺度效应，可作为相似准数；
3. 可以作为对数、指数、三角函数等超越函数的自变量。

例如 $\ln Re$ 合法，因为 $Re$ 无量纲；$\ln L$ 单独出现通常没有明确物理意义，因为换单位会改变其数值。

---

### 1.6 Principle of dimensional homogeneity（量纲和谐原理）

正确反映客观物理规律的方程，等号两边以及所有可相加减的项必须具有相同量纲。

例如伯努利方程：

$$
z_1+\frac{p_1}{\rho g}+\frac{\alpha_1v_1^2}{2g}
=
z_2+\frac{p_2}{\rho g}+\frac{\alpha_2v_2^2}{2g}+h_w.
$$

其中每一项的量纲都是长度：

$$
[z]=L,
$$

$$
\left[\frac{p}{\rho g}\right]
=\frac{ML^{-1}T^{-2}}{ML^{-3}\cdot LT^{-2}}
=L,
$$

$$
\left[\frac{v^2}{g}\right]
=\frac{L^2T^{-2}}{LT^{-2}}
=L.
$$

因此这些项可以相加。

#### 量纲和谐原理的作用

1. 检查公式是否可能正确；
2. 检查公式是否漏项；
3. 求未知指数；
4. 建立物理方程的基本结构；
5. 为模型实验和实验数据整理提供依据。

#### 能检查什么，不能检查什么

量纲正确是公式正确的必要条件，无法作为充分条件。

例如：

$$
s=vt
$$

和

$$
s=100vt
$$

在量纲上都成立，但具体问题中只有其中一个可能符合真实规律。

量纲分析通常无法确定：

- 无量纲常数；
- 加法形式；
- 具体函数形式；
- 正负号；
- 变量是否遗漏。

:::WARNING
课件提到“经验公式一般不满足量纲和谐”。更严谨的理解是：

- 物理规律最终仍应量纲一致；
- 某些经验公式中的数值系数带有隐含单位，仅在指定单位制下有效；
- 若把该系数误当成纯数，公式表面上会显得量纲不一致。

因此使用经验公式时必须同时检查其适用单位。
:::

---

## 2 量纲分析方法

### 2.1 Dimensional analysis（量纲分析）的目的

研究一个复杂流动时，常常知道结果与哪些变量有关，却暂时写不出完整方程。

量纲分析可以把

$$
F(x_1,x_2,\cdots,x_n)=0
$$

压缩成较少的无量纲变量关系，从而：

- 减少实验变量数量；
- 建立经验公式的基本结构；
- 指导模型实验；
- 便于比较不同尺度下的流动。

本课程介绍两种方法：

1. **Rayleigh method（瑞利法）**
2. **Buckingham $\pi$ theorem（白金汉 $\pi$ 定理）**

---

### 2.2 Rayleigh method（瑞利法）

瑞利法直接使用量纲和谐原理。

假设待求量 $Y$ 与若干变量 $x_1,x_2,\cdots,x_n$ 有关，写成幂函数乘积：

$$
Y=kx_1^{a_1}x_2^{a_2}\cdots x_n^{a_n},
$$

其中：

- $k$：无量纲常数，量纲分析无法确定；
- $a_1,a_2,\cdots,a_n$：待求指数。

#### 计算步骤

1. 判断影响现象的物理量；
2. 写出幂函数乘积；
3. 将每个物理量写成基本量纲；
4. 比较 $M,L,T$ 的指数；
5. 解指数方程；
6. 整理成有物理意义的表达式。

#### 适用范围

当相关变量较少，且指数方程能够唯一确定各指数时，瑞利法最方便。

若变量很多，指数方程中会出现多个自由参数，此时整理过程容易混乱，通常改用 Buckingham $\pi$ 定理。

---

### 2.3 课堂例题：Pitot tube（皮托管）测速公式

已知皮托管测得的动压孔与静压孔压强差为 $\Delta p$，流体密度为 $\rho$，求速度 $u$ 的结构形式。

课件还列出了重力加速度 $g$：

$$
u=f(\Delta p,\rho,g).
$$

假设：

$$
u=k(\Delta p)^a\rho^bg^c.
$$

各量量纲为：

$$
[u]=LT^{-1},
$$

$$
[\Delta p]=ML^{-1}T^{-2},
$$

$$
[\rho]=ML^{-3},
$$

$$
[g]=LT^{-2}.
$$

代入：

$$
LT^{-1}
=
(ML^{-1}T^{-2})^a(ML^{-3})^b(LT^{-2})^c.
$$

比较指数：

$$
\begin{cases}
M:\quad a+b=0,\\
L:\quad -a-3b+c=1,\\
T:\quad -2a-2c=-1.
\end{cases}
$$

解得：

$$
a=\frac12,\qquad b=-\frac12,\qquad c=0.
$$

因此：

$$
\boxed{u=k\sqrt{\frac{\Delta p}{\rho}}}.
$$

若

$$
\Delta p=\rho g\Delta h,
$$

则：

$$
\boxed{u=c\sqrt{2g\Delta h}}.
$$

其中：

- $u$：流速；
- $\Delta p$：总压与静压之差；
- $\rho$：流体密度；
- $\Delta h$：压强差对应的液柱高度；
- $c$：皮托管系数，由实验确定，通常接近 1。

**关键结论：**重力加速度 $g$ 的指数为 0，说明当速度直接由 $\Delta p$ 和 $\rho$ 决定时，$g$ 不进入最终公式；只有把压强差改写成液柱高度后，$g$ 才重新出现。

> [图片占位符：插入课件第 12 页的 Pitot tube 结构图，标出动压孔 A、静压孔 B 和液柱差 $\Delta h$。]

---

### 2.4 课堂例题：圆管壁面切应力

设圆管壁面切应力 $\tau_0$ 与下列变量有关：

- 密度 $\rho$；
- 动力黏度 $\mu$；
- 管径 $D$；
- 绝对粗糙度 $\Delta$；
- 断面平均流速 $v$。

写成：

$$
\tau_0=K\rho^a\mu^bD^c\Delta^dv^e.
$$

量纲：

$$
[\tau_0]=ML^{-1}T^{-2}.
$$

代入各物理量量纲后：

$$
ML^{-1}T^{-2}
=
(ML^{-3})^a(ML^{-1}T^{-1})^bL^cL^d(LT^{-1})^e.
$$

比较指数：

$$
\begin{cases}
a+b=1,\\
-3a-b+c+d+e=-1,\\
-b-e=-2.
\end{cases}
$$

解得：

$$
b=1-a,
$$

$$
c=a-d-1,
$$

$$
e=a+1.
$$

由于未知指数多于独立方程，$a,d$ 无法被唯一确定。将结果整理为无量纲组合：

$$
\tau_0
=
\rho v^2K
\left(\frac{\rho vD}{\mu}\right)^{a-1}
\left(\frac{\Delta}{D}\right)^d.
$$

因此：

$$
\boxed{
\frac{\tau_0}{\rho v^2}
=f\left(Re,\frac{\Delta}{D}\right)
}.
$$

其中：

$$
Re=\frac{\rho vD}{\mu}=\frac{vD}{\nu}.
$$

若采用 Darcy 阻力系数 $\lambda$ 的定义：

$$
\boxed{
\tau_0=\frac{\lambda}{8}\rho v^2
},
$$

则：

$$
\boxed{
\lambda=f\left(Re,\frac{\Delta}{D}\right)
}.
$$

这个结果正是圆管沿程阻力规律的基础：阻力系数由雷诺数和相对粗糙度决定。

> [图片占位符：插入课件第 13 页的圆管速度分布与壁面粗糙度示意图。]

:::TIP
这个例子也说明了瑞利法的局限：

指数方程无法唯一确定所有指数时，最终结果应整理成若干无量纲组合，Buckingham $\pi$ 定理会更直接。
:::

---

### 2.5 Buckingham $\pi$ theorem

#### 定理内容

若一个物理现象由 $n$ 个相互关联的物理量描述：

$$
F(x_1,x_2,\cdots,x_n)=0,
$$

这些物理量涉及 $m$ 个相互独立的基本量纲，则可将原关系改写为：

$$
\Phi(\pi_1,\pi_2,\cdots,\pi_{n-m})=0,
$$

其中每个 $\pi_i$ 都是无量纲量。

因此：

$$
\boxed{N_\pi=n-m}.
$$

在普通不可压缩流体力学中，通常采用 $M,L,T$ 三个基本量纲，因此常有：

$$
m=3.
$$

#### 计算步骤

1. 写出变量关系：

$$
F(x_1,x_2,\cdots,x_n)=0.
$$

2. 选择 $m$ 个重复变量（repeating variables）；
3. 计算无量纲项个数 $n-m$；
4. 将每个剩余变量分别与重复变量组成一个 $\pi$ 项；
5. 比较量纲，求各指数；
6. 写出 $\pi$ 项之间的函数关系；
7. 根据物理规律进一步整理。

#### 重复变量的选择原则

1. 重复变量合起来必须包含问题涉及的全部基本量纲；
2. 重复变量之间应量纲独立；
3. 优先选择重要、典型、容易测量的变量；
4. 避免把待求量选为重复变量；
5. 避免选择彼此能够组成无量纲量的一组变量。

课程中的常见选择：

- 管流：$d,v,\rho$；
- 明渠流：$H,v,\rho$。

---

### 2.6 课堂例题：等直径圆管压降

水平等直径圆管中，压强差 $\Delta p$ 与下列变量有关：

$$
\Delta p=f(d,\rho,v,l,\mu,\Delta).
$$

即：

$$
F(d,\rho,v,l,\mu,\Delta,\Delta p)=0.
$$

共有：

$$
n=7.
$$

采用 $M,L,T$ 三个基本量纲：

$$
m=3.
$$

所以：

$$
N_\pi=7-3=4.
$$

选择重复变量：

$$
d,\rho,v.
$$

剩余变量为：

$$
\mu,\,l,\,\Delta,\,\Delta p.
$$

分别组成无量纲项：

$$
\pi_1=d^{a_1}v^{b_1}\rho^{c_1}\mu,
$$

$$
\pi_2=d^{a_2}v^{b_2}\rho^{c_2}l,
$$

$$
\pi_3=d^{a_3}v^{b_3}\rho^{c_3}\Delta,
$$

$$
\pi_4=d^{a_4}v^{b_4}\rho^{c_4}\Delta p.
$$

求得：

$$
\pi_1=\frac{\mu}{\rho vd}=\frac1{Re},
$$

$$
\pi_2=\frac ld,
$$

$$
\pi_3=\frac{\Delta}{d},
$$

$$
\pi_4=\frac{\Delta p}{\rho v^2}.
$$

因此：

$$
\boxed{
\frac{\Delta p}{\rho v^2}
=\Phi\left(Re,\frac ld,\frac{\Delta}{d}\right)
}.
$$

对于充分发展等直径管流，压降与管长成正比，因此可进一步写为：

$$
\boxed{
\Delta p
=
\rho v^2\frac ld
f\left(Re,\frac{\Delta}{d}\right)
}.
$$

若把常用的 $1/2$ 放入定义中：

$$
\boxed{
\Delta p
=
\lambda\frac ld\frac{\rho v^2}{2}
},
$$

即 Darcy–Weisbach 公式。

对应水头损失：

$$
\boxed{
h_f=\lambda\frac ld\frac{v^2}{2g}}.
$$

这个例子体现了量纲分析的价值：即使还不知道 $\lambda$ 的具体公式，也能先确定它只可能依赖于

$$
Re,\qquad \frac{\Delta}{d}.
$$

---

### 2.7 课堂例题：单位长度圆柱绕流阻力

设竖直长圆柱单位长度所受阻力 $F_D$ 与：

$$
D,U,\rho,\mu
$$

有关：

$$
F_D=f(D,U,\rho,\mu).
$$

这里 $F_D=F/L$，量纲为：

$$
[F_D]=MT^{-2}.
$$

选择重复变量：

$$
\rho,U,D.
$$

共有 $n=5,m=3$，得到两个 $\pi$ 项：

$$
\pi_1=\frac{F_D}{\rho DU^2},
$$

$$
\pi_2=\frac{\mu}{\rho DU}=\frac1{Re}.
$$

所以：

$$
\boxed{
\frac{F_D}{\rho DU^2}=f(Re)
}.
$$

或写成：

$$
\boxed{
F_D=C_D(Re)\rho DU^2
}.
$$

其中 $C_D$ 是阻力系数，由实验确定。

---

### 2.8 课堂例题：Venturi flowmeter（文丘里流量计）

课件采用的简化变量为：

$$
q=f(\rho,D_1,\mu,D_2,\Delta p).
$$

连同待求量 $q$，共有 $n=6$ 个变量。选择：

$$
\rho,q,D_1
$$

作为重复变量，得到三个无量纲项：

$$
\pi_1=\frac{\rho q^2}{D_1^4\Delta p},
$$

$$
\pi_2=\frac{\rho q}{D_1\mu},
$$

$$
\pi_3=\frac{D_2}{D_1}.
$$

整理后：

$$
\boxed{
q=D_1^2\sqrt{\frac{\Delta p}{\rho}}
\,f\left(Re,\frac{D_2}{D_1}\right)
}.
$$

其中可用流量构造雷诺数：

$$
Re\sim \frac{\rho q}{\mu D_1}.
$$

:::WARNING
课件题干还提到流量计长度 $L$ 和粗糙度 $\Delta$，但后续推导中将它们省略了。

这相当于采用了简化假设：长度与粗糙度影响可忽略，或结构已经固定。若完整保留，则函数中还应出现：

$$
\frac{L}{D_1},\qquad \frac{\Delta}{D_1}.
$$

考试时应以题目明确给出的变量集合为准。
:::

---

### 2.9 课堂例题：用 $\pi$ 定理求壁面切应力

设：

$$
F(D,v,\rho,\tau_0,\mu,\Delta)=0.
$$

选择重复变量：

$$
D,v,\rho.
$$

有：

$$
n=6,\qquad m=3,\qquad N_\pi=3.
$$

得到：

$$
\pi_1=\frac{\tau_0}{\rho v^2},
$$

$$
\pi_2=\frac{\mu}{\rho vD}=\frac1{Re},
$$

$$
\pi_3=\frac{\Delta}{D}.
$$

因此：

$$
\boxed{
\frac{\tau_0}{\rho v^2}
=f\left(Re,\frac{\Delta}{D}\right)
}.
$$

与瑞利法得到的结果一致。

#### 两种方法的比较

| 方法 | 优点 | 局限 |
|---|---|---|
| Rayleigh method | 简单、直接，变量少时很快 | 变量多时自由指数较多，整理困难 |
| Buckingham $\pi$ theorem | 系统、通用，直接得到 $n-m$ 个无量纲项 | 重复变量选择不当会使计算复杂 |

---

## 3 流动相似理论基础

### 3.1 Prototype 与 Model

- **Prototype（原型）**：真实工程对象或真实流动；
- **Model（模型）**：按一定比例缩小或放大的实验对象。

模型实验的目标是：

> 通过模型中的可测结果，预测原型中的流动现象和受力。

这要求模型和原型满足相似关系。

### 3.2 Flow similarity（流动相似）的四类条件

完整流动相似通常包括：

1. Geometric similarity（几何相似）
2. Kinematic similarity（运动相似）
3. Dynamic similarity（动力相似）
4. Similarity of initial and boundary conditions（初始条件与边界条件相似）

---

### 3.3 Geometric similarity（几何相似）

原型与模型中所有对应线段的比值相同，对应角相等。

长度比尺：

$$
\boxed{
\lambda_L=\frac{L_p}{L_m}
}.
$$

面积比尺：

$$
\boxed{
\lambda_A=\frac{A_p}{A_m}=\lambda_L^2
}.
$$

体积比尺：

$$
\boxed{
\lambda_V=\frac{V_p}{V_m}=\lambda_L^3
}.
$$

几何相似还要求：

- 对应边界形状相似；
- 对应粗糙度应按比例缩放；
- 相对粗糙度相等：

$$
\left(\frac{\Delta}{L}\right)_p
=
\left(\frac{\Delta}{L}\right)_m.
$$

---

### 3.4 Kinematic similarity（运动相似）

原型和模型对应点的速度、加速度方向相同，大小保持固定比例。

速度比尺：

$$
\lambda_v
=
\frac{v_p}{v_m}
=
\frac{L_p/t_p}{L_m/t_m}
=
\boxed{\frac{\lambda_L}{\lambda_t}}.
$$

因此：

$$
\boxed{
\lambda_t=\frac{\lambda_L}{\lambda_v}
}.
$$

加速度比尺：

$$
\lambda_a
=
\frac{a_p}{a_m}
=
\frac{v_p/t_p}{v_m/t_m}
=
\boxed{\frac{\lambda_v}{\lambda_t}}
=
\boxed{\frac{\lambda_L}{\lambda_t^2}}.
$$

流量比尺：

$$
Q=vA,
$$

所以：

$$
\boxed{
\lambda_Q=\lambda_v\lambda_A
=\lambda_v\lambda_L^2
}.
$$

---

### 3.5 Dynamic similarity（动力相似）

原型和模型对应点上同类力的方向相同，大小保持固定比例。

力比尺：

$$
\boxed{
\lambda_F=\frac{F_p}{F_m}
}.
$$

常见作用力包括：

- 惯性力；
- 重力；
- 压力；
- 黏性力；
- 弹性力；
- 表面张力。

完全动力相似要求所有重要力之间的比例均一致。

实际工程中通常难以同时满足所有力的相似，因此需要识别**主导力**，优先满足对应的相似准则。

### 3.6 初始条件与边界条件相似

#### 初始条件

非恒定流中，需要保证模型与原型在对应初始时刻的：

- 水位；
- 速度场；
- 压力场；
- 其他初始状态

具有相似关系。

#### 边界条件

模型和原型的：

- 入口流量或速度分布；
- 出口条件；
- 固壁形状；
- 自由液面；
- 压力边界

均应相似。

几何相似是运动相似和动力相似的基础；动力相似决定流动运动规律是否能够正确复现；运动相似是几何相似与动力相似在速度场中的表现。

---

### 3.7 相似准数的来源

在仅考虑重力的不可压缩黏性流体中，Navier–Stokes 方程可写成：

$$
\mathbf f-
\frac1\rho\nabla p
+\nu\nabla^2\mathbf u
=
\frac{\partial\mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u.
$$

各项分别代表：

- 重力；
- 压力；
- 黏性力；
- 当地加速度惯性力；
- 迁移加速度惯性力。

将各项与迁移惯性项比较并无量纲化，可得到：

- Froude number $Fr$；
- Euler number $Eu$；
- Reynolds number $Re$；
- Strouhal number $St$。

> [图片占位符：插入课件第 33 或第 36 页，将 N–S 方程中的 gravity、pressure、viscous force、time-varying inertia 和 convective inertia 对应标出。]

---

### 3.8 Froude number（弗劳德数）

课件采用：

$$
\boxed{
Fr=\frac{v}{\sqrt{gL}}
}.
$$

其物理意义与惯性力和重力的相对大小有关。

严格按力的数量级：

$$
\frac{F_I}{F_G}
\sim
\frac{\rho L^2v^2}{\rho gL^3}
=
\frac{v^2}{gL}
=Fr^2.
$$

因此：

- $Fr$ 越大，惯性作用相对重力越强；
- $Fr$ 越小，重力作用相对更显著；
- 两流动 $Fr$ 相等，等价于惯性力与重力的比例相同。

常见应用：

- 明渠流；
- 堰流；
- 孔口出流；
- 船舶兴波与波浪阻力；
- 波浪冲击；
- 桥墩绕流中受自由液面影响的流动。

Froude 相似条件：

$$
(Fr)_p=(Fr)_m.
$$

即：

$$
\frac{v_p}{\sqrt{g_pL_p}}
=
\frac{v_m}{\sqrt{g_mL_m}}.
$$

得到：

$$
\boxed{
\lambda_v=(\lambda_g\lambda_L)^{1/2}
}.
$$

若模型和原型都在地球重力场中：

$$
\lambda_g=1,
$$

则：

$$
\boxed{
\lambda_v=\lambda_L^{1/2}
}.
$$

---

### 3.9 Euler number（欧拉数）

$$
\boxed{
Eu=\frac{\Delta p}{\rho v^2}
}.
$$

物理意义：

$$
Eu\sim\frac{\text{pressure force}}{\text{inertia force}}.
$$

Euler 相似：

$$
(Eu)_p=(Eu)_m.
$$

因此：

$$
\boxed{
\lambda_p=\lambda_\rho\lambda_v^2
}.
$$

其中 $\lambda_p=\Delta p_p/\Delta p_m$。

在几何相似、运动相似且主要作用力已经相似时，压力相似往往随动力相似自动满足。

---

### 3.10 Reynolds number（雷诺数）

$$
\boxed{
Re=\frac{vL}{\nu}=\frac{\rho vL}{\mu}
}.
$$

物理意义：

$$
Re\sim\frac{\text{inertia force}}{\text{viscous force}}.
$$

- $Re$ 大：惯性作用相对较强；
- $Re$ 小：黏性作用相对显著。

Reynolds 相似条件：

$$
(Re)_p=(Re)_m.
$$

即：

$$
\frac{v_pL_p}{\nu_p}
=
\frac{v_mL_m}{\nu_m}.
$$

得到：

$$
\boxed{
\lambda_v\lambda_L=\lambda_\nu
},
$$

或：

$$
\boxed{
\lambda_v=\frac{\lambda_\nu}{\lambda_L}
}.
$$

常见应用：

- 有压管流；
- 黏性主导的低 $Re$ 绕流；
- 边界层与阻力问题；
- 小尺度黏性流动。

---

### 3.11 Strouhal number（斯特劳哈尔数）

课件使用：

$$
\boxed{
St=\frac{L}{vt}
}.
$$

若以频率 $f=1/t$ 表示：

$$
\boxed{
St=\frac{fL}{v}
}.
$$

物理意义：

$$
St\sim
\frac{\text{time-varying acceleration inertia}}
{\text{convective acceleration inertia}}.
$$

用于描述：

- 非恒定流；
- 周期性涡脱落；
- 脉动流；
- 振荡和波动问题。

Strouhal 相似条件：

$$
(St)_p=(St)_m.
$$

即：

$$
\boxed{
\lambda_t=\frac{\lambda_L}{\lambda_v}
}.
$$

这与运动相似的时间比尺关系一致。

---

### 3.12 四个主要相似准数总结

| 准数 | 定义 | 反映的力比 | 相等时保证 |
|---|---|---|---|
| $Fr$ | $v/\sqrt{gL}$ | 惯性力 / 重力的平方根形式 | 重力相似 |
| $Eu$ | $\Delta p/(\rho v^2)$ | 压力 / 惯性力 | 压力相似 |
| $Re$ | $vL/\nu$ | 惯性力 / 黏性力 | 黏性力相似 |
| $St$ | $L/(vt)$ | 当地惯性 / 迁移惯性 | 非恒定特征相似 |

:::TIP
为什么每个相似准数都和惯性力比较？

流体运动状态的改变由各种外力共同造成。惯性项描述流体维持或改变运动状态的响应，因此将重力、压力、黏性力等分别与惯性力比较，可以直接判断哪一种作用主导流动。
:::

---

### 3.13 Complete dynamic similarity 为什么难以实现

假设模型和原型使用同一种流体，且都处于相同重力场：

$$
\lambda_\nu=1,
\qquad
\lambda_g=1.
$$

若同时要求 Reynolds 相似：

$$
\lambda_v\lambda_L=1,
$$

所以：

$$
\lambda_v=\lambda_L^{-1}.
$$

若同时要求 Froude 相似：

$$
\lambda_v=\lambda_L^{1/2}.
$$

因此必须：

$$
\lambda_L^{-1}=\lambda_L^{1/2}.
$$

得到：

$$
\lambda_L=1.
$$

这意味着模型与原型一样大，模型实验失去意义。

所以工程中通常采用：

> 找出控制流动的主要作用力，只满足对应的单项相似准则。

- 重力主导：采用 $Fr$ 相似；
- 黏性力主导：采用 $Re$ 相似；
- 压力效应为主：采用 $Eu$ 相似；
- 强非恒定效应：还需考虑 $St$ 相似。

若使用不同流体，理论上可以同时满足 $Fr$ 和 $Re$ 相似。

由 $Fr$ 相似：

$$
\lambda_v=(\lambda_g\lambda_L)^{1/2}.
$$

由 $Re$ 相似：

$$
\lambda_\nu=\lambda_v\lambda_L.
$$

所以：

$$
\boxed{
\lambda_\nu=\lambda_g^{1/2}\lambda_L^{3/2}
}.
$$

若 $\lambda_g=1$：

$$
\boxed{
\lambda_\nu=\lambda_L^{3/2}
}.
$$

实际困难在于很难找到恰好具有所需运动黏度、密度和其他物性的模型流体。

---

### 3.14 Extension：Cauchy number 与 Mach number

#### Cauchy number（柯西数）

对于可压缩流体，弹性力可能很重要。

定义：

$$
\boxed{
Ca=\frac{\rho v^2}{K}
}.
$$

其中：

- $K$：体积模量；
- $\rho v^2$：惯性作用的特征量。

物理意义：

$$
Ca\sim\frac{\text{inertia force}}{\text{elastic force}}.
$$

应用：

- 水击；
- 液体管道瞬变；
- 流体弹性显著的问题。

这里的 $Ca$ 表示 Cauchy number，部分文献也用 $Ca$ 表示 capillary number，阅读时必须结合定义判断。

#### Mach number（马赫数）

流体中的声速：

$$
c=\sqrt{\frac{K}{\rho}}.
$$

因此：

$$
Ca=\frac{\rho v^2}{K}=\frac{v^2}{c^2}=Ma^2.
$$

Mach number：

$$
\boxed{
Ma=\frac vc
}.
$$

当气流速度接近或超过声速时，可压缩性和弹性效应显著，需要满足：

$$
(Ma)_p=(Ma)_m.
$$

---

## 4 模型实验

### 4.1 如何选择模型相似准则

选择准则的核心是判断主导力。

#### Reynolds similarity criterion

适用于黏性力对流动起主要作用的问题：

- 有压管流；
- 低 $Re$ 的浸没物体绕流；
- 黏性边界层；
- 层流阻力问题。

#### Froude similarity criterion

适用于重力和自由液面作用显著的问题：

- 明渠流；
- 堰流；
- 桥墩附近带自由液面的流动；
- 船舶兴波；
- 波浪冲击；
- 有明显漩涡和自由液面的局部有压流动。

#### Automatic model zone（自动模型区）

当流动进入阻力平方区，阻力系数基本不再随 $Re$ 变化。

若模型和原型都处在这一流动区域，则即使 $Re_p\ne Re_m$，阻力系数仍可能近似相同。此时可按 Froude 相似设计，同时近似实现阻力相似。

需要满足的前提：

- 模型与原型均已进入阻力系数对 $Re$ 不敏感的区域；
- 相对粗糙度和主要边界条件合理相似。

不能只凭“流动是湍流”就直接忽略 Reynolds 数影响。

---

### 4.2 Model design（模型设计）的步骤

1. **确定长度比尺 $\lambda_L$**
   - 根据实验场地、测量精度、模型加工和原型范围确定。
2. **确定模型几何尺寸**
   - 所有对应长度除以 $\lambda_L$。
3. **选择相似准则**
   - 根据主导力选 $Re$、$Fr$ 或其他准则。
4. **计算各物理量比尺**
   - 速度、时间、流量、压强、力、功率等。
5. **计算模型运行条件**
   - 给定原型流量、速度或水位，换算模型值。
6. **保证边界条件相似**
   - 入口速度分布、水位、粗糙度、出口条件等。

---

### 4.3 Froude 相似的常用比尺

由：

$$
\lambda_v=(\lambda_g\lambda_L)^{1/2}
$$

可得：

#### 时间比尺

$$
\lambda_t
=
\frac{\lambda_L}{\lambda_v}
=
\boxed{
\left(\frac{\lambda_L}{\lambda_g}\right)^{1/2}
}.
$$

#### 流量比尺

$$
\lambda_Q
=
\lambda_v\lambda_L^2
=
\boxed{
\lambda_g^{1/2}\lambda_L^{5/2}
}.
$$

#### 加速度比尺

$$
\lambda_a
=
\frac{\lambda_v}{\lambda_t}
=
\boxed{\lambda_g}.
$$

#### 压强比尺

由 Euler 相似：

$$
\lambda_p
=
\lambda_\rho\lambda_v^2
=
\boxed{
\lambda_\rho\lambda_g\lambda_L
}.
$$

#### 力比尺

$$
F\sim pL^2,
$$

所以：

$$
\boxed{
\lambda_F
=
\lambda_\rho\lambda_g\lambda_L^3
}.
$$

#### 功率比尺

$$
N=Fv,
$$

所以：

$$
\boxed{
\lambda_N
=
\lambda_\rho\lambda_g^{3/2}\lambda_L^{7/2}
}.
$$

若模型与原型使用同种液体，且 $g_p=g_m$：

| 物理量 | 比尺 |
|---|---:|
| 长度 | $\lambda_L$ |
| 面积 | $\lambda_L^2$ |
| 体积 | $\lambda_L^3$ |
| 速度 | $\lambda_L^{1/2}$ |
| 时间 | $\lambda_L^{1/2}$ |
| 流量 | $\lambda_L^{5/2}$ |
| 压强 | $\lambda_L$ |
| 力 | $\lambda_L^3$ |
| 功率 | $\lambda_L^{7/2}$ |

:::WARNING
Froude 相似中：

$$
\lambda_v=\lambda_t=\lambda_L^{1/2}
$$

数值相同，但物理意义不同：

- $\lambda_v=v_p/v_m$；
- $\lambda_t=t_p/t_m$。
:::

---

### 4.4 Reynolds 相似的常用比尺

由：

$$
\lambda_v\lambda_L=\lambda_\nu
$$

得到：

$$
\boxed{
\lambda_v=\frac{\lambda_\nu}{\lambda_L}
}.
$$

#### 时间比尺

$$
\lambda_t
=
\frac{\lambda_L}{\lambda_v}
=
\boxed{
\frac{\lambda_L^2}{\lambda_\nu}
}.
$$

#### 流量比尺

$$
\lambda_Q
=
\lambda_v\lambda_L^2
=
\boxed{
\lambda_\nu\lambda_L
}.
$$

#### 加速度比尺

$$
\lambda_a
=
\frac{\lambda_v}{\lambda_t}
=
\boxed{
\frac{\lambda_\nu^2}{\lambda_L^3}
}.
$$

若模型与原型使用同一种流体：

$$
\lambda_\nu=1.
$$

则：

| 物理量 | 比尺 |
|---|---:|
| 速度 | $\lambda_L^{-1}$ |
| 时间 | $\lambda_L^2$ |
| 流量 | $\lambda_L$ |
| 加速度 | $\lambda_L^{-3}$ |

这意味着：模型越小，为保持相同 $Re$，模型中的速度往往要更大。

---

### 4.5 模型实验数据如何处理

模型实验得到的量分为两类。

#### Dimensionless quantity（无量纲量）

例如：

- 阻力系数 $C_D$；
- 沿程阻力系数 $\lambda$；
- 流量系数；
- 压力系数。

流动相似时：

$$
\boxed{C_p=C_m}.
$$

无量纲量通常可以直接由模型用于原型，无需按长度比尺换算。

#### Dimensional quantity（有量纲量）

例如：

- 速度；
- 流量；
- 压强；
- 阻力；
- 功率。

必须利用对应比尺进行换算：

$$
X_p=\lambda_X X_m.
$$

或：

$$
X_m=\frac{X_p}{\lambda_X}.
$$

---

### 4.6 课堂例题：油管的 Reynolds 相似模型

原型输油管：

- 直径 $d_p=0.15\ \mathrm{m}$；
- 长度 $L_p=5\ \mathrm{m}$；
- 流量 $Q_p=0.18\ \mathrm{m^3/s}$；
- 油的运动黏度 $\nu_p=0.13\ \mathrm{cm^2/s}$。

模型使用 $10^\circ\mathrm C$ 的水：

$$
\nu_m=0.0131\ \mathrm{cm^2/s}.
$$

模型管径与原型相同：

$$
d_m=d_p.
$$

#### （1）求模型流量

管流由黏性作用控制，满足：

$$
(Re)_p=(Re)_m.
$$

即：

$$
\frac{v_pd_p}{\nu_p}
=
\frac{v_md_m}{\nu_m}.
$$

由于 $d_p=d_m$：

$$
\frac{v_m}{v_p}=\frac{\nu_m}{\nu_p}.
$$

面积相同，所以流量比等于速度比：

$$
\frac{Q_m}{Q_p}
=
\frac{\nu_m}{\nu_p}.
$$

代入：

$$
Q_m
=0.18\times\frac{0.0131}{0.13}
=0.0181\ \mathrm{m^3/s}.
$$

所以：

$$
\boxed{Q_m\approx0.0181\ \mathrm{m^3/s}}.
$$

#### （2）由模型压差求原型压差水头

模型 5 m 管段测得压差对应水柱高度：

$$
h_m=0.03\ \mathrm m.
$$

在 Reynolds 相似和几何相似下，Euler 数相同：

$$
\left(\frac{\Delta p}{\rho v^2}\right)_p
=
\left(\frac{\Delta p}{\rho v^2}\right)_m.
$$

用各自流体的压强水头表示：

$$
h=\frac{\Delta p}{\rho g}.
$$

若 $g_p=g_m$：

$$
\frac{h_p}{h_m}
=
\frac{v_p^2}{v_m^2}.
$$

由于同直径：

$$
\frac{v_p}{v_m}=\frac{Q_p}{Q_m}.
$$

所以：

$$
h_p
=h_m\left(\frac{Q_p}{Q_m}\right)^2.
$$

代入：

$$
h_p
=0.03\left(\frac{0.18}{0.0181}\right)^2
\approx2.97\ \mathrm m.
$$

课件因中间数值取整给出约 $2.95\ \mathrm m$，二者差异来自舍入。

---

### 4.7 课堂例题：船模试验

船模长度比尺：

$$
\lambda_L=50.
$$

模型速度：

$$
v_m=1\ \mathrm{m/s}.
$$

测得模型波浪阻力：

$$
F_m=0.02\ \mathrm N.
$$

原型与模型均在水中，且 $g_p=g_m$。

波浪问题由重力控制，采用 Froude 相似。

#### （1）原型航速

$$
\lambda_v=\lambda_L^{1/2}=\sqrt{50}.
$$

因此：

$$
v_p=\sqrt{50}\times1
=7.07\ \mathrm{m/s}.
$$

#### （2）原型波浪阻力

同流体、同重力下：

$$
\lambda_F=\lambda_L^3.
$$

因此：

$$
F_p=50^3\times0.02
=2500\ \mathrm N.
$$

#### （3）原型所需功率

$$
N_p=F_pv_p.
$$

所以：

$$
N_p=2500\times7.07
\approx1.77\times10^4\ \mathrm W.
$$

$$
\boxed{N_p\approx17.7\ \mathrm{kW}}.
$$

> [图片占位符：插入课件第 53 页船模例题中的模型—原型示意或比尺计算截图。]

---

### 4.8 课堂例题：同时满足 Reynolds 与 Froude 相似

原型油的运动黏度：

$$
\nu_p=0.74\ \mathrm{cm^2/s}.
$$

初步取长度比尺：

$$
\lambda_L=4.
$$

油从容器经管道流出，重力和黏性作用都重要，因此希望同时满足：

$$
Re_p=Re_m,
$$

$$
Fr_p=Fr_m.
$$

在相同重力场中：

$$
\lambda_\nu=\lambda_L^{3/2}.
$$

因此：

$$
\lambda_\nu=4^{3/2}=8.
$$

所需模型流体运动黏度：

$$
\nu_m=\frac{\nu_p}{\lambda_\nu}
=\frac{0.74}{8}
=0.0925\ \mathrm{cm^2/s}.
$$

实际很难找到恰好为该黏度的流体。课件选择 $20^\circ\mathrm C$、质量分数约 59% 的甘油溶液：

$$
\nu_m=0.0892\ \mathrm{cm^2/s}.
$$

此时应修正长度比尺：

$$
\lambda_L
=
\left(\frac{\nu_p}{\nu_m}\right)^{2/3}.
$$

代入：

$$
\lambda_L
=
\left(\frac{0.74}{0.0892}\right)^{2/3}
\approx4.10.
$$

若原型尺寸为：

- 容器直径 $D_p=4\ \mathrm m$；
- 液深 $h_p=8\ \mathrm m$；
- 管径 $d_p=0.5\ \mathrm m$；
- 管长 $l_p=1.5\ \mathrm m$；

则模型尺寸：

$$
D_m=\frac{4}{4.10}=0.976\ \mathrm m,
$$

$$
h_m=\frac{8}{4.10}=1.95\ \mathrm m,
$$

$$
d_m=\frac{0.5}{4.10}=0.122\ \mathrm m,
$$

$$
l_m=\frac{1.5}{4.10}=0.366\ \mathrm m.
$$

速度比尺：

$$
\lambda_v=\sqrt{\lambda_L}=2.02.
$$

时间比尺：

$$
\lambda_t=\frac{\lambda_L}{\lambda_v}
=\sqrt{\lambda_L}
=2.02.
$$

加速度比尺：

$$
\lambda_a=1.
$$

> [图片占位符：插入课件第 54 页油箱、出流管及主要尺寸示意图。]

:::WARNING
课件最后写到“模型流量约为原型的一半”，从公式看应理解为**模型流速约为原型的一半**：

$$
\frac{v_m}{v_p}=\frac1{\lambda_v}\approx0.494.
$$

流量还包含面积比：

$$
\lambda_Q=\lambda_v\lambda_L^2,
$$

因此不能只按速度比换算流量。
:::

---

## 5 本章速记

### 5.1 一张逻辑图

$$
\text{找变量}
\longrightarrow
\text{写量纲}
\longrightarrow
\text{组成无量纲项}
\longrightarrow
\text{识别主导力}
\longrightarrow
\text{选相似准则}
\longrightarrow
\text{求比尺}
\longrightarrow
\text{模型值与原型值换算}.
$$

### 5.2 必背定义

$$
Re=\frac{vL}{\nu}
\quad\text{惯性力 / 黏性力},
$$

$$
Fr=\frac{v}{\sqrt{gL}}
\quad\text{惯性作用与重力作用的相对大小},
$$

$$
Eu=\frac{\Delta p}{\rho v^2}
\quad\text{压力 / 惯性力},
$$

$$
St=\frac{L}{vt}=\frac{fL}{v}
\quad\text{当地惯性 / 迁移惯性}.
$$

### 5.3 必背比尺

#### Froude 相似，同流体、同重力

$$
\boxed{\lambda_v=\lambda_L^{1/2}},
$$

$$
\boxed{\lambda_t=\lambda_L^{1/2}},
$$

$$
\boxed{\lambda_Q=\lambda_L^{5/2}},
$$

$$
\boxed{\lambda_F=\lambda_L^3},
$$

$$
\boxed{\lambda_N=\lambda_L^{7/2}}.
$$

#### Reynolds 相似，同一种流体

$$
\boxed{\lambda_v=\lambda_L^{-1}},
$$

$$
\boxed{\lambda_t=\lambda_L^2},
$$

$$
\boxed{\lambda_Q=\lambda_L}.
$$

### 5.4 解模型题的固定流程

1. 写明：

$$
\lambda_X=\frac{X_p}{X_m}.
$$

2. 判断主导力；
3. 写相似准数相等；
4. 推导目标比尺；
5. 判断题目给的是原型量还是模型量；
6. 使用：

$$
X_p=\lambda_XX_m
$$

或：

$$
X_m=\frac{X_p}{\lambda_X}.
$$

:::WARNING
**最后排雷**

1. $Fr$ 在本课程中定义为 $v/\sqrt{gL}$，惯性力与重力的严格力比为 $Fr^2$；
2. 比尺方向固定为原型 / 模型，不能中途倒置；
3. 面积比尺是 $\lambda_L^2$，流量比尺还要乘速度比尺；
4. 无量纲量在相似流动中数值相等，有量纲量必须按比尺换算；
5. 同流体、同重力时，$Re$ 相似和 $Fr$ 相似无法同时满足，除非 $\lambda_L=1$；
6. 量纲分析得到的是关系结构，常数和具体函数仍需理论或实验确定；
7. 变量选漏后，即使推导过程量纲完全正确，结果仍可能不完整。
:::

---

# 第二部分：练习题

## A 量纲与基本概念

### A1 常见物理量的量纲

`【教材基础题改编】`

**English:** Determine the dimensions of dynamic viscosity $\mu$, kinematic viscosity $\nu$, pressure $p$, surface tension coefficient $\sigma$, and power $N$ in the $M-L-T$ system.

**中文：**在 $M-L-T$ 基本量纲系统中，写出动力黏度 $\mu$、运动黏度 $\nu$、压强 $p$、表面张力系数 $\sigma$ 和功率 $N$ 的量纲。

<details>
<summary>答案与讲解</summary>

$$
\boxed{[\mu]=ML^{-1}T^{-1}},
$$

$$
\boxed{[\nu]=L^2T^{-1}},
$$

$$
\boxed{[p]=ML^{-1}T^{-2}},
$$

$$
\boxed{[\sigma]=MT^{-2}},
$$

$$
\boxed{[N]=ML^2T^{-3}}.
$$

推导：

$$
\tau=\mu\frac{du}{dy}
\quad\Rightarrow\quad
[\mu]=\frac{ML^{-1}T^{-2}}{T^{-1}}
=ML^{-1}T^{-1}.
$$

$$
\nu=\frac\mu\rho
\quad\Rightarrow\quad
[\nu]=\frac{ML^{-1}T^{-1}}{ML^{-3}}
=L^2T^{-1}.
$$

$$
p=\frac FA
\quad\Rightarrow\quad
[p]=\frac{MLT^{-2}}{L^2}
=ML^{-1}T^{-2}.
$$

$$
\sigma=\frac FL
\quad\Rightarrow\quad
[\sigma]=MT^{-2}.
$$

$$
N=Fv
\quad\Rightarrow\quad
[N]=MLT^{-2}\cdot LT^{-1}
=ML^2T^{-3}.
$$
</details>

---

### A2 Reynolds number 的物理意义

`【24–25 真题】`

**English:** The Reynolds number represents the ratio of the ______ force to the ______ force in a fluid flow.

**中文：**雷诺数表示流体流动中 ______ 力与 ______ 力之比。

<details>
<summary>答案与讲解</summary>

$$
\boxed{\text{inertial force（惯性力）}},
\qquad
\boxed{\text{viscous force（黏性力）}}.
$$

因为：

$$
Re=\frac{vL}{\nu}=\frac{\rho vL}{\mu}.
$$

惯性力数量级：

$$
F_I\sim \rho L^2v^2.
$$

黏性力数量级：

$$
F_\mu\sim \mu\frac vL L^2=\mu vL.
$$

所以：

$$
\frac{F_I}{F_\mu}
\sim
\frac{\rho L^2v^2}{\mu vL}
=
\frac{\rho vL}{\mu}
=Re.
$$
</details>

---

### A3 量纲和谐检验

`【教材习题 7-1 改编】`

**English:** Verify that the following two equations are dimensionally homogeneous:

$$
\tau=\mu\frac{du}{dy},
$$

$$
z+\frac{p}{\rho g}+\frac{u^2}{2g}=H.
$$

**中文：**验证下列两个方程满足量纲和谐原理：

$$
\tau=\mu\frac{du}{dy},
$$

$$
z+\frac{p}{\rho g}+\frac{u^2}{2g}=H.
$$

<details>
<summary>答案与讲解</summary>

第一式：

$$
\left[\mu\frac{du}{dy}\right]
=
ML^{-1}T^{-1}
\cdot
\frac{LT^{-1}}L
=
ML^{-1}T^{-2}
=[\tau].
$$

第二式：

$$
[z]=L,
$$

$$
\left[\frac{p}{\rho g}\right]
=
\frac{ML^{-1}T^{-2}}{ML^{-3}\cdot LT^{-2}}
=L,
$$

$$
\left[\frac{u^2}{2g}\right]
=
\frac{L^2T^{-2}}{LT^{-2}}
=L,
$$

$$
[H]=L.
$$

所有可相加项均为长度量纲，因此两式量纲和谐。
</details>

---

### A4 判断量纲正确能否证明公式正确

`【概念综合题】`

**English:** A proposed formula is dimensionally homogeneous. Can one conclude that the formula is physically correct? Explain briefly.

**中文：**某公式满足量纲和谐，能否据此断定该公式在物理上正确？请简要说明。

<details>
<summary>答案与讲解</summary>

不能直接断定。

量纲和谐是公式正确的必要条件。它只能排除量纲明显错误的表达式，无法检验：

- 无量纲常数；
- 正负号；
- 加法结构；
- 具体函数形式；
- 是否遗漏重要变量。

例如：

$$
s=vt,
$$

$$
s=100vt
$$

量纲均正确，但具体物理规律不可能同时成立。
</details>

---

## B 量纲分析方法

### B1 Pitot tube 速度公式

`【课堂例题改编】`

**English:** The velocity $u$ measured by a Pitot tube depends on the pressure difference $\Delta p$, fluid density $\rho$, and gravitational acceleration $g$. Use the Rayleigh method to determine the form of $u$.

**中文：**皮托管测得的流速 $u$ 与压强差 $\Delta p$、流体密度 $\rho$ 和重力加速度 $g$ 有关。用瑞利法确定 $u$ 的结构形式。

<details>
<summary>答案与讲解</summary>

设：

$$
u=k(\Delta p)^a\rho^bg^c.
$$

代入量纲：

$$
LT^{-1}
=
(ML^{-1}T^{-2})^a(ML^{-3})^b(LT^{-2})^c.
$$

比较指数：

$$
\begin{cases}
a+b=0,\\
-a-3b+c=1,\\
-2a-2c=-1.
\end{cases}
$$

解得：

$$
a=\frac12,
\quad
b=-\frac12,
\quad
c=0.
$$

因此：

$$
\boxed{u=k\sqrt{\frac{\Delta p}{\rho}}}.
$$

重力指数为 0，说明以压强差为自变量时，$g$ 不直接进入公式。
</details>

---

### B2 水泵轴功率的结构形式

`【教材习题 7-3】`

**English:** The shaft power $N$ delivered by a pump depends on the discharge $Q$, fluid density $\rho$, gravitational acceleration $g$, and pump head $H$. Use the Rayleigh method to establish the functional form of $N$.

**中文：**水泵输出轴功率 $N$ 取决于流量 $Q$、流体密度 $\rho$、重力加速度 $g$ 和扬程 $H$。用瑞利法建立 $N$ 的关系式。

<details>
<summary>答案与讲解</summary>

设：

$$
N=kQ^a\rho^bg^cH^d.
$$

各量量纲：

$$
[N]=ML^2T^{-3},
$$

$$
[Q]=L^3T^{-1},
\quad
[\rho]=ML^{-3},
\quad
[g]=LT^{-2},
\quad
[H]=L.
$$

代入：

$$
ML^2T^{-3}
=
(L^3T^{-1})^a(ML^{-3})^b(LT^{-2})^cL^d.
$$

比较指数：

$$
\begin{cases}
M:\quad b=1,\\
T:\quad -a-2c=-3,\\
L:\quad 3a-3b+c+d=2.
\end{cases}
$$

只靠这三个方程无法唯一确定四个指数，说明变量之间还存在一个无量纲自由组合。

使用 Buckingham $\pi$ 定理，选择 $\rho,g,H$ 为重复变量，可得：

$$
\pi_1=\frac{N}{\rho g^{3/2}H^{7/2}},
$$

$$
\pi_2=\frac{Q}{\sqrt g\,H^{5/2}}.
$$

因此量纲分析能够严格给出的关系为：

$$
\boxed{
N=\rho g^{3/2}H^{7/2}
\Phi\left(\frac{Q}{\sqrt g\,H^{5/2}}\right)
}.
$$

也可等价写成：

$$
\boxed{
N=\rho gQH
\Psi\left(\frac{Q}{\sqrt g\,H^{5/2}}\right)
}.
$$

若 $H$ 表示泵实际传给流体的扬程，则水力功率由能量定义直接给出：

$$
N_h=\rho gQH.
$$

若题目求轴功率，并给定效率 $\eta$：

$$
N_{shaft}=\frac{\rho gQH}{\eta}.
$$

**审题提醒：**仅靠量纲分析会得到一个无量纲函数；$N_h=\rho gQH$ 还使用了扬程的能量定义。
</details>

---

### B3 矩形薄壁堰流量公式

`【教材习题 7-4】`

**English:** The discharge $Q$ over a rectangular sharp-crested weir depends on the weir width $b$, head over the crest $H$, and gravitational acceleration $g$. Use the Rayleigh method to determine the form of the discharge equation.

**中文：**矩形薄壁堰的过堰流量 $Q$ 与堰宽 $b$、堰上水头 $H$ 和重力加速度 $g$ 有关。用瑞利法确定流量公式的结构。

<details>
<summary>答案与讲解</summary>

设：

$$
Q=kb^aH^cg^d.
$$

代入量纲：

$$
L^3T^{-1}
=
L^aL^c(LT^{-2})^d.
$$

比较时间指数：

$$
-2d=-1
\quad\Rightarrow\quad
 d=\frac12.
$$

比较长度指数：

$$
a+c+d=3.
$$

因此：

$$
a+c=\frac52.
$$

仅凭量纲无法分别确定 $a,c$。若考虑流量与堰宽成正比，即 $a=1$，则：

$$
c=\frac32.
$$

所以：

$$
\boxed{Q=C b\sqrt g\,H^{3/2}}.
$$

常见理论形式可写为：

$$
Q=\frac23C_d b\sqrt{2g}\,H^{3/2}.
$$

量纲分析无法确定 $2/3$、$\sqrt2$ 和流量系数 $C_d$。
</details>

---

### B4 球体绕流阻力

`【教材习题 7-5】`

**English:** The drag force $F$ on a submerged sphere depends on fluid density $\rho$, dynamic viscosity $\mu$, flow velocity $v$, and sphere diameter $d$. Use the Buckingham $\pi$ theorem to obtain the dimensionless relationship.

**中文：**球形潜体所受绕流阻力 $F$ 与流体密度 $\rho$、动力黏度 $\mu$、流速 $v$ 和球径 $d$ 有关。用 Buckingham $\pi$ 定理建立无量纲关系。

<details>
<summary>答案与讲解</summary>

变量：

$$
F,\rho,\mu,v,d.
$$

有：

$$
n=5,
\qquad
m=3,
\qquad
N_\pi=2.
$$

选择重复变量：

$$
\rho,v,d.
$$

可得：

$$
\pi_1=\frac{F}{\rho v^2d^2},
$$

$$
\pi_2=\frac{\mu}{\rho vd}=\frac1{Re}.
$$

因此：

$$
\boxed{
\frac{F}{\rho v^2d^2}=f(Re)
}.
$$

通常把阻力系数定义为：

$$
C_D=\frac{F}{\tfrac12\rho v^2A},
$$

球的迎流面积：

$$
A=\frac{\pi d^2}{4}.
$$

所以：

$$
\boxed{C_D=f(Re)}.
$$
</details>

---

### B5 圆管压降的无量纲关系

`【课堂例题 / 教材例题改编】`

**English:** For a horizontal pipe of constant diameter, the pressure drop $\Delta p$ depends on pipe diameter $d$, pipe length $l$, average velocity $v$, fluid density $\rho$, dynamic viscosity $\mu$, and wall roughness $\Delta$. Use the Buckingham $\pi$ theorem to establish the dimensionless relation.

**中文：**水平等直径圆管中的压降 $\Delta p$ 与管径 $d$、管长 $l$、平均流速 $v$、密度 $\rho$、动力黏度 $\mu$ 和壁面粗糙度 $\Delta$ 有关。用 Buckingham $\pi$ 定理建立无量纲关系。

<details>
<summary>答案与讲解</summary>

变量总数：

$$
n=7.
$$

基本量纲数：

$$
m=3.
$$

所以：

$$
N_\pi=4.
$$

选择重复变量：

$$
d,v,\rho.
$$

得到：

$$
\pi_1=\frac{\mu}{\rho vd}=\frac1{Re},
$$

$$
\pi_2=\frac ld,
$$

$$
\pi_3=\frac{\Delta}{d},
$$

$$
\pi_4=\frac{\Delta p}{\rho v^2}.
$$

因此：

$$
\boxed{
\frac{\Delta p}{\rho v^2}
=\Phi\left(Re,\frac ld,\frac{\Delta}{d}\right)
}.
$$

充分发展管流中 $\Delta p\propto l$，进一步得到：

$$
\boxed{
\Delta p
=\lambda\frac ld\frac{\rho v^2}{2}
},
$$

其中：

$$
\boxed{
\lambda=f\left(Re,\frac{\Delta}{d}\right)
}.
$$
</details>

---

## C 相似理论与模型实验

### C1 重力相似的三个基本比尺

`【24–25 真题】`

**English:** A flow satisfies the gravity similarity law. Express the velocity scale $\lambda_v$, discharge scale $\lambda_Q$, and time scale $\lambda_t$ in terms of the length scale $\lambda_L$. Assume the same gravitational acceleration in the prototype and model.

**中文：**某流动满足重力相似法则。在原型与模型重力加速度相同的条件下，用长度比尺 $\lambda_L$ 表示流速比尺 $\lambda_v$、流量比尺 $\lambda_Q$ 和时间比尺 $\lambda_t$。

<details>
<summary>答案与讲解</summary>

Froude 相似：

$$
\frac{v_p}{\sqrt{gL_p}}
=
\frac{v_m}{\sqrt{gL_m}}.
$$

由于 $g_p=g_m$：

$$
\boxed{\lambda_v=\lambda_L^{1/2}}.
$$

流量比尺：

$$
\lambda_Q=\lambda_v\lambda_L^2,
$$

所以：

$$
\boxed{\lambda_Q=\lambda_L^{5/2}}.
$$

时间比尺：

$$
\lambda_t=\frac{\lambda_L}{\lambda_v},
$$

所以：

$$
\boxed{\lambda_t=\lambda_L^{1/2}}.
$$
</details>

---

### C2 溢洪道模型流量

`【21–22 真题】`

**English:** A prototype spillway has a height of $12\ \mathrm m$ and a maximum discharge of $60\ \mathrm{m^3/s}$. A model has a height of $0.48\ \mathrm m$. Determine the maximum discharge in the model according to Froude similarity.

**中文：**某原型溢洪道高 $12\ \mathrm m$，最大泄流量为 $60\ \mathrm{m^3/s}$。模型高度为 $0.48\ \mathrm m$。按 Froude 相似求模型最大流量。

<details>
<summary>答案与讲解</summary>

长度比尺：

$$
\lambda_L=\frac{12}{0.48}=25.
$$

Froude 相似下：

$$
\lambda_Q=\lambda_L^{5/2}.
$$

因此：

$$
Q_m=\frac{Q_p}{\lambda_Q}
=\frac{60}{25^{5/2}}.
$$

因为：

$$
25^{5/2}=25^2\sqrt{25}=625\times5=3125,
$$

所以：

$$
\boxed{Q_m=0.0192\ \mathrm{m^3/s}}.
$$
</details>

---

### C3 文丘里流量计模型的流量比

`【教材习题 7-7】`

**English:** A $1{:}10$ geometrically similar model is used to determine the discharge coefficient of a large Venturi meter. The same fluid is used in the prototype and model. Determine the ratio of model discharge to prototype discharge required for dynamic similarity.

**中文：**为测定大型文丘里流量计的流量系数，采用几何比尺为 $1{:}10$ 的模型，并使用相同流体。为保证动力相似，求模型流量与原型流量之比。

<details>
<summary>答案与讲解</summary>

“模型 : 原型 $=1:10$”表示：

$$
\lambda_L=\frac{L_p}{L_m}=10.
$$

有压管流主要按 Reynolds 相似：

$$
\lambda_v=\lambda_L^{-1}
$$

因为使用同一种流体。

流量比尺：

$$
\lambda_Q=\lambda_v\lambda_L^2
=\lambda_L.
$$

所以：

$$
\frac{Q_p}{Q_m}=10.
$$

因此：

$$
\boxed{rac{Q_m}{Q_p}=\frac1{10}}.
$$

模型截面积只有原型的 $1/100$，但模型速度是原型的 10 倍，所以模型流量为原型的 $1/10$。
</details>

---

### C4 船模的阻力、速度与功率

`【教材习题 7-9 / 课堂例题】`

**English:** A ship model has a length scale $\lambda_L=50$ and moves at $1\ \mathrm{m/s}$ in a towing tank. The measured wave resistance is $0.02\ \mathrm N$. Assuming Froude similarity and the same fluid, determine: (1) prototype speed; (2) prototype wave resistance; (3) prototype power.

**中文：**船模长度比尺为 $\lambda_L=50$，模型在水池中以 $1\ \mathrm{m/s}$ 航行，测得波浪阻力为 $0.02\ \mathrm N$。采用 Froude 相似且原型、模型均使用水，求：（1）原型航速；（2）原型波浪阻力；（3）原型功率。

<details>
<summary>答案与讲解</summary>

速度比尺：

$$
\lambda_v=\lambda_L^{1/2}=\sqrt{50}.
$$

所以：

$$
\boxed{v_p=7.07\ \mathrm{m/s}}.
$$

力比尺：

$$
\lambda_F=\lambda_L^3=50^3.
$$

所以：

$$
F_p=50^3\times0.02
=2500\ \mathrm N.
$$

$$
\boxed{F_p=2500\ \mathrm N}.
$$

功率：

$$
N_p=F_pv_p
=2500\times7.07
=1.77\times10^4\ \mathrm W.
$$

$$
\boxed{N_p\approx17.7\ \mathrm{kW}}.
$$

也可以直接使用：

$$
\lambda_N=\lambda_L^{7/2}.
$$
</details>

---

### C5 桥墩水工模型

`【教材习题 7-10】`

**English:** A bridge pier in the prototype has length $l_p=24\ \mathrm m$, width $b_p=4.3\ \mathrm m$, water depth $h_p=8.2\ \mathrm m$, mean velocity $v_p=2.3\ \mathrm{m/s}$, and a distance of $B_p=90\ \mathrm m$ between the two abutments. A model is designed with $\lambda_L=50$. Determine the model dimensions, model velocity, and model discharge. Assume a rectangular flow section and Froude similarity.

**中文：**原型桥墩长 $l_p=24\ \mathrm m$、宽 $b_p=4.3\ \mathrm m$，水深 $h_p=8.2\ \mathrm m$，桥下平均流速 $v_p=2.3\ \mathrm{m/s}$，两桥台间距离 $B_p=90\ \mathrm m$。取 $\lambda_L=50$ 设计模型。假定过流断面为矩形并满足 Froude 相似，求模型几何尺寸、模型流速和模型流量。

<details>
<summary>答案与讲解</summary>

模型尺寸均为原型尺寸除以 $\lambda_L$：

$$
l_m=\frac{24}{50}=0.48\ \mathrm m,
$$

$$
b_m=\frac{4.3}{50}=0.086\ \mathrm m,
$$

$$
h_m=\frac{8.2}{50}=0.164\ \mathrm m,
$$

$$
B_m=\frac{90}{50}=1.80\ \mathrm m.
$$

速度比尺：

$$
\lambda_v=\sqrt{50}.
$$

所以：

$$
v_m=\frac{2.3}{\sqrt{50}}
=0.325\ \mathrm{m/s}.
$$

模型流量：

$$
Q_m=B_mh_mv_m.
$$

代入：

$$
Q_m=1.80\times0.164\times0.325
\approx0.0960\ \mathrm{m^3/s}.
$$

所以：

$$
\boxed{Q_m\approx0.0960\ \mathrm{m^3/s}}.
$$

检查：

$$
Q_p=90\times8.2\times2.3=1697.4\ \mathrm{m^3/s},
$$

$$
\frac{Q_p}{Q_m}\approx50^{5/2},
$$

与 Froude 流量比尺一致。
</details>

---

### C6 风洞压强换算

`【教材习题 7-11】`

**English:** In a wind-tunnel test of a high-rise building, the windward pressure is $42\ \mathrm{Pa}$ and the leeward pressure is $-20\ \mathrm{Pa}$ at a wind speed of $9\ \mathrm{m/s}$. Assuming the pressure coefficients remain unchanged, determine the two pressures when the speed increases to $12\ \mathrm{m/s}$.

**中文：**在高层建筑风洞试验中，当风速为 $9\ \mathrm{m/s}$ 时，迎风面压强为 $42\ \mathrm{Pa}$，背风面压强为 $-20\ \mathrm{Pa}$。假定压力系数保持不变，求风速增至 $12\ \mathrm{m/s}$ 时两侧压强。

<details>
<summary>答案与讲解</summary>

压力系数不变等价于 Euler 数保持一致：

$$
\frac{\Delta p}{\rho v^2}=\text{constant}.
$$

同一空气、温度不变，密度相同，所以：

$$
\frac{p_2}{p_1}=\left(\frac{v_2}{v_1}\right)^2.
$$

速度比：

$$
\frac{v_2}{v_1}=\frac{12}{9}=\frac43.
$$

压强倍数：

$$
\left(\frac43\right)^2=\frac{16}{9}.
$$

迎风面：

$$
p_{w,2}=42\times\frac{16}{9}
=74.7\ \mathrm{Pa}.
$$

背风面：

$$
p_{l,2}=-20\times\frac{16}{9}
=-35.6\ \mathrm{Pa}.
$$

所以：

$$
\boxed{p_{w,2}=74.7\ \mathrm{Pa}},
$$

$$
\boxed{p_{l,2}=-35.6\ \mathrm{Pa}}.
$$

负号表示该处相对参考压强为吸力。
</details>

---

### C7 溢流坝模型

`【教材习题 7-12】`

**English:** A spillway model has a length scale $\lambda_L=60$. The prototype discharge is $500\ \mathrm{m^3/s}$. (1) Determine the model discharge. (2) If the head over the crest in the model is $H_m=0.06\ \mathrm m$, determine the corresponding prototype head.

**中文：**某溢流坝模型的长度比尺为 $\lambda_L=60$，原型泄流量为 $500\ \mathrm{m^3/s}$。（1）求模型泄流量；（2）若模型堰上水头 $H_m=0.06\ \mathrm m$，求原型对应水头。

<details>
<summary>答案与讲解</summary>

溢流坝由重力控制，采用 Froude 相似。

流量比尺：

$$
\lambda_Q=\lambda_L^{5/2}=60^{5/2}.
$$

所以：

$$
Q_m=\frac{500}{60^{5/2}}
=0.0179\ \mathrm{m^3/s}.
$$

$$
\boxed{Q_m\approx1.79\times10^{-2}\ \mathrm{m^3/s}}.
$$

水头是长度量：

$$
H_p=\lambda_LH_m.
$$

所以：

$$
H_p=60\times0.06=3.60\ \mathrm m.
$$

$$
\boxed{H_p=3.60\ \mathrm m}.
$$
</details>

---

### C8 同时满足 Reynolds 与 Froude 相似

`【课堂例题改编：综合题】`

**English:** An oil-flow prototype has kinematic viscosity $\nu_p=0.74\ \mathrm{cm^2/s}$. A model is intended to have a length scale $\lambda_L=4$ and must satisfy both Reynolds and Froude similarity under the same gravitational acceleration. (1) Determine the required model-fluid viscosity. (2) If the available model fluid has $\nu_m=0.0892\ \mathrm{cm^2/s}$, determine the corrected length scale.

**中文：**某油流原型的运动黏度为 $\nu_p=0.74\ \mathrm{cm^2/s}$。拟取长度比尺 $\lambda_L=4$，并在相同重力加速度下同时满足 Reynolds 与 Froude 相似。（1）求所需模型流体运动黏度；（2）若实际可用模型流体的运动黏度为 $\nu_m=0.0892\ \mathrm{cm^2/s}$，求修正后的长度比尺。

<details>
<summary>答案与讲解</summary>

Froude 相似：

$$
\lambda_v=\lambda_L^{1/2}.
$$

Reynolds 相似：

$$
\lambda_\nu=\lambda_v\lambda_L.
$$

所以：

$$
\lambda_\nu=\lambda_L^{3/2}.
$$

当 $\lambda_L=4$：

$$
\lambda_\nu=4^{3/2}=8.
$$

因此：

$$
\nu_m=\frac{\nu_p}{\lambda_\nu}
=\frac{0.74}{8}
=0.0925\ \mathrm{cm^2/s}.
$$

$$
\boxed{\nu_m=0.0925\ \mathrm{cm^2/s}}.
$$

若实际：

$$
\nu_m=0.0892\ \mathrm{cm^2/s},
$$

则：

$$
\frac{\nu_p}{\nu_m}=\lambda_L^{3/2}.
$$

因此：

$$
\lambda_L
=
\left(\frac{\nu_p}{\nu_m}\right)^{2/3}
=
\left(\frac{0.74}{0.0892}\right)^{2/3}
\approx4.10.
$$

$$
\boxed{\lambda_L\approx4.10}.
$$

这道题说明：模型流体选定后，长度比尺不一定还能保持原先设定值，需要根据实际物性重新修正。
</details>

---

## 练习题使用建议

- A 组先检查概念和量纲；
- B 组重点练习“选变量—列指数—组成无量纲项”；
- C 组每题先在草稿最上方写：

$$
\lambda_X=\frac{X_p}{X_m},
$$

再判断使用 $Re$ 相似还是 $Fr$ 相似。

本章常见失分主要来自以下判断与换算环节：

- 主导力判断错误；
- 比尺方向颠倒；
- 把长度比尺直接当成流量比尺；
- 忘记流量还包含面积比例；
- 将无量纲系数和有量纲物理量采用同一种换算方式。
