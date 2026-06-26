---
title: Chapter5：特征值和特征向量/矩阵对角化
published: 2026-06-10
updated: 2026-06-20
description: 特征值与特征向量、矩阵对角化、矩阵相似理论、实对称矩阵的正交对角化
tags: [线性代数]
category: 课程笔记
draft: false
---

## 概述

这一章的核心问题是：

> 能否通过更换一组基，把一个复杂矩阵化成对角矩阵，从而把矩阵运算转化成对角元素的运算？

若存在可逆矩阵 $P$，使

$$
P^{-1}AP=\Lambda=\operatorname{diag}(\lambda_1,\lambda_2,\dots,\lambda_n),
$$

则称 $A$ **可对角化**。此时：

- $\lambda_1,\lambda_2,\dots,\lambda_n$ 是 $A$ 的特征值；
- $P$ 的各列是与这些特征值依次对应的特征向量；
- $A^k$、矩阵多项式 $f(A)$ 等均可借助对角矩阵快速计算；
- 当 $A$ 为实对称矩阵时，可以进一步选取正交矩阵 $U$ 完成对角化。

本章的主线为：

1. 求特征值；
2. 求各特征值对应的特征子空间；
3. 判断能否选出 $n$ 个线性无关的特征向量；
4. 构造可逆矩阵 $P$ 或正交矩阵 $U$；
5. 利用对角化计算矩阵的方幂、矩阵多项式和行列式。

:::NOTE
**教学范围**

两次课程完整讲授了教材中的：

- 5.1 特征值和特征向量
- 5.2 矩阵对角化
- 5.3 矩阵相似的理论和应用
- 5.4 实对称矩阵的对角化

教材 5.5 为全章概要与小结，课堂未将其作为新的知识板块单独讲授，因此本笔记不另设 5.5。

课堂明确略去的证明：

- 特征子空间维数不超过特征根重数的证明；
- 任意实对称矩阵均可正交对角化的完整证明。

这两个结论仍需掌握并会使用。
:::

<!-- 图片占位符：如有老师板书截图，可在此插入“第五章知识结构图：特征值 → 特征子空间 → 可对角化判定 → 相似理论 → 实对称矩阵正交对角化”。 -->

---

## 目录

- [概述](#概述)
- [5.1 特征值和特征向量](#51-特征值和特征向量)
  - [从矩阵对角化引出特征值](#从矩阵对角化引出特征值)
  - [特征值与特征向量的定义](#特征值与特征向量的定义)
  - [特征值与特征向量的基本关系](#特征值与特征向量的基本关系)
  - [特征多项式与特征方程](#特征多项式与特征方程)
  - [特征子空间](#特征子空间)
  - [求特征值和特征向量的标准步骤](#求特征值和特征向量的标准步骤)
  - [例 5.1.1：对角元相同、非对角元相同的矩阵](#例-511对角元相同非对角元相同的矩阵)
  - [例 5.1.3：完整求特征值和特征向量](#例-513完整求特征值和特征向量)
  - [实矩阵可能具有复特征值](#实矩阵可能具有复特征值)
- [5.2 矩阵对角化](#52-矩阵对角化)
  - [属于不同特征值的特征向量线性无关](#属于不同特征值的特征向量线性无关)
  - [特征子空间基的合并仍线性无关](#特征子空间基的合并仍线性无关)
  - [可对角化的三个充要条件](#可对角化的三个充要条件)
  - [代数重数与几何重数](#代数重数与几何重数)
  - [判断可对角化的计算流程](#判断可对角化的计算流程)
  - [例 5.2.1：互异特征值保证可对角化](#例-521互异特征值保证可对角化)
  - [例 5.2.2：重根对应的特征向量不足](#例-522重根对应的特征向量不足)
  - [例 5.2.3：重根仍可能可对角化](#例-523重根仍可能可对角化)
  - [例 5.2.4：利用重数直接求秩](#例-524利用重数直接求秩)
  - [例 5.2.5：含参数的秩一矩阵](#例-525含参数的秩一矩阵)
  - [例 5.2.6：非零幂零矩阵不能对角化](#例-526非零幂零矩阵不能对角化)
- [5.3 矩阵相似的理论和应用](#53-矩阵相似的理论和应用)
  - [特征多项式的两个重要系数](#特征多项式的两个重要系数)
  - [矩阵方幂与矩阵多项式的特征值](#矩阵方幂与矩阵多项式的特征值)
  - [逆矩阵的特征值](#逆矩阵的特征值)
  - [相似矩阵的共同性质](#相似矩阵的共同性质)
  - [相同特征值何时能推出相似](#相同特征值何时能推出相似)
  - [相似关系与矩阵多项式](#相似关系与矩阵多项式)
  - [利用对角化计算方幂与多项式](#利用对角化计算方幂与多项式)
  - [例 5.3.1：矩阵多项式的特征值、行列式与矩阵值](#例-531矩阵多项式的特征值行列式与矩阵值)
  - [例 5.3.2：伴随矩阵与矩阵多项式](#例-532伴随矩阵与矩阵多项式)
  - [例 5.3.5：计算高次方](#例-535计算高次方)
- [5.4 实对称矩阵的对角化](#54-实对称矩阵的对角化)
  - [实对称矩阵的特征值均为实数](#实对称矩阵的特征值均为实数)
  - [不同特征值对应的特征向量正交](#不同特征值对应的特征向量正交)
  - [实对称矩阵的正交对角化定理](#实对称矩阵的正交对角化定理)
  - [求正交矩阵的标准步骤](#求正交矩阵的标准步骤)
  - [例 5.4.1：三个互异特征值](#例-541三个互异特征值)
  - [例 5.4.2：重根情形需要施密特正交化](#例-542重根情形需要施密特正交化)
- [课堂综合例题](#课堂综合例题)
  - [正交矩阵的行列式为负时必有特征值 -1](#正交矩阵的行列式为负时必有特征值--1)
  - [幂等矩阵的行列式计算](#幂等矩阵的行列式计算)
- [全章解题框架](#全章解题框架)
- [易错点](#易错点)

---

## 5.1 特征值和特征向量

### 从矩阵对角化引出特征值

设 $A$ 为 $n$ 阶方阵。若 $A$ 可对角化，则存在可逆矩阵 $P$，使

$$
P^{-1}AP=\Lambda,
\qquad
\Lambda=\operatorname{diag}(\lambda_1,\lambda_2,\dots,\lambda_n).
$$

两边左乘 $P$，得到

$$
AP=P\Lambda.
$$

将 $P$ 按列分块：

$$
P=[\xi_1,\xi_2,\dots,\xi_n].
$$

由于 $P$ 可逆，其列向量 $\xi_1,\dots,\xi_n$ 线性无关。另一方面，

$$
AP=[A\xi_1,A\xi_2,\dots,A\xi_n],
$$

而

$$
P\Lambda=[\lambda_1\xi_1,\lambda_2\xi_2,\dots,\lambda_n\xi_n].
$$

因此

$$
A\xi_i=\lambda_i\xi_i,
\qquad i=1,2,\dots,n.
$$

这说明矩阵能否对角化，最终取决于能否找到足够多的、满足 $A\xi=\lambda\xi$ 的线性无关向量。

### 特征值与特征向量的定义

设 $A$ 为 $n$ 阶方阵。若存在数 $\lambda$ 和非零向量 $\xi$，使

$$
A\xi=\lambda\xi,
\qquad \xi\neq 0,
$$

则称：

- $\lambda$ 为 $A$ 的一个 **特征值**；
- $\xi$ 为 $A$ 的属于特征值 $\lambda$ 的一个 **特征向量**。

:::WARNING
定义中必须有 $\xi\neq 0$。

若允许 $\xi=0$，则对任意 $\lambda$ 都有 $A0=\lambda0$，定义将失去意义。
:::

### 特征值与特征向量的基本关系

#### 一个特征向量只能属于一个特征值

若同一非零向量 $\xi$ 同时满足

$$
A\xi=\lambda_1\xi,
\qquad
A\xi=\lambda_2\xi,
$$

则

$$
(\lambda_1-\lambda_2)\xi=0.
$$

因为 $\xi\neq 0$，所以

$$
\lambda_1=\lambda_2.
$$

#### 一个特征值有无穷多个特征向量

若

$$
A\xi=\lambda\xi,
\qquad \xi\neq 0,
$$

则对任意非零数 $k$，

$$
A(k\xi)=kA\xi=k\lambda\xi=\lambda(k\xi).
$$

因此 $k\xi$ 仍是属于 $\lambda$ 的特征向量。

这也说明：特征向量通常成族出现，真正需要确定的是其所在的特征子空间。

### 特征多项式与特征方程

由

$$
A\xi=\lambda\xi
$$

可得

$$
(\lambda E-A)\xi=0.
$$

要使该齐次线性方程组有非零解，必须且只需

$$
|\lambda E-A|=0.
$$

定义

$$
f_A(\lambda)=|\lambda E-A|
$$

为 $A$ 的 **特征多项式**，方程

$$
f_A(\lambda)=0
$$

称为 $A$ 的 **特征方程**。

由于 $f_A(\lambda)$ 是首项系数为 $1$ 的 $n$ 次多项式，根据代数基本定理，在复数域中共有 $n$ 个根，按重数计算。这些根正是 $A$ 的全部特征值。

两种常见表述：

- $\lambda_1,\lambda_2,\dots,\lambda_n$ 表示全部特征值，允许相等；
- $\lambda_1,\lambda_2,\dots,\lambda_s$ 表示全部互异特征值，其重数分别为 $n_1,n_2,\dots,n_s$，满足

$$
n_1+n_2+\cdots+n_s=n.
$$

此时

$$
f_A(\lambda)
=(\lambda-\lambda_1)^{n_1}
(\lambda-\lambda_2)^{n_2}
\cdots
(\lambda-\lambda_s)^{n_s}.
$$

### 特征子空间

设 $\lambda_i$ 为 $A$ 的特征值。齐次线性方程组

$$
(\lambda_iE-A)X=0
$$

的解空间记为

$$
W_{\lambda_i}=\ker(\lambda_iE-A),
$$

称为属于 $\lambda_i$ 的 **特征子空间**。

其维数为

$$
\dim W_{\lambda_i}
=n-r(\lambda_iE-A).
$$

若 $W_{\lambda_i}$ 的一组基为

$$
\xi_{i1},\xi_{i2},\dots,\xi_{ir_i},
$$

则属于 $\lambda_i$ 的全部特征向量为

$$
\xi=t_1\xi_{i1}+t_2\xi_{i2}+\cdots+t_{r_i}\xi_{ir_i},
$$

其中 $t_1,t_2,\dots,t_{r_i}$ 不全为零。

:::TIP
特征子空间中包含零向量；特征向量不包含零向量。

因此：

$$
\{\text{属于 }\lambda_i\text{ 的特征向量}\}
=W_{\lambda_i}\setminus\{0\}.
$$
:::

### 求特征值和特征向量的标准步骤

1. 计算特征多项式

$$
f_A(\lambda)=|\lambda E-A|.
$$

2. 解特征方程

$$
f_A(\lambda)=0,
$$

求出全部互异特征值 $\lambda_1,\dots,\lambda_s$ 及其重数。

3. 对每个 $\lambda_i$，解

$$
(\lambda_iE-A)X=0,
$$

求出特征子空间的一组基。

4. 将基础解系作不全为零的线性组合，写出全部特征向量。

### 例 5.1.1：对角元相同、非对角元相同的矩阵

设

$$
A=
\begin{bmatrix}
a&b&b&\cdots&b\\
b&a&b&\cdots&b\\
\vdots&\vdots&\vdots&&\vdots\\
b&b&b&\cdots&a
\end{bmatrix}.
$$

取

$$
\xi=
\begin{bmatrix}
1\\1\\\vdots\\1
\end{bmatrix},
$$

则每一行与 $\xi$ 相乘的结果均为

$$
a+(n-1)b.
$$

所以

$$
A\xi=[a+(n-1)b]\xi.
$$

因此

$$
\lambda=a+(n-1)b
$$

是 $A$ 的一个特征值，$\xi$ 是其对应的特征向量。

进一步可得

$$
f_A(\lambda)
=[\lambda-a-(n-1)b](\lambda-a+b)^{n-1}.
$$

故全部特征值为

$$
\lambda_1=a+(n-1)b,
\qquad
\lambda_2=\cdots=\lambda_n=a-b.
$$

当 $a=0$ 时，特征值为

$$
(n-1)b,
\qquad
-b\quad(n-1\text{ 重}).
$$

### 例 5.1.3：完整求特征值和特征向量

设

$$
A=
\begin{bmatrix}
-1&1&0\\
-4&3&0\\
1&0&2
\end{bmatrix}.
$$

先求特征多项式：

$$
\begin{aligned}
f_A(\lambda)
&=|\lambda E-A|\\
&=
\begin{vmatrix}
\lambda+1&-1&0\\
4&\lambda-3&0\\
-1&0&\lambda-2
\end{vmatrix}\\
&=(\lambda-2)(\lambda-1)^2.
\end{aligned}
$$

因此

$$
\lambda_1=2,
\qquad
\lambda_2=\lambda_3=1.
$$

#### 属于 $\lambda=2$ 的特征向量

解

$$
(2E-A)X=0,
$$

即

$$
\begin{bmatrix}
3&-1&0\\
4&-1&0\\
-1&0&0
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\x_3
\end{bmatrix}
=0.
$$

其基础解系可取

$$
\xi_1=
\begin{bmatrix}
0\\0\\1
\end{bmatrix}.
$$

所以属于 $2$ 的全部特征向量为

$$
k\xi_1,
\qquad k\neq 0.
$$

#### 属于 $\lambda=1$ 的特征向量

解

$$
(E-A)X=0,
$$

即

$$
\begin{bmatrix}
2&-1&0\\
4&-2&0\\
-1&0&-1
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\x_3
\end{bmatrix}
=0.
$$

其基础解系可取

$$
\xi_2=
\begin{bmatrix}
1\\2\\-1
\end{bmatrix}.
$$

所以属于 $1$ 的全部特征向量为

$$
k\xi_2,
\qquad k\neq 0.
$$

### 实矩阵可能具有复特征值

设

$$
A=
\begin{bmatrix}
0&1&0\\
-1&0&0\\
3&2&1
\end{bmatrix}.
$$

则

$$
f_A(\lambda)
=(\lambda-1)(\lambda^2+1).
$$

- 若只在实数域中讨论，特征值只有 $1$；
- 若在复数域中讨论，全部特征值为

$$
1,
\qquad i,
\qquad -i.
$$

因此，讨论特征值时必须明确所处数域。

---

## 5.2 矩阵对角化

### 属于不同特征值的特征向量线性无关

设 $\lambda_1,\lambda_2,\dots,\lambda_s$ 是 $A$ 的互异特征值，$\xi_i$ 是属于 $\lambda_i$ 的特征向量，则

$$
\xi_1,\xi_2,\dots,\xi_s
$$

线性无关。

#### 证明思路：数学归纳法

当 $s=1$ 时，单个非零向量线性无关。

假设 $\xi_1,\dots,\xi_k$ 线性无关。对 $k+1$ 个向量，设

$$
t_1\xi_1+t_2\xi_2+\cdots+t_k\xi_k+t_{k+1}\xi_{k+1}=0.
\tag{1}
$$

两边左乘 $A$，得

$$
t_1\lambda_1\xi_1+
\cdots+
 t_k\lambda_k\xi_k+
 t_{k+1}\lambda_{k+1}\xi_{k+1}=0.
\tag{2}
$$

用 $\lambda_{k+1}\times(1)$ 减去 $(2)$，消去最后一项：

$$
\sum_{i=1}^{k}t_i(\lambda_{k+1}-\lambda_i)\xi_i=0.
$$

由归纳假设，$\xi_1,\dots,\xi_k$ 线性无关，且

$$
\lambda_{k+1}-\lambda_i\neq 0,
$$

所以

$$
t_1=t_2=\cdots=t_k=0.
$$

代回式 $(1)$，由 $\xi_{k+1}\neq0$ 得

$$
t_{k+1}=0.
$$

因此结论成立。

:::TIP
若 $n$ 阶矩阵有 $n$ 个互异特征值，则必有 $n$ 个线性无关的特征向量，因此必可对角化。
:::

### 特征子空间基的合并仍线性无关

设 $\lambda_1,\dots,\lambda_s$ 为 $A$ 的互异特征值，$W_{\lambda_i}$ 的一组基为

$$
\xi_{i1},\xi_{i2},\dots,\xi_{ir_i}.
$$

则合并后的向量组

$$
\xi_{11},\dots,\xi_{1r_1},
\xi_{21},\dots,\xi_{2r_2},
\dots,
\xi_{s1},\dots,\xi_{sr_s}
$$

线性无关。

证明仍采用归纳法：把最后一个特征子空间对应的整组向量看作一组，分别对线性组合左乘 $A$ 与乘以最后一个特征值，再作差，先消去最后一组；利用归纳假设推出前面各组系数为零，再利用最后一组本身线性无关推出剩余系数为零。

这个性质把“每个特征值取一个特征向量”的结论推广为“每个特征子空间取一组基”。

### 可对角化的三个充要条件

设 $A$ 为 $n$ 阶方阵，互异特征值为

$$
\lambda_1,\lambda_2,\dots,\lambda_s.
$$

对应特征子空间为 $W_{\lambda_i}$，记

$$
r_i=\dim W_{\lambda_i}.
$$

特征值 $\lambda_i$ 的代数重数记为 $n_i$。

以下三个条件彼此等价。

#### 条件一：有 $n$ 个线性无关的特征向量

$$
A\text{ 可对角化}
\Longleftrightarrow
A\text{ 有 }n\text{ 个线性无关的特征向量}.
$$

若这些特征向量为 $\xi_1,\dots,\xi_n$，其对应特征值为 $\lambda_1,\dots,\lambda_n$，则

$$
P=[\xi_1,\xi_2,\dots,\xi_n]
$$

可逆，且

$$
P^{-1}AP
=\operatorname{diag}(\lambda_1,\lambda_2,\dots,\lambda_n).
$$

这个条件在理论证明中最直接。

#### 条件二：全部特征子空间维数之和为 $n$

$$
A\text{ 可对角化}
\Longleftrightarrow
r_1+r_2+\cdots+r_s=n.
$$

因为各特征子空间的基合并后线性无关；当向量总数达到 $n$ 时，恰好得到 $n$ 个线性无关的特征向量。

这个条件最适合计算判定。

#### 条件三：几何重数等于代数重数

$$
A\text{ 可对角化}
\Longleftrightarrow
r_i=n_i,
\qquad i=1,2,\dots,s.
$$

由于

$$
n_1+n_2+\cdots+n_s=n,
$$

所以条件二和条件三等价。

### 代数重数与几何重数

对特征值 $\lambda_i$：

- $n_i$：$\lambda_i$ 作为特征方程根的重数，称为 **代数重数**；
- $r_i=\dim W_{\lambda_i}$：对应特征子空间维数，称为 **几何重数**。

有基本不等式

$$
1\le r_i\le n_i.
$$

课堂未证明上界 $r_i\le n_i$，但要求会用。

:::TIP
若 $\lambda_i$ 是单根，则 $n_i=1$。又因为 $1\le r_i\le n_i$，所以必有

$$
r_i=1.
$$

因此判断可对角化时，只需重点检查重根。
:::

### 判断可对角化的计算流程

1. 求全部特征值及其代数重数；
2. 对每个重根 $\lambda_i$ 计算

$$
r_i=n-r(\lambda_iE-A);
$$

3. 检查是否对每个 $i$ 都有 $r_i=n_i$，或检查

$$
r_1+
 r_2+
\cdots+
 r_s=n;
$$

4. 若只要求判断，不必把基础解系完整求出，计算矩阵的秩即可；
5. 若还要求求出 $P$，则需要解各齐次方程组，取各特征子空间的基作为 $P$ 的列。

### 例 5.2.1：互异特征值保证可对角化

设

$$
B=
\begin{bmatrix}
-1&1&0\\
0&3&0\\
1&0&2
\end{bmatrix}.
$$

其特征多项式为

$$
f_B(\lambda)
=(\lambda+1)(\lambda-2)(\lambda-3).
$$

所以特征值为

$$
-1,
\qquad 2,
\qquad 3.
$$

它们互不相同，故 $B$ 可对角化。

分别求得特征向量可取

$$
\xi_1=
\begin{bmatrix}
3\\0\\-1
\end{bmatrix},
\qquad
\xi_2=
\begin{bmatrix}
0\\0\\1
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
1\\4\\1
\end{bmatrix}.
$$

令

$$
P=[\xi_1,\xi_2,\xi_3],
$$

则

$$
P^{-1}BP=\operatorname{diag}(-1,2,3).
$$

### 例 5.2.2：重根对应的特征向量不足

仍取例 5.1.3 中的矩阵

$$
A=
\begin{bmatrix}
-1&1&0\\
-4&3&0\\
1&0&2
\end{bmatrix}.
$$

其特征值为

$$
2,
\qquad 1\quad(2\text{ 重}).
$$

前面已经求得

$$
\dim W_2=1,
\qquad
\dim W_1=1.
$$

所以

$$
\dim W_2+
\dim W_1=2<3.
$$

因此 $A$ 不能对角化。

关键原因：特征值 $1$ 的代数重数为 $2$，几何重数只有 $1$。

### 例 5.2.3：重根仍可能可对角化

设

$$
A=
\begin{bmatrix}
1&2&2\\
2&1&2\\
2&2&1
\end{bmatrix}.
$$

特征多项式为

$$
f_A(\lambda)
=(\lambda-5)(\lambda+1)^2.
$$

故特征值为

$$
5,
\qquad -1\quad(2\text{ 重}).
$$

属于 $5$ 的特征子空间可取基

$$
\xi_1=
\begin{bmatrix}
1\\1\\1
\end{bmatrix}.
$$

属于 $-1$ 的特征子空间可取基

$$
\xi_2=
\begin{bmatrix}
1\\0\\-1
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
0\\1\\-1
\end{bmatrix}.
$$

因此

$$
\dim W_5=1,
\qquad
\dim W_{-1}=2,
$$

且

$$
1+2=3.
$$

所以 $A$ 可对角化。令

$$
P=[\xi_1,\xi_2,\xi_3]
=
\begin{bmatrix}
1&1&0\\
1&0&1\\
1&-1&-1
\end{bmatrix},
$$

则

$$
P^{-1}AP=\operatorname{diag}(5,-1,-1).
$$

:::NOTE
有重根并不能直接推出矩阵不可对角化。真正要检查的是重根对应的特征子空间维数是否达到其代数重数。
:::

### 例 5.2.4：利用重数直接求秩

已知三阶矩阵 $A$ 的特征值为

$$
1,2,2,
$$

且 $A$ 可对角化，求

$$
r(E-A),
\qquad
r(2E-A).
$$

特征值 $1$ 为单根，因此

$$
dim W_1=1.
$$

又

$$
dim W_1=3-r(E-A),
$$

所以

$$
r(E-A)=2.
$$

特征值 $2$ 为二重根。由于 $A$ 可对角化，几何重数等于代数重数，因此

$$
dim W_2=2.
$$

于是

$$
3-r(2E-A)=2,
$$

故

$$
r(2E-A)=1.
$$

### 例 5.2.5：含参数的秩一矩阵

设

$$
\alpha=
\begin{bmatrix}
1\\2\\3\\4
\end{bmatrix},
\qquad
\beta=
\begin{bmatrix}
3\\-2\\-1\\a
\end{bmatrix},
\qquad
A=\alpha\beta^T.
$$

问 $a$ 取何值时 $A$ 可对角化。

先计算

$$
f_A(\lambda)
=\lambda^3(\lambda-4a+4).
$$

所以特征值为

$$
0\quad(3\text{ 重}),
\qquad
4(a-1).
$$

又因 $A=\alpha\beta^T$ 且 $\alpha,\beta\neq0$，所以

$$
r(A)=1.
$$

#### 当 $a\neq1$ 时

特征值为

$$
0\quad(3\text{ 重}),
\qquad
4(a-1)\neq0\quad(1\text{ 重}).
$$

对特征值 $0$，

$$
dim W_0=4-r(A)=3,
$$

恰好等于其代数重数。另一个特征值为单根，故 $A$ 可对角化。

#### 当 $a=1$ 时

唯一特征值为

$$
0\quad(4\text{ 重}).
$$

但

$$
dim W_0=4-r(A)=3<4.
$$

因此 $A$ 不能对角化。

结论：

$$
\boxed{a\neq1}
$$

时 $A$ 可对角化。

### 例 5.2.6：非零幂零矩阵不能对角化

设 $A\neq0$，且存在正整数 $k\ge2$，使

$$
A^k=0.
$$

证明 $A$ 不能对角化。

设 $\lambda$ 是 $A$ 的任一特征值，$\xi$ 是对应的非零特征向量，则

$$
A\xi=\lambda\xi.
$$

连续作用 $A$，得到

$$
A^k\xi=\lambda^k\xi.
$$

由 $A^k=0$，有

$$
\lambda^k\xi=0.
$$

因为 $\xi\neq0$，所以

$$
\lambda=0.
$$

即 $A$ 的全部特征值均为 $0$。

若 $A$ 可对角化，则存在可逆矩阵 $P$，使

$$
P^{-1}AP=\operatorname{diag}(0,0,\dots,0)=0.
$$

于是

$$
A=0,
$$

与题设 $A\neq0$ 矛盾。因此 $A$ 不能对角化。

---

## 5.3 矩阵相似的理论和应用

### 特征多项式的两个重要系数

设

$$
A=[a_{ij}]_{n\times n},
$$

全部特征值为 $\lambda_1,\dots,\lambda_n$，按重数计算。

特征多项式可写成

$$
f_A(\lambda)
=|\lambda E-A|
=\lambda^n-
(a_{11}+a_{22}+\cdots+a_{nn})\lambda^{n-1}
+\cdots+(-1)^n|A|.
$$

另一方面，

$$
f_A(\lambda)
=(\lambda-\lambda_1)
(\lambda-\lambda_2)
\cdots
(\lambda-\lambda_n).
$$

比较 $\lambda^{n-1}$ 的系数和常数项，得到

$$
\boxed{\lambda_1+
\lambda_2+
\cdots+
\lambda_n
=\operatorname{tr}A}
$$

以及

$$
\boxed{\lambda_1\lambda_2\cdots\lambda_n=|A|}.
$$

其中

$$
\operatorname{tr}A=a_{11}+a_{22}+\cdots+a_{nn}
$$

称为矩阵 $A$ 的迹。

:::WARNING
特征值之和、乘积均按重数计算。
:::

由乘积公式立即得到

$$
A\text{ 可逆}
\Longleftrightarrow
|A|\neq0
\Longleftrightarrow
0\text{ 不是 }A\text{ 的特征值}.
$$

### 矩阵方幂与矩阵多项式的特征值

若

$$
A\xi=\lambda\xi,
\qquad \xi\neq0,
$$

则

$$
A^2\xi=A(A\xi)=A(\lambda\xi)=\lambda A\xi=\lambda^2\xi.
$$

逐次递推可得

$$
A^k\xi=\lambda^k\xi.
$$

因此：

- $\lambda^k$ 是 $A^k$ 的特征值；
- $\xi$ 仍是对应的特征向量。

设

$$
g(x)=a_kx^k+
\cdots+
 a_1x+a_0,
$$

则

$$
g(A)=a_kA^k+
\cdots+
 a_1A+a_0E.
$$

于是

$$
\begin{aligned}
g(A)\xi
&=a_kA^k\xi+
\cdots+
 a_1A\xi+a_0\xi\\
&=[a_k\lambda^k+
\cdots+
 a_1\lambda+a_0]\xi\\
&=g(\lambda)\xi.
\end{aligned}
$$

所以 $g(\lambda)$ 是 $g(A)$ 的特征值，$\xi$ 仍是相应特征向量。

在复数域中有谱映射关系

$$
\sigma(g(A))=g(\sigma(A)).
$$

也就是说，$g(A)$ 的全部特征值由 $A$ 的特征值代入 $g$ 得到。若不同的 $\lambda_i$ 代入后得到同一个数，对应特征值会合并。

#### 为什么 $A^2$ 的特征值不会遗漏

设 $\mu$ 是 $A^2$ 的特征值，则

$$
|\mu E-A^2|=0.
$$

在复数域中取 $\sqrt\mu$，有

$$
\mu E-A^2
=(\sqrt\mu E-A)(\sqrt\mu E+A).
$$

因此

$$
|\sqrt\mu E-A|\cdot|\sqrt\mu E+A|=0.
$$

所以 $\sqrt\mu$ 或 $-\sqrt\mu$ 是 $A$ 的特征值，从而

$$
\mu=\lambda^2
$$

可由 $A$ 的某个特征值 $\lambda$ 平方得到。

### 逆矩阵的特征值

设 $A$ 可逆，且

$$
A\xi=\lambda\xi.
$$

因为可逆矩阵的特征值均非零，可在两边左乘 $A^{-1}$：

$$
\xi=\lambda A^{-1}\xi.
$$

因此

$$
A^{-1}\xi=\lambda^{-1}\xi.
$$

所以：

$$
\boxed{
\sigma(A^{-1})
=
\left\{
\frac1\lambda:\lambda\in\sigma(A)
\right\}}
$$

且特征向量保持不变。

### 相似矩阵的共同性质

若 $A$ 与 $B$ 相似，则存在可逆矩阵 $P$，使

$$
B=P^{-1}AP.
$$

#### 相同的特征多项式

$$
\begin{aligned}
|\lambda E-B|
&=|\lambda E-P^{-1}AP|\\
&=|P^{-1}(\lambda E-A)P|\\
&=|P^{-1}|\,|\lambda E-A|\,|P|\\
&=|\lambda E-A|.
\end{aligned}
$$

因此相似矩阵有：

- 相同的特征多项式；
- 相同的全部特征值及其代数重数；
- 相同的迹；
- 相同的行列式；
- 相同的秩。

#### 逆命题通常不成立

例如

$$
E=
\begin{bmatrix}
1&0\\0&1
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
1&1\\0&1
\end{bmatrix}.
$$

二者的特征多项式均为

$$
(\lambda-1)^2,
$$

但 $E$ 只与自身相似，而 $B\neq E$，所以 $E$ 与 $B$ 不相似。

因此，相同特征多项式只是矩阵相似的必要条件。

### 相同特征值何时能推出相似

若 $A,B$ 都可对角化，则

$$
A\sim B
\Longleftrightarrow
A,B\text{ 有相同的特征值及重数}.
$$

理由：若二者都可对角化，并具有相同的特征值，则它们都相似于同一个对角矩阵，利用相似关系的对称性与传递性可得 $A\sim B$。

特别地，两个实对称矩阵一定可对角化，所以判断两个实对称矩阵是否相似，只需比较其特征值及重数。

### 相似关系与矩阵多项式

若

$$
B=P^{-1}AP,
$$

则

$$
B^2=P^{-1}A^2P,
\qquad
B^3=P^{-1}A^3P,
\qquad
\dots,
\qquad
B^k=P^{-1}A^kP.
$$

故

$$
A^k\sim B^k.
$$

对任意多项式

$$
g(x)=a_kx^k+
\cdots+
 a_1x+a_0,
$$

有

$$
g(B)=P^{-1}g(A)P.
$$

因此

$$
g(A)\sim g(B).
$$

而且使用的是同一个相似变换矩阵 $P$。

### 利用对角化计算方幂与多项式

若

$$
P^{-1}AP
=\Lambda
=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
$$

则

$$
A=P\Lambda P^{-1}.
$$

所以

$$
A^k=P\Lambda^kP^{-1}
=P\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)P^{-1}.
$$

对多项式 $g$，

$$
g(A)
=P\,g(\Lambda)\,P^{-1}
=P\operatorname{diag}
[g(\lambda_1),
\dots,
 g(\lambda_n)]P^{-1}.
$$

进而

$$
|g(A)|
=g(\lambda_1)g(\lambda_2)\cdots g(\lambda_n).
$$

:::TIP
计算高次方时，本章提供了第二种常用情形：

- 若 $r(A)=1$，可利用 $A=\alpha\beta^T$ 的结构；
- 若 $A$ 可对角化，可利用 $A^k=P\Lambda^kP^{-1}$。
:::

### 例 5.3.1：矩阵多项式的特征值、行列式与矩阵值

设

$$
A=
\begin{bmatrix}
1&2&2\\
2&1&-2\\
-2&-2&1
\end{bmatrix}.
$$

#### 第一步：求 $A$ 的特征值和特征向量

$$
f_A(\lambda)
=(\lambda+1)(\lambda-1)(\lambda-3).
$$

所以特征值为

$$
-1,
\qquad 1,
\qquad 3.
$$

对应特征向量可取

$$
\xi_1=
\begin{bmatrix}
1\\-1\\0
\end{bmatrix},
\qquad
\xi_2=
\begin{bmatrix}
1\\-1\\1
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
0\\1\\-1
\end{bmatrix}.
$$

由于三个特征值互异，$A$ 可对角化。令

$$
P=[\xi_1,\xi_2,\xi_3],
$$

则

$$
P^{-1}AP=\operatorname{diag}(-1,1,3).
$$

#### 第二步：求矩阵多项式的特征值

令

$$
g(x)=2x^3-3x^2-4x+2.
$$

则

$$
g(A)=2A^3-3A^2-4A+2E.
$$

其特征值为

$$
g(-1)=1,
\qquad
g(1)=-3,
\qquad
g(3)=17.
$$

相应特征向量仍分别为 $\xi_1,\xi_2,\xi_3$。

#### 第三步：求行列式

$$
|g(A)|
=g(-1)g(1)g(3)
=1\times(-3)\times17
=-51.
$$

#### 第四步：求矩阵 $g(A)$

$$
g(A)
=P\operatorname{diag}(1,-3,17)P^{-1}.
$$

计算得

$$
g(A)
=
\begin{bmatrix}
-3&-4&-4\\
20&21&4\\
-20&-20&-3
\end{bmatrix}.
$$

### 例 5.3.2：伴随矩阵与矩阵多项式

设三阶方阵 $A$ 满足

$$
|A|=6,
$$

且 $A$ 有一个特征值 $-2$。

#### 求 $A^*$ 的一个特征值

由 $|A|\neq0$，$A$ 可逆，且

$$
A^*=|A|A^{-1}=6A^{-1}.
$$

因为 $-2$ 是 $A$ 的特征值，所以

$$
-\frac12
$$

是 $A^{-1}$ 的特征值。因此

$$
6\left(-\frac12\right)=-3
$$

是 $A^*$ 的一个特征值。

#### 求 $A^3+4A^2+8A+8E$ 的一个特征值

取

$$
g(x)=x^3+4x^2+8x+8.
$$

则

$$
g(-2)=0.
$$

所以 $0$ 是

$$
A^3+4A^2+8A+8E
$$

的一个特征值。

因此

$$
|A^3+4A^2+8A+8E|=0.
$$

### 例 5.3.5：计算高次方

设三阶方阵 $A$，已知

$$
\xi_1=
\begin{bmatrix}
1\\2\\0
\end{bmatrix},
\qquad
\xi_2=
\begin{bmatrix}
2\\3\\0
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
0\\0\\2
\end{bmatrix},
$$

并满足

$$
A\xi_1=\xi_1,
\qquad
A\xi_2=-\xi_2,
\qquad
A\xi_3=2\xi_3.
$$

因此特征值为

$$
1,-1,2,
$$

互不相同，$A$ 可对角化。

令

$$
P=[\xi_1,\xi_2,\xi_3]
=
\begin{bmatrix}
1&2&0\\
2&3&0\\
0&0&2
\end{bmatrix},
\qquad
\Lambda=\operatorname{diag}(1,-1,2).
$$

则

$$
A=P\Lambda P^{-1}
=
\begin{bmatrix}
-7&4&0\\
-12&7&0\\
0&0&2
\end{bmatrix}.
$$

同时

$$
A^{1000}
=P\operatorname{diag}(1^{1000},(-1)^{1000},2^{1000})P^{-1}.
$$

因为

$$
1^{1000}=(-1)^{1000}=1,
$$

计算得

$$
A^{1000}
=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&2^{1000}
\end{bmatrix}.
$$

---

## 5.4 实对称矩阵的对角化

设 $A$ 为实矩阵且

$$
A^T=A,
$$

则称 $A$ 为 **实对称矩阵**。

实对称矩阵是一类结构很强的矩阵：

- 特征值全部为实数；
- 不同特征值对应的特征向量彼此正交；
- 一定可以通过正交矩阵对角化。

### 实对称矩阵的特征值均为实数

设 $\lambda$ 是实对称矩阵 $A$ 的特征值，$\xi\neq0$ 为相应特征向量：

$$
A\xi=\lambda\xi.
$$

即使 $\xi$ 暂时取复向量，也有

$$
\xi^*A\xi=\lambda\xi^*\xi.
\tag{1}
$$

另一方面，由 $A^*=A$，

$$
\xi^*A\xi
=(A\xi)^*\xi
=(\lambda\xi)^*\xi
=\overline\lambda\,\xi^*\xi.
\tag{2}
$$

比较式 $(1)$ 与式 $(2)$：

$$
(\lambda-
\overline\lambda)\xi^*\xi=0.
$$

因为 $\xi\neq0$，所以

$$
\xi^*\xi>0.
$$

从而

$$
\lambda=\overline\lambda.
$$

因此 $\lambda$ 为实数。

又因为 $\lambda E-A$ 是实矩阵，其齐次方程组可在实数域中求解，所以相应特征向量可以取为实向量。

### 不同特征值对应的特征向量正交

设

$$
A\xi_1=\lambda_1\xi_1,
\qquad
A\xi_2=\lambda_2\xi_2,
\qquad
\lambda_1\neq\lambda_2.
$$

则

$$
(A\xi_1)^T\xi_2
=\lambda_1\xi_1^T\xi_2.
$$

另一方面，利用 $A^T=A$：

$$
(A\xi_1)^T\xi_2
=\xi_1^TA^T\xi_2
=\xi_1^TA\xi_2
=\lambda_2\xi_1^T\xi_2.
$$

所以

$$
(\lambda_1-
\lambda_2)\xi_1^T\xi_2=0.
$$

由于 $\lambda_1\neq\lambda_2$，故

$$
\xi_1^T\xi_2=0.
$$

即

$$
\xi_1\perp\xi_2.
$$

相比一般矩阵“不同特征值对应的特征向量线性无关”，这里的结论更强：它们直接正交。

### 实对称矩阵的正交对角化定理

若 $A$ 为 $n$ 阶实对称矩阵，则存在正交矩阵 $U$，使

$$
U^{-1}AU
=U^TAU
=\operatorname{diag}(\lambda_1,
\lambda_2,
\dots,
\lambda_n).
$$

其中 $\lambda_1,
\dots,
\lambda_n$ 是 $A$ 的全部特征值，按重数排列。

课堂未证明该定理，只要求理解其含义并掌握构造 $U$ 的方法。

:::TIP
对一般可对角化矩阵，通常只能保证存在可逆矩阵 $P$。

对实对称矩阵，可以把 $P$ 进一步选成正交矩阵 $U$，于是

$$
U^{-1}=U^T.
$$
:::

### 求正交矩阵的标准步骤

设 $A$ 为实对称矩阵。

#### 第一步：求全部互异特征值

求解

$$
|\lambda E-A|=0,
$$

得到

$$
\lambda_1,
\lambda_2,
\dots,
\lambda_s
$$

及其代数重数 $n_1,
\dots,
 n_s$。

#### 第二步：求各特征子空间的基

对每个 $\lambda_i$ 解

$$
(\lambda_iE-A)X=0,
$$

得到基础解系

$$
\xi_{i1},
\xi_{i2},
\dots,
\xi_{in_i}.
$$

因为实对称矩阵一定可对角化，所以每个特征子空间维数必等于对应特征值的重数。若计算结果不相等，说明前面的特征值、秩或方程组求解出现错误。

#### 第三步：在每个特征子空间内部正交化、单位化

- 若 $n_i=1$，只需将唯一基向量单位化；
- 若 $n_i>1$，先对该特征子空间的一组基作施密特正交化，再分别单位化。

得到标准正交基

$$
\eta_{i1},
\eta_{i2},
\dots,
\eta_{in_i}.
$$

不同特征子空间之间本来就彼此正交，因此只需处理同一重根内部的向量。

#### 第四步：按特征值顺序组成正交矩阵

$$
U=
[\eta_{11},
\dots,
\eta_{1n_1},
\eta_{21},
\dots,
\eta_{sn_s}].
$$

则

$$
U^TAU
=
\operatorname{diag}
(
\underbrace{\lambda_1,
\dots,
\lambda_1}_{n_1},
\dots,
\underbrace{\lambda_s,
\dots,
\lambda_s}_{n_s}
).
$$

:::NOTE
若题目只要求求一个可逆矩阵 $P$ 使 $P^{-1}AP$ 为对角矩阵，到第二步后直接将各特征子空间的基按列排入 $P$ 即可，无须正交化和单位化。
:::

<!-- 图片占位符：如有老师板书截图，可在此插入“实对称矩阵正交对角化流程：求特征值 → 求基础解系 → 同一特征子空间内施密特正交化 → 单位化 → 组成 U”。 -->

### 例 5.4.1：三个互异特征值

设

$$
A=
\begin{bmatrix}
1&1&0\\
1&1&0\\
0&0&1
\end{bmatrix}.
$$

特征多项式为

$$
f_A(\lambda)
=\lambda(\lambda-1)(\lambda-2).
$$

所以特征值为

$$
0,
\qquad 1,
\qquad 2.
$$

相应特征向量可取

$$
\xi_1=
\begin{bmatrix}
1\\-1\\0
\end{bmatrix},
\qquad
\xi_2=
\begin{bmatrix}
0\\0\\1
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
1\\1\\0
\end{bmatrix}.
$$

三个特征值互异，三个特征向量已经两两正交，只需单位化：

$$
\eta_1=
\frac1{\sqrt2}
\begin{bmatrix}
1\\-1\\0
\end{bmatrix},
\qquad
\eta_2=
\begin{bmatrix}
0\\0\\1
\end{bmatrix},
\qquad
\eta_3=
\frac1{\sqrt2}
\begin{bmatrix}
1\\1\\0
\end{bmatrix}.
$$

令

$$
U=[\eta_1,
\eta_2,
\eta_3],
$$

则 $U$ 为正交矩阵，且

$$
U^TAU=\operatorname{diag}(0,1,2).
$$

### 例 5.4.2：重根情形需要施密特正交化

设

$$
A=
\begin{bmatrix}
1&2&2\\
2&1&2\\
2&2&1
\end{bmatrix}.
$$

由例 5.2.3，特征值为

$$
5,
\qquad -1\quad(2\text{ 重}).
$$

可取

$$
\xi_1=
\begin{bmatrix}
1\\1\\1
\end{bmatrix}
$$

作为 $W_5$ 的基；取

$$
\xi_2=
\begin{bmatrix}
1\\0\\-1
\end{bmatrix},
\qquad
\xi_3=
\begin{bmatrix}
0\\1\\-1
\end{bmatrix}
$$

作为 $W_{-1}$ 的一组基。

$\xi_2$ 与 $\xi_3$ 属于同一特征值，未必正交，因此对它们施密特正交化。

取

$$
\xi_2'=\xi_2.
$$

再令

$$
\begin{aligned}
\xi_3'
&=\xi_3-
\frac{(\xi_3,
\xi_2')}{(\xi_2',
\xi_2')}\xi_2'\\
&=
\begin{bmatrix}
0\\1\\-1
\end{bmatrix}
-
\frac12
\begin{bmatrix}
1\\0\\-1
\end{bmatrix}\\
&=
\frac12
\begin{bmatrix}
-1\\2\\-1
\end{bmatrix}.
\end{aligned}
$$

单位化后得到

$$
\eta_1=
\frac1{\sqrt3}
\begin{bmatrix}
1\\1\\1
\end{bmatrix},
\qquad
\eta_2=
\frac1{\sqrt2}
\begin{bmatrix}
1\\0\\-1
\end{bmatrix},
\qquad
\eta_3=
\frac1{\sqrt6}
\begin{bmatrix}
-1\\2\\-1
\end{bmatrix}.
$$

因此

$$
U=[\eta_1,
\eta_2,
\eta_3]
=
\begin{bmatrix}
\frac1{\sqrt3}&\frac1{\sqrt2}&-\frac1{\sqrt6}\\
\frac1{\sqrt3}&0&\frac2{\sqrt6}\\
\frac1{\sqrt3}&-\frac1{\sqrt2}&-\frac1{\sqrt6}
\end{bmatrix}.
$$

于是

$$
U^TAU
=\operatorname{diag}(5,-1,-1).
$$

---

## 课堂综合例题

### 正交矩阵的行列式为负时必有特征值 -1

设 $U$ 为实正交矩阵，且

$$
|U|=-1.
$$

证明 $-1$ 是 $U$ 的特征值。

只需证明

$$
|-E-U|=0.
$$

由正交性

$$
U^TU=E,
$$

有

$$
-E-U=(-U^T-E)U.
$$

因此

$$
\begin{aligned}
|-E-U|
&=|-U^T-E|\,|U|\\
&=-|-U^T-E|.
\end{aligned}
$$

又因为行列式在转置下不变，

$$
|-U^T-E|
=|(-U-E)^T|
=|-U-E|
=|-E-U|.
$$

所以

$$
|-E-U|=-|-E-U|,
$$

从而

$$
|-E-U|=0.
$$

故 $-1$ 是 $U$ 的特征值。

### 幂等矩阵的行列式计算

设 $A$ 为 $n$ 阶方阵，满足

$$
A^2=A,
$$

且

$$
r(A)=r,
\qquad 0<r\le n.
$$

求

$$
|5E+A|.
$$

#### 第一步：确定 $A$ 的可能特征值

若 $\lambda$ 是 $A$ 的特征值，则由

$$
g(x)=x^2-x
$$

及

$$
g(A)=A^2-A=0
$$

可得

$$
g(\lambda)=\lambda^2-
\lambda=0.
$$

所以

$$
\lambda=0
\quad\text{或}\quad
\lambda=1.
$$

#### 第二步：证明 $A$ 可对角化

属于 $0$ 的特征子空间维数为

$$
dim W_0=n-r(A).
$$

属于 $1$ 的特征子空间维数为

$$
dim W_1=n-r(E-A).
$$

需要证明

$$
dim W_0+
\dim W_1=n,
$$

等价于

$$
r(A)+r(E-A)=n.
$$

一方面，由

$$
A+(E-A)=E
$$

及秩的次可加性，

$$
n=r(E)
\le r(A)+r(E-A).
$$

另一方面，由 Sylvester 秩不等式，

$$
r(A)+r(E-A)
\le n+r[A(E-A)].
$$

而

$$
A(E-A)=A-A^2=0,
$$

所以

$$
r(A)+r(E-A)
\le n.
$$

综合可得

$$
r(A)+r(E-A)=n.
$$

因此 $A$ 可对角化。

#### 第三步：确定重数

因为

$$
dim W_0=n-r(A)=n-r,
$$

且 $A$ 可对角化，所以特征值 $0$ 的代数重数为 $n-r$；特征值 $1$ 的代数重数为 $r$。

#### 第四步：计算目标行列式

矩阵

$$
5E+A
$$

的特征值为

$$
5+0=5
\quad(n-r\text{ 重}),
$$

以及

$$
5+1=6
\quad(r\text{ 重}).
$$

因此

$$
\boxed{|5E+A|=5^{n-r}6^r}.
$$

---

## 全章解题框架

### 类型一：求全部特征值和特征向量

1. 写出 $\lambda E-A$；
2. 计算 $|\lambda E-A|$；
3. 因式分解并写清重数；
4. 对每个互异特征值解 $(\lambda_iE-A)X=0$；
5. 用基础解系的不全为零线性组合表示全部特征向量。

### 类型二：判断能否对角化

优先使用：

$$
\sum_i\dim W_{\lambda_i}=n
$$

或

$$
\dim W_{\lambda_i}=n_i.
$$

计算时：

$$
\dim W_{\lambda_i}
=n-r(\lambda_iE-A).
$$

- 单根自动满足；
- 只检查重根；
- 只需判断时可只算秩；
- 还要求 $P$ 时再求基础解系。

### 类型三：构造相似变换矩阵 $P$

将各特征子空间的一组基按列排列：

$$
P=[\text{线性无关的特征向量}].
$$

对角矩阵中各特征值的顺序必须与 $P$ 中相应特征向量的列顺序一致。

### 类型四：计算 $A^k$ 或 $g(A)$

若

$$
P^{-1}AP=\Lambda,
$$

则

$$
A^k=P\Lambda^kP^{-1},
$$

$$
g(A)=Pg(\Lambda)P^{-1}.
$$

计算行列式时可直接用

$$
|g(A)|=\prod_{i=1}^{n}g(\lambda_i).
$$

### 类型五：实对称矩阵正交对角化

1. 求特征值；
2. 求各特征子空间的基；
3. 同一重根对应的基作施密特正交化；
4. 全部向量单位化；
5. 按列组成 $U$；
6. 写出

$$
U^TAU=\Lambda.
$$

---

## 易错点

1. **特征向量必须非零。**

2. **特征子空间包含零向量，特征向量集合不包含零向量。**

3. **有重根不代表一定不能对角化。** 应比较几何重数和代数重数。

4. **有 $n$ 个特征值不代表有 $n$ 个互异特征值。** 特征值总数按重数计算始终为 $n$。

5. **求 $P$ 时，列向量顺序要和对角矩阵中特征值的顺序对应。**

6. **相同特征多项式不能直接推出矩阵相似。** 若两矩阵都可对角化，才可通过相同特征值推出相似。

7. **$g(A)$ 的特征向量可沿用 $A$ 的特征向量，但不同特征值经 $g$ 映射后可能合并。**

8. **实矩阵的特征值可能为复数。** 实对称矩阵的特征值才保证全为实数。

9. **实对称矩阵中，不同特征值对应的特征向量已经正交。** 施密特正交化只需在同一重根对应的特征子空间内部进行。

10. **计算特征多项式时，$|\lambda E-A|$ 与 $|A-\lambda E|$ 相差 $(-1)^n$。** 求根相同，但后续公式与教材符号应保持一致。
