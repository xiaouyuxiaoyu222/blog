---
title: Oceanography-Lesson14：有限振幅波动与随机海浪
published: 2026-10-28
description: Lesson 14，Stokes 有限振幅波、Stokes 漂移、随机海浪、海浪谱、风浪谱、谱传输方程、瑞利波高统计与第三次作业详解。
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 概述

本次课程从上节课的**有限水深线性波**继续，先解释小振幅理论为什么需要修正，以及 Stokes 有限振幅波如何描述**尖峰平谷、振幅影响波速、质点净漂移**；随后进入教材第七章**随机海浪**，介绍概率统计基础、海浪谱、经典风浪谱、海浪数值模式和波高的瑞利分布。

本讲的主线：

**确定性波动方程 → 小振幅近似及其局限 → Stokes 非线性修正 → 实际海浪的随机性 → 频率/方向谱 → 谱模式 → 用海浪谱推算统计波高。**

> **课堂重要提醒：**本讲实际包含上节课的结尾内容（有限振幅波）和第七章“随机海浪”。讲课录音中的“斯沃克斯、苏沃克斯、张斯旺”等均统一校正为 **Stokes、JONSWAP**；原始语音转写存在明显同音错误，下文以课件和物理定义为准。没有单独提供教材原文，因此教材题号不能另行核定；文末六道题据课堂课件和录音原题整理。

## 作业、考试与成绩相关信息

- **第三次作业**：课件第 82、91、97 页列出**六道题**；第 6 题还须掌握 **$H_{1/10}$、$H_{1/100}$** 的求法。六题及解答见文末。
- **提交时间**：老师希望前三次作业在**2026-10-30（周五）前**交给助教，以便周末批改、**11-02（周一）**集中讲错题；录音说**11-04（周三）考试前仍可补交**。请以教师/助教最新收作业口径为准。
- **期中考试**：按本次 2026-10-28 课堂口径，为 **2026-11-04（周三），闭卷**；复习范围重点参考前三次作业。
- **明确要求掌握/记忆**：线性波动控制方程和三个边界条件；深水、浅水的频散关系、相速度/群速度和质点轨迹推导；动量方程的向量式与直角坐标式、热传导与盐度方程、边界条件，以及 Rossby 数、Ekman 数的意义。**球坐标表达式不要求背诵**。
- **理解即可**：驻波的表达式给出后解释特征；Stokes 高阶复杂推导、Neumann/P–M/JONSWAP 的完整经验系数及复杂谱源项参数**不要求背诵**。下周一（11-02）老师计划再讲一次波浪变形，本讲没有布置新增的第 4 次作业。

---

## 目录

- [一、课前复习：风浪、涌浪、波龄及波速](#一课前复习风浪涌浪波龄及波速)
- [二、Stokes 有限振幅波动](#二stokes-有限振幅波动)
- [三、随机海浪与概率论预备知识](#三随机海浪与概率论预备知识)
- [四、海浪谱的定义与物理意义](#四海浪谱的定义与物理意义)
- [五、常用风浪谱与方向谱](#五常用风浪谱与方向谱)
- [六、海浪数值模式与能量源汇](#六海浪数值模式与能量源汇)
- [七、海浪波高与周期的统计分布](#七海浪波高与周期的统计分布)
- [八、核心公式与易错辨析](#八核心公式与易错辨析)
- [九、第三次作业：原题与解答](#九第三次作业原题与解答)

---

## 一、课前复习：风浪、涌浪、波龄及波速

### 1. 风浪（sea）与涌浪（swell）

- **风浪**：仍在当地风场直接作用下生成、增长的波浪；大小、方向、周期通常较混杂，表面形态较碎。
- **涌浪**：离开主要生风区，或者当地风已停止后继续自由传播的波浪；传播途中因频散和耗散，往往显得**长、规则、平滑**。
- **为什么大浪更容易传播出风区？**在**深水线性重力波**条件下，长波传播较快，短波较慢，因此长周期成分能够更快离开风区。这里讨论的是不同**波长/周期**所造成的波速差别；振幅也影响波速需要采用高阶非线性理论。

![风浪与涌浪的形成和频散示意图（课件第2页）](/images/physical-oceanography/lesson14/slide_002.jpg)

### 2. 波陡与波龄

波陡（wave steepness）表示波形有多“陡”：

$$
\delta=\frac{H}{L}
$$

其中 $H$ 为波高（波峰至波谷），$L$ 为波长。对于理想深水、稳定的极限 Stokes 重力波，最大波陡约为 $H/L\approx 1/7$；实际破碎还受风、海底、波群等影响，**不能把 $1/7$ 当作所有海浪的统一破碎阈值**。

波龄（wave age）常定义为：

$$
\beta=\frac{c_p}{U_{10}}
$$

- $c_p$：谱峰对应波的**相速度**；$U_{10}$：海面上方约 $10\,\mathrm{m}$ 高度的风速。
- 生长期风浪一般波龄较小，随波浪成长逐渐增大；离开风区成为涌浪后，当地风速可能很小，波龄可以明显增大。
- 老师提及的“约 1 或 1.2”属于课堂中帮助理解的经验数量级，**实际分界会随风浪定义与海况改变**。

### 3. 相速度和群速度

相速度（phase speed）是**某一个固定相位的波峰或波谷**前进的速度：

$$
c=\frac{L}{T}=\frac{\omega}{k},\qquad k=\frac{2\pi}{L},\quad\omega=\frac{2\pi}{T}
$$

群速度（group velocity）是**波群包络、能量在理想线性波情况下传播**的速度：

$$
c_g=\frac{d\omega}{dk}
$$

有限水深的表面重力波满足：

$$
\omega^2=gk\tanh(kh),\qquad c_g=\frac12\left(1+\frac{2kh}{\sinh(2kh)}\right)c
$$

- **深水**：$kh\gg1$，$c=\sqrt{g/k}$，$c_g=c/2$。
- **浅水**：$kh\ll1$，$c=\sqrt{gh}$，$c_g=c$。

为什么波群会有包络？两列频率和波数很接近的波叠加：

$$
\begin{aligned}
\eta&=a\sin(k_1x-\omega_1t)+a\sin(k_2x-\omega_2t)\\
&=2a\cos\!\left[\frac{(k_1-k_2)x-(\omega_1-\omega_2)t}{2}\right]
\sin\!\left[\frac{(k_1+k_2)x-(\omega_1+\omega_2)t}{2}\right]
\end{aligned}
$$

第一因子是**变化较慢的包络**，第二因子是内部快速振荡的小波。包络极值位置满足 $x\propto (\omega_1-\omega_2)t/(k_1-k_2)$，故近似有 $c_g=\Delta\omega/\Delta k\to d\omega/dk$。

![两列接近频率的波叠加形成波群（课件第6页）](/images/physical-oceanography/lesson14/slide_006.jpg)

![群速度推导与深浅水极限（课件第7页）](/images/physical-oceanography/lesson14/slide_007.jpg)

---

## 二、Stokes 有限振幅波动

### 1. 为什么要发展小振幅理论？

小振幅线性波理论能够解析求出波面、速度、压力和质点轨迹，但具有四项局限：

1. 实际波陡 $H/L$ 往往很小，却并非严格为零；课件列出约 $0.05\sim0.08$ 的典型量级，不能当作所有海况的普适范围。
2. **实测波形不对称**：波峰较尖且窄、波谷较宽且平；线性理论给出上下对称的正弦波。
3. **线性波速与振幅无关**：线性频散关系只含波数、水深、重力加速度；有限振幅条件下波速会出现非线性修正。
4. **一阶质点轨迹闭合**：深水为圆、浅水近似为椭圆，但实际上波浪可引起沿传播方向的平均漂移。

![小振幅线性波的四项局限（课件第8页）](/images/physical-oceanography/lesson14/slide_008.jpg)

### 2. 有限振幅理论的基本思想

**Stokes 波**在保持理想流体假定的基础上，用摄动展开保留二阶、三阶项，用来描述波峰变尖、波速受振幅影响及质量输送。

基本假设与此前线性波类似：海水均匀不可压缩、无黏、无旋；以重力为主，忽略旋转、黏性、表面张力（在本课堂讨论的重力波尺度下）；自由表面压力为常数。**有限振幅也要求摄动参数足够小，不能任意增大振幅。**

选取小参数 $\varepsilon$（与波陡 $ka$ 同阶），将速度势 $\phi$ 与波面高度 $\eta$ 展开：

$$
\begin{aligned}
\phi&=\varepsilon\phi_1+\varepsilon^2\phi_2+\varepsilon^3\phi_3+\cdots\\
\eta&=\varepsilon\eta_1+\varepsilon^2\eta_2+\varepsilon^3\eta_3+\cdots
\end{aligned}
$$

- 一阶：仅保留 $O(\varepsilon)$，回到**线性波**。
- 二阶：保留 $O(\varepsilon^2)$，波面出现 $\cos(2\theta)$ 的**二次谐波**，可描述波峰变尖等效应。
- 三阶：继续保留 $O(\varepsilon^3)$，可求得与波幅相关的**非线性频散关系**（课堂主要展示深水情形）。

这里 $\theta=kx-\omega t$。自由表面位于 $z=\eta$，求解时还会将其边界条件用泰勒展开移到 $z=0$，逐阶收集同次幂。

![Stokes 波的典型波面及主要特点（课件第14页）](/images/physical-oceanography/lesson14/slide_014.jpg)

### 3. 一阶、二阶解与物理意义

一阶解与之前的线性波完全相同：

$$
\eta^{(1)}=a\cos\theta,\qquad
\phi^{(1)}=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin\theta
$$

其中 $a$ 为一阶振幅，$h$ 为平均水深。课件给出的二阶波面修正为：

$$
\eta^{(2)}=\frac14\alpha(3\alpha^2-1)a^2k\cos(2\theta),\qquad \alpha=\coth(kh)
$$

所以波面近似为 $\eta\approx\eta^{(1)}+\eta^{(2)}$；一阶项决定主要正弦形态，**二阶项改变波峰/波谷的曲率和不对称程度**。课堂说明二阶近似采用与线性波相同的最低阶频散关系。

![Stokes 一阶与二阶结果（课件第15页）](/images/physical-oceanography/lesson14/slide_015.jpg)

课件还给出了三阶波面、速度势和频散关系（见下图）；这些长系数不要求背诵，需掌握**增加高阶项后波速可以依赖于振幅**这一结论。

![Stokes 三阶波解与非线性频散关系（课件第16页）](/images/physical-oceanography/lesson14/slide_016.jpg)

### 4. 深水 Stokes 波：尖峰平谷和波速修正

深水条件 $kh\gg1$ 下 $\coth(kh)\approx1$，最常用的二阶形式是：

$$
\eta\approx a\cos\theta+\frac12ka^2\cos(2\theta)
$$

代入波峰 $\theta=0$、波谷 $\theta=\pi$：

$$
\eta_{\mathrm{crest}}\approx a+\frac12ka^2,\qquad
\eta_{\mathrm{trough}}\approx-a+\frac12ka^2
$$

可见二次谐波使**波峰上抬、波谷变浅**，波峰更尖，波谷更平坦。波峰与波谷的中点相对 $z=0$ 上移约 $ka^2/2$；**这不等于整个周期的空间平均海面必然升高**，后者要结合平均水位选取和质量守恒条件判定。

三阶深水波的角频率出现幅度修正（采用课件的幅度约定）：

$$
\omega\approx\sqrt{gk}\left(1+\frac12k^2a^2\right),\qquad
c=\frac{\omega}{k}\approx\sqrt{\frac{g}{k}}\left(1+\frac12k^2a^2\right)
$$

**同一 $k$ 下**，有限振幅波比线性波的相速度略大；这个修正量为 $O((ka)^2)$。不要把“同一振幅不同波长”与“同一波长不同振幅”的比较混在一起。

![深水 Stokes 波三阶解与波峰/波谷高度（课件第17页）](/images/physical-oceanography/lesson14/slide_017.jpg)

### 5. Stokes 漂移（Stokes drift）

一阶波动的水质点轨迹虽然闭合，但流体质点实际运动时，它在波峰处和波谷处经历的水平速度场存在细小差异，积累后产生**沿波传播方向的平均净位移**，称为 Stokes 漂移。质点轨迹近似为一串**向前缓慢移动的圆或椭圆**。

用 $\xi$、$\zeta$ 分别表示质点的水平、垂直位移，对实际质点位置的一阶水平速度作泰勒展开：

$$
u(x_0+\xi,z_0+\zeta,t)\approx
u(x_0,z_0,t)+\xi\frac{\partial u}{\partial x}+\zeta\frac{\partial u}{\partial z}
$$

对周期取平均，若一阶速度在固定点的时间均值为零，则平均二阶位移效应：

$$
\overline{u_S}=\overline{\xi\frac{\partial u}{\partial x}+\zeta\frac{\partial u}{\partial z}}
=\frac{a^2k\omega\cosh[2k(z+h)]}{2\sinh^2(kh)}
$$

深水 $kh\gg1$ 时化简为：

$$
\boxed{\overline{u_S}(z)=a^2k\omega e^{2kz}=a^2k^2c\,e^{2kz}}
$$

解释：

- $\overline{u_S}(z)>0$：对向右传播的波，平均 Stokes 漂移方向向右。
- $z=0$ 最强：$\overline{u_S}(0)=a^2k^2c$。
- 随深度 $|z|$ 增加呈指数衰减，衰减尺度约为 $1/(2k)$。

若只计算深水中的 Stokes 漂移（不计可能存在的补偿回流），单位波峰宽度的体积输运为：

$$
\begin{aligned}
Q_S&=\int_{-\infty}^{0}\overline{u_S}(z)\,dz\\
&=a^2k\omega\int_{-\infty}^{0}e^{2kz}\,dz\\
&=\frac{a^2\omega}{2}=\boxed{\frac{\pi a^2}{T}}
\end{aligned}
$$

**结论：$Q_S\propto a^2/T$。**这是老师明确说要记住的关系。Stokes 漂移描述波动诱导的拉格朗日平均漂移；实际海域总质量输运还可能包含欧拉平均流和补偿回流。

![Stokes 漂移的速度随深度变化、体积输运积分（课件第23页）](/images/physical-oceanography/lesson14/slide_023.jpg)

### 6. Stokes 极限波

随着波陡增加，理想深水 Stokes 周期波在极限形态下具有**约 $120^\circ$ 的波峰内角**，波形逐渐形成尖角。对应极限波陡约为 $H/L\simeq1/7$。这是理想无黏、深水重力波的极限模型，实际波浪还可能因浅水变形、风和不稳定性提早破碎。

![Stokes 极限波的120度波峰内角与浪高（课件第21页）](/images/physical-oceanography/lesson14/slide_021.jpg)

---

## 三、随机海浪与概率论预备知识

### 1. 为什么需要随机海浪理论？

真实海面受风场、海流、地形和多个波系影响，同时包含大量不同方向、振幅、频率、初相位的波。测到的波面随时间变化非常杂乱，单一正弦波甚至几个高阶确定性波都难以逐点预测。

基本策略：将随机海面看成大量简谐波的叠加，用**概率统计**描述波高分布，用**谱分析**描述不同频率和方向上的方差/能量分布。

![真实海浪随机波面序列（课件第27页）](/images/physical-oceanography/lesson14/slide_027.jpg)

### 2. 随机变量、分布函数、概率密度

设随机变量为 $X$（如某时刻波面位移，或逐个统计的波高），其分布函数：

$$
F_X(x)=P(X\le x)
$$

对连续型随机变量，概率密度 $p_X(x)$ 满足：

$$
F_X(x)=\int_{-\infty}^{x}p_X(s)\,ds,\qquad
P(a<X\le b)=\int_a^bp_X(x)\,dx
$$

**区分：$p_X(x)$ 是密度，单点的概率一般为 0；区间概率由积分得到。**

![随机变量、分布函数的定义（课件第29页）](/images/physical-oceanography/lesson14/slide_029.jpg)

### 3. 数学期望、方差、矩

均值（数学期望）表示取值的平均位置：

$$
\mu=E[X]=\int_{-\infty}^{\infty}x\,p_X(x)\,dx
$$

方差表示围绕均值的平均平方偏离程度：

$$
\sigma^2=\operatorname{Var}(X)=E[(X-\mu)^2],\qquad\sigma=\sqrt{\operatorname{Var}(X)}
$$

- $r$ 阶**原点矩**：$E[X^r]$；一阶原点矩就是均值。
- $r$ 阶**中心矩**：$E[(X-\mu)^r]$；二阶中心矩就是方差。
- 二阶原点矩通常为 $E[X^2]=\sigma^2+\mu^2$，只有 $\mu=0$ 才等于方差。

常见连续分布包括均匀分布、标准正态 $N(0,1)$、一般正态 $N(\mu,\sigma^2)$、瑞利分布、Weibull 分布、指数分布。**正态分布的峰值位置在 $\mu$，但“均值总是最可能的取值”并非对所有分布成立。**

![数学期望、方差及矩（课件第30页）](/images/physical-oceanography/lesson14/slide_030.jpg)

![几种常见概率分布和中心极限定理（课件第31页）](/images/physical-oceanography/lesson14/slide_031.jpg)

### 4. 中心极限定理

若 $X_1,\dots,X_n$ 独立同分布，具有有限均值 $\mu$ 和正的有限方差 $\sigma^2$，则：

$$
\frac{\sum_{i=1}^{n}X_i-n\mu}{\sigma\sqrt{n}}\ \xrightarrow{d}\ N(0,1),\qquad n\to\infty
$$

含义：**大量独立小贡献叠加并恰当标准化后，其分布趋于正态**。海浪随机相位叠加的波面位移通常近似正态；这还需要随机相位、足够多的独立成分等假定，不能把“各个波高本身必然正态”当成结论。

### 5. 随机过程、平稳性、自相关

$\eta(t)$ 是随时间变化的随机过程。在**宽平稳**假定下：

$$
\mu_\eta=E[\eta(t)]=\text{常数}
$$

$$
R_\eta(\tau)=E[(\eta(t)-\mu_\eta)(\eta(t+\tau)-\mu_\eta)]
$$

- $R_\eta(0)=\sigma_\eta^2$，对应波面位移的方差。
- $\tau$ 是两次观察的**时间间隔**；自相关函数衡量间隔 $\tau$ 后的波面与自身有多相似。
- 当 $\mu_\eta=0$ 时，上式就是 $E[\eta(t)\eta(t+\tau)]$；不先减均值时一般称为自相关而非自协方差，课堂将两者按零均值简写。

![随机过程、自相关函数、方差（课件第32页）](/images/physical-oceanography/lesson14/slide_032.jpg)

---

## 四、海浪谱的定义与物理意义

### 1. 从“许多正弦波”到“方差谱”

固定位置处的海面位移可以近似写为：

$$
\eta(t)=\sum_{i=1}^{N}a_i\cos(\omega_it+\varepsilon_i)
$$

其中 $a_i$ 是第 $i$ 个分量的振幅、$\omega_i$ 是角频率、$\varepsilon_i$ 是随机初相位。若不同分量间交叉项的平均为零，并且波面均值为零：

$$
\boxed{\sigma_\eta^2=E[\eta^2]=\frac12\sum_{i=1}^{N}a_i^2}
$$

单个分量的方差是 $a_i^2/2$；方差也与线性波平均能量成正比，因为重力波平均总能量**每单位水平面积**为 $\mathcal E_i=\tfrac12\rho ga_i^2=\rho g\,(a_i^2/2)$。

![正弦分量叠加与方差之和（课件第36页）](/images/physical-oceanography/lesson14/slide_036.jpg)

当频率足够密集，定义**单边角频率方差谱密度** $S_\eta(\omega)$：

$$
\boxed{m_0=\sigma_\eta^2=\int_0^{\infty}S_\eta(\omega)\,d\omega}
$$

- 横轴 $\omega$：**角频率**，单位 $\mathrm{rad/s}$。
- 纵轴 $S_\eta(\omega)$：**单位角频率对应的波面方差**，单位 $\mathrm{m^2\,s/rad}$（弧度按无量纲处理时为 $\mathrm{m^2\,s}$）。
- 一小段频率 $\Delta\omega$ 下的面积 $S_\eta(\omega)\Delta\omega$ 就是该频段贡献的波面方差。
- **整条谱曲线下的面积 $m_0$ 是总方差**；真实平均波能量/面积为 $\rho g m_0$，量纲 $\mathrm{J/m^2}$。

因此海浪谱通常也称为**能量谱**，但要记住乘上 $\rho g$ 才是严格的物理能量密度。

![频率谱的物理意义及方差谱（课件第41页）](/images/physical-oceanography/lesson14/slide_041.jpg)

### 2. 为什么用自相关函数的傅里叶变换？

自相关函数 $R_\eta(\tau)$ 反映波面在不同延迟下的相似性，其中隐藏着周期结构。根据 Wiener–Khinchin 关系，**宽平稳随机过程的功率谱密度和自相关函数是傅里叶变换对**。

为避免课件里把单边谱和双边谱写成同一个 $S$ 而造成系数混乱，统一记号：

**双边谱** $S_2(\omega)$，定义在 $-\infty<\omega<\infty$：

$$
S_2(\omega)=\frac{1}{2\pi}\int_{-\infty}^{\infty}R_\eta(\tau)e^{-i\omega\tau}\,d\tau
$$

$$
R_\eta(\tau)=\int_{-\infty}^{\infty}S_2(\omega)e^{i\omega\tau}\,d\omega
$$

对实值、零均值的平稳波面，$S_2(-\omega)=S_2(\omega)$。因此**单边谱**满足 $S_\eta(\omega)=2S_2(\omega)$（$\omega>0$），于是：

$$
R_\eta(\tau)=\int_0^{\infty}S_\eta(\omega)\cos(\omega\tau)\,d\omega
$$

$$
\boxed{S_\eta(\omega)=\frac{2}{\pi}\int_0^{\infty}R_\eta(\tau)\cos(\omega\tau)\,d\tau}
$$

在 $\tau=0$ 代入，得 $\sigma_\eta^2=\int_0^\infty S_\eta(\omega)d\omega$。**单双边谱之间存在因子 2，做题必须先声明约定。**

![自相关函数与谱的傅里叶变换关系（课件第43页）](/images/physical-oceanography/lesson14/slide_043.jpg)

### 3. 从谱得到有效波高

定义第 $n$ 阶**谱矩**：

$$
m_n=\int_0^{\infty}\omega^nS_\eta(\omega)\,d\omega
$$

其中 $m_0$ 是波面方差。海洋工程中使用**谱显著波高**：

$$
\boxed{H_{m0}=4\sqrt{m_0}}
$$

在狭窄谱、近似高斯波面条件下，这与逐波定义的**有效波高 $H_{1/3}$** 很接近；严格的瑞利理论会给出 $H_{1/3}\approx4.005\sqrt{m_0}$，两者**近似相等而非定义上恒等**。

### 4. 频谱、频率—方向谱与波数—方向谱

固定位置的频率谱 $S_\eta(\omega)$ 只能回答“**哪些频率蕴含多少方差/能量？**”，无法回答“波从哪个方向来？”

引入传播方向 $\theta$，得到二维**频率—方向谱**：

$$
S_\eta(\omega,\theta),\qquad
m_0=\int_0^{\infty}\int_0^{2\pi}S_\eta(\omega,\theta)\,d\theta\,d\omega
$$

常写成可分离近似：

$$
S_\eta(\omega,\theta)=S_\eta(\omega)D(\omega,\theta),\qquad
\int_0^{2\pi}D(\omega,\theta)\,d\theta=1
$$

还可以表示为空间**二维波数谱** $S(k_x,k_y)$，其中 $k_x=k\cos\theta$、$k_y=k\sin\theta$。课件口语中提到“第三维”，要按**谱变量数量**理解：$S(k_x,k_y)$ 的自变量有两个；把谱值作为纵轴画出来是一个三维可视化图面。换变量时需考虑雅可比因子以保证积分后方差不变。

![一维频谱、二维方向谱和波数方向谱（课件第45–48页之一）](/images/physical-oceanography/lesson14/slide_045.jpg)

![谱表达式之间的换元关系（课件第48页）](/images/physical-oceanography/lesson14/slide_048.jpg)

---

## 五、常用风浪谱与方向谱

### 1. 发展脉络

- 19 世纪末开始积累海浪观测与经验关系；1925 年 Jeffreys 提出风致波浪增长的遮蔽机制。
- 20 世纪中叶，Sverdrup–Munk 将风浪观测与波浪预报结合；随机海浪和谱方法逐步成熟。
- 1952 年 Neumann 谱，1964 年 Pierson–Moskowitz（P–M）谱，1973 年 JONSWAP 谱是本节对比重点。
- 1988 年 WAM 第三代海浪数值模式建立，后来 SWAN、WAVEWATCH III 等广泛用于不同海区尺度。

![海浪谱研究发展过程（课件第33页）](/images/physical-oceanography/lesson14/slide_033.jpg)

### 2. 读谱图：风越大时发生什么？

对于同类、可比较的风浪发展状态，风速增加时一般可以看到：

1. **谱曲线下面积增大**，对应波面方差、波能量增大。
2. **谱峰频率 $\omega_p$ 往低频移动**，表明主导波浪周期增长、波长变长。
3. 风区距离（fetch）与风持续时间也影响成长程度；不能仅凭风速判断所有海况。

![风速、风区影响海浪谱形态的观测示意（课件第49页）](/images/physical-oceanography/lesson14/slide_049.jpg)

### 3. Neumann 谱（1952）

- 较早的半经验谱，基于观测及理论分析建立。
- **适用于充分成长的风浪**，输入主要依赖风速；谱中有明显集中的峰值频段。
- 随风速增加，谱面积通常增大、谱峰向低频移动。课件展示了其一般经验形式，课堂**不要求背系数**。

![Neumann 谱与不同风速对应的曲线（课件第50页）](/images/physical-oceanography/lesson14/slide_050.jpg)

### 4. Pierson–Moskowitz（P–M）谱（1964）

- 以北大西洋充分成长风浪观测为依据构建，适用于**fully developed sea（充分成长海况）**。
- 与 Neumann 谱大体相近，风速增大时能量增大、谱峰频率减小。
- 主要依赖风速，对于仍受**有限风区**约束、处在成长中的风浪，适用性有限。
- 经典角频率谱常写为：

$$
S_{PM}(\omega)=\alpha\frac{g^2}{\omega^5}\exp\!\left[-\beta\left(\frac{g}{U\omega}\right)^4\right]
$$

这里 $\alpha,\beta$ 是经验常数（不同风速高度约定与参数化版本写法会不同），$U$ 是对应公式采用的参考高度风速。**做题无需记数值系数，须说清适用的海况。**

![P–M 谱公式与观测（课件第52页）](/images/physical-oceanography/lesson14/slide_052.jpg)

### 5. JONSWAP 谱（1973）

JONSWAP（Joint North Sea Wave Project）源于北海联合波浪观测；与前两种谱相比，它能描述**有限风区中仍在成长的风浪**。经典形式可以看成在基底频谱上乘一个尖峰增强因子：

$$
S_J(\omega)=S_0(\omega)\,
\gamma^{\displaystyle\exp\left[-\frac{(\omega-\omega_p)^2}{2\sigma_J^2\omega_p^2}\right]}
$$

其中：

- $S_0(\omega)$：基底谱；$\omega_p$：谱峰角频率。
- $\gamma$：**谱峰增强因子（peak enhancement factor）**，描述谱峰比参考谱尖锐的程度；$\gamma=1$ 时无额外尖峰增强。
- $\sigma_J$：谱峰左右两侧的经验谱宽参数，**注意和波面标准差 $\sigma_\eta$ 区分**。

不同风区下 $\omega_p$、谱峰形状和总能量会发生变化。老师特别强调：**Neumann、P–M 主要对应充分成长风浪，JONSWAP 可描述有限风区成长阶段**。

![JONSWAP 谱的谱峰增强因子与风区依赖（课件第54页）](/images/physical-oceanography/lesson14/slide_054.jpg)

### 6. 我国的文氏海浪谱及方向分布函数

课件介绍了文圣常提出的风浪频谱，可用于**不同成长程度的风浪**，可理解为将充分发展与年轻风浪状态的谱成分组合描述；课堂要求了解其存在及适用对象，无需记复杂系数。

方向分布函数 $D(\omega,\theta)$ 用来衡量同一频率成分在不同传播方向上的分配，满足**方向积分归一化**。课件举例展示 Longuet-Higgins 的方向分布以及 Mitsuyasu、Hasselmann、Donelan、Banner 等经验方向函数；方向分布越窄，说明波浪传播方向越集中。

![文氏海浪谱（课件第55页）](/images/physical-oceanography/lesson14/slide_055.jpg)

![常见海浪方向谱分布函数（课件第56页）](/images/physical-oceanography/lesson14/slide_056.jpg)

### 7. 三种重点谱的对比

| 海浪谱 | 主要针对的海况 | 常用输入/控制条件 | 课堂应掌握的特征 |
| --- | --- | --- | --- |
| Neumann（1952） | 充分成长风浪 | 风速 | 早期半经验谱；风速越大，谱面积越大，峰频趋小 |
| P–M（1964） | 充分成长风浪 | 风速 | 以充分发展海浪观测为基础；与 Neumann 谱接近 |
| JONSWAP（1973） | **有限风区、成长中的风浪** | 风速、风区及谱形参数 | 引入**峰值增强因子 $\gamma$**，峰值更突出 |

---

## 六、海浪数值模式与能量源汇

### 1. 海浪谱传输方程

要预测未来海况，除了知道某个时刻的谱，还要知道海浪怎样受风、传播、破碎和与其他波相互作用而变化。课件给出谱传输的一般结构：

$$
\frac{\partial F}{\partial t}+\nabla_{x,y}\cdot(\mathbf c_gF)+\frac{\partial(c_\theta F)}{\partial\theta}+\cdots=S
$$

这里 $F$ 是某种谱密度变量（谱能量/作用量谱可依模式而异），左边描述其在时空及谱空间中的传播，右边 $S$ 表示源汇。完整数值模式常采用**波作用量平衡方程**，并计入波数或频率变化带来的谱空间输运。

### 2. 六类典型源汇项

课件采用的形式：

$$
\boxed{S=S_{in}+S_{ds}+S_{bt}+S_{br}+S_{nl4}+S_{nl3}}
$$

| 项 | 物理过程 | 直观解释 |
| --- | --- | --- |
| $S_{in}$ | 风能输入 | 风对海浪做功，增加波能 |
| $S_{ds}$ | 白冠耗散 | 波浪破碎产生白沫、湍流，使波能耗散 |
| $S_{bt}$ | 海底摩擦 | 近底运动受摩擦而损耗能量 |
| $S_{br}$ | 水深诱导破碎 | 近岸浅水区，波浪因水深限制而破碎 |
| $S_{nl4}$ | 四波非线性相互作用 | 不同波分量之间重新分配能量 |
| $S_{nl3}$ | 三波非线性相互作用 | 浅水等情况下，波分量之间发生三波耦合 |

注意：**非线性相互作用项可以改变谱内各频段的能量分配**；理想保守情形下，并不直接创造或消灭总波能。

![谱传输方程与传播项（课件第58页）](/images/physical-oceanography/lesson14/slide_058.jpg)

![六类源汇项示意（课件第59页）](/images/physical-oceanography/lesson14/slide_059.jpg)

### 3. 第一代、第二代、第三代风浪模式

划分的关键与**四波非线性相互作用 $S_{nl4}$ 的处理方式**有关：

- **第一代**：没有显式、充分表示四波非线性相互作用。
- **第二代**：考虑非线性作用，但通常预先约束谱的形状，谱演变自由度有限。
- **第三代**：显式考虑相互作用，**无需事先指定固定谱形**，通过谱平衡方程求解频率—方向谱的演变。

代表模式：**WAM**、**SWAN**（多用于近岸与区域）、**WAVEWATCH III**（多用于大尺度海浪预报）。不同模式均不断更新，课上主要介绍其性质，复杂参数化公式不要求记忆。

![海浪模式三代划分与代表模式（课件第60–61页之一）](/images/physical-oceanography/lesson14/slide_061.jpg)

课堂还展示了非线性波间相互作用的**共振条件**：

$$
\begin{aligned}
\text{三波作用：}\quad &\mathbf k_1+\mathbf k_2=\mathbf k_3,\quad \omega_1+\omega_2=\omega_3\\
\text{四波作用：}\quad &\mathbf k_1+\mathbf k_2=\mathbf k_3+\mathbf k_4,\quad \omega_1+\omega_2=\omega_3+\omega_4
\end{aligned}
$$

在**无流、深水、纯重力波**的通常色散关系下，非平凡的三波共振受到限制，四波共振是重要的非线性能量交换途径；浅水等情形中三波相互作用更明显。课件还列举 Snyder、Plant、Komen 等风输入参数化，以及 Hasselmann、Donelan–Yuan、Komen 等耗散模型，课堂没有要求推导这些源汇项参数公式。

![三波相互作用的共振条件（课件第63页）](/images/physical-oceanography/lesson14/slide_063.jpg)

![四波相互作用中的能量转换（课件第64页）](/images/physical-oceanography/lesson14/slide_064.jpg)

---

## 七、海浪波高与周期的统计分布

### 1. 如何从实测随机波面定义“一道波”？

对于实测曲线 $\eta(t)$，常以**向上跨过平均水位（上跨零点）**的时刻为分界：

1. 先找到连续的两次上跨零点；它们之间视为一个完整波。
2. 此区间的最高波面与最低波面之差定义为单波波高 $H_i$。
3. 两次上跨零点的时间差定义为单波周期 $T_i$。
4. 对所有测得的 $H_i$ 统计分布，或按高到低排序，计算部分大波的平均波高。

![上跨零点法定义波高与波周期（课件第66页）](/images/physical-oceanography/lesson14/slide_066.jpg)

### 2. 窄谱近似与瑞利分布（Rayleigh distribution）

**窄谱**指海浪能量主要集中在某一中心频率附近，包络相对缓慢变化。若海面位移可近似为零均值高斯过程，且谱足够窄，则其慢变化**振幅包络 $A$** 近似满足瑞利分布：

$$
p_A(a)=\frac{a}{m_0}\exp\!\left(-\frac{a^2}{2m_0}\right),\qquad a\ge0
$$

这个结论可以直观地从两个独立的高斯正交分量得到：设 $X,Y$ 独立且均服从 $N(0,m_0)$，振幅包络 $A=\sqrt{X^2+Y^2}$，则联合密度为

$$
p_{X,Y}(x,y)=\frac{1}{2\pi m_0}\exp\left[-\frac{x^2+y^2}{2m_0}\right]
$$

在极坐标 $x=a\cos\theta,y=a\sin\theta$ 下，面积元由 $dx\,dy$ 变成 $a\,da\,d\theta$。对 $\theta$ 从 $0$ 到 $2\pi$ 积分，就得到上述 $p_A(a)$。其中 $m_0=\sigma_\eta^2$ 是波面方差。

对于窄谱波，单个波高近似 $H\approx 2A$，用变量代换：

$$
\begin{aligned}
p_H(H)&=p_A(H/2)\left|\frac{d(H/2)}{dH}\right|\\
&=\boxed{\frac{H}{4m_0}\exp\!\left(-\frac{H^2}{8m_0}\right)},\qquad H\ge0
\end{aligned}
$$

这里的**波面位移近似正态，波幅/波高近似瑞利**，两者可以同时成立；不能混为一种分布。

![窄谱波面与慢变包络（课件第67页）](/images/physical-oceanography/lesson14/slide_067.jpg)

![从高斯正交分量导出振幅瑞利分布（课件第68–70页之一）](/images/physical-oceanography/lesson14/slide_070.jpg)

![波高瑞利密度与平均波高（课件第72页）](/images/physical-oceanography/lesson14/slide_072.jpg)

### 3. 平均波高与均方根波高

**平均波高**（对波高概率密度积分）：

$$
\begin{aligned}
\overline H&=E[H]=\int_0^\infty Hp_H(H)\,dH\\
&=\boxed{\sqrt{2\pi m_0}}\approx2.507\sqrt{m_0}
\end{aligned}
$$

**均方根波高**（注意不是波面位移的标准差）：

$$
H_{rms}=\sqrt{E[H^2]}=\boxed{\sqrt{8m_0}}\approx2.828\sqrt{m_0}
$$

因此：

$$
\boxed{H_{rms}=\frac{2}{\sqrt\pi}\,\overline H\approx1.128\,\overline H}
$$

### 4. 超越概率与不同等级的大波

从瑞利密度积分得到单波波高**超过阈值 $h$ 的概率**：

$$
P(H>h)=\int_h^\infty p_H(H)\,dH=\boxed{\exp\left(-\frac{h^2}{8m_0}\right)}
$$

例如，要找只有 $p$ 比例的波会超过的**阈值** $h_p$，令 $P(H>h_p)=p$：

$$
\boxed{h_p=\sqrt{-8m_0\ln p}}
$$

实际使用的 $H_{1/3}$、$H_{1/10}$、$H_{1/100}$ 是**最大 $1/3$、$1/10$、$1/100$ 部分波的平均波高**，要把高于阈值的波再求条件平均：

$$
H_p=E[H\mid H>h_p]=\frac1p\int_{h_p}^\infty Hp_H(H)\,dH
$$

积分结果（令 $q=\sqrt{-\ln p}$）：

$$
\boxed{H_p=\sqrt{8m_0}\left[q+\frac{\sqrt\pi}{2p}\operatorname{erfc}(q)\right]}
$$

其中 $\operatorname{erfc}(q)=\frac2{\sqrt\pi}\int_q^\infty e^{-s^2}\,ds$ 是余误差函数。

| 统计波高 | 定义 | 瑞利窄谱条件下的近似值 |
| --- | --- | --- |
| $\overline H$ | 全部单波波高的平均 | $2.507\sqrt{m_0}$ |
| $H_{rms}$ | 所有单波波高平方平均再开根 | $2.828\sqrt{m_0}$ |
| $H_{1/3}$ | **最高三分之一波**的平均 | $4.005\sqrt{m_0}\approx H_{m0}$ |
| $H_{1/10}$ | **最高十分之一波**的平均 | $5.091\sqrt{m_0}$ |
| $H_{1/100}$ | **最高百分之一波**的平均 | $6.672\sqrt{m_0}$ |

如果用课上常见的 $H_s=4\sqrt{m_0}$ 近似，得到 $H_{1/10}\approx1.273H_s$，$H_{1/100}\approx1.668H_s$。

![从瑞利分布推导有效波高、十分之一与百分之一大波（课件第75页）](/images/physical-oceanography/lesson14/slide_075.jpg)

> **特别注意**：$h_{0.01}$ 是“只有 $1\%$ 的波比它高”的**门槛值**；$H_{1/100}$ 是“最高 $1\%$ 波”的**平均值**。两者不一样，后者更大。

### 5. 实测资料如何统计？

课件给出的具体步骤：先对实测波面进行平稳性、异常值和趋势检验，处理数据；用上跨零点法识别独立波，得到 $\{H_i,T_i\}$；然后将 $N$ 个波高按从大到小排序，再分别求前 $N/3$、$N/10$、$N/100$ 个波高的平均。样本量很小时，**最大 1% 大波的估计尤其不稳定**。

![实测海浪统计的具体处理步骤（课件第76页）](/images/physical-oceanography/lesson14/slide_076.jpg)

### 6. 瑞利分布的适用前提与局限

瑞利理论依赖**窄谱、高斯波面、弱非线性及近似平稳**等条件。宽谱、多向波系、强非线性、破碎或极端海况下，波高尾部分布可能偏离瑞利预报，课件举出 Forristall 和 Weibull 分布等替代描述。因此需要用**实测验证**，极端风险分析尤其不能无条件套用瑞利尾部。

![瑞利分布与观测偏差、Forristall 经验分布（课件第77页）](/images/physical-oceanography/lesson14/slide_077.jpg)

### 7. 海浪周期的统计

除波高外，还需要知道周期。对海浪谱求不同阶谱矩，可以构造**谱周期**：

$$
T_{m01}=2\pi\frac{m_0}{m_1},\qquad
T_{m02}=2\pi\sqrt{\frac{m_0}{m_2}}
$$

并区分单个上跨零点测得的随机周期 $T_i$、平均周期以及谱峰周期 $T_p=2\pi/\omega_p$。这些不同定义的周期**通常不相等**。课件最后展示海浪周期的经验概率密度与窄谱理论结果，课堂要求了解其存在和谱矩表达，不要求背复杂概率密度公式。

![谱周期的定义（课件第80页）](/images/physical-oceanography/lesson14/slide_080.jpg)

![海浪周期的经验和理论概率分布（课件第81页）](/images/physical-oceanography/lesson14/slide_081.jpg)

---

## 八、核心公式与易错辨析

| 内容 | 必须分清的定义 / 表达式 |
| --- | --- |
| 波陡 | $\delta=H/L$；$H$ 是**全波高**，$a$ 是**振幅**，线性波 $H=2a$ |
| 相速度 | $c=\omega/k=L/T$；追踪单个固定相位 |
| 群速度 | $c_g=d\omega/dk$；线性深水 $c_g=c/2$，浅水 $c_g=c$ |
| 线性波色散 | $\omega^2=gk\tanh(kh)$；振幅不进入线性频散式 |
| Stokes 漂移 | 深水 $u_S(z)=a^2k\omega e^{2kz}$，单位宽度输运 $Q_S=\pi a^2/T$ |
| 海浪谱 | 单边谱 $m_0=\int_0^\infty S_\eta(\omega)d\omega$，是**波面方差** |
| 波能量 | 单位面积平均能量 $\mathcal E=\rho g m_0$，区别于方差谱的数值 |
| 谱峰 | $\omega_p$ 为谱达到最大值的角频率，$T_p=2\pi/\omega_p$ |
| 瑞利波高 | $p_H(H)=H/(4m_0)\exp[-H^2/(8m_0)]$ |
| 有效波高 | $H_{1/3}$ 是最大 1/3 波高的平均；常用 $H_{m0}=4\sqrt{m_0}$ 近似 |

**几处课堂表达需要特别校正：**

1. 语音转写“频率很小或很大的波高不大”应按**谱上低频/高频贡献的波能较小**理解；横轴是频率，纵轴是频谱密度，不代表“波高出现概率”。
2. $m_0$ 是波面位移**方差**，$\sqrt{m_0}$ 才是标准差。录音里把方差、标准差交替说出，做题要以公式为准。
3. 课件一处以傅里叶变换定义**双边谱**，另一处以 $0\sim\infty$ 积分定义**单边谱**。笔记已分别记号，防止缺少因子 2。
4. **分量正弦波**本身的一阶质点运动闭合；Stokes 漂移是保留二阶效应后出现的平均漂移。
5. **波谱下的面积**对应波面方差；如要获得单位面积平均波能还需乘 $\rho g$。
6. $H_{m0}=4\sqrt{m_0}$ 与窄谱瑞利下 $H_{1/3}=4.005\sqrt{m_0}$ 的差异属于近似/定义差异；通常可以非常接近。

---

## 九、第三次作业：原题与解答

> 依据课件“第六、七章作业（第 3 次）”（第 82 页）以及本堂课录音的进一步强调整理。原题截图见下方；教材未作为单独文件提供，所以无法确认其所在教材的具体题号。

![第六、七章第三次作业六题（课件第82页）](/images/physical-oceanography/lesson14/slide_082.jpg)

### 第 1 题：简述线性波动理论的假定、研究思路和主要结果

**假定**：海水均匀、不可压缩、无黏、无旋；研究重力恢复作用下的规则波，海底固定，忽略旋转效应及表面张力等；波幅相对波长/水深特征尺度足够小，可以保留一阶项。

**研究思路**：无旋流动引入速度势 $\mathbf u=\nabla\phi$，由不可压缩连续性方程 $\nabla\cdot\mathbf u=0$，得到**速度势的控制方程**：

$$
\boxed{\nabla^2\phi=0},\qquad -h<z<0
$$

三个**线性化边界条件**为：

$$
\begin{aligned}
&\text{海面运动学：}&\frac{\partial\eta}{\partial t}&=\left.\frac{\partial\phi}{\partial z}\right|_{z=0}\\
&\text{海面动力学：}&\frac{\partial\phi}{\partial t}+g\eta&=0\quad(z=0)\\
&\text{水平固定海底：}&\frac{\partial\phi}{\partial z}&=0\quad(z=-h)
\end{aligned}
$$

对于向 $x$ 正方向传播的波，设：

$$
\eta=a\cos(kx-\omega t)
$$

将 $z=\eta$ 处的非线性自由表面条件用泰勒展开移到 $z=0$，**舍弃二阶及以上的小量**，联立上述边值问题求得：

$$
\boxed{\phi=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin(kx-\omega t)}
$$

主要结果包括**波面、速度场、压力场、质点轨迹、色散关系和相/群速度**。课上特别强调：波动这一边值问题的**主控制方程是拉普拉斯方程**，动量方程经伯努利积分后体现在**自由表面动力学边界条件**中。

![速度势方程与边界条件（课件第89页）](/images/physical-oceanography/lesson14/slide_089.jpg)

### 第 2 题：由有限水深波频散关系导出深水和浅水波的频散关系、群速度和波速

**已知有限水深频散关系**：

$$
\boxed{\omega^2=gk\tanh(kh)}
$$

**（1）深水 $kh\gg1$**：$\tanh(kh)\to1$，所以：

$$
\omega^2=gk,\qquad
c=\frac{\omega}{k}=\sqrt{\frac gk}=\frac{gT}{2\pi}
$$

$$
c_g=\frac{d\omega}{dk}=\frac12\sqrt{\frac gk}=\frac c2
$$

**（2）浅水 $kh\ll1$**：$\tanh(kh)\approx kh$，所以：

$$
\omega^2\approx ghk^2,\qquad
c=\frac\omega k=\sqrt{gh}
$$

$$
c_g=\frac{d\omega}{dk}=\sqrt{gh}=c
$$

这里 $h$ 被视为常量。**物理解释**：深水存在显著频散（不同波长的波传播速度不同）；在浅水极限，波速主要由水深决定，重力浅水波近似无频散。

### 第 3 题：由有限水深波速度势表达式推导水质点轨迹，并讨论深水与浅水质点轨迹特点

已知：

$$
\phi=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin\theta,\qquad\theta=kx-\omega t
$$

对 $x$、$z$ 求导，并使用 $gk/\omega=\omega/\tanh(kh)$：

$$
\begin{aligned}
u&=\frac{\partial\phi}{\partial x}=a\omega\frac{\cosh[k(z+h)]}{\sinh(kh)}\cos\theta\\
w&=\frac{\partial\phi}{\partial z}=a\omega\frac{\sinh[k(z+h)]}{\sinh(kh)}\sin\theta
\end{aligned}
$$

令 $(\bar x,\bar z)$ 为一阶近似的质点平衡位置。对小位移 $x'=x-\bar x$、$z'=z-\bar z$ 使用 $dx'/dt\approx u(\bar x,\bar z,t)$、$dz'/dt\approx w(\bar x,\bar z,t)$，并对时间积分：

$$
\begin{aligned}
x'&=-A\sin(k\bar x-\omega t),& A&=a\frac{\cosh[k(\bar z+h)]}{\sinh(kh)}\\
z'&=B\cos(k\bar x-\omega t),& B&=a\frac{\sinh[k(\bar z+h)]}{\sinh(kh)}
\end{aligned}
$$

消去相位，得到椭圆轨迹：

$$
\boxed{\frac{(x-\bar x)^2}{A^2}+\frac{(z-\bar z)^2}{B^2}=1}
$$

**深水**：$kh\gg1$，$A\approx B\approx ae^{k\bar z}$，轨迹为**圆**，半径从表面向下指数衰减。

**浅水**：$kh\ll1$，$A\approx a/(kh)$，$B\approx a(1+\bar z/h)$，轨迹为**扁椭圆**；水平半轴近似不随深度变化，竖直半轴向海底逐渐缩小，在固定海底处为 0。

这些是**一阶、闭合轨迹**；加入 Stokes 二阶效应后会出现净漂移。

![深水、浅水和有限水深波质点轨迹对比（课件第93页）](/images/physical-oceanography/lesson14/slide_093.jpg)

### 第 4 题：什么是驻波？利用其波面位移和质点轨迹表达式解释特点

驻波由**振幅、频率、波长相同，传播方向相反**的两列波叠加而成。令右行波和左行波为：

$$
\eta_1=a\cos(kx-\omega t),\qquad
\eta_2=a\cos(kx+\omega t)
$$

相加得：

$$
\boxed{\eta=2a\cos(kx)\cos(\omega t)}
$$

- **波节**：$\cos(kx)=0$，故 $x=(2n+1)\pi/(2k)$，波面振幅始终为零，节点**位置固定**。
- **波腹**：$|\cos(kx)|=1$，局地振幅达到 $2a$。
- 整个波面随 $\cos\omega t$ 同步起伏，图形不会像行进波那样整体向右移动。

速度势可写成：

$$
\phi=-\frac{2ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\cos(kx)\sin(\omega t)
$$

从而 $u\propto\sin(kx)\sin\omega t$，$w\propto\cos(kx)\sin\omega t$；在给定平衡位置处，两者的时间因子相同，所以**质点在一阶近似下沿固定直线往返运动**。在自由表面波节附近，以水平运动为主；波腹附近，以竖直运动为主。理想驻波的**周期平均净能流为零**。

![驻波的两列反向行波与固定波节（课件第95页）](/images/physical-oceanography/lesson14/slide_095.jpg)

### 第 5 题：简述海浪谱定义及物理意义，指出 Neumann 谱、P–M 谱和 JONSWAP 谱主要特点

海浪谱描述**波面方差（或按 $\rho g$ 换算的波能量）如何分配在不同频率、波数、方向上**。对单边频率谱：

$$
m_0=\int_0^{\infty}S_\eta(\omega)\,d\omega,\qquad \mathcal E=\rho gm_0
$$

它的横坐标为角频率 $\omega$，纵坐标为方差谱密度 $S_\eta(\omega)$；每一小段谱面积代表该频段贡献的方差/能量。随着风速增大、风浪成长，谱面积通常增大、谱峰移向低频。

Neumann 谱和 P–M 谱主要用于**充分成长风浪**，常以风速作为主要输入；P–M 谱依赖较系统的充分成长风浪观测。JONSWAP 谱可描述**有限风区、仍在成长的风浪**，并引入**谱峰增强因子 $\gamma$** 来描述尖峰程度。

### 第 6 题：假设波高满足瑞利分布，导出平均波高、均方根波高、有效波高及其关系；补充 $1/10$ 和 $1/100$ 大波

**（1）写出波高密度函数**。由窄谱振幅的瑞利分布，令 $H=2A$：

$$
p_H(H)=\frac{H}{4m_0}\exp\left(-\frac{H^2}{8m_0}\right),\quad H\ge0
$$

**（2）平均波高**：

$$
\overline H=\int_0^\infty Hp_H(H)\,dH=\boxed{\sqrt{2\pi m_0}}
$$

**（3）均方根波高**：

$$
H_{rms}^2=\int_0^\infty H^2p_H(H)\,dH=8m_0
$$

故 $H_{rms}=\sqrt{8m_0}=\frac{2}{\sqrt\pi}\overline H$。

**（4）有效波高 $H_{1/3}$**：先求超越概率：

$$
P(H>h)=\exp\left(-\frac{h^2}{8m_0}\right)
$$

令超越概率 $=1/3$，对应阈值 $h_{1/3}=\sqrt{8m_0\ln3}$；再对超过该阈值的高波取条件平均：

$$
H_{1/3}=\frac{\int_{h_{1/3}}^\infty Hp_H(H)\,dH}{1/3}
=\boxed{4.005\sqrt{m_0}\approx4\sqrt{m_0}}
$$

**（5）同理**，取上部比例 $p=1/10$ 和 $p=1/100$：

$$
\boxed{H_{1/10}\approx5.091\sqrt{m_0},\qquad H_{1/100}\approx6.672\sqrt{m_0}}
$$

故各统计量关系为：

$$
\boxed{\overline H:H_{rms}:H_{1/3}:H_{1/10}:H_{1/100}\approx2.507:2.828:4.005:5.091:6.672}
$$

这些系数只在题设的**窄谱瑞利分布近似**下成立；真实海浪若偏离这一假设，需要重新估计统计量。

---

## 本讲自检

学完后，应能独立回答：**为什么小振幅线性波无法解释 Stokes 漂移？谱峰向低频移动代表什么？为什么 $\int S_\eta\,d\omega=m_0$？波面高斯与波高瑞利如何同时成立？有效波高和谱显著波高为什么只有近似关系？**

对期中考试，优先把**第三次作业六题**各自的基本方程、推导顺序和物理解释复述一遍；Stokes 高阶系数、各经验谱的复杂参数则按老师要求以理解为主。
