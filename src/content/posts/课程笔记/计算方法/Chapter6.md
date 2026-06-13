---
title: Chapter6：函数逼近
published: 2026-06-11
description: 曲线拟合、最小二乘法、线性最小二乘、正交多项式、函数的最佳平方逼近
tags: [计算方法]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 当数据点很多、函数形式不确定，或者原函数太复杂时，不再要求函数严格经过每一个点，而是在某种误差标准下，找一个“最接近”的简单函数。

前面插值问题的要求是：

$$
P(x_i)=y_i
$$

也就是插值函数必须严格通过所有给定点。

函数逼近的思路更宽松：

$$
P(x_i) \approx y_i
$$

只要求整体误差尽可能小。

这一章主要讲两类问题：

1. **曲线拟合**：给定离散数据点，找一个函数拟合这些数据。
2. **函数逼近**：给定一个已知函数，用一个较简单的函数去近似它。

这两类问题背后的数学结构很接近：

- 先定义“误差有多大”；
- 再把“误差最小”写成一个优化问题；
- 最后把它转化为线性方程组求解。

---

## 目录

- [概述](#概述)
- [为什么需要函数逼近](#为什么需要函数逼近)
- [误差向量与范数](#误差向量与范数)
  - [$1$ 范数](#1-范数)
  - [$2$ 范数](#2-范数)
  - [$\infty$ 范数](#infty-范数)
- [曲线拟合与最小二乘法](#曲线拟合与最小二乘法)
  - [插值与拟合的区别](#插值与拟合的区别)
  - [最小二乘法的基本思想](#最小二乘法的基本思想)
- [多项式最小二乘拟合](#多项式最小二乘拟合)
  - [一次拟合例子](#一次拟合例子)
  - [一般多项式拟合](#一般多项式拟合)
  - [二次拟合例子](#二次拟合例子)
- [线性最小二乘的一般形式](#线性最小二乘的一般形式)
  - [基函数形式](#基函数形式)
  - [法方程](#法方程)
  - [与超定方程组的关系](#与超定方程组的关系)
- [非线性拟合与变量变换](#非线性拟合与变量变换)
  - [指数拟合](#指数拟合)
  - [双曲线型拟合](#双曲线型拟合)
- [正交函数与正交多项式](#正交函数与正交多项式)
  - [为什么要引入正交基](#为什么要引入正交基)
  - [常见正交多项式](#常见正交多项式)
- [函数的最佳平方逼近](#函数的最佳平方逼近)
  - [函数空间中的内积与范数](#函数空间中的内积与范数)
  - [正交投影观点](#正交投影观点)
  - [一般法方程](#一般法方程)
  - [正交基下的简化](#正交基下的简化)
- [例题：用一次函数逼近 $\sin \pi x$](#例题用一次函数逼近-sin-pi-x)
- [本章小结](#本章小结)

---

## 为什么需要函数逼近

实际问题中经常会遇到两种情况：

1. 手里只有一些观测数据点，比如实验数据、工程测量数据；
2. 原函数已知，但太复杂，不方便直接计算。

这时就希望用一个简单函数代替原数据或原函数。

例如：

- 用直线拟合一组近似线性增长的数据；
- 用二次多项式拟合一段看起来像抛物线的数据；
- 在 $[0,1]$ 上用二次多项式近似 $e^x$；
- 用多项式替代复杂函数，方便后续积分、微分、数值计算。

插值强调“点点通过”，拟合强调“整体接近”。

:::TIP
如果数据来自实验测量，点本身可能含有误差。此时强行让函数通过所有点，反而会把噪声也拟合进去。拟合方法更关注整体趋势。
:::

---

## 误差向量与范数

设拟合函数为 $\varphi(x)$，给定数据点为

$$
(x_i,y_i),\quad i=1,2,\cdots,n
$$

每个点上的误差为

$$
\delta_i = y_i-\varphi(x_i)
$$

于是全部误差可以组成误差向量：

$$
\boldsymbol{\delta}=(\delta_1,\delta_2,\cdots,\delta_n)^T
$$

问题变成：怎样衡量这个误差向量的大小？

常见有三种范数。

### $1$ 范数

$$
\|\boldsymbol{\delta}\|_1=\sum_{i=1}^n |\delta_i|
$$

它关心所有误差绝对值之和。

例如：

$$
(1,0,0,0),\qquad (0.1,0.1,0.1,0.1)
$$

二者的 $1$ 范数分别为：

$$
1,\\ 0.4
$$

所以从 $1$ 范数看，第二个误差向量更小。

### $2$ 范数

$$
\|\boldsymbol{\delta}\|_2=\sqrt{\sum_{i=1}^n \delta_i^2}
$$

这是最常用的误差度量。

原因是它和欧氏距离一致。比如二维中两点距离为：

$$
\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}
$$

这本质上就是 $2$ 范数。

在最小二乘法中，常用的是 $2$ 范数的平方：

$$
\|\boldsymbol{\delta}\|_2^2=\sum_{i=1}^n \delta_i^2
$$

加平方的好处：

- 不改变最小值点；
- 去掉根号，计算更方便；
- 函数光滑，方便求导。

### $\infty$ 范数

$$
\|\boldsymbol{\delta}\|_\infty=\max_{1\le i\le n}|\delta_i|
$$

它只看最大误差。

如果采用 $\infty$ 范数，就意味着：

> 其他点拟合得再好，只要有一个点误差很大，整体误差就很大。

所以不同范数对应不同要求：

- $1$ 范数：看误差总量；
- $2$ 范数：看平方意义下的整体误差；
- $\infty$ 范数：看最坏点误差。

本章主要使用 $2$ 范数。

:::NOTE
课堂上强调：$2$ 范数会把误差“平均”到整体里，允许个别点稍微偏离；$\infty$ 范数要求每一个分量都不能太离谱。实际采用哪一种范数，取决于问题需求。
:::

---

## 曲线拟合与最小二乘法

### 插值与拟合的区别

设有数据点

$$
(x_i,y_i),\quad i=1,2,\cdots,n
$$

插值要求：

$$
\varphi(x_i)=y_i
$$

即函数必须严格通过所有点。

拟合要求：

$$
\varphi(x_i)\approx y_i
$$

即函数只需要整体上接近这些点。

所以：

- 插值适合数据点准确、希望严格通过点的情况；
- 拟合适合数据点较多、带误差、只想找整体趋势的情况。

### 最小二乘法的基本思想

最小二乘法选择拟合函数 $\varphi(x)$，使误差平方和最小：

$$
\sum_{i=1}^n [y_i-\varphi(x_i)]^2 = \min
$$

其中

$$
\delta_i=y_i-\varphi(x_i)
$$

所以它等价于要求

$$
\|\boldsymbol{\delta}\|_2^2=\min
$$

这就是“最小二乘”的来源：

- “二乘”指误差平方；
- “最小”指平方和最小。

---

## 多项式最小二乘拟合

### 一次拟合例子

课堂例子中给出数据：

| $x_i$ | 2 | 4 | 6 | 8 |
|---|---:|---:|---:|---:|
| $y_i$ | 1.1 | 2.8 | 4.9 | 7.2 |

希望用一次函数拟合：

$$
y=a_1x+a_0
$$

目标函数为：

$$
F(a_0,a_1)=\sum_{i=1}^4 (y_i-a_1x_i-a_0)^2
$$

为了让 $F$ 最小，对 $a_0,a_1$ 分别求偏导，并令其为零：

$$
\frac{\partial F}{\partial a_1}=0,\qquad
\frac{\partial F}{\partial a_0}=0
$$

整理得到：

$$
\begin{cases}
\displaystyle a_1\sum_{i=1}^4x_i^2+a_0\sum_{i=1}^4x_i=\sum_{i=1}^4x_iy_i\\[6pt]
\displaystyle a_1\sum_{i=1}^4x_i+4a_0=\sum_{i=1}^4y_i
\end{cases}
$$

代入数据：

$$
\sum x_i=20,\qquad \sum x_i^2=120
$$

$$
\sum y_i=16,\qquad \sum x_iy_i=100.4
$$

于是：

$$
\begin{cases}
120a_1+20a_0=100.4\\
20a_1+4a_0=16
\end{cases}
$$

解得：

$$
a_1=1.02,\qquad a_0=-1.1
$$

所以最小二乘拟合直线为：

$$
\boxed{y=1.02x-1.1}
$$

:::TIP
如果只取两个点，就能直接得到一条插值直线。现在有 4 个点，却只拟合 2 个参数 $a_0,a_1$，对应的是一个超定问题。最小二乘法做的事，就是在不能同时满足全部方程时，找一个整体误差最小的解。
:::

【图片占位：插入 lesson11/lesson12 PPT 中“一次最小二乘拟合数据点及拟合直线”的图，建议放在这里。】

---

### 一般多项式拟合

给定数据点

$$
(x_i,y_i),\quad i=1,2,\cdots,n
$$

希望用 $m$ 次多项式拟合：

$$
P_m(x)=a_0+a_1x+a_2x^2+\cdots+a_mx^m
$$

其中 $m<n$。

目标函数为：

$$
F(a_0,a_1,\cdots,a_m)=\sum_{i=1}^n [y_i-P_m(x_i)]^2
$$

令

$$
\frac{\partial F}{\partial a_j}=0,
\quad j=0,1,\cdots,m
$$

可得法方程：

$$
\sum_{k=0}^m a_k\sum_{i=1}^n x_i^{j+k}
=\sum_{i=1}^n y_ix_i^j,
\quad j=0,1,\cdots,m
$$

写成矩阵形式：

$$
\begin{bmatrix}
 n & \sum x_i & \sum x_i^2 & \cdots & \sum x_i^m\\
 \sum x_i & \sum x_i^2 & \sum x_i^3 & \cdots & \sum x_i^{m+1}\\
 \sum x_i^2 & \sum x_i^3 & \sum x_i^4 & \cdots & \sum x_i^{m+2}\\
 \vdots & \vdots & \vdots & & \vdots\\
 \sum x_i^m & \sum x_i^{m+1} & \sum x_i^{m+2} & \cdots & \sum x_i^{2m}
\end{bmatrix}
\begin{bmatrix}
a_0\\a_1\\a_2\\ \vdots\\a_m
\end{bmatrix}
=
\begin{bmatrix}
\sum y_i\\
\sum y_ix_i\\
\sum y_ix_i^2\\
\vdots\\
\sum y_ix_i^m
\end{bmatrix}
$$

这个矩阵是对称矩阵。

只要数据点足够、基函数线性无关，通常可以得到唯一解。

---

### 二次拟合例子

课本例子给出数据：

| $x_i$ | -1 | -0.75 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $y_i$ | -0.2209 | 0.3295 | 0.8826 | 1.4392 | 2.0003 | 2.5645 | 3.1334 | 3.7601 | 4.2836 |

用二次多项式

$$
P_2(x)=a_0+a_1x+a_2x^2
$$

拟合。

根据多项式最小二乘法，代入数据得到法方程：

$$
\begin{cases}
9a_0+3.75a_2=18.1723\\
3.75a_0+3.75a_2+0a_1=8.4842\\
3.75a_0+2.7656a_2=7.6173
\end{cases}
$$

整理求解后得到：

$$
a_0=2.0034,
\qquad a_1=2.2625,
\qquad a_2=0.0378
$$

所以拟合多项式为：

$$
\boxed{P_2(x)=2.0034+2.2625x+0.0378x^2}
$$

【图片占位：插入课本图 6-1 或 PPT 中“数据点分布与二次拟合曲线”的图。】

---

## 线性最小二乘的一般形式

### 基函数形式

多项式拟合只是线性最小二乘的一种特殊情况。

更一般地，设拟合函数属于某个由基函数张成的函数空间：

$$
\varphi(x)=a_1\varphi_1(x)+a_2\varphi_2(x)+\cdots+a_m\varphi_m(x)
$$

其中

$$
\varphi_1(x),\varphi_2(x),\cdots,\varphi_m(x)
$$

是已知基函数，未知量是系数

$$
a_1,a_2,\cdots,a_m
$$

目标为：

$$
\sum_{i=1}^n\left[y_i-\sum_{j=1}^m a_j\varphi_j(x_i)\right]^2=\min
$$

这叫**线性最小二乘**。

这里的“线性”指的是：

> 拟合函数对未知参数 $a_j$ 是线性的。

基函数本身可以很复杂，比如 $\sin x$、$e^x$、$\ln x$ 等，只要它们前面的待定参数是线性组合形式即可。

### 法方程

令目标函数对每个 $a_j$ 求偏导，并令其为零：

$$
\frac{\partial}{\partial a_j}
\sum_{i=1}^n\left[y_i-\sum_{k=1}^m a_k\varphi_k(x_i)\right]^2=0
$$

整理得到：

$$
\sum_{k=1}^m a_k\sum_{i=1}^n\varphi_k(x_i)\varphi_j(x_i)
=
\sum_{i=1}^n y_i\varphi_j(x_i),
\quad j=1,2,\cdots,m
$$

写成矩阵形式：

$$
G\boldsymbol{a}=\boldsymbol{b}
$$

其中

$$
G_{jk}=\sum_{i=1}^n\varphi_k(x_i)\varphi_j(x_i)
$$

$$
b_j=\sum_{i=1}^n y_i\varphi_j(x_i)
$$

$G$ 称为 Gram 矩阵。

---

### 与超定方程组的关系

把所有数据点代入拟合函数，可得到：

$$
\begin{cases}
\varphi_1(x_1)a_1+\varphi_2(x_1)a_2+\cdots+\varphi_m(x_1)a_m\approx y_1\\
\varphi_1(x_2)a_1+\varphi_2(x_2)a_2+\cdots+\varphi_m(x_2)a_m\approx y_2\\
\qquad\vdots\\
\varphi_1(x_n)a_1+\varphi_2(x_n)a_2+\cdots+\varphi_m(x_n)a_m\approx y_n
\end{cases}
$$

写成矩阵形式：

$$
A\boldsymbol{a}\approx \boldsymbol{y}
$$

其中

$$
A=\begin{bmatrix}
\varphi_1(x_1)&\varphi_2(x_1)&\cdots&\varphi_m(x_1)\\
\varphi_1(x_2)&\varphi_2(x_2)&\cdots&\varphi_m(x_2)\\
\vdots&\vdots&&\vdots\\
\varphi_1(x_n)&\varphi_2(x_n)&\cdots&\varphi_m(x_n)
\end{bmatrix}
$$

当 $n>m$ 时，方程个数多于未知数个数，一般不能精确求解。

线性代数中处理这类超定方程组的标准方法是法方程：

$$
A^TA\boldsymbol{a}=A^T\boldsymbol{y}
$$

如果 $A^TA$ 非奇异，则：

$$
\boldsymbol{a}=(A^TA)^{-1}A^T\boldsymbol{y}
$$

这和前面通过求偏导得到的最小二乘法方程是同一件事。

:::TIP
课堂上用一次拟合例子说明：

$$
A=\begin{bmatrix}
2&1\\4&1\\6&1\\8&1
\end{bmatrix}
$$

则

$$
A^TA=\begin{bmatrix}
120&20\\20&4
\end{bmatrix}
$$

这正好就是前面由偏导得到的系数矩阵。
:::

---

## 非线性拟合与变量变换

### 指数拟合

若经验公式为：

$$
y=be^{ax}
$$

未知参数是 $a,b$。

这个式子对 $a,b$ 不是线性组合，因此不能直接使用线性最小二乘公式。

一种办法是直接最小化：

$$
F(a,b)=\sum_{i=1}^n(y_i-be^{ax_i})^2
$$

然后求

$$
\frac{\partial F}{\partial a}=0,
\qquad
\frac{\partial F}{\partial b}=0
$$

但这样会得到非线性方程，计算通常更麻烦。

另一种办法是变量变换。

对

$$
y=be^{ax}
$$

两边取对数：

$$
\ln y=\ln b+ax
$$

令

$$
Y=\ln y,
\qquad A_0=\ln b
$$

则变成一次线性模型：

$$
Y=A_0+ax
$$

先对 $(x_i,\ln y_i)$ 做线性最小二乘拟合，得到 $A_0,a$，再由

$$
b=e^{A_0}
$$

还原出 $b$。

:::WARNING
这种变换改变了误差意义。原来最小化的是 $y_i-be^{ax_i}$ 的平方和；取对数后，最小化的是 $\ln y_i-(\ln b+ax_i)$ 的平方和。它们一般不是同一个优化问题。
:::

课本指数拟合例子中，设

$$
I=I_0e^{-\alpha t}
$$

给定数据：

| $t_i$ | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $I_i$ | 3.16 | 2.38 | 1.75 | 1.34 | 1.00 | 0.74 | 0.56 |

取对数后：

$$
\ln I=\ln I_0-\alpha t
$$

用一次最小二乘拟合得到：

$$
\ln I_0=1.73,
\qquad -\alpha=-2.89
$$

所以：

$$
I_0=e^{1.73}\approx 5.64,
\qquad \alpha=2.89
$$

最终经验公式为：

$$
\boxed{I=5.64e^{-2.89t}}
$$

---

### 双曲线型拟合

若经验公式为：

$$
y=\frac{1}{ax+b}
$$

可取倒数：

$$
\frac{1}{y}=ax+b
$$

令

$$
Y=\frac{1}{y}
$$

则转化为一次线性拟合：

$$
Y=ax+b
$$

如果经验公式为：

$$
y=\frac{x}{a+bx}
$$

则可变形为：

$$
\frac{1}{y}=b+a\frac{1}{x}
$$

令

$$
X=\frac{1}{x},\qquad Y=\frac{1}{y}
$$

得到：

$$
Y=aX+b
$$

再做一次线性最小二乘拟合。

---

## 正交函数与正交多项式

### 为什么要引入正交基

在线性最小二乘中，若基函数为

$$
\varphi_0(x),\varphi_1(x),\cdots,\varphi_m(x)
$$

需要解法方程：

$$
\sum_{k=0}^m a_k(\varphi_k,\varphi_j)=(f,\varphi_j)
$$

如果基函数两两正交，即

$$
(\varphi_i,\varphi_j)=0,\quad i\ne j
$$

那么方程组会大大简化。

此时每个系数都可以单独求：

$$
a_j=\frac{(f,\varphi_j)}{(\varphi_j,\varphi_j)}
$$

这就是正交基的价值。

:::TIP
普通基函数 $1,x,x^2,\cdots$ 通常不正交，所以法方程是满矩阵。换成正交多项式后，Gram 矩阵变成对角矩阵，求系数会简单很多。
:::

### 常见正交多项式

课本中列出了几类常用正交多项式。

#### Legendre 多项式

在区间 $[-1,1]$ 上，权函数 $\rho(x)=1$。

前几个 Legendre 多项式为：

$$
P_0(x)=1
$$

$$
P_1(x)=x
$$

$$
P_2(x)=\frac{1}{2}(3x^2-1)
$$

$$
P_3(x)=\frac{1}{2}(5x^3-3x)
$$

它们满足正交关系：

$$
\int_{-1}^{1}P_n(x)P_m(x)dx=0,
\quad n\ne m
$$

#### Chebyshev 多项式

第一类 Chebyshev 多项式定义为：

$$
T_n(x)=\cos(n\arccos x)
$$

前几个为：

$$
T_0(x)=1
$$

$$
T_1(x)=x
$$

$$
T_2(x)=2x^2-1
$$

$$
T_3(x)=4x^3-3x
$$

它们在 $[-1,1]$ 上关于权函数

$$
\rho(x)=\frac{1}{\sqrt{1-x^2}}
$$

正交。

#### Laguerre 多项式

Laguerre 多项式通常用于 $[0,+\infty)$ 上，权函数为

$$
\rho(x)=e^{-x}
$$

前几个为：

$$
L_0(x)=1
$$

$$
L_1(x)=1-x
$$

$$
L_2(x)=x^2-4x+2
$$

:::NOTE
课堂上没有把正交多项式作为一个独立技术章节完整展开，而是在讲函数最佳平方逼近时用到了“正交投影”的思想。因此这里保留正交多项式的核心用途：它是简化最小二乘法方程的工具。
:::

---

## 函数的最佳平方逼近

### 函数空间中的内积与范数

前面处理的是离散数据点。

现在考虑连续函数：在区间 $[a,b]$ 上，用一个简单函数 $\varphi(x)$ 逼近已知函数 $f(x)$。

为了衡量两个函数的接近程度，引入函数内积：

$$
(f,g)=\int_a^b f(x)g(x)dx
$$

更一般地，可以带权函数 $\rho(x)$：

$$
(f,g)=\int_a^b \rho(x)f(x)g(x)dx
$$

由内积定义函数范数：

$$
\|f\|_2=\sqrt{(f,f)}
=\sqrt{\int_a^b \rho(x)f^2(x)dx}
$$

于是 $f$ 与 $\varphi$ 的距离为：

$$
\|f-\varphi\|_2
=\sqrt{\int_a^b\rho(x)[f(x)-\varphi(x)]^2dx}
$$

最佳平方逼近就是求

$$
\int_a^b\rho(x)[f(x)-\varphi(x)]^2dx=\min
$$

---

### 正交投影观点

假设要在函数空间

$$
\Phi=\text{span}\{\varphi_0,\varphi_1,\cdots,\varphi_m\}
$$

中找一个函数

$$
\varphi^*(x)=\sum_{k=0}^m a_k\varphi_k(x)
$$

使它最接近 $f(x)$。

几何上，这就是把 $f$ 投影到子空间 $\Phi$ 上。

最优条件是：误差函数

$$
r(x)=f(x)-\varphi^*(x)
$$

与子空间 $\Phi$ 中所有函数正交。

只要它与一组基函数都正交即可：

$$
(f-\varphi^*,\varphi_j)=0,
\quad j=0,1,\cdots,m
$$

这就是最佳平方逼近的核心条件。

:::TIP
课堂上用 $e^x$ 在 $[0,1]$ 上用二次多项式逼近来说明：

$$
e^x \approx ax^2+bx+c
$$

直接求导当然可以，但更好的理解是：在 $\text{span}\{1,x,x^2\}$ 这个函数空间里，找 $e^x$ 的正交投影。
:::

【图片占位：插入 PPT 中“函数空间投影/误差与基函数正交”的示意图。】

---

### 一般法方程

把

$$
\varphi^*(x)=\sum_{k=0}^m a_k\varphi_k(x)
$$

代入正交条件：

$$
(f-\sum_{k=0}^m a_k\varphi_k,\varphi_j)=0
$$

得到：

$$
\sum_{k=0}^m a_k(\varphi_k,\varphi_j)=(f,\varphi_j),
\quad j=0,1,\cdots,m
$$

写成矩阵形式：

$$
\begin{bmatrix}
(\varphi_0,\varphi_0)&(\varphi_1,\varphi_0)&\cdots&(\varphi_m,\varphi_0)\\
(\varphi_0,\varphi_1)&(\varphi_1,\varphi_1)&\cdots&(\varphi_m,\varphi_1)\\
\vdots&\vdots&&\vdots\\
(\varphi_0,\varphi_m)&(\varphi_1,\varphi_m)&\cdots&(\varphi_m,\varphi_m)
\end{bmatrix}
\begin{bmatrix}
a_0\\a_1\\\vdots\\a_m
\end{bmatrix}
=
\begin{bmatrix}
(f,\varphi_0)\\(f,\varphi_1)\\\vdots\\(f,\varphi_m)
\end{bmatrix}
$$

这和离散最小二乘法方程完全对应。

区别只在于：

- 离散情形中，内积是求和；
- 连续情形中，内积是积分。

### 正交基下的简化

如果

$$
(\varphi_i,\varphi_j)=0,
\quad i\ne j
$$

则法方程变为对角形式：

$$
a_j(\varphi_j,\varphi_j)=(f,\varphi_j)
$$

所以

$$
\boxed{a_j=\frac{(f,\varphi_j)}{(\varphi_j,\varphi_j)}}
$$

最终最佳平方逼近函数为：

$$
\boxed{\varphi^*(x)=\sum_{j=0}^m\frac{(f,\varphi_j)}{(\varphi_j,\varphi_j)}\varphi_j(x)}
$$

---

## 例题：用一次函数逼近 $\sin \pi x$

在 $[0,1]$ 上，用一次多项式逼近

$$
f(x)=\sin \pi x
$$

取基函数：

$$
\varphi_0(x)=1,
\qquad
\varphi_1(x)=x
$$

设逼近函数为：

$$
\varphi(x)=a_0+a_1x
$$

内积取普通积分：

$$
(f,g)=\int_0^1 f(x)g(x)dx
$$

法方程为：

$$
\begin{cases}
(\varphi_0,\varphi_0)a_0+(\varphi_1,\varphi_0)a_1=(f,\varphi_0)\\
(\varphi_0,\varphi_1)a_0+(\varphi_1,\varphi_1)a_1=(f,\varphi_1)
\end{cases}
$$

分别计算：

$$
(\varphi_0,\varphi_0)=\int_0^1 1dx=1
$$

$$
(\varphi_0,\varphi_1)=\int_0^1 xdx=\frac12
$$

$$
(\varphi_1,\varphi_1)=\int_0^1 x^2dx=\frac13
$$

$$
(f,\varphi_0)=\int_0^1 \sin \pi x\,dx=\frac{2}{\pi}
$$

$$
(f,\varphi_1)=\int_0^1 x\sin \pi x\,dx=\frac{1}{\pi}
$$

所以：

$$
\begin{cases}
a_0+\frac12a_1=\frac{2}{\pi}\\[4pt]
\frac12a_0+\frac13a_1=\frac{1}{\pi}
\end{cases}
$$

解得：

$$
a_0=\frac{2}{\pi},
\qquad
a_1=0
$$

因此最佳一次平方逼近为：

$$
\boxed{\varphi(x)=\frac{2}{\pi}}
$$

这个结果看起来有点特别：一次项系数为 0。

原因是 $\sin\pi x$ 在 $x=\frac12$ 附近对称，用一次函数在整体平方误差意义下逼近时，斜率项被抵消了。

---

## 本章小结

这一章的主线可以概括为：

> 用简单函数近似复杂对象，本质上是一个“误差最小化”问题。

核心知识点：

1. **误差向量需要范数衡量**
   - $1$ 范数看误差总量；
   - $2$ 范数看平方意义下的整体误差；
   - $\infty$ 范数看最大误差。

2. **最小二乘法最常用 $2$ 范数**
   - 目标函数为误差平方和；
   - 平方形式光滑，方便求导；
   - 最后可转化为线性方程组。

3. **多项式拟合是线性最小二乘的特殊情况**
   - 拟合函数为 $a_0+a_1x+\cdots+a_mx^m$；
   - 令偏导为零得到法方程。

4. **线性最小二乘等价于超定方程组的法方程**
   - 若 $A\boldsymbol{a}\approx \boldsymbol{y}$，则解
     $$
     A^TA\boldsymbol{a}=A^T\boldsymbol{y}
     $$
   - 这和微积分求偏导得到的结果一致。

5. **非线性拟合有两条路**
   - 直接求非线性最小二乘；
   - 通过变量变换转化为线性拟合。

6. **函数最佳平方逼近是连续版最小二乘**
   - 离散数据中用求和；
   - 连续函数中用积分；
   - 最优条件是误差与逼近空间正交。

7. **正交基能简化计算**
   - 一般基函数要解完整法方程；
   - 正交基下系数可直接写为
     $$
     a_j=\frac{(f,\varphi_j)}{(\varphi_j,\varphi_j)}
     $$

这一章和后续数值计算、数据拟合、机器学习都有联系。课堂上提到的神经网络训练，本质上也可以看作在一个很大的参数空间里，使某种误差函数最小。
