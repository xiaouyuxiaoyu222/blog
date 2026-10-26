---
title: Oceanography-Lesson12：海水运动方程的简化与应用（续）· 波浪动力学概述
published: 2026-10-21
description: "物理海洋学第12讲：无量纲数与常用近似、简化方程组、雷诺平均和垂向边界层、海浪的概念与形成、波的要素、叠加、成长和海况；含第二次作业解答。"
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 重要通知：作业与期中考试

> **以下信息来自 2026-10-21 的课堂录音，涉及成绩，请优先阅读。**

- **第二次作业已布置**：覆盖第三至第五章，共 **7 道大题**，原题及参考解答见文末。第 3、4 题要求写出**推导过程**，第 2 题的运动方程须写成**矢量形式**，第 5 题须写成**直角坐标分量形式**；请注意老师对不同表示形式的要求。
- **第三次作业**：老师预计于 **10 月 28 日（周三）**布置；期中考试前合计三次作业。
- **建议交作业时间**：尽量于 **10 月 30 日（周五）前**将前三次作业交给助教，以便老师检查典型错误。老师表示较迟但仍在期中考试前交的作业，原则上与提前交分数相同；**期中考试后补交可能折减得分**。
- **作业讲评**：预计 **11 月 2 日（周一）**在课上讲解典型错误和参考答案。
- **期中考试**：预计 **11 月 4 日（周三）**，老师提到采用 **B 卷**；并表示估计**约 80% 的题目与作业密切相关**，这是老师的课堂预估，不能视作最终考卷的已确定比例。
- **本章学习安排**：本节开始第六章波浪动力学；下周计划学习规则波理论和随机海浪统计方法。

---

## 概述

本讲分成两个相连的部分：

1. **第三至第五章的总结与收束**：如何比较动力方程各项的量级，什么时候能用静压、$f$ 平面、$\beta$ 平面和 Boussinesq 近似；如何得到大尺度、小尺度以及雷诺平均的运动方程；在海面、海底边界层为什么必须重新考虑湍流摩擦。
2. **第六章：波浪动力学——概述**：海浪的物理意义、风浪与涌浪、规则波的基本参数、复杂海面的波浪叠加、风浪生长条件、波浪破碎、波龄和有效波高。

**逻辑主线**：基本方程 $\rightarrow$ 尺度分析 $\rightarrow$ 合理简化 $\rightarrow$ 适当边界条件 $\rightarrow$ 研究真实海洋现象（从海浪开始）。

## 目录

- [一、尺度分析与无量纲数（复习）](#一尺度分析与无量纲数复习)
- [二、四种常用近似（复习）](#二四种常用近似复习)
- [三、几种简化运动方程组](#三几种简化运动方程组)
- [四、Boussinesq 近似下的雷诺平均方程](#四boussinesq-近似下的雷诺平均方程)
- [五、垂向边界层与对数边界层](#五垂向边界层与对数边界层)
- [六、波浪动力学概述](#六波浪动力学概述)
- [七、课堂思考题](#七课堂思考题)
- [八、第二次作业：题目及参考解答](#八第二次作业题目及参考解答)

---

## 一、尺度分析与无量纲数（复习）

### 为什么需要尺度分析？

海水运动方程包含局地加速度、平流加速度、科氏力、气压梯度力、重力以及湍流（或黏性）摩擦力。真实海洋中，各项大小随研究对象的**空间尺度、速度尺度和时间尺度**改变。

> **尺度分析的目的**：先估计每一项的典型量级，再按量级比较决定哪些项必须保留、哪些项可以在特定前提下忽略。省略项时一定要说明其相对于哪一项很小。

取特征尺度：水平尺度 $L$、垂向尺度 $D$、水平流速 $U$、垂向流速 $W$、时间尺度 $T$、科氏参数量级 $F=|f|$；水平和垂向黏性系数分别记为 $A_h$、$A_z$。

以 $x$ 向动量方程为例：

$$
\frac{\partial u}{\partial t}
+u\frac{\partial u}{\partial x}
+v\frac{\partial u}{\partial y}
+w\frac{\partial u}{\partial z}
-fv+f\cot\varphi\,w
=-\frac{1}{\rho}\frac{\partial p}{\partial x}
+A_h\nabla_h^2u+A_z\frac{\partial^2u}{\partial z^2}.
$$

各项（按加速度量纲）对应的尺度为：

| 项 | 特征量级 | 说明 |
| --- | --- | --- |
| 局地加速度 $\partial u/\partial t$ | $U/T$ | 固定位置上的速度随时间变化 |
| 水平平流 $u\partial_xu+v\partial_yu$ | $U^2/L$ | 流动将速度差异输送到别处 |
| 垂向平流 $w\partial_zu$ | $WU/D$ | 流动在上下层间的输运 |
| 科氏加速度 $fv$ | $FU$ | 地球自转的作用 |
| 水平压强梯度加速度 | $P/(\rho L)$ | 受压力场空间变化驱动 |
| 水平黏性项 | $A_hU/L^2$ | 水平方向动量扩散 |
| 垂向黏性项 | $A_zU/D^2$ | 垂直方向动量扩散 |

如果流动近似不可压缩，连续性方程给出 $U/L\sim W/D$，因此

$$
\frac{W}{U}\sim\frac{D}{L}.
$$

![尺度分析与 Rossby、Ekman 数的原课件](/images/physical-oceanography/lesson12/slide_004.jpg)

### 1. 纵横比 $\delta$

$$
\delta=\frac{D}{L}\sim\frac{W}{U}.
$$

- **物理意义**：运动的垂向厚度与水平宽度的比值。
- **大洋尺度**：水平可达上千公里、垂向通常只有几公里，$\delta\ll1$，几何上可视作一层很薄的流体。
- **作用**：尤其有利于比较垂直动量方程中各项的量级，是静压近似的重要依据。

### 2. Rossby 数 $Ro$

$$
Ro=\frac{U^2/L}{FU}=\frac{U}{FL}.
$$

它比较的是**非线性水平平流加速度与科氏加速度**：

- $Ro\ll1$：大尺度旋转效应占优势，平流加速度相对较弱。
- $Ro\sim1$：平流与科氏效应同等重要。
- $Ro\gg1$：小尺度运动的惯性/平流效应相对更显著。

**课堂提问**：Rossby 数是哪两项之比？答案是 $U^2/L$ 与 $FU$；写成 $U/(FL)$ 只是同一个比值的化简。

### 3. 时变 Rossby 数 $Ro_T$

$$
Ro_T=\frac{U/T}{FU}=\frac{1}{FT}.
$$

若把 $1/F$ 理解为自转影响的特征调整时间，则

$$
Ro_T=\frac{\text{旋转调整的特征时间}}{\text{所研究运动的特征时间}}.
$$

它反映**局地加速度相对科氏加速度的重要性**。要特别注意分子分母的顺序：$Ro_T=1/(FT)$，不能随意反过来写。

### 4. Ekman 数 $E_h$、$E_z$

$$
E_h=\frac{A_hU/L^2}{FU}=\frac{A_h}{FL^2},
\qquad
E_z=\frac{A_zU/D^2}{FU}=\frac{A_z}{FD^2}.
$$

- $E_h$：**水平黏性（湍流摩擦）与科氏效应**之比。
- $E_z$：**垂向黏性（湍流摩擦）与科氏效应**之比。
- $E\ll1$ 说明在所选择的运动尺度上黏性项相对较弱；靠近海面和海底，速度的垂向变化可能很大，不能仅凭大洋内部的尺度结论删除边界层摩擦。

### 5. Péclet 数 $Pe_h$、$Pe_z$（课堂补充）

从温度平流—扩散方程出发：

$$
\frac{\partial\theta}{\partial t}
+u\theta_x+v\theta_y+w\theta_z
=K_h(\theta_{xx}+\theta_{yy})+K_z\theta_{zz}.
$$

比较热量平流与热扩散的特征量级：

$$
Pe_h=\frac{U\Theta/L}{K_h\Theta/L^2}=\frac{UL}{K_h},
\qquad
Pe_z=\frac{W\Theta/D}{K_z\Theta/D^2}=\frac{WD}{K_z}.
$$

这里 $\Theta$ 为特征温差，$K_h,K_z$ 为**热扩散系数**；$W\sim UD/L$。

- $Pe\ll1$：扩散相对重要，在其他条件适当时可近似 $\nabla^2\theta\approx0$（具体需考虑各向异性）。
- $Pe\gg1$：平流相对重要；若热扩散可忽略且无热源，沿流体质点有 $D\theta/Dt\approx0$。

![水平与垂向 Péclet 数](/images/physical-oceanography/lesson12/slide_009.jpg)

> **容易混淆**：Rossby 数比较平流与科氏项；Ekman 数比较黏性与科氏项；Péclet 数比较热平流与热扩散。它们使用的特征尺度、比较基准不同，不能相互替代。

---

## 二、四种常用近似（复习）

### 1. 静压近似（静力近似）

**条件**：海洋内部的大尺度、低频运动，纵横比小，且垂直加速度等项相对重力和垂向压强梯度足够小。

垂直动量方程退化为

$$
-\frac{1}{\rho}\frac{\partial p}{\partial z}-g\approx0,
\qquad
\boxed{\frac{\partial p}{\partial z}=-\rho g}.
$$

约定 $z$ 向上为正，因而越往深处（$z$ 越小）压力越大。在海表面 $z=\zeta(x,y,t)$ 满足 $p=p_a$，沿垂向积分：

$$
p(x,y,z,t)=p_a(x,y,t)+\int_z^{\zeta(x,y,t)}\rho(x,y,z',t)g\,dz'.
$$

如果 $\rho$ 为常数：

$$
p=p_a+\rho g(\zeta-z).
$$

如果 $p_a$ 也为水平常数，则

$$
-\frac{1}{\rho}p_x=-g\zeta_x,
\qquad
-\frac{1}{\rho}p_y=-g\zeta_y.
$$

**为什么水平压强梯度与海面坡度相关？** 海面较高的一侧，其上方水柱通常更高；在固定深度上产生水平压强差，驱动水流。

![静压近似的积分及水平坡度项](/images/physical-oceanography/lesson12/slide_011.jpg)

> 注意：$p=p_a+\rho g(\zeta-z)$ 需要常密度假设；真实分层海洋应保留密度积分。静压近似本身并不自动要求水平方向静止。

### 2. $f$ 平面近似

科氏参数随纬度变化：

$$
f=2\Omega\sin\varphi.
$$

研究海区纬度跨度较小，科氏参数变化可以忽略时，选取参考纬度 $\varphi_0$：

$$
\boxed{f=f_0=2\Omega\sin\varphi_0}.
$$

**优点**：简化方程，方便寻找解析解；**限制**：不适用于需要刻画显著纬度变化或行星涡度梯度影响的问题。

![f 平面近似与参考纬度](/images/physical-oceanography/lesson12/slide_016.jpg)

### 3. $\beta$ 平面近似

若还需要保留 $f$ 的南北向变化，则在 $\varphi_0$ 处泰勒展开：

$$
\begin{aligned}
f(\varphi)&=2\Omega\sin\varphi\\
&\approx2\Omega\sin\varphi_0
+2\Omega\cos\varphi_0(\varphi-\varphi_0).
\end{aligned}
$$

在局部区域内令 $y-y_0\approx a(\varphi-\varphi_0)$，这里 $a$ 为地球半径、纬度采用弧度，得到

$$
\boxed{f=f_0+\beta(y-y_0)},
\qquad
\boxed{\beta=\frac{2\Omega\cos\varphi_0}{a}}.
$$

若坐标原点位于参考纬度 $y_0=0$：

$$
f=f_0+\beta y.
$$

**关键区别**：$f$ 平面把 $f$ 看作常数；$\beta$ 平面保留其局部**线性纬向梯度**，可研究 Rossby 波及相关的大尺度变化。

![beta 平面的一阶展开推导](/images/physical-oceanography/lesson12/slide_018.jpg)

### 4. Boussinesq 近似

在海水密度变化相对基准密度很小时，写作

$$
\rho=\rho_0+\rho',
\qquad
\left|\frac{\rho'}{\rho_0}\right|\ll1.
$$

运动方程中的惯性和通常的压强梯度系数等使用 $\rho_0$，**但浮力中保留密度异常**。以剔除参考静水压力后的方程为例：

$$
\frac{D\mathbf{u}}{Dt}+f\mathbf{k}\times\mathbf{u}
=-\frac{1}{\rho_0}\nabla p'
-\frac{\rho'}{\rho_0}g\mathbf{k}
+\text{黏性及其他外力}.
$$

这里 $\mathbf{k}$ 指向上方，$p'$ 是相对于参考静压的压力扰动。密度较小（$\rho'<0$）对应向上的浮力异常。

**适用条件**：密度相对变化小，且没有必须保留整体压缩性效应的问题。课堂举例：一般海水环流适用；若淡水与高盐水强烈混合、密度差很大，需重新评估该近似，不能直接套用。

![Boussinesq 近似及保留浮力项](/images/physical-oceanography/lesson12/slide_019.jpg)

---

## 三、几种简化运动方程组

老师强调：**方程组从完整形式删去哪一项，必须能根据尺度分析解释**。

### 1. 大尺度运动方程组（直角坐标）

典型的低 Rossby 数、静压、水平摩擦可忽略的大洋内部运动，得到类似线性地转—静力形式：

$$
\begin{cases}
\displaystyle \frac{\partial u}{\partial t}-fv=-\frac{1}{\rho_0}p_x,\\[4pt]
\displaystyle \frac{\partial v}{\partial t}+fu=-\frac{1}{\rho_0}p_y,\\[4pt]
\displaystyle p_z=-\rho g,\\[4pt]
\displaystyle u_x+v_y+w_z=0.
\end{cases}
$$

再联立盐量扩散、热传导及状态方程 $\rho=\rho(\theta,S,p)$ 构成封闭系统（仍需要初始条件与边界条件）。

- **保留**：局地变化、主要的水平科氏作用、压强梯度和静力平衡。
- **舍去**：相对较弱的非线性平流项与黏性项。
- **不能机械理解为“所有大尺度都没有平流”**：海流的时间尺度、锋面和涡旋等情形会影响实际保留项；这里描述课件提供的特定简化版本。

![大尺度运动方程组（课件原式）](/images/physical-oceanography/lesson12/slide_041.jpg)

### 2. 水平运动保留湍流摩擦的大尺度方程组

在前述近似下，允许**水平速度的动量方程**包含湍流摩擦：

$$
\begin{cases}
\displaystyle u_t-fv=-\frac{1}{\rho_0}p_x+A_h\nabla_h^2u+A_z u_{zz},\\
\displaystyle v_t+fu=-\frac{1}{\rho_0}p_y+A_h\nabla_h^2v+A_z v_{zz},\\
\displaystyle p_z=-\rho g.
\end{cases}
$$

这描述了课件的“水平运动考虑湍流摩擦”模型：**水平方向的两个动量方程保留摩擦，垂向动量方程仍采用静压近似**。$A_h\nabla_h^2$ 与 $A_z\partial_{zz}$ 分别是水平、垂向的动量扩散对**水平流速**的作用；不要混淆“水平运动方程里的垂向摩擦”和“垂向运动方程里的摩擦”。

![水平运动考虑湍流摩擦的大尺度方程](/images/physical-oceanography/lesson12/slide_046.jpg)

### 3. 小尺度运动方程组

在水平尺度较小、$Ro$ 较大的流动中，科氏加速度可能相对平流项很小，可忽略主要科氏项而保留加速度、压力梯度及必要的黏性扩散。具体哪项保留取决于时间尺度和 Reynolds 数等。

> **课堂比较**：研究上千公里尺度大洋环流时，自转效应常常十分重要；研究几厘米、几米的局部湍流时，主导平衡常由惯性、压强和黏性决定。

![课件中的小尺度运动方程组](/images/physical-oceanography/lesson12/slide_047.jpg)

---

## 四、Boussinesq 近似下的雷诺平均方程

### 1. 为什么要做时间平均？

实际海洋速度、温度、盐度等存在快速的湍流脉动。若只关心长期平均环流，把任一变量分为平均量与脉动量：

$$
u=\bar u+u',\quad v=\bar v+v',\quad w=\bar w+w',
\quad\theta=\bar\theta+\theta',\quad S=\bar S+S'.
$$

根据定义：

$$
\overline{u'}=\overline{v'}=\overline{\theta'}=0.
$$

但两个脉动量的乘积的平均值一般**不会**消失：

$$
\overline{u'w'}\ne0.
$$

这正是雷诺平均方程与瞬时方程的关键区别。

### 2. 一个最重要的推导：为什么多了 $\overline{u'w'}$？

对不可压缩流，先将动量平流项写为通量散度（以 $x$ 方向动量的垂向输运为例）：

$$
w\frac{\partial u}{\partial z}
\quad\longrightarrow\quad
\frac{\partial(wu)}{\partial z}
\quad(\text{完整方程需与其余方向合并}).
$$

将速度代入：

$$
\begin{aligned}
\overline{wu}
&=\overline{(\bar w+w')(\bar u+u')}\\
&=\bar w\bar u+\bar w\,\overline{u'}
+\bar u\,\overline{w'}+\overline{w'u'}\\
&=\bar w\bar u+\overline{w'u'}.
\end{aligned}
$$

因此，平均后的动量方程中出现额外通量项

$$
-\frac{\partial\overline{u'w'}}{\partial z}.
$$

同理，三个空间方向都会有 $-\partial_j\overline{u_i'u_j'}$。它们描述**湍流脉动对平均动量的输运**，通常合称雷诺应力项（按密度乘上 $-\rho_0$ 可表为应力）。

### 3. 雷诺平均后的基本结构

用向量写最简洁。对 Boussinesq 流：

$$
\nabla\cdot\bar{\mathbf u}=0,
$$

$$
\frac{\partial\bar u_i}{\partial t}
+\bar u_j\frac{\partial\bar u_i}{\partial x_j}
+(f\mathbf{k}\times\bar{\mathbf u})_i
=-\frac{1}{\rho_0}\frac{\partial\bar p'}{\partial x_i}
+b\delta_{i3}+\text{分子黏性项}
-\frac{\partial\overline{u_i'u_j'}}{\partial x_j}.
$$

其中 $b=-g\bar\rho'/\rho_0$ 为浮力异常，重复指标 $j$ 代表求和；此式省略了课件更一般形式中的若干地球曲率、位势与旋转修正，只突出本课需要掌握的湍流平均结构。

热量与盐量同样多出湍流标量通量：

$$
\frac{D\bar\theta}{Dt}
=\text{分子热扩散}
-\nabla\cdot\overline{\mathbf u'\theta'},
$$

$$
\frac{D\bar S}{Dt}
=\text{分子盐扩散}
-\nabla\cdot\overline{\mathbf u'S'}.
$$

![Boussinesq 近似下雷诺平均方程（课件分量式）](/images/physical-oceanography/lesson12/slide_050.jpg)

### 4. 如何处理难以直接计算的脉动通量？

引入**梯度扩散（涡黏性）参数化**，例如：

$$
-\overline{u'w'}=K_M\frac{\partial\bar u}{\partial z},
\qquad
-\overline{w'\theta'}=K_H\frac{\partial\bar\theta}{\partial z}.
$$

- $K_M$：湍流动量交换（涡黏性）系数；
- $K_H$：湍流热扩散系数；
- 盐的湍流扩散可以另记 $K_S$，未必等于 $K_H$。

其逻辑为：将未知的“脉动乘积”用可计算的“平均梯度 × 系数”近似表示，系数需由经验、观测或更复杂的湍流模型确定。

> **辨析**：$\overline{u'w'}$ 可能非零；$\overline{u'}=0$ 并不能推出它为零。参数化也不代表严格恒等关系。

![引入湍流系数，对动量及热盐通量作梯度近似](/images/physical-oceanography/lesson12/slide_052.jpg)

---

## 五、垂向边界层与对数边界层

### 1. 为什么大洋内部可忽略摩擦，边界层却不能？

海面受到风应力，海底存在固体边界。即使很薄的一层内速度变化也可能很大：

$$
\left|\frac{\partial\bar u}{\partial z}\right|\ \text{很大}
\quad\Longrightarrow\quad
\left|K_M\frac{\partial\bar u}{\partial z}\right|\ \text{可能不可忽略}.
$$

海底近壁处的平均速度在满足无滑移条件时趋于零，离开底部后迅速增大。在适当的充分发展湍流边界层条件下，可出现经典的**对数速度分布**。

### 2. 垂向边界层一维模型

在水平变化弱、平均垂向速度近似为零、忽略水平平流和部分外力的情形下，课件给出

$$
\frac{\partial\bar u}{\partial t}-f\bar v
=\frac{\partial}{\partial z}\left(K_M\frac{\partial\bar u}{\partial z}\right),
$$

$$
\frac{\partial\bar v}{\partial t}+f\bar u
=\frac{\partial}{\partial z}\left(K_M\frac{\partial\bar v}{\partial z}\right).
$$

盐、温度的对应模型为

$$
\frac{\partial\bar S}{\partial t}
=\frac{\partial}{\partial z}\left(K_S\frac{\partial\bar S}{\partial z}\right),
\qquad
\frac{\partial\bar\theta}{\partial t}
=\frac{\partial}{\partial z}\left(K_H\frac{\partial\bar\theta}{\partial z}\right).
$$

**物理含义**：平均场的局地变化由垂向湍流动量或热盐通量的辐合/辐散决定；水平动量还受到科氏偏转。

![课件：垂向边界层平均场模型](/images/physical-oceanography/lesson12/slide_060.jpg)

### 3. 对数边界层（课堂简介）

在近海底的湍流恒应力层中，可利用混合长度思想得到典型形式

$$
\bar U(z)=\frac{u_*}{\kappa}\ln\frac{z_b}{z_0},
$$

- $z_b$：距海底的高度（防止与课程中“竖直坐标 $z$”混淆）；
- $z_0$：粗糙度长度；
- $u_*=(|\tau_b|/\rho_0)^{1/2}$：摩擦速度；
- $\kappa$：von Kármán 常数，典型取值约 $0.4$。

该对数律需要近壁充分发展湍流、近似恒应力等条件。老师说明**本节只作介绍，后续课程还会展开**。

![课件：海底对数边界层及粗糙度](/images/physical-oceanography/lesson12/slide_061.jpg)

---

## 六、波浪动力学概述

### 1. 本章安排与为什么研究海浪

课件从这一页正式进入**第六章 波浪动力学**，章节结构为：

1. 第一节：概述；
2. 第二节：控制方程与边界条件；
3. 第三节：小振幅波动理论（线性波动理论）；
4. 第四节：有限振幅波动理论简介。

![第六章框架](/images/physical-oceanography/lesson12/slide_063.jpg)

海浪是海气交界面上的常见波动。研究其动力学有如下原因：

- **海气动量、能量及物质交换**：风向海浪输入能量，波浪破碎又增强上层湍流、混合与气体交换；
- **海洋上层动力**：改变近表层混合和波流相互作用，部分能量可进入海洋内部；
- **海洋遥感**：海面粗糙度和白沫改变电磁波散射，波高又是重要的反演参数；
- **海洋军事与海洋工程**：波浪噪声影响声学探测，大浪和破碎浪影响舰船航行、码头、桥梁与海岸工程安全；
- **海洋灾害**：强风暴波浪可造成显著海岸损害。

课堂示例：海浪破碎形成气泡和白沫，会显著改变海气交换；老师还用**青岛栈桥遭大浪破坏**以及《神奈川冲浪里》的浪峰、浪谷和卷浪形态说明海浪的实际表现。

![破碎波：影响海表湍流和物质交换](/images/physical-oceanography/lesson12/slide_065.jpg)

![葛饰北斋《神奈川冲浪里》：浪峰、卷浪和破碎](/images/physical-oceanography/lesson12/slide_072.jpg)

### 2. 海浪的定义：风浪与涌浪

课堂主要讨论**风生成的海面重力波**：风提供能量，重力提供使海面趋向平衡的回复作用。

**风浪（wind sea）**：在当地风场持续作用下形成、仍受当地风持续输入能量的海浪。

**涌浪（swell）**：先前或远处风场生成，离开主要生浪区或当地风已减弱，仍能在海面上传播的海浪。

“无风不起浪”对应风场生浪过程；“无风三尺浪”形象地说明**当地无风时仍可能出现远处传播来的涌浪**。两者可以同时存在，也可叠加成为观测到的海况。

> **范围说明**：本章的“海浪”主要指风生表面重力波。海面上也存在海啸、潮汐等其他成因的长波，不能概括为所有海面波动都由风生成。

![风浪与涌浪的概念和典型周期范围](/images/physical-oceanography/lesson12/slide_073.jpg)

### 3. 海浪的能量与尺度谱

不同海洋波动具有不同特征时间尺度；课件列举毛细波、风浪、涌浪、海啸和潮汐等。老师强调风生波动蕴藏大量能量，其对海岸工程和航行的影响十分重要。

![不同波动类型的周期与能量示意（课件图）](/images/physical-oceanography/lesson12/slide_074.jpg)

> “风浪周期约 1 秒、涌浪约 10 秒”是老师用于帮助区分的典型数量级，不属于所有海域的严格边界。实际两者周期范围可能重叠。

### 4. 规则波的基本要素

先研究一维规则正弦波：

$$
\zeta(x,t)=a\cos(kx-\omega t+\phi_0).
$$

- $\zeta$：自由表面相对平均海面的位移；
- $a$：**振幅**，平衡面到波峰的高度；
- $H$：**波高**，一个波峰至相邻波谷的高度，正弦波有 $H=2a$；
- $L$（或 $\lambda$）：**波长**，相邻两个波峰之间的水平距离；
- $T$：**周期**，固定点上相邻两个波峰经过的时间间隔；
- $h$：**水深**，平均水面至海底的距离；
- $k=2\pi/L$：波数；$\omega=2\pi/T$：角频率；$\phi_0$：初相位。

![波浪基本几何要素和传播示意](/images/physical-oceanography/lesson12/slide_078.jpg)

**两个常用组合量**：

$$
\text{波陡}=\frac{H}{L},
\qquad
\text{相速度（波速） }c=\frac{L}{T}=\frac{\omega}{k}.
$$

- **波陡 $H/L$**：衡量波面陡峭程度，与破碎倾向有关；
- **相速度 $c$**：波峰传播的速度；与海水质点的水平流速 $u$ 不相同。

老师强调后续波动理论离不开 $L,T,h$ 等特征量，这些量通过**色散关系**相互联系；目前仅介绍定义，后续课程推导关系式。

### 5. 为什么真实海面不是一条完美正弦曲线？

海面是大量不同**频率、振幅、传播方向和相位**的波共同叠加的结果。单个规则波可用正弦函数近似，观测到的海面通常呈**不规则随机起伏**。

$$
\zeta(x,t)=\sum_{n=1}^{N}a_n\cos(k_nx-\omega_nt+\phi_n)
$$

这是理解随机海浪的基础（二维海面还要考虑不同传播方向）。

![实测海面时间序列：不规则波高起伏](/images/physical-oceanography/lesson12/slide_080.jpg)

**课堂演示：两个波如何叠加？**

- **同相**：相同频率、相同振幅的两个波峰对齐，合成振幅加大；
- **反相**：两波相差 $\pi$，且振幅相同，理想情况下完全抵消；
- **不同频率**：产生随时间变化的加强/减弱，形成看似复杂的不规则波形。

![同相、反相及不同频率波的叠加示意](/images/physical-oceanography/lesson12/slide_084.jpg)

![不同方向波列的叠加示意](/images/physical-oceanography/lesson12/slide_086.jpg)

例如两列同频等幅波：

$$
\begin{aligned}
\zeta_1&=a\cos(kx-\omega t),\\
\zeta_2&=a\cos(kx-\omega t+\Delta\phi),\\
\zeta_1+\zeta_2
&=2a\cos\left(\frac{\Delta\phi}{2}\right)
\cos\left(kx-\omega t+\frac{\Delta\phi}{2}\right).
\end{aligned}
$$

故合成波振幅为 $2a|\cos(\Delta\phi/2)|$。相位差为 $0$ 时最大，为 $\pi$ 时完全抵消。

### 6. 风浪成长的三项控制因素

老师反复强调：在其他条件相同时，**风速、风区、风时**共同控制风浪成长。

| 概念 | 定义 | 课堂例子 |
| --- | --- | --- |
| 风速（wind speed） | 海面上方风的强度，常采用海面上方 10 m 风速 $U_{10}$ | 同样条件下，10 m/s 的风通常比 1 m/s 的风产生更强的波浪 |
| 风区（fetch） | 一定风况沿波浪传播方向持续作用的**有效距离** | 离岸风从岸边开始作用于海面，风区常较短；开阔海面向岸风可有很长风区 |
| 风时（duration） | 风持续作用于海面的**时间** | 同样风速，持续一小时通常比一分钟更有利于波浪成长 |

![风区与风时的示意](/images/physical-oceanography/lesson12/slide_088.jpg)

**南大洋举例**：南大洋中高纬西风带绕南极洲分布、海上陆地阻隔少，风有机会沿很长距离持续作用在海面上，因而常见较大的风浪和涌浪。与北半球存在大陆阻挡的中纬度海域形成对比。

### 7. 波浪从产生到消亡

课堂将海浪生命周期描述为四个阶段：

1. **初始阶段**：风吹过平静海面，产生微小扰动，出现毛细波并发展出初始重力波。
2. **成长阶段**：风持续供能，波高、典型波长和周期逐渐增大。
3. **充分成长阶段（fully developed sea）**：风输入能量与破碎等耗散达到统计平衡，固定风况下波浪整体统计特征不再持续增长。
4. **衰减/传播阶段**：风减弱、停止或波浪离开风区，一部分波浪耗散，一部分作为涌浪传播到远处。

![风浪成长过程与充分成长海况](/images/physical-oceanography/lesson12/slide_089.jpg)

![充分成长、破碎及消亡阶段](/images/physical-oceanography/lesson12/slide_090.jpg)

**为什么风区或风时无限增大，波浪也不会无限增高？** 因为风场供给波浪的能量终将与破碎、湍流耗散等损失达到动态平衡。这里的“停止增长”指统计状态稳定，并非每一列单独的波固定不变。

### 8. 波浪破碎：波陡与其他判据

课件介绍了几何判据（波陡）、运动学判据及动力学判据。课堂采用典型上限的**量级判断**：

$$
\frac{H}{L}\lesssim\frac17.
$$

波陡增加意味着波峰越来越尖，超出相应条件下的极限时可能发生破碎。

> **重要前提**：$1/7$ 是常用的理想化深水波破碎经验阈值量级，实际破碎界限受到水深、波形、非线性、海底坡度、风场和局部流场等影响；浅水波不可无条件套用该数。

### 9. 波龄（wave age）

课件用**峰值波的相速度与海面 10 m 风速的比值**表示波龄：

$$
\boxed{A=\frac{c_p}{U_{10}}},
\qquad
c_p=\frac{L_p}{T_p}.
$$

其中下标 $p$ 指谱峰，即能量最显著的波动成分。课堂给出一种用于辨识风浪和涌浪的**经验描述**：波龄随风浪发展趋于增大，约 $0.7$–$0.8$ 可作为充分发展情形的示意数量级，超过约 $1.2$ 常提示涌浪特征。

![波龄、充分成长以及风浪/涌浪区别](/images/physical-oceanography/lesson12/slide_091.jpg)

**为什么波龄较大可能是涌浪？** 当波浪已经离开生浪区，局地风速可能小于波浪的相速度，$c_p/U_{10}$ 就会增大。

> 波龄分界值依赖采用的风速、波谱及经验标准。$c_p/U_{10}>1$ 并不违反物理定律，也不能推出波浪必然不是风生的；实际海况中波可以通过色散传播，且波的相速度并不是风把能量输入波浪时的简单“追赶速度”。若 $U_{10}$ 很小，波龄比值甚至不适合单独分类。

### 10. 有效波高、有效周期与海况等级

**有效波高（significant wave height）**：经典的时域定义 $H_{1/3}$，把观测得到的单个波高从大到小排列，取**最高三分之一波高的算术平均**。

$$
H_{1/3}=\frac{1}{N/3}\sum_{i\in\text{最高 }1/3\text{ 波}}H_i.
$$

课堂说“对应的周期为有效周期”，可理解为选出那些高波后，对其相应周期计算代表值（具体平均定义需与采用的统计标准一致）。另一常用统计量为谱有效波高 $H_{m0}=4\sqrt{m_0}$，在随机海浪理论中会进一步学习；两种量在典型窄带随机海况下接近，但定义不同。

![有效波高和海浪等级的概念](/images/physical-oceanography/lesson12/slide_092.jpg)

课件给出不同浪级（海况级）与波高范围的对照表，辅助描述海面有无白沫、破碎浪、卷浪以及海浪滔天等状态。理解重点是：**用统计波高描述不规则海面整体强弱**，不应只挑其中最大的一个瞬时浪高。

![海况（波级）分级课件对照表](/images/physical-oceanography/lesson12/slide_094.jpg)

### 11. 波浪研究的两类方法

- **理论方法**：从运动方程和自由海面、海底等边界条件出发，在小振幅等假设下求解规则波，得到传播、速度和压力分布的解析关系。
- **统计方法**：处理实际不规则海浪，把海面视为许多不同频率、振幅、相位及方向的波动叠加，用波谱和统计量描述能量分布。

![理论方法与统计方法](/images/physical-oceanography/lesson12/slide_095.jpg)

**衔接**：本节完成海浪的基本概念；后续先研究规则波，再研究随机波谱。

---

## 七、课堂思考题

### 风速 $U_{10}=20\,\mathrm{m\,s^{-1}}$ 持续作用，最大可能的波高和波长是多少？

老师提出此题，并提示可**暂取波龄 $A=c_p/U_{10}=1$**。如果进一步假定**深水重力波的线性色散关系**（该关系将在下一讲正式推导）：

$$
\omega^2=gk,
\qquad
c_p=\frac{\omega}{k}=\sqrt{\frac{gL_p}{2\pi}}.
$$

由波龄为 $1$，得到 $c_p=20\,\mathrm{m\,s^{-1}}$，因此

$$
L_p=\frac{2\pi c_p^2}{g}
\approx\frac{2\pi\times400}{9.81}
\approx256\,\mathrm m.
$$

$$
T_p=\frac{L_p}{c_p}\approx12.8\,\mathrm s.
$$

**对于波高**，若机械地把课堂给出的极限波陡 $H/L\approx1/7$ 当作破碎上界，可得到一个有条件的几何估计：

$$
H_{\mathrm{lim}}\approx\frac{L_p}{7}\approx36.6\,\mathrm m.
$$

但是这个数值**不能理解为在 20 m/s 的风下实际可达到的充分发展有效波高**：它只来自“波龄取 1 + 深水线性色散关系 + 极限波陡”的连锁假设。真实海况还需风输入、破碎耗散、风区、风时和波谱参数化才能确定 $H_s$。课堂尚未给出这些经验系数，所以**仅凭风速无法唯一求得实际最大波高**。

---
## 八、第二次作业：题目及参考解答

> 以下题目按课件“第三—五章作业（第二次）”的原意整理；老师未提供可核查的教材题号，因此以**课堂 PPT 列出的题目**为准。参考答案结合本讲复习和既有方程推导编写，部分内容比课件要求更详细，便于自学。涉及符号正负号时统一采用 $x$ 向东、$y$ 向北、$z$ 向上。

![第二次作业的 7 道题（课件原图）](/images/physical-oceanography/lesson12/slide_023.jpg)

### 题 1：作用于海水微团的力有哪些？简述各力的定义、表达式和特征。

**答：**在地球自转坐标系中，常见的体积力（单位质量意义下的加速度）与表面应力如下。

| 力或作用 | 单位质量的典型表达式 | 物理来源与特征 |
| --- | --- | --- |
| 压强梯度力 | $-\nabla p/\rho$ | 指向低压方向；由邻近水体在微团表面的压力形成，垂向常与重力近似平衡 |
| 重力 | $\mathbf g=-g\mathbf k$ | 地球引力和地球自转离心作用通常合并为有效重力；海水始终受到 |
| 科氏惯性力 | $-2\boldsymbol\Omega\times\mathbf u$ | 自转坐标系中出现；与流速垂直，不直接做功，尺度约 $fU$ |
| 离心惯性力 | $-\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf r)$ | 与转轴距离有关；通常吸收进有效重力/重力位中，不单独重复计算 |
| 黏性与湍流应力 | $\nabla\cdot\boldsymbol\tau/\rho$ | 动量通过分子作用或湍流交换；边界层和湍流混合区较重要 |
| 潮汐等外部引潮作用 | $-\nabla\Phi_T$ | 月球、太阳差异引力的作用；研究潮汐时必须考虑 |

若采用常见的 $f$ 平面及水平速度 $\mathbf u_h=(u,v,0)$，科氏加速度在水平面的分量为

$$
(fv,-fu,0)
$$

（即移至方程右侧时）；在北半球表现为水流运动方向的右偏效应。

**注意表达习惯**：“压强梯度力”与“黏性应力”是水团表面受力的连续介质表示；其除以密度后成为运动方程中的**加速度**，不能直接把单位混用。

### 题 2：写出描述海水运动的控制方程（运动方程）的向量形式，解释每一项的物理意义。

**答：**采用旋转坐标系、有效重力和黏性应力张量的通用形式：

$$
\boxed{
\frac{\partial\mathbf u}{\partial t}
+(\mathbf u\cdot\nabla)\mathbf u
+2\boldsymbol\Omega\times\mathbf u
=-\frac{1}{\rho}\nabla p
+\mathbf g
+\frac{1}{\rho}\nabla\cdot\boldsymbol\tau
-\nabla\Phi_T
}.
$$

- $\partial\mathbf u/\partial t$：**局地加速度**（固定位置速度随时间变化）；
- $(\mathbf u\cdot\nabla)\mathbf u$：**平流加速度/对流加速度**（水团移动进入不同速度区域产生的变化）；
- $2\boldsymbol\Omega\times\mathbf u$：**科氏加速度项**（写在等号左侧）；
- $-\nabla p/\rho$：**压强梯度加速度**；
- $\mathbf g$：**有效重力加速度**；
- $(\nabla\cdot\boldsymbol\tau)/\rho$：**摩擦及应力散度的作用**；
- $-\nabla\Phi_T$：若研究潮汐时可增加的**引潮位梯度项**。

记 $D/Dt=\partial_t+\mathbf u\cdot\nabla$，可以简写为

$$
\frac{D\mathbf u}{Dt}
+2\boldsymbol\Omega\times\mathbf u
=-\frac{1}{\rho}\nabla p+\mathbf g
+\frac{1}{\rho}\nabla\cdot\boldsymbol\tau-\nabla\Phi_T.
$$

课堂要求：**手写答案必须用箭头明确标出矢量**（例如 $\vec{u}$、$\vec{g}$、$\vec\Omega$），避免粗体、普通字体在卷面上难以区分。若题目仅要求基本 N–S 方程，可按课堂约定省略单独列出的潮汐位项。

### 题 3：基于热量守恒，导出海水热传导方程。

**答：**设温度为 $\theta$，定压比热为 $c_p$，热量单位体积含量近似为 $\rho c_p\theta$（以固定参考温度为零点）。考虑固定控制体 $V$，热量变化由**平流输运**和**扩散热通量**造成：

$$
\frac{d}{dt}\iiint_V\rho c_p\theta\,dV
=-\iint_{\partial V}\rho c_p\theta\,\mathbf u\cdot\mathbf n\,dA
-\iint_{\partial V}\mathbf q\cdot\mathbf n\,dA.
$$

这里 $\mathbf n$ 为外法线，$\mathbf q$ 为**热传导通量矢量**，流出控制体的通量取正。若采用傅里叶定律

$$
\mathbf q=-\rho c_p\mathbf K\nabla\theta,
$$

并对右侧应用散度定理，再利用质量守恒

$$
\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf u)=0,
$$

得

$$
\rho c_p\left(\frac{\partial\theta}{\partial t}
+\mathbf u\cdot\nabla\theta\right)
=\nabla\cdot(\rho c_p\mathbf K\nabla\theta).
$$

在 $\rho,c_p,K_h,K_z$ 取常数、忽略内部热源和黏性生热等附加项时：

$$
\boxed{
\frac{\partial\theta}{\partial t}
+u\theta_x+v\theta_y+w\theta_z
=K_h(\theta_{xx}+\theta_{yy})+K_z\theta_{zz}
}.
$$

**物理意义**：左侧是流体质点温度变化率；右侧是水平方向与垂向的热扩散。课堂图将扩散过程与单位面积的热流量 $H_n$ 联系起来；真正要掌握的是“**热储量变化 = 流入流出净热通量**”以及由积分式过渡到微分式的步骤。

![热量守恒积分表达与热传导方程](/images/physical-oceanography/lesson12/slide_026.jpg)

### 题 4：导出自由海面有质量交换的运动学边界条件和温度边界条件。

**答：先定义符号和正方向，再分别推导。**

设自由表面为

$$
F(x,y,z,t)=z-\zeta(x,y,t)=0.
$$

其中 $\zeta$ 为海面高度；$\mathbf u=(u,v,w)$ 为水体流速；$\mathbf C$ 为海面几何界面的移动速度；$\mathbf n$ 为**由水指向空气的外法线**。

#### （1）先推无质量交换的运动学条件

若水质点始终位于界面上，则

$$
\frac{DF}{Dt}=F_t+\mathbf u\cdot\nabla F=0.
$$

由于 $F_t=-\zeta_t$、$\nabla F=(-\zeta_x,-\zeta_y,1)$：

$$
-\zeta_t-u\zeta_x-v\zeta_y+w=0.
$$

因此

$$
\boxed{\zeta_t+u\zeta_x+v\zeta_y=w}\quad(z=\zeta).
$$

#### （2）有蒸发、降水等质量交换

定义 $b$ 为**单位水平面积、单位时间向外损失的水质量**，蒸发 $b>0$，降水 $b<0$；单位 $\mathrm{kg\,m^{-2}\,s^{-1}}$。界面法向质量通量满足

$$
\rho(\mathbf u-\mathbf C)\cdot\mathbf n=b\cos\gamma,
$$

其中 $\cos\gamma=1/\sqrt{1+\zeta_x^2+\zeta_y^2}$ 为海面外法线与竖直方向的夹角余弦。又因为

$$
(\mathbf u-\mathbf C)\cdot\mathbf n
=\frac{w-\zeta_t-u\zeta_x-v\zeta_y}
{\sqrt{1+\zeta_x^2+\zeta_y^2}},
$$

约去公共的 $\cos\gamma$，得到

$$
\boxed{\zeta_t+u\zeta_x+v\zeta_y-w=-\frac b\rho}.
$$

**判号检查**：在水平静水面、$u=v=w=0$ 且蒸发 $b>0$ 时，$\zeta_t=-b/\rho<0$，海面下降，符合直觉。

![自由海面运动学条件（无质量交换）](/images/physical-oceanography/lesson12/slide_031.jpg)

![有质量交换时水体与界面的相对速度、法线方向](/images/physical-oceanography/lesson12/slide_034.jpg)

#### （3）温度边界条件：用热通量守恒写出

令单位面积上的**向海面外侧总热通量**为 $Q_{\rm out}$，水体携带的显热通量与湍流/分子热扩散通量之和满足

$$
\left[\rho c_p\theta(\mathbf u-\mathbf C)
-\rho c_pK_H\nabla\theta\right]\cdot\mathbf n
=q_{\rm out,n}.
$$

若换算到单位水平面积，且 $Q_{\rm out}$ 包括跨界面的相应显热、潜热与辐射收支，可把纯导热/湍流通量的边界条件单独写作

$$
\boxed{-\rho c_pK_H\,\nabla\theta\cdot\mathbf n
=Q_{\rm out,diff}}
$$

其中 $Q_{\rm out,diff}$ 表示扣除随质量交换携带的焓后、由水体内部导热/湍流扩散补给界面的向外热通量；采用小坡度海面 $\mathbf n\approx\mathbf k$ 时

$$
-\rho c_pK_H\frac{\partial\theta}{\partial z}
=Q_{\rm out,diff}.
$$

**特别说明**：课件第 32–36 页详细演示的是**盐量边界条件**，作业原题第 4 题却写的是“温度边界条件”。因此，上面的温度部分依据热量守恒补充，需以课程此前给出的热通量记号与正号约定为准。教材若把净入海热通量记作 $Q_{\rm net}$，则 $Q_{\rm net}=-Q_{\rm out,diff}$（还需明确潜热是否已经计入）。不要直接把两种符号 convention 混写。

#### （4）额外整理：课堂实际演示的盐量边界条件

空气与海水交换的是**淡水**，通常无直接跨界面的盐质量通量。考虑盐的向外平流通量与扩散通量：

$$
\left[\rho S(\mathbf u-\mathbf C)-\rho K_S\nabla S\right]\cdot\mathbf n=0.
$$

利用前面的运动学边界条件，得到

$$
bS\cos\gamma-\rho K_S\nabla S\cdot\mathbf n=0,
$$

$$
\boxed{K_S\nabla S\cdot\mathbf n=\frac{bS}{\rho}\cos\gamma}.
$$

这说明蒸发 $b>0$ 时，海表有趋向增盐的作用，而雨水输入通常有淡化作用。它和温度边界条件一样，都是**守恒通量在海面上的限制条件**。

![课堂详细展示的海面盐量边界条件](/images/physical-oceanography/lesson12/slide_036.jpg)

### 题 5：写出直角坐标系下海水平均流的基本方程组，说明各项意义、与瞬时流的异同，并导出自由海面时间平均盐量边界条件。

**答：**设 $u=\bar u+u'$，对其余变量也作相同分解；在 Boussinesq、不可压缩的简化下：

**连续性方程**：

$$
\boxed{\bar u_x+\bar v_y+\bar w_z=0}.
$$

**水平动量方程（直角坐标分量式）**：

$$
\begin{aligned}
\frac{\partial\bar u}{\partial t}
+\bar u\frac{\partial\bar u}{\partial x}
+\bar v\frac{\partial\bar u}{\partial y}
+\bar w\frac{\partial\bar u}{\partial z}
-f\bar v
&=-\frac1{\rho_0}\frac{\partial\bar p}{\partial x}
+\nu\nabla^2\bar u\\
&\quad-\frac{\partial\overline{u'u'}}{\partial x}
-\frac{\partial\overline{u'v'}}{\partial y}
-\frac{\partial\overline{u'w'}}{\partial z},
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial\bar v}{\partial t}
+\bar u\frac{\partial\bar v}{\partial x}
+\bar v\frac{\partial\bar v}{\partial y}
+\bar w\frac{\partial\bar v}{\partial z}
+f\bar u
&=-\frac1{\rho_0}\frac{\partial\bar p}{\partial y}
+\nu\nabla^2\bar v\\
&\quad-\frac{\partial\overline{u'v'}}{\partial x}
-\frac{\partial\overline{v'v'}}{\partial y}
-\frac{\partial\overline{v'w'}}{\partial z}.
\end{aligned}
$$

**垂向动量方程**（保留垂直加速度的版本）：

$$
\begin{aligned}
\frac{\partial\bar w}{\partial t}
+\bar u\frac{\partial\bar w}{\partial x}
+\bar v\frac{\partial\bar w}{\partial y}
+\bar w\frac{\partial\bar w}{\partial z}
&=-\frac1{\rho_0}\frac{\partial\bar p}{\partial z}
-g+\nu\nabla^2\bar w\\
&\quad-\frac{\partial\overline{u'w'}}{\partial x}
-\frac{\partial\overline{v'w'}}{\partial y}
-\frac{\partial\overline{w'w'}}{\partial z}.
\end{aligned}
$$

这里采用传统近似科氏形式，只保留 $f$ 的垂直分量；如果再采用静压近似，垂向方程可以进一步写作 $\bar p_z=-\bar\rho g$。配合热、盐平均输运方程及状态方程，构成所需方程组：

$$
\frac{D\bar S}{Dt}
=K_h\nabla_h^2\bar S+K_z\bar S_{zz}
-\nabla\cdot\overline{\mathbf u'S'},
$$

$$
\frac{D\bar\theta}{Dt}
=K_h\nabla_h^2\bar\theta+K_z\bar\theta_{zz}
-\nabla\cdot\overline{\mathbf u'\theta'}.
$$

**状态方程**写为 $\bar\rho\approx\rho(\bar\theta,\bar S,\bar p)$，需记得对非线性状态方程严格做平均时可能出现额外脉动相关效应；这里采用课堂常见的平均状态近似。

上面热盐方程的 $K$ 只是示意，它们各自应采用对应的盐、热扩散系数；分子扩散与湍流扩散必须避免重复计算。

**平均流与瞬时流的异同**：

1. 方程仍满足质量、动量和热盐守恒，科氏、压力、重力等项仍存在；
2. 每个被平均变量需在符号上加横线，**横线代表时间平均，箭头代表矢量**；
3. 最大区别是增加了 $-\partial_j\overline{u_i'u_j'}$ 等**雷诺应力散度**以及热、盐湍流通量；
4. 使用梯度扩散近似后，可用 $K_M,K_H,K_S$ 等参数表示原本难以求取的脉动相关量。

![直角坐标系下时间平均运动方程（课件原式）](/images/physical-oceanography/lesson12/slide_039.jpg)

**自由海面平均盐量边界**：瞬时盐通量无穿透条件为

$$
\left[\rho S(\mathbf u-\mathbf C)-\rho K_S\nabla S\right]\cdot\mathbf n=0.
$$

对该条件作时间平均，有

$$
\boxed{
\overline{\left[\rho S(\mathbf u-\mathbf C)
-\rho K_S\nabla S\right]\cdot\mathbf n}=0
}.
$$

这是一般的**守恒形式**。若假设海面坡度很小、$\rho$ 和 $K_S$ 可视为常数、界面移动和湍流相关量可在同一参考面处理，则展开平流盐通量得到

$$
\bar S\,\overline{(\mathbf u-\mathbf C)\cdot\mathbf n}
+\overline{S'(\mathbf u'-\mathbf C')\cdot\mathbf n}
-K_S\nabla\bar S\cdot\mathbf n\approx0.
$$

若进一步忽略上述脉动协方差、设 $\cos\gamma\approx1$，并沿用题 4 的蒸发 $b>0$ 约定，则

$$
\boxed{K_S\frac{\partial\bar S}{\partial z}
\approx\frac{\bar b\,\bar S}{\rho}}.
$$

**注意**：直接将瞬时边界公式中的所有变量加横线，一般会漏掉脉动相关项；严谨推导要先平均**通量**，再说明闭合近似。

### 题 6：简述简化海水方程组的尺度分析思路；简述 Rossby 数与 Ekman 数的定义和物理意义。

**答：**

1. 选择研究现象的典型尺度 $L,D,U,W,T$ 及适当的压力和黏性系数尺度。
2. 对每一个加速度、压力梯度、科氏与黏性项估算量级，例如 $U/T$、$U^2/L$、$fU$、$A_hU/L^2$。
3. 使用不可压缩连续性关系 $W/U\sim D/L$。
4. 以典型科氏加速度 $FU$ 等作参考量，构造无量纲系数 $Ro,Ro_T,E_h,E_z,\delta$。
5. 根据这些系数的大小和研究条件，删去相对小项；同时核对边界层、初始条件及所求现象是否要求保留特殊小项。

核心公式：

$$
\boxed{Ro=\frac{U}{FL}},
\qquad
\boxed{E_h=\frac{A_h}{FL^2}},
\qquad
\boxed{E_z=\frac{A_z}{FD^2}}.
$$

**物理意义**：Rossby 数控制非线性平流相对于旋转效应的大小；Ekman 数控制黏性作用相对于旋转效应的大小。$Ro\ll1$ 常对应较强旋转约束，$E\ll1$ 常对应内部黏性相对弱。

### 题 7：什么是 $f$ 平面、$\beta$ 平面、静力及 Boussinesq 近似？分别分析适用条件。

**答：**

| 近似 | 主要表达式 | 典型适用条件与注意事项 |
| --- | --- | --- |
| $f$ 平面 | $f=f_0$ | 研究区域纬度跨度小、$f$ 的变化不显著；无法表现纬向行星涡度梯度的效应 |
| $\beta$ 平面 | $f=f_0+\beta y$ | 以参考纬度局部展开、区域足够小使高阶项可忽略，同时希望保留 $f$ 的线性纬向变化 |
| 静压/静力 | $p_z=-\rho g$ | 大尺度、低频、纵横比小，垂直加速度和其他垂向非静力项很弱；强对流和快速短波需谨慎 |
| Boussinesq | $\rho\approx\rho_0$，浮力保留 $\rho'$ | 密度相对变化小，密度异常对重力浮力仍然重要；强烈压缩或大密度对比问题需另作检验 |

**考场建议**：每个近似尽量写出“定义公式 + 忽略了什么 + 什么时候有效 + 何种情况不适用”。

---

## 本讲学习自检

学完这份笔记，应能不用翻课件回答：

- 为什么 $Ro=U/(FL)$？它和时变 Rossby 数分别比较什么？
- 何时能从垂向动量方程得到 $p_z=-\rho g$？怎样沿深度积分？
- $f$ 平面与 $\beta$ 平面如何由 $f=2\Omega\sin\varphi$ 推导？
- Boussinesq 近似为什么必须保留浮力中的 $\rho'$？
- 雷诺平均后 $\overline{u'w'}$ 来自哪一步展开？
- 有蒸发/降雨时，为什么自由海面的运动学条件右侧要出现 $-b/\rho$？
- 波高、振幅、波长、周期、波速及波陡分别是什么？
- 为什么当地无风仍可能有涌浪？为什么无限增大风时未必无限增大波高？
- 有效波高 $H_{1/3}$ 具体怎样从一系列观测波高算出？

*记录说明：本稿按课件演示与 2026-10-21 课堂录音整理。机器转写中“罗斯被数”“贝克莱数”“不辞n sq”等分别按课件明确的 Rossby、Péclet、Boussinesq 术语统一；部分课件公式的疑似下标、方向及符号笔误已按方程一致性改正。参考笔记提供的是 Markdown 版式参照（其实际内容为另一门课程），未将其内容混入本课程知识点。*
