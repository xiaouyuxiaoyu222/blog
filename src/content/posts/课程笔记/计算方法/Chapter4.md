---
title: Chapter4：矩阵特征值与特征向量的计算
published: 2026-06-02
description: 幂法、原点位移法、Aitken 加速、反幂法、Jacobi 方法、QR 方法、Householder 变换与 Hessenberg 化
tags: [计算方法]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 对矩阵特征值问题 $Ax=\lambda x$，用迭代和正交相似变换求出一个或全部特征值，并进一步得到对应特征向量。

这一章主要讲两类问题：

1. **只求少数特征值**：幂法、反幂法，以及原点位移和 Aitken 加速。
2. **求全部特征值**：Jacobi 方法和 QR 方法。

整体思路可以这样看：

- **幂法**：不断做 $Ax$，放大模最大的特征方向。
- **反幂法**：对 $A^{-1}$ 做幂法，从而找模最小的特征值；带位移后可精修指定附近的特征值。
- **Jacobi 方法**：对实对称矩阵不断做平面旋转，把非对角元逐步消掉。
- **QR 方法**：反复做 QR 分解并重排成 $RQ$，通过相似变换把矩阵逼近上三角阵。

本章大量使用 **正交变换**。正交变换的好处是：

- 保持向量长度和内积；
- 数值稳定性好；
- 若以 $Q^TAQ$ 的形式作用在矩阵上，还保持特征值不变。

---

## 目录

- [概述](#概述)
- [目录](#目录)
- [特征值问题的基本形式](#特征值问题的基本形式)
- [幂法](#幂法)
  - [幂法的基本思想](#幂法的基本思想)
  - [为什么要归一化](#为什么要归一化)
  - [特征值的计算与停止准则](#特征值的计算与停止准则)
  - [幂法算法](#幂法算法)
  - [收敛速度](#收敛速度)
  - [例：幂法求按模最大特征值](#例幂法求按模最大特征值)
- [幂法的加速](#幂法的加速)
  - [原点位移法](#原点位移法)
  - [Aitken 加速](#aitken-加速)
- [反幂法](#反幂法)
  - [反幂法的思想](#反幂法的思想)
  - [带原点位移的反幂法](#带原点位移的反幂法)
  - [例：反幂法精修指定附近特征值](#例反幂法精修指定附近特征值)
- [正交相似变换](#正交相似变换)
- [Jacobi 方法](#jacobi-方法)
  - [Jacobi 方法的基本思想](#jacobi-方法的基本思想)
  - [Givens 旋转矩阵](#givens-旋转矩阵)
  - [怎样选旋转角](#怎样选旋转角)
  - [Jacobi 算法](#jacobi-算法)
  - [收敛性与特点](#收敛性与特点)
  - [例：Jacobi 方法求对称三对角矩阵特征值](#例jacobi-方法求对称三对角矩阵特征值)
- [QR 方法](#qr-方法)
  - [基本 QR 迭代](#基本-qr-迭代)
  - [用 Schmidt 正交化做 QR 分解](#用-schmidt-正交化做-qr-分解)
  - [Householder 变换](#householder-变换)
  - [化一般矩阵为 Hessenberg 矩阵](#化一般矩阵为-hessenberg-矩阵)
  - [拟上三角矩阵的 Givens QR 分解](#拟上三角矩阵的-givens-qr-分解)
  - [带原点位移的 QR 方法](#带原点位移的-qr-方法)
  - [例：QR 方法求全部特征值](#例qr-方法求全部特征值)
- [应用实例](#应用实例)
- [方法对比](#方法对比)

---

## 特征值问题的基本形式

矩阵特征值问题写成：

$$
Ax=\lambda x, \qquad x\neq 0.
$$

其中：

- $\lambda$ 是矩阵 $A$ 的特征值；
- $x$ 是对应的特征向量；
- 若 $A$ 为实对称矩阵，则所有特征值都是实数，且可以选出一组正交特征向量；
- 若 $A$ 为实对称正定矩阵，则所有特征值都为正。

在数值计算里，直接展开特征多项式求根通常不可取。原因是：

- 特征多项式系数对扰动敏感；
- 高次多项式求根数值稳定性差；
- 大规模矩阵中形成特征多项式代价很高。

所以实际算法更常从矩阵作用、相似变换和正交分解出发。

---

## 幂法

### 幂法的基本思想

幂法用来求矩阵 **按模最大** 的特征值及其特征向量。

设 $A$ 有 $n$ 个线性无关的特征向量 $u_1,u_2,\dots,u_n$，对应特征值满足：

$$
|\lambda_1|>|\lambda_2|\geq \cdots \geq |\lambda_n|.
$$

任取初始向量 $x^{(0)}$，若它在 $u_1$ 方向上的分量不为零，则可写成：

$$
x^{(0)}=\alpha_1u_1+\alpha_2u_2+\cdots+\alpha_nu_n,\qquad \alpha_1\neq 0.
$$

不断左乘 $A$，有：

$$
A^kx^{(0)}
=\alpha_1\lambda_1^ku_1+\\alpha_2\lambda_2^ku_2+\cdots+\alpha_n\lambda_n^ku_n.
$$

提取 $\lambda_1^k$：

$$
A^kx^{(0)}
=\lambda_1^k\left[\alpha_1u_1+
\alpha_2\left(\frac{\lambda_2}{\lambda_1}\right)^ku_2+
\cdots+
\alpha_n\left(\frac{\lambda_n}{\lambda_1}\right)^ku_n\right].
$$

由于

$$
\left|\frac{\lambda_i}{\lambda_1}\right|<1\quad (i=2,\dots,n),
$$

后面各项逐渐衰减，方向最后趋近于 $u_1$。

所以幂法的直观解释是：

> 反复用 $A$ 作用在向量上，模最大的特征方向会被放大得最快。

:::TIP
配图占位：插入 lesson6 手写 PPT 第 3-18 页中“$A^kx^{(0)}$ 中最大特征方向逐渐占主导”的推导截图。
:::

### 为什么要归一化

若直接计算 $A^kx^{(0)}$，向量长度可能迅速变大或变小，导致溢出或下溢。

所以每一步都要做归一化。常用做法是：

$$
y^{(k)}=Ax^{(k)},
$$

取

$$
m_k=y_r^{(k)},\qquad |y_r^{(k)}|=\max_{1\leq i\leq n}|y_i^{(k)}|,
$$

然后令

$$
x^{(k+1)}=\frac{y^{(k)}}{m_k}.
$$

这样做只改变向量长度，不改变方向。

### 特征值的计算与停止准则

课本中可用归一化因子 $m_k$ 估计特征值：

$$
\lambda_1\approx m_k.
$$

老师上课强调了一个更稳妥的做法：一旦有了近似特征向量 $x$，可以用 **Rayleigh 商** 计算对应特征值：

$$
\lambda(x)=\frac{x^TAx}{x^Tx}.
$$

如果 $x$ 已经归一化为 $\|x\|_2=1$，则：

$$
\lambda(x)=x^TAx.
$$

停止准则最好从定义出发：

$$
\|Ax-\lambda x\|_2<\varepsilon.
$$

这比只看相邻两次 $x^{(k)}$ 或 $\lambda^{(k)}$ 的变化更有意义，因为我们最终要求的是满足 $Ax=\lambda x$。

### 幂法算法

给定矩阵 $A$、初始向量 $x^{(0)}$、误差限 $\varepsilon$、最大迭代次数 $N$：

1. 归一化 $x^{(0)}$。
2. 对 $k=0,1,2,\dots$：
   1. 计算 $y^{(k)}=Ax^{(k)}$；
   2. 归一化 $x^{(k+1)}=y^{(k)}/\|y^{(k)}\|$ 或按最大分量归一化；
   3. 计算 $\lambda^{(k+1)}=\dfrac{(x^{(k+1)})^TAx^{(k+1)}}{(x^{(k+1)})^Tx^{(k+1)}}$；
   4. 若 $\|Ax^{(k+1)}-\lambda^{(k+1)}x^{(k+1)}\|_2<\varepsilon$，停止。

伪代码：

```text
x = x0 / norm(x0)
for k = 1, 2, ..., N:
    y = A * x
    x = y / norm(y)
    lambda = (x^T A x) / (x^T x)
    if norm(A*x - lambda*x) < eps:
        stop
```

### 收敛速度

幂法的误差主要由第二大模特征值控制，收敛因子近似为：

$$
\left|\frac{\lambda_2}{\lambda_1}\right|.
$$

- 若 $|\lambda_2/\lambda_1|$ 很小，收敛快；
- 若 $|\lambda_2/\lambda_1|\approx 1$，收敛慢；
- 若模最大的特征值不唯一，普通幂法可能不收敛到单一方向。

### 例：幂法求按模最大特征值

课本例题：用幂法求

$$
A=
\begin{pmatrix}
2&1&0\\
0&-2&1\\
0&-1&2
\end{pmatrix}
$$

的按模最大特征值及对应特征向量，取

$$
x^{(0)}=(0,0,1)^T,
$$

要求误差不超过 $10^{-3}$。

迭代结果收敛到：

$$
\lambda_1\approx 2.99967\approx 3.
$$

对应特征向量方向约为：

$$
x\approx (1,-1,1)^T.
$$

这个例子体现了幂法的基本效果：不断乘 $A$ 后，向量方向逐渐被最大模特征值对应的方向支配。

---

## 幂法的加速

幂法简单，但当

$$
\left|\frac{\lambda_2}{\lambda_1}\right|\approx 1
$$

时收敛很慢。课本给了两种加速思想：

1. 原点位移法；
2. Aitken 加速。

### 原点位移法

构造新矩阵：

$$
B=A-\lambda_0 I.
$$

若 $Au_i=\lambda_i u_i$，则：

$$
Bu_i=(A-\lambda_0I)u_i=(\lambda_i-\lambda_0)u_i.
$$

所以：

- $B$ 与 $A$ 有相同的特征向量；
- $B$ 的特征值为 $\mu_i=\lambda_i-\lambda_0$；
- 对 $B$ 用幂法求出 $\mu_1$ 后，有 $\lambda_1=\mu_1+\lambda_0$。

若 $\lambda_0$ 选得合适，可以减小收敛因子：

$$
\left|\frac{\lambda_2-\lambda_0}{\lambda_1-\lambda_0}\right|.
$$

课本给出一种典型选择：当

$$
\lambda_1>\lambda_2\geq \cdots \geq \lambda_n>0
$$

时，可以取

$$
\lambda_0=\frac{1}{2}(\lambda_2+\lambda_n).
$$

这会把非主特征值整体向原点附近压缩，使主特征值的相对优势变大。

:::EXAMPLE
课本例题：取 $\lambda_0=2.9$，用原点位移法求矩阵

$$
A=
\begin{pmatrix}
4&14&0\\
-5&13&0\\
-1&0&2.8
\end{pmatrix}
$$

的按模最大特征值。

于是

$$
A-\lambda_0I=
\begin{pmatrix}
-6.9&14&0\\
-5&10.1&0\\
-1&0&-0.1
\end{pmatrix}.
$$

从 $x^{(0)}=(1,1,1)^T$ 出发，迭代后得到

$$
\mu_1\approx 3.0999984,
$$

所以

$$
\lambda_1\approx \mu_1+2.9=5.9999984\approx 6.
$$

直接用幂法时收敛因子约为 $\lambda_2/\lambda_1=1/2$；位移后约为

$$
\left|\frac{0.1}{3.1}\right|=\frac{1}{31},
$$

收敛明显加快。
:::

### Aitken 加速

Aitken 加速用于加快线性收敛的数列。

若数列 $\{a_k\}$ 收敛到 $a$，且近似满足线性收敛：

$$
\lim_{k\to\infty}\frac{a_{k+1}-a}{a_k-a}=c\neq 0,
$$

则当 $k$ 充分大时，有

$$
\frac{a_{k+2}-a}{a_{k+1}-a}\approx
\frac{a_{k+1}-a}{a_k-a}.
$$

由此解出更好的近似值：

$$
\hat a_k
=\frac{a_{k+2}a_k-a_{k+1}^2}{a_{k+2}-2a_{k+1}+a_k}
=a_k-\frac{(a_{k+1}-a_k)^2}{a_{k+2}-2a_{k+1}+a_k}.
$$

把这一公式用于幂法产生的特征值近似序列 $\{\alpha_k\}$，就得到 Aitken 加速的幂法。

:::TIP
实际使用时通常先做若干步普通幂法，再对连续三项使用 Aitken 公式。这样更稳妥。
:::

:::EXAMPLE
对矩阵

$$
A=
\begin{pmatrix}
2&-1&0\\
0&2&-1\\
0&-1&2
\end{pmatrix},
\qquad x^{(0)}=(0,0,1)^T,
$$

使用 Aitken 加速。课本计算中，特征值近似很快变为：

$$
3.25,\quad 3.024999,\quad 3.002472,\quad 3.000442,\dots
$$

最后得到

$$
\lambda_1\approx 3.
$$

与普通幂法相比，Aitken 后处理明显减少迭代次数。
:::

---

## 反幂法

### 反幂法的思想

若

$$
Au_i=\lambda_i u_i,
$$

且 $A$ 非奇异，则

$$
A^{-1}u_i=\frac{1}{\lambda_i}u_i.
$$

也就是说：

- $A^{-1}$ 与 $A$ 有相同的特征向量；
- $A^{-1}$ 的特征值是 $A$ 的特征值倒数。

所以对 $A^{-1}$ 用幂法，就能求出 $A$ 的 **按模最小** 特征值。

关键计算是：

$$
x^{(k+1)}=A^{-1}x^{(k)}.
$$

实际计算时不显式求 $A^{-1}$，而是每步解线性方程组：

$$
Ax^{(k+1)}=x^{(k)}.
$$

如果 $A$ 不变，可以先做一次 LU 分解：

$$
A=LU,
$$

每次迭代只解两个三角方程。

:::WARNING
反幂法每一步都要解线性方程组，代价比幂法大。幂法每步主要是矩阵向量乘法；反幂法每步是一次线性方程组求解。
:::

### 带原点位移的反幂法

反幂法更重要的用法是精修某个已知近似特征值附近的特征值。

若大致知道 $\lambda^*$ 附近有一个特征值，构造

$$
B=A-\lambda^*I.
$$

若 $\lambda_i$ 是 $A$ 的特征值，则 $B$ 的对应特征值为

$$
\lambda_i-\lambda^*.
$$

离 $\lambda^*$ 最近的特征值会让 $|\lambda_i-\lambda^*|$ 最小，因此对 $B$ 用反幂法，会迅速找到该特征值。

计算得到 $B$ 的最小模特征值 $\mu$ 后，有：

$$
\lambda_i=\lambda^*+\mu.
$$

从逆矩阵角度看，

$$
(A-\lambda^*I)^{-1}
$$

会把离 $\lambda^*$ 最近的特征方向放大得最快。

### 例：反幂法精修指定附近特征值

课本例题：用反幂法求

$$
A=
\begin{pmatrix}
2&-1&0\\
0&2&-1\\
0&-1&2
\end{pmatrix}
$$

接近 $2.93$ 的特征值和对应特征向量，取

$$
x^{(0)}=(0,0,1)^T.
$$

对

$$
A-2.93I
$$

做 LU 分解，然后反复解线性方程组。迭代 3 次后得到

$$
\lambda\approx 3.0000954,
$$

对应特征向量可取

$$
u\approx (1,-0.9992431,0.9991478)^T.
$$

精确特征向量方向为

$$
(1,-1,1)^T.
$$

---

## 正交相似变换

本章后半部分都依赖正交相似变换。

若 $Q$ 是正交矩阵，即

$$
Q^TQ=QQ^T=I,
$$

则

$$
B=Q^TAQ
$$

与 $A$ 相似，因此 $A$ 和 $B$ 有相同的特征值。

正交矩阵的几个重要性质：

1. $Q^{-1}=Q^T$；
2. $\|Qx\|_2=\|x\|_2$；
3. $(Qx,Qy)=(x,y)$；
4. 若 $Q$ 的列向量为 $q_1,\dots,q_n$，则这些列向量两两正交且单位化。

课堂上反复强调：正交变换的几何意义很清楚。

- Givens 变换：旋转；
- Householder 变换：镜像反射。

:::TIP
配图占位：插入 lesson6 手写 PPT 第 179-185 页中“正交相似变换保持特征值”的示意图。
:::

---

## Jacobi 方法

### Jacobi 方法的基本思想

Jacobi 方法用于求 **实对称矩阵** 的全部特征值和特征向量。

依据是：任意实对称矩阵 $A$ 都可由正交矩阵对角化：

$$
Q^TAQ=\operatorname{diag}(\lambda_1,\lambda_2,\dots,\lambda_n).
$$

Jacobi 方法的思路：

> 每次选一个最大的非对角元，通过一次平面旋转把它消成 0；反复做下去，非对角元整体趋近于 0，矩阵趋近对角矩阵。

定义非对角元平方和：

$$
E(A)=\sum_{i\neq j}a_{ij}^2.
$$

Jacobi 方法每次旋转会使 $E(A)$ 下降。最后非对角元趋近于零，对角元就是特征值。

### Givens 旋转矩阵

对第 $i,j$ 个坐标平面做旋转，构造矩阵 $V_{ij}(\varphi)$。它等于单位矩阵，只在 $i,j$ 行列构成的 $2\times2$ 小块上不同：

$$
\begin{pmatrix}
\cos\varphi & \sin\varphi\\
-\sin\varphi & \cos\varphi
\end{pmatrix}.
$$

它是正交矩阵：

$$
V_{ij}(\varphi)^TV_{ij}(\varphi)=I.
$$

几何上，它是在 $(i,j)$ 平面内旋转一个角度 $\varphi$。

:::TIP
配图占位：插入 lesson6 手写 PPT 第 109-119 页中 Givens 旋转矩阵的几何图。
:::

### 怎样选旋转角

考虑 $2\times2$ 对称子块：

$$
\begin{pmatrix}
a_{ii} & a_{ij}\\
a_{ij} & a_{jj}
\end{pmatrix}.
$$

目标是通过旋转使非对角元变为 0。

由计算可得，应取 $\varphi$ 满足：

$$
\tan 2\varphi=\frac{2a_{ij}}{a_{ii}-a_{jj}},\qquad |\varphi|<\frac{\pi}{4}.
$$

为了计算稳定，课本把它写成：

$$
a=\cot 2\varphi=\frac{a_{ii}-a_{jj}}{2a_{ij}},
$$

$$
b=\tan\varphi=\operatorname{sign}(a)\left(\sqrt{a^2+1}-|a|\right),
$$

$$
c=\cos\varphi=\frac{1}{\sqrt{1+b^2}},\qquad
s=\sin\varphi=bc.
$$

:::WARNING
老师上课特别提醒：课本对应位置有一个印刷错误。计算旋转矩阵时，分子应是

$$
a_{ii}^{(k)}-a_{jj}^{(k)},
$$

不能写成 $a_{ii}^{(k)}-a_{ij}^{(k)}$。
:::

### Jacobi 算法

给定实对称矩阵 $A$：

1. 令 $A^{(0)}=A$，$Q=I$。
2. 在所有非对角元中，选绝对值最大的 $a_{ij}^{(k)}$：

$$
|a_{ij}^{(k)}|=\max_{p\neq q}|a_{pq}^{(k)}|.
$$

3. 根据 $a_{ii}^{(k)},a_{ij}^{(k)},a_{jj}^{(k)}$ 计算旋转矩阵 $V^{(k)}$。
4. 更新

$$
A^{(k+1)}=V^{(k)}A^{(k)}(V^{(k)})^T.
$$

5. 累乘特征向量矩阵

$$
Q\leftarrow Q(V^{(k)})^T.
$$

6. 若

$$
E(A^{(k+1)})<\varepsilon,
$$

则停止。此时 $A^{(k+1)}$ 的对角元为特征值，$Q$ 的列向量为对应特征向量。

课堂 demo 中，老师用类似下面的方式构造随机对称正定矩阵，观察 Jacobi 每一步怎么选最大非对角元：

```matlab
A = rand(5);
A = A * A' + 0.1 * eye(5);
eig(A)
```

这里 $A A^T$ 保证对称半正定，在对角线上加一小项通常可使矩阵正定。若要更稳妥，可加更大的正数。

### 收敛性与特点

课本定理给出：

$$
E(A^{(k+1)})\leq
\left(1-\frac{2}{n(n-1)}\right)E(A^{(k)}).
$$

因此

$$
\lim_{k\to\infty}E(A^{(k)})=0.
$$

特点：

- 收敛可靠；
- 对舍入误差比较稳定；
- 得到的特征向量正交性好；
- 计算量较大；
- 不保持矩阵稀疏结构。

所以 Jacobi 方法适合中小规模、稠密、实对称矩阵的全部特征值和特征向量计算。

### 例：Jacobi 方法求对称三对角矩阵特征值

课本例题：

$$
A=
\begin{pmatrix}
2&-1&0\\
-1&2&-1\\
0&-1&2
\end{pmatrix}.
$$

第一次取 $i=1,j=2$，由于 $\cot2\varphi=0$，可取

$$
\varphi=\frac{\pi}{4},\qquad
\cos\varphi=\sin\varphi=\frac{1}{\sqrt2}.
$$

继续旋转后，课本算到

$$
A^{(5)}\approx
\begin{pmatrix}
0.58579&0.0020383&0\\
0.0020383&3.41401&0.016758\\
0&0.016758&2.00020
\end{pmatrix}.
$$

于是特征值近似为：

$$
\lambda_1\approx 3.41401,
\qquad
\lambda_2\approx 2.00020,
\qquad
\lambda_3\approx 0.58579.
$$

精确值为：

$$
\lambda_1=2+\sqrt2,
\qquad
\lambda_2=2,
\qquad
\lambda_3=2-\sqrt2.
$$

---

## QR 方法

### 基本 QR 迭代

QR 方法用于求矩阵的全部特征值，是实际计算中非常重要的一类方法。

给定

$$
A^{(1)}=A.
$$

每一步做 QR 分解：

$$
A^{(k)}=Q_kR_k,
$$

其中 $Q_k$ 是正交矩阵，$R_k$ 是上三角矩阵。然后反过来相乘：

$$
A^{(k+1)}=R_kQ_k.
$$

由于

$$
R_k=Q_k^TA^{(k)},
$$

所以

$$
A^{(k+1)}=R_kQ_k=Q_k^TA^{(k)}Q_k.
$$

这说明 $A^{(k+1)}$ 与 $A^{(k)}$ 正交相似，因此所有 $A^{(k)}$ 都有相同的特征值。

在一定条件下，$A^{(k)}$ 会趋近上三角矩阵；若 $A$ 是实对称矩阵，则会趋近对角矩阵。最终对角元就是特征值近似。

:::TIP
配图占位：插入 lesson6 手写 PPT 第 203-215 页中“$A^{(k)}=Q_kR_k$，$A^{(k+1)}=R_kQ_k=Q_k^TA^{(k)}Q_k$”的推导截图。
:::

### 用 Schmidt 正交化做 QR 分解

设

$$
A=[a_1,a_2,\dots,a_n].
$$

Schmidt 正交化给出：

$$
q_1=\frac{a_1}{\|a_1\|_2},
$$

$$
\tilde q_k=a_k-\sum_{i=1}^{k-1}(a_k,q_i)q_i,
\qquad
q_k=\frac{\tilde q_k}{\|\tilde q_k\|_2}.
$$

令

$$
Q=[q_1,q_2,\dots,q_n],
$$

则 $Q$ 是正交矩阵，并有

$$
A=QR.
$$

其中 $R$ 为上三角矩阵。

:::EXAMPLE
对

$$
A=
\begin{pmatrix}
2&-1&0\\
-1&2&-1\\
0&-1&2
\end{pmatrix}
$$

做 Schmidt 正交化 QR 分解，可得

$$
Q=
\begin{pmatrix}
\frac{2}{\sqrt5}&\frac{3}{\sqrt{70}}&\frac{1}{\sqrt{14}}\\
-\frac{1}{\sqrt5}&\frac{6}{\sqrt{70}}&\frac{2}{\sqrt{14}}\\
0&-\frac{5}{\sqrt{70}}&\frac{3}{\sqrt{14}}
\end{pmatrix}.
$$

对应 $R$ 为上三角矩阵，因此 $A=QR$。
:::

课堂上提到，Schmidt 正交化思路直观，但数值稳定性和效率并不理想。实际 QR 算法常使用 Householder 或 Givens 变换。

### Householder 变换

Householder 变换是一个反射变换。

设 $w\in\mathbb{R}^n$，且

$$
\|w\|_2=1.
$$

定义

$$
H=I-2ww^T.
$$

则 $H$ 称为 Householder 矩阵。

它有以下性质：

1. $H^T=H$；
2. $H^TH=I$，所以 $H$ 是正交矩阵；
3. $H^{-1}=H$；
4. $\det(H)=-1$；
5. 几何意义是关于超平面 $w^\perp$ 的镜像反射。

课堂上老师用“照镜子”解释：一个向量照一次镜子变到另一侧，再照一次回到原向量。因此 Householder 变换既是正交变换，又满足 $H^2=I$。

:::TIP
配图占位：插入 lesson6 手写 PPT 第 223-233 页或 lesson7 手写 PPT 第 97-108 页中 Householder 反射示意图。
:::

Householder 变换的核心作用：把一个向量变成某个坐标轴方向。

给定非零向量 $x$，希望构造 $H$ 使

$$
Hx=\alpha e_1.
$$

常用稳定取法是：

$$
w=\frac{x+\operatorname{sign}(x_1)\|x\|_2e_1}
{\left\|x+\operatorname{sign}(x_1)\|x\|_2e_1\right\|_2}.
$$

于是

$$
Hx=-\operatorname{sign}(x_1)\|x\|_2e_1.
$$

这就能一次性把 $x$ 的后面多个分量消成 0。

### 化一般矩阵为 Hessenberg 矩阵

QR 方法如果每一步都直接对完整矩阵做 QR 分解，代价较高。常见优化是先把 $A$ 正交相似化为上 Hessenberg 矩阵。

上 Hessenberg 矩阵形如：

$$
H=
\begin{pmatrix}
* & * & * & \cdots & *\\
* & * & * & \cdots & *\\
0 & * & * & \cdots & *\\
\vdots & \ddots & \ddots & \ddots & \vdots\\
0&\cdots&0&*&*
\end{pmatrix}.
$$

也就是主对角线下一条副对角线以下全为 0。

通过 $n-2$ 个 Householder 相似变换，可构造：

$$
H=H_{n-2}\cdots H_2H_1AH_1H_2\cdots H_{n-2}.
$$

若 $A$ 是实对称矩阵，则 Hessenberg 矩阵进一步退化为三对角矩阵。

:::EXAMPLE
课本例题：用 Householder 变换将

$$
A=
\begin{pmatrix}
5&-2&2\sqrt2&-3\sqrt2\\
1&0&5\sqrt2/2&-\sqrt2/2\\
0&-\sqrt2&1&0\\
0&\sqrt2&-4&-1
\end{pmatrix}
$$

化为拟上三角矩阵，得到

$$
H=
\begin{pmatrix}
5&-2&-5&-1\\
1&0&-3&2\\
0&2&2&-3\\
0&0&1&-2
\end{pmatrix}.
$$
:::

### 拟上三角矩阵的 Givens QR 分解

对 Hessenberg 矩阵做 QR 分解时，只需依次消去副对角线元素。

若要消去 $h_{k+1,k}$，取 Givens 旋转，使

$$
\begin{pmatrix}
\cos\varphi_k & \sin\varphi_k\\
-\sin\varphi_k & \cos\varphi_k
\end{pmatrix}
\begin{pmatrix}
h_{kk}\\
h_{k+1,k}
\end{pmatrix}
=
\begin{pmatrix}
r_k\\
0
\end{pmatrix}.
$$

其中

$$
r_k=\sqrt{h_{kk}^2+h_{k+1,k}^2},
$$

$$
\cos\varphi_k=\frac{h_{kk}}{r_k},
\qquad
\sin\varphi_k=\frac{h_{k+1,k}}{r_k}.
$$

最多 $n-1$ 次旋转后，可得到

$$
H=QR.
$$

由于 Hessenberg 矩阵零元很多，这一步的计算量远小于对一般满矩阵直接做 QR 分解。

### 带原点位移的 QR 方法

普通 QR 方法可能只线性收敛。为了加速，引入位移 $\mu_k$：

$$
H^{(k)}-\mu_kI=Q_kR_k,
$$

然后更新

$$
H^{(k+1)}=R_kQ_k+\mu_kI.
$$

若 $\mu_k$ 选得接近某个特征值，收敛会明显加快。直观上，这与幂法中的原点位移相同：通过移动原点改变特征值之间的相对距离。

若

$$
|\lambda_1|\geq |\lambda_2|\geq\cdots\geq |\lambda_{n-1}|>|\lambda_n|,
$$

则 QR 迭代中右下角元素会先接近 $\lambda_n$。选取合适位移后，收敛因子可由类似

$$
\left|\frac{\lambda_n}{\lambda_{n-1}}\right|
$$

改善为

$$
\left|\frac{\lambda_n-\mu}{\lambda_{n-1}-\mu}\right|.
$$

若 $\mu$ 接近 $\lambda_n$，后者可以很小。

### 例：QR 方法求全部特征值

课本例题：求

$$
A=
\begin{pmatrix}
5&-3&2\\
6&-4&4\\
4&-4&5
\end{pmatrix}
$$

的全部特征值。

先用 Householder 变换把 $A$ 化为 Hessenberg 矩阵，再对该矩阵做 QR 迭代。课本结果为：

$$
\lambda_1\approx 2.992032,
\qquad
\lambda_2\approx 2.004695,
\qquad
\lambda_3\approx 0.999895.
$$

准确值为：

$$
\lambda_1=3,
\qquad
\lambda_2=2,
\qquad
\lambda_3=1.
$$

这个例子说明：QR 方法通过相似变换逐步把矩阵逼近上三角形，最后从对角元读出特征值。

---

## 应用实例

课本最后用化学吸收过程说明：特征值可以描述系统稳定性和衰减速度。

若动态系统可写成

$$
\frac{dx}{dt}=\frac{1}{\tau}Ax+\text{输入项},
$$

则解可分解成若干自然模态：

$$
x(t)=\sum_{k=1}^{n}c_k e^{\lambda_k t}u^k+x^s.
$$

其中：

- $x^s$ 是稳定解；
- $u^k$ 是特征向量；
- $\lambda_k$ 控制对应模态的增长或衰减。

若

$$
\lambda_k=a_k+ib_k,
$$

为了使瞬态部分趋于零，需要所有实部满足：

$$
a_k<0.
$$

若希望某一模态衰减到初始值的 $p\%$，衰变时间可估计为：

$$
T_k=\frac{\ln(0.01p)}{a_k}.
$$

整个系统达到稳定的速度由最大的衰变时间决定。

:::NOTE
这一节说明特征值的意义：它们不仅是代数对象，也描述工程系统中不同模态的增长、振荡和衰减。
:::

---

## 方法对比

| 方法 | 主要用途 | 适用对象 | 核心计算 | 优点 | 局限 |
|---|---|---|---|---|---|
| 幂法 | 求按模最大特征值 | 一般矩阵 | 反复 $Ax$ | 简单，适合大规模稀疏矩阵估计主特征值 | 只求一个；当 $|\lambda_2/\lambda_1|\approx1$ 时慢 |
| 原点位移幂法 | 加速幂法 | 已知特征值大致分布 | 对 $A-\lambda_0I$ 用幂法 | 可明显改善收敛因子 | 需要合适位移 |
| Aitken 加速 | 加速线性收敛序列 | 幂法产生的标量序列 | 三项外推 | 实现简单 | 序列不稳定时效果差 |
| 反幂法 | 求最小模特征值或精修附近特征值 | 非奇异矩阵 | 解线性方程组 | 带位移后可快速求指定附近特征值 | 每步代价较高 |
| Jacobi 方法 | 求实对称矩阵全部特征值与特征向量 | 实对称矩阵 | 平面旋转消非对角元 | 稳定，特征向量正交性好 | 计算量大，不保稀疏 |
| QR 方法 | 求全部特征值 | 一般矩阵，尤其适合中小型矩阵 | QR 分解 + 相似迭代 | 通用且有效，是实际库函数的重要基础 | 需 Hessenberg 化、位移等技巧提升效率 |
| Householder 变换 | QR 分解与 Hessenberg 化 | 一般矩阵 | 镜像反射消元 | 稳定，可一次消多个分量 | 公式较复杂 |
| Givens 变换 | 稀疏消元、Hessenberg 的 QR | 稀疏或 Hessenberg 矩阵 | 平面旋转消一个元素 | 保持结构，局部操作 | 对满矩阵逐元素消元较慢 |

最后可以这样记：

- 只要最大特征值：优先考虑 **幂法**；
- 已知某个特征值附近有根：用 **带位移的反幂法**；
- 实对称小规模全特征值：**Jacobi 方法** 很稳；
- 通用全特征值：核心方法是 **QR 方法**；
- QR 的实际高效实现依赖 **Householder Hessenberg 化 + Givens/位移 QR**。
