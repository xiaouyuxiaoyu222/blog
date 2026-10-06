---
title: 一元线性回归：OLS统计性质、极大似然估计与拟合优度
published: 2026-09-29
description: 一元线性回归模型的经典假设、OLS 的线性性/无偏性/有效性/一致性、参数估计量的抽样分布、极大似然估计、随机误差项方差估计、Stata 回归输出与拟合优度 R²。
tags: [计量经济学, 一元线性回归, OLS, MLE, 高斯马尔可夫定理, 拟合优度]
category: 课程笔记
draft: false
---

## 概述

:::WARNING
**课堂任务与成绩说明**

- 本节录音中**未识别到面向全班、明确与成绩挂钩的新作业 / 测试 / 考试安排**。
- 老师布置了一个**未明确说明计分的 Stata 练习要求**：国庆假期把老师云盘中的 demo 实际运行，**每一条命令至少执行两遍**，不要只看结果。
- 老师还提示：最小方差性的证明材料已放到云盘，课后需要自行复习。
:::

这一节的核心是把上一节“**怎么求出一条 OLS 回归线**”继续往前推进：

> 求出 $\hat\beta_0,\hat\beta_1$ 只是第一步。接下来要回答：这些估计量为什么可信？它们在重复抽样中怎样波动？误差方差怎样估计？回归线到底拟合得有多好？

整堂课可以串成一条主线：

1. **经典假设** $\rightarrow$ OLS 具有好的统计性质；
2. **高斯—马尔可夫定理** $\rightarrow$ OLS 是 BLUE；
3. **重复抽样 / DGP** $\rightarrow$ $\hat\beta_0,\hat\beta_1$ 本身也是随机变量，并具有抽样分布；
4. **正态误差** $\rightarrow$ 可以用极大似然法估计参数，且 $\beta_0,\beta_1$ 的 MLE 与 OLS 相同；
5. **$\sigma^2$ 未知** $\rightarrow$ 用残差估计随机误差项方差，再得到参数估计量的标准误；
6. **拟合优度** $\rightarrow$ 用总离差平方和分解得到 $R^2$，衡量回归线对样本波动的解释程度。

---

## 目录

- [教材与课堂位置](#教材与课堂位置)
- [一元线性回归模型的经典假设](#一元线性回归模型的经典假设)
  - [假设1：模型正确设定](#假设1模型正确设定)
  - [假设2：解释变量具有足够变异](#假设2解释变量具有足够变异)
  - [假设3：随机误差项条件均值为零](#假设3随机误差项条件均值为零)
  - [假设4：同方差且不同观测的误差不相关](#假设4同方差且不同观测的误差不相关)
  - [假设5：随机误差项服从正态分布](#假设5随机误差项服从正态分布)
- [OLS 估计量的统计性质](#ols-估计量的统计性质)
  - [线性性](#1-线性性)
  - [无偏性](#2-无偏性)
  - [有效性：最小方差性](#3-有效性最小方差性)
  - [高斯—马尔可夫定理与 BLUE](#高斯马尔可夫定理与-blue)
  - [一致性](#4-一致性)
- [DGP、重复抽样与抽样分布](#dgp重复抽样与抽样分布)
  - [总体分布、样本分布、抽样分布](#总体分布样本分布抽样分布)
  - [OLS 参数估计量的正态分布](#ols-参数估计量的正态分布)
- [极大似然估计 MLE](#极大似然估计-mle)
  - [MLE 的直觉](#mle-的直觉)
  - [一元线性回归的似然函数](#一元线性回归的似然函数)
  - [为什么 MLE 与 OLS 得到相同的 β 估计](#为什么-mle-与-ols-得到相同的-β-估计)
- [家庭可支配收入—消费支出例子](#家庭可支配收入消费支出例子)
  - [手工估计](#手工估计)
  - [Stata 操作](#stata-操作)
  - [Stata 输出怎么看](#stata-输出怎么看)
- [随机误差项方差与参数标准误](#随机误差项方差与参数标准误)
  - [OLS 下 σ² 的无偏估计](#ols-下-σ²-的无偏估计)
  - [MLE 下 σ² 的估计](#mle-下-σ²-的估计)
  - [标准差与标准误](#标准差与标准误)
- [拟合优度与 R²](#拟合优度与-r²)
  - [为什么 OLS 已经“最好拟合”还需要 R²](#为什么-ols-已经最好拟合还需要-r²)
  - [总离差平方和分解](#总离差平方和分解)
  - [可决系数 R²](#可决系数-r²)
  - [例子与 Stata 对照](#例子与-stata-对照)
- [本节知识链](#本节知识链)
- [课后任务](#课后任务)

---

## 教材与课堂位置

本节主要对应教材第二章，但课堂顺序和教材顺序有一点调整：

| 课堂内容 | 教材对应位置 |
| --- | --- |
| 经典假设、OLS 的线性性 / 无偏性 / 有效性 / 一致性 | §2.3 基本假设与普通最小二乘估计量的统计性质 |
| $\hat\beta_0,\hat\beta_1$ 的概率分布、$\sigma^2$ 的估计 | §2.4 参数估计量的概率分布及随机干扰项方差的估计 |
| 极大似然估计 MLE | **课堂补充内容** |
| 拟合优度、总离差平方和分解、$R^2$ | 教材 §2.2“拟合优度”；课堂 PPT 将其放在统计检验部分继续讲解 |

课堂 PPT 随后列出了“变量显著性检验、参数置信区间”，但**本节只讲到拟合优度**，后两项留到后续课程。

---

## 一元线性回归模型的经典假设

总体回归模型：

$$
Y_i=\beta_0+\beta_1X_i+\mu_i,\qquad i=1,2,\dots,n
$$

其中：

- $\beta_0,\beta_1$：总体中未知但固定的参数；
- $X_i,Y_i$：第 $i$ 个样本观测；
- $\mu_i$：所有未被模型显式解释的随机因素。

为什么需要假设？

> OLS 公式本身只告诉我们“怎样算出 $\hat\beta_0,\hat\beta_1$”；要进一步说明这些估计量是否无偏、是否稳定、能否进行统计推断，就必须对数据生成过程施加条件。

### 假设1：模型正确设定

模型需要选择：

- **正确的变量**：没有遗漏重要相关变量，也没有无意义地加入不相关变量；
- **正确的函数形式**：真实关系若应为某种函数形式，模型应与之匹配。

若这一步不成立，会出现 **specification error（设定偏误）**。

### 假设2：解释变量具有足够变异

解释变量 $X$ 必须真的“动起来”，否则无法用 $X$ 的变化解释 $Y$ 的变化。

大样本条件写为：

$$
\operatorname{Plim}\left[\frac{1}{n}\sum_{i=1}^n(X_i-\bar X)^2\right]=Q,
\qquad 0<Q<\infty
$$

直观上：

- $Q>0$：排除所有 $X_i$ 几乎相同的情形；
- $Q<\infty$：排除解释变量的波动无限发散。

### 假设3：随机误差项条件均值为零

$$
E(\mu_i\mid X)=0
$$

这是最关键的外生性条件之一。

由期望迭代法则可得：

$$
E(\mu_i)=0
$$

并且：

$$
\operatorname{Cov}(X_i,\mu_i)=0
$$

因此，模型中没有被观察到的随机因素在平均意义上不会随着 $X$ 系统性变化。

### 假设4：同方差且不同观测的误差不相关

**同方差：**

$$
\operatorname{Var}(\mu_i\mid X)=\sigma^2
$$

意味着误差的波动强度不随 $X$ 改变。

**不同观测之间的误差不相关：**

$$
\operatorname{Cov}(\mu_i,\mu_j\mid X)=0,
\qquad i\neq j
$$

也就是一个样本点的随机扰动不会系统性地带动另一个样本点的随机扰动。

### 假设5：随机误差项服从正态分布

$$
\mu_i\mid X\sim N(0,\sigma^2)
$$

于是：

$$
Y_i\mid X_i\sim N(\beta_0+\beta_1X_i,\sigma^2)
$$

:::TIP
教材把前四个条件称为 **Gauss–Markov assumptions（高斯—马尔可夫假设）**。第五个正态性假设主要用于小样本下得到精确的分布和统计推断；大样本下可以借助大数定律和中心极限定理放松正态性要求。
:::

---

## OLS 估计量的统计性质

记：

$$
x_i=X_i-\bar X,\qquad y_i=Y_i-\bar Y
$$

上一节已经得到 OLS：

$$
\hat\beta_1=\frac{\sum x_iy_i}{\sum x_i^2},
\qquad
\hat\beta_0=\bar Y-\hat\beta_1\bar X
$$

本节关心的重点变成：**如果不断重新抽样，这两个估计量会表现得怎样？**

### 1. 线性性

由于 $\sum x_i=0$：

$$
\hat\beta_1
=\frac{\sum x_iY_i}{\sum x_i^2}
=\sum k_iY_i
$$

其中：

$$
k_i=\frac{x_i}{\sum x_i^2}
$$

所以 $\hat\beta_1$ 是 $Y_i$ 的线性组合。

同理：

$$
\hat\beta_0
=\bar Y-\hat\beta_1\bar X
=\sum\left(\frac1n-\bar Xk_i\right)Y_i
=\sum w_iY_i
$$

因此 $\hat\beta_0$ 也是 $Y_i$ 的线性组合。

这里两个重要恒等式是：

$$
\sum k_i=0,
\qquad
\sum k_iX_i=1
$$

### 2. 无偏性

将总体模型代入 $\hat\beta_1$：

$$
\begin{aligned}
\hat\beta_1
&=\sum k_iY_i\\
&=\sum k_i(\beta_0+\beta_1X_i+\mu_i)\\
&=\beta_0\sum k_i+\beta_1\sum k_iX_i+\sum k_i\mu_i\\
&=\beta_1+\sum k_i\mu_i
\end{aligned}
$$

在 $E(\mu_i\mid X)=0$ 下：

$$
E(\hat\beta_1\mid X)
=\beta_1+\sum k_iE(\mu_i\mid X)
=\beta_1
$$

因此：

$$
\boxed{E(\hat\beta_1\mid X)=\beta_1}
$$

同理：

$$
\boxed{E(\hat\beta_0\mid X)=\beta_0}
$$

**无偏**的含义：一次样本得到的 $\hat\beta$ 可以高于真值，也可以低于真值；如果把同样的抽样过程重复很多次，估计量的平均值会落在真实参数上。

### 3. 有效性：最小方差性

在同方差且误差互不相关的条件下：

$$
\operatorname{Var}(\hat\beta_1\mid X)
=\operatorname{Var}\left(\sum k_iY_i\mid X\right)
=\sigma^2\sum k_i^2
=\boxed{\frac{\sigma^2}{\sum x_i^2}}
$$

而：

$$
\boxed{
\operatorname{Var}(\hat\beta_0\mid X)
=\sigma^2\frac{\sum X_i^2}{n\sum x_i^2}
=\sigma^2\left(\frac1n+\frac{\bar X^2}{\sum x_i^2}\right)
}
$$

#### 为什么说 OLS 方差最小？

假设还有另一个关于 $\beta_1$ 的**线性无偏估计量**：

$$
\tilde\beta_1=\sum c_iY_i,
\qquad c_i=k_i+d_i
$$

由于它也必须无偏，需要满足：

$$
\sum d_i=0,
\qquad
\sum d_iX_i=0
$$

于是：

$$
\begin{aligned}
\operatorname{Var}(\tilde\beta_1\mid X)
&=\sigma^2\sum(k_i+d_i)^2\\
&=\sigma^2\sum k_i^2+2\sigma^2\sum k_id_i+\sigma^2\sum d_i^2
\end{aligned}
$$

而：

$$
\sum k_id_i
=\frac{\sum x_id_i}{\sum x_i^2}
=\frac{\sum X_id_i-\bar X\sum d_i}{\sum x_i^2}
=0
$$

因此：

$$
\operatorname{Var}(\tilde\beta_1\mid X)
=
\operatorname{Var}(\hat\beta_1\mid X)
+\sigma^2\sum d_i^2
\geq
\operatorname{Var}(\hat\beta_1\mid X)
$$

所以，在所有线性无偏估计量中，OLS 的方差最小。

### 高斯—马尔可夫定理与 BLUE

由前面的三条性质：

- **Linear**：线性；
- **Unbiased**：无偏；
- **Best**：在线性无偏估计量中方差最小；

得到：

$$
\boxed{\text{OLS is BLUE: Best Linear Unbiased Estimator}}
$$

这就是 **Gauss–Markov theorem（高斯—马尔可夫定理）**。

:::WARNING
“Best” 的比较范围很重要：这里比较的是**线性无偏估计量**，判据是方差大小。
:::

### 4. 一致性

一致性研究的是**样本容量不断增大时**估计量是否逼近真实参数。

由：

$$
\hat\beta_1
=\beta_1+rac{\sum x_i\mu_i}{\sum x_i^2}
$$

上下同除以 $n$：

$$
\operatorname{Plim}(\hat\beta_1)
=eta_1+
\frac{
\operatorname{Plim}\left(\frac1n\sum x_i\mu_i\right)
}{
\operatorname{Plim}\left(\frac1n\sum x_i^2\right)
}
$$

简单随机抽样下，大数定律给出：

$$
\operatorname{Plim}\left(\frac1n\sum x_i\mu_i\right)
=\operatorname{Cov}(X,\mu)=0
$$

且根据假设2：

$$
\operatorname{Plim}\left(\frac1n\sum x_i^2\right)=Q>0
$$

所以：

$$
\boxed{\operatorname{Plim}(\hat\beta_1)=\beta_1}
$$

$\hat\beta_0$ 同样具有一致性。

:::TIP
这里能看出小样本与大样本条件的区别：小样本无偏性的证明依赖更强的条件零均值 / 严格外生条件；一致性只需要样本协方差最终收敛到 $\operatorname{Cov}(X,\mu)=0$，条件可以更弱。
:::

---

## DGP、重复抽样与抽样分布

老师这一段反复强调：要真正理解参数估计量的概率分布，必须先想清楚数据是怎样“生成”出来的。

### 一个直观的 DGP

可以把一元线性回归的 **data generating process（DGP，数据生成过程）**想成：

1. 从总体中抽到一个 $X_i$；
2. 同时生成一个随机扰动 $\mu_i$；
3. 按总体关系

$$
Y_i=\beta_0+\beta_1X_i+\mu_i
$$

生成 $Y_i$；
4. 重复 $n$ 次，得到一组样本 $(X_i,Y_i)$；
5. 用这组样本计算 $\hat\beta_0,\hat\beta_1$；
6. 如果重新抽一组样本，得到的 $\hat\beta_0,\hat\beta_1$ 通常会改变。

因此：

> $\beta_0,\beta_1$ 是总体中的固定参数；$\hat\beta_0,\hat\beta_1$ 会随样本改变，所以它们本身是随机变量。

### 总体分布、样本分布、抽样分布

课堂特别区分了三个概念：

1. **总体分布（population distribution）**：总体中随机变量本身怎样分布；
2. **样本分布 / 一次样本呈现出的数据分布**：某一次抽样实际拿到的观测值；
3. **抽样分布（sampling distribution）**：重复抽样时，某个统计量（如 $\hat\beta_1$）所有可能取值形成的分布。

计量经济学后续的检验和置信区间，真正依赖的是第三个：**估计量的抽样分布**。

### OLS 参数估计量的正态分布

若经典假设成立，并进一步有：

$$
\mu_i\mid X\sim N(0,\sigma^2)
$$

则 $Y_i$ 条件于 $X_i$ 服从正态分布，而 $\hat\beta_0,\hat\beta_1$ 又是 $Y_i$ 的线性组合，因此也服从正态分布：

$$
\boxed{
\hat\beta_1\mid X
\sim
N\left(
\beta_1,
\frac{\sigma^2}{\sum(X_i-\bar X)^2}
\right)
}
$$

$$
\boxed{
\hat\beta_0\mid X
\sim
N\left(
\beta_0,
\frac{\sigma^2\sum X_i^2}
{n\sum(X_i-\bar X)^2}
\right)
}
$$

所以它们的标准差分别为：

$$
\sigma_{\hat\beta_1}
=\frac{\sigma}{\sqrt{\sum(X_i-\bar X)^2}}
$$

$$
\sigma_{\hat\beta_0}
=\sigma\sqrt{
\frac{\sum X_i^2}
{n\sum(X_i-\bar X)^2}
}
$$

这些公式之后会成为 **t 检验、置信区间** 的基础。

---

## 极大似然估计 MLE

这一部分是课堂在教材主线之外补充的第二种参数估计思路。

### MLE 的直觉

极大似然估计（Maximum Likelihood Estimation, MLE）的思路可以概括为：

> 样本已经观察到了，就在所有可能的参数值中，寻找“让这组样本出现得最合理 / 最可能”的那组参数。

课堂用“抽取几个同学”的概率例子说明：当各次抽取相互独立时，联合概率可以写成各次概率的乘积。连续变量中对应的是**联合概率密度**。

### 一元线性回归的似然函数

若：

$$
Y_i=\beta_0+\beta_1X_i+\mu_i,
\qquad
\mu_i\mid X\sim N(0,\sigma^2)
$$

则：

$$
Y_i\mid X_i\sim N(\beta_0+\beta_1X_i,\sigma^2)
$$

单个观测的条件密度为：

$$
f(Y_i\mid X_i)
=
\frac{1}{\sigma\sqrt{2\pi}}
\exp\left[
-\frac{(Y_i-\beta_0-\beta_1X_i)^2}{2\sigma^2}
\right]
$$

在观测之间相互独立 / 不相关并满足正态设定的条件下，样本联合似然为：

$$
L(\beta_0,\beta_1,\sigma^2)
=
\prod_{i=1}^n f(Y_i\mid X_i)
$$

即：

$$
L
=
\frac{1}{(2\pi)^{n/2}\sigma^n}
\exp\left[
-\frac{1}{2\sigma^2}
\sum_{i=1}^n(Y_i-\beta_0-\beta_1X_i)^2
\right]
$$

因为对数函数单调递增，最大化 $L$ 与最大化 $\ln L$ 等价：

$$
\ell(\beta_0,\beta_1,\sigma^2)
=
-\frac n2\ln(2\pi)
-n\ln\sigma
-
\frac{1}{2\sigma^2}
\sum_{i=1}^n(Y_i-\beta_0-\beta_1X_i)^2
$$

### 为什么 MLE 与 OLS 得到相同的 β 估计

给定 $\sigma^2$，上式前两项与 $\beta_0,\beta_1$ 无关，因此：

$$
\max_{\beta_0,\beta_1}\ell
\quad\Longleftrightarrow\quad
\min_{\beta_0,\beta_1}
\sum(Y_i-\beta_0-\beta_1X_i)^2
$$

而右边正是 OLS 的目标函数。

对 $\beta_0,\beta_1$ 求一阶条件：

$$
\frac{\partial}{\partial\beta_0}
\sum(Y_i-\beta_0-\beta_1X_i)^2=0
$$

$$
\frac{\partial}{\partial\beta_1}
\sum(Y_i-\beta_0-\beta_1X_i)^2=0
$$

最终得到：

$$
\hat\beta_1
=
\frac{n\sum X_iY_i-\sum X_i\sum Y_i}
{n\sum X_i^2-(\sum X_i)^2}
$$

$$
\hat\beta_0=\bar Y-\hat\beta_1\bar X
$$

因此，在这一正态线性模型下：

$$
\boxed{
\hat\beta_{0,MLE}=\hat\beta_{0,OLS},
\qquad
\hat\beta_{1,MLE}=\hat\beta_{1,OLS}
}
$$

:::TIP
可以把这件事理解成：**OLS 从“距离最小”出发，MLE 从“样本最可能出现”出发；在正态误差假设下，两条路恰好导向同一组 $\beta$ 估计值。**
:::

---

## 家庭可支配收入—消费支出例子

课堂继续使用前面的家庭可支配收入 $X$ 与消费支出 $Y$ 的 10 个样本点。

![家庭可支配收入—消费支出参数计算表](/images/econometrics/lesson4/slide_11_income_consumption_table.jpg)

样本数据：

| $i$ | $X_i$ | $Y_i$ |
| ---: | ---: | ---: |
| 1 | 800 | 638 |
| 2 | 1100 | 935 |
| 3 | 1400 | 1155 |
| 4 | 1700 | 1254 |
| 5 | 2000 | 1408 |
| 6 | 2300 | 1650 |
| 7 | 2600 | 1925 |
| 8 | 2900 | 2068 |
| 9 | 3200 | 2266 |
| 10 | 3500 | 2530 |

有：

$$
\sum X_i=21500,
\qquad
\bar X=2150
$$

$$
\sum Y_i=15829,
\qquad
\bar Y=1582.9\approx1583
$$

令 $x_i=X_i-\bar X$、$y_i=Y_i-\bar Y$，则：

$$
\sum x_iy_i=4\,974\,750,
\qquad
\sum x_i^2=7\,425\,000
$$

### 手工估计

$$
\hat\beta_1
=
\frac{\sum x_iy_i}{\sum x_i^2}
=
\frac{4\,974\,750}{7\,425\,000}
=0.67
$$

$$
\hat\beta_0
=
\bar Y-\hat\beta_1\bar X
=1582.9-0.67\times2150
=142.40
$$

所以样本回归函数为：

$$
\boxed{\hat Y_i=142.40+0.67X_i}
$$

含义：在这组样本的线性关系中，$X$ 每增加 1 个单位，$Y$ 的拟合值平均增加约 $0.67$ 个单位。

### Stata 操作

课堂演示的基本命令：

```stata
use p34.dta, clear
sum
scatter y x
reg y x
```

逐条理解：

- `use p34.dta, clear`：载入 `.dta` 数据；`clear` 先清除内存中已有数据；
- `sum` / `summarize`：查看样本量、均值、标准差、最小值、最大值；
- `scatter y x`：画 $Y$ 对 $X$ 的散点图；
- `reg y x`：以 `y` 为被解释变量、`x` 为解释变量做 OLS 回归；Stata 默认含常数项；
- 若要强制不含截距，可在回归命令中使用 `noconstant` 选项。

老师还强调了几个操作习惯：

- 压缩包先解压，再从文件夹中使用数据与 demo；
- Stata 命令和变量名要注意大小写；
- 课堂资料中的 demo 需要自己逐条运行，不能只看截图。

### Stata 输出怎么看

![Stata OLS 回归输出](/images/econometrics/lesson4/slide_13_stata_ols_output.jpg)

核心结果：

- `x` 的 `Coef.`：$0.67=\hat\beta_1$；
- `_cons`：$142.4=\hat\beta_0$；
- `R-squared = 0.9935`；
- `Residual SS = 21872.4`；
- `Root MSE = 52.288`；
- `Std. Err.`：对应参数估计量的样本标准误。

输出中的 `t`、`P>|t|`、`[95% Conf. Interval]` 已经出现，但本节还没有正式讲它们的推断逻辑，后续“变量显著性检验 / 置信区间”会继续展开。

---

## 随机误差项方差与参数标准误

前面已经知道：

$$
\operatorname{Var}(\hat\beta_1\mid X)
=\frac{\sigma^2}{\sum x_i^2}
$$

$$
\operatorname{Var}(\hat\beta_0\mid X)
=\sigma^2\frac{\sum X_i^2}{n\sum x_i^2}
$$

问题在于：**总体误差方差 $\sigma^2$ 不可观察。**

因为真正的 $\mu_i$ 看不到，只能用残差：

$$
e_i=Y_i-\hat Y_i
$$

去估计它。

### OLS 下 σ² 的无偏估计

一元线性回归中估计了两个参数 $\beta_0,\beta_1$，因此残差自由度为：

$$
n-2
$$

于是：

$$
\boxed{
\hat\sigma^2
=\frac{\sum e_i^2}{n-2}
}
$$

并且：

$$
E(\hat\sigma^2)=\sigma^2
$$

所以这是 $\sigma^2$ 的无偏估计量。

更一般地，若有 $k$ 个解释变量并含截距，残差自由度为：

$$
n-k-1
$$

### MLE 下 σ² 的估计

继续对正态似然函数关于 $\sigma^2$ 最大化，可得：

$$
\boxed{
\hat\sigma^2_{MLE}
=\frac{\sum e_i^2}{n}
}
$$

它在有限样本下有偏，但具有一致性。

因此，本例中同一组残差平方和 $RSS=21872.4$ 会得到两个不同的误差方差 / 标准差估计：

**OLS 无偏估计：**

$$
\hat\sigma^2_{OLS}
=\frac{21872.4}{10-2}
=2734.05
$$

$$
\hat\sigma_{OLS}
=\sqrt{2734.05}
=52.288
$$

**MLE：**

$$
\hat\sigma^2_{MLE}
=\frac{21872.4}{10}
=2187.24
$$

$$
\hat\sigma_{MLE}
=\sqrt{2187.24}
=46.768
$$

![MLE 与 OLS 对误差标准差估计的比较](/images/econometrics/lesson4/slide_20_mle_vs_ols.jpg)

随着 $n\to\infty$：

$$
\frac{n}{n-2}\to1
$$

所以二者差异会逐渐消失，这也是 MLE 的 $\sigma^2$ 估计具有一致性的直观来源。

### 标准差与标准误

将未知的 $\sigma$ 用 $\hat\sigma$ 代替后：

$$
\boxed{
se(\hat\beta_1)
=
\frac{\hat\sigma}
{\sqrt{\sum(X_i-\bar X)^2}}
}
$$

$$
\boxed{
se(\hat\beta_0)
=
\hat\sigma
\sqrt{
\frac{\sum X_i^2}
{n\sum(X_i-\bar X)^2}
}
}
$$

本例 Stata 给出：

- $se(\hat\beta_1)=0.0191891$；
- $se(\hat\beta_0)=44.44673$。

![Stata 输出中的 Residual SS、Root MSE、Coef. 与 Std. Err.](/images/econometrics/lesson4/slide_22_stata_output_annotated.jpg)

:::WARNING
课堂特别强调术语区分：

- **standard deviation（标准差）**通常描述随机变量本身的离散程度；
- **standard error（标准误）**描述估计量 / 统计量抽样分布的波动程度。

这里讨论 $\hat\beta_0,\hat\beta_1$ 的不确定性时，应说**参数估计量的标准误**。
:::

---

## 拟合优度与 R²

课堂随后进入“一元线性回归模型的统计检验”框架，并先讲 **goodness-of-fit（拟合优度）**。

### 为什么 OLS 已经“最好拟合”还需要 R²

OLS 已经做了：

$$
\min_{\beta_0,\beta_1}\sum e_i^2
$$

它回答的问题是：

> **在这一组样本、这一类线性函数中，哪一条线最接近这些点？**

但即使找到了“最接近”的那条线，这条线依然可能整体离样本点很远。

所以还需要另一个指标回答：

> **这条已经最优的线，到底拟合得有多好？**

一句话记忆：

> **OLS 回答“哪条线最好”，$R^2$ 回答“最好到什么程度”。**

课堂用两组不同的 $Y$ 数据回归说明：每组数据都能各自求出一条 OLS 最优线，但一组的 $R^2=0.9935$，另一组只有 $R^2=0.9762$，拟合程度仍然可以比较。

![两组回归的 R² 比较](/images/econometrics/lesson4/slide_25_r2_comparison.jpg)

### 总离差平方和分解

第 $i$ 个观测相对样本均值的总离差：

$$
y_i=Y_i-\bar Y
$$

可以拆成：

$$
\begin{aligned}
y_i
&=Y_i-\bar Y\\
&=(Y_i-\hat Y_i)+(\hat Y_i-\bar Y)\\
&=e_i+\hat y_i
\end{aligned}
$$

其中：

- $e_i=Y_i-\hat Y_i$：回归线**未解释**的部分；
- $\hat y_i=\hat Y_i-\bar Y$：回归线**解释**的部分。

![教材图2.2.1：离差分解示意图](/images/econometrics/lesson4/textbook_fig_2_2_1_decomposition.jpg)

对所有样本点平方后求和：

$$
\sum y_i^2
=
\sum(\hat y_i+e_i)^2
=
\sum\hat y_i^2+
\sum e_i^2+
2\sum\hat y_ie_i
$$

OLS 正规方程给出：

$$
\sum e_i=0,
\qquad
\sum X_ie_i=0
$$

又因为：

$$
\hat y_i
=\hat\beta_1(X_i-\bar X)
=\hat\beta_1x_i
$$

所以：

$$
\sum\hat y_ie_i
=
\hat\beta_1\sum x_ie_i
=0
$$

最终得到最重要的平方和分解：

$$
\boxed{TSS=ESS+RSS}
$$

其中：

$$
TSS=\sum(Y_i-\bar Y)^2
$$

称为**总离差平方和**（total sum of squares）；

$$
ESS=\sum(\hat Y_i-\bar Y)^2
$$

称为**回归 / 解释平方和**（explained sum of squares）；

$$
RSS=\sum(Y_i-\hat Y_i)^2=\sum e_i^2
$$

称为**残差平方和**（residual sum of squares）。

:::WARNING
不同教材 / 软件对 `ESS`、`SSE`、`RSS` 的缩写命名可能不统一。本笔记统一使用：

- `TSS`：总离差平方和；
- `ESS`：解释平方和；
- `RSS`：残差平方和；
- Stata 输出中的 `Residual SS` 对应这里的 `RSS`。

遇到缩写时优先看它对应的**公式和含义**。
:::

### 可决系数 R²

定义：

$$
\boxed{
R^2
=\frac{ESS}{TSS}
=1-\frac{RSS}{TSS}
}
$$

含截距的一元 OLS 回归中：

$$
0\le R^2\le1
$$

解释：

- $R^2$ 越接近 1：样本中 $Y$ 的总波动有更大比例可以由回归拟合部分解释；
- $R^2$ 越接近 0：残差所占比例更大，线性拟合较弱。

例如：

$$
R^2=0.90
$$

可以读作：这组样本中，$Y$ 相对其均值的总离差平方和有约 **90%** 落在回归解释部分，约 **10%** 留在残差部分。

### 例子与 Stata 对照

家庭可支配收入—消费支出例中：

$$
TSS=3\,354\,954.9
$$

$$
ESS=3\,333\,082.5
$$

$$
RSS=21\,872.4
$$

检查：

$$
3\,354\,954.9
=
3\,333\,082.5+21\,872.4
$$

于是：

$$
R^2
=\frac{3\,333\,082.5}{3\,354\,954.9}
=1-\frac{21\,872.4}{3\,354\,954.9}
\approx0.9935
$$

也就是：

$$
\boxed{R^2=0.9935}
$$

课堂解释为：样本中家庭消费支出的总离差中，约 **99.35%** 可以由可支配收入的线性回归拟合部分解释，因此这组样本的线性拟合程度很高。

---

## 本节知识链

把整堂课压缩成一条逻辑链：

$$
\boxed{
\text{经典假设}
\Rightarrow
\text{OLS 的线性、无偏、有效}
\Rightarrow
\text{BLUE}
}
$$

$$
\boxed{
\text{重复抽样 / DGP}
\Rightarrow
\hat\beta_0,\hat\beta_1\text{ 有抽样分布}
\Rightarrow
\text{标准误}
}
$$

$$
\boxed{
\mu\text{ 正态}
\Rightarrow
\text{MLE}
\Rightarrow
\hat\beta_{MLE}=\hat\beta_{OLS}
}
$$

$$
\boxed{
\sigma^2\text{ 未知}
\Rightarrow
\frac{\sum e_i^2}{n-2}
\Rightarrow
se(\hat\beta_0),se(\hat\beta_1)
}
$$

$$
\boxed{
Y_i-\bar Y
=
(\hat Y_i-\bar Y)+(Y_i-\hat Y_i)
\Rightarrow
TSS=ESS+RSS
\Rightarrow
R^2
}
$$

到这里，一元线性回归已经从“**求一条线**”推进到了“**评价这条线及其参数估计量的统计可靠性**”。下一步会进一步利用抽样分布和标准误做**变量显著性检验与参数置信区间**。

---

## 课后任务

### 课堂布置的 Stata 练习

老师要求国庆假期自行练习课堂 demo：

```stata
use p34.dta, clear
sum
scatter y x
reg y x
```

要求：**逐条命令实际执行，每条至少运行两遍**，并能说清每个输出量对应的统计含义。

建议最低掌握到：

- 能从 `reg y x` 中找到 $\hat\beta_0,\hat\beta_1$；
- 能找到 `Residual SS`、`Root MSE`、`R-squared`；
- 能区分 `Coef.` 与 `Std. Err.`；
- 能解释为什么 `Root MSE = \sqrt{RSS/(n-2)}`；
- 能解释为什么正态模型下 $\beta_0,\beta_1$ 的 MLE 与 OLS 相同，而 $\sigma^2$ 的 MLE 分母是 $n$。

**本节没有明确布置教材中的指定习题，因此不另附“教材作业题目与解答”。**
