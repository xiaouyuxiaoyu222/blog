---
title: Oceanography-Lesson7：海水运动基本方程组：动量方程、科氏力与盐量扩散方程
published: 2026-10-10
description: 动量方程完整推导、作用在海水微团上的外力、旋转坐标系与科氏力、直角坐标系动量方程、连续方程与盐量扩散方程
tags: [物理海洋学]
category: 课程笔记
draft: false
---

:::WARNING
**考试 / 作业提示**

- **考试高频**：老师明确提醒，**直角坐标系下 $x,y,z$ 三个方向的动量方程很可能要求现场写出**。重点应放在“从矢量式展开”的逻辑，尤其是对流项 $(\mathbf V\cdot\nabla)\mathbf V$、科氏项和拉普拉斯项，避免只靠死记。
- **本节暂无作业**：老师在下课前说明，准备等这一部分整体讲完后再统一布置作业。
:::

> 录音为机器转写，其中“科室力 / 引朝历 / 年度”等词存在识别误差。以下笔记以课件中的标准术语统一写作 **科氏力 / 引潮力 / 盐度（盐量）**，并按老师课堂推导补全中间数学步骤。

## 概述

这一节课可以分成两大部分：

1. **完成并整理动量方程**：从牛顿第二定律出发，用莱布尼兹公式（控制体形式）与高斯定理得到局地动量方程；随后逐项讨论压强梯度力、摩擦力、重力、引潮力以及旋转地球坐标系中的科氏力，并最终写成直角坐标系下的三个分量方程。
2. **进入第四章“海水基本方程组和边界条件”**：回顾质量守恒得到连续方程，再把完全相同的“控制体守恒”思路推广到盐量守恒，得到盐量扩散方程。

本节的主线可以压缩成：

> **守恒定律 → 控制体积分式 → 高斯定理 → 任意控制体 → 局地方程 → 利用连续方程化简。**

![流体运动基本方程的守恒定律框架](/images/physical-oceanography/lesson7/conservation_laws_framework.jpg)

课件给出的整体框架是：

- 动量守恒 $\rightarrow$ 运动方程（Navier–Stokes 方程）
- 质量守恒 $\rightarrow$ 连续方程
- 盐量守恒 $\rightarrow$ 盐量扩散方程
- 能量守恒 $\rightarrow$ 热传导方程；机械能守恒还可导出波动方程
- 角动量守恒 $\rightarrow$ 涡度守恒方程

本节实际讲到 **连续方程与盐量扩散方程**；热传导方程、边界条件与时间平均方程留待后续课程。

---

## 目录

- [一、从牛顿第二定律推导动量方程](#一从牛顿第二定律推导动量方程)
  - [1. 系统总动量](#1-系统总动量)
  - [2. 莱布尼兹公式：为什么会出现“局地变化 + 通量”](#2-莱布尼兹公式为什么会出现局地变化--通量)
  - [3. 合外力：体积力与表面力](#3-合外力体积力与表面力)
  - [4. 从积分式到局地动量方程](#4-从积分式到局地动量方程)
  - [5. 利用连续方程化简](#5-利用连续方程化简)
- [二、作用在海水微团上的力](#二作用在海水微团上的力)
  - [1. 压强梯度力](#1-压强梯度力)
  - [2. 摩擦力：分子粘性与湍流摩擦](#2-摩擦力分子粘性与湍流摩擦)
  - [3. 重力：地心引力与惯性离心力的合力](#3-重力地心引力与惯性离心力的合力)
  - [4. 引潮力与位势力](#4-引潮力与位势力)
- [三、旋转地球坐标系与科氏力](#三旋转地球坐标系与科氏力)
  - [1. 为什么地球坐标系不是惯性系](#1-为什么地球坐标系不是惯性系)
  - [2. 速度变换](#2-速度变换)
  - [3. 加速度变换的逐步推导](#3-加速度变换的逐步推导)
  - [4. 科氏力与科氏参数](#4-科氏力与科氏参数)
- [四、最终动量方程](#四最终动量方程)
  - [1. 矢量形式](#1-矢量形式)
  - [2. 直角坐标系三个分量](#2-直角坐标系三个分量)
  - [3. 两个最容易写错的微分算子](#3-两个最容易写错的微分算子)
- [五、第四章：海水运动基本方程组](#五第四章海水运动基本方程组)
  - [1. 连续方程的重新推导](#1-连续方程的重新推导)
  - [2. 不可压缩与定常的区别](#2-不可压缩与定常的区别)
- [六、盐量扩散方程](#六盐量扩散方程)
  - [1. 盐量守恒的物理图像](#1-盐量守恒的物理图像)
  - [2. 控制体积分式](#2-控制体积分式)
  - [3. 化成局地方程](#3-化成局地方程)
  - [4. 用连续方程化简](#4-用连续方程化简)
  - [5. Fick 型扩散关系与最终方程](#5-fick-型扩散关系与最终方程)
- [七、本节最核心的逻辑链](#七本节最核心的逻辑链)

---

## 一、从牛顿第二定律推导动量方程

### 1. 系统总动量

牛顿第二定律写成动量形式：

$$
\frac{D\mathbf P}{Dt}=\sum \mathbf F
$$

对于连续海水，不能再写成单个质点的 $m\mathbf V$，要把每个微小体积 $dV$ 的动量累加起来：

$$
d\mathbf P=\rho\mathbf V\,dV
$$

所以系统总动量为

$$
\boxed{\mathbf P=\iiint_{V(t)}\rho\mathbf V\,dV}
$$

这里 $V(t)$ 随流体运动，因此积分区域本身随时间变化。

![系统动量、莱布尼兹公式与高斯定理](/images/physical-oceanography/lesson7/momentum_reynolds.jpg)

### 2. 莱布尼兹公式：为什么会出现“局地变化 + 通量”

对随时间变化的流体区域求导，不能只把偏导数直接放进积分号。课堂中用莱布尼兹公式把总变化分为两部分：

$$
\frac{D}{Dt}\iiint_{V(t)}\rho\mathbf V\,dV
=
\iiint_V\frac{\partial(\rho\mathbf V)}{\partial t}\,dV
+
\iint_A\rho\mathbf V(\mathbf V\cdot d\mathbf A)
$$

两项分别表示：

- $\displaystyle \iiint_V\frac{\partial(\rho\mathbf V)}{\partial t}dV$：**固定空间内动量自身随时间的变化**；
- $\displaystyle \iint_A\rho\mathbf V(\mathbf V\cdot d\mathbf A)$：**动量随海水穿过边界流进、流出的净通量**。

这就是本节反复出现的核心结构：

> **一个守恒量在控制体内的变化 = 局地变化 + 由边界输运造成的变化。**

第二项是面积分，而后面要和体积力一起相加，因此利用高斯定理：

$$
\iint_A\rho\mathbf V(\mathbf V\cdot d\mathbf A)
=
\iiint_V\nabla\cdot(\rho\mathbf V\mathbf V)\,dV
$$

于是

$$
\boxed{
\frac{D\mathbf P}{Dt}
=
\iiint_V
\left[
\frac{\partial(\rho\mathbf V)}{\partial t}
+\nabla\cdot(\rho\mathbf V\mathbf V)
\right]dV
}
$$

:::TIP
$\rho\mathbf V\mathbf V$ 可以理解成“**动量通量张量**”：流体以速度 $\mathbf V$ 穿过边界，同时携带单位体积动量 $\rho\mathbf V$。
:::

### 3. 合外力：体积力与表面力

课堂把作用在海水微团上的力分为两类：

#### 体积力 / 质量力

作用于组成微团的全部质量，大小与质量或体积成正比，例如重力、引潮力：

$$
\mathbf G=\iiint_V\rho\mathbf g\,dV
$$

#### 表面力 / 应力

由周围介质通过微团表面施加，例如压力、摩擦剪切力。若应力张量为 $\boldsymbol\tau$：

$$
\mathbf F_s=\iint_A\boldsymbol\tau\cdot d\mathbf A
$$

再次用高斯定理：

$$
\mathbf F_s=\iiint_V\nabla\cdot\boldsymbol\tau\,dV
$$

因此牛顿第二定律成为

$$
\iiint_V
\left[
\frac{\partial(\rho\mathbf V)}{\partial t}
+\nabla\cdot(\rho\mathbf V\mathbf V)
-\rho\mathbf g
-\nabla\cdot\boldsymbol\tau
\right]dV=0
$$

### 4. 从积分式到局地动量方程

由于控制体 $V$ 的大小和形状可以任意选取，要让上式对**任意** $V$ 都成立，只能要求被积函数处处为零：

$$
\boxed{
\frac{\partial(\rho\mathbf V)}{\partial t}
+\nabla\cdot(\rho\mathbf V\mathbf V)
=\rho\mathbf g+\nabla\cdot\boldsymbol\tau
}
$$

这一步是“积分守恒律 $\rightarrow$ 局地微分方程”的关键。

### 5. 利用连续方程化简

左边看起来还比较复杂，课堂将它逐项展开：

$$
\frac{\partial(\rho\mathbf V)}{\partial t}
=
\rho\frac{\partial\mathbf V}{\partial t}
+\mathbf V\frac{\partial\rho}{\partial t}
$$

以及

$$
\nabla\cdot(\rho\mathbf V\mathbf V)
=
\rho(\mathbf V\cdot\nabla)\mathbf V
+\mathbf V\,\nabla\cdot(\rho\mathbf V)
$$

两式相加：

$$
\begin{aligned}
&\frac{\partial(\rho\mathbf V)}{\partial t}
+\nabla\cdot(\rho\mathbf V\mathbf V)\\
=&\rho\left[
\frac{\partial\mathbf V}{\partial t}
+(\mathbf V\cdot\nabla)\mathbf V
\right]
+\mathbf V\left[
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)
\right]
\end{aligned}
$$

而质量连续方程给出

$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf V)=0
$$

所以第二个方括号整体消失，留下

$$
\boxed{
\rho\frac{D\mathbf V}{Dt}
=
\rho\mathbf g+\nabla\cdot\boldsymbol\tau
}
$$

其中

$$
\frac{D\mathbf V}{Dt}
=
\frac{\partial\mathbf V}{\partial t}
+(\mathbf V\cdot\nabla)\mathbf V
$$

![动量项展开后利用连续方程消去一组项](/images/physical-oceanography/lesson7/momentum_continuity_simplification.jpg)

:::TIP
这一段推导最值得掌握的不是最后一行，而是一个反复使用的技巧：

> **先把乘积展开，再主动寻找连续方程 $\partial_t\rho+\nabla\cdot(\rho\mathbf V)=0$。**

后面的盐量守恒推导还会完全复用这个思路。
:::

---

## 二、作用在海水微团上的力

老师强调：前面推导得到的是“骨架”，真正决定海水怎样运动的是动量方程右端具体有哪些力。

### 1. 压强梯度力

压强 $p$ 本身是标量。一个微小立方体相对两面压强不同，才会产生净力。

以 $x$ 方向为例，微团尺寸为 $\Delta x\Delta y\Delta z$。两侧压力之差可近似为

$$
F_x
\approx
-\frac{\partial p}{\partial x}\Delta x\Delta y\Delta z
$$

三个方向合起来：

$$
\mathbf F_p
=
-\nabla p\,\Delta V
$$

微团质量为 $\rho\Delta V$，所以**单位质量**所受压强梯度力：

$$
\boxed{
\mathbf f_p=-\frac{1}{\rho}\nabla p
}
$$

![压强梯度力的微团示意与公式](/images/physical-oceanography/lesson7/pressure_gradient_force.jpg)

为什么有负号？因为 $\nabla p$ 指向压强增大最快的方向，而净压力推动流体从**高压向低压**，方向与 $\nabla p$ 相反。

课堂总结的三个性质：

- 压强梯度力是推动海水运动最根本的动力之一；
- 它垂直于等压面，指向压强减小方向；
- 压强梯度既能产生运动，也能因海水运动造成的密度或海面变化而形成。

### 2. 摩擦力：分子粘性与湍流摩擦

#### 分子粘性力

若相邻两层流体速度不同，分子运动会把动量从快层传给慢层。牛顿粘性定律写成

$$
\tau=\mu\frac{du}{dn}
$$

其中：

- $\tau$：切应力；
- $\mu$：动力粘性系数；
- $n$：界面法向坐标。

若只考虑 $u=u(z)$：

$$
\tau_{xz}=\mu\frac{\partial u}{\partial z}
$$

而单位质量微团受到的 $x$ 向粘性力是应力的空间变化：

$$
F_x
=
\frac{1}{\rho}\frac{\partial\tau_{xz}}{\partial z}
=
\frac{\mu}{\rho}\frac{\partial^2u}{\partial z^2}
$$

定义运动粘性系数

$$
\nu=\frac{\mu}{\rho}
$$

得到

$$
F_x=\nu\frac{\partial^2u}{\partial z^2}
$$

三维形式：

$$
\boxed{\mathbf f_\nu=\nu\nabla^2\mathbf V}
$$

课件给出的海水运动粘性系数量级：

$$
\nu(0^\circ\mathrm C)\approx1.787\times10^{-6}\ \mathrm{m^2/s}
$$

$$
\nu(20^\circ\mathrm C)\approx1.004\times10^{-6}\ \mathrm{m^2/s}
$$

:::TIP
为什么出现二阶导数？

1. **应力**取决于速度的一阶梯度：$\tau\sim \partial u/\partial z$；
2. **净力**取决于应力在空间上的一阶梯度：$F\sim\partial\tau/\partial z$；
3. 两次一阶导数叠加，就得到 $\partial^2u/\partial z^2$。
:::

#### 湍流摩擦

大洋内部大尺度环流中，分子粘性通常太弱；海水稍强运动就会出现大量不同尺度的涡旋，涡旋之间同样会交换动量。

课堂采用“类比牛顿粘性定律”的参数化方法，引入**涡动粘性系数** $A$：

$$
\frac{\tau}{\rho}=A\frac{du}{dn}
$$

若只考虑垂向变化：

$$
\boxed{
F_x=\frac{\partial}{\partial z}
\left(A\frac{\partial u}{\partial z}\right)
}
$$

![湍流摩擦与涡动粘性系数](/images/physical-oceanography/lesson7/turbulent_friction.jpg)

这里不能一般性地写成 $A\partial^2u/\partial z^2$，因为 $A$ 本身往往随空间变化。

### 3. 重力：地心引力与惯性离心力的合力

课件中的“重力”采用有效重力的含义：

$$
\boxed{
\mathbf g=\mathbf G+\Omega^2\mathbf R
}
$$

其中：

- $\mathbf G$：地心引力；
- $\Omega^2\mathbf R$：因地球自转引入的惯性离心效应；
- $\mathbf R$：到地球自转轴的垂直位置矢量。

![地心引力与惯性离心力合成有效重力](/images/physical-oceanography/lesson7/effective_gravity.jpg)

课件给出有效重力随纬度 $\varphi$ 与高度 $z$ 的近似：

$$
\begin{aligned}
g(\varphi,z)=&\ 9.80616
-0.025928\cos2\varphi
+0.00069\cos^22\varphi\\
&-0.000003086z
\qquad(\mathrm{m/s^2})
\end{aligned}
$$

课堂计算中通常直接取

$$
g\approx9.81\ \mathrm{m/s^2}
$$

### 4. 引潮力与位势力

天体引潮力主要来自月球与太阳。课堂强调，引潮力应理解成：

> **天体对某海水微团的引力 − 天体对地球质心的引力。**

在“地球—月球共同公转”的参考系中，可以等价看成月球引力与共同公转惯性离心力的合力。

对于地球上一点 $P$，月球引力与共同公转离心项可写成

$$
\mathbf F_M
=
K M_M\left(
\frac{1}{D^2}\frac{\mathbf D}{D}
-
\frac{1}{L^2}\frac{\mathbf L}{L}
\right)
$$

其中 $D$ 是地心到月球距离，$L$ 是点 $P$ 到月球距离。

![不同位置的月球引潮力方向](/images/physical-oceanography/lesson7/tidal_force_distribution.jpg)

方向上：

- 近月点：引潮力指向月球；
- 远月点：引潮力背向月球；
- 与地月连线垂直的两侧：引潮力大体指向地心。

因此潮汐是一个空间上方向、大小都随位置变化的周期性强迫。

#### 位势力

若一个力所做的功只取决于初末位置，与路径无关，就可以写成某个标量位势的负梯度：

$$
\boxed{\mathbf F_p=-\nabla\phi}
$$

课堂列出的重力、惯性离心力和引潮力都属于位势力。

月球引潮势的课堂表达为

$$
\phi_M
=-K M_M\left(
\frac{1}{L}-\frac{1}{D}-\frac{r}{D^2}\cos\theta
\right)
$$

![月球引潮势的组成](/images/physical-oceanography/lesson7/tidal_potential.jpg)

位势本身是标量，取梯度后才得到矢量力。把位势引入方程的主要好处是**方便后续数学处理**。

---

## 三、旋转地球坐标系与科氏力

### 1. 为什么地球坐标系不是惯性系

**惯性坐标系**是牛顿定律可以直接成立的参考系。固定在地球上的坐标系随地球自转，因此属于旋转的非惯性坐标系。

要继续在地球坐标系里使用牛顿第二定律，需要把旋转产生的惯性效应显式加入方程。课堂重点讨论：

- 惯性离心效应：并入有效重力；
- 科氏效应：保留为单独的科氏力。

### 2. 速度变换

设：

- 下标 $a$：惯性坐标系（absolute）；
- 无下标：随地球旋转坐标系中的相对量；
- $\boldsymbol\Omega$：地球自转角速度；
- $\mathbf R$：质点相对地轴/地心的位置矢量。

旋转刚体本身在该位置的速度为

$$
\boldsymbol\Omega\times\mathbf R
$$

所以绝对速度为

$$
\boxed{
\mathbf V_a
=
\mathbf V+\boldsymbol\Omega\times\mathbf R
}
$$

这就是“相对运动 + 坐标系本身运动”。

### 3. 加速度变换的逐步推导

对任意矢量 $\mathbf A$，惯性系与旋转系的时间导数关系为

$$
\boxed{
\left(\frac{d\mathbf A}{dt}\right)_a
=
\left(\frac{d\mathbf A}{dt}\right)_r
+\boldsymbol\Omega\times\mathbf A
}
$$

现在令 $\mathbf A=\mathbf V_a$：

$$
\frac{d\mathbf V_a}{dt}
=
\left(\frac d{dt}\right)_r
(\mathbf V+\boldsymbol\Omega\times\mathbf R)
+
\boldsymbol\Omega\times
(\mathbf V+\boldsymbol\Omega\times\mathbf R)
$$

第一部分展开：

$$
\left(\frac d{dt}\right)_r\mathbf V
=
\frac{d\mathbf V}{dt}
$$

$$
\left(\frac d{dt}\right)_r
(\boldsymbol\Omega\times\mathbf R)
=
\frac{d\boldsymbol\Omega}{dt}\times\mathbf R
+
\boldsymbol\Omega\times\frac{d\mathbf R}{dt}
$$

而在旋转系里

$$
\frac{d\mathbf R}{dt}=\mathbf V
$$

所以这一部分给出

$$
\frac{d\boldsymbol\Omega}{dt}\times\mathbf R
+\boldsymbol\Omega\times\mathbf V
$$

第二部分展开：

$$
\boldsymbol\Omega\times\mathbf V
+
\boldsymbol\Omega\times
(\boldsymbol\Omega\times\mathbf R)
$$

把两部分合并：

$$
\boxed{
\mathbf a_a
=
\frac{d\mathbf V}{dt}
+
\frac{d\boldsymbol\Omega}{dt}\times\mathbf R
+
2\boldsymbol\Omega\times\mathbf V
+
\boldsymbol\Omega\times
(\boldsymbol\Omega\times\mathbf R)
}
$$

![旋转坐标系与惯性坐标系的加速度变换](/images/physical-oceanography/lesson7/rotating_frame_acceleration.jpg)

对稳定自转的地球：

$$
\frac{d\boldsymbol\Omega}{dt}\approx0
$$

因此只保留：

- 相对加速度 $d\mathbf V/dt$；
- $2\boldsymbol\Omega\times\mathbf V$：科氏项；
- $\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf R)$：离心项。

将后两项移到旋转系牛顿方程右端后，惯性力方向取反，因此单位质量科氏力为

$$
\boxed{
\mathbf f_C=-2\boldsymbol\Omega\times\mathbf V
}
$$

### 4. 科氏力与科氏参数

取局地直角坐标：

- $x$：向东；
- $y$：向北；
- $z$：竖直向上。

地球自转角速度可分解为

$$
\boldsymbol\Omega
=(0,\Omega\cos\varphi,\Omega\sin\varphi)
$$

海流速度

$$
\mathbf V=(u,v,w)
$$

完整科氏项中会出现 $\cos\varphi$ 与 $\sin\varphi$ 两组分量。课堂采用大尺度海洋中的常见简化：

1. 垂向速度 $w$ 远小于水平速度，含 $w$ 的项忽略；
2. 垂向科氏分量与重力相比很小，也忽略。

最终只保留水平上的 $\sin\varphi$ 项，定义**科氏参数**：

$$
\boxed{f=2\Omega\sin\varphi}
$$

![科氏力分量与科氏参数](/images/physical-oceanography/lesson7/coriolis_components.jpg)

在北半球，科氏力水平分量指向运动方向右侧；南半球方向相反。

:::WARNING
**科氏项的正负号不要脱离“放在哪一侧”单独记。**

本课最终统一使用

$$
+f\mathbf k\times\mathbf V_H
$$

放在动量方程**左边**。由于

$$
\mathbf k\times(u\mathbf i+v\mathbf j)
=-v\mathbf i+u\mathbf j
$$

所以左边分量必然是：

- $x$ 方程：$-fv$
- $y$ 方程：$+fu$

如果把科氏项移到右边，符号整体反过来。
:::

---

## 四、最终动量方程

### 1. 矢量形式

把压强梯度力、有效重力、科氏力、分子粘性力和引潮力合在一起，课件先给出一般形式：

$$
\frac{\partial\mathbf V}{\partial t}
+(\mathbf V\cdot\nabla)\mathbf V
=
\mathbf g
-2\boldsymbol\Omega\times\mathbf V
-\frac{1}{\rho}\nabla p
+\nu\nabla^2\mathbf V
-\nabla\phi_T
$$

![完整动量方程的矢量形式](/images/physical-oceanography/lesson7/momentum_vector_form.jpg)

本节随后暂时搁置引潮项，并把保留的水平科氏项移到左边：

$$
\boxed{
\frac{\partial\mathbf V}{\partial t}
+(\mathbf V\cdot\nabla)\mathbf V
+f\mathbf k\times\mathbf V_H
=
-\frac1\rho\nabla p
+\mathbf g
+\nu\nabla^2\mathbf V
}
$$

### 2. 直角坐标系三个分量

这是老师明确提醒的考试重点。

先记

$$
\mathbf V=(u,v,w)
$$

以及

$$
\mathbf V\cdot\nabla
=
 u\frac{\partial}{\partial x}
+v\frac{\partial}{\partial y}
+w\frac{\partial}{\partial z}
$$

#### $x$ 方向

$$
\boxed{
\frac{\partial u}{\partial t}
+u\frac{\partial u}{\partial x}
+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}
-fv
=
-\frac1\rho\frac{\partial p}{\partial x}
+\nu\left(
\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}
+\frac{\partial^2u}{\partial z^2}
\right)
}
$$

#### $y$ 方向

$$
\boxed{
\frac{\partial v}{\partial t}
+u\frac{\partial v}{\partial x}
+v\frac{\partial v}{\partial y}
+w\frac{\partial v}{\partial z}
+fu
=
-\frac1\rho\frac{\partial p}{\partial y}
+\nu\left(
\frac{\partial^2v}{\partial x^2}
+\frac{\partial^2v}{\partial y^2}
+\frac{\partial^2v}{\partial z^2}
\right)
}
$$

#### $z$ 方向

$$
\boxed{
\frac{\partial w}{\partial t}
+u\frac{\partial w}{\partial x}
+v\frac{\partial w}{\partial y}
+w\frac{\partial w}{\partial z}
=
-\frac1\rho\frac{\partial p}{\partial z}
-g
+\nu\left(
\frac{\partial^2w}{\partial x^2}
+\frac{\partial^2w}{\partial y^2}
+\frac{\partial^2w}{\partial z^2}
\right)
}
$$

这里：

- 水平两个方向没有直接重力分量；
- $z$ 轴向上，所以重力为 $-g$；
- 本课的传统近似下，垂向科氏项已忽略。

### 3. 两个最容易写错的微分算子

#### 对流算子

$$
\boxed{
\mathbf V\cdot\nabla
=
 u\partial_x+v\partial_y+w\partial_z
}
$$

例如它作用在 $u$ 上：

$$
(\mathbf V\cdot\nabla)u
=u\frac{\partial u}{\partial x}
+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}
$$

:::WARNING
即使写的是 **$x$ 方向动量方程**，对流项仍然同时含 $u,v,w$。因为海水可以从 $x,y,z$ 三个方向把不同的 $u$ 输运到这个位置。
:::

#### 拉普拉斯算子

$$
\boxed{
\nabla^2
=
\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2}
}
$$

例如

$$
\nabla^2u
=
\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}
+\frac{\partial^2u}{\partial z^2}
$$

**现场写分量方程最稳妥的办法**：先把矢量式写出来，再按“局地项 → 对流项 → 科氏项 → 压强 → 重力 → 摩擦”的顺序逐项取分量。

---

## 五、第四章：海水运动基本方程组

课件第四章分为：

1. 海水运动基本方程组；
2. 边界条件；
3. 时间平均的基本方程和边界条件。

老师说明：当前推导的方程首先针对较理想的瞬时流动；后续为了处理真实海洋中的湍流随机性，会进行时间平均。

### 1. 连续方程的重新推导

取一个**固定几何控制体** $\tau$，边界为闭合曲面 $\sigma$，外法向速度分量为

$$
V_n=\mathbf V\cdot\mathbf n
$$

质量守恒说：

> 控制体内质量的增加率 = 通过边界流入的净质量通量。

由于 $V_n$ 规定向外为正，向外流出会减少内部质量，因此：

$$
\iiint_\tau\frac{\partial\rho}{\partial t}\,d\tau
=
-\iint_\sigma \rho V_n\,d\sigma
$$

用高斯定理：

$$
\iint_\sigma \rho V_n\,d\sigma
=
\iiint_\tau\nabla\cdot(\rho\mathbf V)\,d\tau
$$

所以

$$
\iiint_\tau
\left[
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)
\right]d\tau=0
$$

由于 $\tau$ 任意：

$$
\boxed{
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)=0
}
$$

将散度项展开：

$$
\nabla\cdot(\rho\mathbf V)
=\mathbf V\cdot\nabla\rho+\rho\nabla\cdot\mathbf V
$$

得到另一种形式：

$$
\boxed{
\frac{D\rho}{Dt}+\rho\nabla\cdot\mathbf V=0
}
$$

![连续方程的两种形式](/images/physical-oceanography/lesson7/continuity_equation_forms.jpg)

这里：

- $\nabla\cdot(\rho\mathbf V)$：质量通量的散度，表示单位体积的净流出程度；
- $\nabla\cdot\mathbf V$：速度散度，反映流体微团在运动中的相对膨胀 / 压缩。

### 2. 不可压缩与定常的区别

#### 不可压缩

对随流体运动的微团：

$$
\frac{D\rho}{Dt}=0
$$

由连续方程立即得到

$$
\boxed{\nabla\cdot\mathbf V=0}
$$

在直角坐标系：

$$
\boxed{
\frac{\partial u}{\partial x}
+\frac{\partial v}{\partial y}
+\frac{\partial w}{\partial z}=0
}
$$

海洋的大多数动力学问题常采用这一近似。

#### 定常

定常仅表示固定位置处不随时间变化，例如密度满足

$$
\frac{\partial\rho}{\partial t}=0
$$

此时连续方程变成

$$
\nabla\cdot(\rho\mathbf V)=0
$$

:::WARNING
“定常”与“不可压缩”是两个不同条件：

- 定常约束的是**时间偏导数**；
- 不可压缩约束的是**随体密度变化**。
:::

---

## 六、盐量扩散方程

### 1. 盐量守恒的物理图像

定义：

- $s$：单位质量海水中所含的盐量，课堂中近似作为盐度；
- $\rho s$：单位体积海水中所含的盐量。

盐量守恒定律：

> 溶于海水中的盐，在海水运动中不会自动产生，也不会自动消失。

![盐量、盐量守恒与两种输运机制](/images/physical-oceanography/lesson7/salt_conservation_definition.jpg)

和质量守恒相比，盐量进入控制体有**两种机制**：

1. **平流 / 对流输运**：海水本身带着盐流进、流出；
2. **分子扩散**：即使没有整体流动，只要盐度有梯度，盐也会从高盐度向低盐度扩散。

这正是盐量方程比连续方程多出一个扩散通量项的原因。

### 2. 控制体积分式

仍取固定控制体 $\tau$，边界 $\sigma$。

控制体内盐量变化率：

$$
\iiint_\tau
\frac{\partial(\rho s)}{\partial t}\,d\tau
$$

平流造成的向外盐通量：

$$
\iint_\sigma \rho s V_n\,d\sigma
$$

再定义 $\mathbf S$ 为**盐浓度扩散通量密度**，法向分量

$$
S_n=\mathbf S\cdot\mathbf n
$$

于是扩散造成的向外盐通量：

$$
\iint_\sigma S_n\,d\sigma
$$

因为法向规定向外为正，而我们计算控制体内盐量增加，所以二者都带负号：

$$
\boxed{
\iiint_\tau
\frac{\partial(\rho s)}{\partial t}\,d\tau
=
-\iint_\sigma\rho sV_n\,d\sigma
-\iint_\sigma S_n\,d\sigma
}
$$

![盐量守恒控制体：平流通量与分子扩散通量](/images/physical-oceanography/lesson7/salt_budget_control_volume.jpg)

### 3. 化成局地方程

两个面积分都用高斯定理：

$$
\iint_\sigma\rho sV_n\,d\sigma
=
\iiint_\tau\nabla\cdot(\rho s\mathbf V)\,d\tau
$$

$$
\iint_\sigma S_n\,d\sigma
=
\iiint_\tau\nabla\cdot\mathbf S\,d\tau
$$

因此

$$
\iiint_\tau
\left[
\frac{\partial(\rho s)}{\partial t}
+\nabla\cdot(\rho s\mathbf V)
+\nabla\cdot\mathbf S
\right]d\tau=0
$$

控制体任意，所以：

$$
\boxed{
\frac{\partial(\rho s)}{\partial t}
+\nabla\cdot(\rho s\mathbf V)
+\nabla\cdot\mathbf S=0
}
$$

![盐量守恒的局地方程](/images/physical-oceanography/lesson7/salt_local_conservation.jpg)

### 4. 用连续方程化简

这是本节第二次出现同样的技巧。

先展开第一项：

$$
\frac{\partial(\rho s)}{\partial t}
=
\rho\frac{\partial s}{\partial t}
+s\frac{\partial\rho}{\partial t}
$$

再展开平流项：

$$
\nabla\cdot(\rho s\mathbf V)
=
\rho\mathbf V\cdot\nabla s
+s\nabla\cdot(\rho\mathbf V)
$$

代回：

$$
\rho\left(
\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
\right)
+s\left[
\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)
\right]
+\nabla\cdot\mathbf S=0
$$

方括号正是连续方程，所以为零：

$$
\rho\left(
\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
\right)
=-\nabla\cdot\mathbf S
$$

即

$$
\boxed{
\frac{Ds}{Dt}
=-\frac1\rho\nabla\cdot\mathbf S
}
$$

左边 $Ds/Dt$ 表示一个随海水移动的微团，其盐度随时间的变化；右边表示分子扩散通量的辐合 / 辐散。

### 5. Fick 型扩散关系与最终方程

盐总是从高盐度向低盐度扩散，因此扩散通量与盐度梯度反向：

$$
\boxed{\mathbf S=-k\nabla s}
$$

若 $k$ 近似常数：

$$
\nabla\cdot\mathbf S
=
-k\nabla\cdot(\nabla s)
=-k\nabla^2s
$$

其中

$$
\nabla^2s
=
\frac{\partial^2s}{\partial x^2}
+\frac{\partial^2s}{\partial y^2}
+\frac{\partial^2s}{\partial z^2}
$$

代回：

$$
\frac{Ds}{Dt}
=
\frac{k}{\rho}\nabla^2s
$$

定义分子盐量扩散系数

$$
k_D=\frac{k}{\rho}
$$

课件给出的量级约为

$$
k_D\approx1.1\times10^{-9}\ \mathrm{m^2/s}
$$

最终得到盐量扩散方程：

$$
\boxed{
\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
=k_D\nabla^2s
}
$$

![盐量扩散方程的最终形式](/images/physical-oceanography/lesson7/salt_diffusion_final.jpg)

物理意义非常清楚：

- $\partial s/\partial t$：固定位置盐度的局地变化；
- $\mathbf V\cdot\nabla s$：海流平流输运造成的变化；
- $k_D\nabla^2s$：分子扩散把盐度差异逐渐“抹平”。

---

## 七、本节最核心的逻辑链

### 1. 动量方程

$$
\text{牛顿第二定律}
\rightarrow
\text{控制体动量}
\rightarrow
\text{莱布尼兹公式}
\rightarrow
\text{高斯定理}
\rightarrow
\text{局地动量方程}
\rightarrow
\text{连续方程化简}
$$

得到

$$
\rho\frac{D\mathbf V}{Dt}
=
\text{各种单位体积力 / 表面力}
$$

再逐项加入压强梯度、摩擦、有效重力、科氏力与引潮力。

### 2. 旋转坐标系

$$
\mathbf V_a=\mathbf V+\boldsymbol\Omega\times\mathbf R
$$

进一步求导得到

$$
\mathbf a_a
=
\mathbf a_r
+2\boldsymbol\Omega\times\mathbf V
+\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf R)
$$

从而识别出科氏项与离心项，并在传统近似下定义

$$
f=2\Omega\sin\varphi
$$

### 3. 连续方程与盐量方程的共同模板

连续方程只有平流：

$$
\text{内部变化}
=
-\text{边界平流净流出}
$$

盐量方程多一个扩散：

$$
\text{内部盐量变化}
=
-\text{平流盐通量}
-\text{扩散盐通量}
$$

两者都经历：

$$
\boxed{
\text{面积分}
\xrightarrow{\text{高斯定理}}
\text{体积分}
\xrightarrow{\text{控制体任意}}
\text{局地微分方程}
}
$$

:::TIP
如果后续自学时只记一件事，记住老师这一整节真正反复训练的是：

> **先用守恒定律写“账本”，再用高斯定理把边界通量变成局地散度，最后利用已有守恒方程消项。**

掌握这个模板之后，热量守恒、示踪物输运以及更多海洋动力学方程都会更容易理解。
:::
