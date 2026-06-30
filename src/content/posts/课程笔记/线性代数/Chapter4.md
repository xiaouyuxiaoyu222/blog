---
title: LinearAlgebra-Chapter4：线性空间、线性相关性与欧氏空间
published: 2026-06-08
description: 线性空间，线性组合与线性相关，极大线性无关组，基与维数，子空间，线性方程组的解结构，内积与正交，Schmidt 正交化
tags: [线性代数]
category: 课程笔记
draft: false
---

## 概述

这一章的核心主线是：

> 先给 $\mathbb R^n$ 中的向量建立“加法与数乘”的线性结构，再研究向量之间是否存在冗余关系，随后用少量基向量表示整个空间，最后加入内积结构，讨论长度、夹角与正交。

知识链条：

1. **线性空间**：向量可以相加、可以数乘。
2. **线性表示**：一个向量能否由一组向量组合得到。
3. **线性相关性**：一组向量中是否存在冗余。
4. **极大线性无关组与秩**：保留最多的独立信息。
5. **基与维数**：用有限个向量唯一表示整个空间。
6. **子空间**：大空间中仍保持线性结构的部分。
7. **线性方程组的解结构**：用基础解系表示无穷多个解。
8. **欧氏空间**：加入内积后，定义长度、夹角和正交。
9. **Schmidt 正交化**：把普通基改造成标准正交基。

:::WARNING
### 教学范围说明

根据课堂录音，老师对本章范围作了以下限定：

- 第 4.1 节只要求掌握具体的 $\mathbb R^n$，教材中的一般抽象线性空间及 $P_n$、$C_n$ 等例子不作重点。
- 第 4.7 节明确不讲。
- 第 4.9、4.10 节明确不讲。
- 第 4.8 节以 $\mathbb R^n$ 上的内积、正交、标准正交基和 Schmidt 正交化为重点。
- 教材例 4.8.8 的度量矩阵存在印刷错误：老师要求把相应的右下角元素 $4$ 改为 $6$，否则不满足正定性。
:::

---

## 目录

- [4.1 线性空间](#41-线性空间)
- [4.2 向量的线性相关性](#42-向量的线性相关性)
  - [向量组与线性组合](#向量组与线性组合)
  - [线性表示](#线性表示)
  - [线性相关与线性无关](#线性相关与线性无关)
  - [用矩阵的秩判断](#用矩阵的秩判断)
  - [常用结论](#常用结论)
- [4.3 极大线性无关组与向量组的秩](#43-极大线性无关组与向量组的秩)
  - [线性相关的等价刻画](#线性相关的等价刻画)
  - [线性表示的唯一性](#线性表示的唯一性)
  - [向量个数比较定理](#向量个数比较定理)
  - [极大线性无关组](#极大线性无关组)
  - [极大线性无关组的求法](#极大线性无关组的求法)
  - [向量组的秩](#向量组的秩)
- [4.4 基、维数与坐标](#44-基维数与坐标)
  - [基与维数](#基与维数)
  - [坐标](#坐标)
  - [基变换与坐标变换](#基变换与坐标变换)
- [4.5 子空间](#45-子空间)
  - [子空间的定义](#子空间的定义)
  - [常见子空间](#常见子空间)
  - [向量组生成的子空间](#向量组生成的子空间)
  - [子空间的包含关系与维数](#子空间的包含关系与维数)
- [4.6 矩阵的秩与线性方程组的解结构](#46-矩阵的秩与线性方程组的解结构)
  - [矩阵的行秩、列秩与秩](#矩阵的行秩列秩与秩)
  - [齐次线性方程组](#齐次线性方程组)
  - [非齐次线性方程组](#非齐次线性方程组)
  - [利用解空间证明秩的结论](#利用解空间证明秩的结论)
- [4.8 欧氏空间](#48-欧氏空间)
  - [内积](#内积)
  - [长度与重要不等式](#长度与重要不等式)
  - [夹角与正交](#夹角与正交)
  - [正交向量组与标准正交基](#正交向量组与标准正交基)
  - [度量矩阵](#度量矩阵)
  - [正交矩阵](#正交矩阵)
  - [标准正交基的优点](#标准正交基的优点)
  - [正交基的扩充](#正交基的扩充)
  - [Schmidt 正交化](#schmidt-正交化)
- [本章核心结论速查](#本章核心结论速查)

---

## 4.1 线性空间

### $\mathbb R^n$ 中的向量

定义

$$
\mathbb R^n
=
\left\{
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}
\middle|
x_i\in\mathbb R
\right\}.
$$

其中的元素称为 **$n$ 元向量**。

对

$$
\alpha=
\begin{bmatrix}
x_1\\
\vdots\\
x_n
\end{bmatrix},
\qquad
\beta=
\begin{bmatrix}
y_1\\
\vdots\\
y_n
\end{bmatrix},
\qquad
k\in\mathbb R,
$$

定义向量加法和数乘：

$$
\alpha+\beta
=
\begin{bmatrix}
x_1+y_1\\
\vdots\\
x_n+y_n
\end{bmatrix},
\qquad
k\alpha
=
\begin{bmatrix}
kx_1\\
\vdots\\
kx_n
\end{bmatrix}.
$$

### 线性空间的八条性质

对任意 $\alpha,\beta,\gamma\in\mathbb R^n$ 和 $k,l\in\mathbb R$：

1. $\alpha+\beta=\beta+\alpha$；
2. $(\alpha+\beta)+\gamma=\alpha+(\beta+\gamma)$；
3. 存在零向量 $\mathbf 0$，使 $\alpha+\mathbf 0=\alpha$；
4. 每个 $\alpha$ 都存在负向量 $-\alpha$，使 $\alpha+(-\alpha)=\mathbf 0$；
5. $(kl)\alpha=k(l\alpha)$；
6. $1\alpha=\alpha$；
7. $(k+l)\alpha=k\alpha+l\alpha$；
8. $k(\alpha+\beta)=k\alpha+k\beta$。

$\mathbb R^n$ 具有上述线性结构，因此称为一个线性空间，也称 $n$ 元向量空间。

:::TIP
“空间”可以理解为：

> 在一个集合上添加某种运算或结构，使集合中的元素能够相互联系。

例如：

- 加法、数乘构成线性结构；
- 再定义距离，可得到距离空间；
- 再定义内积，可得到欧氏空间。
:::

### 课堂范围

老师强调，本课程中看到教材的一般线性空间 $V$ 时，可以优先把它理解为具体的 $\mathbb R^n$。

教材第 4.1 节中其他抽象例子不作为本课程重点。

---

## 4.2 向量的线性相关性

### 向量组与线性组合

$\mathbb R^n$ 中的 $s$ 个向量

$$
\alpha_1,\alpha_2,\ldots,\alpha_s
$$

称为一个 **向量组**。

向量组不是集合，因此：

- 向量的先后次序可以保留；
- 其中允许出现相同向量。

对任意 $k_1,\ldots,k_s\in\mathbb R$，向量

$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s
$$

称为向量组 $\alpha_1,\ldots,\alpha_s$ 的一个 **线性组合**。

---

### 线性表示

若存在 $k_1,\ldots,k_s\in\mathbb R$，使

$$
\beta=k_1\alpha_1+\cdots+k_s\alpha_s,
$$

则称 $\beta$ 可以由 $\alpha_1,\ldots,\alpha_s$ **线性表示**。

把向量按列组成矩阵

$$
A=[\alpha_1\ \alpha_2\ \cdots\ \alpha_s],
\qquad
K=
\begin{bmatrix}
k_1\\
\vdots\\
k_s
\end{bmatrix},
$$

则线性表示问题等价于线性方程组

$$
AK=\beta.
$$

因此：

$$
\beta\text{ 可由 }\alpha_1,\ldots,\alpha_s\text{ 线性表示}
\iff
r(A)=r(A,\beta).
$$

:::TIP
零向量总可以由任意向量组线性表示：

$$
\mathbf 0=0\alpha_1+\cdots+0\alpha_s.
$$

这里使用的是全为零的系数。
:::

---

### 线性相关与线性无关

若存在一组 **不全为零** 的数 $k_1,\ldots,k_s$，使

$$
k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf 0,
$$

则称向量组 $\alpha_1,\ldots,\alpha_s$ **线性相关**。

若上式只能推出

$$
k_1=k_2=\cdots=k_s=0,
$$

则称向量组 **线性无关**。

把向量按列组成矩阵 $A=[\alpha_1\ \cdots\ \alpha_s]$，则

$$
k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf 0
$$

等价于齐次线性方程组

$$
AK=\mathbf 0.
$$

所以：

- 线性相关 $\iff AK=\mathbf 0$ 有非零解；
- 线性无关 $\iff AK=\mathbf 0$ 只有零解。

:::WARNING
线性表示与线性相关中的系数条件不同：

- “$\beta$ 可被表示”只要求存在一组系数；
- “向量组线性相关”要求存在一组 **不全为零** 的系数，使线性组合等于零向量。
:::

---

### 用矩阵的秩判断

设

$$
A=[\alpha_1\ \alpha_2\ \cdots\ \alpha_s].
$$

则：

$$
\alpha_1,\ldots,\alpha_s\text{ 线性无关}
\iff
r(A)=s,
$$

$$
\alpha_1,\ldots,\alpha_s\text{ 线性相关}
\iff
r(A)<s.
$$

原因是 $A$ 有 $s$ 列，齐次方程 $AK=\mathbf 0$：

- 当 $r(A)=s$ 时，没有自由变量，只有零解；
- 当 $r(A)<s$ 时，有自由变量，存在非零解。

### 课堂例：判断向量是否可被表示

设

$$
A=[\alpha_1\ \alpha_2\ \alpha_3\ \alpha_4].
$$

若行化简后得到

$$
r(A)=3,
\qquad
r([\alpha_1\ \alpha_2\ \alpha_3])=2,
$$

则

$$
r([\alpha_1\ \alpha_2\ \alpha_3])
\ne
r([\alpha_1\ \alpha_2\ \alpha_3\ \alpha_4]),
$$

因此 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示。

判断方法始终是：

1. 把用于表示的向量放在系数矩阵中；
2. 把目标向量作为增广列；
3. 比较系数矩阵与增广矩阵的秩。

---

### 课堂例：构造新的线性无关组

设 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，令

$$
\beta_1=\alpha_1+\alpha_2,
\qquad
\beta_2=\alpha_2+\alpha_3,
\qquad
\beta_3=\alpha_3+\alpha_1.
$$

证明 $\beta_1,\beta_2,\beta_3$ 线性无关。

设

$$
k_1\beta_1+k_2\beta_2+k_3\beta_3=\mathbf 0.
$$

代入：

$$
k_1(\alpha_1+\alpha_2)
+k_2(\alpha_2+\alpha_3)
+k_3(\alpha_3+\alpha_1)
=\mathbf 0.
$$

整理同类向量：

$$
(k_1+k_3)\alpha_1
+(k_1+k_2)\alpha_2
+(k_2+k_3)\alpha_3
=\mathbf 0.
$$

因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，所以

$$
\begin{cases}
k_1+k_3=0,\\
k_1+k_2=0,\\
k_2+k_3=0.
\end{cases}
$$

系数矩阵的行列式为

$$
\begin{vmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{vmatrix}
=2\ne0,
$$

故

$$
k_1=k_2=k_3=0.
$$

因此 $\beta_1,\beta_2,\beta_3$ 线性无关。

---

### 常用结论

#### 单个向量

单个向量 $\alpha$：

$$
\alpha\text{ 线性无关}
\iff
\alpha\ne\mathbf 0.
$$

#### 两个向量

两个向量 $\alpha,\beta$：

$$
\alpha,\beta\text{ 线性相关}
\iff
\alpha,\beta\text{ 成比例}.
$$

在 $\mathbb R^2$ 或 $\mathbb R^3$ 中，其几何意义是两向量共线。

#### 含有零向量

只要向量组中含有零向量，该向量组一定线性相关。

因为

$$
1\mathbf 0+0\alpha_2+\cdots+0\alpha_s=\mathbf 0
$$

给出了一组不全为零的系数。

#### 向量个数超过维数

$\mathbb R^n$ 中任意 $s>n$ 个向量必线性相关。

因为对应矩阵最多秩为 $n$：

$$
r(A)\le n<s.
$$

#### 整体与部分

- 整体线性无关 $\Rightarrow$ 任意部分组线性无关；
- 某个部分组线性相关 $\Rightarrow$ 整体线性相关；
- 整体线性相关时，某些部分组仍可能线性无关。

---

## 4.3 极大线性无关组与向量组的秩

### 线性相关的等价刻画

设向量组

$$
\alpha_1,\ldots,\alpha_s,\qquad s\ge2.
$$

则：

$$
\alpha_1,\ldots,\alpha_s\text{ 线性相关}
$$

的充要条件是：

> 至少有一个向量可以由其余向量线性表示。

#### 证明思路

若线性相关，则存在不全为零的 $k_i$，使

$$
k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf 0.
$$

设 $k_i\ne0$，则

$$
\alpha_i
=
-\sum_{j\ne i}\frac{k_j}{k_i}\alpha_j.
$$

反过来，如果某个向量能由其余向量表示，把所有项移到一边，即得到一个系数不全为零的零线性组合。

老师说明：该结论需要理解，但在本课程后续证明中使用频率低于下面几个定理。

---

### 线性表示的唯一性

设

$$
\alpha_1,\ldots,\alpha_s
$$

线性无关，则对任意向量 $\beta$：

$$
\alpha_1,\ldots,\alpha_s,\beta\text{ 线性相关}
$$

的充要条件是：

$$
\beta\text{ 可由 }\alpha_1,\ldots,\alpha_s\text{ 唯一线性表示}.
$$

即存在唯一的 $k_1,\ldots,k_s$，使

$$
\beta=k_1\alpha_1+\cdots+k_s\alpha_s.
$$

#### 唯一性的证明

若

$$
\beta=k_1\alpha_1+\cdots+k_s\alpha_s
=t_1\alpha_1+\cdots+t_s\alpha_s,
$$

两式相减：

$$
(k_1-t_1)\alpha_1+\cdots+(k_s-t_s)\alpha_s=\mathbf 0.
$$

由线性无关性：

$$
k_i-t_i=0,
$$

故 $k_i=t_i$。

:::TIP
这是本章最重要的结果之一：

> “无关组加一个向量后相关”意味着新加入的向量能由原无关组唯一表示。
:::

---

### 向量个数比较定理

设向量组

$$
\alpha_1,\ldots,\alpha_r
$$

中的每一个向量都可由

$$
\beta_1,\ldots,\beta_s
$$

线性表示。

若

$$
r>s,
$$

则 $\alpha_1,\ldots,\alpha_r$ 必线性相关。

其常用逆否形式为：

> 若 $\alpha_1,\ldots,\alpha_r$ 线性无关，并且它们都可由 $\beta_1,\ldots,\beta_s$ 线性表示，则
>
> $$
> r\le s.
> $$

这一定理专门用于比较两个向量组所含向量的个数。

---

### 向量组等价

若两个向量组能够相互线性表示，则称它们 **等价**。

即：

- 每个 $\alpha_i$ 都可由 $\beta_1,\ldots,\beta_s$ 表示；
- 每个 $\beta_j$ 都可由 $\alpha_1,\ldots,\alpha_r$ 表示。

等价关系具有：

1. 自反性；
2. 对称性；
3. 传递性。

若两个等价向量组都线性无关，则它们所含向量个数相同。

证明时对两个方向分别应用“向量个数比较定理”：

$$
r\le s,\qquad s\le r,
$$

所以 $r=s$。

---

### 极大线性无关组

设

$$
\alpha_1,\ldots,\alpha_s
$$

为一个向量组，其中的部分组

$$
\alpha_{i_1},\ldots,\alpha_{i_r}
$$

满足：

1. $\alpha_{i_1},\ldots,\alpha_{i_r}$ 线性无关；
2. 原向量组中任意再加入一个向量后，所得向量组都线性相关；

则称该部分组为原向量组的一个 **极大线性无关组**。

“极大”表示：

> 在原向量组内部已经无法继续加入向量并保持线性无关。

等价定义：

1. $\alpha_{i_1},\ldots,\alpha_{i_r}$ 线性无关；
2. 原向量组中的每个向量都可由它们线性表示。

第二种定义在证明和计算中更常用。

:::WARNING
“极大线性无关组”中的“极大”是不能继续扩充，不表示向量的长度最大，也不表示只有唯一一组。

同一向量组通常可以有多个不同的极大线性无关组。
:::

---

### 极大线性无关组的求法

设

$$
A=[\alpha_1\ \alpha_2\ \cdots\ \alpha_s].
$$

对 $A$ 只做初等行变换，化为行阶梯形矩阵。

若阶梯头位于第

$$
i_1,i_2,\ldots,i_r
$$

列，则

$$
\alpha_{i_1},\alpha_{i_2},\ldots,\alpha_{i_r}
$$

构成原向量组的一个极大线性无关组。

:::WARNING
必须回到 **原矩阵** 中取对应列。

行变换后的列向量一般已经改变，不能直接把化简后矩阵的列作为原向量组的极大无关组。
:::

<!-- 图片占位符：插入“矩阵化为行阶梯形后，阶梯头列对应原矩阵主元列”的示意图。 -->

### 课堂例：由阶梯头寻找极大无关组

设

$$
A=[\alpha_1\ \alpha_2\ \alpha_3\ \alpha_4].
$$

行化简后，阶梯头位于第 $1,2,4$ 列，则

$$
\alpha_1,\alpha_2,\alpha_4
$$

构成一个极大线性无关组。

课堂进一步说明：

- $\alpha_1,\alpha_3,\alpha_4$ 也可能构成极大线性无关组；
- $\alpha_2,\alpha_3,\alpha_4$ 也可能构成极大线性无关组；
- $\alpha_1,\alpha_2,\alpha_3$ 若自身线性相关，就不能构成极大线性无关组。

因此极大线性无关组一般不唯一。

---

### 向量组的秩

同一向量组的任意两个极大线性无关组所含向量个数相同。

把这个公共个数定义为该向量组的 **秩**：

$$
r(\alpha_1,\ldots,\alpha_s)=r.
$$

因此：

$$
\text{向量组的秩}
=
\text{任一极大线性无关组所含向量个数}.
$$

若

$$
A=[\alpha_1\ \cdots\ \alpha_s],
$$

则

$$
r(\alpha_1,\ldots,\alpha_s)=r(A).
$$

常用性质：

1. 向量组与它的任一极大线性无关组等价；
2. 同一向量组的任意两个极大线性无关组等价；
3. 等价向量组的秩相等；
4. 两个向量组秩相等，不能直接推出它们等价；
5. 线性无关组的秩等于其向量个数；
6. 线性相关组的秩小于其向量个数。

---

## 4.4 基、维数与坐标

### 基与维数

线性空间 $\mathbb R^n$ 中的向量组

$$
\varepsilon_1,\ldots,\varepsilon_r
$$

若满足：

1. 线性无关；
2. $\mathbb R^n$ 中任意向量都可由它们线性表示；

则称其为 $\mathbb R^n$ 的一组 **基**。

基中所含向量的个数称为空间的 **维数**：

$$
\dim \mathbb R^n=n.
$$

$\mathbb R^n$ 的常用基为

$$
e_1=
\begin{bmatrix}
1\\0\\\vdots\\0
\end{bmatrix},
\quad
e_2=
\begin{bmatrix}
0\\1\\\vdots\\0
\end{bmatrix},
\quad\ldots,\quad
e_n=
\begin{bmatrix}
0\\0\\\vdots\\1
\end{bmatrix}.
$$

### $\mathbb R^n$ 中判断一组基

$\mathbb R^n$ 中恰有 $n$ 个向量

$$
\alpha_1,\ldots,\alpha_n
$$

时，下列条件等价：

1. 它们构成 $\mathbb R^n$ 的一组基；
2. 它们线性无关；
3. $r([\alpha_1\ \cdots\ \alpha_n])=n$；
4. $\det[\alpha_1\ \cdots\ \alpha_n]\ne0$。

因此在 $\mathbb R^n$ 中判断 $n$ 个向量是否构成一组基，最直接的方法是计算它们构成方阵的行列式。

---

### 坐标

设

$$
\varepsilon_1,\ldots,\varepsilon_n
$$

是 $\mathbb R^n$ 的一组基。

任意 $\alpha\in\mathbb R^n$ 可以唯一表示为

$$
\alpha=x_1\varepsilon_1+\cdots+x_n\varepsilon_n.
$$

列向量

$$
X=
\begin{bmatrix}
x_1\\
\vdots\\
x_n
\end{bmatrix}
$$

称为 $\alpha$ 在基 $\varepsilon_1,\ldots,\varepsilon_n$ 下的 **坐标**。

写成矩阵形式：

$$
\alpha
=
[\varepsilon_1\ \varepsilon_2\ \cdots\ \varepsilon_n]X.
$$

:::TIP
一个具体列向量的分量，默认是它在常用基下的坐标。

更换基后，同一个向量的坐标一般会改变。
:::

---

### 基变换与坐标变换

设 $\mathbb R^n$ 中有两组基：

$$
\mathcal E=(\varepsilon_1,\ldots,\varepsilon_n),
$$

$$
\mathcal E'=(\varepsilon'_1,\ldots,\varepsilon'_n).
$$

若

$$
[\varepsilon'_1\ \cdots\ \varepsilon'_n]
=
[\varepsilon_1\ \cdots\ \varepsilon_n]M,
$$

则称 $M$ 为从基 $\mathcal E$ 到基 $\mathcal E'$ 的 **过渡矩阵**。

其中 $M$ 的第 $j$ 列就是 $\varepsilon'_j$ 在旧基 $\mathcal E$ 下的坐标。

若向量 $\alpha$ 在两组基下的坐标分别为 $X$ 和 $X'$，则

$$
\alpha=[\varepsilon_1\ \cdots\ \varepsilon_n]X
$$

且

$$
\alpha=[\varepsilon'_1\ \cdots\ \varepsilon'_n]X'.
$$

代入基变换公式：

$$
\alpha
=
[\varepsilon_1\ \cdots\ \varepsilon_n]MX'.
$$

由坐标唯一性：

$$
X=MX',
$$

因此

$$
X'=M^{-1}X.
$$

:::WARNING
方向必须分清：

- 基的变换：$[\mathcal E']=[\mathcal E]M$；
- 坐标的变换：$X'=M^{-1}X$。

基乘 $M$，坐标乘 $M^{-1}$。
:::

### 过渡矩阵的计算

记

$$
A=[\varepsilon_1\ \cdots\ \varepsilon_n],
\qquad
B=[\varepsilon'_1\ \cdots\ \varepsilon'_n].
$$

由

$$
B=AM
$$

得

$$
M=A^{-1}B.
$$

实际计算时可将

$$
[A\mid B]
$$

作初等行变换：

$$
[A\mid B]\longrightarrow[I\mid M].
$$

### 课堂例：基变换与坐标变换

在 $\mathbb R^3$ 中给定两组基

$$
\mathcal E:
\quad
\varepsilon_1=
\begin{bmatrix}
1\\2\\1
\end{bmatrix},
\quad
\varepsilon_2=
\begin{bmatrix}
2\\3\\3
\end{bmatrix},
\quad
\varepsilon_3=
\begin{bmatrix}
3\\7\\3
\end{bmatrix},
$$

$$
\mathcal E':
\quad
\varepsilon'_1=
\begin{bmatrix}
9\\24\\-1
\end{bmatrix},
\quad
\varepsilon'_2=
\begin{bmatrix}
8\\22\\-2
\end{bmatrix},
\quad
\varepsilon'_3=
\begin{bmatrix}
12\\28\\4
\end{bmatrix}.
$$

求得过渡矩阵

$$
M=
\begin{bmatrix}
1&0&0\\
2&-2&0\\
4&4&-1
\end{bmatrix}.
$$

若 $\alpha$ 在基 $\mathcal E$ 下的坐标为

$$
X=
\begin{bmatrix}
0\\1\\-1
\end{bmatrix},
$$

则在基 $\mathcal E'$ 下的坐标为

$$
X'=M^{-1}X
=
\begin{bmatrix}
0\\-\frac12\\\frac14
\end{bmatrix}.
$$

<!-- 图片占位符：插入两组基表示同一向量、坐标随基改变的示意图。 -->

---

## 4.5 子空间

### 子空间的定义

设 $W$ 是 $\mathbb R^n$ 的非空子集。

若 $W$ 对 $\mathbb R^n$ 中的加法和数乘封闭，即：

1. 对任意 $\alpha,\beta\in W$，有 $\alpha+\beta\in W$；
2. 对任意 $\alpha\in W$、$k\in\mathbb R$，有 $k\alpha\in W$；

则称 $W$ 是 $\mathbb R^n$ 的一个 **子空间**。

也可以合并为一个判定条件：

$$
\forall\alpha,\beta\in W,\ \forall k,l\in\mathbb R,
\qquad
k\alpha+l\beta\in W.
$$

### 子空间一定包含零向量

因为 $W$ 非空，取 $\alpha\in W$，由数乘封闭性：

$$
0\alpha=\mathbf 0\in W.
$$

同理：

$$
-\alpha=(-1)\alpha\in W.
$$

因此子空间自动继承线性空间的八条运算性质。

:::WARNING
仅仅是 $\mathbb R^n$ 的非空子集，还不能称为子空间。

例如

$$
W=\left\{
\begin{bmatrix}
x\\1
\end{bmatrix}
\middle|
x\in\mathbb R
\right\}
$$

对加法和数乘都不封闭，因此不是 $\mathbb R^2$ 的子空间。
:::

---

### 常见子空间

#### 例 1：过原点的坐标平面

设

$$
W=
\left\{
\begin{bmatrix}
x_1\\x_2\\0
\end{bmatrix}
\middle|
x_1,x_2\in\mathbb R
\right\}.
$$

任取

$$
\alpha=
\begin{bmatrix}
x_1\\x_2\\0
\end{bmatrix},
\qquad
\beta=
\begin{bmatrix}
y_1\\y_2\\0
\end{bmatrix},
$$

则

$$
\alpha+\beta=
\begin{bmatrix}
x_1+y_1\\x_2+y_2\\0
\end{bmatrix}\in W,
$$

且

$$
k\alpha=
\begin{bmatrix}
kx_1\\kx_2\\0
\end{bmatrix}\in W.
$$

因此 $W$ 是 $\mathbb R^3$ 的子空间。

又因为

$$
\begin{bmatrix}
x_1\\x_2\\0
\end{bmatrix}
=
x_1
\begin{bmatrix}
1\\0\\0
\end{bmatrix}
+
x_2
\begin{bmatrix}
0\\1\\0
\end{bmatrix},
$$

故

$$
\left\{
\begin{bmatrix}
1\\0\\0
\end{bmatrix},
\begin{bmatrix}
0\\1\\0
\end{bmatrix}
\right\}
$$

是 $W$ 的一组基，并且

$$
\dim W=2.
$$

#### 例 2：平凡子空间

$$
\{\mathbf 0\},
\qquad
\mathbb R^n
$$

都是 $\mathbb R^n$ 的子空间。

其中

$$
\dim\{\mathbf 0\}=0,
\qquad
\dim\mathbb R^n=n.
$$

#### 例 3：齐次方程组的解空间

设

$$
A\in\mathbb R^{m\times n},
$$

定义

$$
W=\{X\in\mathbb R^n\mid AX=\mathbf 0\}.
$$

若 $X_1,X_2\in W$，则

$$
AX_1=\mathbf 0,
\qquad
AX_2=\mathbf 0.
$$

因此

$$
A(X_1+X_2)=AX_1+AX_2=\mathbf 0,
$$

且

$$
A(kX_1)=kAX_1=\mathbf 0.
$$

所以齐次线性方程组的全体解构成 $\mathbb R^n$ 的一个子空间，称为 **解空间**。

---

### 向量组生成的子空间

设 $\alpha_1,\ldots,\alpha_s\in\mathbb R^n$，所有线性组合的全体

$$
L(\alpha_1,\ldots,\alpha_s)
=
\left\{
k_1\alpha_1+\cdots+k_s\alpha_s
\middle|
k_i\in\mathbb R
\right\}
$$

构成 $\mathbb R^n$ 的一个子空间。

称它为由 $\alpha_1,\ldots,\alpha_s$ **生成的子空间**，也称张成空间。

加法封闭性：

$$
\sum_{i=1}^s k_i\alpha_i+\sum_{i=1}^s t_i\alpha_i
=
\sum_{i=1}^s(k_i+t_i)\alpha_i.
$$

数乘封闭性：

$$
c\sum_{i=1}^s k_i\alpha_i
=
\sum_{i=1}^s(ck_i)\alpha_i.
$$

### 生成空间的重要性质

两个向量组生成相同子空间的充要条件是它们等价：

$$
L(\alpha_1,\ldots,\alpha_s)
=
L(\beta_1,\ldots,\beta_t)
$$

$$
\iff
\alpha_1,\ldots,\alpha_s
\text{ 与 }
\beta_1,\ldots,\beta_t
\text{ 等价}.
$$

设

$$
\alpha_{i_1},\ldots,\alpha_{i_r}
$$

是 $\alpha_1,\ldots,\alpha_s$ 的一个极大线性无关组，则

$$
\alpha_{i_1},\ldots,\alpha_{i_r}
$$

构成 $L(\alpha_1,\ldots,\alpha_s)$ 的一组基。

因此：

$$
\dim L(\alpha_1,\ldots,\alpha_s)
=
r(\alpha_1,\ldots,\alpha_s).
$$

所以求生成空间的基和维数，本质上就是：

1. 求原向量组的一个极大线性无关组；
2. 极大无关组就是生成空间的一组基；
3. 极大无关组中的向量个数就是维数。

---

### 子空间的包含关系与维数

设 $W_1,W_2$ 都是有限维子空间。

若

$$
W_1\subseteq W_2,
$$

则

$$
\dim W_1\le\dim W_2.
$$

原因是 $W_1$ 的任一组基在 $W_2$ 中仍线性无关，其向量个数不能超过 $W_2$ 的维数。

进一步：

$$
W_1=W_2
$$

的充要条件是

$$
W_1\subseteq W_2
\quad\text{且}\quad
\dim W_1=\dim W_2.
$$

特殊地，若 $W\subseteq\mathbb R^n$，则

$$
W=\mathbb R^n
\iff
\dim W=n.
$$

---

## 4.6 矩阵的秩与线性方程组的解结构

### 矩阵的行秩、列秩与秩

设

$$
A=[\alpha_1\ \alpha_2\ \cdots\ \alpha_n]
\in\mathbb R^{m\times n}.
$$

矩阵各列构成的向量组的秩称为 $A$ 的 **列秩**。

矩阵各行转置后构成的向量组的秩称为 $A$ 的 **行秩**。

定理：

$$
\boxed{
\text{矩阵的秩}
=
\text{列秩}
=
\text{行秩}
}
$$

#### 列秩等于矩阵秩的思路

把 $A$ 行化简为行阶梯形矩阵。

若有 $r$ 个阶梯头，则：

- 阶梯头所在的原矩阵列构成一个极大线性无关组；
- 列向量组的秩为 $r$；
- 行阶梯形中有 $r$ 个非零行，所以矩阵秩也为 $r$。

故列秩等于矩阵秩。

行秩可利用

$$
r(A^T)=r(A)
$$

得到。

---

### 齐次线性方程组

考虑

$$
AX=\mathbf 0,
\qquad
A\in\mathbb R^{m\times n}.
$$

设

$$
r(A)=r.
$$

#### 情形 1：$r=n$

没有自由变量，方程组只有零解：

$$
X=\mathbf 0.
$$

解空间为

$$
W=\{\mathbf 0\},
$$

且

$$
\dim W=0.
$$

#### 情形 2：$r<n$

有

$$
n-r
$$

个自由变量，因此有无穷多个解。

把自由变量依次取为单位参数，可得到 $n-r$ 个线性无关的解向量

$$
\xi_1,\ldots,\xi_{n-r}.
$$

它们构成解空间的一组基，称为该齐次线性方程组的 **基础解系**。

通解为

$$
X=t_1\xi_1+\cdots+t_{n-r}\xi_{n-r},
\qquad
t_i\in\mathbb R.
$$

因此：

$$
\boxed{
\dim\ker A=n-r(A)
}
$$

也就是：

$$
\boxed{
\text{基础解系所含解向量个数}
=
\text{未知数个数}-\text{系数矩阵的秩}
}
$$

这就是秩—零化度关系在本课程中的具体形式。

---

### 课堂例 4.6.1：用基础解系表示齐次方程组通解

某齐次方程组有 $5$ 个未知数，系数矩阵秩为 $3$。

化为最简行阶梯形后，可写为

$$
\begin{cases}
x_1=-x_3+6x_5,\\
x_2=-\dfrac52x_5,\\
x_4=3x_5.
\end{cases}
$$

令

$$
x_3=t_1,
\qquad
x_5=t_2,
$$

则

$$
X=
\begin{bmatrix}
x_1\\x_2\\x_3\\x_4\\x_5
\end{bmatrix}
=
t_1
\begin{bmatrix}
-1\\0\\1\\0\\0
\end{bmatrix}
+
t_2
\begin{bmatrix}
6\\-\frac52\\0\\3\\1
\end{bmatrix}.
$$

因此基础解系可以取为

$$
\xi_1=
\begin{bmatrix}
-1\\0\\1\\0\\0
\end{bmatrix},
\qquad
\xi_2=
\begin{bmatrix}
6\\-\frac52\\0\\3\\1
\end{bmatrix}.
$$

解空间维数为

$$
5-3=2.
$$

:::TIP
求基础解系的固定流程：

1. 行化简至最简行阶梯形；
2. 找出自由变量；
3. 写出含自由参数的通解；
4. 按每个参数分别收集系数；
5. 得到的参数系数向量就是基础解系。
:::

---

### 非齐次线性方程组

考虑

$$
AX=b.
$$

#### 有解条件

$$
AX=b\text{ 有解}
\iff
r(A)=r(A,b).
$$

#### 解的个数

若方程组有解：

- 当 $r(A)=n$ 时，解唯一；
- 当 $r(A)<n$ 时，有无穷多个解。

### 非齐次解与齐次解的关系

设 $X^*$ 是 $AX=b$ 的一个特解，$\xi_1,\ldots,\xi_{n-r}$ 是导出齐次方程组

$$
AX=\mathbf 0
$$

的基础解系。

则非齐次方程组的全部解为

$$
\boxed{
X=X^*
+t_1\xi_1+\cdots+t_{n-r}\xi_{n-r}
}
$$

原因：

1. 若 $AX=b$ 且 $AX^*=b$，则
   $$
   A(X-X^*)=\mathbf 0;
   $$
2. 若 $A\xi=\mathbf 0$，则
   $$
   A(X^*+\xi)=b.
   $$

所以非齐次方程组的解集是：

> 一个特解，加上导出齐次方程组的解空间。

非齐次解集一般不是子空间，因为它通常不包含零向量。

---

### 课堂例 4.6.2：非齐次方程组的解结构

与上一题具有相同系数矩阵，化简后可写为

$$
\begin{cases}
x_1=-4-x_3+6x_5,\\
x_2=-2-\dfrac52x_5,\\
x_4=3x_5.
\end{cases}
$$

令

$$
x_3=t_1,\qquad x_5=t_2,
$$

则

$$
X=
\begin{bmatrix}
-4\\-2\\0\\0\\0
\end{bmatrix}
+t_1
\begin{bmatrix}
-1\\0\\1\\0\\0
\end{bmatrix}
+t_2
\begin{bmatrix}
6\\-\frac52\\0\\3\\1
\end{bmatrix}.
$$

其中

$$
X^*=
\begin{bmatrix}
-4\\-2\\0\\0\\0
\end{bmatrix}
$$

是一个特解，后面两个向量正是导出齐次方程组的基础解系。

---

### 利用解空间证明秩的结论

老师强调，本节的证明题常用以下思路：

1. 为待比较的矩阵构造齐次线性方程组；
2. 把它们的解集记为子空间 $W_1,W_2$；
3. 证明解空间之间的包含关系；
4. 利用
   $$
   \dim\ker A=n-r(A)
   $$
   把维数关系转化为秩关系。

#### 结论 1：若 $AB=0$

设

$$
A\in\mathbb R^{m\times n},
\qquad
B\in\mathbb R^{n\times s},
\qquad
AB=0.
$$

$B$ 的每个列向量都满足

$$
AX=\mathbf 0.
$$

因此 $B$ 的列空间包含于 $A$ 的零空间：

$$
\operatorname{Col}(B)\subseteq\ker A.
$$

所以

$$
r(B)
=
\dim\operatorname{Col}(B)
\le
\dim\ker A
=
n-r(A).
$$

即

$$
\boxed{
r(A)+r(B)\le n
}.
$$

#### 结论 2：实矩阵满足 $r(A^TA)=r(A)$

设

$$
A\in\mathbb R^{m\times n}.
$$

显然：

$$
AX=\mathbf 0
\Rightarrow
A^TAX=\mathbf 0.
$$

反过来，若

$$
A^TAX=\mathbf 0,
$$

左乘 $X^T$：

$$
X^TA^TAX=0.
$$

即

$$
(AX)^T(AX)=0.
$$

于是

$$
\|AX\|^2=0,
$$

故

$$
AX=\mathbf 0.
$$

因此

$$
\ker(A^TA)=\ker A.
$$

两者未知数个数相同，零空间维数相同，所以

$$
\boxed{
r(A^TA)=r(A)
}.
$$

同理：

$$
\boxed{
r(AA^T)=r(A)
}.
$$

:::WARNING
上述证明中必须使用“实矩阵”条件，因为

$$
(AX)^T(AX)
$$

被解释为各分量平方和。
:::

#### 结论 3：由秩相等推出乘积秩相等

设 $A,B,C$ 都是 $n$ 阶矩阵，且

$$
r(A)=r(BA).
$$

因为

$$
\ker A\subseteq\ker(BA),
$$

而二者秩相等，所以零空间维数相等，从而

$$
\ker A=\ker(BA).
$$

若

$$
BACX=\mathbf 0,
$$

令 $Y=CX$，则

$$
BAY=\mathbf 0.
$$

由 $\ker A=\ker(BA)$ 得

$$
AY=\mathbf 0,
$$

即

$$
ACX=\mathbf 0.
$$

因此

$$
\ker(BAC)=\ker(AC),
$$

从而

$$
\boxed{
r(BAC)=r(AC)
}.
$$

---

## 4.8 欧氏空间

### 内积

在 $\mathbb R^n$ 中，若一个二元函数

$$
(\alpha,\beta)\longmapsto \langle\alpha,\beta\rangle
$$

满足下列条件，则称其为 $\mathbb R^n$ 上的一个 **内积**。

#### 1. 对称性

$$
\langle\alpha,\beta\rangle
=
\langle\beta,\alpha\rangle.
$$

#### 2. 对第一个变量线性

$$
\langle k\alpha_1+l\alpha_2,\beta\rangle
=
k\langle\alpha_1,\beta\rangle
+l\langle\alpha_2,\beta\rangle.
$$

结合对称性可得对第二个变量也线性：

$$
\langle\alpha,k\beta_1+l\beta_2\rangle
=
k\langle\alpha,\beta_1\rangle
+l\langle\alpha,\beta_2\rangle.
$$

#### 3. 正定性

$$
\langle\alpha,\alpha\rangle\ge0,
$$

并且

$$
\langle\alpha,\alpha\rangle=0
\iff
\alpha=\mathbf 0.
$$

在线性空间上加入内积结构后，得到 **内积空间**；有限维实内积空间也称 **欧氏空间**。

---

### 标准内积

对

$$
\alpha=
\begin{bmatrix}
x_1\\
\vdots\\
x_n
\end{bmatrix},
\qquad
\beta=
\begin{bmatrix}
y_1\\
\vdots\\
y_n
\end{bmatrix},
$$

定义

$$
\boxed{
\langle\alpha,\beta\rangle
=
x_1y_1+\cdots+x_ny_n
=
\alpha^T\beta
}.
$$

这称为 $\mathbb R^n$ 上的 **标准内积**。

若题目没有特别说明，默认使用标准内积。

### 加权内积

例如

$$
\langle\alpha,\beta\rangle
=
x_1y_1+2x_2y_2+\cdots+nx_ny_n
$$

也是一个内积，因为各权重均为正数。

不同内积会给出不同的长度和夹角。

### 内积的常用性质

$$
\langle\alpha,\mathbf 0\rangle=0,
$$

$$
\left\langle
\sum_i k_i\alpha_i,
\sum_j t_j\beta_j
\right\rangle
=
\sum_i\sum_j k_it_j\langle\alpha_i,\beta_j\rangle.
$$

---

### 长度与重要不等式

定义向量 $\alpha$ 的长度或范数：

$$
\boxed{
\|\alpha\|
=
\sqrt{\langle\alpha,\alpha\rangle}
}.
$$

标准内积下：

$$
\|\alpha\|
=
\sqrt{x_1^2+\cdots+x_n^2}.
$$

长度满足：

1. $\|\alpha\|\ge0$，且 $\|\alpha\|=0\iff\alpha=\mathbf 0$；
2. $\|k\alpha\|=|k|\|\alpha\|$；
3. $\|\alpha+\beta\|\le\|\alpha\|+\|\beta\|$。

---

### Cauchy–Schwarz 不等式

$$
\boxed{
|\langle\alpha,\beta\rangle|
\le
\|\alpha\|\|\beta\|
}
$$

等号成立的充要条件是 $\alpha,\beta$ 线性相关。

#### 课堂证明思路

分两种情况。

若 $\alpha,\beta$ 线性相关，则 $\alpha=t\beta$，于是

$$
|\langle\alpha,\beta\rangle|
=
|t|\langle\beta,\beta\rangle
=
|t|\|\beta\|^2
=
\|\alpha\|\|\beta\|.
$$

若 $\alpha,\beta$ 线性无关，则对任意 $t\in\mathbb R$：

$$
\alpha+t\beta\ne\mathbf 0.
$$

由正定性：

$$
\langle\alpha+t\beta,\alpha+t\beta\rangle>0.
$$

展开：

$$
\|\alpha\|^2
+2t\langle\alpha,\beta\rangle
+t^2\|\beta\|^2
>0.
$$

这是关于 $t$ 的二次三项式，对所有实数 $t$ 都为正，因此判别式小于零：

$$
4\langle\alpha,\beta\rangle^2
-4\|\alpha\|^2\|\beta\|^2
<0.
$$

从而

$$
|\langle\alpha,\beta\rangle|
<
\|\alpha\|\|\beta\|.
$$

合并两种情况即得结论。

---

### 三角不等式

$$
\boxed{
\|\alpha+\beta\|
\le
\|\alpha\|+\|\beta\|
}.
$$

老师强调，处理长度的不等式时常用技巧是：

> 先平方，把长度平方改写为内积，再利用内积的线性性质展开。

证明：

$$
\|\alpha+\beta\|^2
=
\langle\alpha+\beta,\alpha+\beta\rangle
$$

$$
=
\|\alpha\|^2
+2\langle\alpha,\beta\rangle
+\|\beta\|^2
$$

$$
\le
\|\alpha\|^2
+2\|\alpha\|\|\beta\|
+\|\beta\|^2
$$

$$
=
(\|\alpha\|+\|\beta\|)^2.
$$

两边开平方得到结论。

---

### 夹角与正交

对非零向量 $\alpha,\beta$，定义夹角 $\theta\in[0,\pi]$：

$$
\boxed{
\cos\theta
=
\frac{\langle\alpha,\beta\rangle}
{\|\alpha\|\|\beta\|}
}.
$$

Cauchy–Schwarz 不等式保证右侧属于 $[-1,1]$，所以定义合理。

### 正交

若

$$
\langle\alpha,\beta\rangle=0,
$$

则称 $\alpha$ 与 $\beta$ **正交**，记作

$$
\alpha\perp\beta.
$$

非零向量之间：

$$
\alpha\perp\beta
\iff
\theta=\frac{\pi}{2}.
$$

零向量与任意向量都正交，因为

$$
\langle\mathbf 0,\alpha\rangle=0.
$$

---

### 勾股定理

$$
\boxed{
\alpha\perp\beta
\iff
\|\alpha+\beta\|^2
=
\|\alpha\|^2+\|\beta\|^2
}.
$$

因为

$$
\|\alpha+\beta\|^2
=
\|\alpha\|^2
+2\langle\alpha,\beta\rangle
+\|\beta\|^2.
$$

中间项为零恰好等价于 $\alpha\perp\beta$。

<!-- 图片占位符：插入两个正交向量及其和构成直角三角形的示意图。 -->

---

### 正交向量组与标准正交基

非零向量组

$$
\alpha_1,\ldots,\alpha_s
$$

若满足两两正交：

$$
\langle\alpha_i,\alpha_j\rangle=0,
\qquad i\ne j,
$$

则称为 **正交向量组**。

单个非零向量也可以看作正交向量组。

### 正交向量组必线性无关

设

$$
k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf 0.
$$

两边与 $\alpha_i$ 作内积：

$$
k_i\langle\alpha_i,\alpha_i\rangle=0.
$$

因为 $\alpha_i\ne\mathbf 0$，所以

$$
\langle\alpha_i,\alpha_i\rangle>0.
$$

故

$$
k_i=0.
$$

对所有 $i$ 均成立，因此向量组线性无关。

由此可知：

$$
\mathbb R^n\text{ 中正交向量组所含向量个数不超过 }n.
$$

### 正交基

$\mathbb R^n$ 中由 $n$ 个两两正交的非零向量构成的基称为 **正交基**。

### 标准正交基

若正交基中的每个向量长度均为 $1$，则称为 **标准正交基**，也称单位正交基。

把正交基

$$
\alpha_1,\ldots,\alpha_n
$$

单位化：

$$
\eta_i=\frac{\alpha_i}{\|\alpha_i\|},
$$

即可得到标准正交基。

$\mathbb R^n$ 的常用基

$$
e_1,\ldots,e_n
$$

就是标准正交基。

---

### 度量矩阵

设

$$
\mathcal E=(\varepsilon_1,\ldots,\varepsilon_n)
$$

是 $\mathbb R^n$ 的一组基。

定义矩阵

$$
G=
\begin{bmatrix}
\langle\varepsilon_1,\varepsilon_1\rangle
&
\cdots
&
\langle\varepsilon_1,\varepsilon_n\rangle\\
\vdots&\ddots&\vdots\\
\langle\varepsilon_n,\varepsilon_1\rangle
&
\cdots
&
\langle\varepsilon_n,\varepsilon_n\rangle
\end{bmatrix}.
$$

称 $G$ 为内积在基 $\mathcal E$ 下的 **度量矩阵**，也称 Gram 矩阵。

若 $\alpha,\beta$ 在该基下的坐标分别为

$$
X=
\begin{bmatrix}
x_1\\\vdots\\x_n
\end{bmatrix},
\qquad
Y=
\begin{bmatrix}
y_1\\\vdots\\y_n
\end{bmatrix},
$$

则

$$
\boxed{
\langle\alpha,\beta\rangle=X^TGY
}.
$$

### 度量矩阵的性质

1. 对称：
   $$
   G^T=G;
   $$

2. 正定：
   $$
   X^TGX>0
   \qquad(X\ne0);
   $$

3. 可逆：
   $$
   \det G\ne0.
   $$

标准正交基下：

$$
G=I_n.
$$

反过来，若某组基下的度量矩阵为 $I_n$，则该组基是标准正交基。

:::WARNING
教材例 4.8.8 的度量矩阵印刷有误。

老师在课上指出：相应右下角元素应将 $4$ 改为 $6$。使用原数值时可以找到非零坐标向量 $X$ 使

$$
X^TGX=0,
$$

违反正定性，因此原矩阵不能作为度量矩阵。
:::

<!-- 图片占位符：插入教材例 4.8.8 的度量矩阵截图，并在错误元素旁标注“4 改为 6”。 -->

---

### 正交矩阵

若 $n$ 阶实矩阵 $Q$ 满足

$$
\boxed{
Q^TQ=I_n
},
$$

则称 $Q$ 为 **正交矩阵**。

下列条件等价：

$$
Q^TQ=I_n,
$$

$$
QQ^T=I_n,
$$

$$
Q^{-1}=Q^T.
$$

正交矩阵的列向量构成 $\mathbb R^n$ 的一组标准正交基；其行向量也构成标准正交基。

因此，若

$$
Q=[\eta_1\ \eta_2\ \cdots\ \eta_n],
$$

则

$$
\eta_1,\ldots,\eta_n
\text{ 是标准正交基}
\iff
Q\text{ 是正交矩阵}.
$$

### 判断标准正交基的两种方法

#### 方法 1：逐个判断

验证：

$$
\|\eta_i\|=1,
$$

以及

$$
\langle\eta_i,\eta_j\rangle=0
\qquad(i\ne j).
$$

#### 方法 2：整体判断

构造

$$
Q=[\eta_1\ \cdots\ \eta_n],
$$

验证

$$
Q^TQ=I_n.
$$

第二种方法更适合计算题。

---

### 标准正交基的优点

设

$$
\eta_1,\ldots,\eta_n
$$

是标准正交基，且

$$
\alpha=x_1\eta_1+\cdots+x_n\eta_n.
$$

两边与 $\eta_i$ 作内积：

$$
\langle\alpha,\eta_i\rangle
=
x_i.
$$

因此坐标可直接得到：

$$
\boxed{
x_i=\langle\alpha,\eta_i\rangle
}.
$$

若 $\alpha,\beta$ 在该基下的坐标分别为 $X,Y$，则：

#### 内积

$$
\boxed{
\langle\alpha,\beta\rangle
=
X^TY
=
\sum_{i=1}^n x_iy_i
}.
$$

#### 长度

$$
\boxed{
\|\alpha\|
=
\sqrt{x_1^2+\cdots+x_n^2}
}.
$$

#### 夹角

$$
\boxed{
\cos\theta
=
\frac{X^TY}{\|X\|\|Y\|}
}.
$$

:::WARNING
只有当两个坐标向量是在 **同一组基** 下给出时，才能直接对应分量相乘相加。

课堂例 4.8.9 专门强调：

- 一个向量给的是标准正交基下坐标；
- 另一个向量给的是常用基下坐标；

此时不能直接点乘，必须先把二者统一到同一组基下。
:::

---

### 正交基的扩充

$\mathbb R^n$ 中任意正交向量组

$$
\alpha_1,\ldots,\alpha_m,
\qquad m<n,
$$

都可以扩充为 $\mathbb R^n$ 的一组正交基。

理论构造如下。

取

$$
\beta\notin L(\alpha_1,\ldots,\alpha_m),
$$

令

$$
\alpha_{m+1}
=
\beta
-\sum_{i=1}^m
\frac{\langle\beta,\alpha_i\rangle}
{\langle\alpha_i,\alpha_i\rangle}
\alpha_i.
$$

则

$$
\alpha_{m+1}\perp\alpha_i,
\qquad i=1,\ldots,m.
$$

继续重复即可扩充为正交基，最后单位化得到标准正交基。

老师指出：

> 该方法在理论上保证存在，但实际计算时，寻找一个不属于原生成空间的 $\beta$ 往往不方便。

实际题目中，若要把一个子空间的标准正交基扩充为整个 $\mathbb R^n$ 的标准正交基，通常采用：

1. 解正交条件方程，求原子空间的正交补；
2. 求正交补的一组基础解系；
3. 对该基础解系做 Schmidt 正交化；
4. 单位化后与原标准正交基合并。

---

### Schmidt 正交化

设

$$
\alpha_1,\alpha_2,\ldots,\alpha_n
$$

是 $\mathbb R^n$ 的一组基。

Schmidt 正交化把它改造成一组正交基

$$
\beta_1,\beta_2,\ldots,\beta_n.
$$

#### 第一步

$$
\beta_1=\alpha_1.
$$

#### 第二步

从 $\alpha_2$ 中减去它在 $\beta_1$ 方向上的投影：

$$
\beta_2
=
\alpha_2
-
\frac{\langle\alpha_2,\beta_1\rangle}
{\langle\beta_1,\beta_1\rangle}
\beta_1.
$$

于是

$$
\beta_2\perp\beta_1.
$$

#### 第三步

从 $\alpha_3$ 中减去它在 $\beta_1,\beta_2$ 方向上的投影：

$$
\beta_3
=
\alpha_3
-
\frac{\langle\alpha_3,\beta_1\rangle}
{\langle\beta_1,\beta_1\rangle}\beta_1
-
\frac{\langle\alpha_3,\beta_2\rangle}
{\langle\beta_2,\beta_2\rangle}\beta_2.
$$

#### 一般公式

$$
\boxed{
\beta_k
=
\alpha_k
-
\sum_{j=1}^{k-1}
\frac{\langle\alpha_k,\beta_j\rangle}
{\langle\beta_j,\beta_j\rangle}
\beta_j
},
\qquad
k=2,\ldots,n.
$$

所得向量满足：

1. $\beta_1,\ldots,\beta_n$ 两两正交；
2. 对每个 $k$，
   $$
   L(\alpha_1,\ldots,\alpha_k)
   =
   L(\beta_1,\ldots,\beta_k).
   $$

最后单位化：

$$
\eta_i=\frac{\beta_i}{\|\beta_i\|},
$$

即可得到标准正交基

$$
\eta_1,\ldots,\eta_n.
$$

:::TIP
考试中通常最多要求正交化三个向量。

建议牢牢记住：

$$
\beta_1=\alpha_1,
$$

$$
\beta_2
=
\alpha_2
-
\frac{\langle\alpha_2,\beta_1\rangle}
{\langle\beta_1,\beta_1\rangle}\beta_1,
$$

$$
\beta_3
=
\alpha_3
-
\frac{\langle\alpha_3,\beta_1\rangle}
{\langle\beta_1,\beta_1\rangle}\beta_1
-
\frac{\langle\alpha_3,\beta_2\rangle}
{\langle\beta_2,\beta_2\rangle}\beta_2.
$$
:::

<!-- 图片占位符：插入 Schmidt 正交化的几何图，展示“原向量减去投影后得到垂直分量”。 -->

### 课堂例 4.8.10：求子空间的标准正交基并扩充

课堂题型：

> 给定 $\mathbb R^4$ 中三个向量 $\alpha_1,\alpha_2,\alpha_3$，求它们生成子空间的一组标准正交基，并把它扩充为 $\mathbb R^4$ 的标准正交基。

完整流程：

#### 第 1 步：求生成空间的一组基

构造

$$
A=[\alpha_1\ \alpha_2\ \alpha_3].
$$

行化简后若有两个阶梯头，且位于第 $1,2$ 列，则

$$
\alpha_1,\alpha_2
$$

构成原向量组的一个极大线性无关组，因此也是生成空间的一组基。

#### 第 2 步：Schmidt 正交化

取

$$
\beta_1=\alpha_1,
$$

$$
\beta_2
=
\alpha_2
-
\frac{\langle\alpha_2,\beta_1\rangle}
{\langle\beta_1,\beta_1\rangle}\beta_1.
$$

再单位化：

$$
\eta_1=\frac{\beta_1}{\|\beta_1\|},
\qquad
\eta_2=\frac{\beta_2}{\|\beta_2\|}.
$$

则 $\eta_1,\eta_2$ 是该子空间的一组标准正交基。

#### 第 3 步：求正交补

设

$$
X=
\begin{bmatrix}
x_1\\x_2\\x_3\\x_4
\end{bmatrix}.
$$

令

$$
\langle X,\eta_1\rangle=0,
\qquad
\langle X,\eta_2\rangle=0.
$$

解所得齐次方程组，求出正交补的一组基础解系

$$
\gamma_1,\gamma_2.
$$

#### 第 4 步：对正交补继续正交化

若 $\gamma_1,\gamma_2$ 尚未正交，则令

$$
\delta_1=\gamma_1,
$$

$$
\delta_2
=
\gamma_2
-
\frac{\langle\gamma_2,\delta_1\rangle}
{\langle\delta_1,\delta_1\rangle}\delta_1.
$$

单位化：

$$
\eta_3=\frac{\delta_1}{\|\delta_1\|},
\qquad
\eta_4=\frac{\delta_2}{\|\delta_2\|}.
$$

最终

$$
\eta_1,\eta_2,\eta_3,\eta_4
$$

构成 $\mathbb R^4$ 的一组标准正交基。

<!-- 图片占位符：插入教材例 4.8.10 的题目截图，以补充录音中无法完整识别的原始向量数据。 -->

---

## 本章核心结论速查

### 线性相关性

设

$$
A=[\alpha_1\ \cdots\ \alpha_s].
$$

则

$$
\alpha_1,\ldots,\alpha_s\text{ 线性无关}
\iff
r(A)=s,
$$

$$
\alpha_1,\ldots,\alpha_s\text{ 线性相关}
\iff
r(A)<s.
$$

### 线性表示

$$
\beta\text{ 可由 }\alpha_1,\ldots,\alpha_s\text{ 表示}
\iff
r(A)=r(A,\beta).
$$

若 $\alpha_1,\ldots,\alpha_s$ 线性无关，则表示一旦存在就唯一。

### 极大线性无关组

- 对矩阵作行变换；
- 找阶梯头所在列；
- 回到原矩阵取对应列。

### 向量组的秩

$$
r(\alpha_1,\ldots,\alpha_s)
=
r([\alpha_1\ \cdots\ \alpha_s]).
$$

### 基与维数

$\mathbb R^n$ 中 $n$ 个向量构成基的充要条件：

$$
\det[\alpha_1\ \cdots\ \alpha_n]\ne0.
$$

### 基变换与坐标变换

$$
[\mathcal E']=[\mathcal E]M,
$$

$$
X=MX',
$$

$$
X'=M^{-1}X.
$$

### 生成空间

$$
\dim L(\alpha_1,\ldots,\alpha_s)
=
r(\alpha_1,\ldots,\alpha_s).
$$

### 齐次方程组解空间

$$
\dim\ker A=n-r(A).
$$

基础解系含 $n-r(A)$ 个解向量。

### 非齐次方程组

$$
X=X^*+X_h,
$$

其中 $X^*$ 是一个特解，$X_h$ 是导出齐次方程组的任意解。

### 内积与长度

$$
\|\alpha\|=\sqrt{\langle\alpha,\alpha\rangle}.
$$

### Cauchy–Schwarz 不等式

$$
|\langle\alpha,\beta\rangle|
\le
\|\alpha\|\|\beta\|.
$$

### 三角不等式

$$
\|\alpha+\beta\|
\le
\|\alpha\|+\|\beta\|.
$$

### 正交

$$
\alpha\perp\beta
\iff
\langle\alpha,\beta\rangle=0.
$$

### 度量矩阵

若 $X,Y$ 是同一组基下的坐标，则

$$
\langle\alpha,\beta\rangle=X^TGY.
$$

### 正交矩阵

$$
Q^TQ=I
\iff
Q^{-1}=Q^T.
$$

### Schmidt 正交化

$$
\beta_k
=
\alpha_k
-
\sum_{j=1}^{k-1}
\frac{\langle\alpha_k,\beta_j\rangle}
{\langle\beta_j,\beta_j\rangle}
\beta_j.
$$
