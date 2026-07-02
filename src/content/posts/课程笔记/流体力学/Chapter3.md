---
title: FluidMechanics—Chapter3：Fundamentals of Fluid Motion
published: 2026-06-13
description: 欧拉描述法、流线与迹线、流动分类、连续性方程、欧拉方程与纳维–斯托克斯方程、伯努利积分、速度势、流函数、流网，以及势流的叠加
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 先用速度场描述流体如何运动，再用质量守恒和动量守恒约束这种运动，最后在理想流体与二维势流条件下，引入伯努利方程、势函数、流函数和流网来求解流场。

整章可以压缩成一条主线：

1. **怎样描述流动**：Lagrangian / Eulerian description
2. **怎样识别流动**：steady、uniform、gradually-varied、rotational 等分类
3. **流动必须满足什么**：continuity equation、Euler equations、Navier–Stokes equations
4. **理想流体的能量怎样变化**：Bernoulli integral
5. **二维势流怎样求解**：velocity potential $\varphi$、stream function $\psi$、flow net、superposition

---

## 教学范围判断

课件中的 **Chapter 3: Fundamentals of Fluid Motion** 对应教材第 4 章“流体运动基本原理”。本笔记按照课件的 Chapter 划分，文件名仍为 `Chapter3.md`。

### 纳入笔记的内容

- Eulerian 与 Lagrangian 描述方法
- Euler acceleration：当地加速度与迁移加速度
- 流线、迹线、色线及其方程
- 恒定 / 非恒定、均匀 / 非均匀、渐变 / 急变、一维 / 二维 / 三维流动
- 流管、微小流束、过流断面、流量
- 流体微团的平移、转动与变形；有旋流与无旋流
- 连续性方程
- 理想流体 Euler 运动方程
- 实际流体不可压缩 Navier–Stokes 方程的形式与各项意义
- 理想流体伯努利积分及其两种适用范围
- 二维势流的势函数、流函数、流网和势流叠加

### 降低要求或不展开的内容

1. **Lagrangian method**：课件明确标注 “not used in this course”。需要理解概念、会与 Eulerian method 区分，不要求用它系统求解流场。
2. **实际流体运动微分方程的完整推导**：课件说明 ideal-fluid balance equations 要推导，real-fluid balance equations 不作完整推导。需要记住实际流体比理想流体多出黏性扩散项，并会识别不可压缩 N–S 方程。
3. **教材中流体微团全部变形率分量的长推导**：课件重点放在微团转动角速度与有旋 / 无旋判别。本笔记保留运动分解和角速度公式，不展开完整张量推导。
4. **层流与湍流**：本章只作概念预览，Reynolds 数和管流流态将在后续章节系统学习。

:::WARNING
课件总结页中有一处容易误导的标签互换：

- **势函数 $\varphi$ 存在的核心条件**是无旋，即 $\nabla\times\mathbf{u}=0$；
- **二维流函数 $\psi$ 存在的核心条件**是不可压缩，即 $\nabla\cdot\mathbf{u}=0$。

本课程第 6 节统一讨论 steady、2D、incompressible、potential flow，因此两者同时存在；做判断题时仍要分清各自的来源。
:::

---

## 目录

- [第一部分：课程笔记](#第一部分课程笔记)
  - [1 描述流体运动](#1-描述流体运动)
  - [2 流动的基本概念](#2-流动的基本概念)
  - [3 流体微团运动分析](#3-流体微团运动分析)
  - [4 流体运动的基本方程](#4-流体运动的基本方程)
  - [5 Euler 方程的积分与 Bernoulli 方程](#5-euler-方程的积分与-bernoulli-方程)
  - [6 恒定二维不可压缩势流](#6-恒定二维不可压缩势流)
  - [7 本章易错点与公式速查](#7-本章易错点与公式速查)
- [第二部分：练习题](#第二部分练习题)
  - [A 概念与判断](#a-概念与判断)
  - [B 计算与综合](#b-计算与综合)

---

# 第一部分：课程笔记

## 1 描述流体运动

### 1.1 Lagrangian method 与 Eulerian method

#### Lagrangian method（拉格朗日法）

跟踪同一个流体质点，记录它随时间的位置、速度和加速度。

用 $(a,b,c)$ 标记质点在初始时刻的位置，则

$$
\begin{cases}
x=x(a,b,c,t),\\
y=y(a,b,c,t),\\
z=z(a,b,c,t).
\end{cases}
$$

直观理解：

> 坐在一片随水漂流的叶子上，始终观察这片叶子的运动。

本课程只要求理解这种思想。

#### Eulerian method（欧拉法）

固定观察空间位置，研究每个位置上的速度、压强、密度等参数怎样随空间和时间变化：

$$
\begin{cases}
u_x=u_x(x,y,z,t),\\
u_y=u_y(x,y,z,t),\\
u_z=u_z(x,y,z,t),\\
p=p(x,y,z,t),\qquad \rho=\rho(x,y,z,t).
\end{cases}
$$

直观理解：

> 站在水文站里，观察某个固定断面的水速和水位。

本课程绝大多数推导采用 Eulerian method。

| 比较 | Lagrangian | Eulerian |
|---|---|---|
| 观察对象 | 同一个流体质点 | 固定空间位置 |
| 自变量 | 质点标签 $(a,b,c)$ 与 $t$ | 空间坐标 $(x,y,z)$ 与 $t$ |
| 典型问题 | 某质点走过什么轨迹 | 此处此刻速度是多少 |
| 本课程要求 | 理解概念 | 重点掌握 |

---

### 1.2 Material derivative（随体导数）

虽然 Eulerian method 给出的是固定点上的速度场，但我们常常仍需要某个质点实际经历的变化率。

对任意标量场 $F(x,y,z,t)$，沿质点运动的全导数为

$$
\boxed{
\frac{DF}{Dt}
=
\frac{\partial F}{\partial t}
+u_x\frac{\partial F}{\partial x}
+u_y\frac{\partial F}{\partial y}
+u_z\frac{\partial F}{\partial z}
}
$$

也可以写成

$$
\boxed{
\frac{D}{Dt}=\frac{\partial}{\partial t}+\mathbf{u}\cdot\nabla
}
$$

其中：

- $D/Dt$：随流体质点变化的导数，material derivative
- $\partial/\partial t$：固定空间点的时间变化
- $\mathbf{u}\cdot\nabla$：质点移动到不同位置后感受到的空间变化

---

### 1.3 Euler acceleration（欧拉加速度）

将随体导数作用于速度场：

$$
\boxed{
\mathbf{a}=\frac{D\mathbf{u}}{Dt}
=
\underbrace{\frac{\partial\mathbf{u}}{\partial t}}_{\text{local acceleration}}
+
\underbrace{(\mathbf{u}\cdot\nabla)\mathbf{u}}_{\text{convective acceleration}}
}
$$

分量形式：

$$
\boxed{
\begin{aligned}
a_x&=\frac{\partial u_x}{\partial t}
+u_x\frac{\partial u_x}{\partial x}
+u_y\frac{\partial u_x}{\partial y}
+u_z\frac{\partial u_x}{\partial z},\\
a_y&=\frac{\partial u_y}{\partial t}
+u_x\frac{\partial u_y}{\partial x}
+u_y\frac{\partial u_y}{\partial y}
+u_z\frac{\partial u_y}{\partial z},\\
a_z&=\frac{\partial u_z}{\partial t}
+u_x\frac{\partial u_z}{\partial x}
+u_y\frac{\partial u_z}{\partial y}
+u_z\frac{\partial u_z}{\partial z}.
\end{aligned}
}
$$

#### Local acceleration（当地加速度）

$$
\frac{\partial\mathbf{u}}{\partial t}
$$

固定位置上的速度随时间发生变化。

- 恒定流中为零
- 非恒定流中通常不为零

#### Convective acceleration（迁移加速度）

$$
(\mathbf{u}\cdot\nabla)\mathbf{u}
$$

质点运动到速度不同的位置而产生的加速度。

- 均匀流中为零
- 即使流动恒定，只要沿程速度发生变化，仍可能存在迁移加速度

:::TIP
“恒定”判断时间变化，“均匀”判断沿流动方向的空间变化。

- 恒定流 $\Rightarrow$ 当地加速度为零
- 均匀流 $\Rightarrow$ 迁移加速度为零

两者互不包含。
:::

#### 课堂例：水箱出口处的加速度

<!-- 图片占位：插入【Chapter3（1）】第 9 页水箱与 A、B 两点示意图。A 位于大水箱内部，B 位于收缩出口附近。 -->

设质点分别由 $A\to A'$、$B\to B'$：

| 情况 | A 点 | B 点 |
|---|---|---|
| 水位不变 | 无当地加速度；无迁移加速度 | 无当地加速度；有迁移加速度 |
| 水位随时间变化 | 有当地加速度；无明显迁移加速度 | 当地与迁移加速度均存在 |

原因：

- 大水箱内部截面变化很小，空间速度梯度可近似忽略；
- 出口附近流线收缩，速度沿程增大，所以存在迁移加速度；
- 水位下降后，整个速度场还会随时间改变，所以出现当地加速度。

---

## 2 流动的基本概念

### 2.1 Streamline、pathline 与 streakline

#### Streamline（流线）

某一给定时刻，曲线上每一点的切线方向都与该点速度方向一致。

它描述的是：

> 同一时刻，不同流体质点的速度方向。

流线微分方程：

$$
\boxed{
\frac{dx}{u_x}=\frac{dy}{u_y}=\frac{dz}{u_z}
}
$$

求流线时，时间 $t$ 被视为给定参数。

流线的基本性质：

1. 同一时刻的普通流线不相交；否则交点会同时有两个速度方向。
2. 在速度场连续且速度非零处，流线是光滑曲线。
3. 对不可压缩流动，流线越密通常表示速度越大，越疏表示速度越小。

:::NOTE
“流线不能相交”有适用前提。停滞点处 $\mathbf{u}=0$，速度方向不唯一，多条流线可以在此汇合或分开。
:::

#### Pathline（迹线）

某一个流体质点在一段时间内走过的真实轨迹。

迹线方程：

$$
\boxed{
\frac{dx}{dt}=u_x(x,y,z,t),\qquad
\frac{dy}{dt}=u_y(x,y,z,t),\qquad
\frac{dz}{dt}=u_z(x,y,z,t)
}
$$

或写为

$$
\frac{dx}{u_x}=\frac{dy}{u_y}=\frac{dz}{u_z}=dt.
$$

求迹线时，$t$ 是独立变量，需要代入质点的初始位置。

#### Streakline / dye line（色线、脉线）

过去所有曾经经过同一个固定点的流体质点，在当前时刻组成的连线。

典型实验：持续向固定位置注入染料，看到的染色曲线就是色线。

#### 三者何时重合

$$
\boxed{
\text{steady flow}\quad\Rightarrow\quad
\text{streamline}=	ext{pathline}=	ext{streakline}
}
$$

非恒定流中三者一般不同。

<!-- 图片占位：插入一张“流线、迹线、色线”对比图，重点标出：流线固定时刻；迹线固定质点；色线固定注入点。 -->

---

### 2.2 课堂例：流线与迹线

#### 例 1：非恒定流中流线和迹线不同

给定

$$
u_x=\frac{x}{1+t},\qquad u_y=y,\qquad u_z=0,
$$

求在 $t=t_0$ 时经过 $(x_0,y_0,z_0)$ 的流线与该质点的迹线。

**流线**：固定 $t$，有

$$
\frac{dx}{x/(1+t)}=\frac{dy}{y}
$$

所以

$$
(1+t)\ln x=\ln y+\ln C,
$$

即

$$
y=Cx^{1+t}.
$$

代入 $t=t_0$、$(x_0,y_0)$：

$$
\boxed{
y=y_0x_0^{-(1+t_0)}x^{1+t_0}
}
$$

这里整条流线对应同一个时刻 $t_0$，因此最后也可以直接写成

$$
\boxed{
y=y_0\left(\frac{x}{x_0}\right)^{1+t_0}}
$$

**迹线**：

$$
\frac{dx}{dt}=\frac{x}{1+t},\qquad \frac{dy}{dt}=y.
$$

积分并代入 $t=t_0$ 时 $x=x_0,y=y_0$：

$$
\boxed{
x=x_0\frac{1+t}{1+t_0}},\qquad
\boxed{
y=y_0e^{t-t_0}}.
$$

消去 $t$：

$$
\boxed{
y=y_0\exp\left[\frac{1+t_0}{x_0}x-1-t_0\right]}
$$

结论：该流动非恒定，流线与迹线不重合。

#### 例 2：环形速度场

$$
u_x=-\frac{Cy}{x^2+y^2},\qquad
u_y=\frac{Cx}{x^2+y^2},\qquad u_z=0,
\qquad C>0.
$$

流线方程：

$$
\frac{dx}{u_x}=\frac{dy}{u_y}
\quad\Rightarrow\quad
x\,dx+y\,dy=0.
$$

所以

$$
\boxed{x^2+y^2=C_1}
$$

流线是同心圆。

速度场不显含时间，因此为恒定流，迹线与流线重合。取 $x>0,y=0$，有 $u_x=0,u_y>0$，故运动方向为逆时针。

#### 例 3：经过指定点的流线与迹线

$$
u_x=x+t,\qquad u_y=-y+t,\qquad u_z=0.
$$

求 $t=0$ 时经过 $(-1,-1)$ 的流线与迹线。

**流线**：固定 $t=0$，

$$
\frac{dx}{x}=\frac{dy}{-y}
\quad\Rightarrow\quad xy=C.
$$

代入点 $(-1,-1)$：

$$
\boxed{xy=1}
$$

**迹线**：

$$
\frac{dx}{dt}=x+t,\qquad
\frac{dy}{dt}=-y+t.
$$

由初值 $x(0)=y(0)=-1$ 可得

$$
\boxed{x=-t-1},\qquad \boxed{y=t-1}.
$$

消去 $t$：

$$
\boxed{x+y=-2}
$$

---

### 2.3 按时间变化分类

#### Steady flow（恒定流）

任意固定空间点上的流动参数不随时间改变：

$$
\boxed{
\frac{\partial\mathbf{u}}{\partial t}=0,
\qquad
\frac{\partial p}{\partial t}=0,
\qquad
\frac{\partial\rho}{\partial t}=0
}
$$

注意：恒定流中质点仍然可以加速，因为迁移加速度可能不为零。

#### Unsteady flow（非恒定流）

至少有一个流动参数在某些空间点随时间改变。

---

### 2.4 按沿程变化分类

#### Uniform flow（均匀流）

沿流动方向，速度矢量不发生变化：

$$
\boxed{(\mathbf{u}\cdot\nabla)\mathbf{u}=0}
$$

在一维描述中常写为

$$
\frac{\partial u}{\partial s}=0.
$$

均匀流的迁移加速度为零。

:::WARNING
均匀流并不要求一个断面上每一点速度都相等。

充分发展的圆管流中，断面速度分布并不均匀；但沿管轴方向速度分布保持不变，因此它仍可属于均匀流。
:::

#### Non-uniform flow（非均匀流）

沿流动方向速度发生变化，迁移加速度通常不为零。

典型例子：收缩管、扩张管、弯管入口附近。

#### 课堂判断例

$$
u_x=t,\qquad u_y=-y,\qquad u_z=z.
$$

- $\partial u_x/\partial t=1\neq0$，所以是非恒定流；
- 迁移加速度不为零，例如

$$
a_{y,c}=u_y\frac{\partial u_y}{\partial y}=(-y)(-1)=y,
$$

所以也是非均匀流。

---

### 2.5 Gradually-varied flow 与 rapidly-varied flow

#### Gradually-varied flow（渐变流）

流线曲率小、相邻流线夹角小，流动沿程变化缓慢。

其过流断面具有两个重要近似：

1. 过流断面近似为平面；
2. 同一过流断面上的动水压强近似服从静水压强分布：

$$
\boxed{z+\frac{p}{\rho g}=C\qquad\text{on one cross-section}}
$$

#### Rapidly-varied flow（急变流）

流线弯曲明显或相邻流线夹角较大，流动沿程变化剧烈。

- 离心效应不可忽略；
- 同一断面上的压强一般不再按静水规律分布；
- 伯努利总流方程的控制断面通常不能直接选在急变区内部。

<!-- 图片占位：插入渐变流与急变流对比图，标出平直近似断面、弯曲流线和离心效应。 -->

---

### 2.6 按空间坐标数分类

#### One-dimensional flow（一维流）

流动参数主要只依赖一个空间坐标 $s$：

$$
\mathbf{u}=\mathbf{u}(s,t).
$$

一维加速度：

$$
\boxed{
a=\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial s}}
$$

- 一维恒定流：$a=u\,\partial u/\partial s$
- 一维均匀流：$a=0$

#### Two-dimensional flow（二维流）

速度场只需两个空间坐标描述，例如

$$
\mathbf{u}=\mathbf{u}(x,y,t).
$$

#### Three-dimensional flow（三维流）

速度在三个空间方向均有实质变化。

---

### 2.7 Laminar flow 与 turbulent flow

#### Laminar flow（层流）

流体质点分层、有序运动，相邻流层之间横向掺混较弱。

#### Turbulent flow（湍流）

速度大小和方向存在随机脉动，流体质点发生强烈横向掺混。

本章只要求会区分概念，流态判别与 Reynolds number 在后续章节展开。

---

### 2.8 Stream tube、stream filament 与 flow cross-section

#### Stream tube（流管）

通过一条封闭曲线上各点作流线，由这些流线围成的管状空间。

流管侧壁由流线构成，因此流体不能穿过侧壁。

#### Stream filament / element flow（微小流束、元流）

横截面积趋于无穷小的流管。其截面上各点速度可近似视为相同。

#### Flow cross-section（过流断面）

与当地流线正交的截面。

#### Discharge（流量）

体积流量：

$$
\boxed{Q=\int_A u_n\,dA}
$$

质量流量：

$$
\boxed{\dot m=\int_A \rho u_n\,dA}
$$

其中：

- $u_n$：速度在断面法向上的分量
- $A$：过流断面面积
- $Q$：体积流量，单位 $\mathrm{m^3/s}$
- $\dot m$：质量流量，单位 $\mathrm{kg/s}$

若速度近似垂直于断面，通常简写为 $Q=\int_Au\,dA$。

---

### 2.9 为什么渐变流断面近似服从静水压强规律

这一结论经常直接记成

$$
z+\frac{p}{\rho g}=C,
$$

但需要知道它成立在**同一个渐变流过流断面上**。

取断面法向为 $n$。在渐变流区：

- 流线近似平行；
- 流线曲率半径很大；
- 法向速度和法向加速度均可近似忽略；
- 流体微元在法向上主要受压强力和重力分量作用。

法向动量平衡近似为

$$
-\frac{1}{\rho}\frac{\partial p}{\partial n}
+f_n=0.
$$

若重力是唯一质量力，则沿竖直方向积分后得到

$$
\boxed{z+\frac{p}{\rho g}=C}
$$

因此，同一渐变流断面上可以像静水问题一样比较各点压强。

这个结论不能随意推广到急弯、突然收缩、突然扩张等急变区。急变区中存在明显法向加速度，压强还需提供向心力，压强分布会偏离静水规律。

:::TIP
常见题目会把两句话放在一起考：

- 渐变流断面上，$z+p/(\rho g)$ 近似为常数；
- 沿流动方向比较不同断面时，$z+p/(\rho g)$ 通常可以变化。

“同一断面上近似相等”和“沿程保持不变”是两件不同的事。
:::

---

## 3 流体微团运动分析

### 3.1 基本运动形式

刚体运动只包含：

- 平移 translation
- 转动 rotation

流体微团还可以发生变形：

- 线变形 linear deformation
- 角变形 angular deformation

因此流体微团的运动可概括为：

$$
\boxed{\text{translation}+\text{rotation}+\text{deformation}}
$$

这也是历年填空题常考表述。

---

### 3.2 Angular velocity（转动角速度）

以 $z$ 轴方向为例，微团两条互相垂直边的平均转动角速度为

$$
\boxed{
\omega_z=\frac12\left(
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}
\right)}
$$

三维形式：

$$
\boxed{
\begin{aligned}
\omega_x&=\frac12\left(
\frac{\partial u_z}{\partial y}
-
\frac{\partial u_y}{\partial z}
\right),\\
\omega_y&=\frac12\left(
\frac{\partial u_x}{\partial z}
-
\frac{\partial u_z}{\partial x}
\right),\\
\omega_z&=\frac12\left(
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}
\right).
\end{aligned}
}
$$

<!-- 图片占位：插入【Chapter3（1）】第 47 页矩形微团变形图，标出 $d\alpha$、$d\beta$ 与正负转向。 -->

---

### 3.3 Vorticity（涡量）

涡量定义为

$$
\boxed{\boldsymbol{\zeta}=\nabla\times\mathbf{u}}
$$

它与流体微团角速度的关系为

$$
\boxed{\boldsymbol{\zeta}=2\boldsymbol{\omega}}
$$

因此做题时要注意题目问的是 angular velocity 还是 vorticity，相差一个 2。

---

### 3.4 Rotational flow 与 irrotational flow

#### Rotational flow（有旋流）

至少有一个角速度分量不为零：

$$
\boxed{\nabla\times\mathbf{u}\neq0}
$$

#### Irrotational flow / potential flow（无旋流、势流）

所有角速度分量均为零：

$$
\boxed{\nabla\times\mathbf{u}=0}
$$

二维 $x$–$y$ 流动只需判断

$$
\boxed{
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}=0
}
$$

:::WARNING
微团是否转动，取决于微团自身姿态是否旋转，与质点轨迹是否弯曲没有直接等价关系。

- 质点可以沿圆形轨迹运动，但微团自身不一定转动；
- 质点轨迹可以近似直线，但微团仍可能有局部转动。
:::

#### 课堂例

$$
u_x=ax,\qquad u_y=by,\qquad u_z=0.
$$

因为所有交叉偏导均为零：

$$
\frac{\partial u_y}{\partial x}=0,
\qquad
\frac{\partial u_x}{\partial y}=0,
$$

所以

$$
\boldsymbol{\omega}=0.
$$

该流动无旋。即使 $a\neq b$，微团可能发生不同方向的拉伸或压缩，但不会发生刚体式转动。

---

## 4 流体运动的基本方程

### 4.1 Continuity equation（连续性方程）

连续性方程来自质量守恒。

对固定微小控制体，有

> 控制体内质量增加率 + 通过控制面的净质量流出率 = 0。

一般微分形式：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\frac{\partial(\rho u_x)}{\partial x}
+
\frac{\partial(\rho u_y)}{\partial y}
+
\frac{\partial(\rho u_z)}{\partial z}
=0
}
$$

向量形式：

$$
\boxed{
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf{u})=0
}
$$

也可以展开成随体形式：

$$
\boxed{
\frac{D\rho}{Dt}+\rho\nabla\cdot\mathbf{u}=0
}
$$

其中：

- $\rho$：密度
- $u_x,u_y,u_z$：速度分量
- $\nabla\cdot\mathbf{u}$：速度场散度，表示局部体积膨胀率

---

### 4.2 连续性方程的常见特例

#### 恒定可压缩流

$$
\boxed{
\frac{\partial(\rho u_x)}{\partial x}
+
\frac{\partial(\rho u_y)}{\partial y}
+
\frac{\partial(\rho u_z)}{\partial z}=0
}
$$

#### 不可压缩流

若流体质点密度不变，即 $D\rho/Dt=0$，则

$$
\boxed{
\nabla\cdot\mathbf{u}=0
}
$$

直角坐标形式：

$$
\boxed{
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}
+
\frac{\partial u_z}{\partial z}=0
}
$$

:::NOTE
“不可压缩”对应质点密度沿运动过程不变，即 $D\rho/Dt=0$。课堂题目通常进一步给出 $\rho=\text{const}$，此时直接使用速度散度为零。
:::

---

### 4.3 课堂例：判断速度场是否可能存在

#### 例 1

二维不可压缩流：

1. $u_x=-2y, u_y=3x$
2. $u_x=0, u_y=3xy$

对第 1 个速度场：

$$
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}
=0+0=0.
$$

满足连续性方程，可以存在。

对第 2 个速度场：

$$
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}
=0+3x\neq0.
$$

若 $\rho=\text{const}$，则不满足质量守恒，不能作为该不可压缩流的完整速度场。

#### 例 2：补全速度分量

给定

$$
u_x=\frac{t}{\rho},
\qquad
u_y=\frac{3xy}{\rho},
\qquad
u_z=\frac{xz}{\rho},
\qquad
\rho=t.
$$

代入一般连续性方程：

$$
\frac{\partial\rho}{\partial t}=1,
\qquad
\frac{\partial(\rho u_x)}{\partial x}=0,
\qquad
\frac{\partial(\rho u_y)}{\partial y}=3x,
\qquad
\frac{\partial(\rho u_z)}{\partial z}=x.
$$

总和为 $1+4x\neq0$，原速度场不满足质量守恒。

若保持 $u_x,u_y,\rho$ 不变，要求新的 $u_z$ 满足

$$
\frac{\partial(\rho u_z)}{\partial z}=-(1+3x).
$$

积分：

$$
\rho u_z=-(1+3x)z+f(x,y).
$$

所以

$$
\boxed{
u_z=-\frac{(1+3x)z}{\rho}+\frac{f(x,y)}{\rho}}
$$

取最简单的 $f(x,y)=0$：

$$
\boxed{u_z=-\frac{(1+3x)z}{\rho}}
$$

---

### 4.4 Euler equations（理想流体运动方程）

理想流体没有黏性切应力，表面力只有压强。

对单位质量流体应用 Newton 第二定律：

$$
\boxed{
\mathbf{f}-\frac{1}{\rho}\nabla p
=
\frac{D\mathbf{u}}{Dt}
}
$$

展开：

$$
\boxed{
\mathbf{f}-\frac{1}{\rho}\nabla p
=
\frac{\partial\mathbf{u}}{\partial t}
+(\mathbf{u}\cdot\nabla)\mathbf{u}
}
$$

分量形式：

$$
\boxed{
\begin{aligned}
f_x-\frac{1}{\rho}\frac{\partial p}{\partial x}&=\frac{Du_x}{Dt},\\
f_y-\frac{1}{\rho}\frac{\partial p}{\partial y}&=\frac{Du_y}{Dt},\\
f_z-\frac{1}{\rho}\frac{\partial p}{\partial z}&=\frac{Du_z}{Dt}.
\end{aligned}
}
$$

其中：

- $\mathbf{f}=(f_x,f_y,f_z)$：单位质量力，如重力加速度
- $-\nabla p/\rho$：单位质量流体所受压强力
- $D\mathbf{u}/Dt$：质点加速度

若流体静止，$D\mathbf{u}/Dt=0$，Euler 方程退化为静力平衡方程。

---

### 4.5 实际流体与 Navier–Stokes equations

实际 Newtonian fluid 中，表面应力包含：

- 法向应力 normal stress
- 黏性切应力 shear stress

对不可压缩 Newtonian fluid，运动方程为

$$
\boxed{
\frac{\partial\mathbf{u}}{\partial t}
+(\mathbf{u}\cdot\nabla)\mathbf{u}
=
\mathbf{f}
-
\frac{1}{\rho}\nabla p
+
\nu\nabla^2\mathbf{u}
}
$$

并同时满足

$$
\boxed{\nabla\cdot\mathbf{u}=0}
$$

其中：

- $\nu=\mu/\rho$：运动黏度
- $\nu\nabla^2\mathbf{u}$：黏性动量扩散项
- 去掉黏性项后即得到 Euler equations

每个方向例如 $x$ 分量：

$$
\frac{\partial u_x}{\partial t}
+u_x\frac{\partial u_x}{\partial x}
+u_y\frac{\partial u_x}{\partial y}
+u_z\frac{\partial u_x}{\partial z}
=
f_x-\frac1\rho\frac{\partial p}{\partial x}
+
u\left(
\frac{\partial^2u_x}{\partial x^2}
+
\frac{\partial^2u_x}{\partial y^2}
+
\frac{\partial^2u_x}{\partial z^2}
\right).
$$

本章重点是认识各项来源与 Euler / N–S 的关系，不要求重现完整应力推导。

---

### 4.6 实际流体应力与理想流体方程的关系

理想流体中没有黏性切应力，任意方向的法向压强相同，因此表面应力可以完全由一个标量 $p$ 描述。

实际运动流体中，黏性会产生切应力，并使三个坐标面上的法向应力一般不再相等。对 Newtonian fluid，典型切应力为

$$
\boxed{
\tau_{xy}=\tau_{yx}
=\mu\left(
\frac{\partial u_x}{\partial y}
+
\frac{\partial u_y}{\partial x}
\right)}
$$

其余两组同理：

$$
\tau_{yz}=\tau_{zy}
=\mu\left(
\frac{\partial u_y}{\partial z}
+
\frac{\partial u_z}{\partial y}
\right),
$$

$$
\tau_{zx}=\tau_{xz}
=\mu\left(
\frac{\partial u_z}{\partial x}
+
\frac{\partial u_x}{\partial z}
\right).
$$

这里的两个速度梯度分别表示两条互相垂直边的角变形贡献。

对不可压缩 Newtonian fluid，将这些黏性应力的合力写入 Newton 第二定律后，最终得到

$$
\rho\frac{D\mathbf{u}}{Dt}
=
\rho\mathbf{f}-\nabla p+\mu\nabla^2\mathbf{u}.
$$

除以 $\rho$ 后就是前述不可压缩 N–S 方程。

可以用下面的层级关系记忆：

$$
\boxed{
\text{N--S equation}
\xrightarrow{\mu=0}
\text{Euler equation}
\xrightarrow{\mathbf{u}=0}
\text{hydrostatic equilibrium}}
$$

也就是说：

- N–S 比 Euler 多黏性项；
- Euler 在速度为零时退化为静力平衡；
- 三者并非互不相关的独立公式，而是同一动量守恒规律在不同假设下的形式。

---

## 5 Euler 方程的积分与 Bernoulli 方程

### 5.1 为什么 Euler 方程不能总是直接积分

Euler equations 是一组偏微分方程。只有在附加条件成立时，各项才能组合成全微分并积分。

本课程考虑：

- steady flow
- incompressible fluid
- gravity is the only body force
- ideal fluid

在此基础上有两种积分路径。

---

### 5.2 势流中的全流场积分

若流动还满足无旋条件，速度场可以写成势函数梯度，惯性项可化为

$$
(\mathbf{u}\cdot\nabla)\mathbf{u}
=
\nabla\left(\frac{u^2}{2}\right).
$$

取重力为唯一质量力：

$$
\mathbf{f}=-g\mathbf{k}=-\nabla(gz).
$$

Euler 方程可积分为

$$
\boxed{
gz+\frac{p}{\rho}+\frac{u^2}{2}=C}
$$

除以 $g$：

$$
\boxed{
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C}
$$

对于同一个连通势流区域，$C$ 对整个流场相同。

---

### 5.3 沿流线积分

即使流动有旋，只要沿同一条流线积分，也有

$$
\boxed{
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C_{\text{streamline}}}
$$

此时：

- 同一条流线上 $C$ 相同；
- 不同流线上的 $C$ 可以不同。

### 5.4 两种 Bernoulli 积分的区别

| 情况 | 适用范围 | 积分常数 |
|---|---|---|
| 稳定、不可压、理想、重力、**势流** | 同一连通流场任意两点 | 全流场相同 |
| 稳定、不可压、理想、重力，沿流线 | 同一条流线上的两点 | 不同流线可不同 |

数学表达式相同，适用范围不同，这是常见简答题。

---

### 5.5 Bernoulli 方程的物理与几何意义

$$
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C
$$

| 项 | 物理意义：单位重量能量 | 几何意义 |
|---|---|---|
| $z$ | 位置势能 | elevation head，位置水头 |
| $p/(\rho g)$ | 压强能 | pressure head，压强水头 |
| $u^2/(2g)$ | 动能 | velocity head，流速水头 |
| $z+p/(\rho g)$ | 总势能 | piezometric head，测压管水头 |
| 全部三项 | 总机械能 | total head，总水头 |

:::WARNING
本章得到的是理想流体 Bernoulli 方程。实际总流中的水头损失、动能修正系数、泵与水轮机项属于下一章“恒定总流基本方程”。
:::

---

## 6 恒定二维不可压缩势流

### 6.1 本节统一假设

- steady：$\partial/\partial t=0$
- two-dimensional：$u_z=0$，各量不依赖 $z$
- incompressible：

$$
\frac{\partial u_x}{\partial x}+\frac{\partial u_y}{\partial y}=0
$$

- irrotational / potential：

$$
\frac{\partial u_y}{\partial x}-\frac{\partial u_x}{\partial y}=0
$$

这两条方程分别对应：

- 质量守恒
- 无旋条件

---

### 6.2 Velocity potential（速度势函数）

若二维速度场无旋，则微分式

$$
u_x\,dx+u_y\,dy
$$

是全微分，可以定义

$$
\boxed{d\varphi=u_x\,dx+u_y\,dy}
$$

因此

$$
\boxed{
u_x=\frac{\partial\varphi}{\partial x},
\qquad
u_y=\frac{\partial\varphi}{\partial y}}
$$

$\varphi$ 称为 velocity potential 或 flow potential。

#### 极坐标形式

$$
\boxed{
u_r=\frac{\partial\varphi}{\partial r},
\qquad
u_\theta=\frac1r\frac{\partial\varphi}{\partial\theta}}
$$

#### Laplace equation

若流动同时不可压缩：

$$
\frac{\partial u_x}{\partial x}+\frac{\partial u_y}{\partial y}=0,
$$

代入 $u_x=\varphi_x,u_y=\varphi_y$：

$$
\boxed{
\nabla^2\varphi
=
\frac{\partial^2\varphi}{\partial x^2}
+
\frac{\partial^2\varphi}{\partial y^2}
=0}
$$

满足 Laplace equation 的函数称为 harmonic function。

---

### 6.3 Stream function（流函数）

对二维不可压缩流：

$$
\frac{\partial u_x}{\partial x}+\frac{\partial u_y}{\partial y}=0,
$$

可以定义

$$
\boxed{d\psi=-u_y\,dx+u_x\,dy}
$$

所以

$$
\boxed{
u_x=\frac{\partial\psi}{\partial y},
\qquad
u_y=-\frac{\partial\psi}{\partial x}}
$$

#### 极坐标形式

$$
\boxed{
u_r=\frac1r\frac{\partial\psi}{\partial\theta},
\qquad
u_\theta=-\frac{\partial\psi}{\partial r}}
$$

#### 物理意义 1：$\psi=C$ 是流线

沿 $\psi=C$：

$$
d\psi=-u_y\,dx+u_x\,dy=0,
$$

所以

$$
\frac{dy}{dx}=\frac{u_y}{u_x},
$$

正是流线斜率。

因此

$$
\boxed{\psi(x,y)=C\quad\text{represents a streamline}}
$$

#### 物理意义 2：流函数差等于单位宽度流量

两条流线 $A$、$B$ 之间的单位宽度流量为

$$
\boxed{q_{AB}=\psi_B-\psi_A}
$$

符号由穿过方向决定，求流量大小时取绝对值：

$$
|q_{AB}|=|\Delta\psi|.
$$

因此二维流函数单位为

$$
[\psi]=\mathrm{m^2/s}.
$$

若相邻流线间距为 $\Delta n$，平均法向流速近似为

$$
\boxed{u\approx\frac{|\Delta\psi|}{\Delta n}}
$$

---

### 6.4 $\varphi$ 与 $\psi$ 的关系

由两者定义：

$$
\boxed{
\frac{\partial\varphi}{\partial x}
=
\frac{\partial\psi}{\partial y},
\qquad
\frac{\partial\varphi}{\partial y}
=
-
\frac{\partial\psi}{\partial x}}
$$

这就是 Cauchy–Riemann equations。

若同时不可压缩且无旋，则

$$
\boxed{\nabla^2\varphi=0,
\qquad
\nabla^2\psi=0}
$$

#### 流线与等势线正交

等势线 $\varphi=C$ 的斜率为

$$
\left(\frac{dy}{dx}\right)_{\varphi}
=-\frac{u_x}{u_y}.
$$

流线 $\psi=C$ 的斜率为

$$
\left(\frac{dy}{dx}\right)_{\psi}
=\frac{u_y}{u_x}.
$$

两斜率乘积为 $-1$，所以二者正交。

---

### 6.5 课堂例：二维点源流

给定

$$
u_x=\frac{Cx}{x^2+y^2},
\qquad
u_y=\frac{Cy}{x^2+y^2}.
$$

令 $r=\sqrt{x^2+y^2}$。

#### 判断无旋

$$
\frac{\partial u_x}{\partial y}
=
\frac{-2Cxy}{(x^2+y^2)^2},
\qquad
\frac{\partial u_y}{\partial x}
=
\frac{-2Cxy}{(x^2+y^2)^2}.
$$

两者相等，所以除原点外为无旋流。

#### 求势函数

在极坐标中

$$
u_r=\frac{C}{r},
\qquad
u_\theta=0.
$$

因此

$$
\frac{\partial\varphi}{\partial r}=\frac{C}{r}
$$

得到

$$
\boxed{\varphi=C\ln r+C_1}
$$

#### 判断不可压缩

除原点外：

$$
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}=0.
$$

所以流场在 $r>0$ 区域不可压缩。

原点是点源奇点，不能直接把普通微分方程结论延伸到原点。

#### 求流函数

由极坐标公式

$$
u_r=\frac1r\frac{\partial\psi}{\partial\theta}=\frac{C}{r},
$$

故

$$
\boxed{\psi=C\theta+C_2}
$$

流线 $\theta=C$ 为从原点射出的直线，等势线 $r=C$ 为同心圆。

若单位宽度总流量为 $Q$：

$$
Q=\int_0^{2\pi}u_r r\,d\theta=2\pi C,
$$

所以

$$
\boxed{C=\frac{Q}{2\pi}}
$$

---

### 6.6 课堂例：由速度场直接求函数

#### 例 1：求流函数

$$
u_x=1,\qquad u_y=2.
$$

不可压缩条件成立：

$$
\frac{\partial u_x}{\partial x}+\frac{\partial u_y}{\partial y}=0.
$$

由

$$
\psi_y=u_x=1,
\qquad
-\psi_x=u_y=2,
$$

得

$$
\boxed{\psi=y-2x+C}
$$

#### 例 2：求势函数

$$
u_x=4x,\qquad u_y=-4y.
$$

无旋条件成立：

$$
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}=0.
$$

由

$$
\varphi_x=4x,
\qquad
\varphi_y=-4y,
$$

得

$$
\boxed{\varphi=2x^2-2y^2+C}
$$

---

### 6.7 课堂例：由流函数求势函数

给定

$$
\psi=ax^2-ay^2.
$$

速度分量：

$$
u_x=\psi_y=-2ay,
\qquad
u_y=-\psi_x=-2ax.
$$

判断无旋：

$$
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}
=-2a-(-2a)=0.
$$

所以势函数存在。

由

$$
\varphi_x=-2ay
$$

积分：

$$
\varphi=-2axy+f(y).
$$

再由 $\varphi_y=u_y=-2ax$ 得 $f'(y)=0$，所以

$$
\boxed{\varphi=-2axy+C}
$$

流线与等势线正交，可由两族曲线斜率乘积为 $-1$ 验证。

---

### 6.8 Flow net（流网）

流网是由

- 流线 $\psi=C$
- 等势线 $\varphi=C$

共同组成的正交曲线网。

<!-- 图片占位：插入【Chapter3（3）】第 19–22 页流网图，标出流线、等势线、$\Delta n$ 和 $\Delta s$。 -->

#### 基本性质

1. 流线与等势线处处正交。
2. 对小网格：

$$
\boxed{
\frac{\Delta s}{\Delta n}
=
\frac{\Delta\varphi}{\Delta\psi}}
$$

3. 若取 $\Delta\varphi=\Delta\psi$，网格应尽量画成曲边正方形。
4. 相邻流线的 $\Delta\psi$ 相同，则每个流道中的流量相同。
5. 流线越密，$\Delta n$ 越小，速度越大。

速度近似：

$$
\boxed{
u\approx\frac{\Delta\psi}{\Delta n}
\approx
\frac{\Delta\varphi}{\Delta s}}
$$

#### 固体边界条件

不可穿透固体边界：

$$
u_n=0.
$$

所以固定固体边界本身是一条流线；等势线与边界正交。

#### 应用

- 估计速度场
- 由 Bernoulli equation 估计压强场
- 分析理想流体绕流
- 分析二维渗流

---

### 6.9 Superposition of potential flows（势流叠加）

Laplace equation 是线性的，因此若各子流动都是势流：

$$
\boxed{
\varphi=\sum_i\varphi_i,
\qquad
\psi=\sum_i\psi_i}
$$

叠加后仍为势流。

#### Uniform flow（均匀直线流）

若速度大小为 $U$，方向与 $x$ 轴夹角为 $\alpha$：

$$
u_x=U\cos\alpha,
\qquad
u_y=U\sin\alpha.
$$

势函数：

$$
\boxed{
\varphi=U(x\cos\alpha+y\sin\alpha)}
$$

流函数：

$$
\boxed{
\psi=U(y\cos\alpha-x\sin\alpha)}
$$

#### Point source（二维点源）

若单位宽度流量为 $Q$：

$$
\boxed{
\varphi=\frac{Q}{2\pi}\ln r,
\qquad
\psi=\frac{Q}{2\pi}\theta}
$$

- $Q>0$：source，源流
- $Q<0$：sink，汇流

#### 均匀流与点源叠加

令均匀流沿 $+x$ 方向：

$$
\boxed{
\varphi=Ux+\frac{Q}{2\pi}\ln r}
$$

$$
\boxed{
\psi=Uy+\frac{Q}{2\pi}\theta}
$$

速度分量：

$$
\boxed{
u_x=U+\frac{Qx}{2\pi(x^2+y^2)},
\qquad
u_y=\frac{Qy}{2\pi(x^2+y^2)}}
$$

停滞点满足 $u_x=u_y=0$：

$$
\boxed{
\theta=\pi,
\qquad
r=\frac{Q}{2\pi U}}
$$

即位于点源上游的负 $x$ 轴。

通过停滞点的分界流线，其流函数值为

$$
\psi_A=\frac{Q}{2}.
$$

<!-- 图片占位：插入【Chapter3（3）】第 25–27 页“均匀流 + 点源”叠加图，标出停滞点与分界流线。 -->

---

### 6.10 点源流的压强分布

对二维点源流：

$$
u=\frac{C}{r}.
$$

忽略重力高差，Bernoulli equation 给出

$$
\frac{p}{\rho}+\frac{u^2}{2}=C_1.
$$

若 $r\to\infty$ 时 $p\to p_\infty$、$u\to0$，则

$$
\boxed{
p=p_\infty-\frac{\rho C^2}{2r^2}}
$$

又因为 $C=Q/(2\pi)$：

$$
\boxed{
p=p_\infty-\frac{\rho Q^2}{8\pi^2r^2}}
$$

越靠近点源，速度越大、压强越低。原点为数学奇点，理想点源模型在那里失效。

---

### 6.11 势函数与流函数的标准求解流程

考试中最常见的任务是“已知速度场求 $\varphi$ 或 $\psi$”。建议固定使用以下流程。

#### 已知速度场，求势函数 $\varphi$

1. 先检查无旋条件：

$$
\frac{\partial u_y}{\partial x}
=
\frac{\partial u_x}{\partial y}.
$$

2. 由 $\varphi_x=u_x$ 对 $x$ 积分：

$$
\varphi=\int u_x\,dx+f(y).
$$

3. 对结果求 $y$ 偏导，并令其等于 $u_y$，求出 $f'(y)$。
4. 积分得到 $f(y)$，最后加任意常数。

#### 已知速度场，求流函数 $\psi$

1. 先检查不可压缩条件：

$$
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}=0.
$$

2. 由 $\psi_y=u_x$ 对 $y$ 积分：

$$
\psi=\int u_x\,dy+f(x).
$$

3. 对结果求 $x$ 偏导，并令 $-\psi_x=u_y$，求出 $f'(x)$。
4. 积分并加任意常数。

:::WARNING
不能把对某一变量积分后的“积分常数”直接写成普通常数。

例如对 $x$ 积分时，积分结果中应保留 $f(y)$；它只对 $x$ 是常数，仍可能随 $y$ 变化。遗漏这一项会导致后续速度分量对不上。
:::

### 6.12 Laplace equation、边界条件与唯一性直觉

$\varphi$ 和 $\psi$ 满足 Laplace equation，意味着它们在无奇点区域内非常平滑，不会在内部随意出现孤立极大值或极小值。流场形状主要由边界条件控制。

对固定不可穿透固体边界：

$$
u_n=0.
$$

用流函数表示时，边界上沿切向移动有

$$
d\psi=0,
$$

所以同一段固体边界上

$$
\boxed{\psi=C}.
$$

这解释了为什么画流网时先把固体边界当作一条流线，再补画与其正交的等势线。

对于入口、出口或无穷远边界，通常给定以下一种信息：

- 速度大小与方向；
- 势函数或流函数值；
- 压强，再结合 Bernoulli equation 转化为速度条件。

势流问题的基本求解思想是：

> 选择满足 Laplace equation 的 $\varphi$ 或 $\psi$，再用边界条件确定其中的常数和具体形式。

### 6.13 常见基本流动的函数对照

| 流动 | 速度 | 势函数 $\varphi$ | 流函数 $\psi$ |
|---|---|---|---|
| 沿 $+x$ 的均匀流 | $u_x=U,u_y=0$ | $Ux$ | $Uy$ |
| 与 $x$ 轴成 $\alpha$ 的均匀流 | $(U\cos\alpha,U\sin\alpha)$ | $U(x\cos\alpha+y\sin\alpha)$ | $U(y\cos\alpha-x\sin\alpha)$ |
| 二维点源 | $u_r=Q/(2\pi r)$ | $(Q/2\pi)\ln r$ | $(Q/2\pi)\theta$ |
| 二维点汇 | $u_r=-|Q|/(2\pi r)$ | $-(|Q|/2\pi)\ln r$ | $-(|Q|/2\pi)\theta$ |
| 自由涡 | $u_\theta=C/r$ | $C\theta$ | $-C\ln r$ |

表中函数都允许再加任意常数。点源、点汇和自由涡在原点存在奇点，使用时应明确分析区域不包含奇点。

---

## 7 本章易错点与公式速查

### 7.1 高频易错点

1. **恒定流只消去当地加速度**，迁移加速度仍可能存在。
2. **均匀流只消去迁移加速度**，若速度场整体随时间变化，当地加速度仍可能存在。
3. 求流线时固定 $t$；求迹线时把 $t$ 当独立变量并代入初始条件。
4. 流线通常不相交，但停滞点是特殊点。
5. 不可压缩流判断用散度：$\nabla\cdot\mathbf{u}=0$。
6. 无旋流判断用旋度：$\nabla\times\mathbf{u}=0$。
7. 微团角速度是涡量的一半。
8. $\varphi$ 来自无旋条件；$\psi$ 来自二维不可压缩条件。
9. $\psi=C$ 是流线，$\varphi=C$ 是等势线。
10. 流函数差是单位宽度流量；平均速度还要再除以两流线间距。
11. Bernoulli equation 在有旋流中只能保证同一流线常数相同。
12. 点源、点汇、自由涡等理想模型在奇点处不能按普通连续流场处理。

### 7.2 一页公式表

#### Euler acceleration

$$
\boxed{
\mathbf{a}=\frac{\partial\mathbf{u}}{\partial t}
+(\mathbf{u}\cdot\nabla)\mathbf{u}}
$$

#### Streamline / pathline

$$
\boxed{
\text{streamline: }
\frac{dx}{u_x}=\frac{dy}{u_y}=\frac{dz}{u_z}
}
$$

$$
\boxed{
\text{pathline: }
\frac{dx}{u_x}=\frac{dy}{u_y}=\frac{dz}{u_z}=dt
}
$$

#### Continuity

$$
\boxed{
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf{u})=0}
$$

$$
\boxed{
\text{incompressible: }\nabla\cdot\mathbf{u}=0}
$$

#### Angular velocity and vorticity

$$
\boxed{
\boldsymbol{\omega}=\frac12\nabla\times\mathbf{u}}
$$

#### Euler / N–S

$$
\boxed{
\text{Euler: }
\frac{D\mathbf{u}}{Dt}
=
\mathbf{f}-\frac1\rho\nabla p}
$$

$$
\boxed{
\text{N--S: }
\frac{D\mathbf{u}}{Dt}
=
\mathbf{f}-\frac1\rho\nabla p+\nu\nabla^2\mathbf{u}}
$$

#### Bernoulli

$$
\boxed{
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C}
$$

#### Potential and stream function

$$
\boxed{
u_x=\varphi_x,
\qquad
u_y=\varphi_y}
$$

$$
\boxed{
u_x=\psi_y,
\qquad
u_y=-\psi_x}
$$

$$
\boxed{
\varphi_x=\psi_y,
\qquad
\varphi_y=-\psi_x}
$$

$$
\boxed{\nabla^2\varphi=0,
\qquad
\nabla^2\psi=0}
\quad
\text{for 2D incompressible potential flow}
$$

---

# 第二部分：练习题

> 题目均提供英文原题风格与中文翻译。标注“历年卷”者来自或直接改编自所给试卷；标注“教材”者来自教材第 4 章习题；其余根据课堂例题与常见考法整理。

## A 概念与判断

### 练习 1：当地加速度与迁移加速度｜Local and convective acceleration

**English**

For a steady flow, the ______ acceleration is zero. For a uniform flow, the ______ acceleration is zero.

**中文**

恒定流动的______加速度为零；均匀流动的______加速度为零。

**答案**

$$
\boxed{\text{local acceleration; convective acceleration}}
$$

恒定对应 $\partial\mathbf{u}/\partial t=0$；均匀对应 $(\mathbf{u}\cdot\nabla)\mathbf{u}=0$。

---

### 练习 2：相邻流线间的流量｜Discharge between adjacent streamlines

**English**

In a steady, two-dimensional incompressible flow, two adjacent streamlines differ in stream-function value by $d\psi$, and their normal spacing is $dn$. Find the discharge per unit width and the mean velocity between them.

**中文**

在恒定二维不可压缩流中，两条相邻流线的流函数差为 $d\psi$，法向间距为 $dn$。求两流线之间的单位宽度流量与平均流速。

**答案**

$$
\boxed{dq=d\psi}
$$

$$
\boxed{\bar u=\frac{d\psi}{dn}}
$$

若只问大小，应写绝对值 $|dq|=|d\psi|$、$\bar u=|d\psi|/dn$。

---

### 练习 3：速度场是否满足不可压缩连续性｜Continuity check

**English**

For an incompressible flow,

$$
u_x=x^2+xy-y^2,\qquad
u_y=x^2+y^2,\qquad
u_z=0.
$$

Can this velocity field exist?

**中文**

对不可压缩流体，给定上述速度场。判断该流动能否存在。

**解答**

不可压缩连续性方程：

$$
\frac{\partial u_x}{\partial x}
+
\frac{\partial u_y}{\partial y}
+
\frac{\partial u_z}{\partial z}=0.
$$

计算：

$$
\frac{\partial u_x}{\partial x}=2x+y,
\qquad
\frac{\partial u_y}{\partial y}=2y,
\qquad
\frac{\partial u_z}{\partial z}=0.
$$

所以

$$
\nabla\cdot\mathbf{u}=2x+3y\neq0.
$$

$$
\boxed{\text{The field cannot represent an incompressible flow.}}
$$

---

### 练习 4：均匀流与三种线｜Uniform flow and flow-visualization lines

**English**

Judge the statement: “In a uniform flow, streamlines, pathlines, and streaklines always coincide.”

**中文**

判断：“在均匀流中，流线、迹线和色线一定重合。”

**答案**

$$
\boxed{\text{False}}
$$

三者重合的充分条件是**恒定流**。均匀流只说明空间迁移加速度为零，速度场仍可能随时间改变。

---

### 练习 5：势函数和流函数的存在条件｜Existence conditions

**English**

State the essential condition for the existence of a velocity potential and that for a two-dimensional stream function.

**中文**

分别写出速度势函数与二维流函数存在的核心条件。

**答案**

- Velocity potential:

$$
\boxed{\nabla\times\mathbf{u}=0}
$$

在单连通区域内，无旋速度场可写成 $\mathbf{u}=\nabla\varphi$。

- Two-dimensional stream function:

$$
\boxed{\nabla\cdot\mathbf{u}=0}
$$

二维不可压缩速度场可写成 $u_x=\psi_y, u_y=-\psi_x$。

---

### 练习 6：流体微团运动形式｜Basic modes of fluid-particle motion

**English**

List the three basic modes of motion of a fluid particle.

**中文**

写出流体微团运动的三种基本形式。

**答案**

$$
\boxed{\text{translation, rotation, and deformation}}
$$

变形还可细分为线变形和角变形。

---

### 练习 7：Bernoulli 积分的适用范围｜Range of Bernoulli constant

**English**

For a steady, incompressible, inviscid flow under gravity, explain the difference between applying Bernoulli’s equation to a rotational flow and to an irrotational flow.

**中文**

对恒定、不可压缩、无黏且仅受重力的流动，说明 Bernoulli 方程在有旋流与无旋流中的适用范围差异。

**答案**

- 有旋流：

$$
z+\frac{p}{\rho g}+\frac{u^2}{2g}=C
$$

只保证同一条流线上 $C$ 相同，不同流线可不同。

- 无旋流：同一连通流场内任意两点均可使用同一个 $C$。

---

### 练习 8：平均速度与点速度｜Mean and local velocity

**English**

At a flow cross-section, compare the mean velocity $v$ with a local point velocity $u$. Choose one: $v<u$, $v=u$, $v>u$, or cannot be determined.

**中文**

在同一过流断面上，比较断面平均流速 $v$ 与某一点流速 $u$：$v<u$、$v=u$、$v>u$ 或无法确定。

**答案**

$$
\boxed{\text{Cannot be determined}}
$$

平均速度是对整个断面速度分布的面积平均。某一点速度可能高于、低于或恰好等于平均速度。

---

## B 计算与综合

### 练习 9：Euler acceleration｜欧拉加速度

**English**

A velocity field is

$$
u_x=x^2t,\qquad
u_y=-2xyt,\qquad
u_z=0.
$$

Find the local acceleration, convective acceleration, and total acceleration at $(x,y,t)=(1,2,1)$.

**中文**

给定上述速度场，求点 $(x,y,t)=(1,2,1)$ 处的当地加速度、迁移加速度与总加速度。

**解答**

当地加速度：

$$
\frac{\partial u_x}{\partial t}=x^2,
\qquad
\frac{\partial u_y}{\partial t}=-2xy.
$$

代入点：

$$
\boxed{\mathbf{a}_{\text{local}}=(1,-4,0)}
$$

迁移加速度：

$$
\begin{aligned}
a_{x,c}
&=u_x\frac{\partial u_x}{\partial x}
+u_y\frac{\partial u_x}{\partial y}\\
&=(x^2t)(2xt)+(-2xyt)(0)=2x^3t^2,
\end{aligned}
$$

所以 $a_{x,c}=2$。

$$
\begin{aligned}
a_{y,c}
&=u_x\frac{\partial u_y}{\partial x}
+u_y\frac{\partial u_y}{\partial y}\\
&=(x^2t)(-2yt)+(-2xyt)(-2xt)\\
&=-2x^2yt^2+4x^2yt^2
=2x^2yt^2.
\end{aligned}
$$

所以 $a_{y,c}=4$。

$$
\boxed{\mathbf{a}_{\text{convective}}=(2,4,0)}
$$

总加速度：

$$
\boxed{\mathbf{a}=(3,0,0)}
$$

---

### 练习 10：教材 4-1——流线与迹线｜Streamline and pathline

**English**

For the two-dimensional flow

$$
u_x=x^2t,\qquad u_y=-2xyt,
$$

find the streamline at $t=1$ through $(-2,1)$ and the pathline of the particle passing through that point at $t=1$.

**中文**

对上述二维流动，求 $t=1$ 时通过 $(-2,1)$ 的流线，以及 $t=1$ 经过该点的质点迹线。

**解答**

#### 1. 流线

固定 $t=1$：

$$
\frac{dy}{dx}=\frac{-2xy}{x^2}=-\frac{2y}{x}.
$$

积分：

$$
\frac{dy}{y}=-2\frac{dx}{x}
\quad\Rightarrow\quad
\ln y=-2\ln|x|+C.
$$

所以

$$
yx^2=C_1.
$$

代入 $(-2,1)$：$C_1=4$。

$$
\boxed{y=\frac{4}{x^2}}
$$

#### 2. 迹线

$$
\frac{dx}{dt}=x^2t.
$$

积分：

$$
\frac{dx}{x^2}=t\,dt
\quad\Rightarrow\quad
-\frac1x=\frac{t^2}{2}+C.
$$

由 $x(1)=-2$ 得 $C=0$：

$$
\boxed{x=-\frac{2}{t^2}}
$$

再由

$$
\frac{dy}{dt}=-2xyt
=\frac{4y}{t}
$$

得

$$
\frac{dy}{y}=4\frac{dt}{t}
\quad\Rightarrow\quad
y=C_2t^4.
$$

由 $y(1)=1$ 得

$$
\boxed{y=t^4}
$$

消去 $t$：

$$
\boxed{y=\frac{4}{x^2}}
$$

本题中特定质点的迹线恰好与该时刻流线重合；这不代表所有非恒定流都如此。

---

### 练习 11：教材 4-2——三维流线｜A three-dimensional streamline

**English**

Given

$$
u_x=-x,\qquad u_y=2y,\qquad u_z=5-z,
$$

find the streamline through $(2,1,1)$.

**中文**

给定上述三维速度场，求通过 $(2,1,1)$ 的流线方程。

**解答**

$$
\frac{dx}{-x}=\frac{dy}{2y}=\frac{dz}{5-z}.
$$

由前两项：

$$
\frac{dy}{y}=-2\frac{dx}{x}
\quad\Rightarrow\quad
x^2y=C_1.
$$

代入点得 $C_1=4$：

$$
\boxed{x^2y=4}
$$

由第一、第三项：

$$
\frac{dz}{5-z}=-\frac{dx}{x}.
$$

积分：

$$
-\ln(5-z)=-\ln|x|+C
$$

所以

$$
\frac{5-z}{x}=C_2.
$$

代入点得 $C_2=2$：

$$
\boxed{z=5-2x}
$$

因此通过指定点的流线可由两曲面交线表示：

$$
\boxed{x^2y=4,\qquad z=5-2x}
$$

---

### 练习 12：补全可压缩流速度分量｜Complete a compressible velocity field

**English**

Let

$$
\rho=t,\qquad
u_x=\frac{t}{\rho},\qquad
u_y=\frac{3xy}{\rho}.
$$

Determine the most general $u_z$ that satisfies continuity.

**中文**

给定上述密度和两个速度分量，求满足连续性方程的最一般 $u_z$。

**解答**

一般连续性方程：

$$
\frac{\partial\rho}{\partial t}
+
\frac{\partial(\rho u_x)}{\partial x}
+
\frac{\partial(\rho u_y)}{\partial y}
+
\frac{\partial(\rho u_z)}{\partial z}=0.
$$

前三项为

$$
1+0+3x.
$$

因此

$$
\frac{\partial(\rho u_z)}{\partial z}=-(1+3x).
$$

积分：

$$
\rho u_z=-(1+3x)z+f(x,y).
$$

$$
\boxed{
u_z=-\frac{(1+3x)z}{t}+\frac{f(x,y)}{t}}
$$

其中 $f(x,y)$ 是与 $z$ 无关的任意函数。

---

### 练习 13：教材 4-3 至 4-5——加速度与角速度｜Acceleration and angular velocity

**English**

For the steady velocity field

$$
u_x=xy^2,\qquad
u_y=-\frac13y^3,\qquad
u_z=xy,
$$

1. determine whether the flow is uniform;
2. find the acceleration at $(1,2,3)$;
3. find the angular velocity at $(1,2,3)$ and determine whether the flow is irrotational.

**中文**

对上述恒定速度场：判断是否均匀；求点 $(1,2,3)$ 的加速度；求该点微团角速度并判断是否无旋。

**解答**

#### 1. 均匀性

只要迁移加速度存在，流动就不是均匀流。下面计算可见加速度不为零，因此为非均匀流。

#### 2. 加速度

流动恒定，所以当地加速度为零。

在 $(1,2,3)$：

$$
u_x=4,\qquad u_y=-\frac83,\qquad u_z=2.
$$

计算得到

$$
\boxed{
\mathbf{a}
=
\left(\frac{16}{3},\frac{32}{3},\frac{16}{3}\right)}
$$

例如

$$
a_x
=u_x(y^2)+u_y(2xy)+u_z(0)
=4\cdot4-\frac83\cdot4
=\frac{16}{3}.
$$

其余分量同理。

#### 3. 角速度

$$
\omega_x
=\frac12\left(\frac{\partial u_z}{\partial y}-\frac{\partial u_y}{\partial z}\right)
=\frac{x}{2},
$$

$$
\omega_y
=\frac12\left(\frac{\partial u_x}{\partial z}-\frac{\partial u_z}{\partial x}\right)
=-\frac{y}{2},
$$

$$
\omega_z
=\frac12\left(\frac{\partial u_y}{\partial x}-\frac{\partial u_x}{\partial y}\right)
=-xy.
$$

代入 $(1,2,3)$：

$$
\boxed{\boldsymbol{\omega}=\left(\frac12,-1,-2\right)}
$$

角速度不为零，所以

$$
\boxed{\text{The flow is rotational.}}
$$

---

### 练习 14：历年卷原题——斜向均匀流的 $\varphi$ 与 $\psi$｜Uniform flow at an angle

**English**

A two-dimensional uniform flow has speed $U$ and makes an angle $\alpha$ with the positive $x$-axis. Determine its velocity potential $\varphi$, stream function $\psi$, and sketch the flow net.

**中文**

二维均匀直线流的速度大小为 $U$，与 $x$ 轴正向夹角为 $\alpha$。求势函数、流函数并说明流网形状。

**解答**

速度分量：

$$
u_x=U\cos\alpha,\qquad u_y=U\sin\alpha.
$$

#### 势函数

$$
\varphi_x=U\cos\alpha,
\qquad
\varphi_y=U\sin\alpha.
$$

所以

$$
\boxed{
\varphi=U(x\cos\alpha+y\sin\alpha)+C_1}
$$

#### 流函数

$$
\psi_y=u_x=U\cos\alpha,
\qquad
-\psi_x=u_y=U\sin\alpha.
$$

所以

$$
\boxed{
\psi=U(y\cos\alpha-x\sin\alpha)+C_2}
$$

#### 流网

- $\psi=C$：一族沿速度方向的平行直线；
- $\varphi=C$：与其正交的一族平行直线；
- 若等间隔取值，构成旋转了 $\alpha$ 的正方形网格。

---

### 练习 15：教材 4-9——由流函数求势函数｜From stream function to potential

**English**

Given

$$
\psi=2(x^2-y^2),
$$

find the velocity field and the velocity potential $\varphi$.

**中文**

已知流函数 $\psi=2(x^2-y^2)$，求速度场与势函数。

**解答**

由流函数定义：

$$
u_x=\psi_y=-4y,
\qquad
u_y=-\psi_x=-4x.
$$

无旋性：

$$
\frac{\partial u_y}{\partial x}
-
\frac{\partial u_x}{\partial y}
=-4-(-4)=0.
$$

所以势函数存在。

由 $\varphi_x=u_x=-4y$：

$$
\varphi=-4xy+f(y).
$$

再由 $\varphi_y=u_y=-4x$ 得 $f'(y)=0$。

$$
\boxed{\varphi=-4xy+C}
$$

---

### 练习 16：教材 4-10、4-11——由势函数求流函数与速度｜From potential to stream function

**English**

The velocity potential is

$$
\varphi=y+x^2-y^2.
$$

1. Find the velocity field and stream function.
2. For another flow with $\varphi=x(2y-1)$, find $(u_x,u_y)$ at $(4,5)$.

**中文**

已知势函数 $\varphi=y+x^2-y^2$，求速度场与流函数；另有 $\varphi=x(2y-1)$，求点 $(4,5)$ 的速度分量。

**解答**

#### 1. 第一流动

$$
u_x=\varphi_x=2x,
\qquad
u_y=\varphi_y=1-2y.
$$

由 $\psi_y=u_x=2x$：

$$
\psi=2xy+f(x).
$$

由 $-\psi_x=u_y=1-2y$：

$$
-(2y+f'(x))=1-2y
\quad\Rightarrow\quad
f'(x)=-1.
$$

所以

$$
\boxed{\psi=2xy-x+C}
$$

#### 2. 第二流动

$$
u_x=\frac{\partial\varphi}{\partial x}=2y-1,
\qquad
u_y=\frac{\partial\varphi}{\partial y}=2x.
$$

在 $(4,5)$：

$$
\boxed{u_x=9,\qquad u_y=8}
$$

---

### 练习 17：自由涡流网｜Free-vortex flow net

**English**

For

$$
u_x=-\frac{Cy}{x^2+y^2},\qquad
u_y=\frac{Cx}{x^2+y^2},\qquad C>0,
$$

find $\varphi$ and $\psi$ in polar coordinates, and describe the flow net.

**中文**

对上述二维环流速度场，求极坐标下势函数和流函数，并说明流网形状。

**解答**

转为极坐标：

$$
u_r=0,
\qquad
u_\theta=\frac{C}{r}.
$$

#### 势函数

$$
u_r=\varphi_r=0,
\qquad
u_\theta=\frac1r\varphi_\theta=\frac{C}{r}.
$$

所以

$$
\boxed{\varphi=C\theta+C_1}
$$

#### 流函数

$$
u_\theta=-\psi_r=\frac{C}{r}.
$$

所以

$$
\boxed{\psi=-C\ln r+C_2}
$$

#### 流网

- $\psi=C$：$r=\text{const}$，同心圆流线；
- $\varphi=C$：$\theta=\text{const}$，径向等势线；
- 两族曲线正交。

注意 $\varphi=C\theta$ 绕原点一周会改变 $2\pi C$，因此在包含原点并绕原点闭合的多连通区域中是多值函数；局部区域内仍可使用。

---

### 练习 18：点源流的压强｜Pressure in a point-source flow

**English**

A two-dimensional point source has discharge per unit width $Q$ in an inviscid incompressible fluid of density $\rho$. Far from the source, the pressure is $p_\infty$ and the velocity tends to zero. Find $u(r)$ and $p(r)$.

**中文**

二维点源的单位宽度流量为 $Q$。理想不可压缩流体密度为 $\rho$，远处压强为 $p_\infty$、速度趋于零。求径向速度和压强分布。

**解答**

由圆周流量：

$$
Q=u_r(2\pi r).
$$

所以

$$
\boxed{u_r=\frac{Q}{2\pi r}}
$$

同一势流区域内应用 Bernoulli equation，忽略高程差：

$$
\frac{p}{\rho}+\frac{u^2}{2}
=
\frac{p_\infty}{\rho}.
$$

代入速度：

$$
\boxed{
p(r)=p_\infty-\frac{\rho Q^2}{8\pi^2r^2}}
$$

$r$ 越小，速度越大，压强越低。$r=0$ 是理想模型奇点。

---

### 练习 19：均匀流与点源叠加｜Uniform flow plus a source

**English**

A uniform flow of speed $U$ in the positive $x$ direction is superposed with a two-dimensional source of strength $Q>0$ at the origin. Find:

1. the velocity potential and stream function;
2. the stagnation point;
3. the stream-function value of the dividing streamline through the stagnation point.

**中文**

沿 $+x$ 方向、速度为 $U$ 的均匀流与原点处强度为 $Q>0$ 的二维点源叠加。求势函数、流函数、停滞点以及通过停滞点的分界流线函数值。

**解答**

#### 1. 势函数与流函数

$$
\boxed{
\varphi=Ux+\frac{Q}{2\pi}\ln r}
$$

$$
\boxed{
\psi=Uy+\frac{Q}{2\pi}\theta}
$$

#### 2. 停滞点

极坐标速度：

$$
u_r=U\cos\theta+\frac{Q}{2\pi r},
\qquad
u_\theta=-U\sin\theta.
$$

令两者为零：

$$
\sin\theta=0.
$$

$\theta=0$ 时 $u_r>0$，不能停滞；取 $\theta=\pi$：

$$
-U+\frac{Q}{2\pi r}=0.
$$

所以

$$
\boxed{
r_A=\frac{Q}{2\pi U},\qquad \theta_A=\pi}
$$

或

$$
\boxed{
(x_A,y_A)=\left(-\frac{Q}{2\pi U},0\right)}
$$

#### 3. 分界流线

在停滞点 $y=0,\theta=\pi$：

$$
\psi_A=U(0)+\frac{Q}{2\pi}\pi.
$$

$$
\boxed{\psi_A=\frac{Q}{2}}
$$

分界流线方程可写为

$$
Uy+\frac{Q}{2\pi}\theta=\frac{Q}{2}.
$$

---

### 练习 20：流网估算速度与压强｜Estimate velocity and pressure from a flow net

**English**

In a two-dimensional incompressible potential flow, adjacent streamlines have the same increment $\Delta\psi=0.020\ \mathrm{m^2/s}$. At points A and B, the normal spacings between neighboring streamlines are $\Delta n_A=0.010\ \mathrm{m}$ and $\Delta n_B=0.025\ \mathrm{m}$. The two points are at the same elevation, and the fluid density is $1000\ \mathrm{kg/m^3}$. If $p_A=80\ \mathrm{kPa}$, find $u_A$, $u_B$, and $p_B$ for ideal flow.

**中文**

二维不可压缩势流中，相邻流线的流函数差均为 $0.020\ \mathrm{m^2/s}$。A、B 两点附近相邻流线法向间距分别为 $0.010\ \mathrm{m}$ 和 $0.025\ \mathrm{m}$。两点等高，流体密度 $1000\ \mathrm{kg/m^3}$，已知 $p_A=80\ \mathrm{kPa}$，求理想流条件下 $u_A,u_B,p_B$。

**解答**

由

$$
u\approx\frac{\Delta\psi}{\Delta n}
$$

得

$$
\boxed{u_A=\frac{0.020}{0.010}=2.0\ \mathrm{m/s}}
$$

$$
\boxed{u_B=\frac{0.020}{0.025}=0.8\ \mathrm{m/s}}
$$

两点等高，Bernoulli equation：

$$
\frac{p_A}{\rho}+\frac{u_A^2}{2}
=
\frac{p_B}{\rho}+\frac{u_B^2}{2}.
$$

所以

$$
p_B=p_A+\frac{\rho}{2}(u_A^2-u_B^2).
$$

$$
p_B
=80\times10^3
+\frac{1000}{2}(4-0.64)
=81680\ \mathrm{Pa}.
$$

$$
\boxed{p_B=81.68\ \mathrm{kPa}}
$$

B 点流线较疏，速度较低，压强较高。

---

## 练习题结论速览

- 判断恒定 / 均匀：分别查看 $\partial\mathbf{u}/\partial t$ 与 $(\mathbf{u}\cdot\nabla)\mathbf{u}$。
- 判断不可压缩：计算 $\nabla\cdot\mathbf{u}$。
- 判断无旋：计算 $\nabla\times\mathbf{u}$。
- 求流线：固定 $t$ 后解 $dx/u_x=dy/u_y=dz/u_z$。
- 求迹线：解 $dx/dt=u_x$、$dy/dt=u_y$、$dz/dt=u_z$ 并代初值。
- 求 $\varphi$：使用 $\varphi_x=u_x$、$\varphi_y=u_y$。
- 求 $\psi$：使用 $\psi_y=u_x$、$\psi_x=-u_y$。
- 流网速度：$u\approx\Delta\psi/\Delta n$。
- 理想势流压强：速度大处压强通常低，但必须在 Bernoulli 适用条件下判断。
