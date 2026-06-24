---
title: Introduction and Probability Theory
published: 2026-06-09
description: 海洋人工智能问题背景、学习与归纳、概率空间、随机变量变换、贝叶斯推断、高斯模型、指数族、马尔可夫链与散度度量
tags: [海洋人工智能基础]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 面对含有噪声、数据有限且环境复杂的海洋问题，先用概率分布描述不确定性，再根据观测更新分布，最后完成估计、判决、预测与控制。

贯穿本章的主线可以写成：

$$
\boxed{
\text{联合分布 }p(x,y)
\longrightarrow
\text{边缘分布 }p(y)
\longrightarrow
\text{后验分布 }p(x\mid y)
\longrightarrow
\begin{cases}
\mathbb E[X\mid Y=y], & \text{估计}\\[2mm]
\arg\max_x p(x\mid y), & \text{判决}
\end{cases}}
$$

其中：

- **联合分布**描述变量之间的完整统计关系；
- **边缘化**消去暂时不关心的变量；
- **条件化 / 贝叶斯更新**把观测信息融入原有知识；
- **后验均值**是均方误差意义下的最优估计；
- **后验众数**对应最大后验概率判决，在 $0$-$1$ 损失下使错误概率最小。

本章内容可以分为四层：

1. **问题背景**：海洋传播、信号处理与人工智能任务；
2. **概率语言**：概率空间、随机变量、分布与变量变换；
3. **统计推断**：条件概率、贝叶斯公式、MLE、MMSE、MAP；
4. **结构化模型**：多元高斯、线性高斯、指数族、马尔可夫链与散度。

:::WARNING
本章公式很多，但真正需要反复掌握的动作只有四个：

1. 写出联合分布；
2. 对无关变量求和或积分；
3. 用贝叶斯公式得到后验分布；
4. 根据损失函数从后验分布中提取估计或判决。
:::

---

## 目录

- [概述](#概述)
- [目录](#目录)
- [海洋人工智能的问题背景](#海洋人工智能的问题背景)
  - [海洋信息处理的统一模型](#海洋信息处理的统一模型)
  - [海洋通信与陆地无线通信的差异](#海洋通信与陆地无线通信的差异)
  - [海洋声速与声场传播](#海洋声速与声场传播)
  - [人工智能能够提升什么](#人工智能能够提升什么)
  - [动态规划与强化学习](#动态规划与强化学习)
- [人工智能与学习](#人工智能与学习)
  - [人工智能的基本任务](#人工智能的基本任务)
  - [稳健、高效与生成过程](#稳健高效与生成过程)
  - [记忆、归纳与泛化](#记忆归纳与泛化)
  - [先验知识与归纳偏置](#先验知识与归纳偏置)
- [概率为何是机器学习的核心工具](#概率为何是机器学习的核心工具)
  - [频率学派与贝叶斯学派](#频率学派与贝叶斯学派)
  - [抛硬币：MLE 与贝叶斯更新](#抛硬币mle-与贝叶斯更新)
  - [从不确定性中提取确定性](#从不确定性中提取确定性)
  - [高维高斯的薄壳现象](#高维高斯的薄壳现象)
- [概率空间与随机变量](#概率空间与随机变量)
  - [概率空间](#概率空间)
  - [概率公理与常用结论](#概率公理与常用结论)
  - [随机变量](#随机变量)
  - [离散型随机变量](#离散型随机变量)
  - [连续型随机变量](#连续型随机变量)
- [随机变量的函数与变量变换](#随机变量的函数与变量变换)
  - [CDF 法](#cdf-法)
  - [随机变量的和与比](#随机变量的和与比)
  - [一维单调变换](#一维单调变换)
  - [多分支变换](#多分支变换)
  - [随机向量的变换](#随机向量的变换)
  - [蒙特卡罗近似](#蒙特卡罗近似)
  - [概率积分变换](#概率积分变换)
- [条件概率、全概率与贝叶斯定理](#条件概率全概率与贝叶斯定理)
  - [条件概率与乘积规则](#条件概率与乘积规则)
  - [独立性](#独立性)
  - [全概率公式](#全概率公式)
  - [贝叶斯定理](#贝叶斯定理)
  - [两点先验的观测边缘分布](#两点先验的观测边缘分布)
  - [Spike-and-slab 先验的 MMSE](#spike-and-slab-先验的-mmse)
  - [边缘化与隐变量](#边缘化与隐变量)
- [从联合分布到估计与判决](#从联合分布到估计与判决)
  - [二进制通信模型](#二进制通信模型)
  - [MMSE 估计](#mmse-估计)
  - [MAP 判决](#map-判决)
  - [似然比检验](#似然比检验)
- [最大似然估计](#最大似然估计)
  - [似然函数与对数似然](#似然函数与对数似然)
  - [MLE 与经验 KL 散度](#mle-与经验-kl-散度)
  - [均匀分布参数估计](#均匀分布参数估计)
- [常用概率分布](#常用概率分布)
  - [离散分布](#离散分布)
    - [Categorical 分布](#categorical-分布)
  - [连续分布](#连续分布)
  - [分布选择与损失函数](#分布选择与损失函数)
- [矩、协方差与相关性](#矩协方差与相关性)
  - [均值与协方差](#均值与协方差)
  - [相关系数](#相关系数)
  - [不相关不推出独立](#不相关不推出独立)
  - [马氏距离](#马氏距离)
- [多元高斯分布](#多元高斯分布)
  - [定义与几何意义](#定义与几何意义)
  - [二元高斯分布](#二元高斯分布)
  - [高斯分布的边缘分布](#高斯分布的边缘分布)
  - [高斯分布的条件分布](#高斯分布的条件分布)
  - [协方差形式与精度矩阵形式](#协方差形式与精度矩阵形式)
- [线性高斯系统](#线性高斯系统)
  - [模型与联合分布](#模型与联合分布)
  - [后验分布](#后验分布)
  - [边缘分布](#边缘分布)
  - [一维高斯测量融合](#一维高斯测量融合)
  - [多传感器融合](#多传感器融合)
  - [先验失配](#先验失配)
- [指数分布族](#指数分布族)
  - [标准形式](#标准形式)
  - [对数配分函数](#对数配分函数)
  - [充分统计量与最大似然](#充分统计量与最大似然)
  - [最大熵与指数族](#最大熵与指数族)
- [马尔可夫链](#马尔可夫链)
  - [马尔可夫性质](#马尔可夫性质)
  - [联合分布分解](#联合分布分解)
  - [转移矩阵与 Chapman–Kolmogorov 方程](#转移矩阵与-chapmankolmogorov-方程)
  - [平稳分布与全局平衡](#平稳分布与全局平衡)
- [散度度量](#散度度量)
  - [f-divergence](#f-divergence)
  - [信息熵](#信息熵)
  - [KL 散度](#kl-散度)
  - [KL 散度的性质](#kl-散度的性质)
  - [正向 KL 与反向 KL](#正向-kl-与反向-kl)
  - [KL、估计与贝叶斯推断](#kl估计与贝叶斯推断)
- [本章考法与易错点](#本章考法与易错点)
- [公式地图](#公式地图)
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
- $y(t)$：接收信号；
- $\otimes$：卷积，表示信号经过线性时不变信道后的传播结果。

从这一模型出发，主要问题包括：

- **通信问题**：已知或估计 $h(t)$，由 $y(t)$ 恢复 $s(t)$；
- **感知问题**：已知 $s(t)$，由 $y(t)$ 估计 $h(t)$，进而判断目标或环境参数；
- **噪声抑制**：从混有 $w(t)$ 的观测中恢复有效信息；
- **波形设计**：选择更有利于传输或探测的 $s(t)$。

对应三类技术路线：

1. **基于模型的方法**：先建立传播与测量模型，再进行参数估计、检测和优化；
2. **基于数据的方法**：从数据中直接学习输入到输出的映射，如深度学习；
3. **模型—数据双驱动方法**：把物理生成模型、测量模型与数据学习结合起来。

> **图片占位符（上课 PPT 第 5 页）**：插入“发射信号—信道—噪声—接收信号”的海洋信息处理框图，并标注模型驱动、数据驱动和模型—数据双驱动三条路线。

:::TIP
海洋人工智能的关键任务可以概括为：

> 用物理模型限定合理解空间，用数据弥补模型不完备，再用概率推断处理噪声和未知量。
:::

### 海洋通信与陆地无线通信的差异

陆地无线通信主要依靠电磁波，水下远距离通信主要依靠声波。二者在物理传播上有几个关键差异。

#### 传播速度与多普勒效应

- 电磁波传播速度约为 $3\times 10^8\ \mathrm{m/s}$；
- 海水中的声速约为 $1500\ \mathrm{m/s}$。

若两个水下平台的相对速度约为 $30$ 节：

$$
30\ \text{knots}\approx 15\ \mathrm{m/s},
$$

则相对速度与声速之比约为：

$$
\frac{v}{c}\approx \frac{15}{1500}=1\%.
$$

这一比例已经足以造成明显的多普勒伸缩：

- 载波频率发生偏移；
- 基带波形也会被时间压缩或拉伸；
- 符号同步和信道估计更加困难。

在陆地无线系统中，即使平台高速运动，$v/c$ 通常仍极小，多普勒影响更多体现为载波频移，对基带时长的相对改变较弱。

#### 声速的空间变化

电磁波在空气中的传播速度近似稳定。海水声速受以下因素影响：

- 温度 $T$；
- 盐度 $S$；
- 深度或压力 $z$。

因此，海洋声速随位置变化，声线会发生弯折，并形成传播聚焦区与声影区。

#### 天然波导与多径

海面与海底构成天然边界：

- 海面通常具有较强反射；
- 海底反射强度与底质软硬、粗糙度和沉积物性质有关；
- 同一信号可沿直达、海面反射、海底反射和折射等多条路径到达接收端。

多径会造成：

- 时延扩展；
- 频率选择性衰落；
- 波形叠加与符号间干扰；
- 接收信号随位置发生强烈起伏。

### 海洋声速与声场传播

经验声速公式为：

$$
\begin{aligned}
c={}&1449.2+4.6T-0.055T^2+0.00029T^3\\
&+(1.34-0.01T)(S-35)+0.016z,
\end{aligned}
$$

其中：

- $c$：声速，单位 $\mathrm{m/s}$；
- $T$：温度，单位 $^\circ\mathrm C$；
- $S$：盐度，单位为千分比；
- $z$：深度，单位 $\mathrm m$。

声速剖面中常见结构包括：

- **Surface duct profile**：表面波导剖面，通常位于混合层；
- **Main thermocline**：主温跃层，温度随深度快速降低；
- **Deep sound channel axis**：深海声道轴，声速达到局部极小值；
- **Deep isothermal layer**：深等温层；
- **Polar region profile**：极地声速剖面。

根据斯涅尔定律，声线总向**低声速区域**弯折。高频声波常用几何声学的声线模型描述；低频声波的波动性更强，通常需要求解波动方程。

> **图片占位符（上课 PPT 第 11–12 页）**：插入典型声速剖面与声线弯折示意图，突出“声线向低声速方向弯折”。

常见传播形态：

#### 深海近场传播

近距离传播中，直达声与海面反射声会叠加。两条路径的程差随距离变化，接收损失曲线可出现周期性起伏与干涉零点。

#### 汇聚区传播

声线经深海折射后会在远距离重新汇聚，形成能量较强的 **convergence zone**。汇聚区之间则可能存在能量较弱的区域。

#### 深海声道传播

当声源位于深海声道轴附近，声线会围绕声道轴反复折射，较少与海面、海底接触，因此适合超远距离传播。

#### 表面波导传播

若上层海水构成表面波导，声能可被限制在近海面区域传播；波导之外可能形成明显的声影区。低于某一截止频率时，波导约束能力会下降。

#### 极地传播

极地海水的特殊声速结构会使声线靠近冰层传播。粗糙冰底会带来散射损失。

#### 浅海传播

浅海中几乎所有传播路径都会频繁碰撞海面与海底，长距离传播常由海底损失、海面散射和多径共同控制。

> **图片占位符（上课 PPT 第 13–18 页）**：依次插入深海近场、汇聚区、深海声道、表面波导、极地与浅海传播图。建议排成两列，并在图下注明声源深度与主要传播机制。

### 人工智能能够提升什么

海洋装备的目标包括：

- **通信**：更高通信速率、更低误比特率、更强持续可通能力；
- **声呐**：探测更远、分辨率更高、隐蔽性更好；
- **系统层面**：算法、传感器、采样精度与算力协同设计。

仅提高算法复杂度未必能够带来系统性能提升。海洋人工智能更强调：

- 物理传播规律；
- 数据数量与质量；
- 传感器和计算硬件限制；
- 任务损失函数；
- 可靠性与可解释性。

这形成了**软硬件联合设计**的问题。

### 动态规划与强化学习

对具有多个阶段、状态会随决策变化的问题，可用动态规划建模。

设第 $k$ 阶段：

- 状态为 $x_k$；
- 控制为 $u_k$；
- 确定性状态转移为

$$
x_{k+1}=f_k(x_k,u_k);
$$

- 阶段代价为 $g_k(x_k,u_k)$；
- 终端代价为 $g_N(x_N)$。

总成本：

$$
J(x_0;u_0,\ldots,u_{N-1})
=\sum_{k=0}^{N-1}g_k(x_k,u_k)+g_N(x_N).
$$

从阶段 $k$ 开始的 cost-to-go：

$$
J_k(x_k;u_k,\ldots,u_{N-1})
=\sum_{m=k}^{N-1}g_m(x_m,u_m)+g_N(x_N).
$$

Bellman 递推为：

$$
J_N^*(x_N)=g_N(x_N),
$$

$$
J_k^*(x_k)
=\min_{u_k\in U_k(x_k)}
\left[g_k(x_k,u_k)+J_{k+1}^*\bigl(f_k(x_k,u_k)\bigr)\right].
$$

最优控制：

$$
u_k^*
=\arg\min_{u_k\in U_k(x_k)}
\left[g_k(x_k,u_k)+J_{k+1}^*\bigl(f_k(x_k,u_k)\bigr)\right].
$$

动态规划依赖已知模型 $f_k$ 与 $g_k$。强化学习常借助交互数据近似价值函数与最优策略，适合模型未知或难以准确求解的场景。

:::EXAMPLE
**例：两局制比赛策略**

玩家有两种打法：

- 保守打法：平局概率 $p_d=0.9$，输局概率 $0.1$；
- 强悍打法：赢局概率 $p_w=0.45$，输局概率 $0.55$。

两局后若总分 $1:1$，比赛进入“率先领先即结束”的突然死亡阶段。

**1. 突然死亡阶段**

保守打法只有平或输，无法主动取得领先；采用强悍打法时，下一局以 $0.45$ 的概率直接获胜。因此：

$$
V_{\mathrm{SD}}=0.45.
$$

**2. 第二局前领先 $1$ 分**

保守打法：

$$
V_{+1}^{(d)}=0.9\times1+0.1\times0.45=0.945.
$$

强悍打法：

$$
V_{+1}^{(w)}=0.45\times1+0.55\times0.45=0.6975.
$$

因此领先时采用保守打法。

**3. 第二局前打平**

强悍打法的获胜概率为 $0.45$；保守打法只能以 $0.9$ 的概率进入突然死亡：

$$
V_0^{(d)}=0.9\times0.45=0.405.
$$

因此打平时采用强悍打法，$V_0=0.45$。

**4. 第二局前落后 $1$ 分**

必须先赢一局进入突然死亡：

$$
V_{-1}=0.45\times0.45=0.2025.
$$

**5. 第一局选择**

第一局采用强悍打法：

$$
V^{(w)}=0.45\times0.945+0.55\times0.2025=0.536625.
$$

第一局采用保守打法：

$$
V^{(d)}=0.9\times0.45+0.1\times0.2025=0.42525.
$$

故最优策略为：

- 第一局采用强悍打法；
- 领先时转为保守打法；
- 打平或落后时继续采用强悍打法；
- 突然死亡阶段采用强悍打法。

最终获胜概率为：

$$
\boxed{0.536625>0.5}.
$$
:::

---

## 人工智能与学习

### 人工智能的基本任务

> “Intelligence is not just about pattern recognition and function approximation. It’s about modeling the world.”  
> —— Josh Tenenbaum, NeurIPS 2021

当前大量机器学习模型可写为：

$$
f:\mathcal X\rightarrow\mathcal Y,
$$

即学习从输入到输出的映射。当输入和输出位于图像、文本、图、时间序列或动作序列等高维空间时，映射本身可能非常复杂。

人工智能中的主要任务包括：

1. **预测（prediction）**：分类、回归；
2. **生成（generation）**：生成图像、文本、声音或海洋场数据；
3. **发现（discovery）**：聚类、异常检测、寻找有意义结构；
4. **控制（control）**：多阶段决策、最优控制与强化学习。

对于一维映射，这类方法常呈现为曲线拟合；Judea Pearl 曾将只关注输入—输出关联的系统概括为 “glorified curve fitting”。单纯拟合可观测输入与输出，可能忽略观测背后的结构。更强的智能系统还需要描述数据如何产生、变量如何相互作用，以及环境变化后哪些规律仍然成立。

### 稳健、高效与生成过程

好的系统应同时具备：

- **稳健性（robustness）**：新数据分布变化后仍能工作；
- **高效性（efficiency）**：在海洋数据稀缺的情况下，也能用较少样本完成推断；
- **计算效率**：训练和推断成本可接受；
- **结构理解**：能够利用物理规律、因果关系和变量依赖。

为此，需要寻找对数据生成过程的**简约表示（parsimonious representation）**：

- 使用尽量少的关键变量和结构解释数据；
- 把稳定规律嵌入模型；
- 减少对大规模标注数据的依赖。

### 记忆、归纳与泛化

只记住训练样本并不构成充分的学习能力。

#### 老鼠的饵怯现象

老鼠遇到气味或外观新颖的食物时，会先少量尝试。若随后出现不适，它会在未来回避具有相似气味或外观的食物。

这里包含：

- 记忆过去经历；
- 抽取食物特征；
- 对未见过但相似的新食物进行判断。

#### 垃圾邮件分类

一种简单方法是记住所有被标记为垃圾邮件的发件地址。新邮件若来自相同地址，就放入垃圾箱。

这一方法的问题是：

- 无法处理新地址；
- 无法利用关键词、语义和邮件结构；
- 训练集表现好，泛化能力弱。

更好的学习者会从已知样本中归纳规律，并把规律应用于新样本。这一过程称为 **inductive reasoning / inductive inference（归纳推理 / 归纳推断）**。

> **图片占位符（上课 PPT 第 25–26 页）**：插入“老鼠饵怯现象”和“垃圾邮件分类”示意图，用箭头展示“经验—提取规律—判断新样本”。

### 先验知识与归纳偏置

#### 迷信的鸽子

实验中，食物按固定时间间隔自动投放，与鸽子的动作无关。鸽子在食物落下前偶然进行转圈、跳动等动作，随后可能错误地把动作与食物到来建立因果联系，并重复该动作。

这说明：

- 数据中出现相关性，不代表存在因果关系；
- 若模型接受任意解释，容易从偶然现象中学习伪规律；
- 学习需要合理的先验约束。

#### 老鼠为何更容易学对

老鼠天然倾向于把食物安全与味道、气味关联，却不容易把食物与电击或声音关联。这种倾向相当于先验知识或归纳偏置：

- 对可能具有因果关系的变量赋予更高关注；
- 排除大量不合理假设；
- 提高有限数据下的泛化能力。

:::TIP
**归纳偏置（inductive bias）**指学习算法在多个都能解释训练数据的假设之间所采用的偏好。

没有归纳偏置，有限数据通常无法唯一确定模型；偏置错误，则可能稳定地学到错误规律。
:::

> **图片占位符（上课 PPT 第 27–28 页）**：插入“迷信的鸽子”与“老鼠选择性条件反射”图，突出相关性、因果性和先验知识三者的区别。

---

## 概率为何是机器学习的核心工具

概率论用于量化和操作不确定性。机器学习中的不确定性主要来自：

- 数据数量有限；
- 测量噪声与环境扰动；
- 隐变量无法直接观测；
- 模型只能近似真实过程；
- 训练分布与实际分布存在偏移。

概率模型的价值在于：

- 给出预测值及其可信程度；
- 融合先验知识与新观测；
- 在风险和代价不同的情况下制定决策；
- 从大量随机现象中提取稳定规律。

### 频率学派与贝叶斯学派

对“硬币正面朝上的概率为 $0.5$”可以有两种理解。

#### 频率学派（frequentist view）

概率描述事件在大量重复实验中的长期频率。硬币独立投掷次数足够多时，正面比例会接近 $0.5$。

在频率学派中：

- 模型参数通常被视为固定但未知的常数；
- 数据具有随机性；
- 通过样本构造参数估计与置信区间。

#### 贝叶斯学派（Bayesian view）

概率描述在现有信息下的信念或不确定程度。它可以用于难以重复发生的事件，例如：

- 某一特定年份北极冰盖是否达到某一状态；
- 一封新邮件属于垃圾邮件的概率；
- 雷达或声呐屏幕上的观测来自鸟、飞机、舰船或噪声的概率；
- 某海洋参数在给定测量后的可能取值分布。

在贝叶斯框架中：

- 未知参数也可建模为随机变量；
- **先验分布**描述观测前的不确定性；
- **似然函数**描述参数给定时观测数据的生成规律；
- **后验分布**描述结合数据后的不确定性。

两种解释对概率含义的理解不同，但都遵循相同的概率运算规则。

### 抛硬币：MLE 与贝叶斯更新

设硬币正面概率为 $q$，独立投掷 $N$ 次，观察到 $k$ 次正面。

#### 频率学派：最大似然估计

忽略与 $q$ 无关的组合系数，似然函数为：

$$
L(q)=q^k(1-q)^{N-k}.
$$

对数似然为：

$$
\ell(q)=k\log q+(N-k)\log(1-q).
$$

求导并令其为 $0$：

$$
\frac{k}{q}-\frac{N-k}{1-q}=0,
$$

得到：

$$
\boxed{\hat q_{\mathrm{ML}}=\frac{k}{N}}.
$$

#### 贝叶斯学派：后验分布

令先验为均匀分布：

$$
p(q)=\mathrm{Beta}(q\mid1,1),\qquad 0<q<1.
$$

数据事件记为 $E$，则：

$$
p(E\mid q)\propto q^k(1-q)^{N-k}.
$$

根据贝叶斯公式：

$$
p(q\mid E)
=\frac{p(q)p(E\mid q)}{\int_0^1p(q)p(E\mid q)\,dq}
\propto q^k(1-q)^{N-k}.
$$

因此：

$$
\boxed{q\mid E\sim\mathrm{Beta}(k+1,N-k+1)}.
$$

后验均值：

$$
\mathbb E[q\mid E]=\frac{k+1}{N+2}.
$$

后验方差：

$$
\operatorname{Var}(q\mid E)
=\frac{(k+1)(N-k+1)}{(N+2)^2(N+3)}.
$$

随着 $N$ 增大：

- 后验均值逐渐接近样本频率 $k/N$；
- 后验方差逐渐减小；
- 数据对推断的影响逐渐超过初始先验。

### 从不确定性中提取确定性

单次随机实验的结果无法提前确定，大量独立重复实验却会呈现稳定结构。

例如，若公平硬币投掷 $1000$ 次，正面次数的期望为 $500$。正面次数远离 $500$ 很多的概率极小。因此，虽然每次结果都随机，整体频率高度稳定。

这种现象体现在：

- **大数定律**：样本均值趋近总体均值；
- **概率分布**：大量试验形成稳定的频率形状；
- **参数估计**：数据越多，参数的不确定范围通常越小；
- **编码与通信**：单个比特可能出错，通过大量比特上的冗余结构可将整体差错率降得很低；
- **贝叶斯更新**：观测不断到来时，后验分布通常逐渐集中。

通信系统中，每个符号可能以一定概率出错。编码器在信息比特中加入冗余约束，译码器利用整体结构进行判决，可以把最终错误概率降低到 $10^{-6}$、$10^{-10}$ 等很小的量级。

这里包含两个层次：

1. **性能边界**：理论上最少需要多少冗余、最多能够达到多高的可靠性；
2. **实现方法**：怎样用可承受的计算复杂度逼近理论边界。

穷举所有码字可以给出概念上的最优判决，但复杂度常呈指数增长。概率图模型、消息传递和迭代译码等方法利用结构降低计算量。

### 高维高斯的薄壳现象

设：

$$
X_1,\ldots,X_n\overset{\mathrm{i.i.d.}}{\sim}\mathcal N(0,1).
$$

由大数定律：

$$
\frac{1}{n}\sum_{i=1}^nX_i^2
\xrightarrow[]{\text{概率}}\mathbb E[X_i^2]=1.
$$

所以：

$$
\|X\|^2=\sum_{i=1}^nX_i^2\approx n,
\qquad
\|X\|\approx\sqrt n.
$$

当 $n=100$ 时，样本大多集中在半径约为 $10$ 的薄球壳附近。

:::WARNING
标准多元高斯密度在原点取得最大值，但高维样本并不会大量聚集在原点附近。

原因是：

- **密度值**衡量某一点附近单位体积内的概率；
- **概率质量**还要乘以该半径处巨大的体积。

高维空间中，体积效应使大部分概率质量集中在薄壳上。这是“密度最高位置”和“样本最常出现区域”之间的重要区别。
:::

这一现象说明，高维空间会出现违背低维直觉的几何结构，也是机器学习中集中现象、典型集和高维统计的基础。

---

## 概率空间与随机变量

### 概率空间

概率空间定义为三元组：

$$
(\Omega,\mathcal F,P).
$$

#### 样本空间 $\Omega$

$\Omega$ 是一次随机试验所有可能结果的集合，其中的单个结果称为样本点 $\omega$。

例如，投掷一枚硬币两次：

$$
\Omega=\{HH,HT,TH,TT\}.
$$

#### 事件空间 $\mathcal F$

$\mathcal F$ 是由 $\Omega$ 的某些子集构成的集合族。它需要满足：

1. $\Omega\in\mathcal F$；
2. 若 $E\in\mathcal F$，则 $E^c=\Omega\setminus E\in\mathcal F$；
3. 若 $E_1,E_2,\ldots\in\mathcal F$，则

$$
\bigcup_{n=1}^{\infty}E_n\in\mathcal F.
$$

满足这些条件的 $\mathcal F$ 称为 $\Omega$ 上的 **$\sigma$-代数 / $\sigma$-域**。

由定义还能推出：

- $\varnothing\in\mathcal F$；
- 可列交属于 $\mathcal F$；
- 有限并、有限交和补集运算都不会离开事件空间。

:::WARNING
有限样本空间中常直接令 $\mathcal F=2^\Omega$，即取所有子集。连续样本空间中，不能无条件把所有子集都作为可测事件，因此需要引入 $\sigma$-代数。
:::

#### 概率测度 $P$

$P$ 把每个事件映射到 $[0,1]$：

$$
P:\mathcal F\rightarrow[0,1].
$$

它满足三条公理：

1. **非负性**：$P(E)\ge 0$；
2. **规范性**：$P(\Omega)=1$；
3. **可列可加性**：若 $E_1,E_2,\ldots$ 两两互斥，则

$$
P\left(\bigcup_{n=1}^{\infty}E_n\right)
=\sum_{n=1}^{\infty}P(E_n).
$$

### 概率公理与常用结论

由三条公理可推出：

#### 空事件

$$
P(\varnothing)=0.
$$

#### 补事件

$$
P(E^c)=1-P(E).
$$

#### 单调性

若 $A\subseteq B$，则：

$$
P(A)\le P(B).
$$

并且：

$$
P(B\setminus A)=P(B)-P(A).
$$

一般情况下：

$$
P(A\setminus B)=P(A)-P(A\cap B).
$$

#### 两事件并集

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

#### 容斥原理

$$
\begin{aligned}
P\left(\bigcup_{i=1}^nE_i\right)
={}&\sum_iP(E_i)-\sum_{i<j}P(E_i\cap E_j)+\cdots\\
&+(-1)^{n-1}P(E_1\cap\cdots\cap E_n).
\end{aligned}
$$

#### Union bound（并集上界）

$$
P\left(\bigcup_{i=1}^{\infty}E_i\right)
\le\sum_{i=1}^{\infty}P(E_i).
$$

该上界在误差分析中非常常用：把复杂失败事件拆成多个简单失败事件，再把各概率相加即可得到整体失败概率的上界。

:::EXAMPLE
**例：三面骰子**

设三面分别标记 $A,B,C$：

$$
\Omega=\{A,B,C\}.
$$

若取所有子集作为事件空间：

$$
\mathcal F=
\{\varnothing,\{A\},\{B\},\{C\},\{A,B\},\{A,C\},\{B,C\},\Omega\}.
$$

- 事件 $\{A\}$：投掷结果为 $A$；
- 事件 $\{A,B\}$：投掷结果为 $A$ 或 $B$。

若：

$$
P(A)=\frac26,\qquad P(B)=\frac16,\qquad P(C)=\frac36,
$$

则：

$$
P(\{A,B\})=P(A)+P(B)=\frac12.
$$
:::

### 随机变量

随机变量是从样本空间到数值空间的函数：

$$
X:\Omega\rightarrow\mathbb R.
$$

它把原始实验结果编码为便于计算的数值。

对投掷两次硬币，令 $X$ 表示正面次数：

$$
X(HH)=2,
$$

$$
X(HT)=X(TH)=1,
$$

$$
X(TT)=0.
$$

随机变量的值域称为状态空间：

$$
\mathcal X=X(\Omega).
$$

对给定数值 $a$，逆像为：

$$
X^{-1}(a)=\{\omega\in\Omega:X(\omega)=a\}.
$$

事件 $\{X=a\}$ 实际对应样本空间中的集合 $X^{-1}(a)$。

### 离散型随机变量

离散随机变量的概率质量函数（probability mass function, PMF）为：

$$
p_X(a)=P(X=a).
$$

满足：

$$
p_X(a)\ge0,
\qquad
\sum_{a\in\mathcal X}p_X(a)=1.
$$

其累积分布函数（cumulative distribution function, CDF）为：

$$
F_X(x)=P(X\le x)=\sum_{a\le x}p_X(a).
$$

### 连续型随机变量

连续随机变量的概率密度函数（probability density function, PDF）记为 $p_X(x)$，满足：

$$
p_X(x)\ge0,
\qquad
\int_{-\infty}^{\infty}p_X(x)\,dx=1.
$$

CDF 为：

$$
F_X(x)=P(X\le x)
=\int_{-\infty}^{x}p_X(t)\,dt.
$$

区间概率：

$$
P(a\le X\le b)
=F_X(b)-F_X(a)
=\int_a^bp_X(x)\,dx.
$$

连续随机变量在单点处的概率为：

$$
P(X=x)=0.
$$

:::TIP
PDF 的数值可以大于 $1$；概率由密度对区间积分得到。PDF 具有“单位长度上的概率浓度”含义，本身并非单点概率。
:::

---

## 随机变量的函数与变量变换

设：

$$
Y=g(X).
$$

已知 $X$ 的分布，希望求 $Y$ 的分布。最稳妥的起点是 CDF：

$$
F_Y(y)=P(Y\le y)=P(g(X)\le y).
$$

### CDF 法

定义：

$$
D_y=\{x:g(x)\le y\}.
$$

则：

$$
F_Y(y)=\int_{x\in D_y}p_X(x)\,dx.
$$

再对 $y$ 求导即可得到 PDF：

$$
p_Y(y)=\frac{dF_Y(y)}{dy}.
$$

CDF 法适合：

- $g$ 非单调；
- 反函数有多个分支；
- 支持集需要分段讨论；
- 直接套 Jacobian 容易漏解。

### 随机变量的和与比

设 $(X_1,X_2)$ 的联合密度为 $p(x_1,x_2)$。

#### 随机变量之和

令：

$$
Y=X_1+X_2.
$$

由 CDF 法或变量代换可得：

$$
\boxed{
p_Y(y)=\int_{-\infty}^{\infty}p(x,y-x)\,dx}.
$$

若 $X_1,X_2$ 独立，联合密度分解为 $p_1(x_1)p_2(x_2)$，于是：

$$
\boxed{
p_Y(y)=\int_{-\infty}^{\infty}p_1(x)p_2(y-x)\,dx
=(p_1*p_2)(y)}.
$$

这就是卷积公式。特别地，若：

$$
X_1\sim\mathcal N(\mu_1,\sigma_1^2),
\qquad
X_2\sim\mathcal N(\mu_2,\sigma_2^2),
$$

且二者独立，则：

$$
X_1+X_2
\sim\mathcal N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2).
$$

#### 随机变量之比

令：

$$
Y=\frac{X_1}{X_2}.
$$

作变换：

$$
X_1=YX_2,
$$

Jacobian 绝对值为 $|X_2|$，因此：

$$
\boxed{
p_Y(y)=\int_{-\infty}^{\infty}p(yx,x)|x|\,dx}.
$$

这里必须保留绝对值，并同时考虑 $X_2>0$ 与 $X_2<0$ 两部分。

### 一维单调变换

若 $g$ 严格单调且可逆，令：

$$
x=g^{-1}(y),
$$

则：

$$
\boxed{
p_Y(y)=p_X\bigl(g^{-1}(y)\bigr)
\left|\frac{d}{dy}g^{-1}(y)\right|}.
$$

绝对值用于保证密度非负。Jacobian 因子反映变换对局部区间长度的拉伸或压缩。

:::EXAMPLE
**例：线性变换保持高斯性**

设：

$$
X\sim\mathcal N(0,\sigma^2),
\qquad
Y=kX+b,
\qquad k\ne0.
$$

反变换：

$$
x=\frac{y-b}{k},
\qquad
\left|\frac{dx}{dy}\right|=\frac1{|k|}.
$$

所以：

$$
p_Y(y)
=p_X\left(\frac{y-b}{k}\right)\frac1{|k|},
$$

即：

$$
\boxed{Y\sim\mathcal N(b,k^2\sigma^2)}.
$$
:::

:::EXAMPLE
**例：Gamma 的倒数得到 inverse-Gamma**

设 $X$ 服从 shape 为 $a$、rate 为 $b$ 的 Gamma 分布：

$$
p_X(x)=\frac{b^a}{\Gamma(a)}x^{a-1}e^{-bx},
\qquad x>0.
$$

令：

$$
Y=\frac1X,
\qquad
X=\frac1Y,
\qquad
\left|\frac{dX}{dY}\right|=\frac1{Y^2}.
$$

于是：

$$
\begin{aligned}
p_Y(y)
&=p_X\left(\frac1y\right)\frac1{y^2}\\
&=\frac{b^a}{\Gamma(a)}y^{-(a+1)}e^{-b/y},
\qquad y>0.
\end{aligned}
$$

因此：

$$
\boxed{Y\sim\mathrm{IG}(a,b)}.
$$
:::

### 多分支变换

若方程 $g(x)=y$ 有多个根 $x_i=h_i(y)$，则各分支的概率密度需要相加：

$$
\boxed{
p_Y(y)=\sum_i p_X\bigl(h_i(y)\bigr)
\left|h_i'(y)\right|}.
$$

:::EXAMPLE
**例：标准高斯的平方**

设：

$$
X\sim\mathcal N(0,1),
\qquad
Y=X^2.
$$

当 $y>0$ 时，反函数有两个分支：

$$
x_1=\sqrt y,
\qquad
x_2=-\sqrt y.
$$

并且：

$$
\left|\frac{dx_i}{dy}\right|=\frac1{2\sqrt y}.
$$

由于标准高斯密度关于 $0$ 对称：

$$
\begin{aligned}
p_Y(y)
&=p_X(\sqrt y)\frac1{2\sqrt y}
+p_X(-\sqrt y)\frac1{2\sqrt y}\\
&=\frac{1}{\sqrt{2\pi y}}e^{-y/2},
\qquad y>0.
\end{aligned}
$$

因此：

$$
\boxed{Y\sim\chi_1^2}.
$$
:::

:::EXAMPLE
**例：$Y=X^3$**

设 $X\sim\mathcal N(0,1)$，$Y=X^3$。因为 $x^3$ 严格单调：

$$
F_Y(y)=P(X^3\le y)
=P(X\le \sqrt[3]{y})
=\Phi(\sqrt[3]{y}).
$$

对 $y$ 求导：

$$
p_Y(y)
=\phi(\sqrt[3]{y})
\frac1{3|y|^{2/3}},
\qquad y\ne0.
$$

在 $y=0$ 附近密度趋于无穷，但该奇点可积，总概率仍为 $1$。
:::

### 随机向量的变换

设：

$$
\mathbf y=f(\mathbf x),
$$

其中 $f:\mathbb R^n\rightarrow\mathbb R^n$ 为可微双射，则：

$$
\boxed{
p_{\mathbf Y}(\mathbf y)
=p_{\mathbf X}\bigl(f^{-1}(\mathbf y)\bigr)
\left|\det J_{f^{-1}}(\mathbf y)\right|}.
$$

Jacobian 矩阵为：

$$
J_{f^{-1}}(\mathbf y)
=
\begin{bmatrix}
\dfrac{\partial x_1}{\partial y_1}&\cdots&\dfrac{\partial x_1}{\partial y_n}\\
\vdots&\ddots&\vdots\\
\dfrac{\partial x_n}{\partial y_1}&\cdots&\dfrac{\partial x_n}{\partial y_n}
\end{bmatrix}.
$$

行列式绝对值表示局部体积缩放比例。该公式是 normalizing flow 等可逆生成模型的基础。

#### 多元高斯的仿射变换

若：

$$
\boldsymbol\xi\sim\mathcal N(\boldsymbol\mu,\boldsymbol\Sigma),
$$

$$
\boldsymbol\eta=C\boldsymbol\xi+\mathbf a,
$$

则：

$$
\boxed{
\boldsymbol\eta
\sim
\mathcal N(C\boldsymbol\mu+\mathbf a,
C\boldsymbol\Sigma C^T)}.
$$

该结论也可由均值和协方差的线性变换直接验证：

$$
\mathbb E[\boldsymbol\eta]=C\boldsymbol\mu+\mathbf a,
$$

$$
\operatorname{Cov}(\boldsymbol\eta)
=C\boldsymbol\Sigma C^T.
$$

### 蒙特卡罗近似

当 $f$ 复杂、反函数或 Jacobian 难以计算时，可以使用采样近似：

1. 从 $p_X$ 抽取样本

$$
x^{(s)}\sim p_X(x),\qquad s=1,\ldots,S;
$$

2. 计算

$$
y^{(s)}=f(x^{(s)});
$$

3. 用经验分布近似 $Y$ 的分布：

$$
p_D(y)=\frac1S\sum_{s=1}^S\delta(y-y^{(s)}).
$$

经验分布只在样本点上有质量。实际绘制密度时常进一步使用：

- 直方图；
- 核密度估计；
- 参数模型拟合；
- 生成模型。

:::WARNING
有限样本形成的经验分布对未出现位置给出零概率，泛化能力有限。需要平滑、先验或结构化模型把离散样本推广到连续空间。
:::

### 概率积分变换

若 $X$ 的 CDF $F_X$ 连续且严格单调，定义：

$$
Y=F_X(X),
$$

则：

$$
Y\sim U(0,1).
$$

证明：

$$
\begin{aligned}
F_Y(y)
&=P(F_X(X)\le y)\\
&=P(X\le F_X^{-1}(y))\\
&=F_X(F_X^{-1}(y))\\
&=y,
\qquad 0\le y\le1.
\end{aligned}
$$

这一结果称为 **Probability Integral Transform, PIT**。

用途包括：

- 把一般连续分布变换成均匀分布；
- 逆变换采样：若 $U\sim U(0,1)$，则 $X=F_X^{-1}(U)$ 服从目标分布；
- 概率预测校准检验；
- copula 建模。

> **图片占位符（课本第 12 页 / PPT 对应 PIT 页面）**：插入多种原始分布经过各自 CDF 后都变成 $U(0,1)$ 的三行对照图。

---

## 条件概率、全概率与贝叶斯定理

### 条件概率与乘积规则

在事件 $B$ 已经发生的条件下，事件 $A$ 发生的概率定义为：

$$
\boxed{P(A\mid B)=\frac{P(A\cap B)}{P(B)}},
\qquad P(B)>0.
$$

这相当于把样本空间缩小到 $B$，再计算其中属于 $A$ 的比例。

由定义得到乘积规则：

$$
P(A\cap B)=P(A\mid B)P(B),
$$

也有：

$$
P(A\cap B)=P(B\mid A)P(A).
$$

推广到 $n$ 个事件：

$$
\begin{aligned}
P(A_1\cap\cdots\cap A_n)
={}&P(A_1)P(A_2\mid A_1)\\
&\cdots P(A_n\mid A_1\cap\cdots\cap A_{n-1}).
\end{aligned}
$$

随机变量的联合分布也可按链式法则分解：

$$
p(x_1,\ldots,x_n)
=p(x_1)\prod_{i=2}^np(x_i\mid x_1,\ldots,x_{i-1}).
$$

### 独立性

若：

$$
P(A\cap B)=P(A)P(B),
$$

则称事件 $A$ 与 $B$ 相互独立。等价地，在概率非零时：

$$
P(A\mid B)=P(A),
$$

即观察到 $B$ 并未改变对 $A$ 的概率判断。

随机变量 $X,Y$ 独立，当且仅当：

$$
p(x,y)=p_X(x)p_Y(y).
$$

条件独立写为：

$$
X\perp Y\mid Z,
$$

表示给定 $Z$ 后：

$$
p(x,y\mid z)=p(x\mid z)p(y\mid z).
$$

:::WARNING
无条件独立与条件独立不能相互替换。加入条件可能消除依赖，也可能产生依赖。后续概率图模型中的链式结构、分叉结构和对撞结构都建立在这一点上。
:::

### 全概率公式

若事件 $C_1,\ldots,C_K$ 构成样本空间的划分：

- $C_i\cap C_j=\varnothing$，$i\ne j$；
- $\bigcup_{k=1}^KC_k=\Omega$；

则：

$$
\boxed{P(A)=\sum_{k=1}^KP(A\mid C_k)P(C_k)}.
$$

连续形式：

$$
\boxed{p(y)=\int p(y\mid x)p(x)\,dx}.
$$

全概率公式的含义是：把所有可能原因 $C_k$ 分别考虑，再按其先验概率加权求和。

### 贝叶斯定理

由两种方式表示联合概率：

$$
P(A\cap B)=P(B\mid A)P(A)=P(A\mid B)P(B),
$$

得到：

$$
\boxed{P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}}.
$$

对离散假设 $C_k$：

$$
\boxed{
P(C_k\mid A)
=\frac{P(A\mid C_k)P(C_k)}{\sum_jP(A\mid C_j)P(C_j)}}.
$$

对连续变量：

$$
\boxed{
p(x\mid y)
=\frac{p(y\mid x)p(x)}{\int p(y\mid x')p(x')\,dx'}}.
$$

其中：

- $p(x)$：先验（prior）；
- $p(y\mid x)$：似然（likelihood）；
- $p(y)$：证据或边缘似然（evidence / marginal likelihood）；
- $p(x\mid y)$：后验（posterior）。

常写成比例形式：

$$
\boxed{p(x\mid y)\propto p(y\mid x)p(x)},
$$

但最终需要明确归一化常数或识别出分布类型。

:::EXAMPLE
**例：Monty Hall 三门问题**

三扇门后有一辆车和两只山羊。参赛者先选一扇门，主持人知道奖品位置，并从其余两扇门中打开一扇必定有山羊的门，然后询问是否换门。

最初选择中奖的概率为：

$$
P(\text{初选为车})=\frac13.
$$

初选为山羊的概率为：

$$
P(\text{初选为山羊})=\frac23.
$$

主持人打开另一扇山羊门后：

- 初选为车时，换门会输；
- 初选为山羊时，剩余未开门必定是车，换门会赢。

所以：

$$
P(\text{换门获胜})=\frac23,
$$

$$
P(\text{不换获胜})=\frac13.
$$

主持人的开门规则是计算成立的前提：他知道车的位置，并且不会打开有车的门。
:::

:::EXAMPLE
**例：两个孩子问题——提问方式改变条件事件**

假设每个孩子独立地以 $1/2$ 概率为男孩或女孩。

**情形 A：邻居说“我至少有一个男孩”**

在区分出生顺序时，满足条件的等可能情况为：

$$
BB,\ BG,\ GB.
$$

其中一男一女有两种，因此：

$$
P(\text{一男一女}\mid\text{至少一男})=\frac23.
$$

**情形 B：随机遇到他的一个孩子，观察到该孩子是男孩**

被观察孩子的性别不改变另一个孩子的独立性，因此：

$$
P(\text{另一个是女孩}\mid\text{观察到一个男孩})=\frac12.
$$

概率答案依赖信息如何产生。描述“知道至少一个男孩”和“随机观察到一个男孩”对应不同的条件事件。
:::

### 两点先验的观测边缘分布

设参数：

$$
\Theta\in\{-1,+1\},
\qquad
P(\Theta=1)=P(\Theta=-1)=\frac12,
$$

观测模型：

$$
Y=\Theta+W,
\qquad
W\sim\mathcal N(0,\sigma^2).
$$

给定 $\Theta$ 后：

$$
Y\mid\Theta=1\sim\mathcal N(1,\sigma^2),
$$

$$
Y\mid\Theta=-1\sim\mathcal N(-1,\sigma^2).
$$

根据全概率公式：

$$
\boxed{
p_Y(y)
=\frac12\mathcal N(y\mid1,\sigma^2)
+\frac12\mathcal N(y\mid-1,\sigma^2)}.
$$

因此，离散隐变量经过高斯噪声观测后，边缘分布成为高斯混合分布。混合分布中的每个分量对应一种潜在状态。

### Spike-and-slab 先验的 MMSE

设稀疏随机变量：

$$
p_X(x)
=(1-\pi)\delta(x)
+\pi\mathcal N(x\mid\mu,\sigma_x^2),
$$

观测模型：

$$
Y=X+N,
\qquad
N\sim\mathcal N(0,\sigma_n^2).
$$

引入隐变量 $Z\in\{0,1\}$：

- $Z=0$：$X=0$；
- $Z=1$：$X\sim\mathcal N(\mu,\sigma_x^2)$。

#### 第一步：计算两种状态下的观测分布

$$
p(y\mid Z=0)=\mathcal N(y\mid0,\sigma_n^2),
$$

$$
p(y\mid Z=1)=\mathcal N(y\mid\mu,\sigma_x^2+\sigma_n^2).
$$

#### 第二步：计算“非零状态”的后验概率

$$
\boxed{
\gamma(y)=P(Z=1\mid y)
=
\frac{\pi\mathcal N(y\mid\mu,\sigma_x^2+\sigma_n^2)}
{(1-\pi)\mathcal N(y\mid0,\sigma_n^2)
+\pi\mathcal N(y\mid\mu,\sigma_x^2+\sigma_n^2)}}.
$$

#### 第三步：计算非零分量内的高斯后验

在 $Z=1$ 条件下：

$$
X\mid y,Z=1
\sim\mathcal N(m(y),v),
$$

其中：

$$
v=
\left(\frac1{\sigma_x^2}+\frac1{\sigma_n^2}\right)^{-1}
=\frac{\sigma_x^2\sigma_n^2}{\sigma_x^2+\sigma_n^2},
$$

$$
m(y)
=v\left(\frac\mu{\sigma_x^2}+\frac y{\sigma_n^2}\right)
=\frac{\sigma_n^2\mu+\sigma_x^2y}
{\sigma_x^2+\sigma_n^2}.
$$

#### 第四步：求后验均值

$$
\begin{aligned}
\hat X_{\mathrm{MMSE}}(y)
&=\mathbb E[X\mid y]\\
&=P(Z=1\mid y)\mathbb E[X\mid y,Z=1]\\
&\quad+P(Z=0\mid y)\cdot0.
\end{aligned}
$$

因此：

$$
\boxed{
\hat X_{\mathrm{MMSE}}(y)=\gamma(y)m(y)}.
$$

这个估计器同时完成两件事：

- $\gamma(y)$ 判断信号是否存在；
- $m(y)$ 在信号存在时估计其幅值。

它是稀疏信号去噪中常见的“软门控 + 幅值收缩”结构。

### 边缘化与隐变量

已知联合分布 $p(x,y)$，边缘分布为：

- 离散情形：

$$
p_X(x)=\sum_y p(x,y);
$$

- 连续情形：

$$
p_X(x)=\int p(x,y)\,dy.
$$

被求和或积分消去的变量常称为**隐变量（latent variable）**或 nuisance variable。

例如：

$$
p(y)=\int p(y\mid z)p(z)\,dz.
$$

这里 $z$ 描述数据生成过程中的潜在状态，$p(y)$ 是综合所有可能 $z$ 后得到的观测分布。

:::TIP
学习概率模型时可以始终追问：

1. 哪些变量能够直接观测？
2. 哪些变量需要推断？
3. 已知的是联合分布、先验还是似然？
4. 哪个变量需要被边缘化？
5. 最终需要的是完整后验、均值、方差，还是最大概率类别？
:::

---

## 从联合分布到估计与判决

### 二进制通信模型

设发送比特：

$$
B\in\{-1,+1\},
$$

先验为：

$$
P(B=1)=p,
\qquad
P(B=-1)=1-p.
$$

接收模型：

$$
Y=aB+W,
$$

其中：

$$
W\sim\mathcal N(0,\sigma^2).
$$

给定 $B=b$ 后：

$$
Y\mid B=b\sim\mathcal N(ab,\sigma^2),
$$

因此似然为：

$$
p(y\mid b)
=\frac1{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(y-ab)^2}{2\sigma^2}\right].
$$

联合分布：

$$
p(y,b)=p(y\mid b)P(B=b).
$$

观察到 $Y=y$ 后：

$$
P(B=1\mid y)
=\frac{p\,\phi_\sigma(y-a)}
{p\,\phi_\sigma(y-a)+(1-p)\phi_\sigma(y+a)},
$$

其中 $\phi_\sigma(\cdot)$ 表示均值为 $0$、方差为 $\sigma^2$ 的高斯密度。

这个模型体现了本章最重要的统计推断框架：

> 已知变量的联合规律，观察其中一部分变量，再推断其余变量。

### MMSE 估计

希望构造估计器：

$$
\hat B(Y),
$$

使平均均方误差最小：

$$
R(\hat B)=\mathbb E[(\hat B(Y)-B)^2].
$$

用全期望公式：

$$
R(\hat B)
=\mathbb E_Y\left[
\mathbb E\left[(\hat B(Y)-B)^2\mid Y\right]
\right].
$$

对每个固定的 $Y=y$，只需最小化条件风险：

$$
r_y(c)=\mathbb E[(c-B)^2\mid Y=y].
$$

展开：

$$
r_y(c)
=c^2-2c\mathbb E[B\mid y]+\mathbb E[B^2\mid y].
$$

对 $c$ 求导：

$$
\frac{dr_y(c)}{dc}=2c-2\mathbb E[B\mid y].
$$

令导数为 $0$：

$$
\boxed{\hat B_{\mathrm{MMSE}}(y)=\mathbb E[B\mid Y=y]}.
$$

因此，后验均值是均方误差意义下的最优估计器。

更一般地，对任意随机变量 $X$：

$$
\boxed{\hat X_{\mathrm{MMSE}}(Y)=\mathbb E[X\mid Y]}.
$$

并且有正交分解：

$$
\mathbb E[(X-g(Y))^2]
=
\mathbb E[(X-\mathbb E[X\mid Y])^2]
+
\mathbb E[(\mathbb E[X\mid Y]-g(Y))^2].
$$

第二项非负，因此任何其他基于 $Y$ 的估计器都无法取得更小的平均均方误差。

对于 $B\in\{-1,+1\}$：

$$
\mathbb E[B\mid y]
=P(B=1\mid y)-P(B=-1\mid y).
$$

它可以位于 $[-1,1]$ 内，不必强制取 $\pm1$。

### MAP 判决

数字通信最终通常需要输出离散类别：

$$
\hat B(y)\in\{-1,+1\}.
$$

在 $0$-$1$ 损失下：

$$
L(\hat b,b)=
\begin{cases}
0,&\hat b=b,\\
1,&\hat b\ne b,
\end{cases}
$$

给定 $Y=y$ 后，把结果判为 $b$ 的条件错误概率为：

$$
1-P(B=b\mid y).
$$

因此最优判决为选择后验概率最大的类别：

$$
\boxed{
\hat B_{\mathrm{MAP}}(y)
=\arg\max_{b\in\{-1,+1\}}P(B=b\mid y)}.
$$

MAP 在 $0$-$1$ 损失下使总体错误概率最小。

若先验相等：

$$
P(B=1)=P(B=-1)=\frac12,
$$

则 MAP 等价于最大似然判决：

$$
\hat B_{\mathrm{ML}}(y)
=\arg\max_b p(y\mid b).
$$

在对称高斯信道中，判决阈值为：

$$
\hat B(y)=
\begin{cases}
+1,&y\ge0,\\
-1,&y<0.
\end{cases}
$$

### 似然比检验

二元假设：

$$
H_1:B=1,
\qquad
H_0:B=-1.
$$

MAP 判决等价于比较：

$$
p(y\mid H_1)P(H_1)
\underset{H_0}{\overset{H_1}{\gtrless}}
p(y\mid H_0)P(H_0).
$$

整理得到似然比检验：

$$
\boxed{
\Lambda(y)=\frac{p(y\mid H_1)}{p(y\mid H_0)}
\underset{H_0}{\overset{H_1}{\gtrless}}
\frac{P(H_0)}{P(H_1)}}.
$$

取对数：

$$
\log\Lambda(y)
\underset{H_0}{\overset{H_1}{\gtrless}}
\log\frac{P(H_0)}{P(H_1)}.
$$

对数形式可把乘法变成加法，也能避免极小概率相乘造成数值下溢。

:::TIP
损失函数决定最优统计量：

- 平方损失 $\rightarrow$ 后验均值；
- 绝对损失 $\rightarrow$ 后验中位数；
- $0$-$1$ 损失 $\rightarrow$ 后验众数 / MAP。
:::

---

## 最大似然估计

### 似然函数与对数似然

设数据：

$$
\mathcal D=\{x_1,\ldots,x_N\},
$$

来自参数模型 $q(x\mid\theta)$。若样本独立同分布：

$$
p(\mathcal D\mid\theta)
=\prod_{n=1}^Nq(x_n\mid\theta).
$$

最大似然估计为：

$$
\boxed{
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta\prod_{n=1}^Nq(x_n\mid\theta)}.
$$

由于对数函数严格单调：

$$
\boxed{
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta
\sum_{n=1}^N\log q(x_n\mid\theta)}.
$$

使用对数似然有三个优势：

- 连乘转化为求和；
- 求导更方便；
- 降低浮点下溢风险。

:::WARNING
似然函数是固定观测数据后关于参数 $\theta$ 的函数。它通常不构成 $\theta$ 上的概率密度，也不要求对 $\theta$ 积分为 $1$。
:::

### MLE 与经验 KL 散度

经验分布为：

$$
p_D(x)=\frac1N\sum_{n=1}^N\delta(x-x_n).
$$

经验分布到模型 $q_\theta$ 的 KL 散度：

$$
D_{\mathrm{KL}}(p_D\|q_\theta)
=\mathbb E_{p_D}\left[
\log\frac{p_D(X)}{q_\theta(X)}
\right].
$$

展开：

$$
D_{\mathrm{KL}}(p_D\|q_\theta)
=\mathbb E_{p_D}[\log p_D(X)]
-\mathbb E_{p_D}[\log q_\theta(X)].
$$

第一项与 $\theta$ 无关，因此：

$$
\begin{aligned}
\arg\min_\theta D_{\mathrm{KL}}(p_D\|q_\theta)
&=\arg\max_\theta\mathbb E_{p_D}[\log q_\theta(X)]\\
&=\arg\max_\theta\frac1N\sum_{n=1}^N\log q(x_n\mid\theta).
\end{aligned}
$$

故：

$$
\boxed{
\text{MLE 等价于寻找与经验分布正向 KL 散度最小的模型。}}
$$

这也解释了交叉熵训练：最小化负对数似然等价于最小化经验交叉熵。

### 均匀分布参数估计

设：

$$
p(x\mid a)=\frac1{2a}\mathbf 1(x\in[-a,a]),
\qquad a>0.
$$

给定独立样本 $x_1,\ldots,x_N$，似然为：

$$
L(a)
=\prod_{n=1}^N\frac1{2a}\mathbf 1(|x_n|\le a)
=\left(\frac1{2a}\right)^N
\mathbf 1\left(a\ge\max_n|x_n|\right).
$$

当 $a<\max_n|x_n|$ 时，似然为 $0$；当 $a$ 满足支持集约束时，$L(a)$ 随 $a$ 增大而减小。因此：

$$
\boxed{\hat a_{\mathrm{ML}}=\max_n|x_n|}.
$$

#### 该估计的泛化问题

MLE 恰好让支持区间贴住训练样本中最极端的点。对一个略微超出训练范围的新样本 $x_{N+1}$：

$$
p(x_{N+1}\mid\hat a_{\mathrm{ML}})=0.
$$

这会产生过度自信的零概率判断。

可采用的改进包括：

- 对 $a$ 指定先验并计算后验；
- 使用后验预测分布，对 $a$ 的不确定性积分；
- 给支持边界留出保守余量；
- 使用具有非零尾部的分布模型。

:::TIP
这一例子说明：最大化训练样本似然只保证对已观测数据拟合得好，预测表现还依赖模型结构、先验和数据覆盖范围。
:::

---

## 常用概率分布

### 离散分布

#### Bernoulli 分布

描述一次二元试验：

$$
X\in\{0,1\},
$$

$$
p(x\mid\mu)=\mu^x(1-\mu)^{1-x},
\qquad 0\le\mu\le1.
$$

均值与方差：

$$
\mathbb E[X]=\mu,
$$

$$
\operatorname{Var}(X)=\mu(1-\mu).
$$

#### Binomial 分布

$N$ 次独立 Bernoulli 试验中成功次数 $X$：

$$
p(x\mid N,\mu)
=\binom Nx\mu^x(1-\mu)^{N-x},
\qquad x=0,1,\ldots,N.
$$

均值与方差：

$$
\mathbb E[X]=N\mu,
$$

$$
\operatorname{Var}(X)=N\mu(1-\mu).
$$

#### Categorical 分布

Categorical 分布是 Bernoulli 分布向 $K$ 个类别的推广。令 one-hot 向量：

$$
\mathbf x=(x_1,\ldots,x_K),
\qquad
x_k\in\{0,1\},
\qquad
\sum_{k=1}^Kx_k=1,
$$

类别概率：

$$
\boldsymbol\mu=(\mu_1,\ldots,\mu_K),
\qquad
\sum_{k=1}^K\mu_k=1.
$$

概率质量函数：

$$
\boxed{
p(\mathbf x\mid\boldsymbol\mu)
=\prod_{k=1}^K\mu_k^{x_k}}.
$$

它用于多分类标签、骰子结果和离散隐状态等建模。

#### Poisson 分布

描述单位时间或单位区域内稀疏事件的计数：

$$
p(x\mid\lambda)
=e^{-\lambda}\frac{\lambda^x}{x!},
\qquad x=0,1,2,\ldots
$$

均值与方差均为：

$$
\mathbb E[X]=\operatorname{Var}(X)=\lambda.
$$

Poisson 分布可由稀有事件的 Binomial 分布取极限得到。若：

$$
X_n\sim\mathrm{Binomial}(n,p_n),
\qquad
n\to\infty,
\qquad
np_n\to\lambda,
$$

则对固定 $k$：

$$
P(X_n=k)\to e^{-\lambda}\frac{\lambda^k}{k!}.
$$

这对应“大量独立机会、每次发生概率很小、平均发生次数有限”的场景。

适用例子：

- 固定时间窗内的脉冲数；
- 某区域内稀有目标的计数；
- 到达事件近似独立、平均速率稳定的场景。

### 连续分布

#### Gaussian / Normal 分布

$$
p(x\mid\mu,\sigma^2)
=\frac1{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$$

$$
\mathbb E[X]=\mu,
\qquad
\operatorname{Var}(X)=\sigma^2.
$$

标准高斯密度与 CDF 记为：

$$
\phi(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2},
\qquad
\Phi(x)=\int_{-\infty}^x\phi(t)dt.
$$

由对称性：

$$
\boxed{\Phi(-x)=1-\Phi(x)}.
$$

高斯分布的精度定义为方差的倒数：

$$
\lambda=\frac1{\sigma^2}.
$$

高斯分布广泛出现的原因：

- 多个独立微小扰动叠加时，中心极限定理常给出高斯近似；
- 线性变换、边缘化与条件化后仍保持高斯形式；
- 只给定均值和方差时，高斯分布具有最大熵；
- 数学计算方便。

#### Student-$t$ 分布

设自由度为 $\nu$、位置为 $\mu$、尺度为 $\sigma$：

$$
p(x)
=\frac{\Gamma\left(\frac{\nu+1}{2}\right)}
{\Gamma\left(\frac\nu2\right)\sqrt{\nu\pi}\sigma}
\left[1+\frac1\nu\left(\frac{x-\mu}{\sigma}\right)^2\right]^{-\frac{\nu+1}{2}}.
$$

特点：

- 尾部比高斯更厚；
- 对异常值更稳健；
- 当 $\nu\to\infty$ 时趋近高斯分布。

#### Laplace 分布

$$
p(x\mid\mu,b)
=\frac1{2b}\exp\left(-\frac{|x-\mu|}{b}\right).
$$

$$
\mathbb E[X]=\mu,
\qquad
\operatorname{Var}(X)=2b^2.
$$

Laplace 分布在中心更尖、尾部更厚。其负对数似然与绝对误差成正比，因此常与 $L_1$ 损失和稀疏建模联系。

#### Gamma 分布

采用 shape-rate 参数化：

$$
p(x\mid a,b)
=\frac{b^a}{\Gamma(a)}x^{a-1}e^{-bx},
\qquad x>0.
$$

$$
\mathbb E[X]=\frac ab,
$$

$$
\operatorname{Var}(X)=\frac a{b^2}.
$$

适合描述正值量，例如持续时间、尺度、率参数等。

#### Chi-square 分布

若：

$$
Z_1,\ldots,Z_\nu\overset{\mathrm{i.i.d.}}{\sim}\mathcal N(0,1),
$$

则：

$$
X=\sum_{i=1}^{\nu}Z_i^2\sim\chi_\nu^2.
$$

等价地：

$$
\chi_\nu^2=\mathrm{Gamma}\left(\frac\nu2,\frac12\right).
$$

均值与方差：

$$
\mathbb E[X]=\nu,
\qquad
\operatorname{Var}(X)=2\nu.
$$

#### Beta 分布

$$
p(x\mid\alpha,\beta)
=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}
 x^{\alpha-1}(1-x)^{\beta-1},
\qquad 0<x<1.
$$

均值：

$$
\mathbb E[X]=\frac{\alpha}{\alpha+\beta}.
$$

方差：

$$
\operatorname{Var}(X)
=\frac{\alpha\beta}
{(\alpha+\beta)^2(\alpha+\beta+1)}.
$$

Beta 分布定义在 $[0,1]$，适合表示概率参数的不确定性，也是 Bernoulli / Binomial 参数的共轭先验。

#### Inverse-Gamma 分布

$$
p(x\mid a,b)
=\frac{b^a}{\Gamma(a)}x^{-(a+1)}e^{-b/x},
\qquad x>0.
$$

常作为高斯方差的先验。它可由 Gamma 随机变量取倒数得到。

### 分布选择与损失函数

分布假设会直接决定常见优化目标：

#### 高斯噪声与平方损失

若：

$$
y_n=f_\theta(x_n)+\varepsilon_n,
\qquad
\varepsilon_n\sim\mathcal N(0,\sigma^2),
$$

则负对数似然中与 $\theta$ 有关的部分为：

$$
-\log p(\mathcal D\mid\theta)
\propto
\sum_n(y_n-f_\theta(x_n))^2.
$$

因此，高斯噪声的 MLE 对应最小二乘。

#### Laplace 噪声与绝对损失

若误差服从 Laplace 分布，则：

$$
-\log p(\mathcal D\mid\theta)
\propto
\sum_n|y_n-f_\theta(x_n)|.
$$

对应 $L_1$ 损失，对少量大异常值通常更稳健。

#### 重尾分布与鲁棒性

高斯密度的尾部衰减很快，会把远离均值的样本视为极端异常。Student-$t$ 等重尾分布对异常点分配更高概率，可降低少量异常值对参数估计的影响。

:::TIP
选择损失函数时，应追问它隐含了怎样的噪声分布。平方损失、绝对损失和鲁棒损失都可以从概率模型中得到解释。
:::

---

## 矩、协方差与相关性

### 均值与协方差

随机向量 $\mathbf X\in\mathbb R^d$ 的均值：

$$
\boldsymbol\mu=\mathbb E[\mathbf X].
$$

协方差矩阵：

$$
\boldsymbol\Sigma
=\operatorname{Cov}(\mathbf X)
=\mathbb E[(\mathbf X-\boldsymbol\mu)(\mathbf X-\boldsymbol\mu)^T].
$$

也可写为：

$$
\boldsymbol\Sigma
=\mathbb E[\mathbf X\mathbf X^T]
-\boldsymbol\mu\boldsymbol\mu^T.
$$

第 $(i,j)$ 个元素：

$$
\Sigma_{ij}
=\operatorname{Cov}(X_i,X_j)
=\mathbb E[(X_i-\mu_i)(X_j-\mu_j)].
$$

性质：

- $\Sigma_{ii}=\operatorname{Var}(X_i)\ge0$；
- $\boldsymbol\Sigma$ 对称；
- $\boldsymbol\Sigma$ 半正定：

$$
\mathbf a^T\boldsymbol\Sigma\mathbf a
=\operatorname{Var}(\mathbf a^T\mathbf X)\ge0.
$$

对仿射变换：

$$
\mathbf Y=A\mathbf X+\mathbf b,
$$

有：

$$
\mathbb E[\mathbf Y]=A\boldsymbol\mu+\mathbf b,
$$

$$
\operatorname{Cov}(\mathbf Y)=A\boldsymbol\Sigma A^T.
$$

### 相关系数

两个随机变量的相关系数为：

$$
\rho_{XY}
=\frac{\operatorname{Cov}(X,Y)}
{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}.
$$

满足：

$$
-1\le\rho_{XY}\le1.
$$

解释：

- $\rho=1$：完全正线性关系；
- $\rho=-1$：完全负线性关系；
- $\rho=0$：无线性相关。

相关系数只描述标准化后的**线性依赖**，无法完整刻画一般非线性关系。

### 不相关不推出独立

若 $X,Y$ 独立且二阶矩存在，则：

$$
\mathbb E[XY]=\mathbb E[X]\mathbb E[Y],
$$

从而：

$$
\operatorname{Cov}(X,Y)=0.
$$

所以：

$$
X\perp Y\quad\Longrightarrow\quad X,Y\text{ 不相关}.
$$

反向结论一般不成立。

:::EXAMPLE
**例 1：$Y=X^2$**

设：

$$
X\sim U(-1,1),
\qquad
Y=X^2.
$$

由于分布关于 $0$ 对称：

$$
\mathbb E[X]=0,
$$

并且 $X^3$ 为奇函数：

$$
\mathbb E[XY]
=\mathbb E[X^3]=0.
$$

所以：

$$
\operatorname{Cov}(X,Y)
=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]=0.
$$

但 $Y$ 完全由 $X$ 决定，二者显然依赖。因此它们不相关但不独立。
:::

:::EXAMPLE
**例 2：边缘上均为高斯，不代表联合高斯**

设：

$$
X\sim\mathcal N(0,1),
$$

$W$ 与 $X$ 独立，且：

$$
P(W=1)=P(W=-1)=\frac12.
$$

令：

$$
Y=WX.
$$

当 $W=1$ 时 $Y=X$；当 $W=-1$ 时 $Y=-X$。由于标准高斯关于 $0$ 对称：

$$
Y\sim\mathcal N(0,1).
$$

协方差：

$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=\mathbb E[XY]\\
&=\mathbb E[WX^2]\\
&=\mathbb E[W]\mathbb E[X^2]\\
&=0.
\end{aligned}
$$

然而：

$$
|Y|=|X|,
$$

二者存在确定性约束，因此不独立。

这一例子同时说明：两个边缘分布均为高斯，也不能保证它们组成联合高斯分布。
:::

:::WARNING
只有在**联合高斯**前提下，不相关才等价于独立：

$$
(X,Y)\text{ 联合高斯且 }\operatorname{Cov}(X,Y)=0
\Longrightarrow X\perp Y.
$$
:::

### 马氏距离

欧氏距离没有考虑各方向方差和变量相关性。马氏距离定义为：

$$
\boxed{
d_M^2(\mathbf x,\boldsymbol\mu)
=(\mathbf x-\boldsymbol\mu)^T
\boldsymbol\Sigma^{-1}
(\mathbf x-\boldsymbol\mu)}.
$$

解释：

- 方差大的方向允许更大偏移；
- 方差小的方向对偏移更敏感；
- 协方差会旋转距离的主轴；
- 多元高斯的等密度面由固定马氏距离构成。

若对数据进行白化：

$$
\mathbf z=\boldsymbol\Sigma^{-1/2}(\mathbf x-\boldsymbol\mu),
$$

则：

$$
d_M^2=\|\mathbf z\|_2^2.
$$

---

## 多元高斯分布

### 定义与几何意义

$d$ 维多元高斯分布：

$$
\boxed{
p(\mathbf x)
=\frac1{(2\pi)^{d/2}|\boldsymbol\Sigma|^{1/2}}
\exp\left[-\frac12
(\mathbf x-\boldsymbol\mu)^T
\boldsymbol\Sigma^{-1}
(\mathbf x-\boldsymbol\mu)
\right]}.
$$

记为：

$$
\mathbf X\sim\mathcal N(\boldsymbol\mu,\boldsymbol\Sigma).
$$

其中：

- $\boldsymbol\mu$ 决定中心；
- $\boldsymbol\Sigma$ 决定尺度、方向和相关性；
- $|\boldsymbol\Sigma|^{1/2}$ 对应分布所占体积尺度；
- $\boldsymbol\Sigma^{-1}$ 称为精度矩阵（precision matrix）。

等密度面满足：

$$
(\mathbf x-\boldsymbol\mu)^T
\boldsymbol\Sigma^{-1}
(\mathbf x-\boldsymbol\mu)=c.
$$

它在二维中是椭圆，在高维中是椭球。

若协方差特征分解为：

$$
\boldsymbol\Sigma=U\Lambda U^T,
$$

则：

- $U$ 的列向量给出椭球主轴方向；
- $\sqrt{\lambda_i}$ 决定各主轴尺度；
- 特征值越大，对应方向上的数据变化越大。

> **图片占位符（上课 PPT 多元高斯几何页面）**：插入不同相关系数和协方差下的二维高斯等高线，标出主轴、均值与相关方向。

### 二元高斯分布

令：

$$
\boldsymbol\mu=
\begin{bmatrix}
\mu_1\\
\mu_2
\end{bmatrix},
$$

$$
\boldsymbol\Sigma=
\begin{bmatrix}
\sigma_1^2&\rho\sigma_1\sigma_2\\
\rho\sigma_1\sigma_2&\sigma_2^2
\end{bmatrix}.
$$

行列式：

$$
|\boldsymbol\Sigma|
=\sigma_1^2\sigma_2^2(1-\rho^2).
$$

逆矩阵：

$$
\boldsymbol\Sigma^{-1}
=\frac1{1-\rho^2}
\begin{bmatrix}
\dfrac1{\sigma_1^2}&-\dfrac{\rho}{\sigma_1\sigma_2}\\[3mm]
-\dfrac{\rho}{\sigma_1\sigma_2}&\dfrac1{\sigma_2^2}
\end{bmatrix}.
$$

因此 PDF 为：

$$
\boxed{
\begin{aligned}
p(x_1,x_2)
={}&\frac1{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}\\
&\times\exp\left\{-\frac1{2(1-\rho^2)}
\left[
\frac{(x_1-\mu_1)^2}{\sigma_1^2}
+\frac{(x_2-\mu_2)^2}{\sigma_2^2}
-\frac{2\rho(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2}
\right]\right\}.
\end{aligned}}
$$

当 $|\rho|\to1$ 时，协方差矩阵趋于奇异，概率质量趋向一条直线附近。

### 高斯分布的边缘分布

将随机向量和参数分块：

$$
\mathbf x=
\begin{bmatrix}
\mathbf x_1\\
\mathbf x_2
\end{bmatrix},
\qquad
\boldsymbol\mu=
\begin{bmatrix}
\boldsymbol\mu_1\\
\boldsymbol\mu_2
\end{bmatrix},
$$

$$
\boldsymbol\Sigma=
\begin{bmatrix}
\boldsymbol\Sigma_{11}&\boldsymbol\Sigma_{12}\\
\boldsymbol\Sigma_{21}&\boldsymbol\Sigma_{22}
\end{bmatrix}.
$$

若：

$$
\begin{bmatrix}
\mathbf X_1\\
\mathbf X_2
\end{bmatrix}
\sim\mathcal N(\boldsymbol\mu,\boldsymbol\Sigma),
$$

则边缘分布直接取相应子块：

$$
\boxed{
\mathbf X_1\sim
\mathcal N(\boldsymbol\mu_1,\boldsymbol\Sigma_{11})},
$$

$$
\boxed{
\mathbf X_2\sim
\mathcal N(\boldsymbol\mu_2,\boldsymbol\Sigma_{22})}.
$$

这体现了高斯分布对边缘化运算的封闭性。

### 高斯分布的条件分布

条件分布仍为高斯：

$$
\boxed{
\mathbf X_1\mid\mathbf X_2=\mathbf x_2
\sim\mathcal N(
\boldsymbol\mu_{1\mid2},
\boldsymbol\Sigma_{1\mid2})},
$$

其中：

$$
\boxed{
\boldsymbol\mu_{1\mid2}
=\boldsymbol\mu_1
+\boldsymbol\Sigma_{12}
\boldsymbol\Sigma_{22}^{-1}
(\mathbf x_2-\boldsymbol\mu_2)},
$$

$$
\boxed{
\boldsymbol\Sigma_{1\mid2}
=\boldsymbol\Sigma_{11}
-\boldsymbol\Sigma_{12}
\boldsymbol\Sigma_{22}^{-1}
\boldsymbol\Sigma_{21}}.
$$

含义：

- 条件均值由原均值加上“相关系数矩阵 × 观测偏差”得到；
- 条件协方差小于或等于原边缘协方差；
- 观察 $\mathbf X_2$ 后，关于 $\mathbf X_1$ 的不确定性下降；
- 条件协方差与具体观测值 $\mathbf x_2$ 无关。

#### 二元标量形式

若：

$$
\begin{bmatrix}X_1\\X_2\end{bmatrix}
\sim\mathcal N\left(
\begin{bmatrix}\mu_1\\\mu_2\end{bmatrix},
\begin{bmatrix}
\sigma_1^2&\rho\sigma_1\sigma_2\\
\rho\sigma_1\sigma_2&\sigma_2^2
\end{bmatrix}
\right),
$$

则：

$$
\boxed{
X_2\mid X_1=x_1
\sim\mathcal N\left(
\mu_2+\rho\frac{\sigma_2}{\sigma_1}(x_1-\mu_1),
\sigma_2^2(1-\rho^2)
\right)}.
$$

当 $\rho=0$ 时，条件均值不随 $x_1$ 改变，条件方差等于边缘方差；在联合高斯前提下，这对应独立。

:::EXAMPLE
**例：课堂二维高斯条件分布**

设：

$$
\boldsymbol\mu=
\begin{bmatrix}1\\-1\end{bmatrix},
\qquad
\boldsymbol\Sigma=
\begin{bmatrix}2&2\\2&4\end{bmatrix}.
$$

求 $X_1\mid X_2=x_2$。

代入公式：

$$
\mu_{1\mid2}
=1+2\cdot4^{-1}(x_2-(-1))
=1+\frac12(x_2+1)
=\frac32+\frac12x_2.
$$

条件方差：

$$
\sigma_{1\mid2}^2
=2-2\cdot4^{-1}\cdot2
=1.
$$

所以：

$$
\boxed{
X_1\mid X_2=x_2
\sim\mathcal N\left(
\frac32+\frac12x_2,
1
\right)}.
$$
:::

> **图片占位符（PPT 二元高斯条件分布页面）**：插入联合等高线、固定 $x_2$ 的竖直切片及对应一维条件高斯曲线，直观展示条件均值随观测移动、条件方差缩小。

### 协方差形式与精度矩阵形式

定义精度矩阵：

$$
\boldsymbol\Lambda=\boldsymbol\Sigma^{-1},
$$

自然参数：

$$
\boldsymbol\eta=\boldsymbol\Lambda\boldsymbol\mu.
$$

高斯密度可写为：

$$
p(\mathbf x)
\propto
\exp\left(-\frac12\mathbf x^T\boldsymbol\Lambda\mathbf x
+\boldsymbol\eta^T\mathbf x\right).
$$

将其分块：

$$
\boldsymbol\Lambda=
\begin{bmatrix}
\boldsymbol\Lambda_{11}&\boldsymbol\Lambda_{12}\\
\boldsymbol\Lambda_{21}&\boldsymbol\Lambda_{22}
\end{bmatrix},
\qquad
\boldsymbol\eta=
\begin{bmatrix}
\boldsymbol\eta_1\\
\boldsymbol\eta_2
\end{bmatrix}.
$$

条件分布在精度参数下可以直接读出：

$$
\boxed{
\mathbf X_1\mid\mathbf X_2=\mathbf x_2
\sim\mathcal N\left(
\boldsymbol\Lambda_{11}^{-1}
(\boldsymbol\eta_1-\boldsymbol\Lambda_{12}\mathbf x_2),
\boldsymbol\Lambda_{11}^{-1}
\right)}.
$$

边缘化时需要 Schur complement：

$$
\boldsymbol\Lambda_{\mathrm{marg},2}
=\boldsymbol\Lambda_{22}
-\boldsymbol\Lambda_{21}
\boldsymbol\Lambda_{11}^{-1}
\boldsymbol\Lambda_{12},
$$

$$
\boldsymbol\eta_{\mathrm{marg},2}
=\boldsymbol\eta_2
-\boldsymbol\Lambda_{21}
\boldsymbol\Lambda_{11}^{-1}
\boldsymbol\eta_1.
$$

记忆方式：

- **协方差形式**：边缘分布容易，直接取子块；
- **精度形式**：条件分布容易，直接取对应精度块；
- 另一种运算通常需要 Schur complement。

---

## 线性高斯系统

### 模型与联合分布

设潜变量先验：

$$
\mathbf z\sim\mathcal N(\boldsymbol\mu_0,\boldsymbol\Sigma_0),
$$

观测模型：

$$
\mathbf y=W\mathbf z+\mathbf b+\boldsymbol\varepsilon,
$$

其中：

$$
\boldsymbol\varepsilon\sim\mathcal N(\mathbf0,\boldsymbol\Omega),
$$

且 $\boldsymbol\varepsilon$ 与 $\mathbf z$ 独立。因此：

$$
\mathbf y\mid\mathbf z
\sim\mathcal N(W\mathbf z+\mathbf b,\boldsymbol\Omega).
$$

联合向量：

$$
\begin{bmatrix}
\mathbf z\\
\mathbf y
\end{bmatrix}
$$

服从联合高斯，其均值为：

$$
\begin{bmatrix}
\boldsymbol\mu_0\\
W\boldsymbol\mu_0+\mathbf b
\end{bmatrix},
$$

协方差为：

$$
\boxed{
\begin{bmatrix}
\boldsymbol\Sigma_0
&\boldsymbol\Sigma_0W^T\\
W\boldsymbol\Sigma_0
&W\boldsymbol\Sigma_0W^T+\boldsymbol\Omega
\end{bmatrix}}.
$$

各块来源：

$$
\operatorname{Cov}(\mathbf z,\mathbf y)
=\operatorname{Cov}(\mathbf z,W\mathbf z+\boldsymbol\varepsilon)
=\boldsymbol\Sigma_0W^T,
$$

$$
\operatorname{Cov}(\mathbf y)
=W\boldsymbol\Sigma_0W^T+\boldsymbol\Omega.
$$

### 后验分布

由“高斯条件分布仍为高斯”可得：

$$
\boxed{
\mathbf z\mid\mathbf y
\sim\mathcal N(
\boldsymbol\mu_{\mathrm{post}},
\boldsymbol\Sigma_{\mathrm{post}})}.
$$

精度形式：

$$
\boxed{
\boldsymbol\Sigma_{\mathrm{post}}^{-1}
=\boldsymbol\Sigma_0^{-1}
+W^T\boldsymbol\Omega^{-1}W},
$$

$$
\boxed{
\boldsymbol\mu_{\mathrm{post}}
=\boldsymbol\Sigma_{\mathrm{post}}
\left[
\boldsymbol\Sigma_0^{-1}\boldsymbol\mu_0
+W^T\boldsymbol\Omega^{-1}(\mathbf y-\mathbf b)
\right]}.
$$

这一形式显示：

- 后验精度 = 先验精度 + 观测带来的精度；
- 后验均值是先验信息和测量信息按精度加权的结果；
- 噪声越小，$\boldsymbol\Omega^{-1}$ 越大，观测权重越高；
- 先验越确定，$\boldsymbol\Sigma_0^{-1}$ 越大，先验权重越高。

也可写成 Kalman 更新形式：

$$
K=\boldsymbol\Sigma_0W^T
(W\boldsymbol\Sigma_0W^T+\boldsymbol\Omega)^{-1},
$$

$$
\boxed{
\boldsymbol\mu_{\mathrm{post}}
=\boldsymbol\mu_0
+K(\mathbf y-W\boldsymbol\mu_0-\mathbf b)},
$$

$$
\boxed{
\boldsymbol\Sigma_{\mathrm{post}}
=\boldsymbol\Sigma_0
-\boldsymbol\Sigma_0W^T
(W\boldsymbol\Sigma_0W^T+\boldsymbol\Omega)^{-1}
W\boldsymbol\Sigma_0}.
$$

其中 $\mathbf y-W\boldsymbol\mu_0-\mathbf b$ 称为 innovation（新息），表示实际观测与先验预测之间的差异。

### 边缘分布

对 $\mathbf z$ 积分：

$$
p(\mathbf y)=\int p(\mathbf y\mid\mathbf z)p(\mathbf z)\,d\mathbf z.
$$

结果为：

$$
\boxed{
\mathbf y
\sim\mathcal N(
W\boldsymbol\mu_0+\mathbf b,
W\boldsymbol\Sigma_0W^T+\boldsymbol\Omega)}.
$$

可直接理解为：

- $W\mathbf z+\mathbf b$ 的均值为 $W\boldsymbol\mu_0+\mathbf b$；
- 信号不确定性变换成 $W\boldsymbol\Sigma_0W^T$；
- 再加独立噪声协方差 $\boldsymbol\Omega$。

### 一维高斯测量融合

设真实量：

$$
X\sim\mathcal N(\mu,\sigma^2),
$$

测量：

$$
Y=X+W,
$$

$$
W\sim\mathcal N(0,\sigma_w^2).
$$

似然：

$$
p(y\mid x)
=\mathcal N(y\mid x,\sigma_w^2).
$$

后验为：

$$
X\mid Y=y
\sim\mathcal N(\mu_{\mathrm{post}},\sigma_{\mathrm{post}}^2),
$$

其中：

$$
\boxed{
\frac1{\sigma_{\mathrm{post}}^2}
=\frac1{\sigma^2}+\frac1{\sigma_w^2}},
$$

$$
\boxed{
\sigma_{\mathrm{post}}^2
=\frac{\sigma^2\sigma_w^2}{\sigma^2+\sigma_w^2}},
$$

$$
\boxed{
\mu_{\mathrm{post}}
=\frac{\sigma_w^2}{\sigma^2+\sigma_w^2}\mu
+\frac{\sigma^2}{\sigma^2+\sigma_w^2}y}.
$$

后验均值是先验均值与测量值的加权平均。注意权重规律：

- 先验均值的权重与测量噪声方差 $\sigma_w^2$ 成正比；
- 测量值的权重与先验方差 $\sigma^2$ 成正比；
- 等价地，使用精度表示时，每项权重与自身精度成正比。

后验方差满足：

$$
\sigma_{\mathrm{post}}^2\le\sigma^2,
$$

$$
\sigma_{\mathrm{post}}^2\le\sigma_w^2.
$$

因此，准确的先验与测量融合后，不确定度低于单独使用任一信息源。

后验均值是 MMSE 估计器：

$$
\hat X(Y)=\mathbb E[X\mid Y].
$$

其条件均方误差为：

$$
\mathbb E[(X-\mu_{\mathrm{post}})^2\mid Y=y]
=\sigma_{\mathrm{post}}^2.
$$

### 多传感器融合

设同一未知均值 $\mu$ 被两类传感器测量：

$$
y_i^{(1)}\sim\mathcal N(\mu,v_1),
\qquad i=1,\ldots,n_1,
$$

$$
y_j^{(2)}\sim\mathcal N(\mu,v_2),
\qquad j=1,\ldots,n_2.
$$

假设各观测条件独立，并使用非信息先验，则后验精度为：

$$
\boxed{
\lambda_{\mathrm{post}}
=\frac{n_1}{v_1}+\frac{n_2}{v_2}}.
$$

后验方差：

$$
\boxed{
\sigma_{\mathrm{post}}^2
=\left(\frac{n_1}{v_1}+\frac{n_2}{v_2}\right)^{-1}}.
$$

记两组样本均值为：

$$
\bar y_1=\frac1{n_1}\sum_{i=1}^{n_1}y_i^{(1)},
$$

$$
\bar y_2=\frac1{n_2}\sum_{j=1}^{n_2}y_j^{(2)},
$$

则后验均值为：

$$
\boxed{
\mu_{\mathrm{post}}
=\frac{\frac{n_1}{v_1}\bar y_1+\frac{n_2}{v_2}\bar y_2}
{\frac{n_1}{v_1}+\frac{n_2}{v_2}}}.
$$

每组数据的权重由“样本数 × 单次测量精度”决定：

- 样本更多，权重更高；
- 方差更小，权重更高。

若传感器 1 精确、传感器 2 噪声大，则融合结果更接近传感器 1 的均值。

### 先验失配

贝叶斯推断依赖先验和似然。若似然准确，但使用了错误先验：

$$
p_{\mathrm{mis}}(x)
=\mathcal N(\mu_{\mathrm{mis}},\sigma_{\mathrm{mis}}^2),
$$

则失配后验均值为：

$$
\boxed{
\mu_{\mathrm{mis,post}}
=\frac{\sigma_w^2\mu_{\mathrm{mis}}
+\sigma_{\mathrm{mis}}^2y}
{\sigma_{\mathrm{mis}}^2+\sigma_w^2}}.
$$

若真实后验为：

$$
X\mid Y=y
\sim\mathcal N(\mu_{\mathrm{post}},\sigma_{\mathrm{post}}^2),
$$

则使用失配后验均值作为估计器时，在真实后验下的条件 MSE 为：

$$
\begin{aligned}
\operatorname{MSE}(\mu_{\mathrm{mis,post}}\mid y)
&=\mathbb E[(X-\mu_{\mathrm{mis,post}})^2\mid y]\\
&=\sigma_{\mathrm{post}}^2
+(\mu_{\mathrm{mis,post}}-\mu_{\mathrm{post}})^2.
\end{aligned}
$$

其中：

- 第一项是观测后仍无法消除的后验不确定性；
- 第二项是先验失配造成的估计偏差平方。

若错误先验非常自信，后验可能被拉向错误方向，估计效果甚至可能差于直接使用测量值。

:::WARNING
**历年试卷答案中的一处计算需谨慎核对**

在“$\mu_{\mathrm{mis}}=\mu+10\sigma$、$\sigma_{\mathrm{mis}}^2=\sigma^2$、$\sigma_w^2=\sigma^2$”的设定下：

$$
\mu_{\mathrm{mis,post}}-\mu_{\mathrm{post}}
=\frac12(\mu_{\mathrm{mis}}-\mu)=5\sigma,
$$

$$
\sigma_{\mathrm{post}}^2=\frac{\sigma^2}{2}.
$$

因此按前述 MSE 分解应有：

$$
\boxed{
\operatorname{MSE}
=\frac12\sigma^2+25\sigma^2
=25.5\sigma^2}.
$$

试卷答案后续写出的 $101\sigma^2$ 与其前面给出的后验均值公式不一致，复习时应以完整推导为准。无论采用哪一数值，结论都相同：严重错误的先验可能显著恶化估计。
:::

:::TIP
贝叶斯方法的局限主要来自建模失配：

- 先验不准确；
- 似然模型不准确；
- 未考虑分布漂移；
- 先验过度集中，数据难以纠正错误判断。

实践中应进行先验敏感性分析、模型检验和稳健性评估。
:::

---

## 指数分布族

:::TIP
这一部分课堂讲解速度较快，重点在理解统一形式、充分统计量和对数配分函数的意义。复杂证明与具体分布展开属于了解内容。
:::

### 标准形式

指数分布族写为：

$$
\boxed{
p(x\mid\boldsymbol\eta)
=h(x)\exp\left[
\boldsymbol\eta^T\mathbf T(x)-A(\boldsymbol\eta)
\right]}.
$$

其中：

- $h(x)$：基准测度；
- $\mathbf T(x)$：充分统计量；
- $\boldsymbol\eta$：自然参数；
- $A(\boldsymbol\eta)$：对数配分函数。

为了使分布归一化：

$$
A(\boldsymbol\eta)
=\log\int h(x)
\exp(\boldsymbol\eta^T\mathbf T(x))\,dx.
$$

进一步区分：

- 若参数本身就是自然参数，称为规范形式（canonical form）；
- 若 $\mathbf T(x)=x$，称为自然指数族（natural exponential family）；
- 若自然参数由更低维参数经非线性映射得到，称为弯曲指数族（curved exponential family）；
- 若充分统计量之间存在线性依赖，表示可能过完备，自然参数不唯一；
- 最小表示中自然参数可识别，并定义矩参数

$$
\mathbf m=\mathbb E[\mathbf T(X)].
$$

许多常用分布属于指数族：

- Bernoulli；
- Binomial；
- Poisson；
- Gaussian；
- Gamma；
- Beta；
- Dirichlet。

#### Bernoulli 的指数族形式

$$
p(x\mid\mu)=\mu^x(1-\mu)^{1-x}.
$$

改写为：

$$
p(x\mid\mu)
=\exp\left[
x\log\frac\mu{1-\mu}+\log(1-\mu)
\right].
$$

因此：

$$
T(x)=x,
$$

$$
\eta=\log\frac\mu{1-\mu},
$$

$$
A(\eta)=\log(1+e^\eta).
$$

自然参数 $\eta$ 就是 log-odds。

#### 一维高斯的指数族形式

$$
p(x\mid\mu,\sigma^2)
=\frac1{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$$

展开指数：

$$
p(x)
=\exp\left[
\frac\mu{\sigma^2}x
-\frac1{2\sigma^2}x^2
-A(\boldsymbol\eta)
\right].
$$

因此可取：

$$
\mathbf T(x)=
\begin{bmatrix}x\\x^2\end{bmatrix},
$$

$$
\boldsymbol\eta=
\begin{bmatrix}
\mu/\sigma^2\\
-1/(2\sigma^2)
\end{bmatrix}.
$$

### 对数配分函数

对：

$$
A(\boldsymbol\eta)
=\log\int h(x)e^{\boldsymbol\eta^T\mathbf T(x)}dx,
$$

求梯度：

$$
\boxed{
\nabla_{\boldsymbol\eta}A(\boldsymbol\eta)
=\mathbb E_{p(x\mid\boldsymbol\eta)}[\mathbf T(X)]}.
$$

求 Hessian：

$$
\boxed{
\nabla_{\boldsymbol\eta}^2A(\boldsymbol\eta)
=\operatorname{Cov}_{p(x\mid\boldsymbol\eta)}[\mathbf T(X)]}.
$$

因此 Hessian 半正定，$A(\boldsymbol\eta)$ 为凸函数。

在正则指数族中，这个 Hessian 也对应 Fisher 信息矩阵：

$$
\mathcal I(\boldsymbol\eta)
=\nabla^2A(\boldsymbol\eta).
$$

这把三个概念联系起来：

- 对数配分函数的曲率；
- 充分统计量的波动；
- 参数的可估计精度。

### 充分统计量与最大似然

对独立同分布数据 $\mathcal D=\{x_1,\ldots,x_N\}$：

$$
\begin{aligned}
p(\mathcal D\mid\boldsymbol\eta)
&=\prod_{n=1}^Nh(x_n)
\exp\left[
\boldsymbol\eta^T\mathbf T(x_n)-A(\boldsymbol\eta)
\right]\\
&=\left(\prod_{n=1}^Nh(x_n)\right)
\exp\left[
\boldsymbol\eta^T\sum_{n=1}^N\mathbf T(x_n)
-NA(\boldsymbol\eta)
\right].
\end{aligned}
$$

关于参数的全部数据信息通过：

$$
\boxed{\mathbf T(\mathcal D)=\sum_{n=1}^N\mathbf T(x_n)}
$$

进入似然，因此称为充分统计量。

对数似然：

$$
\ell(\boldsymbol\eta)
=\boldsymbol\eta^T\sum_{n=1}^N\mathbf T(x_n)
-NA(\boldsymbol\eta)+\text{const}.
$$

令梯度为 $0$：

$$
\sum_{n=1}^N\mathbf T(x_n)
-N\nabla A(\boldsymbol\eta)=0.
$$

利用 $\nabla A=\mathbb E[\mathbf T(X)]$：

$$
\boxed{
\mathbb E_{p(x\mid\hat{\boldsymbol\eta})}[\mathbf T(X)]
=\frac1N\sum_{n=1}^N\mathbf T(x_n)}.
$$

即指数族的 MLE 满足**矩匹配（moment matching）**：模型充分统计量的期望等于样本充分统计量的平均值。

#### Pitman–Koopman–Darmois 定理

在适当正则条件下，若：

- 样本独立同分布；
- 参数空间为开集；
- 分布支持集不依赖参数；
- 存在维数不随样本量 $N$ 增长的充分统计量；

则该分布族必须属于指数族。

这一结论解释了指数族的重要性：它能够把任意规模的数据压缩成固定维度的统计量，同时保留关于参数的全部信息。

### 最大熵与指数族

只知道若干期望约束：

$$
\mathbb E_p[T_k(X)]=\tau_k,
\qquad k=1,\ldots,K,
$$

以及归一化约束：

$$
\int p(x)dx=1.
$$

希望在所有满足约束的分布中选择熵最大的分布：

$$
\max_p H[p]
=-\int p(x)\log p(x)dx.
$$

构造拉格朗日泛函并做变分，可得到：

$$
p(x)
\propto
\exp\left(\sum_{k=1}^K\eta_kT_k(x)\right).
$$

因此，最大熵解属于指数分布族。

典型结论：

- 只知道有限支持区间，最大熵分布是均匀分布；
- 只知道正值变量均值，最大熵分布是指数分布；
- 只知道实数变量的均值和方差，最大熵分布是高斯分布。

最大熵原则的含义是：只编码已经明确知道的约束，不额外加入未经数据支持的结构。

---

## 马尔可夫链

:::TIP
课堂中这一部分用于说明“结构如何降低高维联合分布的复杂度”。重点掌握马尔可夫性质、联合分解、转移矩阵和平稳分布。
:::

### 马尔可夫性质

随机过程 $X_1,X_2,\ldots$ 满足一阶马尔可夫性质，若：

$$
\boxed{
p(x_{t+1}\mid x_1,\ldots,x_t)
=p(x_{t+1}\mid x_t)}.
$$

含义：给定当前状态后，下一状态与更早历史条件独立。

更一般的时间间隔形式：

$$
p(x_{t+\tau}\mid x_t,x_{t-1},\ldots)
=p(x_{t+\tau}\mid x_t).
$$

马尔可夫假设是一种结构化近似。它用当前状态汇总历史中与未来有关的信息。

若转移规律不随时间变化：

$$
p(X_{t+1}\mid X_t)=p(X_{s+1}\mid X_s),
$$

则称为齐次或时不变马尔可夫链。

### 联合分布分解

一般链式法则：

$$
p(x_1,\ldots,x_T)
=p(x_1)\prod_{t=2}^Tp(x_t\mid x_1,\ldots,x_{t-1}).
$$

应用马尔可夫性质：

$$
\boxed{
p(x_1,\ldots,x_T)
=p(x_1)\prod_{t=2}^Tp(x_t\mid x_{t-1})}.
$$

参数数量由描述任意高阶历史依赖，降低为描述相邻状态转移。

这种思想是以下模型的基础：

- 隐马尔可夫模型（HMM）；
- 状态空间模型；
- 动态贝叶斯网络；
- 马尔可夫决策过程（MDP）；
- 序列滤波与跟踪。

### 转移矩阵与 Chapman–Kolmogorov 方程

对有限状态空间 $\{1,\ldots,K\}$，定义一步转移概率：

$$
A_{ij}=P(X_{t+1}=j\mid X_t=i).
$$

转移矩阵：

$$
A=
\begin{bmatrix}
A_{11}&\cdots&A_{1K}\\
\vdots&\ddots&\vdots\\
A_{K1}&\cdots&A_{KK}
\end{bmatrix}.
$$

每一行满足：

$$
A_{ij}\ge0,
\qquad
\sum_{j=1}^KA_{ij}=1.
$$

若某状态 $i$ 满足：

$$
A_{ii}=1,
$$

则一旦进入该状态便不会离开，称为吸收状态（absorbing state）。

若状态分布用行向量 $\boldsymbol\pi_t$ 表示：

$$
\boldsymbol\pi_{t+1}=\boldsymbol\pi_tA.
$$

$m$ 步转移矩阵：

$$
A^{(m)}=A^m.
$$

Chapman–Kolmogorov 方程：

$$
\boxed{
P(X_{t+m+n}=j\mid X_t=i)
=\sum_kP(X_{t+m+n}=j\mid X_{t+m}=k)
P(X_{t+m}=k\mid X_t=i)}.
$$

矩阵形式：

$$
\boxed{A^{m+n}=A^mA^n}.
$$

它体现了对中间状态进行边缘化。

### 平稳分布与全局平衡

若分布 $\boldsymbol\pi$ 满足：

$$
\boxed{\boldsymbol\pi=\boldsymbol\pi A},
$$

则称其为平稳分布（stationary distribution）。若系统初始分布就是 $\boldsymbol\pi$，经过任意步后分布保持不变。

分量形式：

$$
\pi_j=\sum_i\pi_iA_{ij}.
$$

这称为全局平衡：流入状态 $j$ 的总概率质量等于状态 $j$ 本身的平稳概率质量。

更强的 detailed balance（细致平衡）条件为：

$$
\pi_iA_{ij}=\pi_jA_{ji},
\qquad \forall i,j.
$$

细致平衡可推出平稳性，但平稳分布未必满足细致平衡。

---

## 散度度量

散度用于衡量两个概率分布的差异。它在以下问题中出现：

- 拟合模型分布与数据分布；
- 比较近似后验与真实后验；
- 训练生成模型；
- 量化观测带来的信息增益；
- 分析统计估计和优化算法。

多数散度不满足距离的全部公理，因此不能直接称为度量。

### f-divergence

设 $p,q$ 为两个分布，$f:(0,\infty)\to\mathbb R$ 为凸函数且 $f(1)=0$，定义：

$$
\boxed{
D_f(p\|q)
=\int q(x)f\left(\frac{p(x)}{q(x)}\right)dx}.
$$

不同的 $f$ 产生不同散度：

- KL 散度；
- 反向 KL 散度；
- Pearson $\chi^2$ 散度；
- Hellinger 距离的平方；
- total variation 的相关形式；
- $\alpha$-divergence。

f-divergence 的共同特征是比较同一点处的密度比 $p(x)/q(x)$。

#### $\alpha$-divergence

一种常见定义为：

$$
D_\alpha(p\|q)
=\frac{4}{1-\alpha^2}
\left[
1-\int
p(x)^{(1+\alpha)/2}
q(x)^{(1-\alpha)/2}dx
\right].
$$

改变 $\alpha$ 可以在不同的 mode-covering 与 mode-seeking 行为之间过渡，并把多种常见散度放入统一框架。

#### Hellinger 距离

一种常见形式为：

$$
H^2(p,q)
=\frac12\int(\sqrt{p(x)}-\sqrt{q(x)})^2dx.
$$

它对称、有界，并能写成 f-divergence。

#### Pearson $\chi^2$ 散度

$$
D_{\chi^2}(p\|q)
=\int\frac{(p(x)-q(x))^2}{q(x)}dx.
$$

当 $q(x)$ 很小时，该散度会对局部误差非常敏感。

#### Integral Probability Metric

另一类分布差异定义为：

$$
D_{\mathcal F}(p,q)
=\sup_{f\in\mathcal F}
\left|
\mathbb E_p[f(X)]-\mathbb E_q[f(X)]
\right|.
$$

通过选择函数类 $\mathcal F$ 可得到：

- total variation；
- Maximum Mean Discrepancy（MMD）；
- Wasserstein 距离。

它们从“两个分布对一组测试函数的期望是否一致”这一角度比较分布。

### 信息熵

离散随机变量 $X$ 的 Shannon entropy 定义为：

$$
\boxed{
H(X)=-\sum_xp(x)\log p(x)}.
$$

若以 $2$ 为对数底，单位为 bit；若以 $e$ 为底，单位为 nat。

熵衡量观测前的不确定性，也等于最优无损编码下的平均信息量尺度。

#### 公平硬币

$$
P(H)=P(T)=\frac12,
$$

所以：

$$
H(X)
=-2\times\frac12\log_2\frac12
=1\ \text{bit}.
$$

若硬币严重偏向某一面，熵会小于 $1$ bit；结果越可预测，熵越低。

#### 天平寻找假硬币的信息下界

有 $24$ 枚外观相同的硬币，其中一枚较轻，使用没有砝码的天平寻找假币。一次称量有三种结果：

- 左盘轻；
- 右盘轻；
- 两边平衡。

一次称量最多提供：

$$
\log_2 3\ \text{bit}
$$

信息。假币位置有 $24$ 种可能，初始不确定性为：

$$
\log_2 24\ \text{bit}.
$$

若称量 $k$ 次，至少需要：

$$
k\log_2 3\ge\log_2 24.
$$

因此：

$$
\boxed{k\ge3}.
$$

这给出任何方案都无法突破的信息论下界；真正设计三次称量方案还需要构造具体决策树。

:::TIP
熵回答“至少需要多少信息”，算法设计回答“如何通过具体操作获得这些信息”。性能边界与实现方法需要分别研究。
:::

### KL 散度

Kullback–Leibler divergence 定义为：

$$
\boxed{
D_{\mathrm{KL}}(p\|q)
=\int p(x)\log\frac{p(x)}{q(x)}dx}.
$$

离散形式：

$$
D_{\mathrm{KL}}(p\|q)
=\sum_xp(x)\log\frac{p(x)}{q(x)}.
$$

它也可写成：

$$
D_{\mathrm{KL}}(p\|q)
=-H(p)-\mathbb E_p[\log q(X)],
$$

其中熵为：

$$
H(p)=-\mathbb E_p[\log p(X)].
$$

交叉熵为：

$$
H(p,q)=-\mathbb E_p[\log q(X)].
$$

因此：

$$
\boxed{D_{\mathrm{KL}}(p\|q)=H(p,q)-H(p)}.
$$

固定 $p$ 时，最小化交叉熵等价于最小化 KL 散度。

:::WARNING
KL 散度一般不对称：

$$
D_{\mathrm{KL}}(p\|q)
\ne D_{\mathrm{KL}}(q\|p).
$$

它也不满足三角不等式，因此不构成严格意义上的距离。
:::

若存在 $p(x)>0$ 但 $q(x)=0$ 的区域，则：

$$
D_{\mathrm{KL}}(p\|q)=\infty.
$$

这说明正向 KL 强烈惩罚模型遗漏真实分布支持集。

### KL 散度的性质

#### 非负性

$$
\boxed{D_{\mathrm{KL}}(p\|q)\ge0}.
$$

等号成立当且仅当 $p=q$（几乎处处）。

可由 Jensen 不等式或 $\log u\le u-1$ 证明。

#### 连续性与支持集边界

在 $p(x),q(x)>0$ 的区域，KL 对参数通常连续。边界处需要单独处理：

$$
\lim_{p\to0^+}p\log\frac pq=0,
$$

但当 $p>0$ 且 $q\to0^+$ 时：

$$
p\log\frac pq\to\infty.
$$

因此，近似分布是否覆盖目标分布的支持集，会直接影响 KL 是否有限。

#### 均匀支持集更新的信息量

设原分布 $q$ 在 $N$ 个状态上均匀，获得信息后，新分布 $p$ 只在其中 $N'$ 个状态上均匀，且 $N'\le N$。则：

$$
\boxed{
D_{\mathrm{KL}}(p\|q)
=\log\frac{N}{N'}}.
$$

可行状态从 $N$ 个缩小到 $N'$ 个时，KL 正好量化这次排除不确定性的所得信息。

#### 重参数化不变性

若 $y=f(x)$ 为可逆光滑变换，$p_Y,q_Y$ 为变换后的分布，则：

$$
D_{\mathrm{KL}}(p_X\|q_X)
=D_{\mathrm{KL}}(p_Y\|q_Y).
$$

变换中的 Jacobian 因子在密度比中抵消。

#### 链式法则

对联合分布：

$$
\boxed{
D_{\mathrm{KL}}(p(x,y)\|q(x,y))
=D_{\mathrm{KL}}(p(x)\|q(x))
+\mathbb E_{p(x)}
D_{\mathrm{KL}}(p(y\mid x)\|q(y\mid x))}.
$$

联合分布的差异可分解为：

- 边缘分布差异；
- 在真实边缘分布加权下的条件分布差异。

#### Change-of-measure inequality

对任意可积函数 $\varphi$，有：

$$
\boxed{
\mathbb E_P[\varphi]
\le
\log\mathbb E_Q[e^{\varphi}]
+D_{\mathrm{KL}}(P\|Q)}.
$$

它把分布 $P$ 下难以计算的期望，用分布 $Q$ 下的指数矩与两分布的 KL 差异控制，是概率界、泛化误差和鲁棒分析中的常用工具。

#### 数据处理不等式

若 $X\to Y$ 经过同一随机变换或信道，则：

$$
\boxed{
D_{\mathrm{KL}}(p_X\|q_X)
\ge
D_{\mathrm{KL}}(p_Y\|q_Y)}.
$$

数据处理不能增加区分两个分布的信息。边缘化是数据处理的一种，因此：

$$
D_{\mathrm{KL}}(p(x,y)\|q(x,y))
\ge D_{\mathrm{KL}}(p(x)\|q(x)).
$$

#### 局部二次近似与 Fisher 信息

当参数 $\boldsymbol\theta$ 发生微小变化 $d\boldsymbol\theta$ 时：

$$
D_{\mathrm{KL}}
\bigl(p_{\boldsymbol\theta}
\|p_{\boldsymbol\theta+d\boldsymbol\theta}\bigr)
\approx
\frac12d\boldsymbol\theta^T
\mathcal I(\boldsymbol\theta)
 d\boldsymbol\theta.
$$

Fisher 信息给出了概率分布空间中的局部几何。

### 正向 KL 与反向 KL

设真实分布 $p$ 为多峰分布，用单峰分布 $q$ 近似。

#### 正向 KL

$$
\min_qD_{\mathrm{KL}}(p\|q).
$$

该目标对 $p(x)>0$ 而 $q(x)$ 很小的区域惩罚很大，因此 $q$ 倾向于覆盖 $p$ 的所有主要概率质量，表现为：

- **mode covering**；
- 可能在多个峰之间分配较大方差；
- 避免漏掉真实分布支持区域。

MLE 最小化经验分布到模型的正向 KL。

若近似分布 $q_{\boldsymbol\eta}$ 属于指数族，最小化：

$$
D_{\mathrm{KL}}(p\|q_{\boldsymbol\eta})
$$

的一阶最优条件为：

$$
\boxed{
\mathbb E_p[\mathbf T(X)]
=
\mathbb E_{q_{\boldsymbol\eta}}[\mathbf T(X)]}.
$$

因此正向 KL 投影也称为**矩投影（moment projection / M-projection）**：近似分布匹配目标分布的充分统计量矩。

#### 反向 KL

$$
\min_qD_{\mathrm{KL}}(q\|p).
$$

期望在 $q$ 下计算。若 $q$ 集中在 $p$ 的某个高概率峰附近，可以避开低密度区域，因此常表现为：

- **mode seeking**；
- 选择一个主要峰；
- 低估多峰分布的整体不确定性。

变分推断常最小化近似后验 $q$ 到真实后验 $p$ 的反向 KL。把目标分布投影到受限近似族的这一方向也常称为**信息投影（information projection / I-projection）**。由于目标中期望对 $q$ 计算，近似分布倾向于避开目标分布的低密度区域。

> **图片占位符（上课 PPT 正向 / 反向 KL 页面）**：插入双峰真实分布与单高斯近似图。左图展示正向 KL 覆盖两个峰，右图展示反向 KL 选择其中一个峰。

### KL、估计与贝叶斯推断

#### MLE 是 KL 投影

前文已得：

$$
\hat\theta_{\mathrm{ML}}
=\arg\min_\theta
D_{\mathrm{KL}}(p_D\|q_\theta).
$$

因此 MLE 将经验分布投影到参数模型族中。

#### 贝叶斯后验是变分优化的解

贝叶斯公式：

$$
p(z\mid x)=\frac{p(x,z)}{p(x)}.
$$

对任意分布 $q(z)$：

$$
\begin{aligned}
D_{\mathrm{KL}}(q(z)\|p(z\mid x))
&=\mathbb E_q\left[
\log\frac{q(z)}{p(x,z)}
\right]+
\log p(x).
\end{aligned}
$$

由于 $\log p(x)$ 与 $q$ 无关：

$$
\boxed{
p(z\mid x)
=\arg\min_qD_{\mathrm{KL}}(q(z)\|p(z\mid x))}.
$$

若将 $q$ 限制在某一简单分布族中，就得到变分推断。

也可定义 evidence lower bound：

$$
\operatorname{ELBO}(q)
=\mathbb E_q[\log p(x,z)]-
\mathbb E_q[\log q(z)].
$$

满足：

$$
\log p(x)
=\operatorname{ELBO}(q)
+D_{\mathrm{KL}}(q(z)\|p(z\mid x)).
$$

最大化 ELBO 等价于在给定近似族中最小化反向 KL。

#### 同一指数族分布之间的 KL

设：

$$
p_1(x)=h(x)e^{\boldsymbol\eta_1^T\mathbf T(x)-A(\boldsymbol\eta_1)},
$$

$$
p_2(x)=h(x)e^{\boldsymbol\eta_2^T\mathbf T(x)-A(\boldsymbol\eta_2)}.
$$

则：

$$
\boxed{
D_{\mathrm{KL}}(p_1\|p_2)
=(\boldsymbol\eta_1-\boldsymbol\eta_2)^T
\nabla A(\boldsymbol\eta_1)
-A(\boldsymbol\eta_1)+A(\boldsymbol\eta_2)}.
$$

它等于对数配分函数 $A$ 诱导的 Bregman divergence，说明指数族几何与 KL 散度紧密相连。

#### 高斯分布之间的 KL

若：

$$
p=\mathcal N(\boldsymbol\mu_p,\boldsymbol\Sigma_p),
$$

$$
q=\mathcal N(\boldsymbol\mu_q,\boldsymbol\Sigma_q),
$$

维数为 $d$，则：

$$
\boxed{
\begin{aligned}
D_{\mathrm{KL}}(p\|q)
=\frac12\bigg[
&\operatorname{tr}(\boldsymbol\Sigma_q^{-1}\boldsymbol\Sigma_p)
+(\boldsymbol\mu_q-\boldsymbol\mu_p)^T
\boldsymbol\Sigma_q^{-1}
(\boldsymbol\mu_q-\boldsymbol\mu_p)\\
&-d+\log\frac{|\boldsymbol\Sigma_q|}{|\boldsymbol\Sigma_p|}
\bigg].
\end{aligned}}
$$

四部分分别衡量：

- 协方差尺度与方向差异；
- 均值差异的马氏距离；
- 维数校正；
- 体积差异。

---

## 本章考法与易错点

结合课堂强调、两次作业和历年试卷，本章最重要的考查方式如下。

### 1. 从先验和似然求后验

高频题型：

$$
p(x),\quad p(y\mid x)
\quad\Longrightarrow\quad
p(x\mid y).
$$

基本步骤：

1. 写出

$$
p(x\mid y)\propto p(x)p(y\mid x);
$$

2. 对指数中的 $x$ 展开；
3. 合并 $x^2$ 与 $x$ 的系数；
4. 配方或按自然参数识别分布；
5. 写出后验均值、后验方差；
6. 解释不确定性是否下降。

一维高斯共轭模型必须熟练：

$$
\frac1{\sigma_{\mathrm{post}}^2}
=\frac1{\sigma^2}+\frac1{\sigma_w^2},
$$

$$
\mu_{\mathrm{post}}
=\sigma_{\mathrm{post}}^2
\left(
\frac\mu{\sigma^2}+
\frac y{\sigma_w^2}
\right).
$$

### 2. 多元高斯的条件分布

二维或分块高斯条件公式是核心：

$$
\boldsymbol\mu_{1\mid2}
=\boldsymbol\mu_1
+\boldsymbol\Sigma_{12}\boldsymbol\Sigma_{22}^{-1}
(\mathbf x_2-\boldsymbol\mu_2),
$$

$$
\boldsymbol\Sigma_{1\mid2}
=\boldsymbol\Sigma_{11}
-\boldsymbol\Sigma_{12}\boldsymbol\Sigma_{22}^{-1}
\boldsymbol\Sigma_{21}.
$$

易错点：

- 条件谁、观测谁决定分块顺序；
- 均值中的偏差是 $\mathbf x_2-\boldsymbol\mu_2$；
- 逆矩阵对应被观测变量的协方差块；
- 条件方差不含具体观测值；
- $\rho=0$ 推出独立需要联合高斯前提。

### 3. 随机变量变换

做题顺序：

1. 先确定 $Y$ 的支持集；
2. 解 $y=g(x)$；
3. 判断是否存在多个反函数分支；
4. 对每个分支计算 Jacobian 绝对值；
5. 将所有分支密度相加；
6. 检查结果是否非负、积分是否为 $1$。

高频例子：

- 线性高斯变换；
- $Y=X^2$；
- $Y=1/X$；
- 多元仿射高斯变换。

### 4. MMSE 与 MAP 的区分

- 要求连续估计值且损失为平方误差：

$$
\hat x=\mathbb E[X\mid Y=y].
$$

- 要求离散类别且以错误率为代价：

$$
\hat x=\arg\max_xp(x\mid y).
$$

易错点：直接把后验均值当成离散判决结果，或把 MAP 当成平方损失下的普遍最优估计。

### 5. 最大似然估计

需要理解：

- 数据固定，参数变化；
- 独立样本使联合似然变成乘积；
- 对数似然把乘积变成求和；
- MLE 等价于最小化经验分布到模型的正向 KL；
- 支持集依赖参数时，必须先写指示函数和可行域。

均匀分布 MLE 中：

$$
\hat a=\max_n|x_n|,
$$

不能只对 $-N\log(2a)$ 求导而忽略支持集约束。

### 6. 独立、不相关与联合高斯

必须记住逻辑关系：

$$
X\perp Y\Longrightarrow\operatorname{Cov}(X,Y)=0,
$$

反向一般不成立。

在联合高斯条件下：

$$
\operatorname{Cov}(X,Y)=0
\Longleftrightarrow X\perp Y.
$$

作业中的 $Y=X^2$、$Y=WX$ 都是典型反例，应能完整说明“协方差为零”和“仍存在确定性依赖”两部分。

### 7. 概率问题要明确观测机制

两个孩子问题、Monty Hall 问题都说明：

> 条件概率取决于信息如何生成，不能只看一句自然语言中出现了哪些事实。

应明确：

- 谁被随机选择；
- 哪些信息会被报告；
- 报告规则是否依赖隐藏状态；
- 条件事件对应哪些样本点。

### 8. 先验失配与模型检验

后验方差小只表示模型内部认为自己更确定，不自动保证估计接近真实值。先验或似然失配时，需要同时检查：

- 偏差；
- 真实 MSE；
- 预测校准；
- 对先验变化的敏感性。

历年试题中的失配先验题强调：过强的错误先验可能使融合结果差于仅使用测量。

### 9. 了解性内容

课堂对下列内容讲解较快，复习时应理解概念和基本公式：

- 指数族统一形式；
- 对数配分函数的一、二阶导数；
- 最大熵与指数族；
- 马尔可夫链的联合分解；
- KL 散度的性质；
- 正向 KL 与反向 KL 的行为差异。

---

## 公式地图

### 概率三规则

求和 / 边缘化：

$$
p(x)=\sum_y p(x,y)
\quad\text{或}\quad
p(x)=\int p(x,y)dy.
$$

乘积规则：

$$
p(x,y)=p(x\mid y)p(y)=p(y\mid x)p(x).
$$

贝叶斯公式：

$$
p(x\mid y)=\frac{p(y\mid x)p(x)}{p(y)}.
$$

### 估计与判决

MMSE：

$$
\hat x_{\mathrm{MMSE}}(y)=\mathbb E[X\mid Y=y].
$$

MAP：

$$
\hat x_{\mathrm{MAP}}(y)=\arg\max_xp(x\mid y).
$$

MLE：

$$
\hat\theta_{\mathrm{ML}}
=\arg\max_\theta\sum_{n=1}^N\log p(x_n\mid\theta).
$$

### 变量变换

一维单调：

$$
p_Y(y)=p_X(g^{-1}(y))
\left|\frac{d}{dy}g^{-1}(y)\right|.
$$

多分支：

$$
p_Y(y)=\sum_i p_X(h_i(y))|h_i'(y)|.
$$

多维双射：

$$
p_{\mathbf Y}(\mathbf y)
=p_{\mathbf X}(f^{-1}(\mathbf y))
|\det J_{f^{-1}}(\mathbf y)|.
$$

### 多元高斯

边缘：

$$
\mathbf X_1\sim\mathcal N(\boldsymbol\mu_1,\boldsymbol\Sigma_{11}).
$$

条件：

$$
\boldsymbol\mu_{1\mid2}
=\boldsymbol\mu_1+
\boldsymbol\Sigma_{12}\boldsymbol\Sigma_{22}^{-1}
(\mathbf x_2-\boldsymbol\mu_2),
$$

$$
\boldsymbol\Sigma_{1\mid2}
=\boldsymbol\Sigma_{11}
-\boldsymbol\Sigma_{12}\boldsymbol\Sigma_{22}^{-1}
\boldsymbol\Sigma_{21}.
$$

线性变换：

$$
A\mathbf X+\mathbf b
\sim\mathcal N(A\boldsymbol\mu+\mathbf b,
A\boldsymbol\Sigma A^T).
$$

### 线性高斯后验

$$
\boldsymbol\Sigma_{\mathrm{post}}^{-1}
=\boldsymbol\Sigma_0^{-1}+W^T\boldsymbol\Omega^{-1}W,
$$

$$
\boldsymbol\mu_{\mathrm{post}}
=\boldsymbol\Sigma_{\mathrm{post}}
\left[
\boldsymbol\Sigma_0^{-1}\boldsymbol\mu_0
+W^T\boldsymbol\Omega^{-1}(\mathbf y-\mathbf b)
\right].
$$

### 指数族

$$
p(x\mid\boldsymbol\eta)
=h(x)e^{\boldsymbol\eta^T\mathbf T(x)-A(\boldsymbol\eta)},
$$

$$
\nabla A(\boldsymbol\eta)=\mathbb E[\mathbf T(X)],
$$

$$
\nabla^2A(\boldsymbol\eta)=\operatorname{Cov}[\mathbf T(X)].
$$

### 马尔可夫链

$$
p(x_1,\ldots,x_T)
=p(x_1)\prod_{t=2}^Tp(x_t\mid x_{t-1}),
$$

$$
\boldsymbol\pi_{t+1}=\boldsymbol\pi_tA,
$$

$$
\boldsymbol\pi=\boldsymbol\pi A.
$$

### KL 散度

$$
D_{\mathrm{KL}}(p\|q)
=\mathbb E_p\left[\log\frac{p(X)}{q(X)}\right]\ge0.
$$

MLE：

$$
\hat\theta_{\mathrm{ML}}
=\arg\min_\theta D_{\mathrm{KL}}(p_D\|q_\theta).
$$

变分分解：

$$
\log p(x)
=\operatorname{ELBO}(q)
+D_{\mathrm{KL}}(q(z)\|p(z\mid x)).
$$

---

## 总结

这一章建立了海洋人工智能的概率语言：

- 海洋传播环境复杂，噪声、多径、多普勒和声速变化使不确定性成为问题的基本属性；
- 学习需要从有限样本中提取可泛化结构，先验知识与归纳偏置决定模型偏好的解释；
- 概率空间、公理、随机变量与变量变换提供严格的数学基础；
- 条件概率、全概率公式和贝叶斯定理完成信息更新；
- 后验均值解决平方损失下的估计问题，MAP 解决 $0$-$1$ 损失下的判决问题；
- MLE 可解释为经验分布到模型族的 KL 投影；
- 多元高斯和线性高斯系统给出可解析的边缘化、条件化与信息融合；
- 指数族、马尔可夫链和散度把常见概率模型、结构假设与学习目标统一起来。

最需要形成的思维方式是：

> 先确定随机变量和生成关系，写出联合分布；再根据观测进行边缘化与条件化；最后依据任务损失，从后验分布中选择合适的估计或判决。
