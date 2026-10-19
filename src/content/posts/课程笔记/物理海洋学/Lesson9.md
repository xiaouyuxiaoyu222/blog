---
title: 海水基本方程组和边界条件（三）——边界条件、湍流与时间平均
published: 2026-10-14
description: 复习海水基本方程组；系统推导自由海面与海底的运动学边界条件、海面盐度和温度边界条件、动力学应力连续条件；引入雷诺数、雷诺平均、雷诺应力及湍流盐热扩散，得到时间平均方程组与边界条件。
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 课堂提醒：作业与下节课提问

> **作业：老师明确表示本周仍然没有作业；计划下周讲完相关内容后布置第二次作业。** 截至本次录音，没有宣布第二次作业的具体题目、截止时间或分值。  
> **课堂提问：** 下节课将继续抽问①每个基本方程叫什么、每一项的物理意义；②各类边界条件的表达式及其物理意义。老师强调这部分是上半学期的重要基础。录音中未说明抽问是否单独计分。  
> **下节课内容：** 在理解每一项物理意义的基础上，根据尺度、研究区域与研究对象简化方程组（例如何时可以忽略某些科氏项、摩擦项、引潮力项）。

## 概述

本节属于课件**第四章「海水基本方程组和边界条件」**的继续讲授，逻辑可概括为：

1. **方程组描述海洋内部发生什么：** 海水如何受力、质量如何守恒、盐和热怎样输运。
2. **边界条件描述海洋边缘必须满足什么：** 水不能穿过固体海底；海面可随水流运动，也可能接受降水或蒸发；界面两侧的应力与热通量要满足平衡。
3. **真实海洋主要是湍流：** 将瞬时量分成时间平均量与脉动量，会出现新的脉动乘积项；用湍流输运系数将其参数化，才能继续使用可求解的平均方程。

> **本课最核心的一句话：** 在内部使用基本方程，在海面、海底和其他不连续界面施加边界条件；面对湍流，再对方程和边界条件作时间平均，并对新增的湍流通量进行闭合。

## 目录

- [一、基本方程组复习](#一基本方程组复习)
- [二、为什么需要边界条件](#二为什么需要边界条件)
- [三、运动学边界条件](#三运动学边界条件)
- [四、动力学边界条件](#四动力学边界条件)
- [五、温度边界条件与层流边界总结](#五温度边界条件与层流边界总结)
- [六、层流、湍流和雷诺数](#六层流湍流和雷诺数)
- [七、雷诺平均及其运算规则](#七雷诺平均及其运算规则)
- [八、基本方程组的时间平均化](#八基本方程组的时间平均化)
- [九、边界条件的时间平均化](#九边界条件的时间平均化)
- [十、重点对比、课件核对与自测](#十重点对比课件核对与自测)

---

## 一、基本方程组复习

### 1. 方程组与七个基本变量

在课程采用的层流模型中，基本未知量为

$$
\boxed{u,\;v,\;w,\;p,\;\rho,\;s,\;\theta}
$$

分别是三个速度分量、压强、密度、盐度和位温。对应**动量方程 3 个分量 + 连续性方程 1 个 + 盐度方程 1 个 + 温度方程 1 个 + 状态方程 1 个 = 7 个方程**。

![课件：海水运动基本方程组的矢量形式](/images/physical-oceanography/lesson9/slide_03.jpg)

$$
\begin{cases}
\displaystyle\frac{D\boldsymbol V}{Dt}=-\frac{1}{\rho}\nabla p-2\boldsymbol\Omega\times\boldsymbol V+\boldsymbol g+\gamma\Delta\boldsymbol V-\nabla\phi_T,\\[5pt]
\displaystyle\frac{D\rho}{Dt}+\rho\nabla\cdot\boldsymbol V=0,\\[5pt]
\displaystyle\frac{\partial s}{\partial t}+\boldsymbol V\cdot\nabla s=k_D\Delta s,\\[5pt]
\displaystyle\frac{\partial\theta}{\partial t}+\boldsymbol V\cdot\nabla\theta=k_\theta\Delta\theta,\\[5pt]
\rho=\rho(\theta,s,p).
\end{cases}
$$

这里 $\boldsymbol V=(u,v,w)$，$\gamma$ 为课件采用的黏性扩散系数记号（常写作运动黏度 $\nu=\mu/\rho$），$\phi_T$ 为引潮势，$\Delta=\nabla^2$ 是拉普拉斯算子。下文部分推导沿用课件以 $\mu/\rho$ 表示运动黏度的写法。

### 2. 连续性方程：两种写法为何等价

质量守恒的固定控制体形式为

$$
\boxed{\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\boldsymbol V)=0}
$$

对乘积项应用散度乘积法则：

$$
\nabla\cdot(\rho\boldsymbol V)
=\boldsymbol V\cdot\nabla\rho+\rho\nabla\cdot\boldsymbol V.
$$

所以

$$
\underbrace{\frac{\partial\rho}{\partial t}+\boldsymbol V\cdot\nabla\rho}_{D\rho/Dt}
+\rho\nabla\cdot\boldsymbol V=0,
$$

即

$$
\boxed{\frac{D\rho}{Dt}+\rho\nabla\cdot\boldsymbol V=0}.
$$

![课件：质量连续方程的两种表达](/images/physical-oceanography/lesson9/slide_05.jpg)

**课堂强调：两种写法的各项物理意义要对应起来。**

| 固定控制体（欧拉描述） | 随水运动的微团（随体描述） |
|---|---|
| $\partial\rho/\partial t$：固定位置的密度随时间变化 | $D\rho/Dt$：跟随海水微团看到的密度总变化 |
| $\nabla\cdot(\rho\boldsymbol V)$：单位体积的**净质量流出率**（按外法向通量取正） | $\nabla\cdot\boldsymbol V$：微团的相对体积膨胀率 |
| 密度变化与进出控制体的质量收支平衡 | 微团密度与体积变化共同保证质量守恒 |

注意：课件文字将质量通量散度解释为“净流入率”，应结合等式前的负号理解；按常规**散度为正代表净流出**。例如 $\partial\rho/\partial t=-\nabla\cdot(\rho\boldsymbol V)$，净流出增加时控制体密度下降。

### 3. 动量方程：逐项对应哪种力

$$
\underbrace{\frac{D\boldsymbol V}{Dt}}_{\text{加速度}}=
\underbrace{-\frac{1}{\rho}\nabla p}_{\text{压强梯度力/单位质量}}
\underbrace{-2\boldsymbol\Omega\times\boldsymbol V}_{\text{科氏力}}
+\underbrace{\boldsymbol g}_{\text{重力}}
+\underbrace{\gamma\Delta\boldsymbol V}_{\text{黏性摩擦}}
\underbrace{-\nabla\phi_T}_{\text{引潮力}}.
$$

- 左侧 $D\boldsymbol V/Dt$：速度对时间的**随体导数**，包括局地加速度与平流加速度。
- $-\nabla p/\rho$：海水受压强梯度力，指向压强降低的方向。
- $-2\boldsymbol\Omega\times\boldsymbol V$：地球自转产生的科氏加速度。
- $\boldsymbol g$：重力；$\gamma\Delta\boldsymbol V$：黏性动量扩散；$-\nabla\phi_T$：引潮势产生的加速度。

**老师反复强调：未来所有近似都要从这些项的物理意义出发，才能说明为什么可以忽略某一项。**

### 4. 盐量扩散与热传导：相同的输运结构

$$
\boxed{\frac{\partial s}{\partial t}+\boldsymbol V\cdot\nabla s=k_D\Delta s}
\qquad
\boxed{\frac{\partial\theta}{\partial t}+\boldsymbol V\cdot\nabla\theta=k_\theta\Delta\theta}
$$

![课件：盐量扩散方程及三项的课堂图解](/images/physical-oceanography/lesson9/slide_06.jpg)

以盐度为例：

1. $\partial s/\partial t$：固定位置盐度随时间的局地变化。
2. $\boldsymbol V\cdot\nabla s$：**平流输运**。既要有流速，又要沿流动方向存在盐度梯度，该项才可能非零。
3. $k_D\Delta s$：**分子扩散造成的局地净变化**。即使流速为零，盐度分布不均也可使盐分逐渐扩散。

:::EXAMPLE
老师举例：左边海水盐度高、右边低。

- 若没有水平流速，平流项为零；盐仍可能通过分子扩散逐渐混合。
- 若有流速但盐度处处相同，盐度梯度为零，平流项仍为零。
- 若既有流动，又有沿流向的盐度梯度，固定位置的盐度就可能因平流而变化。

把 $s$ 换为位温 $\theta$，就能理解热的平流与分子热传导。
:::

课件给出的分子盐扩散系数约为 $k_D\approx1.1\times10^{-9}\ \mathrm{m^2/s}$；分子热扩散率约为 $k_\theta\approx1.4\times10^{-7}\ \mathrm{m^2/s}$。**这些量是分子尺度的扩散率，后面还要与湍流扩散区分。**

### 5. 直角坐标系中的方程

将矢量方程写成三个方向上的分量，就得到课件所示的直角坐标系方程组。

![课件：直角坐标系下的完整方程组](/images/physical-oceanography/lesson9/slide_07.jpg)

例如盐量扩散项为

$$
\Delta s=\frac{\partial^2s}{\partial x^2}+\frac{\partial^2s}{\partial y^2}+\frac{\partial^2s}{\partial z^2},
$$

平流项为

$$
\boldsymbol V\cdot\nabla s
=u\frac{\partial s}{\partial x}+v\frac{\partial s}{\partial y}+w\frac{\partial s}{\partial z}.
$$

**矢量写法更紧凑，分量写法更利于实际代入与逐项近似。**

---

## 二、为什么需要边界条件

海洋与**大气、海底、陆地**之间存在界面。连续介质内部的基本方程不能直接跨越物性不连续的界面使用，因此需要边界条件描述界面两侧的质量、动量和热量如何交换。

本课沿用课件的四类框架：

1. 无质量交换的运动学边界条件（自由海面、海底）。
2. 海面有质量交换时的运动学边界条件与盐度边界条件。
3. 动力学边界条件（界面应力）。
4. 温度边界条件（界面热通量）。

**先约定符号：** 取 $z$ 轴向上，静止海面 $z=0$；实际自由海面 $z=\zeta(x,y,t)$；静止海底 $z=-h(x,y)$，$h>0$ 是水深；$\boldsymbol V_H=(u,v)$、$\nabla_H=(\partial_x,\partial_y)$。

---

## 三、运动学边界条件

### 1. 普通界面条件：流体不能随意穿过不透水界面

用一个隐式函数定义界面：

$$F(x,y,z,t)=0.$$

若界面上任一流体质点始终留在该界面上，则沿该质点轨迹

$$\boxed{\frac{DF}{Dt}=\frac{\partial F}{\partial t}+\boldsymbol V\cdot\nabla F=0.}$$

**为什么等于零？** 质点运动前后都满足 $F=0$，因此 $F$ 沿其轨迹保持常数零。这是运动学条件最根本的来源。

### 2. 无质量交换：自由海面

![课件：自由海面及其运动学边界条件](/images/physical-oceanography/lesson9/slide_12.jpg)

自由海面设为 $z=\zeta(x,y,t)$，即

$$F=z-\zeta(x,y,t)=0.$$

逐项求偏导：

$$
\frac{\partial F}{\partial t}=-\frac{\partial\zeta}{\partial t},\quad
\frac{\partial F}{\partial x}=-\frac{\partial\zeta}{\partial x},\quad
\frac{\partial F}{\partial y}=-\frac{\partial\zeta}{\partial y},\quad
\frac{\partial F}{\partial z}=1.
$$

代入 $DF/Dt=0$：

$$
-\frac{\partial\zeta}{\partial t}
-u\frac{\partial\zeta}{\partial x}
-v\frac{\partial\zeta}{\partial y}+w=0.
$$

整理得到在 $z=\zeta$ 处成立的公式：

$$\boxed{\frac{\partial\zeta}{\partial t}+\boldsymbol V_H\cdot\nabla_H\zeta-w=0}.$$

等价地，

$$\boxed{w=\frac{\partial\zeta}{\partial t}+u\frac{\partial\zeta}{\partial x}+v\frac{\partial\zeta}{\partial y}}.$$

- $\partial\zeta/\partial t$：**固定地点海面的升降速度**。
- $\boldsymbol V_H\cdot\nabla_H\zeta$：水平流动沿着倾斜海面造成的随流海面高度变化。
- $w$：海面处海水质点的垂向速度。

:::EXAMPLE
**课堂的两种直观情境**

- 水平流动穿过一个倾斜海面：海水既有水平速度，海面又有坡度，因此沿流动路径看到的高度会改变。若流速或沿流向坡度为零，这种作用消失。
- 海面附近的水直接向上运动：即使没有水平坡度，也能把海面顶高；海水向下运动则可能使海面降低。

特别注意：平流项可为正也可为负，具体海面升降还取决于三项的符号与平衡。
:::

### 3. 无质量交换：静止海底

![课件：海底地形与不可穿透条件](/images/physical-oceanography/lesson9/slide_15.jpg)

对固定海底，$z=-h(x,y)$，所以

$$F=z+h(x,y)=0.$$

**这里不写 $t$ 的原因：** 课件在海洋运动所研究的时间尺度内将海底地形近似看成固定，因此 $\partial h/\partial t=0$；长期地壳运动则需要改用 $h(x,y,t)$。

于是

$$
\frac{\partial F}{\partial t}=0,\qquad
\nabla F=\left(\frac{\partial h}{\partial x},\frac{\partial h}{\partial y},1\right).
$$

代入 $DF/Dt=0$，在 $z=-h$ 处：

$$\boxed{\boldsymbol V_H\cdot\nabla_Hh+w=0}
\qquad\Longleftrightarrow\qquad
\boxed{w=-u\frac{\partial h}{\partial x}-v\frac{\partial h}{\partial y}}.
$$

- **平海底：** $\nabla_Hh=0\Rightarrow w=0$，海底附近水只能沿着海底流动。
- **有坡度：** 若存在沿坡水平流，水需同时向上或向下运动，以保证始终贴着海底、不会穿进岩石。

:::EXAMPLE
课堂举例：海山两侧海底倾斜。海水沿上坡方向流动时，会产生与坡面相适应的上升运动；沿下坡方向流动时产生下降运动。要判断 $w$ 的正负，直接代入 $w=-\boldsymbol V_H\cdot\nabla_Hh$，注意 $h$ 是**向下量取的正水深**。
:::

### 4. 有质量交换：纯水通量改变海面高度

![课件：蒸发降水、纯水与盐分的界面通量](/images/physical-oceanography/lesson9/slide_17.jpg)

真实海面可发生**蒸发、降水、结冰/融冰等水的质量交换**。课件将海水分解为纯水与盐分：

$$\rho=\rho_w+\rho_s,$$

其中 $\rho_w,\rho_s$ 分别表示两种组分的质量浓度；$\boldsymbol V_w,\boldsymbol V_s$ 分别表示组分速度。定义海水的质量平均速度：

$$\boxed{\boldsymbol V=\frac{\rho_w\boldsymbol V_w+\rho_s\boldsymbol V_s}{\rho_w+\rho_s}}.$$

设 $\boldsymbol C$ 是界面自身的运动速度，$\boldsymbol n=\nabla F/|\nabla F|$ 是朝向空气的单位法向量，$b$ 是**按竖直单位水平面积计的纯水质量通量**，课件采用 **向海面外失水（蒸发）为正** 的约定，则

$$\rho_w(\boldsymbol V_w-\boldsymbol C)\cdot\boldsymbol n=b\cos\gamma,$$

$$\rho_s(\boldsymbol V_s-\boldsymbol C)\cdot\boldsymbol n=0,$$

$$\cos\gamma=\boldsymbol n\cdot\boldsymbol e_z=\frac{\partial F/\partial z}{|\nabla F|}.$$

两式相加并利用质量平均速度：

$$\rho(\boldsymbol V-\boldsymbol C)\cdot\boldsymbol n=b\cos\gamma.$$

对 $F=z-\zeta=0$，界面运动产生的法向速度为

$$\boldsymbol C\cdot\boldsymbol n=-\frac{\partial F/\partial t}{|\nabla F|},$$

从而

$$\frac{\partial F}{\partial t}+\boldsymbol V\cdot\nabla F=\frac{b}{\rho}\frac{\partial F}{\partial z}=\frac{b}{\rho}.$$

最终在自由海面得到：

$$\boxed{\frac{\partial\zeta}{\partial t}+\boldsymbol V_H\cdot\nabla_H\zeta-w=-\frac{b}{\rho}}.$$

![课件：有质量交换时的海面运动学边界条件](/images/physical-oceanography/lesson9/slide_21.jpg)

- **蒸发：** $b>0$，当其他两项不变时 $\partial_t\zeta<0$，海面下降。
- **降水：** $b<0$，海面上升。
- 令 $b=0$，立即退化为上一节的**无质量交换自由海面条件**。

### 5. 由纯水通量推导海面盐量边界条件

盐分不会随着理想化的纯水蒸发或降雨直接跨界面。海面处盐分相对海水质量平均速度的**分子扩散通量**取为

$$\boldsymbol{\mathcal S}=\rho_s(\boldsymbol V_s-\boldsymbol V)=-k\nabla s.$$

盐分无穿越界面的通量条件为

$$\rho_s(\boldsymbol V_s-\boldsymbol C)\cdot\boldsymbol n=0.$$

把组分速度拆成

$$\boldsymbol V_s-\boldsymbol C=(\boldsymbol V_s-\boldsymbol V)+(\boldsymbol V-\boldsymbol C),$$

因此

$$-k\nabla s\cdot\boldsymbol n+\rho_s\frac{b}{\rho}\cos\gamma=0.$$

这里课件采用 $\rho_s=\rho s$，即 $s$ 与盐的质量份额相对应。代入 $\cos\gamma=1/|\nabla F|$：

$$\boxed{\nabla s\cdot\boldsymbol n=\frac{bs}{k}\cos\gamma}.$$

对 $F=z-\zeta$ 有

$$\nabla s\cdot\boldsymbol n=
\frac{-\partial_xs\,\partial_x\zeta-\partial_ys\,\partial_y\zeta+\partial_zs}{|\nabla F|}.$$

两边乘以 $|\nabla F|$，引入 $k_D=k/\rho$：

$$\boxed{\nabla_Hs\cdot\nabla_H\zeta-\frac{\partial s}{\partial z}=-\frac{bs}{\rho k_D}}.$$

![课件：海面盐量边界条件及小坡度近似](/images/physical-oceanography/lesson9/slide_24.jpg)

若海面坡度很小，$\nabla_H\zeta\approx0$，可简化为

$$\boxed{\frac{\partial s}{\partial z}=\frac{bs}{\rho k_D}}\qquad(z=\zeta).$$

**物理图像：** 蒸发带走水、保留盐，表层盐度增大，盐分趋于向下扩散；降水稀释表层，深层盐分趋于向上扩散。课件用**分子盐扩散**平衡纯水通量的盐度效应；后面进入湍流理论后，用更有效的湍流盐通量替换。

:::NOTE
$\nabla_Hs$ 只含 $x,y$ 两个水平导数；$\nabla s$ 包含 $x,y,z$ 三个方向。海面高度 $\zeta(x,y,t)$ 无独立 $z$ 依赖，因此 $\nabla\zeta$ 在课件实际公式中体现为水平坡度 $\nabla_H\zeta$。以上条件**在自由海面上求值**，不能把对任意 $z$ 的内部方程和界面公式混用。
:::

---

## 四、动力学边界条件

### 1. 核心物理要求：界面两侧的应力作用相匹配

运动学条件涉及水面或海底的几何运动；**动力学条件约束界面两侧的动量通量和应力**。课堂采用的条件是：若忽略界面自身惯性及额外界面力，则在同一法线方向上，界面两侧流体的**应力矢量连续**。

$$\boxed{\boldsymbol P_1\boldsymbol n=\boldsymbol P_2\boldsymbol n}.$$

这里下标 1、2 分别指界面两侧（海面例子中为大气和海水），$\boldsymbol P$ 是**应力张量**，$\boldsymbol P\boldsymbol n$ 是界面单位面积上的应力矢量（traction）。

### 2. 为什么需要应力张量而非单个压强

对一小块面积 $\Delta S$，外法向为 $\boldsymbol n$。单位面积所受应力定义为

$$\boldsymbol t(\boldsymbol n)=\lim_{\Delta S\to0}\frac{\Delta\boldsymbol f}{\Delta S}=\boldsymbol P\boldsymbol n.$$

法向可分解为

$$\boldsymbol n=(\cos\alpha,\cos\beta,\cos\gamma)=\frac{\nabla F}{|\nabla F|}.$$

$$\boldsymbol P=
\begin{pmatrix}
P_{xx}&P_{xy}&P_{xz}\\
P_{yx}&P_{yy}&P_{yz}\\
P_{zx}&P_{zy}&P_{zz}
\end{pmatrix}.$$

![课件：界面法向、应力张量与法向应力](/images/physical-oceanography/lesson9/slide_31.jpg)

例如 $x$ 方向的受力分量为

$$t_x=P_{xx}\cos\alpha+P_{xy}\cos\beta+P_{xz}\cos\gamma.$$

其他两个方向同理。由于界面两侧的应力矢量相同，所以每个方向都满足

$$\sum_{j=x,y,z}(P_{ij}^{(1)}-P_{ij}^{(2)})n_j=0,\qquad i=x,y,z.$$

**课堂重点：** 动量是矢量，因此界面动力学条件有三个分量；盐度等标量的扩散条件只涉及一个法向标量通量。

### 3. 牛顿黏性流体的应力张量

课件写出的常用不可压牛顿流体形式为

$$\boxed{P_{ij}=-p\,\delta_{ij}+\mu\left(\frac{\partial u_i}{\partial x_j}+\frac{\partial u_j}{\partial x_i}\right)}.$$

其中 $\delta_{ij}$ 是克罗内克符号，$\mu$ 为动力黏度。例如

$$P_{xz}=\mu\left(\frac{\partial u}{\partial z}+\frac{\partial w}{\partial x}\right),$$

$$P_{yz}=\mu\left(\frac{\partial v}{\partial z}+\frac{\partial w}{\partial y}\right),\quad P_{zz}=-p+2\mu\frac{\partial w}{\partial z}.$$

![课件：分子黏性应力张量表达式](/images/physical-oceanography/lesson9/slide_34.jpg)

**理想流体极限：** 若 $\mu=0$，则 $\boldsymbol P=-p\boldsymbol I$，剪切黏性应力消失；真实海水仍存在黏性作用。

### 4. 小坡度自由海面的三个动力学条件

海面 $F=z-\zeta(x,y,t)=0$，

$$\nabla F=(-\partial_x\zeta,-\partial_y\zeta,1).$$

若 $|\nabla_H\zeta|\ll1$，法线近似为 $\boldsymbol n\approx(0,0,1)$。于是

$$\boldsymbol P\boldsymbol n\approx
\begin{pmatrix}P_{xz}\\P_{yz}\\P_{zz}\end{pmatrix}.$$

即原来 9 个张量分量中，与界面法线相关的主要是**第 3 列**，所以条件化为三式：

$$\boxed{\begin{aligned}
\mu_1\left(\frac{\partial u}{\partial z}+\frac{\partial w}{\partial x}\right)_1&=\mu_2\left(\frac{\partial u}{\partial z}+\frac{\partial w}{\partial x}\right)_2,\\[4pt]
\mu_1\left(\frac{\partial v}{\partial z}+\frac{\partial w}{\partial y}\right)_1&=\mu_2\left(\frac{\partial v}{\partial z}+\frac{\partial w}{\partial y}\right)_2,\\[4pt]
-p_1+2\mu_1\left(\frac{\partial w}{\partial z}\right)_1&=-p_2+2\mu_2\left(\frac{\partial w}{\partial z}\right)_2.
\end{aligned}}$$

![课件：海面动力学边界条件的三个分量](/images/physical-oceanography/lesson9/slide_38.jpg)

- 前两式：两个**切向黏性应力**分量的连续性。
- 第三式：**法向压强与黏性正应力**之和的连续性。
- 由于空气与海水黏度不同、速度梯度不同，界面两侧的 $\partial u/\partial z$ 等未必相等；要求相等的是**应力乘积或合成的应力分量**。

:::NOTE
这里是课件针对**界面没有额外表面力**的近似写法。若考虑表面张力、显著曲率或额外界面力，法向应力条件需增加对应的应力跳跃项。课件本节未展开这些修正。
:::

---

## 五、温度边界条件与层流边界总结

### 1. 温度边界：法向热通量平衡

界面两侧由分子导热产生的热通量为

$$\boldsymbol H=-\kappa\nabla\theta,$$

其中 $\kappa$ 是热导率；若无界面热源、无质量交换，$\boldsymbol H_1\cdot\boldsymbol n=\boldsymbol H_2\cdot\boldsymbol n$。

对自由海面，设来自大气的竖直热通量为 $Q$（**课件约定进入海洋为正**），则海水侧满足

$$\left(\kappa\frac{\partial\theta}{\partial n}\right)_2=Q\cos\gamma.$$

用 $k_\theta=\kappa/(\rho c_p)$，其中 $c_p$ 是定压比热容，结合

$$\frac{\partial\theta}{\partial n}=
\frac{-\partial_x\theta\,\partial_x\zeta-\partial_y\theta\,\partial_y\zeta+\partial_z\theta}{|\nabla F|},$$

得到

$$\boxed{\nabla_H\theta\cdot\nabla_H\zeta-\frac{\partial\theta}{\partial z}=-\frac{Q}{k_\theta\rho c_p}}.$$

![课件：海面温度边界条件及分子热扩散率](/images/physical-oceanography/lesson9/slide_42.jpg)

**小坡度近似：**

$$\boxed{\frac{\partial\theta}{\partial z}=\frac{Q}{k_\theta\rho c_p}=\frac{Q}{\kappa}}.$$

课堂物理解释：海洋从大气获得的净热量，需要由海水内部的导热作用传走或参与储热；该边界式给出了**表层的法向热通量条件**。完整热收支可以包含短波穿透、潜热、感热与长波辐射等不同通量；本节把它们简化集中为 $Q$。

### 2. 五组重要边界条件：课堂复习表

![课件：本节课边界条件汇总](/images/physical-oceanography/lesson9/slide_48.jpg)

| 位置与类型 | 需记住的表达式 | 最直观的物理意义 |
|---|---|---|
| 自由海面，无质量交换 | $\partial_t\zeta+\boldsymbol V_H\cdot\nabla_H\zeta-w=0$ | 海面跟随海水质点运动 |
| 自由海面，有纯水交换 | $\partial_t\zeta+\boldsymbol V_H\cdot\nabla_H\zeta-w=-b/\rho$ | 蒸发使海面降低，降雨使海面升高 |
| 静止海底 | $w+\boldsymbol V_H\cdot\nabla_Hh=0$ | 海水沿坡运动，不穿越海底 |
| 海面动力学条件 | $\boldsymbol P_1\boldsymbol n=\boldsymbol P_2\boldsymbol n$ | 界面两侧应力矢量匹配 |
| 海面盐量条件 | $\nabla_Hs\cdot\nabla_H\zeta-\partial_zs=-bs/(\rho k_D)$ | 纯水交换与盐扩散平衡 |
| 海面温度条件 | $\nabla_H\theta\cdot\nabla_H\zeta-\partial_z\theta=-Q/(\rho c_pk_\theta)$ | 大气热通量与海水热传导平衡 |

> 课堂口头将它们概括为若干组关键边界条件；按上表拆开看可数为 6 行，因为**海面运动学条件含有质量交换与无质量交换两种情况**。记忆时优先把握两类界面（海面、海底）、三类收支（质量、动量、热）以及通量是否为零。

---

## 六、层流、湍流和雷诺数

### 1. 为什么还要研究湍流

上述基本方程及分子通量边界条件首先采用了**层流或基于分子输运的简化描述**。真实海洋中大量运动伴随无规则的涡旋和脉动，若只保留分子黏性与分子扩散，通常难以准确描述实际的动量、盐和热输运。

### 2. 雷诺实验：流动从规则走向杂乱

![课堂播放的雷诺实验/流动可视化视频画面](/images/physical-oceanography/lesson9/slide_59.jpg)

老师结合视频讲了这样一个过程：

1. **低流速：** 染料/荧光轨迹较平滑、不同流层混合较弱，呈层流特征。
2. **提高流速：** 障碍物后出现尾流、涡旋和有规律的涡街，表现出不稳定性增加。
3. **继续提高流速：** 涡旋运动更复杂，轨迹紊乱、混合增强，进入湍流状态。

注：视频展示了**绕障碍物的尾流涡旋及其转捩过程**。经典雷诺染色实验和绕流卡门涡街实验的具体几何装置有所不同；此处保留课堂用视频对比有序与无序流动的教学目的。

### 3. 雷诺数 $Re$

$$\boxed{Re=\frac{\rho UL}{\mu}=\frac{UL}{\nu}}$$

其中 $U$ 为特征流速、$L$ 为特征长度、$\mu$ 为动力黏度、$\nu=\mu/\rho$ 为运动黏度。

![课件：层流、湍流与雷诺数](/images/physical-oceanography/lesson9/slide_67.jpg)

- $Re$ 衡量**惯性作用相对于分子黏性作用的强弱**。
- $Re$ 较小：黏性对流动更有约束，流动通常较规则。
- $Re$ 较大：惯性效应显著，流动可能出现失稳与湍流。

**审题提醒：** 是否转捩还取决于具体流动几何、扰动、边界等因素，不能脱离情境规定一个对所有海流均适用的临界 $Re$。

---

## 七、雷诺平均及其运算规则

### 1. 平均量 + 脉动量

湍流量 $q$ 随时间快速波动，雷诺分解将它写为

$$\boxed{q(x,y,z,t)=\overline q(x,y,z,t)+q'(x,y,z,t)}.$$

- $\overline q$：相对缓慢变化的**时间平均量**；
- $q'$：瞬时量相对平均量的**脉动量**。

本课程涉及的 $q$ 可以是 $u,v,w,p,s,\rho,\theta$ 等标量分量；也可按分量分解速度向量。

![课件：时间平均量与脉动量的分解图](/images/physical-oceanography/lesson9/slide_68.jpg)

若以 $t_0$ 为中心、平均时长为 $2\Delta t$，则

$$\boxed{\overline q(x,y,z;t_0,\Delta t)=\frac{1}{2\Delta t}\int_{t_0-\Delta t}^{t_0+\Delta t}q(x,y,z,t)\,dt}.$$

平均时窗应足够长以平滑短时湍流脉动，又不能长到抹掉希望研究的大尺度演变；以下雷诺规则采用适当尺度分离的平均假设。

### 2. 六条常用运算规则

令 $a=\overline a+a'$、$b=\overline b+b'$，$m$ 为常数，则

$$\begin{aligned}
\overline m&=m,\\
\overline{ma}&=m\overline a,\\
\overline{a+b}&=\overline a+\overline b,\\
\overline{a'}&=\overline{b'}=0,\\
\overline{\partial_la}&=\partial_l\overline a\quad(l=x,y,z,t),\\
\overline{ab}&=\overline a\,\overline b+\overline{a'b'}.
\end{aligned}$$

![课件：雷诺平均的基本运算规则](/images/physical-oceanography/lesson9/slide_71.jpg)

最重要的是最后一条。详细展开：

$$\begin{aligned}
\overline{ab}
&=\overline{(\overline a+a')(\overline b+b')}\\
&=\overline{\overline a\,\overline b+\overline a\,b'+a'\overline b+a'b'}\\
&=\overline a\,\overline b+\overline a\,\underbrace{\overline{b'}}_0
+\underbrace{\overline{a'}}_0\,\overline b+\overline{a'b'}\\
&=\boxed{\overline a\,\overline b+\overline{a'b'}}.
\end{aligned}$$

**关键区别：** $\overline{a'}=0$，但 $\overline{a'b'}$ 通常非零。两个脉动量可能相关，产生净的平均动量、盐或热输运。

:::EXAMPLE
假设某处流速脉动与盐度脉动同时正负交替：

- 时刻 A：$u'=+1$、$s'=+2$，乘积为 $+2$；
- 时刻 B：$u'=-1$、$s'=-2$，乘积仍为 $+2$。

虽然两个脉动量的平均都等于零，平均乘积却是 $+2$。所以湍流可以在**平均流速为零或很小**时仍然产生有意义的盐分通量。
:::

---

## 八、基本方程组的时间平均化

### 1. 连续性方程：最容易平均

课件此处采用密度脉动可忽略、不可压（$\nabla\cdot\boldsymbol V=0$）的近似：

$$\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}=0.$$

将 $u=\overline u+u'$ 等代入并取时间平均：

$$\begin{aligned}
0&=\overline{\frac{\partial(\overline u+u')}{\partial x}
+\frac{\partial(\overline v+v')}{\partial y}
+\frac{\partial(\overline w+w')}{\partial z}}\\
&=\frac{\partial\overline u}{\partial x}
+\frac{\partial\overline v}{\partial y}
+\frac{\partial\overline w}{\partial z}
+\frac{\partial\overline{u'}}{\partial x}
+\frac{\partial\overline{v'}}{\partial y}
+\frac{\partial\overline{w'}}{\partial z}.
\end{aligned}$$

由于 $\overline{u'}=\overline{v'}=\overline{w'}=0$，得到

$$\boxed{\frac{\partial\overline u}{\partial x}+\frac{\partial\overline v}{\partial y}+\frac{\partial\overline w}{\partial z}=0}.$$

**为什么没有新增项？** 这里速度各分量只出现一次，没有两个脉动量相乘。

### 2. 平均动量方程：新增雷诺应力

先看简化的 $x$ 方向运动方程（课件这一步略去部分三维科氏、引潮等项，以突出雷诺平均）：

$$\frac{\partial u}{\partial t}
+u\frac{\partial u}{\partial x}
+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}
-fv=-\frac{1}{\rho}\frac{\partial p}{\partial x}+\nu\Delta u.$$

课件在推导平均运动方程时取 $\rho'=0$，即忽略密度脉动。关键困难来自三项非线性平流，例如 $u\partial_xu$。

**第一步：** 分解 $u$ 并展开四项：

$$\begin{aligned}
u\frac{\partial u}{\partial x}
=&\;(\overline u+u')\left(\frac{\partial\overline u}{\partial x}+\frac{\partial u'}{\partial x}\right)\\
=&\;\overline u\,\partial_x\overline u+\overline u\,\partial_xu'
+u'\partial_x\overline u+u'\partial_xu'.
\end{aligned}$$

**第二步：** 时间平均后，中间两项因 $\overline{u'}=0$ 消失：

$$\boxed{\overline{u\partial_xu}=\overline u\,\partial_x\overline u+\overline{u'\partial_xu'}}.$$

**第三步：** 用恒等式 $u'\partial_xu'=\frac12\partial_x(u'^2)$。对 $v\partial_yu,w\partial_zu$ 同理处理，并利用**脉动速度的连续性**

$$\partial_xu'+\partial_yv'+\partial_zw'=0,$$

把脉动平流整理为脉动相关的散度：

$$\boxed{\overline{u'\partial_xu'+v'\partial_yu'+w'\partial_zu'}
=\partial_x\overline{u'^2}+\partial_y\overline{u'v'}+\partial_z\overline{u'w'}}.$$

**第四步：** 取平均并整理，得到

$$\boxed{\begin{aligned}
\frac{\partial\overline u}{\partial t}
+\overline u\frac{\partial\overline u}{\partial x}
+\overline v\frac{\partial\overline u}{\partial y}
+\overline w\frac{\partial\overline u}{\partial z}-f\overline v
=&-\frac1\rho\frac{\partial\overline p}{\partial x}+\nu\Delta\overline u\\
&-\partial_x\overline{u'^2}-\partial_y\overline{u'v'}-\partial_z\overline{u'w'}.
\end{aligned}}$$

![课件：x 方向动量方程的雷诺平均推导](/images/physical-oceanography/lesson9/slide_77.jpg)

这三个**脉动乘积的散度项**，就是湍流平均后新增的动量输运。它们对应雷诺应力（单位密度形式）的三个相关分量：

$$\boxed{\tau^{(R)}_{ij}=-\rho\,\overline{u_i'u_j'}}.$$

**为什么会增加计算困难？** 为求平均流 $\overline u$，方程中又出现未知的 $\overline{u_i'u_j'}$，所以必须用新的假设/参数化关系完成**湍流闭合**。

### 3. 分子黏性与湍流涡黏性

分子黏性来自分子运动与相邻流层的动量交换。牛顿黏性定律写为

$$\tau=\mu\frac{\partial u}{\partial n},\qquad \nu=\frac\mu\rho.$$

![课件：分子黏性、切应力与黏性扩散](/images/physical-oceanography/lesson9/slide_78.jpg)

海洋中的湍流则还存在大量**涡旋交换动量**。课件通过与分子黏性类比，定义涡黏性系数 $A_{ij}$ 来描述脉动相关量与平均速度梯度之间的关系：

$$-\overline{u'^2}=A_{xx}\frac{\partial\overline u}{\partial x},\quad
-\overline{u'v'}=A_{xy}\frac{\partial\overline u}{\partial y},\quad
-\overline{u'w'}=A_{xz}\frac{\partial\overline u}{\partial z}.$$

![课件：湍流相关项的涡黏性参数化](/images/physical-oceanography/lesson9/slide_87.jpg)

如此就将难测的**脉动速度协方差**表示成较容易描述的**平均速度梯度**。从指标可读出：前一个下标对应所研究的速度分量，后一个下标对应取梯度的空间方向。

更完整的湍流黏性理论通常使用平均应变率张量进行参数化；特别是 $-\overline{u'^2}$ 这类对角项含湍动能贡献，不能在所有流场中直接用单一正涡黏性系数乘 $\partial_x\overline u$。本课先掌握**闭合的目的与运算方法**。

![课件：湍流摩擦力与涡黏性系数的物理背景](/images/physical-oceanography/lesson9/slide_79.jpg)

### 4. 时间平均动量方程的整理形式

从前述**严格平均后的方程**出发，若约定 $-\overline{u_i'u_j'}=A_{ij}\partial_j\overline{u_i}$，则涡黏性贡献应按代数规则整理为

$$\boxed{\frac{\partial}{\partial x}\left(A_{xx}\frac{\partial\overline u}{\partial x}\right)
+\frac{\partial}{\partial y}\left(A_{xy}\frac{\partial\overline u}{\partial y}\right)
+\frac{\partial}{\partial z}\left(A_{xz}\frac{\partial\overline u}{\partial z}\right)}.$$

因此 $x$ 方向写成

$$\begin{aligned}
\frac{\partial\overline u}{\partial t}
+\overline{\boldsymbol V}\cdot\nabla\overline u-f\overline v
=&-\frac1\rho\frac{\partial\overline p}{\partial x}
+\nu\Delta\overline u\\
&+\partial_x(A_{xx}\partial_x\overline u)
+\partial_y(A_{xy}\partial_y\overline u)
+\partial_z(A_{xz}\partial_z\overline u).
\end{aligned}$$

$y,z$ 方向类似，只需把受力、对应的平均速度与涡黏性系数替换为相应方向，并保留需要的科氏和重力项。

![课件：三个方向的时间平均动量方程（请结合下文符号核对阅读）](/images/physical-oceanography/lesson9/slide_90.jpg)

:::WARNING
**课件符号核对（很重要）**：课件第 77、87 页分别给出平均方程的 $-\partial_j\overline{u_i'u_j'}$ 以及闭合关系 $-\overline{u_i'u_j'}=A_{ij}\partial_j\overline u_i$。按照这两式直接代入，最终应产生**正号**的涡黏性散度项。课件第 81、90 页展示的最终动量方程却写了**负号**，存在代数符号不一致。这里保留课件截图便于对照，同时正文采用前两式一致推导出的正号。复习或考试前建议请老师确认其 $A_{ij}$ 的定义与目标符号。
:::

### 5. 盐度方程的时间平均：新增湍流盐通量

原始方程

$$\partial_ts+\boldsymbol V\cdot\nabla s=k_D\Delta s.$$

若平均流不可压，可先把平流项改写为 $\nabla\cdot(s\boldsymbol V)$，以 $x$ 分量为例：

$$\overline{us}=\overline u\,\overline s+\overline{u's'}.$$

因此，时间平均得到

$$\begin{aligned}
\partial_t\overline s+\overline{\boldsymbol V}\cdot\nabla\overline s
=k_D\Delta\overline s
-\partial_x\overline{u's'}-\partial_y\overline{v's'}-\partial_z\overline{w's'}.
\end{aligned}$$

课件采用**梯度扩散假设**：

$$\boxed{\begin{aligned}
-\overline{u's'}&=K_{sx}\partial_x\overline s,\\
-\overline{v's'}&=K_{sy}\partial_y\overline s,\\
-\overline{w's'}&=K_{sz}\partial_z\overline s.
\end{aligned}}$$

代入后得

$$\boxed{\begin{aligned}
\frac{\partial\overline s}{\partial t}+\overline{\boldsymbol V}\cdot\nabla\overline s
=&\;k_D\Delta\overline s
+\partial_x(K_{sx}\partial_x\overline s)\\
&+\partial_y(K_{sy}\partial_y\overline s)
+\partial_z(K_{sz}\partial_z\overline s).
\end{aligned}}$$

![课件：盐量扩散方程时间平均化与湍流盐扩散系数](/images/physical-oceanography/lesson9/slide_85.jpg)

**课堂重点：** $\overline{u's'}$ 代表盐度脉动与速度脉动的相关输运，参数化后便由 $K_{sx}$ 与平均盐度梯度表示。$K_{sx},K_{sy},K_{sz}$ 可不同，体现海洋混合的方向差异。

### 6. 温度方程的时间平均：新增湍流热通量

同理，从

$$\partial_t\theta+\boldsymbol V\cdot\nabla\theta=k_\theta\Delta\theta$$

得到湍流相关项 $\overline{u'\theta'}$、$\overline{v'\theta'}$、$\overline{w'\theta'}$，并设

$$\boxed{\begin{aligned}
-\overline{u'\theta'}&=K_{\theta x}\partial_x\overline\theta,\\
-\overline{v'\theta'}&=K_{\theta y}\partial_y\overline\theta,\\
-\overline{w'\theta'}&=K_{\theta z}\partial_z\overline\theta.
\end{aligned}}$$

整理后

$$\boxed{\begin{aligned}
\frac{\partial\overline\theta}{\partial t}
+\overline{\boldsymbol V}\cdot\nabla\overline\theta
=&\;k_\theta\Delta\overline\theta
+\partial_x(K_{\theta x}\partial_x\overline\theta)\\
&+\partial_y(K_{\theta y}\partial_y\overline\theta)
+\partial_z(K_{\theta z}\partial_z\overline\theta).
\end{aligned}}$$

![课件：热传导方程时间平均化与湍流热扩散系数](/images/physical-oceanography/lesson9/slide_88.jpg)

**三种湍流输运并列记忆：**

| 被输运的量 | 新增脉动相关 | 参数化系数 | 表示的作用 |
|---|---|---|---|
| 动量 | $\overline{u_i'u_j'}$ | $A_{ij}$ | 雷诺应力 / 湍流摩擦 |
| 盐度 | $\overline{u_i's'}$ | $K_{si}$ | 湍流盐扩散 |
| 热量 / 温度 | $\overline{u_i'\theta'}$ | $K_{\theta i}$ | 湍流热扩散 |

### 7. 时间平均方程组的整体框架

![课件：平均盐度、温度方程与状态方程](/images/physical-oceanography/lesson9/slide_91.jpg)

- **连续性方程：** 在不可压近似下形式保持不变，只把速度替换为平均速度。
- **三个动量方程：** 保留平均加速度、压强梯度、科氏力、重力及分子黏性项；由于非线性平流而增加雷诺应力散度。
- **盐、热方程：** 增加湍流盐/热通量的散度。
- **状态方程：** 课件用 $\overline\rho=\rho(\overline\theta,\overline s,\overline p)$ 作为平均形式，这是课堂采用的近似闭合关系；对真正的非线性状态方程，严格地说 $\overline{\rho(\theta,s,p)}$ 通常不能直接等同于 $\rho(\overline\theta,\overline s,\overline p)$，还需要考虑非线性修正或小脉动假设。

![课件：平均流与层流方程组的区别](/images/physical-oceanography/lesson9/slide_92.jpg)

:::NOTE
课堂强调湍流动量、盐和热输运通常比相应的**分子扩散**显著得多，课件举例说可大约高 2–3 个数量级。**该数值属于课堂使用的量级描述，不能当成全球海洋各深度、各方向的通用常数**；实际涡黏性和涡扩散系数随海域、层结、尺度及湍流强度变化。
:::

---

## 九、边界条件的时间平均化

### 1. 基本思路

真实自由海面及海洋内部存在脉动，若对移动边界进行严格平均，界面几何、速度和通量之间也会产生额外相关项。课件采用的近似做法是：

1. 沿用先前层流边界条件的**主要数学形式**。
2. 用时间平均量表示海面高度、流速、盐度、温度等物理变量。
3. 用湍流应力、湍流盐通量、湍流热通量替换原来的分子输运项。
4. **课件为简便省去各变量上方的平均横线**；理解时应自行补回。

![课件：边界条件平均化，保留运动学形式及替换应力](/images/physical-oceanography/lesson9/slide_97.jpg)

### 2. 运动学条件：形式沿用

在课堂的平均化近似下，无质量交换自由海面仍写作

$$\frac{\partial\overline\zeta}{\partial t}+\overline{\boldsymbol V}_H\cdot\nabla_H\overline\zeta-\overline w=0.$$

有质量交换时右端为 $-b/\overline\rho$；海底仍有

$$\overline w+\overline{\boldsymbol V}_H\cdot\nabla_Hh=0.$$

上述形式**忽略了严格平均移动边界时可能出现的脉动相关量**，适用于本课采用的近似框架。

### 3. 动力学条件：分子黏性应力换为湍流有效应力

仍要求界面应力矢量平衡，例如用平均流的有效应力张量 $\boldsymbol P_{\mathrm{eff}}$ 写为

$$\boxed{(\boldsymbol P_{\mathrm{eff}}\boldsymbol n)_1=(\boldsymbol P_{\mathrm{eff}}\boldsymbol n)_2}.$$

其中有效应力包含分子黏性与雷诺应力贡献。课件将其概括为：将分子黏性力换成对应的**涡黏性 / 湍流雷诺应力项**，形式与原动力学边界条件类似。

### 4. 盐量边界：用湍流盐通量替代分子盐通量

原来的分子盐扩散通量

$$\boldsymbol{\mathcal S}=-k\nabla s$$

在课件的时间平均闭合中改为

$$\boxed{\boldsymbol{\mathcal S}_{\mathrm{turb}}=-\rho
\left(K_{sx}\frac{\partial s}{\partial x},\ K_{sy}\frac{\partial s}{\partial y},\ K_{sz}\frac{\partial s}{\partial z}\right)}.$$

因而原来

$$\nabla_Hs\cdot\nabla_H\zeta-\partial_zs=-\frac{bs}{\rho k_D}$$

变为（课件省略平均横线）：

$$\boxed{K_{sx}\frac{\partial s}{\partial x}\frac{\partial\zeta}{\partial x}
+K_{sy}\frac{\partial s}{\partial y}\frac{\partial\zeta}{\partial y}
-K_{sz}\frac{\partial s}{\partial z}
=-\frac{bs}{\rho}}.$$

若海面坡度很小：

$$\boxed{K_{sz}\frac{\partial s}{\partial z}=\frac{bs}{\rho}}.$$

### 5. 热量边界：用湍流热通量替代分子热通量

分子热通量 $\boldsymbol H=-\kappa\nabla\theta$ 由以下湍流形式近似替代：

$$\boxed{\boldsymbol H_{\mathrm{turb}}=-\rho c_p
\left(K_{\theta x}\partial_x\theta,\ K_{\theta y}\partial_y\theta,\ K_{\theta z}\partial_z\theta\right)}.$$

于是平均温度边界条件为

$$\boxed{K_{\theta x}\frac{\partial\theta}{\partial x}\frac{\partial\zeta}{\partial x}
+K_{\theta y}\frac{\partial\theta}{\partial y}\frac{\partial\zeta}{\partial y}
-K_{\theta z}\frac{\partial\theta}{\partial z}=-\frac{Q}{\rho c_p}}.$$

海面坡度很小时：

$$\boxed{K_{\theta z}\frac{\partial\theta}{\partial z}=\frac{Q}{\rho c_p}}.$$

![课件：时间平均后的海面盐量、热量边界条件（红字为替换式）](/images/physical-oceanography/lesson9/slide_99.jpg)

**最重要的识别方式：**

- 运动学条件看的是**界面移动与流速**。
- 动力学条件看的是**应力连续**，湍流时加入雷诺应力。
- 盐度、热量条件看的是**法向通量平衡**，湍流时用涡扩散替换分子扩散。

---

## 十、重点对比、课件核对与自测

### 1. 最容易混淆的四组区别

| 容易混淆 | 正确识别 |
|---|---|
| $\partial_tq$ 与 $Dq/Dt$ | 前者固定位置的局地变化；后者跟随水团的总变化，后者包含平流 |
| $\boldsymbol V\cdot\nabla s$ 与 $k_D\Delta s$ | 前者流动携带盐度差异；后者盐分子扩散造成的净变化 |
| 运动学条件与动力学条件 | 前者确保界面几何运动相容；后者约束界面受力 / 动量通量 |
| 分子输运与湍流输运 | 前者由分子微观作用决定；后者与速度和标量的脉动相关有关，需要额外闭合 |

### 2. 本课所有最应熟练写出的公式

1. 质量连续：$\partial_t\rho+\nabla\cdot(\rho\boldsymbol V)=0$，或 $D\rho/Dt+\rho\nabla\cdot\boldsymbol V=0$。
2. 盐量：$\partial_ts+\boldsymbol V\cdot\nabla s=k_D\Delta s$；温度方程把 $s$ 换为 $\theta$。
3. 无质量交换自由面：$\partial_t\zeta+\boldsymbol V_H\cdot\nabla_H\zeta-w=0$。
4. 有纯水交换自由面：$\partial_t\zeta+\boldsymbol V_H\cdot\nabla_H\zeta-w=-b/\rho$。
5. 固定海底：$w+\boldsymbol V_H\cdot\nabla_Hh=0$。
6. 动力学应力：$\boldsymbol P_1\boldsymbol n=\boldsymbol P_2\boldsymbol n$。
7. 海面盐量：$\nabla_Hs\cdot\nabla_H\zeta-\partial_zs=-bs/(\rho k_D)$。
8. 海面温度：$\nabla_H\theta\cdot\nabla_H\zeta-\partial_z\theta=-Q/(\rho c_pk_\theta)$。
9. 雷诺分解：$q=\overline q+q'$；乘积规则：$\overline{ab}=\overline a\,\overline b+\overline{a'b'}$。
10. 三类涡输运：雷诺应力 $-\rho\overline{u_i'u_j'}$、湍流盐通量 $-\overline{u_i's'}$、湍流热通量 $-\overline{u_i'\theta'}$。

### 3. 课件核对与适用前提

:::WARNING
阅读公式时保留以下三个限定：

1. **动量涡黏性项符号：** 课件第 77、87 页的定义与第 81、90 页的最终式符号不一致，正文已明确指出并按定义重新推导；不要机械照抄最终页的负号。
2. **平均连续性方程：** $\nabla\cdot\overline{\boldsymbol V}=0$ 用到了不可压 / 忽略密度脉动等条件。对于一般可压或强密度变化流动，应从 $\partial_t\rho+\nabla\cdot(\rho\boldsymbol V)=0$ 出发，平均后还需处理密度—速度相关项。
3. **平均状态方程与运动边界：** 简单给平均量加横线属于课堂采用的近似；非线性状态方程和瞬时起伏自由面的严格平均可能有额外修正。
:::

### 4. 课堂提问模拟

**Q1：质量连续性方程为什么有两种表达，它们每一项有什么意义？**  
A：通过散度乘积公式互相转化。欧拉写法对应固定控制体的局地密度变化和质量净流出；随体写法对应海水微团密度总变化与其相对体积膨胀。

**Q2：为什么水平流速非零，海面平流项还可能等于零？**  
A：若沿流向没有海面高度梯度，则 $\boldsymbol V_H\cdot\nabla_H\zeta=0$；两者是点积，方向也很重要。

**Q3：平海底的垂向速度为什么必须为零？**  
A：固定海底不可穿透，且 $\nabla_Hh=0$，所以海底运动学条件直接给 $w=0$。

**Q4：蒸发为什么既影响海面高度又影响盐度？**  
A：失去纯水使 $b>0$，使海面降低；盐分仍留在海水内，表层盐度趋于升高，并与向下的盐扩散相联系。

**Q5：为什么界面动力学条件写成张量乘法？**  
A：界面受力是三维矢量，应力取决于作用面法线；应力张量乘法线得到该面上的应力矢量。

**Q6：$\overline{u'}=0$，为何 $\overline{u's'}$ 不一定为零？**  
A：脉动相关性可使两者乘积的时间平均不为零，这正是湍流可以产生额外盐通量的原因。

**Q7：平均动量方程为什么比层流方程多项？**  
A：非线性平流包含速度乘积；时间平均后出现 $\overline{u_i'u_j'}$，其散度进入平均动量方程，需要用雷诺应力闭合。

**Q8：平均方程与边界条件怎么衔接？**  
A：使用平均流场满足的守恒方程；运动学条件保留主要形式；动力学和盐热边界中同时引入适当的湍流应力、湍流通量，形成相互一致的模型。

---

## 本课结论

> 海水基本方程组是理解海流的**内部约束**；海面与海底的边界条件是**界面约束**；雷诺平均把湍流拆为平均运动和脉动运动，额外产生的**雷诺应力、湍流盐通量和湍流热通量**通过参数化闭合。后续学习各种近似方程，先问清楚“这一项代表什么、处于什么边界、在什么尺度上才可以忽略”。

**资料与校勘说明：** 根据 2026-10-14 袁野平《物理海洋学》课堂录音（Word 转写正文已从文档 XML 全量恢复）及配套 106 页演示课件整理；口语识别错误已结合课件符号校正。文中标注的“课件符号核对”与“适用前提”属于为保证数学一致性而附加的学习注释。所有图片均从此次 PPT 中直接提取，仅裁去左右黑边，没有替换为外部素材。
