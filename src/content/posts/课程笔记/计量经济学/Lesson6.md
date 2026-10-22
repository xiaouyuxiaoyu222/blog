---
title:  Econometrics-Lesson6：多元线性回归模型（一）：矩阵基础、基本假设与参数估计
published: 2026-10-20
description: "计量经济学第六次课：一元回归复习、矩阵运算及向量微分、第三章多元线性回归模型、OLS推导、离差形式与Stata案例。"
tags: [计量经济学]
category: 课程笔记
draft: false
---

## 本次课程提醒（考核与安排）

- **课堂签到**：教师在开课前要求签到（录音约 00:02:52）。转写疑似出现签到码“7692”，自动识别不够可靠，且具有时效性，仅保留签到提醒。
- **考试复习重点**：教师明确强调**偏回归系数的经济含义**是常见考试问题（约 01:13:51）；**多元线性回归模型的基本假设**是历年 A、B 卷均重视的内容（约 01:22:46）。矩阵二次型和向量求导是本次课堂反复提醒应掌握的数学基础。
- **本次未听到新布置的课后作业、测验、慕课任务或具体考试时间安排**。课堂结尾表示多元回归的参数估计先讲到这里，后续再展开其他内容。

## 概述

本节的核心问题是：

> 从只有一个解释变量的一元回归，推广到拥有 $k$ 个解释变量的多元回归，如何用**矩阵**统一表示所有样本方程，并利用**残差平方和最小**推出参数的普通最小二乘估计？

整个知识链条：

**一元线性回归回顾 → 矩阵基础 → 向量与二次型求导 → 多元模型 $Y=X\beta+\mu$ → 经典假设 → OLS $\hat\beta=(X'X)^{-1}X'Y$ → 正规方程与离差形式 → 误差方差估计 → Stata 实例。**

这节课最重要的三个表达式：

$$
\boxed{Y=X\beta+\mu}
$$

$$
\boxed{\hat\beta=(X'X)^{-1}X'Y}
$$

$$
\boxed{\hat\sigma^2=\frac{e'e}{n-k-1}}
$$

其中，$n$ 为样本容量，$k$ 为**不含常数项**的解释变量个数，故参数总数是 $k+1$。

---

## 目录

- [一、一元线性回归复习](#一一元线性回归复习)
- [二、矩阵运算基础](#二矩阵运算基础)
- [三、二次型、正定矩阵与向量微分](#三二次型正定矩阵与向量微分)
- [四、随机向量的均值与协方差矩阵](#四随机向量的均值与协方差矩阵)
- [五、教材 §3.1：多元线性回归模型](#五教材-31多元线性回归模型)
- [六、教材 §3.1：多元模型的基本假设](#六教材-31多元模型的基本假设)
- [七、教材 §3.2：普通最小二乘估计](#七教材-32普通最小二乘估计)
- [八、正规方程、残差正交与离差形式](#八正规方程残差正交与离差形式)
- [九、随机误差项方差的无偏估计](#九随机误差项方差的无偏估计)
- [十、2023 年城镇居民消费回归：Stata 实例](#十2023-年城镇居民消费回归stata-实例)
- [十一、课件与教材的衔接及易错点](#十一课件与教材的衔接及易错点)

---

## 一、一元线性回归复习

课堂前约 30 分钟集中复习上节课的内容。老师强调：**一元与多元回归的基本研究任务都是“估计”和“检验”**。

### 1. 总体回归、样本回归与两层估计任务

总体回归模型：

$$
Y_i=\beta_0+\beta_1X_i+\mu_i
$$

样本回归模型：

$$
Y_i=\hat\beta_0+\hat\beta_1X_i+e_i,\qquad
\hat Y_i=\hat\beta_0+\hat\beta_1X_i
$$

其中：

- $\beta_0,\beta_1$：未知的**总体参数**，在模型中视为固定常数。
- $\hat\beta_0,\hat\beta_1$：由样本计算的估计量；更换样本，估计值通常随之变化。
- $\mu_i$：总体随机干扰项；$e_i=Y_i-\hat Y_i$ 为样本残差。

估计有两个层次：

1. **拟合问题**：给定样本，怎样找出与观测点尽量接近的回归线？
2. **推断问题**：找到的样本回归线，能否可靠地反映总体回归参数？

第一层由估计方法解决；第二层取决于模型假设与估计量的统计性质。

### 2. 普通最小二乘法（OLS）

选择使残差平方和最小的参数：

$$
\min_{\hat\beta_0,\hat\beta_1}
Q=\sum_{i=1}^{n}(Y_i-\hat\beta_0-\hat\beta_1X_i)^2
$$

对两个待估参数分别求偏导并令其为零，得到正规方程：

$$
\sum_i e_i=0,\qquad
\sum_i X_ie_i=0
$$

解得：

$$
\boxed{\hat\beta_1=
\frac{\sum_i(X_i-\bar X)(Y_i-\bar Y)}
{\sum_i(X_i-\bar X)^2}},\qquad
\boxed{\hat\beta_0=\bar Y-\hat\beta_1\bar X}
$$

因此样本回归线经过 $(\bar X,\bar Y)$，残差总和为零，且残差与解释变量的样本内积为零。

随机误差方差的 OLS 无偏估计为：

$$
\hat\sigma^2=\frac{\sum_i e_i^2}{n-2}
$$

**为什么是 $n-2$？** 已经用同一组样本估计了截距与斜率两个参数，残差自由度剩下 $n-2$。

### 3. 与极大似然估计（ML）的联系

课堂回顾了另一条思路：选择让已观测数据的**联合概率密度**达到最大的参数，即极大化似然函数（或对数似然函数）。

若误差独立同分布且正态：

$$
\hat\beta_{\mathrm{ML}}=\hat\beta_{\mathrm{OLS}},
\qquad
\hat\sigma^2_{\mathrm{ML}}=\frac{\sum_i e_i^2}{n}
$$

对回归系数，两种方法得到同样的估计；对误差方差，ML 使用 $n$ 作分母，而无偏修正使用 $n-2$。

:::WARNING
老师在回顾中有一句“无偏估计量只有一个”的口语化说法，**从统计学上不成立**：同一参数可以有多个无偏估计量。这里应记住的准确结论是：上述正态回归中，$\mathrm{RSS}/n$ 一般有向下偏差，$\mathrm{RSS}/(n-2)$ 是误差方差的常用无偏估计量。
:::

### 4. 高斯—马尔可夫性质与正态性

在适当的线性回归假设下，OLS 是 **BLUE（Best Linear Unbiased Estimator，最佳线性无偏估计量）**：

- **线性**：$\hat\beta_j$ 能写成 $Y_i$ 的线性组合。
- **无偏**：$E(\hat\beta_j\mid X)=\beta_j$。
- **最佳**：在线性无偏估计量类别内，OLS 具有最小方差（更一般地，具有最小协方差矩阵）。

**正态性并非高斯—马尔可夫定理成立的必要条件。** 如果再假设误差联合正态，则系数估计量具有正态分布，便于构造有限样本的 $t$、$F$ 推断；正态分布也让标准正态似然函数易于写出。

### 5. 一元回归的三个检验

**（1）拟合优度检验：$R^2$**

$$
\mathrm{TSS}=\sum_i(Y_i-\bar Y)^2,\quad
\mathrm{ESS}=\sum_i(\hat Y_i-\bar Y)^2,\quad
\mathrm{RSS}=\sum_i e_i^2
$$

含截距项的 OLS 满足 $\mathrm{TSS}=\mathrm{ESS}+\mathrm{RSS}$，故：

$$
R^2=\frac{\mathrm{ESS}}{\mathrm{TSS}}
=1-\frac{\mathrm{RSS}}{\mathrm{TSS}}
$$

含义：样本 $Y$ 的总离差中，有多大比例由样本回归模型拟合的部分解释。

**（2）变量显著性检验：$t$ 检验**

检验 $H_0:\beta_1=0$ 对 $H_1:\beta_1\ne0$：

$$
t=\frac{\hat\beta_1-0}{\operatorname{se}(\hat\beta_1)}
\sim t(n-2)\quad(H_0\text{ 成立、正态假设下})
$$

老师将此讲为“检验解释变量是否影响被解释变量”。**统计显著性直接检验的是条件回归系数是否为零；作因果解释还需要外生性、模型设定和研究设计等额外依据。**

**（3）参数置信区间**

$$
\hat\beta_j\pm t_{1-\alpha/2,n-2}\operatorname{se}(\hat\beta_j)
$$

例如 95% 置信区间的含义是：在重复抽样的意义下，这种构造方法的长期覆盖率为 95%。从已观测样本算出的具体区间，其端点已经固定。

**预测问题**（上节课回顾）：总体条件均值与个别未来观测值都可以预测；**个别值的预测区间通常更宽**，因为还包含未来新的随机扰动。

老师提醒要将**经济学含义—数学统计量—Stata 输出位置**对应起来；一元回归中的常用估计与检验结果，可由 `reg` 命令查看。

---

## 二、矩阵运算基础

多元回归从二维问题推广到多个解释变量，主要技术变化是**把 $n$ 个样本方程写成一个矩阵方程**。

### 1. 矩阵的基本概念

$m\times n$ 矩阵：

$$
A=(a_{ij})_{m\times n}=
\begin{pmatrix}
a_{11}&\cdots&a_{1n}\\
\vdots&\ddots&\vdots\\
a_{m1}&\cdots&a_{mn}
\end{pmatrix}
$$

- $m$ 为行数，$n$ 为列数；$a_{ij}$ 是第 $i$ 行第 $j$ 列的元素。
- 所有元素为零：**零矩阵** $O$；所有元素非负：非负矩阵。
- 行列数相等：**方阵**；主对角线为 1 且其他位置为零：**单位矩阵** $I$。
- $A=B$：维数相同且对应元素全部相等。
- $kA$：将 $A$ 中每个元素乘以 $k$。


### 2. 加法、乘法与转置

若 $A,B$ 维数相同，矩阵加法逐元素进行；矩阵乘法则要求**前一个矩阵的列数等于后一个矩阵的行数**。

若 $A_{m\times r}$ 和 $B_{r\times n}$：

$$
C=AB,\qquad
c_{ij}=\sum_{\ell=1}^{r}a_{i\ell}b_{\ell j}
$$

此时 $C$ 是 $m\times n$ 矩阵。

![课件：矩阵乘法由前矩阵的行与后矩阵的列计算](/images/econometrics/lesson6/slide_08.jpg)

需要记住：

- 加法满足交换律与结合律：$A+B=B+A$，$(A+B)+C=A+(B+C)$。
- 乘法满足结合律及分配律：$(AB)C=A(BC)$，$A(B+C)=AB+AC$。
- **矩阵乘法通常不满足交换律**，$AB$ 与 $BA$ 甚至未必都存在。
- 乘法单位元满足 $IA=AI=A$（两边单位矩阵维数需匹配）。

**转置（transpose）**：把行变成列、列变成行，用 $A'$ 或 $A^T$ 表示。

$$
(A')'=A,\quad (A+B)'=A'+B',\quad (cA)'=cA'
$$

最重要的性质：

$$
\boxed{(AB)'=B'A'}
$$

注意：**两个矩阵相乘后再转置，顺序必须反过来。**

![课件：转置矩阵的四条性质，特别是乘积转置逆序](/images/econometrics/lesson6/slide_10.jpg)

### 3. 逆矩阵

若 $A$ 是 $n\times n$ 方阵，存在 $B$ 使 $AB=BA=I$，则：

$$
B=A^{-1}
$$

**可逆的充要条件**为 $\det A\ne0$（等价于满秩 $\operatorname{rank}(A)=n$）。

$$
(AB)^{-1}=B^{-1}A^{-1},\quad
(A')^{-1}=(A^{-1})',\quad
(A^{-1})^{-1}=A
$$

特别注意乘积求逆的**逆序规则**，与乘积转置形式相同。

![课件：方阵可逆的充要条件与伴随矩阵求逆公式](/images/econometrics/lesson6/slide_12.jpg)

对 $2\times2$ 方阵：

$$
A=\begin{pmatrix}a&b\\c&d\end{pmatrix},
\qquad
A^{-1}=\frac{1}{ad-bc}
\begin{pmatrix}d&-b\\-c&a\end{pmatrix},
\quad ad-bc\ne0
$$

课堂强调：$2\times2$ 矩阵使用上述公式很方便；高阶矩阵实际计算常用**初等行变换、数值线性代数算法**。

### 4. 初等变换与秩

三类初等行（列）变换：

1. 两行（列）互换；
2. 某行（列）乘非零常数；
3. 某行（列）的常数倍加到另一行（列）上。

矩阵的**秩（rank）**是线性无关行或列的最大数目；对 $n\times(k+1)$ 的多元回归设计矩阵 $X$：

$$
\operatorname{rank}(X)=k+1
$$

意味着 **$X$ 列满秩**，即各解释变量列（含截距列）不存在完全线性依赖。这是后面求 $(X'X)^{-1}$ 的基础。

![课件：逆矩阵的重要性质，特别是乘积求逆逆序](/images/econometrics/lesson6/slide_14.jpg)

---

## 三、二次型、正定矩阵与向量微分

本段对应课堂约 00:44—01:09；教师特别强调**向量求导**是多元 OLS 推导的关键。

### 1. 二次型（quadratic form）

一个 $n$ 维列向量 $x$ 与 $n\times n$ 对称矩阵 $A$ 构成的二次型：

$$
\boxed{f(x)=x'Ax=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j}
$$

例如：

$$
A=\begin{pmatrix}2&3\\3&5\end{pmatrix},\qquad
x=\begin{pmatrix}x_1\\x_2\end{pmatrix}
$$

展开：

$$
x'Ax=2x_1^2+3x_1x_2+3x_2x_1+5x_2^2
=2x_1^2+6x_1x_2+5x_2^2
$$

**为什么交叉项会出现两次？** 对称矩阵中 $a_{12}=a_{21}$，乘积里同时包含 $a_{12}x_1x_2$ 和 $a_{21}x_2x_1$。

![课件：二次型写成矩阵乘积 x'Ax 的对应关系](/images/econometrics/lesson6/slide_20.jpg)

### 2. 矩阵合同与二次型标准形

对称方阵 $A,B$ 若存在**可逆矩阵** $C$，满足：

$$
B=C'AC
$$

称 $A,B$ **合同（congruent）**。

- 任意实对称矩阵都可经过适当合同变换化为对角矩阵（对角系数可能为正、负或零）。
- 对二次型施加非退化线性替换 $x=Cz$，得到 $x'Ax=z'(C'AC)z$。
- 合同变换保持二次型的正负惯性指数。该性质在今后处理广义最小二乘法时有用。

![课件：二次型标准形与合同变换](/images/econometrics/lesson6/slide_23.jpg)

### 3. 正定矩阵（positive definite）

若 $A$ 为实对称矩阵，且对于**任意非零向量** $x$：

$$
\boxed{x'Ax>0}
$$

则称 $A$ **正定**。相应的半正定条件是 $x'Ax\ge0$。

常见判别：

- $A$ 的全部特征值为正 $\Longleftrightarrow$ $A$ 正定。
- 对角矩阵 $\operatorname{diag}(d_1,\ldots,d_n)$ 正定 $\Longleftrightarrow$ 所有 $d_i>0$。
- 正定矩阵必可逆，且 $\det A>0$。
- 正定矩阵能够与单位矩阵合同。

![课件：正定二次型、正定矩阵的定义](/images/econometrics/lesson6/slide_24.jpg)

:::TIP
后续会用到：如果设计矩阵 $X$ 列满秩，则对任意非零 $v$，

$$
v'X'Xv=(Xv)'(Xv)=\|Xv\|^2>0
$$

所以 **$X'X$ 正定、可逆**。这恰好保证了 OLS 的解可以写成 $(X'X)^{-1}X'Y$。
:::

### 4. 向量求导的定义

令参数列向量：

$$
\beta=(\beta_0,\beta_1,\ldots,\beta_k)'
$$

标量函数 $f(\beta)$ 的梯度定义为列向量：

$$
\frac{\partial f}{\partial\beta}
=
\begin{pmatrix}
\partial f/\partial\beta_0\\
\partial f/\partial\beta_1\\
\vdots\\
\partial f/\partial\beta_k
\end{pmatrix}
$$

直观理解：**对一个包含 $k+1$ 个参数的向量求导，需要分别问函数对每个参数的变化率，因此结果也有 $k+1$ 个分量。**

### 5. 一次型（线性组合）求导

设 $a$ 是与 $\beta$ 同维的**常数列向量**：

$$
f(\beta)=a'\beta
=a_0\beta_0+a_1\beta_1+\cdots+a_k\beta_k
$$

于是：

$$
\frac{\partial f}{\partial\beta_j}=a_j
\quad\Rightarrow\quad
\boxed{\frac{\partial(a'\beta)}{\partial\beta}=a}
$$

由于 $\beta'a$ 与 $a'\beta$ 都是同一个标量：

$$
\boxed{\frac{\partial(\beta'a)}{\partial\beta}=a}
$$

老师提醒：行、列位置会影响**中间步骤的写法**；在这里按**列向量梯度约定**，最终都得到 $a$。

### 6. 二次型求导：重点推导

令：

$$
f(\beta)=\beta'A\beta,\qquad A=A'
$$

将二次型完全展开：

$$
f(\beta)=\sum_{i=0}^k\sum_{j=0}^k a_{ij}\beta_i\beta_j
$$

对第 $\ell$ 个参数求偏导时，凡是**下标 $i=\ell$ 或 $j=\ell$** 的项都会贡献导数：

$$
\frac{\partial f}{\partial\beta_\ell}
=\sum_j a_{\ell j}\beta_j+\sum_i a_{i\ell}\beta_i
$$

因为 $A$ 对称，$a_{i\ell}=a_{\ell i}$，故：

$$
\frac{\partial f}{\partial\beta_\ell}
=2\sum_j a_{\ell j}\beta_j
$$

把所有分量组合成列向量：

$$
\boxed{\frac{\partial(\beta'A\beta)}{\partial\beta}=2A\beta}
\qquad(A=A')
$$

如果 $A$ 不对称，一般公式是：

$$
\frac{\partial(\beta'A\beta)}{\partial\beta}=(A+A')\beta
$$

![课件：对称二次型 beta'A beta 求梯度得到 2A beta](/images/econometrics/lesson6/slide_29.jpg)

:::EXAMPLE
设 $A=\begin{pmatrix}2&1\\1&4\end{pmatrix}$，

$$
f=2\beta_1^2+2\beta_1\beta_2+4\beta_2^2
$$

分别求导：

$$
\frac{\partial f}{\partial\beta_1}=4\beta_1+2\beta_2,\qquad
\frac{\partial f}{\partial\beta_2}=2\beta_1+8\beta_2
$$

这正是 $2A\beta$。后面 OLS 残差平方和中会出现 $\beta'X'X\beta$，因此这条公式必须熟练掌握。
:::

---

## 四、随机向量的均值与协方差矩阵

### 1. 随机向量的期望

设 $\xi=(\xi_1,\ldots,\xi_n)'$，则：

$$
E(\xi)=
\begin{pmatrix}E(\xi_1)\\\vdots\\E(\xi_n)\end{pmatrix}
$$

随机向量的均值就是将每个元素分别求期望后组成的向量。

### 2. 方差—协方差矩阵

$$
\boxed{\operatorname{Var}(\xi)=E[(\xi-E\xi)(\xi-E\xi)']}
$$

其 $(i,j)$ 元素是：

$$
\operatorname{Cov}(\xi_i,\xi_j)
$$

对角线元素为各随机变量的方差，非对角线元素为不同变量之间的协方差。因此协方差矩阵必然对称、半正定。

![课件：随机向量的期望与方差协方差矩阵的定义](/images/econometrics/lesson6/slide_33.jpg)

### 3. 经典线性回归中的“球形扰动”

令总体误差向量：

$$
\mu=(\mu_1,\ldots,\mu_n)'
$$

若满足 $E(\mu\mid X)=0$，且在给定 $X$ 的条件下：

$$
\operatorname{Var}(\mu_i\mid X)=\sigma^2,\qquad
\operatorname{Cov}(\mu_i,\mu_j\mid X)=0\quad(i\ne j)
$$

则：

$$
\boxed{\operatorname{Var}(\mu\mid X)=\sigma^2 I_n}
$$

![课件：误差向量协方差矩阵等于 sigma² 乘单位矩阵](/images/econometrics/lesson6/slide_34.jpg)

这一条件又称**球形扰动（spherical disturbances）**：各维误差的方差相同、两两不相关。其协方差等值面的形状具有球对称性。

另外，对任意固定矩阵 $A$，若维数适配：

$$
E(A\xi)=AE(\xi),\qquad
\boxed{\operatorname{Var}(A\xi)=A\operatorname{Var}(\xi)A'}
$$

这条公式以后计算回归系数估计量的协方差矩阵时会直接用到。


---

## 五、教材 §3.1：多元线性回归模型

对应教材《计量经济学》（第五版）第三章 §3.1（教材正文第 55 页起；电子 PDF 约第 84—87 页），也是本次课堂进入的主干内容。

### 1. 为什么需要多元回归？

一元回归研究单一解释变量 $X$ 与结果 $Y$ 的线性关系；经济现象常同时受到多个因素影响。

例如，居民消费支出 $Y$ 可能同时受到工资性收入 $X_1$、其他收入 $X_2$ 影响：

$$
Y_i=\beta_0+\beta_1X_{i1}+\beta_2X_{i2}+\mu_i
$$

推广到 $k$ 个解释变量：

$$
\boxed{Y_i=\beta_0+\beta_1X_{i1}+\cdots+\beta_kX_{ik}+\mu_i}
\qquad i=1,\ldots,n
$$

- $i$：样本编号，$i=1,\ldots,n$。
- $j$：解释变量编号，$j=1,\ldots,k$。
- $X_{ij}$：第 $i$ 个样本的第 $j$ 个解释变量观测值。
- $\beta_0$：截距；$\beta_j$：第 $j$ 个回归系数；$\mu_i$：无法由已纳入变量解释的随机扰动。

**参数总数：** $k$ 个斜率系数，加一个截距，共 $k+1$ 个。为统一记法，常把截距看成一个始终取值为 1 的虚设解释变量 $X_{i0}=1$。

### 2. 总体回归函数：偏回归系数的经济含义

假设随机扰动的条件均值为零：

$$
E(\mu_i\mid X_{i1},\ldots,X_{ik})=0
$$

可得总体条件均值函数：

$$
\boxed{
E(Y_i\mid X_{i1},\ldots,X_{ik})
=\beta_0+\beta_1X_{i1}+\cdots+\beta_kX_{ik}
}
$$

对第 $j$ 个解释变量取偏导：

$$
\frac{\partial E(Y_i\mid X_{i1},\ldots,X_{ik})}{\partial X_{ij}}
=\beta_j
$$

因此，**偏回归系数（partial regression coefficient）** $\beta_j$ 的含义是：

> **在其他解释变量保持不变的条件下，$X_j$ 增加 1 个单位时，$Y$ 的条件均值平均变化 $\beta_j$ 个单位。**

- $\beta_j>0$：条件平均响应为正。
- $\beta_j<0$：条件平均响应为负。
- $\beta_j=0$：在线性条件均值函数中，该变量的边际线性效应为零。

:::WARNING
**考试容易丢的两个限定词：**“其他解释变量保持不变”和“$Y$ 的**条件均值/平均水平**”。老师在 01:12—01:14 反复强调，不能将系数解释为所有个体的 $Y$ 都发生同样变化。
:::

### 3. 矩阵形式：从 $n$ 个方程变成一个方程

令：

$$
Y=
\begin{pmatrix}Y_1\\Y_2\\\vdots\\Y_n\end{pmatrix}_{n\times1},
\quad
X=
\begin{pmatrix}
1&X_{11}&X_{12}&\cdots&X_{1k}\\
1&X_{21}&X_{22}&\cdots&X_{2k}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&X_{n1}&X_{n2}&\cdots&X_{nk}
\end{pmatrix}_{n\times(k+1)}
$$

$$
\beta=
\begin{pmatrix}\beta_0\\\beta_1\\\vdots\\\beta_k\end{pmatrix}_{(k+1)\times1},
\qquad
\mu=
\begin{pmatrix}\mu_1\\\mu_2\\\vdots\\\mu_n\end{pmatrix}_{n\times1}
$$

于是 $n$ 个样本方程合并为：

$$
\boxed{Y=X\beta+\mu}
$$

![课件：多元回归模型 Y=Xβ+μ 的逐行与矩阵对应关系](/images/econometrics/lesson6/slide_41.jpg)

**检查维度：**

$$
\underbrace{Y}_{n\times1}
=
\underbrace{X}_{n\times(k+1)}
\underbrace{\beta}_{(k+1)\times1}
+
\underbrace{\mu}_{n\times1}
$$

每一行代表一个观测样本；$X$ 的第一列全部是 1，用来对应截距 $\beta_0$。

:::TIP
老师反复要求：一看到大写 $X$，立即想到 **$n\times(k+1)$ 的设计矩阵**，不能将它当作一个标量。以后看到 $X'X$ 也要立刻想到它是 $(k+1)\times(k+1)$ 方阵。
:::

### 4. 样本回归函数与残差

估计参数后：

$$
\hat Y_i=\hat\beta_0+\hat\beta_1X_{i1}+\cdots+\hat\beta_kX_{ik}
$$

残差：

$$
e_i=Y_i-\hat Y_i
$$

矩阵写法：

$$
\boxed{\hat Y=X\hat\beta},\qquad
\boxed{Y=X\hat\beta+e},\qquad
\boxed{e=Y-X\hat\beta}
$$

![课件：多元回归总体模型的标量表达式](/images/econometrics/lesson6/slide_38.jpg)

:::TIP
始终区分：

- $Y=X\beta+\mu$：总体模型，含**真实但未知**的参数与随机干扰项。
- $Y=X\hat\beta+e$：样本模型，含**估计参数**与残差。
- $\hat Y=X\hat\beta$：样本拟合值。

$\mu$ 与 $e$ 在概念上不同，不能把样本残差直接视为真正的总体扰动。
:::

---

## 六、教材 §3.1：多元模型的基本假设

以下按课堂 PPT 五条假设整理。最重要的新特征是：**多元模型还需要处理解释变量之间的共线性问题。**

### 假设 1：模型正确设定（correct specification）

总体模型应设定为所讨论的线性条件均值模型，包含正确的解释变量集合，并正确处理其他结构性因素：

$$
Y_i=\beta_0+\sum_{j=1}^k\beta_jX_{ij}+\mu_i
$$

老师强调“解释变量多一个、少一个都可能出问题”。这属于理解正确模型设定的课堂简化表述。

:::WARNING
严格说来，**遗漏重要变量**若与保留变量相关，会造成典型的遗漏变量偏误；加入真实系数为零的无关变量，通常不会仅因“多加了一个”就使 OLS 有偏，但可能降低估计精度。最重要的是确保模型刻画了研究所需的条件均值关系。
:::

### 假设 2：解释变量具有变异性，无完全多重共线性；样本矩阵极限良好

**（1）有变异性**：各解释变量不能在样本中始终取同一个值，否则无法有效识别其斜率。

**（2）无完全多重共线性**：不存在不全为零的一组常数 $c_0,c_1,\ldots,c_k$，使得每个样本都满足：

$$
c_0+c_1X_{i1}+\cdots+c_kX_{ik}=0
$$

用矩阵语言：

$$
\boxed{\operatorname{rank}(X)=k+1}
$$

由于 $X$ 有 $k+1$ 列，列满秩意味着这些列线性无关，并直接推得：

$$
\boxed{\operatorname{rank}(X'X)=k+1,\qquad (X'X)^{-1}\text{ 存在}}
$$

**课堂例子**：如果将“全年总收入”与“工资性收入”“其他收入”三者同时放入同一个包含截距的回归，而总收入恰等于后两者之和，就出现完全线性关系。此时无法唯一识别三个收入变量各自的回归系数。

**完全共线性与高度共线性区别：**

- **完全共线性**：$X'X$ 不可逆，普通 OLS 系数不能唯一求出。
- **高度但不完全共线性**：系数通常仍可求出，但标准误可能较大、估计结果不稳定。课堂提醒应警惕严重共线性。

**（3）大样本条件**：教材额外要求，当 $n\to\infty$ 时：

$$
\boxed{\frac{X'X}{n}\xrightarrow{p}Q}
$$

其中 $Q$ 为有限、可逆的常矩阵，用于建立大样本性质。这个条件比简单地说“$X$ 必须有变异性”更完整。

![课件：多元线性回归基本假设与误差正态性](/images/econometrics/lesson6/slide_45.jpg)

### 假设 3：随机干扰项条件零均值（exogeneity）

$$
\boxed{E(\mu_i\mid X)=0}
$$

这里 $X$ 表示整个解释变量样本矩阵（或者在相应模型设置下的所有相关解释变量信息）。

含义：在给定解释变量的信息后，剩余不可解释部分没有系统性的正偏差或负偏差。

它推出：

$$
E(\mu_i)=0
$$

且在矩存在等适当条件下：

$$
\operatorname{Cov}(X_{ij},\mu_i)=0
$$

更一般的矩阵结果：

$$
E(\mu\mid X)=0
\quad\Longrightarrow\quad
E(X'\mu\mid X)=0
$$

:::WARNING
老师在讲解时有时将“外生”“不相关”“独立”交替使用。严谨地说，**条件零均值通常足以推出不相关，但不一定推出统计独立**；只要求 $\operatorname{Cov}(X,\mu)=0$ 也往往弱于完整的条件零均值。
:::

### 假设 4：条件同方差、不同观测误差不相关

$$
\operatorname{Var}(\mu_i\mid X)=\sigma^2
$$

$$
\operatorname{Cov}(\mu_i,\mu_j\mid X)=0\quad (i\ne j)
$$

相应的矩阵形式：

$$
\boxed{\operatorname{Var}(\mu\mid X)=\sigma^2I_n}
$$

直观理解：

- **同方差**：不同观测的随机扰动具有相同的波动程度。
- **不相关**：不同观测的扰动之间没有线性关联。

这一条件构成经典的**球形扰动假设**。对截面数据，常结合独立随机抽样理解；时间序列数据则需要更加审慎地处理序列相关性。

### 假设 5：正态性（normality）

在给定 $X$ 的条件下，典型写法为：

$$
\boxed{\mu\mid X\sim N(0,\sigma^2 I_n)}
$$

或逐项写作 $\mu_i\mid X\sim N(0,\sigma^2)$，并结合适当的联合分布条件。

作用：便于建立系数估计量的精确分布，推导 $t$、$F$ 检验，以及构造正态似然函数。

:::TIP
**五条假设的记忆框架**

1. **模型**：线性条件均值结构设定正确。
2. **$X$**：有变异、无完全共线性，$X'X/n$ 的大样本极限可逆。
3. **$\mu$ 的均值**：条件零均值。
4. **$\mu$ 的二阶矩**：同方差、不同观测不相关。
5. **$\mu$ 的分布**：正态性（用于精确有限样本推断等）。

其中，**无完全多重共线性是多元回归特别需要强调的条件**。
:::

### 6. 基本假设的矩阵表达法

课堂把全部条件进一步凝练为：

$$
\begin{aligned}
&\operatorname{rank}(X)=k+1,\\
&E(\mu\mid X)=0,\\
&\operatorname{Var}(\mu\mid X)=\sigma^2I_n,\\
&\mu\mid X\sim N(0,\sigma^2I_n)\quad\text{（需要正态性时）}.
\end{aligned}
$$

![课件：多元模型条件零均值与球形扰动假设的矩阵表达](/images/econometrics/lesson6/slide_47.jpg)

---

## 七、教材 §3.2：普通最小二乘估计

课堂重点，用两条路线**推导同一个 OLS 公式**：

1. 把对 $k+1$ 个参数的一阶条件整理为正规方程，再写成矩阵形式；
2. 直接把残差平方和写成矩阵二次型，**对参数向量求导**。

### 1. OLS 的目标函数

样本回归：

$$
Y_i=\hat\beta_0+\sum_{j=1}^k\hat\beta_jX_{ij}+e_i
$$

因此：

$$
Q(\hat\beta_0,\ldots,\hat\beta_k)
=\sum_{i=1}^n e_i^2
=\sum_{i=1}^n\left(Y_i-\hat\beta_0-\sum_{j=1}^k\hat\beta_jX_{ij}\right)^2
$$

选择 $\hat\beta$ 使 $Q$ 最小。

### 2. 第一条路线：逐个参数求偏导，得到正规方程

对截距求偏导：

$$
\begin{aligned}
\frac{\partial Q}{\partial\hat\beta_0}
&=-2\sum_{i=1}^n
\left(Y_i-\hat\beta_0-\sum_{j=1}^k\hat\beta_jX_{ij}\right)\\
&=-2\sum_{i=1}^ne_i=0
\end{aligned}
$$

故：

$$
\boxed{\sum_{i=1}^ne_i=0}
$$

对第 $j$ 个解释变量的系数求偏导：

$$
\begin{aligned}
\frac{\partial Q}{\partial\hat\beta_j}
&=-2\sum_{i=1}^n X_{ij}
\left(Y_i-\hat\beta_0-\sum_{\ell=1}^k\hat\beta_\ell X_{i\ell}\right)\\
&=-2\sum_{i=1}^nX_{ij}e_i=0
\end{aligned}
$$

因此：

$$
\boxed{\sum_{i=1}^nX_{ij}e_i=0},\qquad j=1,\ldots,k
$$

合在一起，得到 $k+1$ 个方程：

$$
\begin{cases}
n\hat\beta_0+\hat\beta_1\sum_iX_{i1}+\cdots+\hat\beta_k\sum_iX_{ik}=\sum_iY_i,\\
\hat\beta_0\sum_iX_{i1}+\hat\beta_1\sum_iX_{i1}^2+\cdots+\hat\beta_k\sum_iX_{i1}X_{ik}=\sum_iX_{i1}Y_i,\\
\qquad\vdots\\
\hat\beta_0\sum_iX_{ik}+\hat\beta_1\sum_iX_{ik}X_{i1}+\cdots+\hat\beta_k\sum_iX_{ik}^2=\sum_iX_{ik}Y_i.
\end{cases}
$$

![课件：OLS 最小化残差平方和并逐个参数求偏导](/images/econometrics/lesson6/slide_49.jpg)

### 3. 把正规方程写成矩阵形式

将上面的 $k+1$ 个方程写成：

$$
\underbrace{\begin{pmatrix}
n&\sum_iX_{i1}&\cdots&\sum_iX_{ik}\\
\sum_iX_{i1}&\sum_iX_{i1}^2&\cdots&\sum_iX_{i1}X_{ik}\\
\vdots&\vdots&\ddots&\vdots\\
\sum_iX_{ik}&\sum_iX_{ik}X_{i1}&\cdots&\sum_iX_{ik}^2
\end{pmatrix}}_{X'X}
\underbrace{\begin{pmatrix}\hat\beta_0\\\hat\beta_1\\\vdots\\\hat\beta_k\end{pmatrix}}_{\hat\beta}
=
\underbrace{\begin{pmatrix}\sum_iY_i\\\sum_iX_{i1}Y_i\\\vdots\\\sum_iX_{ik}Y_i\end{pmatrix}}_{X'Y}
$$

等价于：

$$
\boxed{X'X\hat\beta=X'Y}
$$

由于假设 2 保证 $X'X$ 可逆：

$$
(X'X)^{-1}(X'X)\hat\beta=(X'X)^{-1}X'Y
$$

左边化为单位矩阵乘 $\hat\beta$，于是：

$$
\boxed{\hat\beta=(X'X)^{-1}X'Y}
$$

![课件：正规方程组的矩阵表示及 OLS 系数公式](/images/econometrics/lesson6/slide_51.jpg)

**公式的维度检查：**

$$
\underbrace{(X'X)^{-1}}_{(k+1)\times(k+1)}
\underbrace{X'}_{(k+1)\times n}
\underbrace{Y}_{n\times1}
\ \longrightarrow\ 
\underbrace{\hat\beta}_{(k+1)\times1}
$$

:::WARNING
课堂特别讨论了常见误算：

$$
(X'X)^{-1}X'Y\ \overset{\large\times}{=}\ X^{-1}Y
$$

该化简一般**不成立**。回归设计矩阵 $X$ 通常是 $n\times(k+1)$ 且 $n>k+1$，它并非方阵，$X^{-1}$ 通常根本没有定义；不能随意将 $(X'X)^{-1}$ 分拆、约掉 $X'$。
:::

### 4. 第二条路线：矩阵求导直接得到 OLS（课堂重中之重）

老师强调：第一条路线主要利用方程组；**第二条路线才真正使用前面学过的矩阵微分**。

首先：

$$
e=Y-X\beta
$$

残差平方和等于向量内积：

$$
\boxed{Q(\beta)=e'e=(Y-X\beta)'(Y-X\beta)}
$$

**第一步：转置分配到括号中**

利用 $(AB)'=B'A'$：

$$
(Y-X\beta)'=Y'-\beta'X'
$$

**第二步：乘开**

$$
\begin{aligned}
Q(\beta)
&=(Y'-\beta'X')(Y-X\beta)\\
&=Y'Y-Y'X\beta-\beta'X'Y+\beta'X'X\beta
\end{aligned}
$$

注意 $Y'X\beta$ 是 $1\times1$ 的标量，转置仍等于它自己：

$$
Y'X\beta=(Y'X\beta)'=\beta'X'Y
$$

因此中间两项可以合并：

$$
\boxed{Q(\beta)=Y'Y-2\beta'X'Y+\beta'X'X\beta}
$$

**第三步：对 $\beta$ 求梯度**

逐项求导：

- $Y'Y$ 不含 $\beta$，导数为 $0$。
- $-2\beta'X'Y$ 是关于 $\beta$ 的一次型，导数为 $-2X'Y$。
- $\beta'X'X\beta$ 是二次型；$X'X$ 对称，导数为 $2X'X\beta$。

合起来：

$$
\boxed{\frac{\partial Q}{\partial\beta}=-2X'Y+2X'X\beta}
$$

**第四步：令梯度为零**

$$
-2X'Y+2X'X\hat\beta=0
$$

两边除以 2、移项：

$$
X'X\hat\beta=X'Y
$$

再左乘 $(X'X)^{-1}$：

$$
\boxed{\hat\beta=(X'X)^{-1}X'Y}
$$

这与第一条路线完全一致。

进一步地：

$$
\frac{\partial^2Q}{\partial\beta\partial\beta'}=2X'X
$$

当 $X$ 列满秩时 $X'X$ 正定，因此 $Q$ 严格凸，所求驻点是**唯一全局最小值**。

:::TIP
**背诵最短推导链：**

$$
Q=(Y-X\beta)'(Y-X\beta)
=Y'Y-2\beta'X'Y+\beta'X'X\beta
$$

$$
\frac{\partial Q}{\partial\beta}
=-2X'Y+2X'X\beta=0
\Longrightarrow
\hat\beta=(X'X)^{-1}X'Y
$$

每一项正对应前面复习的**转置规则、一次型求导、二次型求导、逆矩阵运算**。
:::

### 5. 课堂例题：将一元家庭收入—消费回归写成矩阵

课件例 3.2.1 重新使用前面的一元回归数据。

设：

$$
Y_i=\beta_0+\beta_1X_i+\mu_i
$$

已知样本统计量：

$$
n=10,\quad \sum X_i=21500,\quad
\sum X_i^2=53\,650\,000
$$

$$
\sum Y_i=15674,\qquad
\sum X_iY_i=39\,468\,400
$$

因此：

$$
X'X=
\begin{pmatrix}
10&21500\\
21500&53650000
\end{pmatrix},
\qquad
X'Y=
\begin{pmatrix}
15674\\39468400
\end{pmatrix}
$$

利用二阶矩阵逆矩阵公式：

$$
(X'X)^{-1}
\approx
\begin{pmatrix}
0.722559&-0.000289562\\
-0.000289562&1.346801\times10^{-7}
\end{pmatrix}
$$

于是：

$$
\begin{aligned}
\hat\beta
&=(X'X)^{-1}X'Y\\
&\approx
\begin{pmatrix}-103.1717\\0.7770101\end{pmatrix}
\end{aligned}
$$

得到：

$$
\boxed{\hat Y=-103.172+0.7770X}
$$

![课件例3.2.1：一元收入消费回归的 X'X 矩阵](/images/econometrics/lesson6/slide_54.jpg)

![课件例3.2.1：一元收入消费回归的逆矩阵和参数结果](/images/econometrics/lesson6/slide_55.jpg)

**注意数值精度**：课件展示的逆矩阵有四舍五入，将粗略的四位小数直接代入可能得不到准确结果。以上推导使用给出的 $X'X$、$X'Y$ 计算，再对最终参数取舍入。

---

## 八、正规方程、残差正交与离差形式

课堂明确要求记住**两个矩阵正规方程表达式，以及一个离差形式**。

### 1. 第一种：正规方程的系数形式

$$
\boxed{X'X\hat\beta=X'Y}
$$

这是 OLS 一阶条件的矩阵表达。

### 2. 第二种：残差的正交形式

由样本模型：

$$
Y=X\hat\beta+e
$$

代入正规方程：

$$
X'X\hat\beta=X'(X\hat\beta+e)
=X'X\hat\beta+X'e
$$

消去两侧同一项：

$$
\boxed{X'e=0}
$$

![课件：X'e=0 展开为残差总和为零及残差与各解释变量正交](/images/econometrics/lesson6/slide_57.jpg)

将 $X'$ 的各行分别与残差向量相乘，可以完全展开为：

$$
\boxed{
\begin{cases}
\sum_{i=1}^n e_i=0,\\[2pt]
\sum_{i=1}^nX_{i1}e_i=0,\\
\ \vdots\\
\sum_{i=1}^nX_{ik}e_i=0.
\end{cases}}
$$

含义：

- 样本残差加总为零。
- 每一个解释变量向量都与残差向量**正交**（样本内积为零）。
- 由于残差均值为零，以上意味着每个解释变量与残差的**样本协方差为零**。

这是一条**OLS 算法产生的样本内性质**，并不能据此直接得出总体扰动与解释变量外生。

:::TIP
由 $\hat Y=X\hat\beta$，拟合值在 $X$ 的列空间内，而 $X'e=0$ 说明残差与该列空间正交。所以 OLS 本质上是把 $Y$ **正交投影**到由解释变量列张成的空间，残差是投影未能解释的部分。这个几何解释有助于理解正规方程。
:::

### 3. 样本回归函数的离差形式

从：

$$
Y_i=\hat\beta_0+\hat\beta_1X_{i1}+\cdots+\hat\beta_kX_{ik}+e_i
$$

**第一步**：对 $i=1,\ldots,n$ 求平均。由于 $\bar e=0$：

$$
\bar Y=\hat\beta_0+\hat\beta_1\bar X_1+\cdots+\hat\beta_k\bar X_k
$$

移项立即得到截距：

$$
\boxed{\hat\beta_0=\bar Y-\sum_{j=1}^k\hat\beta_j\bar X_j}
$$

**第二步**：用第 $i$ 个样本方程减去平均方程：

$$
Y_i-\bar Y
=\sum_{j=1}^k\hat\beta_j(X_{ij}-\bar X_j)+e_i
$$

记：

$$
y_i=Y_i-\bar Y,\qquad x_{ij}=X_{ij}-\bar X_j
$$

就得到：

$$
\boxed{y_i=\hat\beta_1x_{i1}+\cdots+\hat\beta_kx_{ik}+e_i}
$$

这叫**样本回归函数的离差形式**：已将每个变量去均值，因此原来的截距被消去。

![课件：去均值后的多元回归离差形式](/images/econometrics/lesson6/slide_58.jpg)

### 4. 离差形式的矩阵 OLS

定义去均值矩阵：

$$
y=\begin{pmatrix}y_1\\\vdots\\y_n\end{pmatrix},\qquad
x=
\begin{pmatrix}
x_{11}&\cdots&x_{1k}\\
\vdots&\ddots&\vdots\\
x_{n1}&\cdots&x_{nk}
\end{pmatrix}
$$

注意这里的小写 $x$ 的维度变成了 $n\times k$，不再含全 1 的截距列。

令斜率向量 $\hat b=(\hat\beta_1,\ldots,\hat\beta_k)'$，则：

$$
y=x\hat b+e
$$

完全同样的 OLS 原理给出：

$$
\boxed{\hat b=(x'x)^{-1}x'y}
$$

再由：

$$
\boxed{\hat\beta_0=\bar Y-\sum_{j=1}^k\hat\beta_j\bar X_j}
$$

恢复截距。

**为什么老师强调离差形式有用？** 原始设计矩阵需要求逆 $(k+1)\times(k+1)$ 的 $X'X$；去均值后仅需处理 $k\times k$ 的 $x'x$，计算维度更低。随着模型参数数目增加，这种差别可能有明显计算意义。

**同一条性质的两种表述：**

$$
\boxed{\bar{\hat Y}=\bar Y}
\qquad\Longleftrightarrow\qquad
\boxed{\hat Y(\bar X_1,\ldots,\bar X_k)=\bar Y}
$$

即**含截距的 OLS 回归超平面经过各样本变量均值组成的点**。这是将一元回归“拟合直线经过样本均值点”的性质推广到多元情形。


---

## 九、随机误差项方差的无偏估计

除了估计 $\beta_0,\ldots,\beta_k$，还需要估计总体误差项的方差 $\sigma^2$。

先计算残差平方和：

$$
\mathrm{RSS}=\sum_{i=1}^n e_i^2=e'e
$$

因为估计了 $k+1$ 个参数，残差自由度为：

$$
\operatorname{df}_{\mathrm{resid}}=n-k-1
$$

由经典线性模型的性质：

$$
E\left(\frac{e'e}{n-k-1}\ \middle|\ X\right)=\sigma^2
$$

因此误差方差的无偏估计量为：

$$
\boxed{\hat\sigma^2=\frac{\sum_{i=1}^n e_i^2}{n-k-1}
=\frac{e'e}{n-k-1}}
$$

回归标准误（standard error of regression / residual standard error）为：

$$
\boxed{\hat\sigma=
\sqrt{\frac{e'e}{n-k-1}}}
$$

![课件：随机误差项方差的无偏估计与回归标准误](/images/econometrics/lesson6/slide_59.jpg)

**自由度速查**

| 模型 | 解释变量个数 $k$ | 待估系数数目 | 残差自由度 |
|---|---:|---:|---:|
| 含截距的一元线性回归 | 1 | 2 | $n-2$ |
| 含截距的二元线性回归 | 2 | 3 | $n-3$ |
| 含截距的 $k$ 元线性回归 | $k$ | $k+1$ | $n-k-1$ |

注意区分：

- $\hat\sigma$：回归的残差标准差估计；Stata 中对应 **Root MSE**。
- $\operatorname{se}(\hat\beta_j)$：**某个系数估计量自身的标准误**；Stata 系数表中对应 **Std. Err.**。
- 两者存在联系，但意义不同。

:::TIP
课堂到这里完成了多元线性回归的主要**点估计**任务：

$$
\boxed{\hat\beta=(X'X)^{-1}X'Y,\qquad \hat\sigma^2=\frac{e'e}{n-k-1}}
$$

以这两个公式为基础，后续才能继续计算 $\hat\beta$ 的协方差矩阵、统计检验和预测区间。
:::

---

## 十、2023 年城镇居民消费回归：Stata 实例

这是课程最后展示的**完整应用案例**（录音约 02:24—02:28；课件例 3.2.2）。课堂 PPT 用 2023 年数据，涉及中国内地 **31 个省级地区**。

### 1. 研究问题与变量

研究：不同来源的居民人均收入，与城镇居民人均消费支出存在怎样的条件线性关系？

| 变量 | 含义 | 在模型中的角色 |
|---|---|---|
| $Y$ | 2023 年各省级地区城镇居民**人均消费支出** | 被解释变量 |
| $X_1$ | 2023 年各省级地区城镇居民**人均工资性收入** | 解释变量 1 |
| $X_2$ | 2023 年各省级地区城镇居民**人均其他收入** | 解释变量 2 |

模型：

$$
\boxed{Y_i=\beta_0+\beta_1X_{i1}+\beta_2X_{i2}+\mu_i}
$$

这里其他收入作为一个汇总变量，用来区别于工资性收入。

![课件例3.2.2：2023年城镇居民消费与两类收入的变量设定](/images/econometrics/lesson6/slide_61.jpg)

### 2. Stata 数据处理与回归命令

课堂演示的命令可整理为：

```stata
* 打开数据，并清除内存中原数据
use p64.dta, clear

* 给整个数据集加说明
label data "p64表3.2.1"

* 给变量加标签
label variable y  "消费支出"
label variable x1 "工资性收入x1"
label variable x2 "其他收入x2"

* 展示描述性统计
summarize

* 以 y 为被解释变量，x1、x2 为解释变量
regress y x1 x2

* 查看变量结构
describe
```

- `use p64.dta, clear`：加载数据，`clear` 允许清空先前已加载的数据。
- `label data`：为数据集添加文字标签。
- `label variable`（可缩写 `label var`）：为变量添加标签。
- `summarize`（可缩写 `sum`）：描述性统计，展示 `Obs`、`Mean`、`Std. Dev.`、`Min`、`Max`。
- `regress y x1 x2`（可缩写 `reg y x1 x2`）：以 $y$ 对 $x1,x2$ 进行含截距的 OLS 回归。
- `describe`：查看变量数、类型、标签、存储格式等元数据。
- `//` 可在 Stata do-file 中用于行尾注释，课堂 PPT 也用其标注命令用途。

### 3. 课堂输出的描述性统计

| 变量 | 观测数 | 均值 | 标准差 | 最小值 | 最大值 |
|---|---:|---:|---:|---:|---:|
| $X_1$ 工资性收入 | 31 | 30309.65 | 8687.118 | 21006 | 56171 |
| $X_2$ 其他收入 | 31 | 19447.87 | 5404.947 | 12692 | 33558 |
| $Y$ 消费支出 | 31 | 31643.13 | 7764.436 | 24427 | 54919 |

上述数值摘自课堂 PPT 的 `sum` 输出，单位按原始数据的人均收入/消费统计口径理解。

### 4. OLS 估计结果

Stata 系数表：

| 变量 | Coef. | Std. Err. | t | P>|t| | 95% Conf. Interval |
|---|---:|---:|---:|---:|---|
| $X_1$ | 0.5462354 | 0.0587282 | 9.30 | 0.000 | [0.4259362, 0.6665347] |
| $X_2$ | 0.6133909 | 0.0943911 | 6.50 | 0.000 | [0.4200395, 0.8067423] |
| 常数项 | 3157.78 | 1322.871 | 2.39 | 0.024 | [448.0012, 5867.558] |

因此样本回归函数为：

$$
\boxed{\hat Y=3157.78+0.5462X_1+0.6134X_2}
$$

![课堂 Stata 实例完整截图：命令、描述统计、回归系数和检验输出](/images/econometrics/lesson6/slide_62.jpg)

**系数的经济解释（必会）**

- $\hat\beta_1=0.5462$：**保持其他收入 $X_2$ 不变**，工资性收入 $X_1$ 每增加 1 元，该模型估计的城镇居民人均消费支出条件均值平均增加约 **0.5462 元**。
- $\hat\beta_2=0.6134$：**保持工资性收入 $X_1$ 不变**，其他收入 $X_2$ 每增加 1 元，预测的城镇居民人均消费支出条件均值平均增加约 **0.6134 元**。
- 截距 $\hat\beta_0=3157.78$：两个解释变量都为零时的线性模型预测值。现实样本中收入为零可能远离观测范围，此截距的外推经济意义应谨慎。

**比较两个回归系数时需要注意**：0.6134 大于 0.5462，表示在当前线性模型、相同货币单位下，每增加 1 元其他收入对应的条件均值变化幅度较大。但只有系数的数值大小仍不足以判断二者的差异在统计上是否显著；需要进一步检验 $H_0:\beta_1=\beta_2$。

### 5. 如何阅读回归输出中的统计量？

课件中的主要结果：

| Stata 项目 | 输出值 | 含义 |
|---|---:|---|
| Number of obs | 31 | 31 个地区观测 |
| Model df | 2 | 2 个斜率系数 |
| Residual df | 28 | $31-2-1=28$ |
| Model SS | 约 $1.7128\times10^9$ | 回归解释平方和 ESS |
| Residual SS | 约 $95\,790\,439.5$ | 残差平方和 RSS |
| F(2, 28) | 250.33 | 检验全部斜率系数同时为零 |
| Prob > F | 0.0000 | 总体 F 检验的 p 值（软件显示精度下） |
| R-squared | 0.9470 | 样本拟合优度 |
| Adj R-squared | 0.9433 | 考虑解释变量数目的调整 $R^2$ |
| Root MSE | 1849.6 | 回归标准误 $\hat\sigma$ |

**（1）系数估计和标准误**

`Coef.` 对应 $\hat\beta_j$；`Std. Err.` 对应系数标准误；`t` 是系数除以其标准误所得统计量（零值原假设下）。

`P>|t|` 表示双侧检验 p 值，显示 `0.000` 是 Stata 四舍五入后的显示值，应解释为**非常小**，不能理解成概率严格等于零。

**（2）拟合优度**

$$
R^2=1-\frac{\mathrm{RSS}}{\mathrm{TSS}}\approx0.9470
$$

意味着在这 31 个地区的样本中，约 **94.70% 的消费支出样本离差平方和**由拟合模型对应的解释部分占据。

调整后的 $R^2$：

$$
\bar R^2=1-\frac{\mathrm{RSS}/(n-k-1)}{\mathrm{TSS}/(n-1)}
\approx0.9433
$$

**（3）回归标准误**

$$
\hat\sigma=\sqrt{\frac{\mathrm{RSS}}{n-k-1}}
=\sqrt{\frac{95\,790\,439.5}{28}}
\approx1849.6
$$

这与 Stata 中 `Root MSE = 1849.6` 一致。

**（4）F 检验**

$$
H_0:\beta_1=\beta_2=0,\qquad
H_1:\text{至少一个斜率系数不为零}
$$

$$
F=\frac{\mathrm{ESS}/k}{\mathrm{RSS}/(n-k-1)}
$$

课件输出 $F(2,28)=250.33$，`Prob > F = 0.0000`，说明可以在通常显著性水平下拒绝“两个斜率系数都为零”的原假设。

:::WARNING
本次课堂最后主要演示**参数点估计、Root MSE 与软件表格的读取**。上面的 $R^2$、$F$、$t$ 解释，是将课堂前半段的一元回归复习概念运用到实际 Stata 输出，方便复习；多元回归的完整统计检验属于教材后续 §3.3。
:::

---

## 十一、课件与教材的衔接及易错点

### 1. 本节在教材中的位置

教材：李子奈、潘文卿，《计量经济学》（第五版），高等教育出版社。

| 教材部分 | 对应本节内容 | 课堂讲授情况 |
|---|---|---|
| 第二章 §2.2—§2.5 | 一元 OLS、ML 回顾、拟合优度、检验、预测 | 开头集中复习 |
| 第三章 §3.1（一） | 多元模型标量及矩阵形式、偏回归系数 | 详细讲授 |
| 第三章 §3.1（二） | 多元模型的五条基本假设 | 详细讲授 |
| 第三章 §3.2（一） | OLS、正规方程、离差形式、误差方差估计 | 详细推导 |
| 第三章 §3.2（三） | 极大似然估计 | 课件中有似然函数页面；课堂未深入推导该节 |
| 第三章 §3.2（五） | 多元回归估计实例 | 演示 2023 年数据的 Stata 回归 |
| 第三章 §3.3 | 参数统计性质、变量与模型显著性检验 | 多元模型本节尚未系统讲授，属于后续衔接 |

课堂 PPT 的“预备知识二”（矩阵运算、二次型、向量微分）是配合第三章学习的数学基础，并非教材第三章独立设置的一节。

**资料版本注意**：电子教材 §3.2 后面的居民消费案例采用**较早年份的数据**（教材正文示例为 2018 年）；课堂 PPT 更新为**2023 年**，所以两处估计系数、统计量不同。这里的案例全部按**本次课件 2023 年的数据**记录。

### 2. 课件中出现但本节未系统展开的方法

第三章 §3.2 在教材中还包括**矩估计（MM）**和**极大似然估计（ML）**。

- OLS：让残差平方和最小。
- MM：令合适的样本矩条件匹配总体矩条件；在线性回归的基本条件下可以得到相同的系数正规方程。
- ML：给定误差的概率分布，极大化样本似然函数。正态线性回归中系数的 ML 估计与 OLS 一致，但误差方差的 ML 估计用 $n$ 作分母。

课件展示了正态似然函数的形式：

$$
L(\beta,\sigma^2)
=(2\pi\sigma^2)^{-n/2}
\exp\left[-\frac{(Y-X\beta)'(Y-X\beta)}{2\sigma^2}\right]
$$

这部分作为**知识衔接**保留；课堂这次主要展开的是 OLS 的两种推导。

### 3. 常见错误对照

| 易错想法 | 正确理解 |
|---|---|
| 多元回归有 $k$ 个参数 | 有 $k$ 个斜率系数，含截距共 **$k+1$ 个参数** |
| $X$ 是一个解释变量的数 | $X$ 是 **$n\times(k+1)$ 的设计矩阵** |
| $\beta_j$ 是个体 $Y$ 的确定变化 | 它表示**控制其他变量后，条件均值的边际变化** |
| $X'X$ 总能求逆 | 要求 $X$ **列满秩**，无完全共线性 |
| 可以直接把 $(X'X)^{-1}X'$ 化成 $X^{-1}$ | $X$ 通常是非方阵，不能这样消去 |
| $\partial(\beta'A\beta)/\partial\beta=A\beta$ | 若 $A=A'$，应为 **$2A\beta$** |
| $X'e=0$ 说明总体外生性已被验证 | 这是 **OLS 构造出的样本残差正交条件** |
| $E(\mu\mid X)=0$ 一定意味着完全统计独立 | 条件零均值一般推出不相关，独立性更强 |
| $\hat\sigma$ 与系数 Std. Err. 相同 | 一个是**回归标准误**，一个是**某个系数的标准误** |
| `P>|t| = 0.000` 表示概率恰为 0 | 软件显示精度下是极小的 p 值 |
| 回归系数显著就能断定有因果影响 | 因果解释还需可信的识别假设及研究设计 |

### 4. 复习时必须能独立完成的四项任务

1. **写模型**：能从 $Y_i=\beta_0+\sum_j\beta_jX_{ij}+\mu_i$ 正确写出 $Y=X\beta+\mu$，逐一检查矩阵维度。
2. **说假设**：能说明五条基本假设，特别解释**为什么完全共线性导致 OLS 公式中的逆矩阵不存在**。
3. **推 OLS**：能从残差平方和出发，熟练推出 $X'X\hat\beta=X'Y$ 和 $\hat\beta=(X'X)^{-1}X'Y$，解释矩阵二次型求导为什么有系数 2。
4. **读实证结果**：看到 `reg y x1 x2` 的输出，能解释系数的**控制其他变量、条件均值**含义，识别 `Coef.`、`Std. Err.`、`Root MSE`、$R^2$、F 检验及残差自由度。

---

### 资料说明

- **课堂资料**：孔伟杰，《计量经济学》，2026-10-20 第 11—13 节；本次课件《上课 PPT6》，配套录音转写《上课录音6》。
- **主要教材**：李子奈、潘文卿，《计量经济学》（第五版），高等教育出版社；本次重点对应第三章 §3.1 和 §3.2。
- **校勘说明**：老师录音文字来自自动语音识别，文中依据课件公式和教材对“矩阵”“转置”“OLS”“极大似然”等明显错听词做了校正；在经济学含义与统计性质存在可能混淆的地方，已单独标注。
- **图片说明**：文中课件插图均提取自本次 PPT 原图，静态资源统一置于 `/public/images/econometrics/lesson6/` 下。
