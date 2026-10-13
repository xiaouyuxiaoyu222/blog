---
title: Oceanography-Lesson8：第四章：海水基本方程组和边界条件（上）
published: 2026-10-12
description: 从质量、盐量、热量守恒推导海水运动方程组，理解海水状态方程、科氏力，以及海面和海底运动学边界条件。
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 课程信息与成绩相关提醒

- **授课日期**：2026-10-12，第 1—2 节；**授课教师**：袁野平。
- **作业 / 测试 / 考试说明**：本次课件中未发现明确的作业题、测试时间、考试范围或评分要求。所提供的《上课录音8.docx》经检查仅包含时间戳和课堂投屏截图，缺少可读取的语音转写，因此**无法核实教师是否口头布置了作业或说明了成绩要求**；如有课程群通知，以教师通知为准。
- **资料范围**：本笔记以本次 79 页投屏截图所展示的内容为依据；重要公式增加了逐步推导和直观解释。课件末尾仅展开至**有质量交换时的海面运动学边界条件**，后续动力学与温度边界条件在本次课件中只列出名称。

---

## 概述

> **本课主线**：先用守恒定律说明海水的质量、盐量和热量如何变化，再借助状态方程，把它们与已经学过的动量方程组成一个完整的海水运动方程组；最后回答：**在海面、海底等边界上，这些方程需要满足什么附加条件？**

上一部分已经利用牛顿第二定律建立了**动量方程**。现在补齐另外三类重要关系：

1. **质量守恒** → 连续方程：海水不会凭空产生或消失。
2. **盐量守恒、热量守恒** → 盐量扩散方程、热传导方程：盐和热随海水流动，也能因分子运动而扩散。
3. **海水状态方程** → 密度与温度、盐度、压强之间的联系。

最后将上述关系与动量方程联立，并讨论**运动学边界条件**。

![第四章知识框架：由四种守恒定律建立海水基本方程组](/images/physical-oceanography/lesson8/slide_08.jpg)

### 本课知识框架

| 模块 | 出发点 | 最终要得到什么 |
| --- | --- | --- |
| 连续方程 | 质量守恒 | $\partial_t\rho+\nabla\cdot(\rho\mathbf V)=0$ |
| 盐量扩散 | 盐量守恒 + 分子扩散 | $Ds/Dt=K_s\Delta s$ |
| 热传导 | 热量守恒 + 傅里叶定律 | $D\theta/Dt=K_\theta\Delta\theta$ |
| 状态方程 | 海水热力学性质 | $\rho=\rho(\theta,s,p)$ |
| 海水基本方程组 | 动量方程 + 以上关系 | 7 个未知量、7 个标量方程 |
| 边界条件 | 海面、海底的运动约束 | 海面、海底的不可穿透条件及淡水交换修正 |

**本课反复使用的两个算子**：

$$
\frac{D}{Dt}=\frac{\partial}{\partial t}+\mathbf V\cdot\nabla,
\qquad
\Delta=\nabla^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}.
$$

其中 $D/Dt$ 是**随体导数**：跟着某个海水质点移动时所感受到的变化率；$\Delta$ 是**拉普拉斯算子**，衡量一个量与周围空间分布的差异。

---

## 目录

- [一、连续方程：质量守恒](#一连续方程质量守恒)
- [二、盐量扩散方程：盐量守恒](#二盐量扩散方程盐量守恒)
- [三、热传导方程：热量守恒](#三热传导方程热量守恒)
- [四、海水状态方程](#四海水状态方程)
- [五、海水运动基本方程组](#五海水运动基本方程组)
- [六、边界条件的意义与分类](#六边界条件的意义与分类)
- [七、无质量交换的运动学边界条件](#七无质量交换的运动学边界条件)
- [八、有质量交换的海面运动学边界条件](#八有质量交换的海面运动学边界条件)
- [九、本课公式汇总与易错点](#九本课公式汇总与易错点)

---

## 一、连续方程：质量守恒

### 1. 先明确研究对象：固定控制体

**质量守恒定律**：海水在流动过程中，总质量保持守恒；在没有质量源汇的情形下，任意固定空间内的质量变化，只能来自海水穿过其边界。

取由封闭曲面 $\sigma$ 包围的一个**固定控制体** $\tau$，设：

- $\rho(x,y,z,t)$：海水密度，单位 $\mathrm{kg\,m^{-3}}$；
- $\mathbf V=(u,v,w)$：海水速度，单位 $\mathrm{m\,s^{-1}}$；
- $\mathbf n$：封闭曲面的**向外**单位法向量；
- $V_n=\mathbf V\cdot\mathbf n$：海水沿外法向的速度分量。

固定控制体的质量为：

$$
M(t)=\iiint_\tau \rho\,d\tau.
$$

因此，单位时间内控制体质量的增加量为：

$$
\frac{dM}{dt}=\iiint_\tau\frac{\partial\rho}{\partial t}\,d\tau.
$$

这里可以把微分直接放进积分内，因为控制体**固定不动**，积分区域不随时间变化。

而单位面积、单位时间通过边界的**向外质量通量**为 $\rho V_n$，整个边界的净流出量为：

$$
\oiint_\sigma\rho\,\mathbf V\cdot\mathbf n\,d\sigma.
$$

净流出越多，内部质量减少越多，所以出现一个**负号**：

$$
\boxed{\iiint_\tau\frac{\partial\rho}{\partial t}\,d\tau
=-\oiint_\sigma\rho\mathbf V\cdot\mathbf n\,d\sigma.}
\tag{1}
$$

![质量守恒与高斯散度定理：从积分形式走向微分形式](/images/physical-oceanography/lesson8/slide_14.jpg)

### 2. 利用高斯散度定理：面通量转成体积分

**高斯公式**：

$$
\oiint_\sigma\mathbf A\cdot\mathbf n\,d\sigma
=\iiint_\tau\nabla\cdot\mathbf A\,d\tau.
$$

令 $\mathbf A=\rho\mathbf V$，代入式（1）：

$$
\iiint_\tau\frac{\partial\rho}{\partial t}\,d\tau
=-\iiint_\tau\nabla\cdot(\rho\mathbf V)\,d\tau.
$$

把它们移到同一侧：

$$
\iiint_\tau\left[\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)\right]d\tau=0.
$$

由于所选控制体的大小、位置和形状都可以任意变化，括号内必须处处为零：

$$
\boxed{\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf V)=0.}
\tag{2}
$$

这就是**质量连续方程的欧拉形式（通量形式）**。

两项的意义：

- $\partial\rho/\partial t$：固定位置的密度局地变化率；
- $\nabla\cdot(\rho\mathbf V)$：单位体积的**净向外质量通量**。

例如某处 $\nabla\cdot(\rho\mathbf V)>0$，意味着流出去的质量多于流进来的质量，该处密度随时间减小。

### 3. 为什么它还能写成随体导数形式？

用乘积求导公式展开散度：

$$
\begin{aligned}
\nabla\cdot(\rho\mathbf V)
&=\frac{\partial(\rho u)}{\partial x}
+\frac{\partial(\rho v)}{\partial y}
+\frac{\partial(\rho w)}{\partial z}\\
&=u\frac{\partial\rho}{\partial x}
+v\frac{\partial\rho}{\partial y}
+w\frac{\partial\rho}{\partial z}
+\rho\left(\frac{\partial u}{\partial x}
+\frac{\partial v}{\partial y}
+\frac{\partial w}{\partial z}\right)\\
&=\mathbf V\cdot\nabla\rho+\rho\nabla\cdot\mathbf V.
\end{aligned}
$$

代回式（2）：

$$
\underbrace{\left(\frac{\partial\rho}{\partial t}+\mathbf V\cdot\nabla\rho\right)}_{D\rho/Dt}
+\rho\nabla\cdot\mathbf V=0.
$$

因此得到**拉格朗日形式**：

$$
\boxed{\frac{D\rho}{Dt}+\rho\nabla\cdot\mathbf V=0.}
\tag{3}
$$

直观理解：**海水质点的密度变化**和**这团水的体积膨胀或收缩**相对应。

- $\nabla\cdot\mathbf V>0$：局部有体积膨胀趋势，$D\rho/Dt<0$；
- $\nabla\cdot\mathbf V<0$：局部有体积收缩趋势，$D\rho/Dt>0$。

### 4. 不可压缩近似与体积连续方程

课件指出：海水的可压缩性很小，在很多海水运动问题中可采用**不可压缩近似**，令海水质点随流运动时的密度变化近似为零：

$$
\frac{D\rho}{Dt}\approx0.
$$

代入式（3），在 $\rho>0$ 的条件下得到：

$$
\boxed{\nabla\cdot\mathbf V=0}
\quad\Longleftrightarrow\quad
\boxed{\frac{\partial u}{\partial x}
+\frac{\partial v}{\partial y}
+\frac{\partial w}{\partial z}=0.}
\tag{4}
$$

它叫**体积连续方程**。

![不可压缩流体的体积连续方程](/images/physical-oceanography/lesson8/slide_16.jpg)

:::TIP
**例子：体积连续方程并不要求每个速度分量都为零。**

考虑二维流动 $u=ax,\ v=-ay,\ w=0$，其中 $a$ 为常数：

$$
\nabla\cdot\mathbf V=\frac{\partial(ax)}{\partial x}
+\frac{\partial(-ay)}{\partial y}+0=a-a=0.
$$

该流动在 $x$ 方向拉伸，在 $y$ 方向压缩，两种效应恰好抵消，流体微团总体积保持不变。
:::

:::NOTE
**一个容易混淆的近似**：真实海水的密度依然会受到温度、盐度和压强影响，后文还要使用 $\rho=\rho(\theta,s,p)$。在常见的**布辛涅斯克（Boussinesq）近似**中，连续方程采用 $\nabla\cdot\mathbf V\simeq0$，同时允许温盐造成的密度差影响浮力。这属于建模近似，不能据此断言所有海域密度在时空上严格恒定。
:::

---

## 二、盐量扩散方程：盐量守恒

### 1. 为什么盐度还需要一个单独的方程？

**质量守恒**描述整个海水体系；**盐量守恒**进一步研究其中的溶解盐如何输运。

本节采用：

- $s$：单位质量海水中的盐量，按盐质量分数理解，近似表征盐度；
- $\rho s$：单位体积海水中含有的盐量；
- $\mathbf S$：盐分由于分子不规则运动产生的**扩散质量通量**。

对于固定控制体，内部盐量的增减由两种跨边界输运决定：

1. **平流（advection）**：海水整体移动，把盐带进或带出；
2. **分子扩散（molecular diffusion）**：盐分由浓度较高的地方向较低的地方扩散。

**要区分“盐量不会凭空消失”和“一个空间里的盐量可能变化”这两件事**：固定空间中有流入、流出，盐量当然会变化。

### 2. 从固定控制体上的盐量收支推导

固定体积 $\tau$ 内总盐量为：

$$
M_s=\iiint_\tau\rho s\,d\tau.
$$

单位时间内的盐量变化 = **负的平流净流出** + **负的扩散净流出**：

$$
\iiint_\tau\frac{\partial(\rho s)}{\partial t}\,d\tau
=-\oiint_\sigma\rho s\mathbf V\cdot\mathbf n\,d\sigma
-\oiint_\sigma\mathbf S\cdot\mathbf n\,d\sigma.
\tag{5}
$$

两次使用高斯公式：

$$
\iiint_\tau\left[
\frac{\partial(\rho s)}{\partial t}
+\nabla\cdot(\rho s\mathbf V)
+\nabla\cdot\mathbf S\right]d\tau=0.
$$

由于体积任意，得到局地盐量守恒方程：

$$
\boxed{\frac{\partial(\rho s)}{\partial t}
+\nabla\cdot(\rho s\mathbf V)
=-\nabla\cdot\mathbf S.}
\tag{6}
$$

这里 $-\nabla\cdot\mathbf S$ 表示**分子扩散造成的净盐量汇入率**。

### 3. 关键步骤：利用质量连续方程消去密度项

把式（6）左边逐项展开：

$$
\begin{aligned}
\frac{\partial(\rho s)}{\partial t}
&=s\frac{\partial\rho}{\partial t}+\rho\frac{\partial s}{\partial t},\\[2pt]
\nabla\cdot(\rho s\mathbf V)
&=s\nabla\cdot(\rho\mathbf V)+\rho\mathbf V\cdot\nabla s.
\end{aligned}
$$

合并同类项：

$$
\underbrace{s\left[\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf V)\right]}_{=0\ \text{（连续方程）}}
+\rho\left(\frac{\partial s}{\partial t}+\mathbf V\cdot\nabla s\right)
=-\nabla\cdot\mathbf S.
$$

因此：

$$
\boxed{\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
=-\frac{1}{\rho}\nabla\cdot\mathbf S.}
\tag{7}
$$

**这一步很重要**：以后推导其他守恒标量的输运方程，也可使用同一方法，即先写“单位体积所含物质量”的守恒，再用质量连续方程化简。

### 4. 分子扩散：菲克定律（Fick's law）

课件采用扩散通量与盐度梯度成正比、方向相反的近似：

$$
\boxed{\mathbf S=-k\nabla s.}
\tag{8}
$$

- $\nabla s$：盐度增加最快的方向；
- 负号：盐从**高盐度侧向低盐度侧**扩散；
- $k$：课件使用的盐通量—梯度比例系数，满足 $k/\rho$ 为盐的分子扩散系数。

当 $k$ 可以视为常数时：

$$
\nabla\cdot\mathbf S
=\nabla\cdot(-k\nabla s)
=-k\nabla\cdot(\nabla s)
=-k\Delta s.
$$

代入式（7）：

$$
\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
=\frac{k}{\rho}\Delta s.
$$

定义**盐的分子扩散系数** $K_s=k/\rho$，最终：

$$
\boxed{\frac{\partial s}{\partial t}
+\mathbf V\cdot\nabla s
=K_s\Delta s,\qquad K_s\approx1.1\times10^{-9}\ \mathrm{m^2/s}.}
\tag{9}
$$

![盐量扩散方程：局地变化、平流输运和分子扩散](/images/physical-oceanography/lesson8/slide_28.jpg)

### 5. 每一项到底是什么意思？

$$
\underbrace{\frac{\partial s}{\partial t}}_{\text{局地盐度变化}}
+\underbrace{u\frac{\partial s}{\partial x}+v\frac{\partial s}{\partial y}+w\frac{\partial s}{\partial z}}_{\text{平流造成的变化}}
=\underbrace{K_s\left(\frac{\partial^2s}{\partial x^2}+\frac{\partial^2s}{\partial y^2}+\frac{\partial^2s}{\partial z^2}\right)}_{\text{分子扩散}}.
$$

例如：海流从高盐水区流入低盐水区，会改变固定站位的盐度；同时，即使暂时没有海流，盐度差异也可通过分子扩散逐渐减弱。

:::WARNING
**公式适用条件**：课件写成 $K_s\Delta s$，隐含把扩散系数看作常数。如果扩散系数随位置变化，应保留 $\nabla\cdot(K_s\nabla s)$ 一类更一般的形式。课件此处只讨论**分子扩散**，后面海洋湍混合模型经常使用的湍扩散系数需要另外处理。
:::

---

## 三、热传导方程：热量守恒

### 1. 热量同样有“随水流动”和“分子传导”两种输运

本节课件使用：

- $\theta$：海水温度；
- $c_p$：定压比热容，单位 $\mathrm{J\,kg^{-1}\,K^{-1}}$；
- $\rho c_p\theta$：相对于选定参考温度的单位体积热量的近似表示；
- $\mathbf H$：分子热传导通量，单位 $\mathrm{W\,m^{-2}}$。

类比盐量守恒，固定空间内的热量变化由**平流热通量**和**分子热传导通量**共同决定。

### 2. 热量守恒的积分与微分形式

固定控制体内热量的近似表达式：

$$
Q=\iiint_\tau\rho c_p\theta\,d\tau.
$$

热量守恒：

$$
\iiint_\tau\frac{\partial(\rho c_p\theta)}{\partial t}\,d\tau
=-\oiint_\sigma\rho c_p\theta\mathbf V\cdot\mathbf n\,d\sigma
-\oiint_\sigma\mathbf H\cdot\mathbf n\,d\sigma.
\tag{10}
$$

经高斯定理变为：

$$
\boxed{\frac{\partial(\rho c_p\theta)}{\partial t}
+\nabla\cdot(\rho c_p\theta\mathbf V)
+\nabla\cdot\mathbf H=0.}
\tag{11}
$$

### 3. 傅里叶热传导定律（Fourier's law）

热量沿着温度降低的方向传导：

$$
\boxed{\mathbf H=-\lambda\nabla\theta.}
\tag{12}
$$

其中 $\lambda$ 为热导率（课件也用 $\kappa$ 类符号表示热传导比例系数；此处换成 $\lambda$，避免与后文的海水压缩系数混淆）。

若 $\lambda$ 为空间常数：

$$
\nabla\cdot\mathbf H=-\lambda\Delta\theta.
$$

代入式（11）：

$$
\frac{\partial(\rho c_p\theta)}{\partial t}
+\nabla\cdot(\rho c_p\theta\mathbf V)
=\lambda\Delta\theta.
\tag{13}
$$

### 4. 为什么最后会得到与盐量类似的形式？

假设 $c_p$ 为常数，把左侧提出 $c_p$，用乘积法则：

$$
\begin{aligned}
&\frac{\partial(\rho c_p\theta)}{\partial t}
+\nabla\cdot(\rho c_p\theta\mathbf V)\\
&=c_p\left\{\theta\left[\frac{\partial\rho}{\partial t}
+\nabla\cdot(\rho\mathbf V)\right]
+\rho\left(\frac{\partial\theta}{\partial t}+\mathbf V\cdot\nabla\theta\right)\right\}\\
&=\rho c_p\left(\frac{\partial\theta}{\partial t}+\mathbf V\cdot\nabla\theta\right).
\end{aligned}
$$

第二步消掉的仍然是**质量连续方程**。所以：

$$
\frac{\partial\theta}{\partial t}+\mathbf V\cdot\nabla\theta
=\frac{\lambda}{\rho c_p}\Delta\theta.
$$

定义热扩散系数 $K_\theta=\lambda/(\rho c_p)$，得到：

$$
\boxed{\frac{\partial\theta}{\partial t}
+\mathbf V\cdot\nabla\theta
=K_\theta\Delta\theta,\qquad K_\theta\approx1.4\times10^{-7}\ \mathrm{m^2/s}.}
\tag{14}
$$

![热传导方程及课件给出的分子热扩散系数](/images/physical-oceanography/lesson8/slide_36.jpg)

### 5. 盐量扩散与热传导：结构完全对应

| 比较 | 盐量 | 热量 |
| --- | --- | --- |
| 被输运的量 | 盐度 $s$ | 温度 $\theta$ |
| 整体流动造成的输运 | $\mathbf V\cdot\nabla s$ | $\mathbf V\cdot\nabla\theta$ |
| 分子过程遵守的近似定律 | 菲克定律 | 傅里叶定律 |
| 分子输运项 | $K_s\Delta s$ | $K_\theta\Delta\theta$ |
| 课件给出的扩散系数 | $1.1\times10^{-9}\,\mathrm{m^2/s}$ | $1.4\times10^{-7}\,\mathrm{m^2/s}$ |

由这些代表值可见，**热的分子扩散通常比盐的分子扩散快约两个数量级**。课件给出的方程建立在无额外内部热源、热导率与 $c_p$ 近似恒定等条件上；在真实海洋热收支中，还可能需要考虑辐射、海气热通量和湍混合。

---

## 四、海水状态方程

### 1. 为什么需要状态方程？

动量方程涉及密度 $\rho$ 和压强 $p$；温度与盐度方程又给出 $\theta,s$ 的变化。要使这些量彼此关联，需要**海水状态方程（Equation of State, EOS）**：

$$
F(\rho,\theta,s,p)=0,
\qquad \boxed{\rho=\rho(\theta,s,p).}
\tag{15}
$$

含义：海水密度取决于**温度、盐度和压强**。

经验规律：

- 温度升高，一般密度降低；
- 盐度增加，一般密度增加；
- 压强升高，一般密度增加。

课件先给出了忽略盐度与压强变化的简单线性形式：

$$
\rho\approx\rho_0(1-\alpha_0\theta),
\tag{16}
$$

其中 $\rho_0$ 是参考温度下的密度，$\alpha_0$ 表示常数热膨胀系数。这一式子仅适用于**温盐、压强变化范围较小的近似讨论**。

### 2. 状态方程的全微分：一步步来

既然 $\rho$ 是三个变量的函数，当 $\theta,s,p$ 都发生微小变化时：

$$
\boxed{d\rho=
\left(\frac{\partial\rho}{\partial\theta}\right)_{s,p}d\theta+
\left(\frac{\partial\rho}{\partial s}\right)_{\theta,p}ds+
\left(\frac{\partial\rho}{\partial p}\right)_{\theta,s}dp.}
\tag{17}
$$

两边除以 $\rho$，为三个偏导数分别引入物理系数：

$$
\boxed{\begin{aligned}
\alpha&=-\frac{1}{\rho}\left(\frac{\partial\rho}{\partial\theta}\right)_{s,p}
&&\text{热膨胀系数},\\
\beta&=\frac{1}{\rho}\left(\frac{\partial\rho}{\partial s}\right)_{\theta,p}
&&\text{盐收缩系数},\\
\kappa_T&=\frac{1}{\rho}\left(\frac{\partial\rho}{\partial p}\right)_{\theta,s}
&&\text{等温压缩系数（密度形式）}.
\end{aligned}}
\tag{18}
$$

于是：

$$
\boxed{\frac{d\rho}{\rho}
=-\alpha\,d\theta+\beta\,ds+\kappa_T\,dp.}
\tag{19}
$$

**怎么记？** 升温通常使密度减小，前面对应负号；加盐、加压通常使密度增大，前面对应正号。

![海水状态方程、热膨胀、盐收缩、压缩系数以及两个非线性效应](/images/physical-oceanography/lesson8/slide_41.jpg)

:::WARNING
**课件符号核对**：第 41 张投屏中的热膨胀系数一行写作 $\alpha=(1/\rho)\partial\rho/\partial T$，但同页又使用 $d\rho/\rho=-\alpha\,dT+\cdots$，两者在通常海水升温密度减小的情况下符号不一致。为了与该页的全微分式以及标准热膨胀定义一致，本笔记采用上式带**负号**的 $\alpha$ 定义。这里属于对课件的公式校核。
:::

### 3. 海水密度的两个重要非线性效应

状态方程 $\rho(\theta,s,p)$ 通常有明显**非线性**。课件特别介绍了两个海洋学效应。

#### （1）卡贝尔效应（cabbeling）

两团**温度、盐度不同**的海水混合后，混合水的密度可能**大于两团水原密度的线性加权平均值**。

直观理解：密度随温盐变化的关系是一张弯曲的曲面。对两个水团的温盐取平均，再代入状态方程，通常不等于分别计算两个密度后直接取平均。

这可能使混合后的海水相对周围环境更重，促进**下沉**。

#### （2）热压效应（thermobaricity）

海水的热膨胀系数会随**压力（深度）**改变。因此，水团上下移动时，它与周围海水的密度差、浮力变化可能与浅层情形不同。

课件强调：这对理解**大西洋深层水的形成**等过程有重要意义。

> 两个概念的区分：**cabbeling 关注不同水团混合引起的非线性密度变化；thermobaricity 关注热膨胀对压强的依赖。**

---

## 五、海水运动基本方程组

### 1. 为什么需要“方程组”？

到这里，我们已有：动量方程、连续方程、盐量扩散方程、热传导方程和状态方程。这些方程共同决定海水在时空中的运动和物理状态。

本课考虑 **7 个未知量**：

$$
\boxed{u,\ v,\ w,\ \rho,\ s,\ \theta,\ p.}
$$

对应：

- **3 个**动量方程（$x,y,z$ 各一个）；
- **1 个**连续方程；
- **1 个**盐量方程；
- **1 个**温度方程；
- **1 个**状态方程。

共 **7 个标量方程**，构成课件所列的闭合基本方程组。这里“方程数相同”只是形式上的闭合；实际求解还要给定初始条件、边界条件，以及各扩散/黏性参数。

### 2. 向量形式

在课件的层流、各向同性常系数黏性近似下：

$$
\boxed{\left\{\begin{aligned}
\frac{D\mathbf V}{Dt}
&=-\frac{1}{\rho}\nabla p
-2\boldsymbol\Omega\times\mathbf V
+\mathbf g+\nu\Delta\mathbf V-\nabla\Phi_T,\\[2pt]
\frac{D\rho}{Dt}+\rho\nabla\cdot\mathbf V&=0,\\[2pt]
\frac{\partial s}{\partial t}+\mathbf V\cdot\nabla s&=K_s\Delta s,\\[2pt]
\frac{\partial\theta}{\partial t}+\mathbf V\cdot\nabla\theta&=K_\theta\Delta\theta,\\[2pt]
\rho&=\rho(\theta,s,p).
\end{aligned}\right.}
\tag{20}
$$

课件将动量方程的黏性系数记作 $\gamma$；本笔记统一写作常用的**运动黏度** $\nu$，二者在该模型中表示同一黏性系数。

各项物理含义：

| 动量方程项 | 物理作用 |
| --- | --- |
| $D\mathbf V/Dt$ | 海水质点的加速度 |
| $-\nabla p/\rho$ | 压强梯度力（单位质量） |
| $-2\boldsymbol\Omega\times\mathbf V$ | 科氏力（单位质量） |
| $\mathbf g$ | 重力加速度 |
| $\nu\Delta\mathbf V$ | 黏性作用的简化形式 |
| $-\nabla\Phi_T$ | 与引潮势 $\Phi_T$ 对应的单位质量引潮力 |

![课件中的海水运动基本方程组及层流和湍流的定义](/images/physical-oceanography/lesson8/slide_43.jpg)

:::NOTE
课件区分了**层流**（流动有较规则的层次、流层之间混合较弱）与**湍流**（具有不规则脉动、混合作用明显），并提到可利用**雷诺数** $Re=UL/\nu$ 的大小判断惯性作用与黏性作用的相对重要性。是否转捩为湍流还与几何形状、边界条件、稳定度等有关，不能凭单一通用临界雷诺数判断所有海洋流动。
:::

### 3. 展开为直角坐标：三条动量方程

取局地坐标：$x$ 向东，$y$ 向北，$z$ 向上，速度 $\mathbf V=(u,v,w)$。

定义：

$$
f=2\Omega\sin\varphi,\qquad
\widetilde f=2\Omega\cos\varphi,
$$

其中 $\Omega$ 是地球自转角速度，$\varphi$ 是**地理纬度**。将 $\boldsymbol\Omega=(0,\Omega\cos\varphi,\Omega\sin\varphi)$ 代入科氏力，可得：

$$
-2\boldsymbol\Omega\times\mathbf V
=(fv-\widetilde f w,\ -fu,\ \widetilde f u).
\tag{21}
$$

于是：

$$
\boxed{\frac{Du}{Dt}=-\frac{1}{\rho}\frac{\partial p}{\partial x}
+fv-\widetilde f w+\nu\Delta u
-\frac{\partial\Phi_T}{\partial x}.}
\tag{22}
$$

$$
\boxed{\frac{Dv}{Dt}=-\frac{1}{\rho}\frac{\partial p}{\partial y}
-fu+\nu\Delta v
-\frac{\partial\Phi_T}{\partial y}.}
\tag{23}
$$

$$
\boxed{\frac{Dw}{Dt}=-\frac{1}{\rho}\frac{\partial p}{\partial z}
+\widetilde f u-g+\nu\Delta w
-\frac{\partial\Phi_T}{\partial z}.}
\tag{24}
$$

**随体导数不要漏掉平流加速度**，例如：

$$
\frac{Du}{Dt}=\frac{\partial u}{\partial t}
+u\frac{\partial u}{\partial x}
+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}.
$$

其余 $Dv/Dt,Dw/Dt$ 完全同理。

![课件直角坐标系中的七个标量方程](/images/physical-oceanography/lesson8/slide_44.jpg)

### 4. 科氏力方向与公式校核

**课件中的自转坐标示意图**说明，纬度决定自转矢量在**局地北向**和**局地竖直向上**的分量。

![地球自转矢量在局地坐标中的分解；注意该页行列式计算有符号笔误](/images/physical-oceanography/lesson8/slide_48.jpg)

完整展开：

$$
\begin{aligned}
\boldsymbol\Omega\times\mathbf V
&=\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
0&\Omega\cos\varphi&\Omega\sin\varphi\\
u&v&w
\end{vmatrix}\\
&=(\Omega w\cos\varphi-\Omega v\sin\varphi)\mathbf i
+(\Omega u\sin\varphi)\mathbf j
-(\Omega u\cos\varphi)\mathbf k,\\
-2\boldsymbol\Omega\times\mathbf V
&=(2\Omega v\sin\varphi-2\Omega w\cos\varphi)\mathbf i
-2\Omega u\sin\varphi\,\mathbf j
+2\Omega u\cos\varphi\,\mathbf k.
\end{aligned}
$$

:::WARNING
**课件第 48 张截图需要辨别符号**：该页写了 $-2\boldsymbol\Omega\times\mathbf V$，但行列式后显示的三个分量实际对应 $+2\boldsymbol\Omega\times\mathbf V$。本笔记使用的式（21）与课件第 44、53 张中的直角坐标动量方程一致。记科氏力时以式（21）为准。
:::

科氏力总是垂直于 $\boldsymbol\Omega$ 和 $\mathbf V$。在通常的水平运动和传统近似下，北半球水平科氏加速度指向运动方向**右侧**，南半球指向**左侧**。

### 5. 直角坐标中的另外四个标量方程

质量：

$$
\frac{D\rho}{Dt}
+\rho\left(\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}\right)=0.
$$

盐量：

$$
\frac{\partial s}{\partial t}
+u\frac{\partial s}{\partial x}+v\frac{\partial s}{\partial y}+w\frac{\partial s}{\partial z}
=K_s\left(\frac{\partial^2s}{\partial x^2}+\frac{\partial^2s}{\partial y^2}+\frac{\partial^2s}{\partial z^2}\right).
$$

热量：

$$
\frac{\partial\theta}{\partial t}
+u\frac{\partial\theta}{\partial x}+v\frac{\partial\theta}{\partial y}+w\frac{\partial\theta}{\partial z}
=K_\theta\left(\frac{\partial^2\theta}{\partial x^2}+\frac{\partial^2\theta}{\partial y^2}+\frac{\partial^2\theta}{\partial z^2}\right).
$$

状态：$\rho=\rho(\theta,s,p)$。

这些方程构成课件所介绍的**层流海水运动基本方程组**，理论上可描述各类时空尺度的海水运动；实际海洋研究还需要引入针对尺度的近似及合适的边界条件。

---

## 六、边界条件的意义与分类

### 1. 为什么仅有方程组仍然不够？

海洋与大气、海底、海岸接触。对内部海水建立的连续介质微分方程，求解时必须同时描述**海面与海底上的物理约束**。

例如：海水通常不能从固体海底直接穿过去；海表面可以升降；大气可以通过风应力向海洋传递动量，还可以通过降水、蒸发和热通量改变海洋。

课件归纳的四类边界条件：

1. **无质量交换的运动学边界条件**；
2. **存在质量交换时的运动学边界条件**；
3. **动力学边界条件**；
4. **温度边界条件**。

![本节列出的四类边界条件](/images/physical-oceanography/lesson8/slide_56.jpg)

**本次课件重点推导前两类**。动力学边界条件（如界面应力）和温度边界条件（如规定温度或热通量）的具体数学形式本节未展开。

### 2. 用一个函数表示任意曲面

令一个随时间变化的界面为：

$$
\boxed{F(x,y,z,t)=0.}
\tag{25}
$$

示例：

- 海面 $z=\zeta(x,y,t)$：$F=z-\zeta(x,y,t)$；
- 静止海底 $z=-h(x,y)$：$F=z+h(x,y)$。

曲面上任一点的法线由梯度给出：

$$
\boxed{\mathbf n=\frac{\nabla F}{|\nabla F|}.}
\tag{26}
$$

**为什么梯度垂直于曲面？** 沿曲面的任意切向位移 $d\mathbf r$，函数值保持 $F=0$ 不变；因此 $dF=\nabla F\cdot d\mathbf r=0$。所以 $\nabla F$ 与所有切向位移垂直。

---

## 七、无质量交换的运动学边界条件

### 1. 核心想法：边界上的质点始终留在边界上

考虑随时间移动的界面。设界面上一点在时刻 $t$ 的位置为 $\mathbf r(t)$，界面几何运动速度为 $\mathbf C=d\mathbf r/dt$。

因为该点始终满足 $F(\mathbf r(t),t)=0$，沿其运动轨迹求全导数：

$$
\frac{dF}{dt}=\frac{\partial F}{\partial t}
+\frac{d\mathbf r}{dt}\cdot\nabla F=0.
$$

于是得到**界面自身的运动条件**：

$$
\boxed{\frac{\partial F}{\partial t}+\mathbf C\cdot\nabla F=0.}
\tag{27}
$$

其中 $\mathbf C$ 是界面几何运动速度；海水质点的速度用 $\mathbf V$ 表示。这两个速度概念应当分开。

![控制曲面法向量、界面方程及界面运动的几何含义](/images/physical-oceanography/lesson8/slide_61.jpg)

### 2. 无质量交换意味着什么？

界面不可被流体质点穿透，意味着**流体相对于界面的法向速度为零**：

$$
\boxed{(\mathbf V-\mathbf C)\cdot\mathbf n=0.}
\tag{28}
$$

等价地：

$$
\mathbf V\cdot\mathbf n=\mathbf C\cdot\mathbf n.
$$

只要求**法向分量**相同：流体仍可以沿界面切向流动。

把 $\mathbf n=\nabla F/|\nabla F|$ 和式（27）代入，得到：

$$
\mathbf V\cdot\nabla F=\mathbf C\cdot\nabla F=-\frac{\partial F}{\partial t}.
$$

所以：

$$
\boxed{\frac{\partial F}{\partial t}+\mathbf V\cdot\nabla F=0.}
\tag{29}
$$

这是**无质量交换的运动学边界条件的一般形式**。

### 3. 如果界面两侧都是流体？

设界面两侧速度分别为 $\mathbf V_1,\mathbf V_2$，且两侧均不能穿过界面：

$$
\boxed{\mathbf V_1\cdot\mathbf n
=\mathbf V_2\cdot\mathbf n
=\mathbf C\cdot\mathbf n.}
\tag{30}
$$

因此两侧分别满足：

$$
\frac{\partial F}{\partial t}+\mathbf V_1\cdot\nabla F=0,
\qquad
\frac{\partial F}{\partial t}+\mathbf V_2\cdot\nabla F=0.
$$

![两种流体分界面：两侧法向速度与界面法向速度一致](/images/physical-oceanography/lesson8/slide_64.jpg)

直观理解：海面上方空气和下方海水可以沿界面不同方向流动；在没有质量穿越界面的理想化设定下，两侧的法向速度都必须与界面的法向运动匹配。

### 4. 海面运动学边界条件：完整推导

令海面高度相对静止海面为 $\zeta(x,y,t)$，即：

$$
F(x,y,z,t)=z-\zeta(x,y,t)=0.
$$

先求偏导：

$$
\frac{\partial F}{\partial t}=-\frac{\partial\zeta}{\partial t},\qquad
\nabla F=\left(-\frac{\partial\zeta}{\partial x},
-\frac{\partial\zeta}{\partial y},1\right).
$$

令 $\mathbf V=(u,v,w)$，则：

$$
\mathbf V\cdot\nabla F
=-u\frac{\partial\zeta}{\partial x}
-v\frac{\partial\zeta}{\partial y}+w.
$$

代入式（29）：

$$
-\frac{\partial\zeta}{\partial t}
-u\frac{\partial\zeta}{\partial x}
-v\frac{\partial\zeta}{\partial y}+w=0.
$$

整理得到：

$$
\boxed{\frac{\partial\zeta}{\partial t}
+u\frac{\partial\zeta}{\partial x}
+v\frac{\partial\zeta}{\partial y}=w
\qquad(z=\zeta).}
\tag{31}
$$

设水平速度 $\mathbf V_H=(u,v)$、水平梯度 $\nabla_H=(\partial_x,\partial_y)$，则：

$$
\boxed{\frac{\partial\zeta}{\partial t}+\mathbf V_H\cdot\nabla_H\zeta-w=0.}
$$

![海面几何形状与运动学边界条件](/images/physical-oceanography/lesson8/slide_67.jpg)

三个部分分别表示：

- $\partial\zeta/\partial t$：固定位置海面的升降；
- $\mathbf V_H\cdot\nabla_H\zeta$：水平流动沿倾斜海面产生的垂直几何效应；
- $w$：海面上海水质点的真实垂向速度。

:::TIP
**具体例子：海面倾斜时，即使海面高度不随时间变化，$w$ 也可以不为零。**

若海面形状为 $\zeta=ax$，并且 $\partial_t\zeta=0$，海水沿 $x$ 方向以速度 $u=U$ 运动，$v=0$，则：

$$
w=U\frac{\partial\zeta}{\partial x}=Ua.
$$

海水沿着斜坡状海面运动，会有与坡度相匹配的垂向速度，仍满足无穿透条件。
:::

### 5. 海底运动学边界条件：完整推导

仍以**静止海面为 $z=0$、竖直向上为正**，令海底水深 $h(x,y)>0$：

$$
z=-h(x,y),\qquad F(x,y,z,t)=z+h(x,y)=0.
$$

静止海底不随时间变化：

$$
\frac{\partial F}{\partial t}=0,\qquad
\nabla F=\left(\frac{\partial h}{\partial x},\frac{\partial h}{\partial y},1\right).
$$

代入式（29）：

$$
0+u\frac{\partial h}{\partial x}
+v\frac{\partial h}{\partial y}+w=0.
$$

所以：

$$
\boxed{w=-u\frac{\partial h}{\partial x}-v\frac{\partial h}{\partial y}
=-\mathbf V_H\cdot\nabla_H h
\qquad(z=-h).}
\tag{32}
$$

![海底地形及无质量交换的海底运动学边界条件](/images/physical-oceanography/lesson8/slide_71.jpg)

**物理意义**：沿倾斜海底运动的水，其垂向速度必须与地形坡度相配合，才能沿海底滑动而不穿越海底。

例如水深朝东增加，即 $\partial h/\partial x>0$；如果海水向东流动 $u>0$，则 $w<0$，海水会沿着向深处下倾的海底运动。

**特殊情形：平坦海底** $\nabla_Hh=0$，于是：

$$
\boxed{w=0\quad(z=-h).}
$$

注意：此处 $w=0$ 是**平坦、静止、不可渗透的海底**上的条件。在起伏地形上，通常需要使用完整式（32）。

---

## 八、有质量交换的海面运动学边界条件

### 1. 为什么海面还存在“有质量交换”的情况？

真实海气界面会发生：

- **蒸发**：水从海洋进入大气；
- **降水**：水从大气进入海洋。

课件强调，理想化地将这些质量交换视为**纯水交换**，盐分仍留在海水中。引入符号：

- $\rho_w$：纯水组分的质量密度；
- $\rho_s$：盐分组分的质量密度；
- $\mathbf V_w,\mathbf V_s$：纯水、盐分组分的运动速度；
- $\rho=\rho_w+\rho_s$：海水总密度；
- $b$：单位时间、单位**水平面积**上的纯水质量交换通量，单位 $\mathrm{kg\,m^{-2}\,s^{-1}}$。

在课件法线取向下，**$b>0$ 表示海水向外损失纯水（如蒸发），$b<0$ 表示海洋获得纯水（如降水）**。

![海气界面质量通量 b 的法向分解示意图](/images/physical-oceanography/lesson8/slide_73.jpg)

### 2. 为什么出现 $\cos\gamma$？

海面可能倾斜。$b$ 以**水平投影面积**定义，而质量通量的通用边界表达式使用**曲面真实面积**及其法向分量。

记 $\gamma$ 为海面法向 $\mathbf n$ 与竖直方向 $\mathbf e_z$ 的夹角：

$$
\cos\gamma=\mathbf n\cdot\mathbf e_z
=\frac{\partial F/\partial z}{|\nabla F|}.
\tag{33}
$$

若表面面积为 $dA$，其水平投影面积为 $dA\cos\gamma$，故边界通量中会出现 $b\cos\gamma$。

### 3. 写出纯水和盐分各自的交换条件

设 $\mathbf C$ 为海面几何移动速度。沿海水指向大气的法向，课件分别给出：

**纯水组分：**

$$
\boxed{\rho_w(\mathbf V_w-\mathbf C)\cdot\mathbf n=b\cos\gamma.}
\tag{34}
$$

**盐分组分：**

$$
\boxed{\rho_s(\mathbf V_s-\mathbf C)\cdot\mathbf n=0.}
\tag{35}
$$

盐分方程的右边为零，表示此处假定盐不会随纯水蒸发跨界面流走。

两式相加：

$$
(\rho_w\mathbf V_w+\rho_s\mathbf V_s)
\cdot\mathbf n-(\rho_w+\rho_s)\mathbf C\cdot\mathbf n
=b\cos\gamma.
$$

### 4. 定义海水质心速度，合并为一个方程

定义海水的**质量加权平均速度（质心速度）**：

$$
\boxed{\mathbf V=
\frac{\rho_w\mathbf V_w+\rho_s\mathbf V_s}
{\rho_w+\rho_s}.}
\tag{36}
$$

由于 $\rho=\rho_w+\rho_s$，可将上式化为：

$$
\rho(\mathbf V-\mathbf C)\cdot\mathbf n=b\cos\gamma.
$$

除以 $\rho$：

$$
\boxed{(\mathbf V-\mathbf C)\cdot\mathbf n
=\frac{b}{\rho}\cos\gamma.}
\tag{37}
$$

与无质量交换的 $ (\mathbf V-\mathbf C)\cdot\mathbf n=0$ 比较：**新增了跨界面纯水通量项**。

### 5. 变成便于海洋计算的海面高度方程

把曲面几何关系代入式（37）：

$$
\mathbf n=\frac{\nabla F}{|\nabla F|},\qquad
\mathbf C\cdot\mathbf n=-\frac{\partial F/\partial t}{|\nabla F|},\qquad
\cos\gamma=\frac{\partial F/\partial z}{|\nabla F|}.
$$

于是：

$$
\frac{\mathbf V\cdot\nabla F+\partial F/\partial t}{|\nabla F|}
=\frac{b}{\rho}\frac{\partial F/\partial z}{|\nabla F|}.
$$

乘以 $|\nabla F|$，得到**有质量交换的通用界面条件**：

$$
\boxed{\frac{\partial F}{\partial t}+\mathbf V\cdot\nabla F
=\frac{b}{\rho}\frac{\partial F}{\partial z}.}
\tag{38}
$$

现在令自由海面 $F=z-\zeta(x,y,t)$。此前已计算：

$$
\frac{\partial F}{\partial t}=-\frac{\partial\zeta}{\partial t},\quad
\mathbf V\cdot\nabla F=-u\zeta_x-v\zeta_y+w,\quad
\frac{\partial F}{\partial z}=1.
$$

代入式（38）：

$$
-\zeta_t-u\zeta_x-v\zeta_y+w=\frac{b}{\rho}.
$$

移项，得到本课推导的最终结果：

$$
\boxed{\frac{\partial\zeta}{\partial t}
+\mathbf V_H\cdot\nabla_H\zeta-w
=-\frac{b}{\rho}\qquad(z=\zeta).}
\tag{39}
$$

![海面有纯水质量交换时的运动学边界条件：从两组分通量到海面高度方程](/images/physical-oceanography/lesson8/slide_75.jpg)

### 6. 用两个极端情形检验正负号

**情形 A：没有蒸发和降水。** 若 $b=0$，式（39）退化为：

$$
\zeta_t+\mathbf V_H\cdot\nabla_H\zeta-w=0,
$$

恰好恢复前面推导的无质量交换海面条件。

**情形 B：静止、水平的海面，只发生蒸发。** 取 $\mathbf V_H=0,w=0$，且 $b>0$：

$$
\frac{\partial\zeta}{\partial t}=-\frac{b}{\rho}<0.
$$

海面下降，与**蒸发导致海水损失**的直观判断一致。若是降水，$b<0$，则 $\partial\zeta/\partial t>0$，海面上升。

:::NOTE
这一步是一个非常好用的**符号自检方法**。在边界条件推导中，遇到 $\zeta$、$h$、$F$、法线方向、质量通量正负等符号时，可以代入“静止水平海面 + 单独蒸发”的情形检查是否合理。
:::

---

## 九、本课公式汇总与易错点

### 1. 九个必须掌握的公式

| 公式 | 表达式 | 使用情形 |
| --- | --- | --- |
| 质量连续方程 | $\partial_t\rho+\nabla\cdot(\rho\mathbf V)=0$ | 可压缩的一般质量守恒 |
| 随体形式 | $D\rho/Dt+\rho\nabla\cdot\mathbf V=0$ | 与质点体积变化联系 |
| 不可压缩连续方程 | $\nabla\cdot\mathbf V=0$ | 适用不可压缩近似时 |
| 盐量扩散方程 | $Ds/Dt=K_s\Delta s$ | 常系数分子扩散 |
| 热传导方程 | $D\theta/Dt=K_\theta\Delta\theta$ | 常系数分子传导 |
| 状态方程 | $\rho=\rho(\theta,s,p)$ | 联系密度、温盐与压强 |
| 无交换通用边界 | $\partial_tF+\mathbf V\cdot\nabla F=0$ | 不可穿透界面 |
| 自由海面条件 | $\zeta_t+\mathbf V_H\cdot\nabla_H\zeta=w$ | 无海气质量交换 |
| 海底与有交换海面 | $w=-\mathbf V_H\cdot\nabla_Hh$；$\zeta_t+\mathbf V_H\cdot\nabla_H\zeta-w=-b/\rho$ | 起伏海底 / 蒸发降水 |

### 2. 五个最容易出错的地方

1. **两个连续方程要区分**：$\partial_t\rho+\nabla\cdot(\rho\mathbf V)=0$ 是一般质量守恒；$\nabla\cdot\mathbf V=0$ 是在不可压缩近似下得到的体积连续方程。
2. **别把盐量平流项当成扩散项**：$\mathbf V\cdot\nabla s$ 描述随水流动，$K_s\Delta s$ 描述分子扩散；温度方程同理。
3. **热膨胀系数的符号**：标准定义 $\alpha=-(1/\rho)(\partial\rho/\partial\theta)_{s,p}$；课件对应页存在符号笔误。
4. **科氏力叉乘与坐标分量**：正确的单位质量科氏加速度为 $-2\boldsymbol\Omega\times\mathbf V$。课件行列式展开页与直角坐标式的符号不一致，应以完整叉乘重新检查。
5. **海面与海底的地形函数符号**：海面 $F=z-\zeta$，海底 $F=z+h$；这直接决定 $\zeta$ 梯度和 $h$ 梯度的正负号。质量交换还要明确 $b$ 的正方向。

### 3. 最后用一条推导链串起来

$$
\boxed{\begin{gathered}
\text{守恒定律}\ \longrightarrow\ \text{固定控制体积分形式}\\
\xrightarrow{\text{高斯公式}}\text{局地守恒方程}\\
\xrightarrow{\text{连续方程消去密度项}}
\text{随体输运方程}\\
\xrightarrow{\text{扩散定律、状态方程}}
\text{海水运动基本方程组}\\
\xrightarrow{F(x,y,z,t)=0}
\text{海面和海底运动学边界条件}.
\end{gathered}}
$$

**这一课最值得自己动笔重做的三次推导**：

- 从固定控制体的质量守恒推到 $\partial_t\rho+\nabla\cdot(\rho\mathbf V)=0$，再变为 $D\rho/Dt+\rho\nabla\cdot\mathbf V=0$；
- 从 $\partial_t(\rho s)+\nabla\cdot(\rho s\mathbf V)=-\nabla\cdot\mathbf S$ 出发，利用连续方程推导盐量扩散方程，并将相同方法迁移到温度方程；
- 从一般界面 $F=0$ 推到 $\partial_tF+\mathbf V\cdot\nabla F=0$，依次得到海面、海底和有纯水质量交换的海面条件。

---

## 资料说明

- **课程原始资料**：袁野平，浙江大学《物理海洋学》，2026-10-12 第 1—2 节课堂 PPT 投屏截图（第 6—75 张含本课教学内容）。
- **录音附件的可用性**：所提供的 DOCX 内有课堂投屏图片及时间戳，但无可读取的口述转写。因此笔记没有将未核实的口头例子、作业、考试要求写成教师原话。
- **讲解扩展范围**：文中的控制体与分子通量逐步展开、速度场例子、倾斜海面例子、符号自检和课件符号校核为辅助自学的补充说明；其出发公式均来自本次课件。
