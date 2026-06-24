---
title: OceanAI-Chapter1：概率论基础
published: 2026-06-11
description: 海洋人工智能问题背景、概率基础、贝叶斯推断、统计估计与高斯模型
tags: [海洋人工智能基础]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 用概率分布描述不确定性，用观测更新已有认识，再根据后验分布完成估计或判决。

贯穿本章的主线是：

$$
\boxed{
 p(x,y)
 \longrightarrow p(y)
 \longrightarrow p(x\mid y)
 \longrightarrow
 \begin{cases}
 \mathbb E[X\mid Y=y], & \text{均方误差最小的估计},\\[2mm]
 \arg\max_x p(x\mid y), & \text{错误概率最小的判决}.
 \end{cases}}
$$

本章复习时重点掌握：

1. 概率空间、随机变量、概率质量函数与概率密度函数；
2. 条件概率、全概率公式与贝叶斯公式；
3. 一维随机变量变换；
4. 联合分布、边缘分布与条件分布；
5. 最大似然估计、MMSE 估计与 MAP 判决；
6. 一维、二维高斯分布及线性高斯模型。

:::WARNING
考试计算以一维和二维为主。高维公式主要用于理解统一形式，不必展开复杂的高维推导。
:::

---

## 目录

- [概述](#概述)
- [海洋人工智能的问题背景](#海洋人工智能的问题背景)
- [人工智能与学习](#人工智能与学习)
- [概率为何重要](#概率为何重要)
- [概率空间与随机变量](#概率空间与随机变量)
- [随机变量的函数](#随机变量的函数)
- [条件概率与贝叶斯公式](#条件概率与贝叶斯公式)
- [联合分布、边缘分布与条件分布](#联合分布边缘分布与条件分布)
- [从联合分布到估计与判决](#从联合分布到估计与判决)
- [最大似然估计](#最大似然估计)
- [矩、协方差与相关性](#矩协方差与相关性)
- [多元高斯分布](#多元高斯分布)
- [线性高斯模型](#线性高斯模型)
- [指数分布族](#指数分布族)
- [本章考法与公式地图](#本章考法与公式地图)
- [总结](#总结)

---

## 海洋人工智能的问题背景

### 海洋信息处理的统一模型

海洋通信、探测与感知常可统一写成：

$$
y(t)=s(t)\otimes h(t)+w(t),
$$

其中：

- $s(t)$：发射信号；
- $h(t)$：传播信道或环境响应；
- $w(t)$：噪声；
- $y(t)$：接收信号。

由这一模型可形成两类典型任务：

- **通信问题**：由接收信号 $y(t)$ 恢复发射信号 $s(t)$；
- **感知问题**：由已知发射信号和接收信号估计环境或目标参数 $h(t)$。

常见技术路线：

1. **模型驱动**：先建立物理模型，再做参数估计、检测和优化；
2. **数据驱动**：从数据中直接学习输入到输出的映射；
3. **模型—数据双驱动**：用物理模型约束学习过程，用数据补偿模型误差。

> **图片占位符（PPT 第 5 页）**：插入“发射信号—信道—噪声—接收信号”框图。

### 海洋声传播的主要困难

水下远距离传播主要依赖声波。与陆地电磁通信相比，其困难主要来自：

- 海水声速约为 $1500\ \mathrm{m/s}$，平台运动造成的相对多普勒效应明显；
- 声速受温度、盐度和深度影响，声线会向低声速区域弯折；
- 海面和海底形成天然波导，产生明显多径；
- 海洋数据采集成本高、样本少、环境分布容易变化。

因此，海洋人工智能特别强调：

- 少量数据下的有效推断；
- 对环境变化保持稳健；
- 物理模型与学习模型结合。

> **图片占位符（PPT 第 11–18 页）**：选取一张声速剖面与声线传播图，说明声速变化、声线弯折和多径传播。

---

## 人工智能与学习

### 人工智能的基本任务

课程中将人工智能任务概括为四类：

- **预测**：分类、回归；
- **生成**：生成图像、文本或信号；
- **发现**：从无标签数据中寻找结构，如聚类；
- **控制**：在多阶段过程中选择动作，使长期收益最大。

### 学习不能停留在记忆

若垃圾邮件分类器只记住所有已出现过的垃圾邮箱地址，它只能识别见过的样本，无法判断新邮件。

一个好的学习系统应具有 **归纳与泛化能力**：

> 从有限样本中提取规律，并把规律用于未见样本。

### 先验知识与归纳偏置

老师用老鼠和鸽子的例子说明：

- 老鼠会把食物的气味、味道与身体不适联系起来；
- 老鼠通常不会轻易把食物与声音、电击联系起来；
- 鸽子可能把随机送食与送食前偶然发生的动作建立虚假因果关系。

这说明学习必须带有一定的 **先验知识或归纳偏置**。完全接受所有可能解释，容易学到偶然相关；合理限制假设空间，有助于发现稳定规律。

---

## 概率为何重要

概率论用于描述由下列因素产生的不确定性：

- 数据数量有限；
- 测量存在噪声；
- 环境和目标具有随机性；
- 模型本身不完全准确。

### 频率观点与贝叶斯观点

#### 频率观点

概率表示大量重复试验中的长期频率。

例如，反复抛掷一枚均匀硬币，正面出现频率会逐渐接近 $0.5$。

#### 贝叶斯观点

概率表示已有信息条件下的信念或不确定程度。

贝叶斯观点可以描述无法重复发生的事件，也适合机器学习中的参数、类别和隐变量推断。

两种观点的基本概率运算法则相同，本课程后续主要采用贝叶斯建模方式。

### 从不确定性中发现确定性

单次试验结果可能无法预测，但大量独立重复试验会出现稳定规律。

若 $X_1,\ldots,X_n$ 独立同分布，且 $\mathbb E[X_i]=\mu$，则大数定律说明：

$$
\frac{1}{n}\sum_{i=1}^n X_i \to \mu.
$$

因此：

- 单个样本具有随机性；
- 样本平均等统计量会随着样本增多而稳定；
- 统计推断可以利用大量随机观测提取总体规律。

:::TIP
高维标准高斯样本虽然在原点处密度最大，但其长度满足

$$
\|X\|^2=\sum_{i=1}^n X_i^2\approx n,
$$

所以样本通常集中在半径约为 $\sqrt n$ 的薄壳附近。这说明高维空间中的“高密度点”和“典型样本位置”可能不同。
:::

---

## 概率空间与随机变量

### 概率空间

概率空间定义为三元组：

$$
(\Omega,\mathcal F,P).
$$

- $\Omega$：样本空间，包含实验所有可能结果；
- $\mathcal F$：事件集合，其中每个事件都是 $\Omega$ 的子集；
- $P$：概率测度，把事件映射到 $[0,1]$。

概率测度满足：

1. **非负性**：$P(E)\ge 0$；
2. **规范性**：$P(\Omega)=1$；
3. **可列可加性**：若 $E_i$ 两两互斥，则

$$
P\left(\bigcup_i E_i\right)=\sum_i P(E_i).
$$

由此可得：

$$
P(\varnothing)=0,
$$

$$
P(E^c)=1-P(E),
$$

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

### 例：三面骰子

设三面分别标记为 $A,B,C$：

$$
\Omega=\{A,B,C\}.
$$

事件 $\{A\}$ 表示“结果为 $A$”，事件 $\{A,B\}$ 表示“结果为 $A$ 或 $B$”。

若

$$
P(A)=\frac26,\qquad P(B)=\frac16,\qquad P(C)=\frac36,
$$

则

$$
P(\{A,B\})=P(A)+P(B)=\frac12.
$$

### 随机变量

随机变量是从样本空间到实数的映射：

$$
X:\Omega\to\mathbb R.
$$

它把抽象结果编码为数值，使概率问题能够转化为代数与积分问题。

#### 例：抛硬币两次

样本空间为：

$$
\Omega=\{HH,HT,TH,TT\}.
$$

令 $X$ 表示正面次数，则：

$$
X(HH)=2,\quad X(HT)=X(TH)=1,\quad X(TT)=0.
$$

### 离散型随机变量

概率质量函数：

$$
p_X(x)=P(X=x),
$$

满足：

$$
p_X(x)\ge 0,\qquad \sum_x p_X(x)=1.
$$

### 连续型随机变量

概率密度函数 $p_X(x)$ 满足：

$$
p_X(x)\ge 0,\qquad \int_{-\infty}^{\infty}p_X(x)\,dx=1.
$$

累积分布函数：

$$
F_X(x)=P(X\le x)=\int_{-\infty}^{x}p_X(t)\,dt.
$$

区间概率：

$$
P(a\le X\le b)=F_X(b)-F_X(a).
$$

对于连续随机变量：

$$
P(X=a)=0.
$$

注意：密度值可以大于 $1$，真正的概率由区间上的积分给出。

### 本章常见分布

#### Bernoulli 分布

$$
P(X=1)=p,\qquad P(X=0)=1-p.
$$

$$
\mathbb E[X]=p,\qquad \operatorname{Var}(X)=p(1-p).
$$

#### 均匀分布

若 $X\sim U(a,b)$：

$$
p(x)=\frac{1}{b-a},\qquad a\le x\le b.
$$

$$
\mathbb E[X]=\frac{a+b}{2},\qquad
\operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$

#### 高斯分布

若 $X\sim\mathcal N(\mu,\sigma^2)$：

$$
p(x)=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$$

#### Beta 分布

$$
p(q)\propto q^{\alpha-1}(1-q)^{\beta-1},\qquad 0<q<1.
$$

它常用作 Bernoulli 参数 $q$ 的先验分布。

#### Gamma 分布

采用形状—率参数化：

$$
p(x)=\frac{b^a}{\Gamma(a)}x^{a-1}e^{-bx},\qquad x>0.
$$

---

## 随机变量的函数

设

$$
Y=g(X).
$$

目标是由 $X$ 的分布求 $Y$ 的分布。

### CDF 法

最稳妥的方法是先求：

$$
F_Y(y)=P(Y\le y)=P(g(X)\le y),
$$

再对 $y$ 求导得到 $p_Y(y)$。

### 一维单调变换公式

若 $g$ 严格单调且可逆，则：

$$
\boxed{
p_Y(y)=p_X\left(g^{-1}(y)\right)
\left|\frac{d g^{-1}(y)}{dy}\right|.}
$$

绝对值反映区间长度在变换前后的伸缩。

### 例：高斯随机变量的线性变换

若

$$
X\sim\mathcal N(\mu,\sigma^2),\qquad Y=kX+b,
$$

则

$$
Y\sim\mathcal N(k\mu+b,k^2\sigma^2).
$$

### 例：由 Gamma 分布得到逆 Gamma 分布

若

$$
X\sim\operatorname{Ga}(a,b),\qquad Y=\frac1X,
$$

则

$$
x=\frac1y,
\qquad
\left|\frac{dx}{dy}\right|=\frac1{y^2}.
$$

因此

$$
\begin{aligned}
p_Y(y)
&=p_X\left(\frac1y\right)\frac1{y^2}\\
&=\frac{b^a}{\Gamma(a)}
\left(\frac1y\right)^{a-1}
\exp\left(-\frac b y\right)\frac1{y^2}\\
&=\frac{b^a}{\Gamma(a)}y^{-(a+1)}e^{-b/y},\qquad y>0.
\end{aligned}
$$

故

$$
Y\sim\operatorname{IG}(a,b).
$$

### 非单调变换

若同一个 $y$ 对应多个原像 $x_i$，则各分支概率密度相加：

$$
p_Y(y)=\sum_i p_X(x_i)
\left|\frac{dx_i}{dy}\right|.
$$

例如 $Y=X^2$ 时，$x=\pm\sqrt y$，两条分支都必须计入。

:::WARNING
考试优先掌握一维变换。多维雅可比公式了解含义即可，遇到高维复杂计算时通常会给出公式。
:::

---

## 条件概率与贝叶斯公式

### 条件概率

若 $P(B)>0$：

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

因此乘积规则为：

$$
P(A\cap B)=P(A\mid B)P(B).
$$

随机变量形式：

$$
p(x,y)=p(x\mid y)p(y)=p(y\mid x)p(x).
$$

### 独立性

若

$$
p(x,y)=p(x)p(y),
$$

则 $X$ 与 $Y$ 独立，此时：

$$
p(x\mid y)=p(x).
$$

观测 $Y$ 不会改变对 $X$ 的认识。

### 全概率公式

若事件 $C_1,\ldots,C_K$ 构成互斥且完备的划分：

$$
P(A)=\sum_{k=1}^K P(A\mid C_k)P(C_k).
$$

连续随机变量形式：

$$
p(y)=\int p(y\mid x)p(x)\,dx.
$$

这一积分也称为 **边缘化**，表示消去暂时不关心的变量 $x$。

### 贝叶斯公式

$$
\boxed{
p(x\mid y)=\frac{p(y\mid x)p(x)}{p(y)}
=\frac{p(y\mid x)p(x)}{\int p(y\mid x)p(x)\,dx}.}
$$

其中：

- $p(x)$：先验；
- $p(y\mid x)$：似然；
- $p(y)$：证据或归一化常数；
- $p(x\mid y)$：后验。

可记为：

$$
\text{后验}\propto\text{似然}\times\text{先验}.
$$

### 例：两个孩子问题

假设两个孩子性别独立，四种组合等可能：

$$
\{BB,BG,GB,GG\}.
$$

#### 问法 1：已知至少有一个男孩

排除 $GG$ 后：

$$
P(\text{另一个也是男孩}\mid\text{至少一个男孩})=\frac13.
$$

#### 问法 2：随机看见其中一个孩子，并看见的是男孩

被看见的孩子已确定为男孩，另一个孩子仍以 $1/2$ 概率为女孩：

$$
P(\text{另一个是女孩})=\frac12.
$$

:::TIP
概率问题对信息产生方式非常敏感。题目中“如何得知条件”会改变条件事件，因此可能得到不同答案。
:::

### 例：三门问题

玩家先选一扇门，主持人知道奖品位置，并在剩余门中打开一扇有山羊的门。

- 初选中奖概率：$1/3$；
- 初选错误概率：$2/3$；
- 主持人排除一扇错误门后，原来的 $2/3$ 概率转移到唯一未开的另一扇门。

因此换门中奖概率为：

$$
\frac23.
$$

---

## 联合分布、边缘分布与条件分布

联合分布 $p(x,y)$ 描述两个变量之间完整的统计关系。

### 边缘分布

离散情形：

$$
p_X(x)=\sum_y p(x,y).
$$

连续情形：

$$
p_X(x)=\int p(x,y)\,dy.
$$

### 条件分布

$$
p(x\mid y)=\frac{p(x,y)}{p(y)}.
$$

### 统计推断的基本流程

若联合分布 $p(x,y)$ 已知，并观测到 $Y=y$：

1. 固定观测值 $y$；
2. 由联合分布求 $p(x\mid y)$；
3. 根据任务从后验分布提取结果。

- 连续参数估计常取后验均值；
- 离散类别判决常取后验概率最大的类别。

---

## 从联合分布到估计与判决

### 二进制通信模型

设发送比特

$$
B\in\{-1,+1\},
$$

先验为

$$
P(B=1)=p,\qquad P(B=-1)=1-p.
$$

观测模型为：

$$
Y=aB+W,
\qquad
W\sim\mathcal N(0,\sigma^2).
$$

因此：

$$
p(y\mid B=b)=\mathcal N(y\mid ab,\sigma^2),
$$

联合分布为：

$$
p(y,b)=p(y\mid b)p(b).
$$

### MMSE 估计

希望构造估计器 $\hat B(Y)$，最小化平均均方误差：

$$
R(\hat B)=\mathbb E[(\hat B(Y)-B)^2].
$$

固定 $Y=y$ 后，条件风险为：

$$
\mathbb E[(\hat B(y)-B)^2\mid Y=y].
$$

对 $\hat B(y)$ 求导并令其为 $0$：

$$
\hat B_{\mathrm{MMSE}}(y)=\mathbb E[B\mid Y=y].
$$

因此：

$$
\boxed{\hat X_{\mathrm{MMSE}}(y)=\mathbb E[X\mid Y=y].}
$$

对于 $B\in\{-1,1\}$：

$$
\mathbb E[B\mid y]
=P(B=1\mid y)-P(B=-1\mid y).
$$

### MAP 判决

若目标是直接判决 $B$ 的取值，并使错误概率最小，则选择后验概率最大的类别：

$$
\boxed{
\hat b_{\mathrm{MAP}}(y)=\arg\max_b p(b\mid y).}
$$

利用贝叶斯公式：

$$
p(b\mid y)\propto p(y\mid b)p(b),
$$

所以也可比较：

$$
p(y\mid b)p(b).
$$

### 似然比检验

二分类时：

$$
\frac{p(y\mid B=1)}{p(y\mid B=-1)}
\mathop{\gtrless}_{B=-1}^{B=1}
\frac{P(B=-1)}{P(B=1)}.
$$

取对数后：

$$
\log\frac{p(y\mid B=1)}{p(y\mid B=-1)}
\mathop{\gtrless}_{B=-1}^{B=1}
\log\frac{P(B=-1)}{P(B=1)}.
$$

:::TIP
MMSE 和 MAP 对应不同任务：

- MMSE 输出连续估计值；
- MAP 输出最可能的离散状态或类别。
:::

---

## 最大似然估计

给定独立同分布样本

$$
D=\{x_1,\ldots,x_N\},
$$

模型为 $p(x\mid\theta)$。

似然函数：

$$
L(\theta)=\prod_{n=1}^N p(x_n\mid\theta).
$$

最大似然估计：

$$
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta L(\theta).
$$

由于对数函数单调递增：

$$
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta\sum_{n=1}^N\log p(x_n\mid\theta).
$$

### 例：抛硬币

投掷 $N$ 次出现 $k$ 次正面，正面概率为 $q$：

$$
L(q)=q^k(1-q)^{N-k}.
$$

对数似然：

$$
\ell(q)=k\log q+(N-k)\log(1-q).
$$

令导数为 $0$：

$$
\boxed{\hat q_{\mathrm{ML}}=\frac{k}{N}.}
$$

### 贝叶斯更新：Beta–Bernoulli

若先验

$$
q\sim\operatorname{Beta}(\alpha,\beta),
$$

观测 $N$ 次中有 $k$ 次正面，则后验为：

$$
q\mid D\sim\operatorname{Beta}(\alpha+k,\beta+N-k).
$$

若先验为均匀分布，即 $\alpha=\beta=1$：

$$
q\mid D\sim\operatorname{Beta}(k+1,N-k+1).
$$

后验均值：

$$
\mathbb E[q\mid D]=\frac{k+1}{N+2}.
$$

### MLE 与 KL 散度

经验分布：

$$
p_D(x)=\frac1N\sum_{n=1}^N\delta(x-x_n).
$$

KL 散度：

$$
D_{\mathrm{KL}}(p_D\|q_\theta)
=\mathbb E_{p_D}\left[\log\frac{p_D(x)}{q_\theta(x)}\right].
$$

其中 $\mathbb E_{p_D}[\log p_D(x)]$ 与 $\theta$ 无关，因此：

$$
\arg\min_\theta D_{\mathrm{KL}}(p_D\|q_\theta)
=\arg\max_\theta\frac1N\sum_{n=1}^N\log q_\theta(x_n).
$$

所以：

$$
\boxed{\text{最大似然估计等价于使模型分布最接近经验分布。}}
$$

### 例：均匀分布参数的 MLE

设

$$
p(x\mid a)=\frac{1}{2a}\mathbf 1(x\in[-a,a]),\qquad a>0.
$$

样本全部落入支持区间要求：

$$
a\ge \max_i|x_i|.
$$

在这一约束下：

$$
L(a)=\left(\frac1{2a}\right)^N,
$$

它随 $a$ 增大而减小，因此：

$$
\boxed{\hat a_{\mathrm{ML}}=\max_i|x_i|.}
$$

局限：估计出的支持区间刚好卡住训练样本，稍微超出区间的新样本会被赋予零概率，说明 MLE 在有限数据下可能过于自信。

---

## 矩、协方差与相关性

### 均值与方差

$$
\mathbb E[X]=\int xp(x)\,dx,
$$

$$
\operatorname{Var}(X)
=\mathbb E[(X-\mu)^2]
=\mathbb E[X^2]-\mu^2.
$$

### 协方差

$$
\operatorname{Cov}(X,Y)
=\mathbb E[(X-\mathbb E[X])(Y-\mathbb E[Y])].
$$

等价形式：

$$
\operatorname{Cov}(X,Y)
=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].
$$

### 相关系数

$$
\rho_{XY}
=\frac{\operatorname{Cov}(X,Y)}
{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}.
$$

且：

$$
-1\le \rho_{XY}\le 1.
$$

### 独立与不相关

若 $X,Y$ 独立，则：

$$
\operatorname{Cov}(X,Y)=0.
$$

反方向一般不成立。

#### 例 1：$Y=X^2$

设

$$
X\sim U(-1,1),\qquad Y=X^2.
$$

由于分布关于零对称：

$$
\mathbb E[X]=0,\qquad \mathbb E[X^3]=0.
$$

所以：

$$
\operatorname{Cov}(X,Y)
=\mathbb E[X^3]-\mathbb E[X]\mathbb E[X^2]=0.
$$

但 $Y$ 由 $X$ 完全决定，因此二者显然不独立。

#### 例 2：边缘均为高斯，但联合不为高斯

设

$$
X\sim\mathcal N(0,1),
$$

$W$ 与 $X$ 独立，且

$$
P(W=1)=P(W=-1)=\frac12,
$$

令

$$
Y=WX.
$$

则无论 $W=1$ 还是 $W=-1$：

$$
Y\sim\mathcal N(0,1).
$$

并且：

$$
\operatorname{Cov}(X,Y)=\mathbb E[WX^2]=\mathbb E[W]\mathbb E[X^2]=0.
$$

但 $|Y|=|X|$，二者并不独立，且联合分布不是二维高斯。

:::WARNING
只有在联合高斯的前提下，零协方差才可推出独立。
:::

---

## 多元高斯分布

### 定义

若 $X\in\mathbb R^d$：

$$
X\sim\mathcal N(\mu,\Sigma),
$$

其密度为：

$$
p(x)=\frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}}
\exp\left[-\frac12(x-\mu)^T\Sigma^{-1}(x-\mu)\right].
$$

其中：

- $\mu=\mathbb E[X]$；
- $\Sigma=\mathbb E[(X-\mu)(X-\mu)^T]$；
- $\Sigma$ 必须对称半正定；
- $\Sigma^{-1}$ 称为精度矩阵。

### 几何意义

等密度曲线满足：

$$
(x-\mu)^T\Sigma^{-1}(x-\mu)=c.
$$

二维时是椭圆：

- 特征向量决定主轴方向；
- 特征值决定主轴长度；
- 协方差非零时，椭圆发生旋转。

> **图片占位符**：插入二维高斯等密度椭圆图，标注均值、主轴和相关系数。

### 二元高斯

设

$$
X=\begin{bmatrix}X_1\\X_2\end{bmatrix},
\qquad
\mu=\begin{bmatrix}\mu_1\\\mu_2\end{bmatrix},
$$

$$
\Sigma=
\begin{bmatrix}
\sigma_1^2 & \rho\sigma_1\sigma_2\\
\rho\sigma_1\sigma_2 & \sigma_2^2
\end{bmatrix}.
$$

则：

$$
|\Sigma|=\sigma_1^2\sigma_2^2(1-\rho^2),
$$

$$
\Sigma^{-1}
=\frac{1}{1-\rho^2}
\begin{bmatrix}
1/\sigma_1^2 & -\rho/(\sigma_1\sigma_2)\\
-\rho/(\sigma_1\sigma_2) & 1/\sigma_2^2
\end{bmatrix}.
$$

因此密度为：

$$
\begin{aligned}
p(x_1,x_2)
&=\frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}\\
&\quad\times\exp\left\{-\frac{1}{2(1-\rho^2)}
\left[
\frac{(x_1-\mu_1)^2}{\sigma_1^2}
+\frac{(x_2-\mu_2)^2}{\sigma_2^2}
-\frac{2\rho(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2}
\right]\right\}.
\end{aligned}
$$

### 边缘分布

多元高斯的任意子向量仍为高斯。

对于二元高斯：

$$
X_1\sim\mathcal N(\mu_1,\sigma_1^2),
\qquad
X_2\sim\mathcal N(\mu_2,\sigma_2^2).
$$

### 条件分布

二元高斯中：

$$
\boxed{
X_2\mid X_1=x_1
\sim
\mathcal N\left(
\mu_2+\rho\frac{\sigma_2}{\sigma_1}(x_1-\mu_1),
\sigma_2^2(1-\rho^2)
\right).}
$$

含义：

- 条件均值随观测 $x_1$ 线性变化；
- 条件方差小于等于原方差；
- $|\rho|$ 越大，观测 $X_1$ 后对 $X_2$ 的不确定性降低越明显。

若 $\sigma_1=\sigma_2=1$：

$$
X_2\mid X_1=x_1
\sim\mathcal N\left(\mu_2+\rho(x_1-\mu_1),1-\rho^2\right).
$$

### 高斯变量的线性变换

若

$$
X\sim\mathcal N(\mu,\Sigma),
\qquad
Y=CX+a,
$$

则：

$$
\boxed{Y\sim\mathcal N(C\mu+a,C\Sigma C^T).}
$$

考试中应能直接计算变换后的均值和协方差。

---

## 线性高斯模型

### 一维测量模型

设未知量先验为：

$$
X\sim\mathcal N(\mu,\sigma^2),
$$

测量模型为：

$$
Y=X+W,
\qquad
W\sim\mathcal N(0,\sigma_w^2),
$$

且 $X$ 与 $W$ 独立。

似然函数：

$$
p(y\mid x)
=\frac{1}{\sqrt{2\pi\sigma_w^2}}
\exp\left[-\frac{(y-x)^2}{2\sigma_w^2}\right].
$$

### 后验分布

由

$$
p(x\mid y)\propto p(x)p(y\mid x)
$$

并对指数中的 $x$ 配方，可得：

$$
X\mid Y=y\sim\mathcal N(\mu_{\mathrm{post}},\sigma_{\mathrm{post}}^2),
$$

其中精度相加：

$$
\boxed{
\frac{1}{\sigma_{\mathrm{post}}^2}
=\frac{1}{\sigma^2}+\frac{1}{\sigma_w^2}.}
$$

因此：

$$
\boxed{
\sigma_{\mathrm{post}}^2
=\frac{\sigma^2\sigma_w^2}{\sigma^2+\sigma_w^2}.}
$$

后验均值：

$$
\boxed{
\mu_{\mathrm{post}}
=\sigma_{\mathrm{post}}^2
\left(\frac{\mu}{\sigma^2}+frac{y}{\sigma_w^2}\right)
=\frac{\sigma_w^2}{\sigma^2+\sigma_w^2}\mu
+\frac{\sigma^2}{\sigma^2+\sigma_w^2}y.}
$$

这说明后验均值是先验均值与测量值的加权平均：

- 先验方差越小，越相信先验；
- 噪声方差越小，越相信测量。

### 后验方差的意义

有：

$$
\sigma_{\mathrm{post}}^2\le \sigma^2,
\qquad
\sigma_{\mathrm{post}}^2\le \sigma_w^2.
$$

因此融合先验与测量后，不确定性小于单独使用任一信息源。

在真实模型匹配时：

$$
\mathbb E[(X-\mu_{\mathrm{post}})^2\mid Y=y]
=\sigma_{\mathrm{post}}^2.
$$

### 多传感器融合

若有多个独立测量：

$$
y_i=\mu+w_i,
\qquad
w_i\sim\mathcal N(0,\sigma_i^2),
$$

采用无信息先验，则后验精度为各测量精度之和：

$$
\frac{1}{\sigma_{\mathrm{post}}^2}
=\sum_i\frac{1}{\sigma_i^2}.
$$

后验均值为精度加权平均：

$$
\mu_{\mathrm{post}}
=\frac{\sum_i y_i/\sigma_i^2}
{\sum_i 1/\sigma_i^2}.
$$

方差越小的传感器权重越大。

### 先验失配

若真实先验为

$$
X\sim\mathcal N(\mu,\sigma^2),
$$

但使用了错误先验

$$
X\sim\mathcal N(\mu_{\mathrm{mis}},\sigma_{\mathrm{mis}}^2),
$$

则得到的后验均值为：

$$
\mu_{\mathrm{mis,post}}
=\frac{\sigma_w^2}{\sigma_{\mathrm{mis}}^2+\sigma_w^2}\mu_{\mathrm{mis}}
+\frac{\sigma_{\mathrm{mis}}^2}{\sigma_{\mathrm{mis}}^2+\sigma_w^2}y.
$$

相对于真实后验均值 $\mu_{\mathrm{post}}$：

$$
\mathbb E[(X-\mu_{\mathrm{mis,post}})^2\mid Y=y]
=\sigma_{\mathrm{post}}^2
+(\mu_{\mathrm{mis,post}}-\mu_{\mathrm{post}})^2.
$$

第二项是先验失配造成的附加误差。

> 贝叶斯方法依赖模型与先验质量。错误且过于自信的先验可能使估计效果比只用观测更差。

---

## 指数分布族

本节只保留理解后续内容所需的基本概念。

若概率分布可以写成：

$$
p(x\mid\eta)
=h(x)\exp\left[\eta^TT(x)-A(\eta)\right],
$$

则称其属于指数分布族。

- $h(x)$：基测度；
- $T(x)$：充分统计量；
- $\eta$：自然参数；
- $A(\eta)$：对数配分函数。

常见的 Bernoulli、Categorical、Poisson、Gamma 和 Gaussian 分布都可以写成指数族形式。

指数族的重要性：

- 许多常见分布可以用统一形式表示；
- 适当选择先验时，后验仍属于同一分布族，便于递推；
- 统计推断中常只需传递有限维参数，如高斯分布的均值和协方差。

:::TIP
本章复习以“认识统一形式和作用”为主，无需展开最大熵、一般指数族定理等长推导。
:::

---

## 本章考法与公式地图

### 重点题型

#### 1. 条件概率与贝叶斯公式

- 正确识别条件事件；
- 写出先验、似然和证据；
- 注意题目信息的产生方式。

#### 2. 一维变量变换

流程：

$$
y=g(x)
\Rightarrow x=g^{-1}(y)
\Rightarrow
p_Y(y)=p_X(g^{-1}(y))\left|\frac{dx}{dy}\right|.
$$

非单调时要对所有原像求和。

#### 3. MLE

$$
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta\sum_{n=1}^N\log p(x_n\mid\theta).
$$

注意支持集可能依赖参数，如均匀分布的 MLE。

#### 4. 联合、边缘与后验

$$
p(x,y)=p(y\mid x)p(x),
$$

$$
p(y)=\int p(y\mid x)p(x)\,dx,
$$

$$
p(x\mid y)=\frac{p(y\mid x)p(x)}{p(y)}.
$$

#### 5. MMSE 与 MAP

$$
\hat x_{\mathrm{MMSE}}(y)=\mathbb E[X\mid y],
$$

$$
\hat x_{\mathrm{MAP}}(y)=\arg\max_x p(x\mid y).
$$

#### 6. 二元高斯条件分布

$$
X_2\mid X_1=x_1
\sim\mathcal N\left(
\mu_2+\rho\frac{\sigma_2}{\sigma_1}(x_1-\mu_1),
\sigma_2^2(1-\rho^2)
\right).
$$

#### 7. 一维线性高斯融合

$$
\frac1{\sigma_{\mathrm{post}}^2}
=\frac1{\sigma^2}+\frac1{\sigma_w^2},
$$

$$
\mu_{\mathrm{post}}
=\sigma_{\mathrm{post}}^2
\left(\frac\mu{\sigma^2}+\frac y{\sigma_w^2}\right).
$$

### 易错点

1. 把概率密度值当成概率；
2. 忘记条件事件的产生方式；
3. 变量变换时漏掉绝对值或漏掉多个原像；
4. 求边缘分布时积分变量写错；
5. 把不相关误认为独立；
6. 高斯条件均值与条件方差公式中下标混乱；
7. 配方求后验时漏掉一次项；
8. 把后验方差误认为先验失配情况下的真实 MSE。

### 复习优先级

**第一优先级**：

- 贝叶斯公式；
- 联合、边缘、条件分布；
- MMSE 与 MAP；
- 二元高斯条件分布；
- 一维线性高斯后验。

**第二优先级**：

- 一维变量变换；
- MLE 与 KL 的联系；
- 协方差、不相关与独立；
- Beta–Bernoulli 更新。

**理解即可**：

- 海洋声传播背景的具体参数；
- 高维随机向量的一般公式推导；
- 多维雅可比的复杂计算；
- 指数族的最大熵推导；
- 各类一般散度和马尔可夫链的扩展内容。

---

## 总结

本章可以归结为一条推断链：

$$
\boxed{
\text{建立概率模型}
\rightarrow
\text{写出联合分布}
\rightarrow
\text{边缘化与条件化}
\rightarrow
\text{得到后验分布}
\rightarrow
\text{完成估计或判决}.}
$$

复习时不必平均用力。优先练熟一维、二维概率计算和高斯模型，尤其要掌握从先验与似然得到后验，以及从后验得到 MMSE 估计或 MAP 判决的完整过程。
