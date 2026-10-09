---
title: 效用函数、边际替代率与最优化
published: 2026-09-28
description: 效用函数与无差异曲线、边际效用、边际替代率、偏好凸性、替代弹性、拉格朗日法、库恩-塔克条件与多维极值
tags: [中级微观经济学]
category: 课程笔记
draft: false
---

## 概述

这一讲把上一部分的**偏好理论**进一步转化为可以计算的数学工具，并为后面的消费者最优化问题做准备。

核心链条是：

> **偏好排序** → 用 **效用函数** 表示 → 用 **无差异曲线** 看等效用组合 → 用 **边际替代率 MRS** 描述局部替代 → 用 **凸性 / 替代弹性** 描述偏好的形状 → 用 **拉格朗日法与 KKT 条件** 求约束下的最优选择。

这一讲最需要抓住的三个区别：

- **效用值本身通常只有序数意义**：真正重要的是“谁比谁更好”的排序。
- **边际效用 MU 依赖效用函数的具体刻度**；**边际替代率 MRS** 在单调递增变换下保持不变，因此更能反映偏好本身。
- 有约束最优化时，不能只机械写“导数等于 0”，还必须判断约束是否真正起作用，即 **binding / unbinding constraint**。

---

## 目录

- [效用函数](#效用函数)
  - [效用函数的定义](#效用函数的定义)
  - [序数效用与单调递增变换](#序数效用与单调递增变换)
  - [常用效用函数](#常用效用函数)
  - [无差异集与无差异曲线](#无差异集与无差异曲线)
- [效用函数的性质](#效用函数的性质)
  - [边际效用](#边际效用)
  - [边际效用递减](#边际效用递减)
  - [边际替代率 MRS](#边际替代率-mrs)
  - [为什么 MRS 不受单调递增变换影响](#为什么-mrs-不受单调递增变换影响)
  - [偏好凸性](#偏好凸性)
  - [边际替代率递减](#边际替代率递减)
  - [替代弹性](#替代弹性)
  - [CES 效用函数与替代弹性](#ces-效用函数与替代弹性)
- [最优化的数学问题](#最优化的数学问题)
  - [一维无约束极值](#一维无约束极值)
  - [有约束最优化为什么更复杂](#有约束最优化为什么更复杂)
  - [拉格朗日方程](#拉格朗日方程)
  - [库恩-塔克条件](#库恩-塔克条件)
  - [多重约束](#多重约束)
  - [隐藏约束、角点解与内点解](#隐藏约束角点解与内点解)
  - [多维空间的极值问题](#多维空间的极值问题)
- [本讲知识链条](#本讲知识链条)

---

# 效用函数

## 效用函数的定义

消费者理论一开始用偏好关系 $\succeq$ 来表达选择：

- $\mathbf{x}\succeq\mathbf{y}$：消费者认为消费束 $\mathbf{x}$ 至少不差于 $\mathbf{y}$。
- $\mathbf{x}\succ\mathbf{y}$：严格偏好 $\mathbf{x}$。
- $\mathbf{x}\sim\mathbf{y}$：两者无差异。

但直接操作偏好关系比较麻烦，所以引入 **效用函数（utility function）**。

从商品空间 $X$ 到实数集的映射 $u:X\to\mathbb{R}$，如果满足：

$$
\mathbf{x}\succeq\mathbf{y}
\quad\Longleftrightarrow\quad
u(\mathbf{x})\ge u(\mathbf{y}),
$$

则称 $u(\cdot)$ **代表（represent）** 这一偏好。

这里最重要的是：

> 效用函数的任务，是把消费者对消费束的**排序**转换成数字之间的大小比较。

例如：

$$
u(A)=10,\quad u(B)=7
$$

只说明 $A\succ B$。通常不能进一步解释为“$A$ 带来的幸福是 $B$ 的 $10/7$ 倍”。

---

## 序数效用与单调递增变换

偏好的核心是排序，所以现代消费者理论主要采用 **序数效用（ordinal utility）**。

假设 $u(\mathbf{x})$ 已经代表某个偏好，并对它做一个**严格单调递增变换**：

$$
v(\mathbf{x})=f(u(\mathbf{x})),\qquad f'(u)>0.
$$

由于 $f$ 单调递增：

$$
u(\mathbf{x})\ge u(\mathbf{y})
\Longleftrightarrow
f(u(\mathbf{x}))\ge f(u(\mathbf{y})),
$$

所以 $v(\mathbf{x})$ 与 $u(\mathbf{x})$ 代表**同一个偏好**。

:::TIP
因此，一个偏好通常可以由无数个不同的效用函数表示。

真正需要保持的是**排序**，并不要求保持效用数字本身。
:::

### 例：C-D 效用函数的对数变换

若

$$
u(x_1,x_2)=Ax_1^{\alpha}x_2^{\beta},
$$

对其取对数：

$$
\ln u
=\ln A+\alpha\ln x_1+\beta\ln x_2.
$$

因为 $\ln(\cdot)$ 是严格单调递增函数，所以

$$
Ax_1^{\alpha}x_2^{\beta}
$$

与

$$
\ln A+\alpha\ln x_1+\beta\ln x_2
$$

代表相同的偏好。

课件把常数项写成 $A$ 的形式时，核心意思不变：**只要是单调递增变换，偏好排序就不会改变。**

---

## 常用效用函数

### Cobb-Douglas（C-D）效用函数

一般形式：

$$
u(\mathbf{x})=A\prod_{i=1}^{N}x_i^{\alpha_i}.
$$

两种商品时：

$$
u(x_1,x_2)=Ax_1^{\alpha}x_2^{\beta}.
$$

典型特征：

- 两种商品通常都“有用”；
- 无差异曲线向原点凸；
- 后面会看到，它具有平滑、递减的边际替代率。

### Leontief 效用函数

$$
u(\mathbf{x})=\min\{\alpha_i x_i\}.
$$

两种商品时：

$$
u(x_1,x_2)=\min\{ax_1,bx_2\}.
$$

它描述的是**完全互补品（perfect complements）**。

典型例子：左鞋和右鞋。只有按一定比例配套增加，效用才真正提高。

因此其无差异曲线呈 **L 形**。

### Linear 效用函数

$$
u(\mathbf{x})=\sum_{i=1}^{N}\alpha_i x_i.
$$

两种商品时：

$$
u(x_1,x_2)=ax_1+bx_2.
$$

它对应**完全替代品（perfect substitutes）**。

因为两种商品可以按照固定比例互相替代，所以无差异曲线是直线。

### CES 效用函数

CES = **Constant Elasticity of Substitution，不变替代弹性**。

一般形式：

$$
u(\mathbf{x})=
\left(\sum_{i=1}^{N}\alpha_i x_i^{\rho}\right)^{1/\rho},
\qquad \rho\le 1.
$$

两种商品时：

$$
u(x_1,x_2)=
\left[\gamma x_1^{\rho}+(1-\gamma)x_2^{\rho}\right]^{1/\rho}.
$$

$\rho$ 控制两种商品之间的替代程度。

CES 的重要之处在于：它可以把几种常见偏好统一到一个框架里：

- $\rho\to 1$：趋近线性效用函数 → 完全替代；
- $\rho\to 0$：趋近 C-D 效用函数；
- $\rho\to-\infty$：趋近 Leontief 效用函数 → 完全互补。

:::WARNING
$\rho=0$ 时原表达式本身不能直接代入计算；这里说的是 **$\rho\to0$ 的极限**。
:::

### CES 的商品加总（aggregation）

课件给出一个很有用的性质：可以先把一组商品聚合成一个“复合商品”。

令

$$
v=
\left(\sum_{i=1}^{L}\alpha_i x_i^{\rho}\right)^{1/\rho},
$$

$$
w=
\left(\sum_{i=L+1}^{N}\alpha_i x_i^{\rho}\right)^{1/\rho}.
$$

则原 CES 结构可以继续写成：

$$
u(\mathbf{x})=
\left(v^{\rho}+w^{\rho}\right)^{1/\rho}.
$$

直观上：

> 先把一组细分商品合成为“商品组 $v$”，另一组合成为“商品组 $w$”，再研究两个商品组之间的替代关系。

这使 CES 在宏观、贸易、产业等模型里非常方便。

### 拟线性（quasi-linear）效用函数

$$
u(\mathbf{x})=x_1+v(\mathbf{x}_{-1}),
$$

其中

$$
\mathbf{x}_{-1}=(x_2,x_3,\dots,x_N).
$$

$x_1$ 称为 **计价物（numeraire）**。

两种商品时：

$$
u(x_1,x_2)=x_1+v(x_2).
$$

它的特点是：效用关于 $x_1$ 是线性的，因此 $x_1$ 的边际效用恒定。

### 效用函数可以嵌套组合

课件给出的例子是：

$$
u(x_0,\mathbf{x})
=x_0^{1-\gamma}
\left(\sum_{i=1}^{N}\alpha_i x_i^{\rho}\right)^{\gamma/\rho}.
$$

可以分两层理解：

1. $\mathbf{x}$ 内部先用 CES 结构聚合；
2. 聚合后的 $\mathbf{x}$ 与 $x_0$ 再构成 C-D 关系。

所以现实建模时，常见效用函数并不一定单独使用，也可以按经济含义做成**嵌套结构**。

---

## 无差异集与无差异曲线

给定一个消费束 $\mathbf{x}^*$，与它无差异的所有消费束构成**无差异集（indifference set）**：

$$
I(\mathbf{x}^*)
=\{\mathbf{x}\in X:\mathbf{x}\sim\mathbf{x}^*\}.
$$

因为效用函数表示偏好：

$$
I(\mathbf{x}^*)
=\{\mathbf{x}\in X:u(\mathbf{x})=u(\mathbf{x}^*)=u^*\}.
$$

在两种商品情况下，这就是**无差异曲线（indifference curve）**：

$$
u(x_1,x_2)=u^*.
$$

### C-D 无差异曲线

若

$$
u(x_1,x_2)=Ax_1^{\alpha}x_2^{\beta}=u^*,
$$

解出 $x_2$：

$$
x_2
=\left(\frac{u^*}{Ax_1^{\alpha}}\right)^{1/\beta}.
$$

若两种商品都是“越多越好”，更高的无差异曲线代表更高的效用水平。

![不同效用水平对应的无差异曲线](/images/intermediate-microeconomics/lesson3/indifference_higher_utility.jpg)

### 不同效用函数对应的典型无差异曲线

![常见效用函数的无差异曲线形状](/images/intermediate-microeconomics/lesson3/indifference_shapes.jpg)

- **Leontief**：L 形 → 完全互补；
- **C-D**：平滑、向原点凸；
- **一般 CES**：形状介于完全替代与完全互补之间；
- **Linear**：直线 → 完全替代。

:::TIP
无差异曲线比效用数值本身更接近“偏好”的本质。

如果两个效用函数产生完全相同的无差异曲线，并保持高低方向一致，它们就代表同一个偏好。
:::

---

# 效用函数的性质

## 边际效用

**边际效用（marginal utility, MU）**：在其他商品数量不变时，某一种商品消费量边际增加所带来的效用变化。

对商品 $i$：

$$
MU_i(\mathbf{x})
=\frac{\partial u(\mathbf{x})}{\partial x_i}.
$$

若商品“越多越好”，通常有：

$$
MU_i(\mathbf{x})\ge0.
$$

但要注意：**MU 取决于你给效用函数用了什么数字刻度。**

同一个偏好经过单调递增变换后，效用函数会变，MU 通常也会变。

因此 MU 具有明显的**基数特征**。

---

## 边际效用递减

**边际效用递减规律（law of diminishing marginal utility）**：随着某种商品消费量增加，再多消费一单位所增加的效用越来越小。

数学上：

$$
\frac{\partial MU_i(\mathbf{x})}{\partial x_i}
=\frac{\partial^2u(\mathbf{x})}{\partial x_i^2}
\le0.
$$

课件将其称为 **Gossen's First Law（戈森第一定律）**。

直观例子：

- 很饿时第一块面包带来的满足感很大；
- 吃到第五、第六块时，再增加一块的额外满足通常已经很小。

课件还把这一现象与心理学中的 **affective habituation（情感习惯）** 和 **hedonic adaptation（享乐适应）** 联系起来，用来帮助直观理解“同一种刺激重复出现后，新增感受趋弱”。

:::WARNING
**边际效用递减不是序数偏好的不变性质。**

同一个偏好可以用不同的单调变换效用函数表示，而二阶导数的符号可能受到变换影响。因此后面研究偏好形状时，更重要的是 MRS、凸性等序数概念。
:::

---

## 边际替代率 MRS

**边际替代率（marginal rate of substitution, MRS）**：沿着同一条无差异曲线，增加一种商品时，为维持效用不变，需要用多少另一种商品来补偿。

在两种商品情形，沿无差异曲线：

$$
u(x_i,x_j)=\bar u.
$$

全微分：

$$
du
=MU_i\,dx_i+MU_j\,dx_j=0.
$$

因此：

$$
MU_i\,dx_i=-MU_j\,dx_j,
$$

进而得到：

$$
\frac{dx_j}{dx_i}
=-\frac{MU_i}{MU_j}.
$$

课件采用的定义是：

$$
MRS_{ij}
=\frac{dx_j}{dx_i}
=-\frac{MU_i}{MU_j}.
$$

它就是无差异曲线在该点的**斜率**。

:::WARNING
不同教材对 MRS 的符号约定可能不同。

- 本课课件：$MRS_{ij}=dx_j/dx_i<0$；
- 另一些教材把“愿意放弃多少 $x_j$”定义成正数，因此写成 $-dx_j/dx_i=MU_i/MU_j$。

做题时先看老师采用哪一种约定。
:::

### 直观理解

如果某点：

$$
MRS_{12}=-3,
$$

可以理解为：

> 在保持效用不变的局部范围内，$x_1$ 增加约 1 单位时，消费者愿意减少约 3 单位 $x_2$。

---

## 为什么 MRS 不受单调递增变换影响

这是本讲一个很关键的逻辑。

设新的效用函数为：

$$
v(\mathbf{x})=f(u(\mathbf{x})),\qquad f'(u)>0.
$$

对商品 $i$：

$$
\frac{\partial v}{\partial x_i}
=f'(u)\frac{\partial u}{\partial x_i}
=f'(u)MU_i.
$$

同理：

$$
\frac{\partial v}{\partial x_j}
=f'(u)MU_j.
$$

所以新的 MRS 为：

$$
MRS_{ij}^{v}
=-\frac{f'(u)MU_i}{f'(u)MU_j}
=-\frac{MU_i}{MU_j}
=MRS_{ij}^{u}.
$$

中间共同的 $f'(u)$ 被约掉了。

因此：

> **MU 会因为效用刻度变化而变化；MRS 不会。**

MRS 保留的是偏好的局部斜率信息，所以属于**序数偏好本身的性质**。

---

## 偏好凸性

偏好凸性（convexity）的定义：如果

$$
\mathbf{x}\succeq\mathbf{z},
\qquad
\mathbf{y}\succeq\mathbf{z},
$$

则对任意 $\alpha\in[0,1]$：

$$
\alpha\mathbf{x}+(1-\alpha)\mathbf{y}
\succeq\mathbf{z}.
$$

![偏好凸性的几何含义](/images/intermediate-microeconomics/lesson3/preference_convexity.jpg)

这里的

$$
\alpha\mathbf{x}+(1-\alpha)\mathbf{y}
$$

是 $\mathbf{x}$ 与 $\mathbf{y}$ 的加权平均消费束，也就是连接两点线段上的某一点。

直观上：

> 如果 $\mathbf{x}$ 和 $\mathbf{y}$ 都至少和 $\mathbf{z}$ 一样好，那么把 $\mathbf{x}$、$\mathbf{y}$ 混合起来的组合，也不会比 $\mathbf{z}$ 更差。

这体现消费者对**多样化（diversity）**的偏好。

### 非凸偏好

课件同时给出了非凸的无差异曲线形状：

![偏好非凸的情形](/images/intermediate-microeconomics/lesson3/nonconvex_preferences.jpg)

非凸时，两端消费束都可能很好，但它们的平均组合反而更差，这与“喜欢多样化”的常见假设相冲突。

---

## 边际替代率递减

**边际替代率递减**的直观含义：

> 随着商品 $x_1$ 越来越多，消费者为了再得到一点 $x_1$，愿意放弃的 $x_2$ 越来越少。

![边际替代率递减](/images/intermediate-microeconomics/lesson3/diminishing_mrs.jpg)

沿图中的 A → B → C → D：

- 左侧 $x_1$ 很少、$x_2$ 很多时，消费者很缺 $x_1$，愿意用较多 $x_2$ 换一点 $x_1$；
- 右侧 $x_1$ 已经很多、$x_2$ 较少时，继续增加 $x_1$ 的吸引力变小，愿意放弃的 $x_2$ 也减少。

因此无差异曲线会逐渐变平：

$$
|MRS_{12}|\downarrow
\qquad \text{as }x_1\uparrow.
$$

课件强调：

> **边际替代率递减源于偏好凸性。**

对光滑、单调的偏好来说，向原点凸的无差异曲线就体现了这一点。

### 与“边际效用递减”的区别

这两个概念很容易混：

- **边际效用递减**：看单个 $MU_i$ 随 $x_i$ 怎样变化，依赖效用函数的基数刻度；
- **边际替代率递减**：看 $MU_i/MU_j$ 的相对比率怎样变化，反映无差异曲线形状与偏好凸性。

所以不能简单把“边际效用递减”当成“边际替代率递减”的同义表达。

---

## 替代弹性

**替代弹性（elasticity of substitution）**衡量：

> 商品消费比例变化，对边际替代率变化的敏感程度。

课件定义：

$$
\sigma_{ij}
=\frac{d\ln(x_j/x_i)}{d\ln|MRS_{ij}|}.
$$

为什么用对数？

因为

$$
d\ln z\approx \frac{dz}{z},
$$

所以它比较的是**百分比变化**。

可以把替代弹性理解为：

$$
\sigma_{ij}
\approx
\frac{\text{消费比例的百分比变化}}
{\text{MRS 绝对值的百分比变化}}.
$$

- $\sigma$ 大：相对价格 / MRS 变化一点，消费比例就调整很多 → 容易替代；
- $\sigma$ 小：MRS 变化很多，消费比例仍不愿调整 → 不容易替代。

因为 MRS 在单调递增变换下不变，所以替代弹性也属于**偏好本身的序数性质**。

---

## CES 效用函数与替代弹性

两种商品的 CES 效用函数：

$$
u(x_1,x_2)
=\left[\gamma x_1^{\rho}+(1-\gamma)x_2^{\rho}\right]^{1/\rho}.
$$

### 第一步：求边际效用之比

对 $x_1$：

$$
MU_1
=\left[\gamma x_1^{\rho}+(1-\gamma)x_2^{\rho}\right]^{\frac1\rho-1}
\gamma x_1^{\rho-1}.
$$

对 $x_2$：

$$
MU_2
=\left[\gamma x_1^{\rho}+(1-\gamma)x_2^{\rho}\right]^{\frac1\rho-1}
(1-\gamma)x_2^{\rho-1}.
$$

共同部分约掉：

$$
\left|MRS_{12}\right|
=\frac{MU_1}{MU_2}
=\frac{\gamma}{1-\gamma}
\left(\frac{x_1}{x_2}\right)^{\rho-1}.
$$

### 第二步：取对数

$$
\ln|MRS_{12}|
=\ln\frac{\gamma}{1-\gamma}
+(\rho-1)\ln\frac{x_1}{x_2}.
$$

因为

$$
\ln\frac{x_1}{x_2}
=-\ln\frac{x_2}{x_1},
$$

所以：

$$
d\ln|MRS_{12}|
=(1-\rho)d\ln\frac{x_2}{x_1}.
$$

于是：

$$
\boxed{\sigma_{12}=\frac{1}{1-\rho}}.
$$

这就是“Constant Elasticity of Substitution”的来源：**给定 $\rho$ 后，替代弹性是一个常数。**

对应关系：

- $\rho\to1$：$\sigma\to\infty$ → 完全替代；
- $\rho\to0$：$\sigma=1$ → C-D；
- $\rho\to-\infty$：$\sigma\to0$ → 完全不可替代。

---

# 最优化的数学问题

## 一维无约束极值

考虑：

$$
\max_x f(x).
$$

若最优点 $x^*$ 是光滑函数的内部极值点，则一阶必要条件（FOC）为：

$$
f'(x^*)=0.
$$

但 $f'(x^*)=0$ 只说明曲线在这里“变平”，不能单独保证它是最大值。

因此还要看二阶条件（SOC）：

- 极大值：

$$
f''(x^*)<0;
$$

- 极小值：

$$
f''(x^*)>0.
$$

几何上：

- $f''<0$：曲线在该点附近向下弯；
- $f''>0$：曲线在该点附近向上弯。

---

## 有约束最优化为什么更复杂

现在加入约束，例如：

$$
x\le x_c.
$$

![约束改变可行域](/images/intermediate-microeconomics/lesson3/constraint_boundary.jpg)

原来无约束的极大值点，可能已经落在可行域外面。

此时真正最优点有两种典型情况：

1. **内部最优**：无约束最优点刚好仍在可行域内部；
2. **边界最优**：无约束最优点不可行，只能停在约束边界。

因此，面对约束时，简单使用

$$
f'(x)=0
$$

可能直接错过最优点。

---

## 拉格朗日方程

考虑：

$$
\max_x f(x)
$$

subject to

$$
g(x)\le0.
$$

本课采用的最大化拉格朗日函数写法是：

$$
\mathcal{L}(x,\lambda)
=f(x)-\lambda g(x).
$$

拉格朗日法的核心思想是：

> 把“约束”通过乘子 $\lambda$ 放进目标函数，使约束优化问题能够用类似无约束微分的方法处理。

如果机械地对 $x$ 和 $\lambda$ 都令偏导为 0：

$$
\frac{\partial\mathcal{L}}{\partial x}=0,
$$

$$
\frac{\partial\mathcal{L}}{\partial\lambda}=0,
$$

第二个式子会推出：

$$
g(x^*)=0.
$$

这等于默认“最优点一定在约束边界上”。

但对于不等式约束，这不总成立。

![约束可能在最优点处不起作用](/images/intermediate-microeconomics/lesson3/slack_constraint.jpg)

图中 $x^*<x_c$，此时约束 $x\le x_c$ 并没有真正卡住最优点。

所以必须进一步引入 **KKT / Kuhn-Tucker 条件**。

---

## 库恩-塔克条件

对于

$$
\max_x f(x)
$$

subject to

$$
g(x)\le0,
$$

采用

$$
\mathcal{L}=f(x)-\lambda g(x),
$$

其一阶 KKT 条件可以整理为：

### 1. Stationarity（驻点条件）

$$
\frac{\partial\mathcal{L}}{\partial x}
=f'(x^*)-\lambda^*g'(x^*)=0.
$$

### 2. Primal feasibility（原问题可行性）

$$
g(x^*)\le0.
$$

### 3. Dual feasibility（乘子可行性）

$$
\lambda^*\ge0.
$$

### 4. Complementary slackness（互补松弛）

$$
\boxed{\lambda^*g(x^*)=0}.
$$

互补松弛是理解 KKT 的关键。

因为两个量相乘为 0，所以至少有一个必须为 0。

### 情况 A：约束起作用（binding constraint）

如果约束刚好卡住最优点：

$$
g(x^*)=0.
$$

此时可以有：

$$
\lambda^*>0.
$$

经济含义：放松这个约束可能提高最优目标值，所以这个约束“有价值”。

### 情况 B：约束不起作用（unbinding / non-binding constraint）

如果最优点严格位于可行域内部：

$$
g(x^*)<0,
$$

互补松弛立即要求：

$$
\lambda^*=0.
$$

也就是说，该约束虽然写在问题里，但没有真正限制最优选择。

:::TIP
记忆 KKT 最直观的一句话：

> **约束若“卡住”最优点，乘子可以为正；约束若还有富余，乘子必须为 0。**
:::

---

## 多重约束

如果有两个不等式约束：

$$
\max_x f(x)
$$

subject to

$$
g(x)\le0,
$$

$$
h(x)\le0,
$$

则：

$$
\mathcal{L}(x,\lambda,\mu)
=f(x)-\lambda g(x)-\mu h(x).
$$

每个约束都有自己的乘子和互补松弛条件：

$$
\lambda\ge0,
\qquad
\lambda g(x)=0,
$$

$$
\mu\ge0,
\qquad
\mu h(x)=0.
$$

![多重约束下的 binding 与 unbinding](/images/intermediate-microeconomics/lesson3/multiple_constraints.jpg)

课件图中的三个点非常典型：

- **A 点**：$g(x)=0$，$h(x)<0$ → $g$ 起作用，$h$ 不起作用；
- **B 点**：$h(x)=0$，$g(x)<0$ → $h$ 起作用，$g$ 不起作用；
- **C 点**：$g(x)=0$ 且 $h(x)=0$ → 两个约束都起作用。

多重约束下，出现至少一个 unbinding constraint 是很常见的。

---

## 隐藏约束、角点解与内点解

做消费者问题时，经常有一些容易忘掉的约束，例如：

$$
x_i\ge0.
$$

如果统一把约束写成

$$
g(x)\le0,
$$

那么

$$
x_i\ge0
$$

可以改写成：

$$
-x_i\le0.
$$

课件特别提醒要注意这种**隐藏约束**。

### 内点解（interior solution）

所有非负约束都严格松弛，例如：

$$
x_1^*>0,\quad x_2^*>0.
$$

这时通常可以直接使用光滑的一阶条件。

### 角点解（corner solution）

至少有一种商品消费量碰到边界，例如：

$$
x_2^*=0.
$$

此时不能再简单要求关于 $x_2$ 的普通内部 FOC 等于 0，必须结合 KKT 条件判断。

这也是为什么消费者选择里会出现“把钱全部花在一种商品上”的最优解。

### 最大化与最小化的符号约定

本课建议先把约束统一写成：

$$
g(x)\le0.
$$

然后：

最大化问题使用：

$$
\max\ \mathcal{L}=f(x)-\lambda g(x).
$$

最小化问题使用：

$$
\min\ \mathcal{L}=f(x)+\lambda g(x).
$$

这样更不容易把乘子的符号条件写乱。

---

## 多维空间的极值问题

现在考虑：

$$
f(x_1,x_2).
$$

二维函数不像一维曲线，某一点可能：

- 各方向都向上 → 局部最小值；
- 各方向都向下 → 局部最大值；
- 一个方向向上、另一个方向向下 → **鞍点（saddle point）**。

![多维空间中的局部最小、局部最大与鞍点](/images/intermediate-microeconomics/lesson3/multidimensional_extrema.jpg)

所以多维问题中，仅有一阶条件还不够。

### 一阶条件：梯度为 0

全微分：

$$
df
=\frac{\partial f}{\partial x_1}dx_1
+\frac{\partial f}{\partial x_2}dx_2.
$$

记：

$$
f_1=\frac{\partial f}{\partial x_1},
\qquad
f_2=\frac{\partial f}{\partial x_2}.
$$

则：

$$
df=(f_1,f_2)
\begin{pmatrix}
dx_1\\
dx_2
\end{pmatrix}.
$$

如果在内部极值点，任意微小方向 $(dx_1,dx_2)$ 的一阶变化都不能让函数继续上升或下降，就需要：

$$
\boxed{f_1=0,\qquad f_2=0}.
$$

也就是：

$$
\nabla f=\mathbf{0}.
$$

### 二阶条件：看 Hessian

二阶微分可以写成：

$$
d^2f
=f_{11}dx_1^2
+2f_{12}dx_1dx_2
+f_{22}dx_2^2,
$$

在二阶偏导连续时 $f_{12}=f_{21}$。

矩阵形式：

$$
d^2f
=
\begin{pmatrix}
dx_1 & dx_2
\end{pmatrix}
\underbrace{
\begin{pmatrix}
f_{11} & f_{12}\\
f_{21} & f_{22}
\end{pmatrix}
}_{H\text{：Hessian 海塞矩阵}}
\begin{pmatrix}
dx_1\\
dx_2
\end{pmatrix}.
$$

:::NOTE
课件第 12 页的二阶微分公式中，右下角与部分下标存在明显的排版 / 识别重复。这里按 Hessian 的标准形式整理为 $f_{22}$，并保留课件真正要表达的结论。
:::

对于局部最大值，希望从该点往任意微小方向移动，函数的二阶变化都不为正：

$$
d^2f\le0.
$$

因此 Hessian 需要是**负半定（negative semidefinite）**；若要严格局部极大，一般要求负定。

相应地：

- 局部最大：Hessian 负半定 / 负定；
- 局部最小：Hessian 正半定 / 正定；
- Hessian 呈不定性时，常见结果是鞍点。

:::TIP
**二维问题做题时的常用判别法（补充）**

令

$$
D=f_{11}f_{22}-f_{12}^2.
$$

在驻点：

- $D>0$ 且 $f_{11}<0$ → 局部极大；
- $D>0$ 且 $f_{11}>0$ → 局部极小；
- $D<0$ → 鞍点；
- $D=0$ → 该判别法不能直接判断。
:::

---

# 本讲知识链条

这一讲的逻辑可以压缩成下面一条主线：

### 1. 偏好先被效用函数“数字化”

$$
\mathbf{x}\succeq\mathbf{y}
\Longleftrightarrow
u(\mathbf{x})\ge u(\mathbf{y}).
$$

效用函数只是偏好的表示工具，所以可以做任意严格单调递增变换。

### 2. 固定效用水平，得到无差异曲线

$$
u(x_1,x_2)=\bar u.
$$

曲线上的所有点对消费者来说同样好。

### 3. 沿无差异曲线做微小移动，得到 MRS

$$
MRS_{12}
=\frac{dx_2}{dx_1}
=-\frac{MU_1}{MU_2}.
$$

MRS 描述消费者愿意如何在两种商品之间做局部替代。

### 4. 偏好凸性带来递减 MRS

随着 $x_1$ 增多：

$$
|MRS_{12}|\downarrow.
$$

这反映消费者通常偏好多样化消费。

### 5. 替代弹性衡量“替代有多容易”

$$
\sigma_{12}
=\frac{d\ln(x_2/x_1)}{d\ln|MRS_{12}|}.
$$

CES 的替代弹性恰好恒定：

$$
\sigma=\frac{1}{1-\rho}.
$$

### 6. 最后进入选择问题：在约束下最大化效用

后续消费者理论真正要解决的是：

$$
\max_{\mathbf{x}}u(\mathbf{x})
$$

subject to 预算约束以及 $x_i\ge0$ 等条件。

数学工具就是本讲最后建立的：

- 内点问题：FOC + SOC；
- 等式 / 起作用的约束：Lagrange；
- 不等式与角点：KKT；
- 多维极值：梯度 + Hessian。

> 到这里，前面的“偏好几何”已经和后面的“消费者最优化”完整接上了。
