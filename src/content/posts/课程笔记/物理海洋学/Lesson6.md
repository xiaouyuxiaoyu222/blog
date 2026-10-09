---
title: Oceanography-Lesson6：海水运动方程（二）
published: 2026-09-30
description: 随体导数、连续性方程、动量方程、压强梯度力、分子黏性与湍流摩擦、重力、引潮力、位势力、旋转坐标系与科氏力
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 概述

这一节课继续第三章 **海水运动方程**。整堂课的主线可以压缩成一句话：

> **先用质量守恒得到连续性方程，再用牛顿第二定律得到动量方程，随后逐一拆解海水微团实际会受到的各种力，最后把地球自转带来的科氏效应引入旋转坐标系。**

本节最重要的逻辑链条是：

$$
\text{随体导数}
\longrightarrow
\text{质量守恒}
\longrightarrow
\text{连续性方程}
\longrightarrow
\text{牛顿第二定律}
\longrightarrow
\text{动量方程}
\longrightarrow
\text{各种外力}
\longrightarrow
\text{旋转地球上的运动方程}
$$

:::NOTE
**课堂安排说明**：录音中出现了一次课堂点名，但老师没有说明其与平时分的具体关系；本次课没有听到新的作业、测试或考试要求。
:::

---

## 目录

- [概述](#概述)
- [一、预备数学知识](#一预备数学知识)
  - [1. 梯度 Gradient](#1-梯度-gradient)
  - [2. 散度 Divergence](#2-散度-divergence)
  - [3. 旋度 Curl](#3-旋度-curl)
  - [4. 高斯散度定理](#4-高斯散度定理)
  - [5. 斯托克斯定理](#5-斯托克斯定理)
- [二、随体导数 Material Derivative](#二随体导数-material-derivative)
  - [1. 为什么要引入随体导数](#1-为什么要引入随体导数)
  - [2. 当地导数与迁移导数](#2-当地导数与迁移导数)
- [三、连续性方程：质量守恒](#三连续性方程质量守恒)
  - [1. 拉格朗日观点推导](#1-拉格朗日观点推导)
  - [2. 欧拉观点推导](#2-欧拉观点推导)
  - [3. 连续性方程的几种等价形式](#3-连续性方程的几种等价形式)
  - [4. 不可压缩流体](#4-不可压缩流体)
- [四、动量方程：从牛顿第二定律出发](#四动量方程从牛顿第二定律出发)
  - [1. 系统动量](#1-系统动量)
  - [2. 动量变化率](#2-动量变化率)
  - [3. 外力：体积力与表面力](#3-外力体积力与表面力)
  - [4. 利用连续性方程化简](#4-利用连续性方程化简)
- [五、作用在海水微团上的外力](#五作用在海水微团上的外力)
  - [1. 压强梯度力](#1-压强梯度力)
  - [2. 分子黏性力与切应力](#2-分子黏性力与切应力)
  - [3. 湍流摩擦力与涡黏性系数](#3-湍流摩擦力与涡黏性系数)
  - [4. 重力与惯性离心力](#4-重力与惯性离心力)
  - [5. 引潮力](#5-引潮力)
  - [6. 位势力](#6-位势力)
- [六、旋转坐标系与科氏力](#六旋转坐标系与科氏力)
  - [1. 惯性坐标系与地球坐标系](#1-惯性坐标系与地球坐标系)
  - [2. 速度变换](#2-速度变换)
  - [3. 加速度变换](#3-加速度变换)
  - [4. 科氏力的分量形式](#4-科氏力的分量形式)
  - [5. 海洋中的常用近似](#5-海洋中的常用近似)
- [七、本节公式总表](#七本节公式总表)
- [八、整节课的逻辑串联](#八整节课的逻辑串联)

---

# 一、预备数学知识

第三章中很多式子都由三个微分算子反复组合而来：**梯度、散度、旋度**。理解它们的物理意义，比单纯记公式更重要。

## 1. 梯度 Gradient

对于标量场 $\phi(x,y,z)$：

$$
\nabla \phi
=
\left(
\frac{\partial \phi}{\partial x},
\frac{\partial \phi}{\partial y},
\frac{\partial \phi}{\partial z}
\right)
$$

梯度是一个**向量**：

- 方向：标量增加最快的方向；
- 大小：沿这个方向单位距离上的最大变化率。

例如温度场 $T(x,y,z)$ 中，$\nabla T$ 指向温度升高最快的方向。

因此后面出现

$$
-\nabla p
$$

时，负号立刻告诉我们：**压强梯度力指向压强降低最快的方向。**

## 2. 散度 Divergence

对于速度场

$$
\mathbf{u}=(u,v,w)
$$

其散度为

$$
\nabla\cdot\mathbf{u}
=
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}
$$

散度是一个**标量**，衡量一个小体积附近的净“发散”程度：

- $\nabla\cdot\mathbf{u}>0$：整体向外流出，局部体积趋向膨胀；
- $\nabla\cdot\mathbf{u}<0$：整体向内汇聚，局部体积趋向压缩；
- $\nabla\cdot\mathbf{u}=0$：流入与流出在体积意义上平衡。

连续性方程最后出现 $\nabla\cdot\mathbf{u}=0$，其物理含义正来自这里。

## 3. 旋度 Curl

速度场的旋度为

$$
\nabla\times\mathbf{u}
=
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k}\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
u & v & w
\end{vmatrix}
$$

旋度是一个向量，用来刻画局地流体微团的旋转程度。

- 方向：由右手定则决定旋转轴方向；
- 大小：反映局部旋转强弱。

## 4. 高斯散度定理

高斯定理把**闭合曲面上的通量**与**内部体积中的散度**联系起来：

$$
\oiint_A \mathbf{a}\cdot d\mathbf{A}
=
\iiint_V \nabla\cdot\mathbf{a}\,dV
$$

![高斯散度定理示意图](/images/physical-oceanography/lesson6/gauss_theorem.jpg)

这条公式在本节出现两次关键用途：

1. 连续性方程中，把穿过控制体边界的质量通量面积分转成体积分；
2. 动量方程中，把表面应力的面积分转成体积分。

直观上可以记成：

> **边界上一共“流出去多少” = 体积内部一共“发散出多少”。**

## 5. 斯托克斯定理

课件还回顾了斯托克斯定理：

$$
\oint_C \mathbf{u}\cdot d\mathbf{s}
=
\iint_A (\nabla\times\mathbf{u})\cdot d\mathbf{A}
$$

它把闭合曲线上的环流与曲面上的旋度通量联系起来。后面学习涡度、环流时会更频繁地使用。

---

# 二、随体导数 Material Derivative

## 1. 为什么要引入随体导数

在流体中，一个物理量

$$
\phi=\phi(x,y,z,t)
$$

同时依赖：

- 时间 $t$；
- 空间位置 $(x,y,z)$。

如果我们站在岸边固定位置测温度，只需要问“这个固定点的温度随时间怎样变”；如果我们跟着一团水一起走，还必须考虑水团被带到别的位置后，所处环境本身发生了变化。

因此，跟随流体质点时观测到的真实变化率为：

$$
\boxed{
\frac{D\phi}{Dt}
=
\frac{\partial \phi}{\partial t}
+u\frac{\partial \phi}{\partial x}
+v\frac{\partial \phi}{\partial y}
+w\frac{\partial \phi}{\partial z}
}
$$

矢量形式：

$$
\boxed{
\frac{D\phi}{Dt}
=
\frac{\partial \phi}{\partial t}
+(\mathbf{u}\cdot\nabla)\phi
}
$$

![随体导数：当地变化与迁移变化](/images/physical-oceanography/lesson6/material_derivative.jpg)

## 2. 当地导数与迁移导数

随体导数包含两部分：

### 当地导数 local derivative

$$
\frac{\partial \phi}{\partial t}
$$

表示：**固定在同一个空间点，该物理量随时间发生的变化。**

例如固定一个温度探头，记录该位置水温从 20 ℃ 降到 19 ℃。

### 迁移导数 / 对流导数 advective derivative

$$
(\mathbf{u}\cdot\nabla)\phi
=
 u\frac{\partial \phi}{\partial x}
+v\frac{\partial \phi}{\partial y}
+w\frac{\partial \phi}{\partial z}
$$

表示：**流体质点运动到不同空间位置后，因为空间分布不均匀而感受到的变化。**

老师举的直观例子是：水团从高温上游流向低温下游，即使整个温度场本身不随时间变化，跟着水团走仍会感到温度下降。

:::TIP
判断题里最容易混淆的一点：

- $\partial/\partial t$：固定空间位置看变化；
- $D/Dt$：跟着流体质点看变化；
- 两者之差就是流动搬运造成的迁移项。
:::

---

# 三、连续性方程：质量守恒

连续性方程的物理基础只有一句话：

> **质量守恒。**

老师分别从 **拉格朗日观点** 和 **欧拉观点** 推导，最后得到同一个局地方程。

## 1. 拉格朗日观点推导

### Step 1：跟随同一团流体

取一团确定的流体质点，其边界随流体一起运动、变形。虽然形状会变，但其中包含的质点集合不变，因此总质量保持常数：

$$
\boxed{
\frac{Dm}{Dt}=0
}
$$

总质量写成：

$$
m=\iiint_{V(t)}\rho\,dV
$$

于是

$$
\frac{D}{Dt}\iiint_{V(t)}\rho\,dV=0
$$

### Step 2：理解微小体积为什么会出现散度

对一个很小的流体微团：

$$
dm=\rho\,dV
$$

对时间求随体导数：

$$
\frac{D(dm)}{Dt}
=
\frac{D\rho}{Dt}dV
+
\rho\frac{D(dV)}{Dt}
$$

关键在于第二项。若小体积是

$$
dV=dx\,dy\,dz
$$

在 $x$ 方向，左右两侧速度不同会使长度发生变化：

$$
\frac{1}{dx}\frac{D(dx)}{Dt}
\approx
\frac{\partial u}{\partial x}
$$

同理：

$$
\frac{1}{dy}\frac{D(dy)}{Dt}
\approx
\frac{\partial v}{\partial y}
$$

$$
\frac{1}{dz}\frac{D(dz)}{Dt}
\approx
\frac{\partial w}{\partial z}
$$

因此体积相对变化率为

$$
\frac{1}{dV}\frac{D(dV)}{Dt}
=
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}
=
\nabla\cdot\mathbf{u}
$$

即

$$
\boxed{
\frac{D(dV)}{Dt}
=(\nabla\cdot\mathbf{u})dV
}
$$

这一步正好解释了为什么散度能够表示微团的体积膨胀率。

### Step 3：代回质量守恒

于是

$$
0
=
\frac{Dm}{Dt}
=
\iiint_{V(t)}
\left[
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\mathbf{u}
\right]dV
$$

对任意流体体积 $V(t)$ 都成立，因此积分中的被积函数必须为零：

$$
\boxed{
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\mathbf{u}
=0
}
$$

再把随体导数展开：

$$
\frac{D\rho}{Dt}
=
\frac{\partial\rho}{\partial t}
+
\mathbf{u}\cdot\nabla\rho
$$

得到

$$
\frac{\partial\rho}{\partial t}
+
\mathbf{u}\cdot\nabla\rho
+
\rho\nabla\cdot\mathbf{u}
=0
$$

利用乘积恒等式

$$
\nabla\cdot(\rho\mathbf{u})
=
\mathbf{u}\cdot\nabla\rho
+
\rho\nabla\cdot\mathbf{u}
$$

最终得到：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\mathbf{u})=0
}
$$

## 2. 欧拉观点推导

欧拉观点固定一个空间控制体 $V$，边界 $A$ 不随流体移动。

控制体内部的质量为

$$
M=\iiint_V\rho\,dV
$$

固定控制体中，质量变化率等于**流入的净质量通量**。若 $d\mathbf A$ 取外法向，$\rho\mathbf u\cdot d\mathbf A$ 表示向外流出的质量通量，因此：

$$
\iiint_V\frac{\partial\rho}{\partial t}dV
=
-\oiint_A \rho\mathbf u\cdot d\mathbf A
$$

利用高斯散度定理：

$$
\oiint_A \rho\mathbf u\cdot d\mathbf A
=
\iiint_V\nabla\cdot(\rho\mathbf u)dV
$$

所以

$$
\iiint_V
\left[
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\mathbf u)
\right]dV
=0
$$

由于控制体任意：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\mathbf u)=0
}
$$

![欧拉观点下的连续性方程推导](/images/physical-oceanography/lesson6/continuity_euler.jpg)

两种观点最终得到完全相同的质量守恒方程。

## 3. 连续性方程的几种等价形式

最常见形式：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\mathbf u)=0
}
$$

展开乘积：

$$
\frac{\partial\rho}{\partial t}
+
\mathbf u\cdot\nabla\rho
+
\rho\nabla\cdot\mathbf u=0
$$

识别随体导数：

$$
\boxed{
\frac{D\rho}{Dt}
+
\rho\nabla\cdot\mathbf u=0
}
$$

再除以 $\rho$：

$$
\boxed{
\frac{1}{\rho}\frac{D\rho}{Dt}
+
\nabla\cdot\mathbf u=0
}
$$

每个形式表达的都是同一个事实：**密度变化与体积膨胀/收缩必须彼此配合，才能保证质量守恒。**

## 4. 不可压缩流体

老师指出，对海洋问题经常采用不可压缩近似：

$$
\frac{D\rho}{Dt}=0
$$

代入连续性方程：

$$
\boxed{
\nabla\cdot\mathbf u=0
}
$$

即

$$
\boxed{
\frac{\partial u}{\partial x}
+
\frac{\partial v}{\partial y}
+
\frac{\partial w}{\partial z}=0
}
$$

物理意义：一个小海水微团若在某些方向被拉长，就必须在其他方向相应收缩，使体积保持不变。

:::WARNING
$\nabla\cdot\mathbf u=0$ 描述的是**体积不发生净膨胀或压缩**。它并不要求三个速度分量分别为常数，也不要求流体静止。
:::

---

# 四、动量方程：从牛顿第二定律出发

上一部分解决“质量怎么守恒”，这一部分解决“海水为什么会加速”。

出发点就是牛顿第二定律的动量形式：

$$
\boxed{
\frac{D\mathbf P}{Dt}=\sum\mathbf F
}
$$

其中 $\mathbf P$ 是系统总动量。

## 1. 系统动量

速度记为 $\mathbf u$，则单位体积中的动量为 $\rho\mathbf u$，整个流体系统的总动量为：

$$
\boxed{
\mathbf P
=
\iiint_{V(t)}\rho\mathbf u\,dV
}
$$

## 2. 动量变化率

课堂这里使用了“莱布尼兹定理”处理随时间移动、变形的积分区域。它给出：

$$
\frac{D}{Dt}
\iiint_{V(t)}\rho\mathbf u\,dV
=
\iiint_V
\frac{\partial(\rho\mathbf u)}{\partial t}dV
+
\oiint_A
\rho\mathbf u(\mathbf u\cdot d\mathbf A)
$$

第二项是**动量随流体穿过边界产生的通量**。

再使用高斯定理：

$$
\oiint_A
\rho\mathbf u(\mathbf u\cdot d\mathbf A)
=
\iiint_V
\nabla\cdot(\rho\mathbf u\mathbf u)dV
$$

因此：

$$
\boxed{
\frac{D\mathbf P}{Dt}
=
\iiint_V
\left[
\frac{\partial(\rho\mathbf u)}{\partial t}
+
\nabla\cdot(\rho\mathbf u\mathbf u)
\right]dV
}
$$

这里 $\rho\mathbf u\mathbf u$ 可以先理解为“动量通量”，$\nabla\cdot(\rho\mathbf u\mathbf u)$ 表示由于流动搬运造成的动量净变化。

## 3. 外力：体积力与表面力

老师先用两类最典型的力搭出方程骨架。

### 体积力

体积力作用于微团内部所有质量，与微团的质量或体积成比例。

以重力为例：

$$
\mathbf G
=
\iiint_V\rho\mathbf g\,dV
$$

### 表面力

表面力通过流体微团边界作用，与作用面积相关。用应力/牵引力 $\boldsymbol\tau$ 表示：

$$
\mathbf P_s
=
\oiint_A \boldsymbol\tau\cdot d\mathbf A
$$

再用高斯定理：

$$
\mathbf P_s
=
\iiint_V\nabla\cdot\boldsymbol\tau\,dV
$$

代入牛顿第二定律：

$$
\iiint_V
\left[
\frac{\partial(\rho\mathbf u)}{\partial t}
+
\nabla\cdot(\rho\mathbf u\mathbf u)
-
\rho\mathbf g
-
\nabla\cdot\boldsymbol\tau
\right]dV=0
$$

## 4. 利用连续性方程化简

这是本节动量方程推导中最值得掌握的一步。

先展开第一项：

$$
\frac{\partial(\rho\mathbf u)}{\partial t}
=
\rho\frac{\partial\mathbf u}{\partial t}
+
\mathbf u\frac{\partial\rho}{\partial t}
$$

再展开动量通量项：

$$
\nabla\cdot(\rho\mathbf u\mathbf u)
=
\rho(\mathbf u\cdot\nabla)\mathbf u
+
\mathbf u\,\nabla\cdot(\rho\mathbf u)
$$

两式相加：

$$
\begin{aligned}
&\frac{\partial(\rho\mathbf u)}{\partial t}
+\nabla\cdot(\rho\mathbf u\mathbf u)\\
=&\rho\frac{\partial\mathbf u}{\partial t}
+\rho(\mathbf u\cdot\nabla)\mathbf u
+\mathbf u
\left[
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf u)
\right]
\end{aligned}
$$

方括号内正好就是连续性方程：

$$
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf u)=0
$$

所以这一整项消失，留下：

$$
\rho
\left[
\frac{\partial\mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u
\right]
$$

括号内正是速度的随体导数：

$$
\frac{D\mathbf u}{Dt}
=
\frac{\partial\mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u
$$

最终得到课堂上的简化动量方程：

$$
\boxed{
\rho\frac{D\mathbf u}{Dt}
=
\rho\mathbf g
+
\nabla\cdot\boldsymbol\tau
}
$$

![利用连续性方程化简动量方程](/images/physical-oceanography/lesson6/momentum_derivation.jpg)

它的物理意义非常直接：

$$
\underbrace{\rho\frac{D\mathbf u}{Dt}}_{\text{质量密度}\times\text{加速度}}
=
\underbrace{\rho\mathbf g+\nabla\cdot\boldsymbol\tau}_{\text{单位体积所受合力}}
$$

:::NOTE
老师特别强调：上式此时仍是一个“骨架形式”。真实海洋中的合力还包括压强梯度力、摩擦力、引潮力以及旋转坐标系中的惯性力等，下面逐一展开。
:::

---

# 五、作用在海水微团上的外力

按照课堂分类，可以先记成三组：

- **体积力**：重力、引潮力等；
- **表面力**：压强梯度力、摩擦力/切应力；
- **旋转坐标系中的虚拟惯性力**：惯性离心力、科氏力。

---

## 1. 压强梯度力

### 定义

压强梯度力是海水微团各个表面所受压力不均匀后形成的合力。

课堂从一个中心位于 $(x,y,z)$ 的小长方体出发，边长分别为

$$
\Delta x,\quad \Delta y,\quad \Delta z
$$

先只看 $x$ 方向。

### Step 1：左、右表面的压强

左侧表面位于

$$
x-\frac{\Delta x}{2}
$$

一阶展开：

$$
p_L
\approx
p-
\frac{\partial p}{\partial x}
\frac{\Delta x}{2}
$$

右侧表面：

$$
p_R
\approx
p+
\frac{\partial p}{\partial x}
\frac{\Delta x}{2}
$$

### Step 2：把压强乘面积得到压力

左右表面面积均为

$$
\Delta y\Delta z
$$

取 $+x$ 为正：

$$
F_{L,x}
=
p_L\Delta y\Delta z
$$

右侧压力朝 $-x$：

$$
F_{R,x}
=
-p_R\Delta y\Delta z
$$

所以合力

$$
\begin{aligned}
F_x
&=(p_L-p_R)\Delta y\Delta z\\
&=-\frac{\partial p}{\partial x}
\Delta x\Delta y\Delta z
\end{aligned}
$$

即

$$
F_x=-\frac{\partial p}{\partial x}\Delta V
$$

同理：

$$
F_y=-\frac{\partial p}{\partial y}\Delta V
$$

$$
F_z=-\frac{\partial p}{\partial z}\Delta V
$$

因此整个微团所受压强合力为：

$$
\boxed{
\mathbf F_p=-\nabla p\,\Delta V
}
$$

除以微团质量 $\rho\Delta V$，得到**单位质量海水的压强梯度力**：

$$
\boxed{
\mathbf f_p
=-\frac{1}{\rho}\nabla p
}
$$

![压强梯度力的微团推导](/images/physical-oceanography/lesson6/pressure_gradient.jpg)

### 物理意义

- $\nabla p$ 指向压强增加最快的方向；
- $-\nabla p$ 指向压强减小最快的方向；
- 因此压强梯度力总是从高压一侧推向低压一侧；
- 若某方向两侧压力完全相等，该方向没有压强梯度力。

老师强调：**压强梯度力是推动海水运动最根本的动力之一。**

---

## 2. 分子黏性力与切应力

当相邻两层流体存在相对运动时，分子黏滞性会引起动量交换，形成沿界面切向的作用力。

牛顿型黏性关系写成：

$$
\boxed{
\boldsymbol\tau
=
\mu\frac{d\mathbf u}{dn}
}
$$

其中：

- $n$：界面法向；
- $\mu$：动力黏性系数，单位 $\mathrm{N\cdot s\cdot m^{-2}}$，也就是 $\mathrm{Pa\cdot s}$。

![分子黏性力与速度梯度](/images/physical-oceanography/lesson6/molecular_viscosity.jpg)

### 一维例子：只考虑 $u(z)$

若水平速度 $u$ 随 $z$ 变化：

$$
\tau_{xz}
=
\mu\frac{\partial u}{\partial z}
$$

一个很薄的微团上、下表面切应力稍有差异，因此单位体积所受合力为：

$$
\frac{\partial\tau_{xz}}{\partial z}
$$

单位质量上的摩擦力：

$$
F_x
=
\frac{1}{\rho}
\frac{\partial\tau_{xz}}{\partial z}
$$

若 $\mu$ 近似为常数：

$$
F_x
=
\frac{\mu}{\rho}
\frac{\partial^2u}{\partial z^2}
$$

定义运动黏性系数

$$
\boxed{
\nu=\frac{\mu}{\rho}
}
$$

则

$$
\boxed{
F_x
=
\nu\frac{\partial^2u}{\partial z^2}
}
$$

在三维、各向同性且 $\nu$ 为常数时可写成：

$$
\boxed{
\mathbf F_{\nu}
=
\nu\nabla^2\mathbf u
}
$$

课堂给出的海水运动黏性系数量级示例：

$$
\nu(0^\circ\mathrm C)
\approx1.787\times10^{-6}\ \mathrm{m^2\,s^{-1}}
$$

$$
\nu(20^\circ\mathrm C)
\approx1.004\times10^{-6}\ \mathrm{m^2\,s^{-1}}
$$

老师据此指出：温度升高时，水的运动黏性系数会减小。

### 在海洋中的意义

分子黏性系数很小，因此在大洋大尺度运动内部通常影响较弱；课堂重点提到上边界和底边界附近的摩擦作用更明显。

---

## 3. 湍流摩擦力与涡黏性系数

真实海洋内部大量运动处于湍流状态。湍流中存在许多大小不同的涡团，它们在不同流速水层之间来回运动并交换动量。

为了在平均意义上表示这种动量输运，课堂类比牛顿黏性定律，引入 **涡黏性系数 $A$**：

$$
\boxed{
\frac{\boldsymbol\tau}{\rho}
=
A\frac{d\mathbf u}{dn}
}
$$

![湍流摩擦力与涡黏性参数化](/images/physical-oceanography/lesson6/turbulent_friction.jpg)

以 $u(z)$ 为例：

$$
F_x
=
\frac{1}{\rho}\frac{\partial\tau}{\partial z}
=
\frac{\partial}{\partial z}
\left(
A\frac{\partial u}{\partial z}
\right)
$$

若 $A$ 为常数：

$$
F_x=A\frac{\partial^2u}{\partial z^2}
$$

### 为什么 $A$ 很重要

分子黏性系数可以作为流体物性直接测定；涡黏性系数描述的是湍流涡团的平均输运效果，强烈依赖具体流动状态。

老师强调了两点：

1. $A$ 本身带有参数化/经验性质，往往需要观测或经验关系确定；
2. 水平和垂向的湍流混合强度差异很大，因此常分别使用

$$
A_H,\qquad A_V
$$

表示水平涡黏性系数与垂向涡黏性系数。

课堂口头举例提到，在较强湍流状态下，涡黏性系数可达到约 $10^{-4}\sim10^{-3}\,\mathrm{m^2/s}$ 的量级，明显大于分子运动黏性系数。

:::TIP
分子黏性与湍流摩擦的核心区别可以记成：

- 分子黏性：分子尺度的动量交换；
- 湍流摩擦：涡团尺度的动量交换；
- 数值海洋模型中，后者往往需要通过参数化闭合。
:::

---

## 4. 重力与惯性离心力

课堂把海洋中使用的“重力”理解为两部分的合成：

1. 地球对海水微团的万有引力；
2. 地球自转引起的惯性离心效应。

### 地球引力

对单位质量物体，地球引力加速度可写成：

$$
\mathbf g_{\mathrm{grav}}
=
-K\frac{M_E}{r^2}\frac{\mathbf r}{r}
$$

其中：

- $K$：万有引力常数；
- $M_E$：地球质量；
- $r$：到地心距离。

方向指向地心。

### 惯性离心效应

地球以角速度 $\Omega$ 自转。距地轴垂直距离为 $R$ 时，旋转坐标系中的离心加速度大小为

$$
\Omega^2R
$$

方向背离地轴。

所以课堂中的有效重力写成：

$$
\boxed{
\mathbf g
=
\mathbf g_{\mathrm{grav}}
+
\Omega^2\mathbf R
}
$$

其中

$$
R=r\cos\varphi
$$

$\varphi$ 为纬度。

![地球引力与惯性离心效应合成有效重力](/images/physical-oceanography/lesson6/gravity_effective.jpg)

由于离心效应远小于地球引力，有效重力仍大体指向地心附近，但会有小幅偏离，并随纬度和高度变化。

课件给出经验表达式：

$$
\begin{aligned}
g(\varphi,z)
=&\ 9.80616
-0.025928\cos 2\varphi\\
&+0.00069\cos^2 2\varphi
-0.000003086z
\end{aligned}
$$

单位为 $\mathrm{m/s^2}$。

实际计算中老师指出常取

$$
g\approx9.8\ \mathrm{m/s^2}
$$

或

$$
g\approx9.81\ \mathrm{m/s^2}
$$

即可。

---

## 5. 引潮力

天体引潮力主要包括：

- 月球引潮力；
- 太阳引潮力。

课堂重点用月球解释。

### 月球引潮力的来源

地球与月球围绕地月公共质心运动。对地球上的一个点，存在：

1. 月球的万有引力；
2. 地月系统公转所对应的惯性离心效应。

老师采用的定义是：

> **某点的月球引潮力 = 月球作用在该点上的引力 − 月球作用在地心上的引力。**

等价地，可以理解成该点月球引力与地月公转共同惯性离心项的合力。

设：

- $D$：地心到月心距离；
- $L$：地球表面某点 $P$ 到月心距离；
- $M_M$：月球质量。

月球对 $P$ 点的引力为：

$$
\mathbf K(P)
=
-K\frac{M_M}{L^2}rac{\mathbf L}{L}
$$

共同惯性离心项可写成：

$$
\mathbf N
=
K\frac{M_M}{D^2}\frac{\mathbf D}{D}
$$

于是 $P$ 点的月球引潮力：

$$
\boxed{
\mathbf F_M
=
K M_M
\left(
\frac{1}{D^2}\frac{\mathbf D}{D}
-
\frac{1}{L^2}\frac{\mathbf L}{L}
\right)
}
$$

![地球表面不同位置的月球引潮力方向](/images/physical-oceanography/lesson6/tidal_force.jpg)

### 为什么地球两侧都会形成潮隆起

- **近月点**：月球引力比地心处更强，合引潮力指向月球；
- **远月点**：月球引力比地心处更弱，减去地心共同加速度后，合引潮力背向月球；
- 与地月连线垂直的两侧，引潮力具有朝向地心的分量。

因此地球海洋会形成沿地月连线方向的两个潮隆起。

老师说明，这里只作引潮力的入门介绍，潮汐细节会在后续课程中继续展开。

---

## 6. 位势力

如果某个力对物体所做的功只取决于起点和终点，与具体路径无关，则该力属于位势力/保守力。

它可以写成某个标量位势 $\phi$ 的负梯度：

$$
\boxed{
\mathbf F_p=-\nabla\phi
}
$$

课堂指出：

- 地球引力；
- 惯性离心力；
- 有效重力；
- 引潮力

都可以用位势表示。

### 地球引力位势

取地球表面位势为零：

$$
\boxed{
\phi_g
=-K\frac{M_E}{r}+c
=
K M_E
\left(
\frac{1}{R_0}-\frac{1}{r}
\right)
}
$$

### 惯性离心位势

取地轴处位势为零：

$$
\boxed{
\phi_e=-\frac12\Omega^2R^2
}
$$

两者相加即可构成重力位势。

### 月球引潮势

课件给出：

$$
\phi_M
=
-KM_M
\left(
\frac1L-
\frac1D-
\frac{r}{D^2}\cos\theta
\right)
$$

太阳引潮势形式类似：

$$
\phi_S
=
-KM_S
\left(
\frac1{L_S}-
\frac1{D_S}-
\frac{r}{D_S^2}\cos\theta_S
\right)
$$

总天体引潮势：

$$
\boxed{
\phi_T=\phi_M+\phi_S
}
$$

对应天体引潮力：

$$
\boxed{
\mathbf F_T=-\nabla\phi_T
}
$$

![月球、太阳引潮势及总引潮力](/images/physical-oceanography/lesson6/tidal_potential.jpg)

位势写法的好处在于：多个保守力可以统一转成标量位势的梯度，后续运动方程会更紧凑。

---

# 六、旋转坐标系与科氏力

## 1. 惯性坐标系与地球坐标系

### 惯性坐标系

符合牛顿运动定律的参考系称为惯性参考系；固定在惯性参考系上的坐标系称为惯性坐标系。

### 固定在地球上的坐标系

地球在自转，因此固定在地球上的坐标系不断旋转，是**非惯性坐标系**。

要在地球坐标系中继续使用牛顿第二定律，需要把旋转带来的附加惯性效应写入方程。课堂重点出现两类：

- 惯性离心效应；
- 科里奥利效应（科氏效应）。

---

## 2. 速度变换

设：

- 惯性坐标系观察到的绝对速度为 $\mathbf u_a$；
- 地球旋转坐标系观察到的相对速度为 $\mathbf u$；
- 地球角速度为 $\boldsymbol\Omega$；
- 质点位置矢量为 $\mathbf R$。

旋转本身给质点附加速度

$$
\mathbf u_e
=
\boldsymbol\Omega\times\mathbf R
$$

因此：

$$
\boxed{
\mathbf u_a
=
\mathbf u
+
\boldsymbol\Omega\times\mathbf R
}
$$

![惯性坐标系与旋转坐标系中的速度关系](/images/physical-oceanography/lesson6/rotating_velocity.jpg)

更一般地，对任意向量 $\mathbf A$：

$$
\boxed{
\left(\frac{d\mathbf A}{dt}\right)_a
=
\left(\frac{d\mathbf A}{dt}\right)_r
+
\boldsymbol\Omega\times\mathbf A
}
$$

这里：

- 下标 $a$：惯性系中的绝对变化率；
- 下标 $r$：旋转系中的相对变化率。

### 为什么会多出 $\boldsymbol\Omega\times\mathbf A$

因为旋转坐标系的基向量本身也在转动。即使 $\mathbf A$ 在旋转坐标系中的三个分量暂时不变，其方向在惯性空间中仍会发生变化。

---

## 3. 加速度变换

从速度关系

$$
\mathbf u_a
=
\mathbf u+\boldsymbol\Omega\times\mathbf R
$$

出发，对惯性系时间求导：

$$
\left(\frac{d\mathbf u_a}{dt}\right)_a
=
\left(\frac{d}{dt}\right)_a
\left(
\mathbf u+\boldsymbol\Omega\times\mathbf R
\right)
$$

使用向量导数变换：

$$
\left(\frac{d}{dt}\right)_a
=
\left(\frac{d}{dt}\right)_r
+
\boldsymbol\Omega\times
$$

因此：

$$
\begin{aligned}
\mathbf a_a
=&\frac{d\mathbf u}{dt}
+
\frac{d\boldsymbol\Omega}{dt}\times\mathbf R
+
\boldsymbol\Omega\times\frac{d\mathbf R}{dt}\\
&+
\boldsymbol\Omega\times\mathbf u
+
\boldsymbol\Omega\times
(\boldsymbol\Omega\times\mathbf R)
\end{aligned}
$$

在旋转系中

$$
\frac{d\mathbf R}{dt}=\mathbf u
$$

所以两个相同的交叉项合并：

$$
\boxed{
\mathbf a_a
=
\frac{d\mathbf u}{dt}
+
\frac{d\boldsymbol\Omega}{dt}\times\mathbf R
+
2\boldsymbol\Omega\times\mathbf u
+
\boldsymbol\Omega\times
(\boldsymbol\Omega\times\mathbf R)
}
$$

![旋转坐标系中的加速度分解](/images/physical-oceanography/lesson6/rotating_acceleration.jpg)

四项依次对应：

1. $d\mathbf u/dt$：旋转坐标系中看到的相对加速度；
2. $d\boldsymbol\Omega/dt\times\mathbf R$：角速度变化产生的项；
3. $2\boldsymbol\Omega\times\mathbf u$：科氏项；
4. $\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf R)$：旋转造成的向心项。

地球自转角速度在本课程尺度下近似恒定，因此：

$$
\frac{d\boldsymbol\Omega}{dt}\approx0
$$

将旋转产生的项移到牛顿第二定律的“力”一侧后，对应的两个虚拟惯性加速度为：

### 科氏加速度

$$
\boxed{
\mathbf f_C
=-2\boldsymbol\Omega\times\mathbf u
}
$$

### 惯性离心加速度

$$
\boxed{
\mathbf f_{cf}
=-\boldsymbol\Omega\times
(\boldsymbol\Omega\times\mathbf R)
}
$$

其方向背离地轴。课堂前面已经把惯性离心效应并入有效重力 $\mathbf g$，因此后续重点保留科氏项。

---

## 4. 科氏力的分量形式

采用局地直角坐标：

- $x$：向东；
- $y$：向北；
- $z$：向上。

在纬度 $\varphi$ 处：

$$
\boldsymbol\Omega
=
(0,\Omega\cos\varphi,\Omega\sin\varphi)
$$

海流速度：

$$
\mathbf u=(u,v,w)
$$

单位质量物体所受科氏力为：

$$
\mathbf f_C
=-2\boldsymbol\Omega\times\mathbf u
$$

展开行列式：

$$
\boxed{
\mathbf f_C
=
(2\Omega w\cos\varphi-2\Omega v\sin\varphi)\mathbf i
+
2\Omega u\sin\varphi\mathbf j
-
2\Omega u\cos\varphi\mathbf k
}
$$

![科氏力在局地坐标系中的分量与方向](/images/physical-oceanography/lesson6/coriolis_force.jpg)

### 科氏力的方向性质

因为

$$
\mathbf f_C=-2\boldsymbol\Omega\times\mathbf u
$$

叉乘结果同时垂直于 $\boldsymbol\Omega$ 与 $\mathbf u$。

因此科氏力主要改变速度方向。课堂强调：

> **北半球中，科氏力的水平分量总是指向运动方向的右侧。**

---

## 5. 海洋中的常用近似

海洋中通常有：

$$
|w|\ll |u|,|v|
$$

所以 $x$ 方向科氏力中的

$$
2\Omega w\cos\varphi
$$

可以忽略。

同时，垂向科氏项

$$
-2\Omega u\cos\varphi
$$

与重力相比很小，课堂也将其忽略。

于是主要保留水平科氏项：

$$
F_x\approx-2\Omega v\sin\varphi
$$

$$
F_y\approx 2\Omega u\sin\varphi
$$

定义 **科氏参数**：

$$
\boxed{
f=2\Omega\sin\varphi
}
$$

则水平科氏力可写成：

$$
\boxed{
F_x=-fv,
\qquad
F_y=fu
}
$$

这说明科氏效应具有明确的纬度依赖：

- 赤道附近 $f\approx0$；
- 纬度越高，$|f|$ 越大。

---

# 七、本节公式总表

| 内容 | 公式 | 含义 |
|---|---|---|
| 随体导数 | $\displaystyle \frac{D\phi}{Dt}=\frac{\partial\phi}{\partial t}+(\mathbf u\cdot\nabla)\phi$ | 跟随流体质点看到的真实变化率 |
| 连续性方程 | $\displaystyle \frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf u)=0$ | 质量守恒 |
| 连续性方程随体形式 | $\displaystyle \frac{D\rho}{Dt}+\rho\nabla\cdot\mathbf u=0$ | 密度变化与体积膨胀率联系 |
| 不可压缩条件 | $\displaystyle \nabla\cdot\mathbf u=0$ | 微团体积不发生净膨胀/收缩 |
| 简化动量方程 | $\displaystyle \rho\frac{D\mathbf u}{Dt}=\rho\mathbf g+\nabla\cdot\boldsymbol\tau$ | 牛顿第二定律的流体形式 |
| 压强梯度力 | $\displaystyle \mathbf f_p=-\frac1\rho\nabla p$ | 指向低压方向 |
| 分子切应力 | $\displaystyle \boldsymbol\tau=\mu\frac{d\mathbf u}{dn}$ | 分子黏性引起的切向应力 |
| 运动黏性系数 | $\displaystyle \nu=\frac\mu\rho$ | 单位 $\mathrm{m^2/s}$ |
| 分子黏性力 | $\displaystyle \mathbf F_\nu=\nu\nabla^2\mathbf u$ | 常 $\nu$、各向同性情况下 |
| 湍流摩擦 | $\displaystyle \frac{\boldsymbol\tau}{\rho}=A\frac{d\mathbf u}{dn}$ | 用涡黏性系数表示湍流动量输运 |
| 有效重力 | $\displaystyle \mathbf g=\mathbf g_{\rm grav}+\Omega^2\mathbf R$ | 地球引力与离心效应合成 |
| 位势力 | $\displaystyle \mathbf F=-\nabla\phi$ | 保守力的统一表达 |
| 速度变换 | $\displaystyle \mathbf u_a=\mathbf u+\boldsymbol\Omega\times\mathbf R$ | 惯性系与旋转系速度关系 |
| 向量导数变换 | $\displaystyle \left(\frac{d\mathbf A}{dt}\right)_a=\left(\frac{d\mathbf A}{dt}\right)_r+\boldsymbol\Omega\times\mathbf A$ | 旋转基底引入附加变化 |
| 科氏力 | $\displaystyle \mathbf f_C=-2\boldsymbol\Omega\times\mathbf u$ | 旋转坐标系中的惯性力 |
| 科氏参数 | $\displaystyle f=2\Omega\sin\varphi$ | 科氏效应随纬度变化 |
| 水平科氏分量 | $\displaystyle F_x=-fv,\;F_y=fu$ | 海洋大尺度运动常用形式 |

---

# 八、整节课的逻辑串联

这节课最容易出现的问题，是公式很多以后失去整体结构。可以按照下面这条路线复习。

### 第一步：先问“跟着谁看变化？”

固定空间点使用

$$
\frac{\partial}{\partial t}
$$

跟随流体质点使用

$$
\frac{D}{Dt}
$$

两者通过迁移项连接：

$$
\frac{D}{Dt}
=
\frac{\partial}{\partial t}
+
\mathbf u\cdot\nabla
$$

### 第二步：质量不能凭空产生或消失

因此得到：

$$
\frac{\partial\rho}{\partial t}
+
\nabla\cdot(\rho\mathbf u)=0
$$

对不可压缩海水：

$$
\nabla\cdot\mathbf u=0
$$

### 第三步：动量改变一定来源于合力

从

$$
\frac{D\mathbf P}{Dt}=\sum\mathbf F
$$

出发，经移动体积求导和高斯定理，把动量方程转成局地微分形式。

连续性方程在这里再次发挥关键作用：它恰好消去展开后多出来的密度输运项，留下

$$
\rho\frac{D\mathbf u}{Dt}
$$

也就是“质量密度 × 流体质点加速度”。

### 第四步：把海洋中的各种力一个个放进去

本节已经整理出：

- 压强梯度力：$-\nabla p/\rho$；
- 分子/湍流摩擦力；
- 有效重力；
- 引潮力；
- 科氏力。

如果把本节已经得到的各项仅作结构性汇总，可以写成：

$$
\frac{D\mathbf u}{Dt}
=
-\frac1\rho\nabla p
+\mathbf g
+\mathbf F_T
+\mathbf F_{\rm friction}
-2\boldsymbol\Omega\times\mathbf u
$$

其中课堂已经把惯性离心效应并入 $\mathbf g$；摩擦项可根据分子黏性或湍流参数化采用不同表达。

:::TIP
复习第三章时，建议始终把运动方程理解成一句话：

> **左边描述海水微团怎样加速，右边逐项回答“是谁在推它”。**

这样后面再加入静力近似、地转平衡、尺度分析时，每一步都会自然很多。
:::
