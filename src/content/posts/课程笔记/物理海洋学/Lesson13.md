---
title: Oceanography-Lesson12：波浪动力学：线性波动理论与波群
published: 2026-10-26
description: "物理海洋学第13讲：有效波高、海浪控制方程与边界条件、线性波解、浅深水波、质点轨迹、波动能量、驻波、频散及群速度。"
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 课程提醒

- **学习要求**：老师在录音约 **01:38:52—01:39:00** 明确说明，**线性波的推导过程需要了解**；有限振幅波（如高阶 Stokes 波）的推导暂不要求，仅作了解，后续课堂继续讲。
- **作业、测试、考试、慕课**：本次提供的课堂转写中**未发现正式布置的书面作业、测试安排、考试说明或慕课要求**。课堂上“有兴趣可以推导一下”的分离变量计算，属于建议性练习，末尾附有自行复习用的推导练习，未标为正式作业。
- **资料范围**：本笔记按照 2026-10-26 录音及当堂截图型 PPT 整理；录音中的“速度式 / 速度势”“现性 / 线性”“主播 / 驻波”“频散 / 贫散”等识别误差已根据课件校正。

## 概述

本讲把前面学到的**连续性方程、运动方程及边界条件**用于海浪，依次建立理想重力表面波模型、求得线性波解析解，并用它理解海水质点运动、能量传递和波群传播。

> **本讲主线**：实际海浪统计特征 → 理想流体的控制方程和三个边界条件 → 小振幅线性化 → 分离变量求解 → 波面、速度场、压力场、质点轨迹 → 浅水／深水极限 → 能量、驻波、相速度与群速度 → 线性理论的局限。

**最重要的三个结果**（水深恒定、二维、不可压缩、无旋、无黏性、小振幅重力波）：

$$
\boxed{\omega^2=gk\tanh(kh)}
$$

$$
\boxed{\phi(x,z,t)=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin(kx-\omega t)}
$$

$$
\boxed{E_k=E_p=\frac14\rho ga^2,\qquad E=\frac12\rho ga^2}
$$

其中 $a$ 是**振幅**、$H=2a$ 是规则线性波的**波高**、$h$ 是**平均水深**、$k=2\pi/L$ 是波数、$\omega=2\pi/T$ 是角频率。后面所有推导都围绕这些量展开。

---

## 目录

- [一、实际海浪与有效波高](#一实际海浪与有效波高)
- [二、控制方程：为什么引入速度势](#二控制方程为什么引入速度势)
- [三、海面与海底的三个边界条件](#三海面与海底的三个边界条件)
- [四、小振幅近似及线性方程组](#四小振幅近似及线性方程组)
- [五、有限水深线性波解的完整推导](#五有限水深线性波解的完整推导)
- [六、波面、速度场与压力场](#六波面速度场与压力场)
- [七、水质点运动轨迹](#七水质点运动轨迹)
- [八、浅水波、深水波与中等水深波](#八浅水波深水波与中等水深波)
- [九、线性波的动能、势能和总能量](#九线性波的动能势能和总能量)
- [十、驻波](#十驻波)
- [十一、相速度、波群、群速度与频散](#十一相速度波群群速度与频散)
- [十二、线性理论的局限与有限振幅波](#十二线性理论的局限与有限振幅波)
- [十三、课堂复习与推导练习](#十三课堂复习与推导练习)

---

## 一、实际海浪与有效波高

### 1.1 理论研究与统计研究

老师先回顾研究海浪的两条路线：

1. **理论方法**：从流体力学方程出发，研究理想规则波，例如**正弦线性波**和 **Stokes 有限振幅波**，理解传播和流体运动的规律。
2. **统计方法**：真实海面同时存在不同振幅、周期、方向和相位的波动，观测曲线十分复杂；通过波面记录、波谱分析描述统计特征。

两者之间常用**有效波高（significant wave height）**联系。课堂这里给出的定义属于**时域零跨分析的 $H_{1/3}$**；后续若学到谱有效波高 $H_{m0}=4\sqrt{m_0}$，它是另一种计算途径，随机波浪的特定条件下两者近似，但不应不加条件地完全等同。

![实测海面高度随时间的不规则变化](/images/physical-oceanography/lesson13/wave_record.jpg)

*课堂截图：固定测点的横轴为时间（s），纵轴为水面相对高度（m）；真实海浪不呈单一正弦曲线。*

### 1.2 零上跨法：如何从杂乱波面识别一个波

假设水位仪在固定位置记录 $\eta(t)$，取静水面为 $\eta=0$：

1. 找到水位**由负变正**穿过零线的时刻（**零上跨**，up-crossing）。也可以统一选择零下跨，整段记录应采用同一规则。
2. 相邻两次零上跨之间定义为一个完整的**单波**；两次零跨时间差为该波的**周期 $T_i$**。
3. 该单波区间内最高水位减最低水位得到**波高 $H_i$**，注意波高指波峰到波谷的垂直差。
4. 将全部 $H_i$ 由大到小排序，取**最高三分之一波的平均波高**：

$$
H_{1/3}=\frac{1}{N_{1/3}}\sum_{i\in\mathrm{top}\,1/3}H_i
$$

对应这些高波的周期的平均值叫**有效周期 $T_{1/3}$**（本课采用此定义）。

![有效波高与零上跨波高、周期的示意](/images/physical-oceanography/lesson13/zero_crossing.jpg)

:::TIP
**容易混淆的三个高度**：$a$ 表示规则波振幅（静水面到波峰）；$H$ 表示规则波波高（波峰到波谷，线性正弦波 $H=2a$）；$H_{1/3}$ 是从不规则波记录中统计得到的波高，不应简单写成 $2a$。
:::

---

## 二、控制方程：为什么引入速度势

### 2.1 从海水运动方程化简

课件先列出完整动量方程的典型矢量形式（含压强梯度、科氏力、重力、黏性及引潮力）：

$$
\frac{D\mathbf V}{Dt}=-\frac1\rho\nabla p-2\boldsymbol\Omega\times\mathbf V+\mathbf g+\text{黏性项}-\nabla\Phi_t
$$

研究局地、相对短时间尺度的**重力表面波**时，老师采用如下理想化：

- 忽略**科氏力**：波动时空尺度足够小，地球自转效应可以略去。
- 忽略**引潮力**：本节不研究天文潮汐强迫。
- 忽略**黏性力**：重点研究远离边界层的理想流体波动。
- **保留压强梯度力和重力**：重力为本节表面波的恢复力。

因此：

$$
\boxed{\frac{D\mathbf V}{Dt}=-\frac1\rho\nabla p+\mathbf g}
$$

以 $z$ 向上、$\mathbf g=(0,0,-g)$，写成分量：

$$
\frac{Du}{Dt}=-\frac1\rho\frac{\partial p}{\partial x},\qquad
\frac{Dv}{Dt}=-\frac1\rho\frac{\partial p}{\partial y},\qquad
\frac{Dw}{Dt}=-\frac1\rho\frac{\partial p}{\partial z}-g
$$

这里 $D/Dt=\partial/\partial t+\mathbf V\cdot\nabla$ 为**物质导数**。水平两式没有 $-g$，因为重力本来就沿竖直方向作用。

### 2.2 无旋假设 → 速度势函数

再假设研究区域内流动**无旋**：

$$
\nabla\times\mathbf V=0
$$

在单连通区域中，可引入**速度势** $\phi(x,y,z,t)$，使

$$
\boxed{\mathbf V=\nabla\phi},\qquad
u=\frac{\partial\phi}{\partial x},\quad
v=\frac{\partial\phi}{\partial y},\quad
w=\frac{\partial\phi}{\partial z}
$$

> 这里 $\phi$ 是一个**标量函数**，$\nabla\phi$ 是梯度（矢量）；千万不要把速度写成 $\nabla\cdot\phi$，后者在这里没有定义。引入 $\phi$ 的主要目的，是把三个速度未知量统一为一个标量未知函数，便于解偏微分方程。

老师口头强调“为了解方程方便”，严格说速度势还具有明确的数学与物理联系：空间梯度就是速度，因此其量纲为 $\mathrm{m^2\,s^{-1}}$；速度势本身可以相差一个仅与时间有关的函数而不改变速度。

### 2.3 连续性方程 → Laplace 方程

不可压缩且密度取常数时，有体积连续性方程：

$$
\nabla\cdot\mathbf V=\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}=0
$$

将 $\mathbf V=\nabla\phi$ 代入：

$$
\nabla\cdot(\nabla\phi)=\nabla^2\phi=0
$$

即

$$
\boxed{\frac{\partial^2\phi}{\partial x^2}+\frac{\partial^2\phi}{\partial y^2}+\frac{\partial^2\phi}{\partial z^2}=0}
$$

这就是本讲在水体内部求解的**控制方程（governing equation）**，也叫 **Laplace 方程**。它对 $\phi$ 是线性的，虽含二阶导数，仍属于**线性偏微分方程**。

### 2.4 动量方程 → 伯努利积分式

物质导数展开为

$$
\frac{D\mathbf V}{Dt}=\frac{\partial\mathbf V}{\partial t}+(\mathbf V\cdot\nabla)\mathbf V
$$

应用矢量恒等式：

$$
(\mathbf V\cdot\nabla)\mathbf V=\nabla\left(\frac{\mathbf V\cdot\mathbf V}{2}\right)-\mathbf V\times(\nabla\times\mathbf V)
$$

因无旋条件 $\nabla\times\mathbf V=0$，第二项消失，于是

$$
(\mathbf V\cdot\nabla)\mathbf V=\nabla\left(\frac{\lvert\mathbf V\rvert^2}{2}\right)
$$

又因为 $\mathbf V=\nabla\phi$、$\mathbf g=-\nabla(gz)$，且此处 $\rho$ 为常数，所以动量方程逐项写为

$$
\nabla\left(\frac{\partial\phi}{\partial t}\right)+\nabla\left(\frac{\lvert\nabla\phi\rvert^2}{2}\right)=-\nabla\left(\frac p\rho\right)-\nabla(gz)
$$

移项，合并为一个梯度：

$$
\nabla\left[\frac{\partial\phi}{\partial t}+\frac12\lvert\nabla\phi\rvert^2+\frac p\rho+gz\right]=0
$$

空间梯度为零，意味着方括号中**与空间位置无关**，但仍可随时间变化：

$$
\frac{\partial\phi}{\partial t}+\frac12\lvert\nabla\phi\rvert^2+\frac p\rho+gz=C(t)
$$

利用速度势的自由度，重新定义 $\phi^*=\phi-\int C(t)\,dt$，使 $\partial_t\phi^*=\partial_t\phi-C(t)$，即可把右侧改为零。为简便后面仍记作 $\phi$：

$$
\boxed{\frac{\partial\phi}{\partial t}+\frac12\left(\phi_x^2+\phi_y^2+\phi_z^2\right)+\frac p\rho+gz=0}
$$

这就是**非定常伯努利方程**。本讲主要用它构造**海面的动力学边界条件**。

![由无旋条件得到速度势、Laplace 方程和伯努利积分式](/images/physical-oceanography/lesson13/bernoulli.jpg)

:::NOTE
**为什么“空间积分”会多出 $C(t)$？** 因为 $\nabla F=0$ 仅保证 $\partial_xF=\partial_yF=\partial_zF=0$，不能推出 $\partial_tF=0$。老师在课堂上特别提到这一项可以吸收入速度势。
:::

---

## 三、海面与海底的三个边界条件

设静水面为 $z=0$，实时海面为 $z=\zeta(x,y,t)$，海底为 $z=-h(x,y)$。要区分：

- $\phi(x,y,z,t)$：**速度势**，由它对空间求导得到 $u,v,w$；
- $\zeta(x,y,t)$：**自由表面相对静水面的位移**，表示波面起伏；
- $h(x,y)$：**正值水深**，实际海底高度为负的 $-h$。

![控制方程及波面—海底几何示意](/images/physical-oceanography/lesson13/boundary_overview.jpg)

### 3.1 海面运动学边界条件（kinematic boundary condition）

**物理意义**：自由海面由海水质点组成，质点在海面运动时不能突然离开海面。海面满足 $z=\zeta(x,y,t)$，沿海面上某质点的路径求物质导数：

$$
\frac{Dz}{Dt}=\frac{D\zeta}{Dt}
$$

左边就是垂直速度 $w$；右边依链式法则展开：

$$
w=\frac{\partial\zeta}{\partial t}+u\frac{\partial\zeta}{\partial x}+v\frac{\partial\zeta}{\partial y}
$$

再代入 $w=\phi_z$、$u=\phi_x$、$v=\phi_y$：

$$
\boxed{\phi_z=\zeta_t+\phi_x\zeta_x+\phi_y\zeta_y,\qquad z=\zeta(x,y,t)}
$$

直观理解：某固定位置的海面随时间升降（$\zeta_t$），而海水沿着倾斜海面水平流动（后两项）也会改变质点所处海面高度。**这里的 $z=\zeta$ 要在整个等式最后代入，用于指出边界位置。**

### 3.2 海面动力学边界条件（dynamic boundary condition）

假设忽略表面张力，海面压强始终等于常数大气压 $p_0$。将 $z=\zeta$、$p=p_0$ 代入伯努利式：

$$
\boxed{g\zeta+\phi_t+\frac12\lvert\nabla\phi\rvert^2+\frac{p_0}{\rho}=0,\qquad z=\zeta}
$$

这里可把常数 $p_0/\rho$ 进一步吸收进仅随时间变化的速度势，或直接改用相对大气压的**表压** $p-p_0$，得到常见形式：

$$
\boxed{g\zeta+\phi_t+\frac12\lvert\nabla\phi\rvert^2=0,\qquad z=\zeta}
$$

**物理意义**：自由海面压强由外界大气指定；重力位势、局地非定常速度势与动能项必须共同满足该约束。

### 3.3 固定海底运动学边界条件

海底固定、海水不能穿越海底。令海底曲面 $F(x,y,z)=z+h(x,y)=0$，不穿透条件为 $DF/Dt=0$，于是

$$
\frac{DF}{Dt}=w+u h_x+v h_y=0
$$

因此

$$
\boxed{\phi_z+\phi_x h_x+\phi_y h_y=0,\qquad z=-h(x,y)}
$$

其中 $h_x,h_y$ 表示海底坡度。对于**水平海底** $h=\mathrm{const}$，$h_x=h_y=0$，便简化为 $\phi_z=0$，即**海底没有垂向流速**。

:::WARNING
不能混淆“无穿透”与“速度全为零”：固定海底的法向速度为零；沿底的切向速度仍可以存在。本节采用无黏性的理想流体条件，并未施加黏性流体的无滑移边界条件。
:::

### 3.4 原始边值问题一览

需要同时求两个未知函数 $\phi,\zeta$，并满足：

$$
\begin{cases}
\nabla^2\phi=0, & -h(x,y)<z<\zeta(x,y,t),\\[4pt]
\phi_z=\zeta_t+\phi_x\zeta_x+\phi_y\zeta_y, & z=\zeta,\\[4pt]
\phi_t+\tfrac12\lvert\nabla\phi\rvert^2+g\zeta=0, & z=\zeta,\\[4pt]
\phi_z+\phi_xh_x+\phi_yh_y=0, & z=-h.
\end{cases}
$$

第一行是**控制方程**，后面分别为**海面运动学、海面动力学、海底运动学**三个边界条件。难点集中在非线性自由表面条件：例如 $\phi_x\zeta_x$ 是两个未知量的乘积，而且需要在未知的 $z=\zeta$ 位置求值。

---

## 四、小振幅近似及线性方程组

### 4.1 两种不同的小参数

老师介绍了两条近似路线：

- **线性／小振幅近似**：波幅相对波长较小，典型控制量为波陡 $ka\ll1$（或 $H/L\ll1$）。主要用于**忽略二阶及以上非线性项**。
- **浅水近似**：水深相对波长较小，即 $kh\ll1$（或 $h/L\ll1$）。主要用于简化**双曲函数和频散关系**。

它们考察的比例不同，**不能因为“波幅小”就自动推断为浅水波**。课程先建立任意有限常水深的线性解，再分别取浅水和深水极限。

:::NOTE
严格讨论浅水波的非线性强弱时，还需要考虑相对波幅 $a/h$（或 $H/h$）。当 $h/L$ 很小，单靠 $H/L$ 小未必足够保证线性近似有效。此处按老师的课程假设先研究小幅线性波。
:::

### 4.2 摄动展开：为什么乘积可以略去

引入小的无量纲参数 $\epsilon$，把未知量按阶展开（这里省略完整无量纲化的系数细节，按课件记号表示）：

$$
\phi=\epsilon\phi^{(1)}+\epsilon^2\phi^{(2)}+\epsilon^3\phi^{(3)}+\cdots
$$

$$
\zeta=\epsilon\zeta^{(1)}+\epsilon^2\zeta^{(2)}+\epsilon^3\zeta^{(3)}+\cdots
$$

在一阶近似中只保留 $O(\epsilon)$：

- $\phi_x$ 和 $\zeta_x$ 各是一阶小量；$\phi_x\zeta_x$ 是 **$O(\epsilon^2)$**，舍去。
- $\frac12\lvert\nabla\phi\rvert^2$ 由速度分量的平方组成，也是 **$O(\epsilon^2)$**，舍去。
- $g\zeta$ 虽然小，但为 **$O(\epsilon)$**，**必须保留**，否则自由表面动力学条件将丢失波面恢复力。

举例：若一阶量大约为 $0.1$，两项相乘约为 $0.01$，再小一个数量级。这个例子只是说明阶数，严谨分析需要先无量纲化。

### 4.3 为什么可以在 $z=0$ 施加边界条件

原始海面位置 $z=\zeta$ 未知，给求解造成困难。将任一边界表达式 $F$ 在静水面 $z=0$ 附近作 Taylor 展开：

$$
F\big|_{z=\zeta}=F\big|_{z=0}+\zeta\left.\frac{\partial F}{\partial z}\right|_{z=0}+O(\zeta^2)
$$

若 $F=\phi_z$、$\phi_t$ 等一阶波动量，则第二项 $\zeta\,\partial_zF$ 为二阶，因此一阶时可将这些量直接在 $z=0$ 处求值；**但动力学条件中单独出现的 $g\zeta$ 仍须保留**。

![老师课件中的摄动展开和边界线性化思路](/images/physical-oceanography/lesson13/perturbation.jpg)

### 4.4 线性化后的三个边界条件

以等深水平海底 $h=\mathrm{const}$ 为前提，忽略 $O(\epsilon^2)$ 项：

**海面运动学条件**：

$$
\boxed{\phi_z^{(1)}=\zeta_t^{(1)},\qquad z=0}
$$

**海面动力学条件**（取表压且去掉常数项）：

$$
\boxed{\phi_t^{(1)}+g\zeta^{(1)}=0,\qquad z=0}
$$

**海底条件**：

$$
\boxed{\phi_z^{(1)}=0,\qquad z=-h}
$$

在水体内部仍满足 $\nabla^2\phi^{(1)}=0$。整理得

![原始与线性化后的控制方程及边界条件对照](/images/physical-oceanography/lesson13/linear_system.jpg)

$$
\begin{cases}
\nabla^2\phi^{(1)}=0, & -h<z<0,\\[3pt]
\phi_z^{(1)}=\zeta_t^{(1)}, & z=0,\\[3pt]
\phi_t^{(1)}+g\zeta^{(1)}=0, & z=0,\\[3pt]
\phi_z^{(1)}=0, & z=-h.
\end{cases}
$$

接下来老师用**分离变量法**求这个一阶系统。此后为使书写简洁，下文把上标 $(1)$ 省略；所有公式仍指**线性一阶解**。

### 4.5 合并两个海面条件

对动力学条件 $\phi_t+g\zeta=0$ 关于 $t$ 求偏导：

$$
\phi_{tt}+g\zeta_t=0
$$

再利用运动学条件 $\zeta_t=\phi_z$：

$$
\boxed{\phi_{tt}+g\phi_z=0,\qquad z=0}
$$

这就把两个自由表面条件合成为只含 $\phi$ 的一个条件，先解 $\phi$，再用 $\zeta=-\phi_t/g$ 恢复波面。

---

## 五、有限水深线性波解的完整推导

> 本节是老师特别说明**需要了解推导过程**的部分；课件中的某些代数变换略写，这里补齐。

### 5.1 二维沿 $+x$ 传播的规则波

忽略 $y$ 方向变化，设周期为 $T$、波长为 $L$ 的规则波：

$$
k=\frac{2\pi}{L},\qquad \omega=\frac{2\pi}{T},\qquad \theta=kx-\omega t
$$

$k$ 表示每单位距离相位改变多少（波数，单位 $\mathrm{rad/m}$）；$\omega$ 表示每单位时间相位改变多少（角频率，单位 $\mathrm{rad/s}$）。

$\theta$ 固定时 $kx-\omega t=\mathrm{const}$，有 $dx/dt=\omega/k>0$，故波向 $+x$ 传播。

二维控制方程和边界条件为

$$
\phi_{xx}+\phi_{zz}=0,\qquad -h<z<0
$$

$$
\phi_{tt}+g\phi_z=0\quad(z=0),\qquad \phi_z=0\quad(z=-h)
$$

### 5.2 分离变量：求水平函数 $X(x)$ 与垂向函数 $Z(z)$

令复数表示的速度势为

$$
\phi(x,z,t)=\operatorname{Re}\left\{X(x)Z(z)e^{-i\omega t}\right\}
$$

采用复指数只是一种运算便利，**最终取实部**。代入 Laplace 方程并除以 $XZ$（在非零处）：

$$
\frac{X''(x)}{X(x)}+\frac{Z''(z)}{Z(z)}=0
$$

一项只依赖 $x$，另一项只依赖 $z$，两者相加恒为零，因此各自为常数。选定分离常数：

$$
\frac{X''}{X}=-k^2,\qquad \frac{Z''}{Z}=k^2
$$

分别得到两个常微分方程：

$$
X''+k^2X=0,\qquad Z''-k^2Z=0
$$

它们的通解为

$$
X(x)=C_1e^{ikx}+C_2e^{-ikx},\qquad Z(z)=D_1e^{kz}+D_2e^{-kz}
$$

$x$ 方向是振荡型解（虚指数），$z$ 方向是指数型解（实指数），它们分别来自**负号和正号的分离常数**。

![分离变量法的原始方程及通解](/images/physical-oceanography/lesson13/separation.jpg)

### 5.3 先用海底条件确定 $z$ 方向函数

海底有 $\phi_z=0$（在 $z=-h$），所以 $Z'(-h)=0$：

$$
Z'(z)=kD_1e^{kz}-kD_2e^{-kz}
$$

$$
Z'(-h)=kD_1e^{-kh}-kD_2e^{kh}=0
$$

因此

$$
D_2=D_1e^{-2kh}
$$

代回 $Z(z)$ 并整理：

$$
\begin{aligned}
Z(z)&=D_1\left(e^{kz}+e^{-2kh}e^{-kz}\right)\\
&=D_1e^{-kh}\left(e^{k(z+h)}+e^{-k(z+h)}\right)\\
&=2D_1e^{-kh}\cosh[k(z+h)]
\end{aligned}
$$

利用**双曲余弦定义** $\cosh s=(e^s+e^{-s})/2$，把常数并入振幅系数，得到

$$
\phi=\operatorname{Re}\left\{\cosh[k(z+h)]\left(Ae^{ikx}+Be^{-ikx}\right)e^{-i\omega t}\right\}
$$

其中 $Ae^{ikx}$ 对应向 $+x$ 传播，$Be^{-ikx}$ 对应向 $-x$ 传播。这里只考虑前进波，故取 $B=0$。

![应用海底边界条件并转化为双曲函数](/images/physical-oceanography/lesson13/bottom_cosh.jpg)

### 5.4 用自由表面条件推导**频散关系**

对于单向波设

$$
\phi=\operatorname{Re}\left\{A\cosh[k(z+h)]e^{i(kx-\omega t)}\right\}
$$

代入 $\phi_{tt}+g\phi_z=0$（$z=0$）。先逐项求导：

$$
\phi_{tt}\longleftrightarrow-\omega^2 A\cosh[k(z+h)]e^{i\theta}
$$

$$
\phi_z\longleftrightarrow kA\sinh[k(z+h)]e^{i\theta}
$$

在 $z=0$ 处，忽略共同的非零振荡因子，有

$$
-\omega^2 A\cosh(kh)+gkA\sinh(kh)=0
$$

两边除以 $A\cosh(kh)$：

$$
\boxed{\omega^2=gk\frac{\sinh(kh)}{\cosh(kh)}=gk\tanh(kh)}
$$

这就是**有限水深线性表面重力波的频散关系（dispersion relation）**。其中

$$
\sinh s=\frac{e^s-e^{-s}}2,\qquad \tanh s=\frac{\sinh s}{\cosh s}
$$

![双曲正弦、双曲余弦、双曲正切的定义与曲线](/images/physical-oceanography/lesson13/hyperbolic.jpg)

**它说明什么？** 对给定水深 $h$，波的角频率 $\omega$ 与波数 $k$ 不能随意独立选取；必须满足上式。由 $k=2\pi/L$ 可进一步联系波长、周期和传播速度。

### 5.5 用给定波面确定最后一个常数 $A$

老师取自由表面为

$$
\boxed{\zeta(x,t)=a\cos(kx-\omega t)=a\cos\theta}
$$

假定 $\phi=\operatorname{Re}\{A\cosh[k(z+h)]e^{i\theta}\}$。利用线性动力学条件 $\phi_t+g\zeta=0$（$z=0$）：

$$
\operatorname{Re}\{-i\omega A\cosh(kh)e^{i\theta}\}=-ga\cos\theta
$$

故

$$
A=-\frac{iag}{\omega\cosh(kh)}
$$

注意 $\operatorname{Re}[-ie^{i\theta}]=\sin\theta$，最终得到实速度势：

$$
\boxed{\phi(x,z,t)=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin(kx-\omega t)}
$$

**理解这个结果**：$\sin(kx-\omega t)$ 管理水平和时间的周期性变化；$\cosh[k(z+h)]/\cosh(kh)$ 管理振荡随深度的变化；前面的 $ag/\omega$ 负责量纲与整体大小。

---

## 六、波面、速度场与压力场

### 6.1 速度场由速度势直接求导

定义 $\theta=kx-\omega t$，水平、垂向速度分别为

$$
u=\phi_x=\frac{agk}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\cos\theta
$$

$$
w=\phi_z=\frac{agk}{\omega}\frac{\sinh[k(z+h)]}{\cosh(kh)}\sin\theta
$$

利用 $\omega^2=gk\tanh(kh)$，得到课堂 PPT 的标准形式：

$$
\boxed{u=a\omega\frac{\cosh[k(z+h)]}{\sinh(kh)}\cos(kx-\omega t)}
$$

$$
\boxed{w=a\omega\frac{\sinh[k(z+h)]}{\sinh(kh)}\sin(kx-\omega t)}
$$

其中 $\cos$ 与 $\sin$ 相差四分之一个周期，因此同一个水质点的水平和竖直运动**有相位差**，组合起来可能是椭圆轨迹。

**海底检验**：$z=-h$ 时，$\sinh[k(z+h)]=\sinh0=0$，因此 $w=0$，正好满足平底不可穿透条件。

![线性波波面、速度场和速度随深度变化](/images/physical-oceanography/lesson13/linear_velocity.jpg)

### 6.2 压力场：静水压力 + 波动压力

线性伯努利关系（用表压 $p=p_{\rm abs}-p_0$）：

$$
\phi_t+\frac p\rho+gz=0
$$

将 $\phi$ 对 $t$ 求偏导：

$$
\phi_t=-ag\frac{\cosh[k(z+h)]}{\cosh(kh)}\cos\theta
$$

因此

$$
\boxed{p(x,z,t)=-\rho gz+\rho ga\frac{\cosh[k(z+h)]}{\cosh(kh)}\cos(kx-\omega t)}
$$

- $-\rho gz$：相对于静水面的**静水压力**；由于海水内部 $z<0$，所以此项为正。
- 第二项：因波面起伏导致的**波动压强**，其振幅随深度变化。

若要求绝对压力，还需加上 $p_0$。此式在海面 $z=\zeta$ 处满足 $p\approx0$ 的**一阶**条件；不可用它要求高阶项精确为零。

![课堂的线性波压力场公式](/images/physical-oceanography/lesson13/wave_pressure.jpg)

---

## 七、水质点运动轨迹

### 7.1 为什么自由表面在传播，水质点却大致“绕圈”

波面 $\zeta=a\cos(kx-\omega t)$ 的形状向前移动，主要体现**扰动与能量传播**。固定一小团水，它的水平速度 $u$ 和垂直速度 $w$ 随时间交替变化；在一阶近似下，它围绕一个平均位置做闭合椭圆运动。

### 7.2 从速度积分，得到椭圆方程

设质点初始位置 $(x_0,z_0)$，以零阶位置代替速度场里的瞬时坐标（这是**一阶质点位移近似**）：

$$
\frac{dx}{dt}=a\omega\frac{\cosh[k(z_0+h)]}{\sinh(kh)}\cos(kx_0-\omega t)
$$

$$
\frac{dz}{dt}=a\omega\frac{\sinh[k(z_0+h)]}{\sinh(kh)}\sin(kx_0-\omega t)
$$

对时间从 $0$ 积分到 $t$，且初始位置为 $(x_0,z_0)$：

$$
x-x_0=A\left[\sin(kx_0)-\sin(kx_0-\omega t)\right]
$$

$$
z-z_0=B\left[\cos(kx_0-\omega t)-\cos(kx_0)\right]
$$

其中两个**轨道半轴**为

$$
\boxed{A=a\frac{\cosh[k(z_0+h)]}{\sinh(kh)},\qquad B=a\frac{\sinh[k(z_0+h)]}{\sinh(kh)}}
$$

把与时间无关的部分收进轨道中心

$$
\bar x=x_0+A\sin(kx_0),\qquad \bar z=z_0-B\cos(kx_0)
$$

则有 $x-\bar x=-A\sin(kx_0-\omega t)$、$z-\bar z=B\cos(kx_0-\omega t)$。两式分别除以半轴并平方相加：

$$
\boxed{\frac{(x-\bar x)^2}{A^2}+\frac{(z-\bar z)^2}{B^2}=\sin^2\theta+\cos^2\theta=1}
$$

因此水质点在**线性近似**下走椭圆。这里的 $\bar x,\bar z$ 为轨道中心；$A,B$ 为椭圆半轴，**不能把 $A$、$B$ 理解成新的波高或原波幅**。

![质点轨道椭圆及两个半轴](/images/physical-oceanography/lesson13/particle_ellipse.jpg)

### 7.3 随水深变化的三个规律

1. **海底 $z_0=-h$**：$B=0$，质点只能水平往复；此时 $A=a/\sinh(kh)>0$。
2. **有限水深**：因为 $\cosh s>\sinh s$（$s\ge0$），通常 $A>B$，轨道为**水平长轴的椭圆**。
3. **向上接近自由表面**：$A,B$ 通常都增大，质点运动更显著；靠近深水区域的底部时二者都可能非常小。

**关键区别**：有限水深精确一阶表达式中，$A$ 和 $B$ 都随 $z$ 变化；在**浅水极限**，$A\approx a/(kh)$ 近乎不随深度变化，$B\approx a(1+z/h)$ 从表面到底部线性减小。这是老师比较浅水和深水轨迹时特别强调的现象。

---

## 八、浅水波、深水波与中等水深波

### 8.1 分类依据是相对水深 $h/L$

| 类型 | 课堂判别 | 典型数学近似 | 主要运动特征 |
| --- | --- | --- | --- |
| **浅水波（长波）** | $h/L\le 1/20$ | $kh\ll1$，$\tanh(kh)\approx kh$ | 质点轨迹扁椭圆，底部水平往复 |
| **中等水深波** | $1/20<h/L<1/2$ | 保留完整 $\tanh(kh)$ | 椭圆半轴随水深减小 |
| **深水波（短波）** | $h/L\ge1/2$ | $kh\gg1$，$\tanh(kh)\approx1$ | 质点轨迹近圆，半径随深度指数衰减 |

> 边界 $1/20$ 和 $1/2$ 是课程使用的**工程分类约定**；严格数学极限仍是 $kh\to0$ 和 $kh\to\infty$，不能把分类阈值处的近似视为严格等号。

![浅水、深水和中等水深波的质点轨迹对照](/images/physical-oceanography/lesson13/depth_orbits.jpg)

### 8.2 浅水极限：$kh\ll1$

由双曲函数的 Taylor 展开：

$$
\tanh(kh)\approx kh,\qquad \sinh(kh)\approx kh,\qquad \cosh[k(z+h)]\approx1
$$

这几个近似使用条件不同：$\cosh[k(z+h)]\approx1$ 也利用了 $-h\le z\le0$，所以 $0\le k(z+h)\le kh\ll1$。

**频散关系**：

$$
\omega^2=gk\tanh(kh)\approx ghk^2
$$

**相速度**：

$$
\boxed{c=\frac\omega k\approx\sqrt{gh}}
$$

它只依赖重力加速度与水深，**在同一水深下，与波长、周期无关**，所以浅水重力波近似为非频散波。

**速度势及速度**：

$$
\boxed{\phi\approx\frac ak\sqrt{\frac gh}\sin(kx-\omega t)}
$$

$$
\boxed{u\approx a\sqrt{\frac gh}\cos(kx-\omega t)}
$$

$$
\boxed{w\approx a\omega\left(1+\frac zh\right)\sin(kx-\omega t)}
$$

此时 $u$ 几乎**不随深度变化**；$w$ 随高度从海底零值增至表面最大值。

**压力场与轨迹半轴**：

$$
p\approx-\rho gz+\rho ga\cos(kx-\omega t)
$$

$$
\boxed{A\approx\frac a{kh},\qquad B\approx a\left(1+\frac zh\right)}
$$

即椭圆水平半轴近似不变、竖直半轴随深度线性缩小。注意 $kh\ll1$ 时 $a/(kh)$ 可能远大于 $a$，**轨道水平位移幅度可以大于水面波幅**；线性近似仍需满足相应的小非线性参数条件。

![浅水波各项近似解](/images/physical-oceanography/lesson13/shallow_approx.jpg)

### 8.3 深水极限：$kh\gg1$

由于

$$
\tanh(kh)\to1,\qquad \frac{\cosh[k(z+h)]}{\cosh(kh)}\approx e^{kz}
$$

于是

$$
\boxed{\omega^2\approx gk,\qquad c=\frac\omega k\approx\sqrt{\frac gk}=\sqrt{\frac{gL}{2\pi}}=\frac{gT}{2\pi}}
$$

注意深水条件下仍有 $z\le0$，所以 $e^{kz}\le1$；离表面越深，振幅**指数衰减**。

**速度势和速度场**：

$$
\boxed{\phi\approx\frac{ag}{\omega}e^{kz}\sin(kx-\omega t)}
$$

$$
\boxed{u\approx a\omega e^{kz}\cos(kx-\omega t),\qquad w\approx a\omega e^{kz}\sin(kx-\omega t)}
$$

水平和垂直速度振幅相等，因此

$$
\boxed{(x-\bar x)^2+(z-\bar z)^2=(ae^{kz_0})^2}
$$

轨迹为**圆**，半径 $ae^{kz_0}$ 随深度指数减小。在水面 $z_0\approx0$ 时半径约为 $a$；向下一个特征深度 $1/k=L/(2\pi)$，半径缩小为约 $1/e$。

![深水波公式及质点圆形轨道](/images/physical-oceanography/lesson13/deep_approx.jpg)

![质点圆轨道在水深方向逐渐缩小的课件图](/images/physical-oceanography/lesson13/deep_orbits.jpg)

### 8.4 浅水与深水的核心对比

| 性质 | 浅水（$kh\ll1$） | 深水（$kh\gg1$） |
| --- | --- | --- |
| 频散关系 | $\omega^2\approx ghk^2$ | $\omega^2\approx gk$ |
| 相速度 | $c\approx\sqrt{gh}$ | $c\approx\sqrt{g/k}$ |
| 波速主要受何影响 | 水深 $h$ | 波数 $k$／波长 $L$／周期 $T$ |
| 波的频散性 | 近似非频散 | 明显频散 |
| 轨迹形状 | 扁椭圆，底部退化为水平线段 | 圆 |
| 振荡随深度变化 | 水平速度相对均匀 | 指数衰减 |

---

## 九、线性波的动能、势能和总能量

### 9.1 为什么要分别算动能和势能

- 水质点持续运动，具有**动能**。
- 自由表面升降导致流体的重心相对于静水状态发生变化，具有**波动势能**。
- 波传播还伴随能量输送，用**能量通量**（单位时间穿过某截面的能量）衡量；后面引出群速度。

课件对二维、沿 $x$ 传播、$y$ 方向单位宽度的线性波，取**一个波长范围的空间平均**，得到单位水平面积的平均波动能量（单位 $\mathrm{J/m^2}$）。

### 9.2 动能 $E_k$ 的推导

每个微小水体的动能为 $\tfrac12\rho(u^2+w^2)\,dx\,dz$，所以

$$
E_k=\frac1L\int_0^L\int_{-h}^{\zeta}\frac\rho2(u^2+w^2)\,dz\,dx
$$

一阶速度平方为二阶量；为求得领先阶能量，把上限 $\zeta$ 换成 $0$，误差属于更高阶：

$$
E_k\approx\frac1L\int_0^L\int_{-h}^{0}\frac\rho2(u^2+w^2)\,dz\,dx
$$

代入上一节的 $u,w$，记 $q=k(z+h)$：

$$
\begin{aligned}
\left\langle u^2+w^2\right\rangle_x
&=\frac{a^2\omega^2}{\sinh^2(kh)}\left[\frac{\cosh^2q}{2}+\frac{\sinh^2q}{2}\right]\\
&=\frac{a^2\omega^2}{2\sinh^2(kh)}\cosh(2q)
\end{aligned}
$$

这里 $\langle\cos^2\theta\rangle=\langle\sin^2\theta\rangle=1/2$，且 $\cosh^2q+\sinh^2q=\cosh(2q)$。继续沿水深积分：

$$
\begin{aligned}
E_k&=\frac{\rho a^2\omega^2}{4\sinh^2(kh)}\int_{-h}^{0}\cosh[2k(z+h)]\,dz\\
&=\frac{\rho a^2\omega^2}{8k\sinh^2(kh)}\sinh(2kh)\\
&=\frac{\rho a^2\omega^2}{4k}\coth(kh)
\end{aligned}
$$

代入频散关系 $\omega^2=gk\tanh(kh)$，又有 $\coth(kh)\tanh(kh)=1$，得到

$$
\boxed{E_k=\frac14\rho ga^2}
$$

![课件中的线性波动能积分式及结果](/images/physical-oceanography/lesson13/wave_kinetic.jpg)

### 9.3 势能 $E_p$ 的推导

静水参考状态下波动带来的重力势能增量：

$$
E_p=\frac1L\int_0^L\int_0^{\zeta(x,t)}\rho gz\,dz\,dx
$$

先对 $z$ 积分：

$$
E_p=\frac{\rho g}{2L}\int_0^L\zeta^2(x,t)\,dx
$$

代入 $\zeta=a\cos(kx-\omega t)$，沿一波长平均 $\cos^2$：

$$
E_p=\frac{\rho ga^2}{2}\left\langle\cos^2\theta\right\rangle_x=\boxed{\frac14\rho ga^2}
$$

所以线性规则波满足

$$
\boxed{E=E_k+E_p=\frac12\rho ga^2=\frac18\rho gH^2}
$$

注意：**这里 $E_k,E_p,E$ 均为平均的单位水平面积波动能量**；课件取一个波长的空间平均，对于稳定规则波也等价于一个周期的时间平均。深水与浅水线性重力波都满足上述等分关系。

![课件中的波动势能、总能量及动势能各占一半](/images/physical-oceanography/lesson13/wave_potential.jpg)

---

## 十、驻波

### 10.1 由两列反向传播的前进波合成

**驻波（standing wave）**：两列振幅、频率、波数均相同，但传播方向相反的规则波叠加而成，其空间振动格局固定。

取右行波和左行波：

$$
\zeta_1=a\cos(kx-\omega t),\qquad \zeta_2=a\cos(kx+\omega t)
$$

使用和差化积公式：

$$
\begin{aligned}
\zeta&=a\cos(kx-\omega t)+a\cos(kx+\omega t)\\
&=\boxed{2a\cos(kx)\cos(\omega t)}
\end{aligned}
$$

**理解这个表达式**：

- $2a\cos(kx)$ 只随 $x$ 变，决定不同位置允许的最大起伏（带正负号）。
- $\cos(\omega t)$ 只随 $t$ 变，让各位置在固定空间形状下同步振荡。
- **节点（node）**：$\cos(kx)=0$，即 $kx=(m+\tfrac12)\pi$，无论何时 $\zeta=0$，位置固定。
- **腹点（antinode）**：$\lvert\cos(kx)\rvert=1$，水位振幅最大，为 $2a$；相邻节点间距 $L/2$，节点与最近腹点间距 $L/4$。

![课堂驻波示意和驻波速度势](/images/physical-oceanography/lesson13/standing_wave.jpg)

### 10.2 为什么“零点不移动”

对前进波 $a\cos(kx-\omega t)$，每个波峰位置随 $t$ 变化；对驻波 $2a\cos(kx)\cos(\omega t)$，节点仅由 $\cos(kx)=0$ 决定，**其 $x$ 坐标完全不含时间**。这就是驻波“不向左也不向右推进”的数学特征。

特别注意：当 $\cos(\omega t)=0$ 时，**整个海面瞬间处于静水位**，这与“永久固定节点”不同；永久节点要求任何时刻的位移都为零。

### 10.3 驻波中的水质点为什么沿直线运动

把两个方向相反的速度势叠加。以第六节取的势函数号约定，得

$$
\phi_s=-\frac{2ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\cos(kx)\sin(\omega t)
$$

因此

$$
u_s=\frac{2agk}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin(kx)\sin(\omega t)
$$

$$
w_s=-\frac{2agk}{\omega}\frac{\sinh[k(z+h)]}{\cosh(kh)}\cos(kx)\sin(\omega t)
$$

对给定的质点平衡位置 $(x_0,z_0)$，两速度分量的时间因子都是 $\sin(\omega t)$。所以一阶位移在一个周期内始终沿**同一固定方向**来回变化，轨迹为**一条直线段**，倾斜方向取决于所在位置：

- 节点附近，$\cos(kx_0)=0$，垂向位移小，主要表现为**水平往复**。
- 腹点附近，$\sin(kx_0)=0$，水平位移小，主要表现为**垂直往复**。
- 其他位置，水平和垂直位移同时存在，沿**倾斜直线**往复。

这说明老师说“驻波水质点沿直线运动”时，不应理解成“所有质点都沿竖直直线运动”。对等振幅理想驻波，两个方向上的一阶位移同相或反相，轨迹退化为直线；随深度增加，运动幅度通常减小。

---

## 十一、相速度、波群、群速度与频散

### 11.1 相速度 $c$：单个波峰传播多快

沿固定相位 $kx-\omega t=\mathrm{const}$ 求导：

$$
k\frac{dx}{dt}-\omega=0
$$

所以相速度（phase velocity）

$$
\boxed{c=\frac{dx}{dt}=\frac\omega k=\frac LT}
$$

由频散关系可写成

$$
\boxed{c^2=\frac gk\tanh(kh),\qquad c=\frac{gT}{2\pi}\tanh(kh)}
$$

最后一式由 $\omega^2=gk\tanh(kh)$ 和 $k=2\pi/(cT)$ 得到，使用时要注意 $h$ 与 $k$ 仍通过隐式频散关系联系。

- **浅水**：$c\approx\sqrt{gh}$，给定 $h$ 时与 $T$ 无关。
- **深水**：$c\approx gT/(2\pi)$，周期越长，传播越快。

### 11.2 频散与非频散

**频散**：不同频率、波数的波分量具有不同的相速度，传播后会逐渐分离。

- 深水重力波：$c\propto1/\sqrt{k}\propto\sqrt L$，**长波／长周期波更快**，是频散波。
- 浅水重力波：$c\approx\sqrt{gh}$，同一水深下各波分量速度接近，通常称**非频散或弱频散**。

老师结合风浪—涌浪说明：在深水中，不同周期分量离开风区后因传播速度不同而分离，较长周期的涌浪可先到达远处海域。要注意**波高与传播速度没有普遍的一一对应关系**，实际波高还受风场、衰减、传播距离与方向展宽等影响。

![频散波与非频散波的形态对比](/images/physical-oceanography/lesson13/dispersion_comparison.jpg)

![不同波长成分传播分离、形成涌浪的课件示意](/images/physical-oceanography/lesson13/dispersive_swell.jpg)

### 11.3 波群：为什么大波经常成群出现

设两列**同向**、振幅相同、波数和频率十分接近的波：

$$
\zeta_1=a\sin(k_1x-\omega_1t),\qquad \zeta_2=a\sin(k_2x-\omega_2t)
$$

使用和差化积：

$$
\begin{aligned}
\zeta_1+\zeta_2
&=2a\cos\left[\frac{(k_1-k_2)x-(\omega_1-\omega_2)t}{2}\right]\\
&\quad\times\sin\left[\frac{(k_1+k_2)x-(\omega_1+\omega_2)t}{2}\right]
\end{aligned}
$$

这个式子是**快速振荡的载波 × 缓慢变化的包络**：

- 后面的 $\sin$ 决定一个个细小波峰的运动（相速度）。
- 前面的 $2a\cos$ 决定成群出现的波幅大小，波幅的包络整体向前移动（群速度）。

这里的 $\cos$ 允许正负；图形上的上、下幅度包络分别由其绝对值形成。

![两个相近频率波叠加形成波群的课堂公式与图像](/images/physical-oceanography/lesson13/beats.jpg)

![波群中的小波与波幅包络传播示意](/images/physical-oceanography/lesson13/group_envelope.jpg)

### 11.4 由包络节点推导群速度

包络固定相位满足

$$
\frac{(k_1-k_2)x-(\omega_1-\omega_2)t}{2}=\mathrm{const}
$$

对时间求导：

$$
\frac{dx}{dt}=\frac{\omega_1-\omega_2}{k_1-k_2}
$$

当两列波十分接近，即 $\Delta k\to0$，就得到**群速度（group velocity）**：

$$
\boxed{c_g=\frac{d\omega}{dk}}
$$

对表面重力波频散式 $\omega^2=gk\tanh(kh)$ 两边关于 $k$ 求导（水深 $h$ 固定）：

$$
2\omega\frac{d\omega}{dk}=g\tanh(kh)+gkh\,\operatorname{sech}^2(kh)
$$

其中 $\operatorname{sech}(s)=1/\cosh(s)$。把 $c=\omega/k$ 和 $\omega^2=gk\tanh(kh)$ 代入化简：

$$
\boxed{c_g=\frac c2\left[1+\frac{2kh}{\sinh(2kh)}\right]}
$$

这是课堂给出的**有限水深群速度公式**。

![群速度与相速度的关系、浅水与深水极限](/images/physical-oceanography/lesson13/group_velocity.jpg)

### 11.5 两个必须记住的极限

**深水波** $kh\gg1$，$\sinh(2kh)$ 很大：

$$
\boxed{c_g\approx\frac12c}
$$

**浅水波** $kh\ll1$，$\sinh(2kh)\approx2kh$：

$$
\boxed{c_g\approx c\approx\sqrt{gh}}
$$

这里的 $c$ 描述细小波峰或固定相位的移动，$c_g$ 描述缓慢波幅包络的移动。对本节讨论的**线性、无耗散表面重力波**，波能的平均传播速度也等于群速度，故能量通量可表示为 $F=Ec_g$（单位波峰宽度下）。老师 PPT 主要介绍了能量、波群和群速度的关联，未展开能量通量的完整推导。

### 11.6 相速度、群速度不要混淆

| 量 | 数学定义 | 追踪的对象 | 深水极限 | 浅水极限 |
| --- | --- | --- | --- | --- |
| 相速度 $c$ | $\omega/k$ | 单一波峰／固定相位 | $\sqrt{g/k}$ | $\sqrt{gh}$ |
| 群速度 $c_g$ | $d\omega/dk$ | 波群包络／波能传播 | $c/2$ | $c$ |

![传播中的波群与载波成分](/images/physical-oceanography/lesson13/wave_groups.jpg)

---

## 十二、线性理论的局限与有限振幅波

### 12.1 老师列出的四个局限

1. **实际海浪的波陡虽常较小，却不严格等于零**，高阶项在某些情况下有影响。
2. **波形具有非对称性**：实际非线性波常表现为**波峰较尖窄、波谷较宽平**，线性正弦波对此描述不足。
3. **线性波速不含振幅 $a$**；非线性波的传播特性可能受到波高影响。
4. **一阶线性波的质点轨道闭合**，忽略了波向平均净位移和质量输运等高阶效应（例如 Stokes 漂移）。

![课件中线性小振幅波动理论的局限](/images/physical-oceanography/lesson13/linear_limits.jpg)

### 12.2 有限振幅理论的思路

有限振幅波保留原来忽略的部分高阶效应，从而改善波形、波速和输运的描述。老师介绍的类型包括：

- **Stokes 波**：通过摄动级数保留高阶谐波，可描述较明显的波峰—波谷不对称。
- **摆线波（trochoidal wave）**、**椭圆余弦波（cnoidal wave）**、**孤立波（solitary wave）**：在不同假设与水深／非线性条件下使用的波动模型。它们的适用条件和细节将由后续课程展开。

本堂课**只对 Stokes 高阶波作了引入，未完成具体高阶推导**，因此这里不擅自补成“老师本节已讲”的内容。

![课件中有限振幅波与高阶 Stokes 波的引入](/images/physical-oceanography/lesson13/stokes_intro.jpg)

---

## 十三、课堂复习与推导练习

### 13.1 一张表串起所有核心公式

| 内容 | 公式 | 理解重点 |
| --- | --- | --- |
| 控制方程 | $\nabla^2\phi=0$ | 不可压缩 + 无旋 → 速度势满足 Laplace 方程 |
| 线性海面运动学 | $\phi_z=\zeta_t$，$z=0$ | 质点随海面升降 |
| 线性海面动力学 | $\phi_t+g\zeta=0$，$z=0$ | 自由表面受重力恢复 |
| 水平海底 | $\phi_z=0$，$z=-h$ | 底部无法向流动 |
| 频散关系 | $\omega^2=gk\tanh(kh)$ | 频率、波数、水深的关系 |
| 波面 | $\zeta=a\cos(kx-\omega t)$ | $a=H/2$ |
| 速度势 | $\phi=\frac{ag}{\omega}\frac{\cosh[k(z+h)]}{\cosh(kh)}\sin(kx-\omega t)$ | 可求出速度、压力、轨迹 |
| 相速度 | $c=\omega/k=L/T$ | 波峰速度 |
| 群速度 | $c_g=\frac c2\left(1+\frac{2kh}{\sinh2kh}\right)$ | 波包／能量传播速度 |
| 平均波能 | $E=\frac12\rho ga^2=\frac18\rho gH^2$ | 动能与势能各占一半 |
| 驻波 | $\zeta=2a\cos(kx)\cos(\omega t)$ | 节点固定、无净传播 |

### 13.2 建议性推导练习（非课堂正式作业）

**练习 1：由线性海面两个边界条件推出 $\phi_{tt}+g\phi_z=0$。**

**解**：在 $z=0$ 时，$\phi_t+g\zeta=0$，对时间求导得 $\phi_{tt}+g\zeta_t=0$。由 $\phi_z=\zeta_t$，代入即得 $\phi_{tt}+g\phi_z=0$。

**练习 2：用 $Z(z)=D_1e^{kz}+D_2e^{-kz}$ 和 $Z'(-h)=0$ 推出 $Z(z)\propto\cosh[k(z+h)]$。**

**解**：$kD_1e^{-kh}-kD_2e^{kh}=0$，故 $D_2=D_1e^{-2kh}$；于是 $Z(z)=D_1e^{-kh}[e^{k(z+h)}+e^{-k(z+h)}]=2D_1e^{-kh}\cosh[k(z+h)]$。把前面的常数并入波幅系数即可。

**练习 3：对两个同向、频率相近的波使用和差化积，写出群速度定义。**

**解**：

$$
\sin(k_1x-\omega_1t)+\sin(k_2x-\omega_2t)=2\sin\frac{(k_1+k_2)x-(\omega_1+\omega_2)t}{2}\cos\frac{(k_1-k_2)x-(\omega_1-\omega_2)t}{2}
$$

令第二个余弦包络的相位固定，得 $dx/dt=(\omega_1-\omega_2)/(k_1-k_2)$，波数差趋于零时为 $c_g=d\omega/dk$。

**练习 4：为什么深水时 $c_g=c/2$，浅水时 $c_g=c$？**

**解**：由 $c_g=\frac c2[1+2kh/\sinh(2kh)]$。深水 $kh\to\infty$，括号趋于 $1$；浅水 $kh\to0$，利用 $\sinh(2kh)\sim2kh$，括号趋于 $2$，即得。

### 13.3 自测问题

- 速度势 $\phi$ 与波面位移 $\zeta$ 分别代表什么？为什么 $\mathbf V=\nabla\phi$？
- 为什么 Laplace 方程本身是线性的，海浪边值问题却包含非线性？
- 为什么线性化时 $\phi_x\zeta_x$ 可以略去，$g\zeta$ 要留下？
- 为什么分离变量的 $X$ 使用 $e^{\pm ikx}$，而 $Z$ 使用 $e^{\pm kz}$？
- 水质点走椭圆和波峰向前传播是否矛盾？
- 如何区分波高 $H$、振幅 $a$、水深 $h$ 和轨迹半轴 $A,B$？
- 怎样从两列反向传播波得到驻波、从两列相近同向波得到波群？
- 为什么深水群速度只有相速度的一半？

---

**资料定位**：课堂录音《上课录音13.docx》（2026-10-26，第 1–2 节，袁野平）；《上课PPT13.pptx》截图中实质课堂内容主要分布于第 11–24、30–59 页（其中若干页为课堂背景、投屏过渡，未纳入笔记图片）。本笔记的补足推导依据课件给出的方程与边界条件；对原录音的明显语音识别误差已作术语校对。
