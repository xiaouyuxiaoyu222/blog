---
title: Oceanography-Lesson11：基本方程的简化、雷诺平均与波浪动力学概述
published: 2026-10-21
description: "物理海洋学 2026-10-21 课堂笔记：无量纲数、四种近似、简化方程组、雷诺平均、对数边界层、海浪的定义与成长及随机波。"
tags: [物理海洋学]
category: 课程笔记
draft: false
---

## 作业与期中考试提醒（优先阅读）

> **课堂明确事项｜2026-10-21，录音约 23:51—34:10、53:02—56:11。** 本节课讲解并要求完成**第三至第五章作业（第二次）**。老师强调：**期中前共有三次作业**，第三次预计 **10 月 28 日（周三）**布置；**强烈建议 10 月 30 日（周五）前将三次作业完成并交给助教**，便于老师批阅后在 **11 月 2 日（周一）**讲评。**11 月 4 日（周三）期中考试**，老师估计约 **80% 的试题与平时作业密切相关**。这属于老师的课堂预估，并不代表保证原题照搬。
>
> **成绩相关：** 老师表示，**期中考试前交作业，即使晚于 10 月 30 日，分数按同一标准处理**；**期中之后才补交可能被折算扣分**，课堂以“本来可得 100 分，可能只得 60 分”为例，**60% 并非宣布的固定折扣率**。录音机器转写将考试方式记作“B 卷”，发音疑似“闭卷”，**考试是否闭卷仍需向老师或助教确认**。

**第二次作业的七道题（依课堂投影片）：**

1. 作用于海水微团的力有哪些？简述各力的定义、表达式与特征。
2. 写出描述海水运动的**控制方程（运动方程）的向量形式**，解释每一项的物理意义。
3. 基于热量守恒，**推导**海水热传导方程。
4. **推导**自由海面**有质量交换**时的运动学边界条件和温度边界条件。
5. 写出直角坐标系下海水**平均流**的基本方程组，说明各项意义、平均流与瞬时流方程组的异同，并导出自由海面**时间平均盐量**满足的边界条件。
6. 简述简化海水方程组的尺度分析思路，给出 **Rossby 数**与 **Ekman 数**的定义和物理意义。
7. 解释 **$f$ 平面、$\beta$ 平面、静压、Boussinesq 近似**，分别说明有效性条件。

![老师公布的第三至第五章第二次作业题目](/images/physical-oceanography/lesson11/slide_023.jpg)

**老师对作答形式的特别强调：** 第二题必须写**向量式**，手写时应在速度等向量符号上加箭头（例如 $\vec u$），不能只用普通字母假装粗体；第五题必须写出 $x,y,z$ 分量，并明确表示**时间平均**的上横线 $\overline u$。第三、四题要写出**中间推导**，只抄结果不符合要求。作业中的向量箭头与平均号代表完全不同的意思。

---

## 概述

**本讲的知识主线：**

**量纲分析与近似条件** $\longrightarrow$ **简化海水运动方程** $\longrightarrow$ **湍流的雷诺平均与参数化** $\longrightarrow$ **海底边界层** $\longrightarrow$ **把前面的方法用于海浪问题**。

前半节承接第三至第五章，具体覆盖“常用简化方程组”“平均场方程及垂向边界层模型”；后半节正式进入**第六章《波浪动力学》第一节：概述**。本次波浪部分主要建立物理概念、研究动机和问题框架，**线性波控制方程的详细求解、随机波谱分析是老师预告的后续内容**。

### 本讲最值得先掌握的结论

- **Rossby 数 $Ro=U/(fL)$**：衡量平流加速度相对科氏加速度的重要性，$Ro\ll1$ 时平流项可在相应尺度下近似忽略。
- **静压近似 $\partial p/\partial z=-\rho g$**：垂向上主要由压力梯度与重力平衡；不意味着水平速度为零。
- **$f$ 平面 $f=f_0$** 与 **$\beta$ 平面 $f=f_0+\beta y$**：分别忽略、线性保留科氏参数的纬向变化。
- **Boussinesq 近似**：在密度相对变化很小时，以 $\rho_0$ 处理多数惯性与梯度项，保留密度差引起的浮力效应。
- **雷诺平均**：将瞬时量写作平均值加脉动值，非线性平流项的平均会额外产生 $-\partial_j\overline{u_i'u_j'}$；需要湍流闭合。
- **海浪**：课堂主要讨论**风生成的表面重力波**，区分**风浪**和**涌浪**，并以风速、风区、风时、波龄等分析成长过程。

## 目录

- [一、尺度分析与无量纲数复习](#一尺度分析与无量纲数复习)
- [二、四种常用近似](#二四种常用近似)
- [三、常用的几种简化方程组](#三常用的几种简化方程组)
- [四、平均场方程：雷诺平均与湍流闭合](#四平均场方程雷诺平均与湍流闭合)
- [五、垂向边界层模型与对数速度分布](#五垂向边界层模型与对数速度分布)
- [六、第六章波浪动力学：概述](#六第六章波浪动力学概述)
- [七、课堂重点与易错点](#七课堂重点与易错点)
- [八、依据作业的自测清单](#八依据作业的自测清单)

---

## 一、尺度分析与无量纲数复习

### 1.1 为什么要进行尺度分析？

海水动量方程包含：**局地加速度、平流加速度、科氏力、压强梯度力、重力和黏性/湍流摩擦力**。真实海洋的运动跨越厘米到千公里、秒到数年的尺度，无法让每一种过程在每个问题中都同等重要。

尺度分析的逻辑：

1. 为所研究运动选取典型尺度：水平长度 $L$、垂向厚度 $D$、水平速度 $U$、垂向速度 $W$、时间尺度 $T$。
2. 把方程中的每一项估计为具有相同量纲的**特征大小**，例如 $\partial u/\partial t\sim U/T$，$u\partial u/\partial x\sim U^2/L$。
3. 以某个参考项（课堂以**科氏加速度 $fU$**）除遍全式，得到无量纲系数。
4. 判断系数相对于 $1$ 的量级；**明显远小于 $1$ 的项**在满足假设时才能略去。

以包含水平/垂向黏性系数 $A_h,A_v$ 的 $x$ 方向方程为例（暂用 $fU$ 代表科氏项的量级）：

$$
\underbrace{\frac{\partial u}{\partial t}}_{U/T}
+\underbrace{u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}}_{U^2/L}
+\underbrace{w\frac{\partial u}{\partial z}}_{UW/D}
-\underbrace{fv}_{fU}
+\underbrace{\widetilde f w}_{\widetilde f W}
=-\frac1\rho\frac{\partial p}{\partial x}
+A_h\nabla_h^2u+A_v\frac{\partial^2u}{\partial z^2}.
$$

其中 $\widetilde f=2\Omega\cos\varphi$ 为旋转矢量水平分量对应的系数；$f=2\Omega\sin\varphi$ 为常用科氏参数。绝大多数大尺度海洋方程中，$\widetilde fw$ 也可以进一步略去，但需满足垂向速度很小等条件。

![水平动量方程中各项的尺度及 Rossby、Ekman 数定义](/images/physical-oceanography/lesson11/slide_004.jpg)

### 1.2 纵横比 $\delta$


$$
\boxed{\delta=\frac DL},\qquad D=\text{垂向特征尺度},\ L=\text{水平特征尺度}.
$$

例如，研究大洋环流时若选 $D\sim10^3\,\mathrm m$、$L\sim10^6\,\mathrm m$，那么 $\delta\sim10^{-3}\ll1$。这说明研究区域在几何上“很薄”。

**由不可压缩连续方程进一步理解：**


$$
\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}=0
\quad\Longrightarrow\quad\frac UL\sim\frac WD
\quad\Longrightarrow\quad\boxed{\frac WU\sim\frac DL=\delta}.
$$

因此，在该典型尺度估计成立时，$W\sim\delta U$，垂向运动速度通常远小于水平运动速度。**注意：$W\ll U$ 不等于 $w=0$**，垂向速度仍参与物质输运与连续方程。

### 1.3 Rossby 数 $Ro$


$$
\boxed{Ro=\frac{U^2/L}{fU}=\frac{U}{fL}}.
$$

这里严格的尺度比较使用 $|f|$ 的大小；带符号的 $f$ 用于实际动力方程。

- **分子 $U^2/L$**：水平平流加速度的量级（非线性惯性效应）。
- **分母 $fU$**：科氏加速度的量级。
- $Ro\ll1$：科氏项相对平流项重要，可做**小 Rossby 数近似**；是否达到严格地转平衡，还要看**时间变化项、摩擦项**等。
- $Ro\sim1$：两项量级相当，不能忽略惯性。
- $Ro\gg1$：平流惯性主导，常见于旋转效应较弱的短小尺度流动。

**例（尺度判断，辅助理解）：** 取 $U=0.1\,\mathrm{m\,s^{-1}}$、$L=10^6\,\mathrm m$、$|f|=10^{-4}\,\mathrm{s^{-1}}$，则 $Ro=10^{-3}$。换成 $L=10\,\mathrm m$，保持另外两量不变，$Ro=100$。可见“能否略去科氏力”高度依赖研究尺度。

### 1.4 时间 Rossby 数 $Ro_T$

将局地加速度与科氏项相比：


$$
\boxed{Ro_T=\frac{U/T}{fU}=\frac1{fT}}\quad(\text{量级比较取 }|f|).
$$

课堂将其解释为**地转调整特征时间 $1/|f|$ 与运动自身时间尺度 $T$ 的比值**：


$$
Ro_T=\frac{T_{\mathrm{rot}}}{T},\qquad T_{\mathrm{rot}}\sim\frac1{|f|}.
$$

$Ro_T\ll1$ 时，局地加速度相对科氏项较小。**$Ro$ 控制非线性平流，$Ro_T$ 控制局地随时间变化，二者须分开判断。**

### 1.5 水平、垂向 Ekman 数


$$
\boxed{E_h=\frac{A_hU/L^2}{fU}=\frac{A_h}{fL^2}},\qquad
\boxed{E_v=\frac{A_vU/D^2}{fU}=\frac{A_v}{fD^2}}.
$$

实际比较力的大小时，同样使用 $|f|$。$A_h,A_v$ 是在所用模型中对应的黏性或有效涡动黏性系数，分别乘水平、垂向的速度二阶导数。

- 物理含义：**摩擦（黏性）加速度与科氏加速度的量级比**。
- $E\ll1$：相应方向的摩擦相对于旋转效应较弱。
- $E\gtrsim1$：摩擦不可轻易略去；在海气、海底边界层尤其重要。

注意不要仅凭 $A_h$ 与 $A_v$ 的数值比较 $E_h$、$E_v$：它们的分母尺度分别是 $L^2$ 与 $D^2$，实际主次需要整体估计。课堂按给定方程组展示了两者的比较。

![无量纲数小结：纵横比、Rossby、时间 Rossby、Ekman](/images/physical-oceanography/lesson11/slide_006.jpg)

### 1.6 Péclet 数 $Pe$（课堂补充）

从温度方程的**热平流项与热扩散项**比较：


$$
\frac{\partial\theta}{\partial t}+\mathbf u\cdot\nabla\theta
=K_h\nabla_h^2\theta+K_v\frac{\partial^2\theta}{\partial z^2}.
$$

典型量级为 $U\Theta/L$、$W\Theta/D$、$K_h\Theta/L^2$、$K_v\Theta/D^2$；因此


$$
\boxed{Pe_h=\frac{UL}{K_h}},\qquad \boxed{Pe_v=\frac{WD}{K_v}}.
$$

- $Pe\gg1$：平流热输运相对扩散占优势。
- $Pe\ll1$：扩散相对平流占优势。
- **不能把 $Pe\ll1$ 直接理解成温度处处不变**；稳态、边界条件、热源与其它方向的输运都可能决定温度场。

![温度方程的无量纲化及水平、垂向 Péclet 数](/images/physical-oceanography/lesson11/slide_009.jpg)

---

## 二、四种常用近似

### 2.1 静压近似（hydrostatic approximation）

**核心物理图像：** 在典型大尺度、纵横比很小且垂向加速度与相关摩擦项都较弱的海洋运动中，垂向主要是**压力梯度力与重力**平衡。

取 $z$ 轴**向上为正**，垂向动量方程的主要部分写作


$$
\frac{Dw}{Dt}=-\frac1\rho\frac{\partial p}{\partial z}-g+\text{旋转与摩擦修正项}.
$$

在相关项足够小时，得到


$$
0=-\frac1\rho\frac{\partial p}{\partial z}-g
\quad\Longrightarrow\quad\boxed{\frac{\partial p}{\partial z}=-\rho g}.
$$

**为什么有负号？** 因为 $z$ 向上增加时，头顶水柱变短，压力下降。如果把“深度 $h$”定义为**向下为正**，则形式改为 $dp/dh=\rho g$，二者表达相同的物理现象。

海面在 $z=\eta(x,y,t)$，若表面压力为 $p_a$，沿垂向积分：


$$
p(\eta)-p(z)=\int_z^\eta \frac{\partial p}{\partial z'}dz'
=-\int_z^\eta\rho g\,dz'
$$

所以


$$
\boxed{p(x,y,z,t)=p_a(x,y,t)+\int_z^{\eta(x,y,t)}\rho(x,y,z',t)g\,dz'}.
$$

当 $\rho$ 近似常数、$p_a$ 水平一致：


$$
\boxed{p=p_a+\rho g(\eta-z)}.
$$

**进一步联系水平流动：** 固定 $z$ 求水平导数，$p_x=\rho g\eta_x$、$p_y=\rho g\eta_y$。当水平地转平衡也成立时，


$$
-fv=-\frac1\rho p_x,\qquad fu=-\frac1\rho p_y
\quad\Longrightarrow\quad\boxed{u_g=-\frac gf\eta_y,\quad v_g=\frac gf\eta_x}.
$$

这说明**海面的微小坡度可以对应水平方向的压力梯度，并驱动地转流**。上述最后两式另需 $f\neq0$、忽略水平加速度及摩擦等条件；**静压近似本身只处理垂向力平衡**。

![静压近似、压强垂向积分及由海面起伏形成的压强梯度](/images/physical-oceanography/lesson11/slide_011.jpg)

### 2.2 $f$ 平面近似（$f$-plane）

地球自转产生的科氏参数为


$$
\boxed{f=2\Omega\sin\varphi}.
$$

如果研究范围内纬度变化较小，取参考纬度 $\varphi_0$：


$$
\boxed{f\approx f_0=2\Omega\sin\varphi_0=\text{常数}}.
$$

**优点：** 系数恒定，方程求导和求解更容易。**局限：** 无法描述 $f$ 的纬向变化带来的效应。

**课堂例子：** 研究某个纬度附近的小范围海区，$f$ 平面通常可作为第一近似；若研究跨越很大纬度范围的黑潮全程，直接令 $f$ 恒定可能失效。尤其接近赤道时 $f\to0$，以 $1/f$ 为尺度的推导必须谨慎。

![f 平面近似及参考纬度示意](/images/physical-oceanography/lesson11/slide_016.jpg)

### 2.3 $\beta$ 平面近似（$\beta$-plane）：从正弦到线性

**想保留随纬度变化的科氏效应，同时避免直接使用球面三角函数。** 在参考纬度 $\varphi_0$ 附近进行一阶 Taylor 展开：

**第 1 步：** 定义 $f(\varphi)=2\Omega\sin\varphi$。

**第 2 步：** 在 $\varphi_0$ 附近展开：


$$
f(\varphi)\approx f(\varphi_0)+\left.\frac{df}{d\varphi}\right|_{\varphi_0}(\varphi-\varphi_0)
=2\Omega\sin\varphi_0+2\Omega\cos\varphi_0(\varphi-\varphi_0).
$$

**第 3 步：** 在局地直角坐标中，令 $y$ 沿正北方向，$a$ 为地球半径。较小的纬度变化满足（角度必须用**弧度**）


$$
y-y_0\approx a(\varphi-\varphi_0).
$$

**第 4 步：** 代回并整理：


$$
f(y)\approx f_0+\frac{2\Omega\cos\varphi_0}{a}(y-y_0).
$$

定义


$$
\boxed{\beta=\left.\frac{\partial f}{\partial y}\right|_{y_0}=\frac{2\Omega\cos\varphi_0}{a}}.
$$

若把坐标原点取在参考纬度（$y_0=0$），即得


$$
\boxed{f=f_0+\beta y},\qquad \frac{\partial f}{\partial x}=0,\quad\frac{\partial f}{\partial y}=\beta.
$$

**牢记：** $f$ 平面保留 $f_0$，$\beta$ 平面再增加**一阶纬向变化**；它们都属于围绕特定纬度的局地近似，$\beta$ 平面也不能无限制用于全球范围。$\beta$ 的单位为 $\mathrm{m^{-1}s^{-1}}$。

![beta 平面从 Taylor 展开到 f=f0+beta y 的课堂推导](/images/physical-oceanography/lesson11/slide_018.jpg)

### 2.4 Boussinesq 近似：密度变化到底留下了什么？

海水密度写作


$$
\rho=\rho_0+\rho',\qquad \left|\frac{\rho'}{\rho_0}\right|\ll1.
$$

在常规海水运动中，密度变化相对于平均密度通常较小。对于**惯性项、压力梯度中的分母、连续方程等**，可使用常数参考密度 $\rho_0$；但在**重力/浮力作用**中保留密度异常 $\rho'$。

**具体为什么不能把 $\rho'$ 到处都删掉？**

从垂向力项写起，$\rho\mathbf g/\rho_0$ 可分解为：


$$
-\frac{\rho}{\rho_0}g=-\frac{\rho_0+\rho'}{\rho_0}g=-g-\frac{\rho'}{\rho_0}g.
$$

其中 $-g$ 可与参考静压压力场平衡；剩余的异常项


$$
\boxed{b=-g\frac{\rho'}{\rho_0}}
$$

叫做**浮力加速度（buoyancy）**：若 $\rho'<0$（相对环境较轻），则 $b>0$（向上）。若把整个密度差造成的浮力也删去，会丢掉海洋**层结、斜压效应以及很多密度驱动运动**。

因此，一种常见的 Boussinesq 动量方程表达是


$$
\boxed{\frac{D\mathbf u}{Dt}+f\mathbf k\times\mathbf u
=-\frac1{\rho_0}\nabla p'+b\mathbf k+\text{黏性项}}
$$

这里 $p'$ 表示扣除参考静压后的压力。若像课堂课件那样使用**总压力** $p$，则垂向写作


$$
\frac{Dw}{Dt}=-\frac1{\rho_0}\frac{\partial p}{\partial z}-\frac\rho{\rho_0}g+\cdots.
$$

**适用条件：** 密度相对扰动小、非压缩效应适合忽略。跨淡水和盐水的强密度梯度、很强的压缩变化或某些特殊对流问题，需要重新评估近似是否有效。**Boussinesq 近似与静压近似可以同时采用，也可以分别采用。**

![Boussinesq 近似：参考密度与保留浮力项](/images/physical-oceanography/lesson11/slide_019.jpg)

---

## 三、常用的几种简化方程组

### 3.1 读简化方程之前，先明确“哪些项可删”

比较两个方程时，优先观察**动量方程**，再核对连续方程、盐热输运、状态方程是否保留。老师特别提问：

- **平流（advection）/对流/非线性项**：$u u_x+v u_y+w u_z$，由于两个流速量相乘而产生非线性。
- **局地时间变化项**：$\partial_tu$，即便平流可忽略，也可能继续保留。
- **水平、垂向摩擦项**：根据尺度和边界层的重要性分别判断。
- **科氏项**：大尺度通常重要，小尺度且 $Ro\gg1$ 时可能忽略。

> 重要辨析：“大尺度”是给**尺度分析**提供前提；是否能删去具体项，最终仍要比较相关 $Ro,Ro_T,E_h,E_v$ 等大小。不能凭“大尺度”三个字自动删除所有惯性项或所有摩擦项。

### 3.2 大尺度运动方程组

在课堂选用的简化条件下，忽略**非线性平流、相应的摩擦项和垂向加速度**，**保留局地时间变化**及科氏力与水平压力梯度，得到


$$
\boxed{\begin{aligned}
\frac{\partial u}{\partial t}-fv&=-\frac1\rho\frac{\partial p}{\partial x},\\
\frac{\partial v}{\partial t}+fu&=-\frac1\rho\frac{\partial p}{\partial y},\\
0&=-\frac1\rho\frac{\partial p}{\partial z}-g,\\
\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}&=0.
\end{aligned}}
$$

盐热输运与状态方程在这套基本方程中**仍保留**：


$$
\frac{Ds}{Dt}=K_{sh}(s_{xx}+s_{yy})+K_{sv}s_{zz},\quad
\frac{D\theta}{Dt}=K_{\theta h}(\theta_{xx}+\theta_{yy})+K_{\theta v}\theta_{zz},\quad
\rho=\rho(\theta,s,p).
$$

**为什么还保留 $\partial_tu$？** 因为小 $Ro$ 表示**平流**相对科氏效应小，无法单凭这一点推出 $Ro_T\ll1$。如果时间变化也弱，可进一步得到地转平衡。

![课件：大尺度运动方程组，包括动量、连续、盐热输运和状态方程](/images/physical-oceanography/lesson11/slide_041.jpg)

### 3.3 水平运动考虑湍流摩擦的大尺度方程组

课件第二套方程保留上面的大尺度近似，另外**在水平动量方程右侧保留水平/垂向涡动摩擦扩散**：


$$
\begin{aligned}
\partial_tu-fv&=-\rho^{-1}p_x+A_h(u_{xx}+u_{yy})+A_vu_{zz},\\
\partial_tv+fu&=-\rho^{-1}p_y+A_h(v_{xx}+v_{yy})+A_vv_{zz},\\
0&=-\rho^{-1}p_z-g.
\end{aligned}
$$

**容易混淆的点：** “水平运动考虑摩擦”说的是**摩擦力出现在 $u,v$ 两个水平动量方程中**；不意味着其中只能有水平二阶导数。水平动量的摩擦仍可能来自**垂向的剪切 $u_{zz},v_{zz}$**。课堂的第三行**垂向动量方程**则不考虑相应的摩擦修正。

![水平运动考虑湍流摩擦的大尺度方程组](/images/physical-oceanography/lesson11/slide_046.jpg)

### 3.4 小尺度运动方程组

当所研究运动很小、持续时间短、$Ro\gg1$，科氏效应相对惯性小，课件考虑**删除科氏加速度项**，保留局地与平流加速度、压力梯度、重力及黏性作用。例如


$$
\boxed{\begin{aligned}
\partial_tu+u u_x+v u_y+w u_z&=-\rho^{-1}p_x+A_h\nabla_h^2u+A_vu_{zz},\\
\partial_tv+u v_x+v v_y+w v_z&=-\rho^{-1}p_y+A_h\nabla_h^2v+A_vv_{zz},\\
\partial_tw+u w_x+v w_y+w w_z&=-\rho^{-1}p_z-g+A_h\nabla_h^2w+A_vw_{zz}.
\end{aligned}}
$$

课件同时配有连续方程、盐热方程，具体见下图。**小尺度也要区分高 Reynolds 数和低 Reynolds 数**：某些微小尺度下黏性可非常重要；“尺度小”不能自动等价于“层流”或“忽略黏性”。

![小尺度运动方程组与保留的非线性项](/images/physical-oceanography/lesson11/slide_047.jpg)

---
## 四、平均场方程：雷诺平均与湍流闭合

### 4.1 为什么平均流方程比瞬时流方程多了几项？

**现实海洋通常有湍流脉动。** 如果每一个小涡旋都精细求解，计算量十分巨大；很多海洋问题更关心某段时间内**平均的速度、盐度和温度**。于是把任意瞬时量分解为


$$
\boxed{q(\mathbf x,t)=\overline q(\mathbf x,t)+q'(\mathbf x,t)}.
$$

例如


$$
u=\overline u+u',\quad v=\overline v+v',\quad w=\overline w+w',\quad
s=\overline s+s',\quad \theta=\overline\theta+\theta',\quad p=\overline p+p'.
$$

平均符号 $\overline{\;\cdot\;}$ 指所选时间或统计平均；脉动定义使 $\overline{q'}=0$。这里需要平均算子满足通常的雷诺规则，并假定相关空间微分与平均可交换。

**关键：** 虽然 $\overline{u'}=0$、$\overline{v'}=0$，一般却有


$$
\boxed{\overline{u'v'}\neq0,\qquad\overline{u's'}\neq0,\qquad\overline{u'\theta'}\neq0}.
$$

“平均脉动为零”仅表示正负脉动平均抵消；它们的乘积仍可能具有**相关性**，正是这种相关性导致动量和物质的湍流输运。

### 4.2 Boussinesq 近似下的瞬时方程

课堂首先以 Boussinesq 形式列出直角坐标系的瞬时基本方程，再做平均：


$$
\begin{aligned}
\frac{Du}{Dt}-fv+\widetilde f w&=-\frac1{\rho_0}\frac{\partial p}{\partial x}+\mathcal D_u,\\
\frac{Dv}{Dt}+fu&=-\frac1{\rho_0}\frac{\partial p}{\partial y}+\mathcal D_v,\\
\frac{Dw}{Dt}-\widetilde f u&=-\frac1{\rho_0}\frac{\partial p}{\partial z}-\frac\rho{\rho_0}g+\mathcal D_w,\\
\nabla\cdot\mathbf u&=0,\\
\frac{Ds}{Dt}&=K_s\nabla^2s,\qquad \frac{D\theta}{Dt}=K_\theta\nabla^2\theta,\\
\rho&=\rho(\theta,s,p).
\end{aligned}
$$

这里 $\mathcal D_u,\mathcal D_v,\mathcal D_w$ 表示课件中给出的分子黏性/有效扩散项；上式按课件给定的 $f,\widetilde f$ 符号和 $x,y,z$ 坐标约定书写，此处主要关注**时间平均后新增的脉动乘积项**。

![Boussinesq 近似下的瞬时控制方程组](/images/physical-oceanography/lesson11/slide_049.jpg)

### 4.3 重点推导：从 $u\,\partial_xu$ 到雷诺应力项

初次学习最容易困惑：**为什么平均之后，会凭空出现 $\partial_x\overline{u'^2}$ 这样的项？**

以下先对 $u$ 方向的 $x$ 平流分量逐步推导。

**第 1 步：雷诺分解。**


$$
u=\overline u+u'.
$$

**第 2 步：展开原来的乘积。**


$$
u\frac{\partial u}{\partial x}
=(\overline u+u')\left(\frac{\partial\overline u}{\partial x}+\frac{\partial u'}{\partial x}\right).
$$

展开为四项：


$$
=\overline u\frac{\partial\overline u}{\partial x}
+\overline u\frac{\partial u'}{\partial x}
+u'\frac{\partial\overline u}{\partial x}
+u'\frac{\partial u'}{\partial x}.
$$

**第 3 步：时间平均。** 因 $\overline{u'}=0$，中间两项平均为零；剩下


$$
\overline{u\frac{\partial u}{\partial x}}=
\overline u\frac{\partial\overline u}{\partial x}
+\overline{u'\frac{\partial u'}{\partial x}}.
$$

**第 4 步：利用乘积求导规则。**


$$
u'\frac{\partial u'}{\partial x}=\frac12\frac{\partial(u'^2)}{\partial x}
\quad\Longrightarrow\quad
\boxed{\overline{u'\frac{\partial u'}{\partial x}}=\frac12\frac{\partial\overline{u'^2}}{\partial x}}.
$$

不过，**仅看 $x$ 项，还不是最后课件写出的 $\partial_x\overline{u'^2}$**。因为 $u$ 方向还有 $v\partial_yu$、$w\partial_zu$，三项需要**一起使用不可压缩连续方程**整理。

利用


$$
u_j\partial_j u_i=\partial_j(u_i u_j)-u_i\underbrace{\partial_j u_j}_{0},
$$

可将所有平流合成通量散度：


$$
\begin{aligned}
\overline{\mathbf u\cdot\nabla u}
&=\nabla\cdot\overline{u\mathbf u}\\
&=\nabla\cdot\left(\overline u\,\overline{\mathbf u}+\overline{u'\mathbf u'}\right)\\
&=\overline{\mathbf u}\cdot\nabla\overline u
+\frac{\partial\overline{u'u'}}{\partial x}
+\frac{\partial\overline{u'v'}}{\partial y}
+\frac{\partial\overline{u'w'}}{\partial z}.
\end{aligned}
$$

于是，把新增项移到动量方程右侧：


$$
\boxed{\begin{aligned}
\frac{\partial\overline u}{\partial t}
+\overline u\,\overline u_x+\overline v\,\overline u_y+\overline w\,\overline u_z
=&-\frac1{\rho_0}\overline p_x+f\overline v-\widetilde f\overline w+\mathcal D_{\overline u}\\
&-\partial_x\overline{u'^2}-\partial_y\overline{u'v'}-\partial_z\overline{u'w'}.
\end{aligned}}
$$

同理，$v$、$w$ 方程右边分别出现 $-\partial_j\overline{v'u_j'}$ 和 $-\partial_j\overline{w'u_j'}$。其中形如 $-\rho_0\overline{u_i'u_j'}$ 的量称为**雷诺应力（Reynolds stress）**，它表示湍流脉动带来的平均动量输运。

> **读图提醒：** 课件第 50 张的 $v$、$w$ 分量个别压强梯度下标看起来重复写成 $\partial/\partial x$；按直角坐标系各分量的标准写法，应分别是 $\partial p/\partial y$ 和 $\partial p/\partial z$。这属于按方程结构对课件做的校核，请以老师后续最终课件为准。

![课堂逐项列出的雷诺平均动量方程与雷诺应力散度](/images/physical-oceanography/lesson11/slide_050.jpg)

### 4.4 盐、热输运的平均方程：新项是什么？

瞬时盐度方程以通用形式写作


$$
\frac{\partial s}{\partial t}+\mathbf u\cdot\nabla s=K_s\nabla^2s.
$$

对不可压缩流动，使用前面相同的通量形式和平均规则：


$$
\boxed{\frac{\partial\overline s}{\partial t}
+\overline{\mathbf u}\cdot\nabla\overline s
=K_s\nabla^2\overline s
-\nabla\cdot\overline{\mathbf u's'}}.
$$

其中


$$
-\nabla\cdot\overline{\mathbf u's'}
=-\partial_x\overline{u's'}-\partial_y\overline{v's'}-\partial_z\overline{w's'}.
$$

热传导/温度方程同理：


$$
\boxed{\frac{\partial\overline\theta}{\partial t}
+\overline{\mathbf u}\cdot\nabla\overline\theta
=K_\theta\nabla^2\overline\theta
-\nabla\cdot\overline{\mathbf u'\theta'}}.
$$

它们分别表示：**湍流盐通量** $\overline{\mathbf u's'}$ 与 **湍流热通量** $\overline{\mathbf u'\theta'}$ 对平均场的贡献。连续方程仍为


$$
\boxed{\partial_x\overline u+\partial_y\overline v+\partial_z\overline w=0}.
$$

![雷诺平均后的盐量、热量输运方程](/images/physical-oceanography/lesson11/slide_051.jpg)

### 4.5 为什么必须“参数化”雷诺应力？

如果只想求 $\overline u,\overline v,\overline w$，平均之后却出现新的未知量 $\overline{u'^2}$、$\overline{u'v'}$、$\overline{u'w'}$ 等。这就是**湍流闭合问题（closure problem）**。

课堂介绍的**涡动黏性 / 梯度扩散假设**：用平均量梯度来近似难以直接求出的脉动相关项，例如


$$
\boxed{-\overline{u'w'}=A_v\frac{\partial\overline u}{\partial z}},\qquad
\boxed{-\overline{w'\theta'}=K_{\theta v}\frac{\partial\overline\theta}{\partial z}},\qquad
\boxed{-\overline{w's'}=K_{sv}\frac{\partial\overline s}{\partial z}}.
$$

$A$ 是动量涡动黏性系数，$K_s$ 是盐扩散系数，$K_\theta$ 是热扩散系数。课堂还把不同方向写成 $A_{ij},K_{si},K_{\theta i}$，说明湍流混合可能具有**方向差异（各向异性）**。

例如把 $-\overline{u'w'}=A_v\overline u_z$ 代入平均 $u$ 方程中的垂向雷诺应力散度：


$$
-\partial_z\overline{u'w'}=\partial_z\left(A_v\partial_z\overline u\right).
$$

如果 $A_v$ 还是常数，进一步成为


$$
\boxed{-\partial_z\overline{u'w'}=A_v\partial_{zz}\overline u}.
$$

**这一步解释了**：为什么平均流方程里常出现形式类似分子黏性的二阶导数，但采用的是**涡动黏性系数**。需要注意：将每个 $-\overline{u_i'u_j'}$ 一概写成单个梯度乘系数，是课件介绍的**简化闭合**；严格张量形式一般需要考虑对称应变率以及各向同性部分，适用范围受到流动结构限制。

![课件：雷诺应力、湍流盐通量和热通量的梯度参数化](/images/physical-oceanography/lesson11/slide_052.jpg)

![参数化后 Boussinesq 雷诺平均方程的形式](/images/physical-oceanography/lesson11/slide_054.jpg)

### 4.6 平均流和瞬时流究竟哪里相同、哪里不同？

| 比较项 | 瞬时流 | 雷诺平均流 |
|---|---|---|
| 速度、盐度、温度 | $u,s,\theta$ 等瞬时值 | $\overline u,\overline s,\overline\theta$ 等平均值 |
| 连续方程 | $\nabla\cdot\mathbf u=0$ | $\nabla\cdot\overline{\mathbf u}=0$ |
| 平流项 | 速度与瞬时场梯度相乘 | 平均速度与平均场梯度相乘，另有脉动相关输运 |
| 动量方程新增项 | 无“雷诺平均产生的额外项” | $-\partial_j\overline{u_i'u_j'}$ |
| 盐、热方程新增项 | 无平均产生的湍流相关项 | $-\nabla\cdot\overline{\mathbf u's'}$ 与 $-\nabla\cdot\overline{\mathbf u'\theta'}$ |
| 求解困难 | 小尺度波动细节繁多 | 新增未知脉动相关项，需要闭合模型 |

**课堂总结**：在 Boussinesq 近似下完成雷诺平均，最终可得到与前面学习过的、经过适当密度简化后的平均方程**形式一致**的结果。老师强调：**湍流摩擦、盐通量、热通量的参数化思路相似，但各自系数有区别。**

---

## 五、垂向边界层模型与对数速度分布

### 5.1 为什么边界附近的摩擦很重要？

大洋内部，速度梯度有时较缓，摩擦在主导平衡中可忽略；但在海气界面、海底附近，速度会在很短的垂向距离内发生明显改变。因为


$$
\tau\sim\rho A_v\frac{\partial\overline u}{\partial z},
$$

即使 $A_v$ 不大，**很大的垂向速度梯度**仍可能使剪切应力很重要。

课堂介绍**垂向平均场边界层模型**：对于薄边界层，设平均场主要随 $z$ 变化、垂向速度相对较小，即


$$
|\partial_x\overline q|,|\partial_y\overline q|\ll|\partial_z\overline q|,\qquad \overline w\approx0.
$$

在所列的进一步假设下，水平动量方程可写成“水平科氏作用与垂向摩擦”的平衡形式，例如


$$
\partial_t\overline u-f\overline v=\partial_z\left(A_v\partial_z\overline u\right),\quad
\partial_t\overline v+f\overline u=\partial_z\left(A_v\partial_z\overline v\right),
$$

而标量场近似满足


$$
\partial_t\overline s=\partial_z(K_{sv}\partial_z\overline s),\qquad
\partial_t\overline\theta=\partial_z(K_{\theta v}\partial_z\overline\theta).
$$

这里体现的是课件展示的**边界层化简思路**，而非任意海区通用的完整边界层方程；不同风应力、压力梯度、平流与边界条件会改变具体保留项。

![垂向边界层平均场模型：以垂向湍流输运为主](/images/physical-oceanography/lesson11/slide_060.jpg)

### 5.2 对数边界层：从应力假设到速度剖面

在海底边界层，以 $d\ge0$ 表示**距海底的向上距离**，海底粗糙度用 $z_0$ 表示。假设应力在近底某一区间近似不随高度变化：


$$
\boxed{-\overline{u'w'}=u_*^2=A_v\frac{d\overline u}{dd}}.
$$

$u_*$ 称**摩擦速度**，单位仍是 $\mathrm{m\,s^{-1}}$；与实际平均流速 $\overline u$ 不同，其平方对应单位密度的剪切应力。引入混合长度假设：


$$
\boxed{A_v=\ell u_*,\qquad \ell=\kappa(d+z_0)}.
$$

其中 $\kappa$ 是 **von Kármán 常数**（典型约 $0.4$）、$\ell$ 是湍流混合长度。

**第 1 步：** 代入前面的应力关系：


$$
u_*^2=\kappa(d+z_0)u_*\frac{d\overline u}{dd}.
$$

**第 2 步：** 两边约去一个 $u_*$：


$$
\boxed{\frac{d\overline u}{dd}=\frac{u_*}{\kappa(d+z_0)}}.
$$

**第 3 步：** 积分：


$$
\overline u(d)=\frac{u_*}{\kappa}\ln(d+z_0)+C.
$$

此处 $\ln$ 的自变量必须最终写成**无量纲的比值**。以方便的参考边界条件 $\overline u(0)=0$ 为例，常数


$$
C=-\frac{u_*}{\kappa}\ln z_0.
$$

得到


$$
\boxed{\overline u(d)=\frac{u_*}{\kappa}\ln\left(\frac{d+z_0}{z_0}\right)}.
$$

当 $d\gg z_0$，得到常见的**对数速度分布**：


$$
\overline u(d)\approx\frac{u_*}{\kappa}\ln\left(\frac d{z_0}\right).
$$

> **课件书写小提示：** 投影片最后直接给出含 $\ln(|z|+z_0)$ 的关系，省略了积分常数/参考长度。严格写法应如上用比值构成无量纲对数。实际海底存在黏性底层、粗糙元影响及对数层有效高度范围，不能把此关系从海底一直外推到全部水深。

![课堂对数边界层模型、摩擦速度、Karman 常数与近海底速度公式](/images/physical-oceanography/lesson11/slide_061.jpg)

---
## 六、第六章波浪动力学：概述

### 6.1 课程框架与研究目标

老师正式进入**第六章《波浪动力学》**。投影片的章节框架为：

1. **第一节 概述**：为什么研究海浪、海浪基本分类、波浪参数、成长与破碎。
2. **第二节 控制方程与边界条件**：把此前的海水运动方程与海面的边界条件具体应用于波浪。
3. **第三节 小振幅波动理论（线性波动理论）**：在振幅较小的假设下求解。
4. **第四节 有限振幅波动理论简介**：在小振幅近似不足时考虑波的非线性特征。

本节主要是第一节。老师预告下周一（10 月 26 日）讲规则波的求解，下周三（10 月 28 日）介绍随机海浪的统计方法；**课堂安排可能调整，以后续通知为准**。

![第六章《波浪动力学》章节框架](/images/physical-oceanography/lesson11/slide_063.jpg)

### 6.2 海浪是什么？为什么值得研究？

**海浪**是发生在海气界面的海面波动。课堂主要讨论**由风生成、以重力为主要恢复力的表面重力波**。

直观理解：风向海面输送能量，水面被扰动后抬起；重力倾向于使被抬高的水面恢复到平衡状态，水体惯性又使其越过平衡位置，因此形成往复传播的波动。对于更短的毛细波，**表面张力**也会成为重要恢复力，因而“海面所有波动都纯粹由重力恢复”并不成立。

海浪的现实作用主要集中在以下几个方面：

- **海洋上层混合与动力过程**：波浪破碎会卷入气泡、产生湍流，增强上层海水的混合，也会影响波流相互作用。
- **海气之间的质量、动量、能量交换**：风向海浪输入动量；浪花和气泡加速气体与物质交换，对海气热量、水汽以及 CO₂ 通量具有影响。
- **海洋遥感**：海浪改变海面粗糙度，影响雷达和微波散射；小波与破碎形成的白沫也改变电磁散射特征。反过来，部分卫星观测可反演波高与波浪状态。
- **航行与军事应用**：大浪、破碎波影响船舶稳定性、船载设备、海上作业，海面噪声与粗糙度也影响部分声学及雷达应用。
- **海岸工程与防灾减灾**：大浪及破碎波产生冲击荷载，影响海岸、码头、桥梁、海上平台的安全设计。

![海气耦合与海浪在海洋上层过程中的作用](/images/physical-oceanography/lesson11/slide_064.jpg)

**课堂实例与图像：**

- **波浪破碎（breaking）**：原先较为光滑的浪峰卷曲、破碎，形成白沫、浪花和气泡，强化局部湍流。
- **海气交换**：破碎波将水滴抛向空气、把空气卷入水中，增加海气两相的接触与交换。
- **遥感**：白沫/破碎浪与海面粗糙度变化会影响雷达后向散射。
- **2013 年青岛栈桥受浪破坏**：老师用栈桥部分结构受损的照片说明，波浪荷载可以对海岸建筑产生显著破坏。

![破碎波示意：浪峰卷曲与白沫](/images/physical-oceanography/lesson11/slide_065.jpg)

![浪花、气泡参与海气交换的课堂示意](/images/physical-oceanography/lesson11/slide_066.jpg)

![海洋遥感中的表面粗糙度和破碎泡沫](/images/physical-oceanography/lesson11/slide_067.jpg)

![青岛栈桥受海浪冲击的课堂实例照片](/images/physical-oceanography/lesson11/slide_076.jpg)

老师还展示了葛饰北斋的《神奈川冲浪里》（*The Great Wave off Kanagawa*）。观察画面中的**浪峰、浪谷、迎浪面与背浪面、浪峰倒卷和破碎白沫**，便能把抽象的波浪术语与直观图形联系起来。

![《神奈川冲浪里》：观察波峰、卷曲与破碎白沫](/images/physical-oceanography/lesson11/slide_072.jpg)

### 6.3 风浪与涌浪：两个俗语表达了什么？

课堂用“**无风不起浪**”和“**无风三尺浪**”引出两类风生成的海浪。

| 类型 | 风浪（wind sea） | 涌浪（swell） |
|---|---|---|
| 定义 | 处于当地风直接作用下，从风中吸收能量的波浪 | 由先前/远处风场生成，离开发生地，或当地风已减弱、转向后继续传播的波浪 |
| 外观 | 较不规则，常夹杂短波 | 往往较长、较整齐、方向比较集中 |
| 周期与波长 | 通常偏短，但范围有重叠 | 通常偏长，能传播到很远的地方 |
| 能量来源 | 正在从当地风吸收 | 主要来自原生成海域，沿途传播并耗散 |

**举例：** 在某海区吹起强风，风区内生成的波浪叫**风浪**；这些波从原来有风的区域向远处传播，到达某个几乎无风的海岸时，仍可能有大浪，这些就是**涌浪**。因此当地没有风，海面仍能有浪。

课堂用风浪约数秒、涌浪约十秒的数量级作直观比较；**两者不存在只靠某个固定周期就能完全区分的界线**，还要考虑风向、波向、相速与当地风场。

![风浪与涌浪及其波能频谱的位置](/images/physical-oceanography/lesson11/slide_074.jpg)

### 6.4 海洋中的波动有很多种：波浪能谱的观察

课件展示了横轴为波动周期、纵轴为能量（或能量密度）的**海洋波动频谱示意**。不同尺度上有：

- 短周期毛细波：表面张力的作用明显。
- 风浪与涌浪：课堂强调海表波动能量的重要集中区。
- 更长周期的海面与海洋波动，包括某些长波、海啸与潮汐过程。

**理解要点：** 对不同机制和周期的波动，要采用相应动力学描述。课件用能量图强调风浪的重要性；其给出的总能量类比主要用于课堂形象说明，比较时仍需明确统计海域、积分时间及能量定义。

![不同周期海洋波动的能量分布示意](/images/physical-oceanography/lesson11/slide_075.jpg)

### 6.5 波的基本要素：$L,H,a,T,h,c$

老师请同学到黑板画规则正弦波，并标注**波长、波高、振幅、周期、波陡、相速度**。

![波浪要素：相邻波峰、波长、波高、周期等](/images/physical-oceanography/lesson11/slide_078.jpg)

| 记号 | 名称 | 定义 | 单位 |
|---|---|---|---|
| $L$（也写 $\lambda$） | **波长** | 同一时刻，相邻两个波峰（或同位相点）间的水平距离 | m |
| $H$ | **波高** | 相邻波峰到波谷的垂直高度差 | m |
| $a$ | **振幅** | 规则正弦波相对平均水位的最大位移，$H=2a$ | m |
| $T$ | **周期** | 固定位置前后两个同位相状态经历的时间 | s |
| $h$ | **水深** | 平均海面到海底的垂直距离 | m |
| $H/L$ | **波陡** | 波高与波长之比，表示浪的陡峭程度 | 无量纲 |
| $c$ | **相速度** | 相同波相位（如波峰）的传播速度，$c=L/T$ | m/s |

**容易混淆的三个概念：**

1. **波高 $H$ 与振幅 $a$**：对于对称正弦波，$H=2a$；对不对称破碎波不能机械套用。
2. **周期 $T$ 与波长 $L$**：前者是在固定位置**随时间观察**，后者是在固定时刻**沿空间测量**。
3. **相速度 $c$ 与海水流速 $u$**：$c$ 表示**波峰/相位向前传播**的速度，水质点通常有轨道运动，不会整体以 $c$ 一路跟着波峰前进。

**规则波的数学表示：**


$$
\boxed{\eta(x,t)=a\cos(kx-\omega t+\phi)},\quad
k=\frac{2\pi}{L},\ \omega=\frac{2\pi}{T},\ c=\frac\omega k=\frac LT.
$$

这里 $\eta$ 表示相对平均海面的位移，$\phi$ 是初相位，$k$ 为波数，$\omega$ 为角频率。

**关于“波浪三要素”**：课堂进一步提到 $L,T,h$ 作为研究规则波传播的重要量。在线性**表面重力波**、无流且满足通常理想流体假设时，色散关系为


$$
\boxed{\omega^2=gk\tanh(kh)}.
$$

知道水深 $h$ 和周期 $T$，即可通过色散关系求波数 $k$、波长 $L$。但**这些量不能独立确定波高 $H$**；振幅还由风能输入、初始条件与波浪能量等决定。本公式属于理解本讲波浪参数的**理论补充**，详细推导安排在下一讲。

### 6.6 为什么真实海面测到的曲线不像正弦波？

如果只存在单一规则波，固定位置的水位记录应近似表现为等间隔、等幅度的正弦起伏。但课件展示的**实测海面水位时间序列**，波峰高低变化，振幅和周期也经常不规律。

![课堂水位仪记录：真实海面起伏是不规则的](/images/physical-oceanography/lesson11/slide_080.jpg)

**原因是多个波动分量的叠加（superposition）**。用最简单的两个分量说明：


$$
\eta_1=a_1\cos(k_1x-\omega_1t+\phi_1),\qquad
\eta_2=a_2\cos(k_2x-\omega_2t+\phi_2).
$$

在近似线性、可叠加的情况下，


$$
\boxed{\eta=\eta_1+\eta_2}.
$$

**课堂图例可以分成三种：**

1. **同频同相（in phase）**：两个波峰同时出现，振幅相加，形成增强。
2. **同频反相（out of phase）**：波峰与波谷对应，等振幅情况下可以完全抵消。
3. **不同频率、波长和相位**：叠加之后有些时刻增强、有些时刻减弱，形成复杂起伏。

![波的相长、相消与不同波叠加的示意图](/images/physical-oceanography/lesson11/slide_086.jpg)

对**相同频率和波数**的两波，合成振幅可写为


$$
\boxed{A=\sqrt{a_1^2+a_2^2+2a_1a_2\cos(\phi_1-\phi_2)}}.
$$

当 $\Delta\phi=0$，$A=a_1+a_2$；当 $\Delta\phi=\pi$，$A=|a_1-a_2|$。这说明相位关系能够决定波浪是**增强还是抵消**。

**与随机海浪的关系：** 海上风场变化、传播方向和能量分布都十分复杂，波浪可表示为许多不同频率、方向、振幅与随机相位的波分量叠加。接下来研究的随机海浪需要利用**谱分析与统计量**，才能描述其整体特征。

### 6.7 风浪的成长：风速、风区、风时

课堂提出：风浪的**波高、周期、波长**在发展初期通常会随风能输入增加而增大，取决于以下三方面：

**（1）风速 $U_{10}$**：通常使用海面上 **10 m 高度**处的风速衡量当地风强弱。在其他条件相近时，风越强，向波浪输入的能量通常越多。

**（2）风区（fetch）**：状态近似相同的风沿某一方向持续吹过水面的**有效空间距离**。风区越长，波浪沿途被风持续作用的距离越长。

**（3）风时（duration）**：风以近似相同状态在特定海域持续作用的**时间**。风吹的时间短，波浪可能还未充分发展。

课堂举例：

- 在同样风速下，吹 **1 分钟**与吹 **1 小时**，海浪成长程度通常不同。
- **离岸风**从岸边向海上吹，近岸有效风区从海岸开始累计，可能较短；**向岸风**从外海吹向海岸，海面上的有效作用距离常常较长。具体仍取决于海岸几何、风向与风场范围。
- **南大洋西风带**：老师以广阔、较少受大陆阻断的绕极海域说明，长风区可支持较大的涌浪。它是风区影响波高的典型地理例子。

![风区 fetch 和风时 duration 的课堂示意](/images/physical-oceanography/lesson11/slide_088.jpg)

### 6.8 海浪成长的四个阶段

1. **初始阶段**：风作用于平静海面，先形成微小扰动、毛细波和初始重力波。
2. **发展阶段**：风持续向海浪提供能量，波高、波长及典型周期逐渐增大。
3. **充分发展阶段（fully developed sea）**：在给定风条件下，波浪受到的输入、耗散与谱内非线性传递达到近似平衡，统计意义上的海况不再继续明显增长。
4. **衰减与传播阶段**：风减弱或停止后，一部分波浪随耗散而减弱，另一部分以涌浪形式向更远海域传播。

![风浪从初始、发展到充分发展、衰减的课堂图解](/images/physical-oceanography/lesson11/slide_089.jpg)

**老师提出的问题：** 如果风区无限长、风时无限久，风浪能不能无限增长？

**答案：不能简单认为可以无限增长。** 在给定风况下，发展过程中存在能量平衡及破碎耗散，能够达到统计意义上的充分发展状态。这一状态的形成**不意味着每一个波都停止变化**，局部仍有强弱波的起伏。

### 6.9 波浪破碎（breaking）与波陡

波浪变陡到一定程度时，波峰前倾、卷曲，可能发生破碎。课堂介绍三类判断思路：

- **几何判据**：考察波高与波长之比 $H/L$；
- **运动学判据**：关注波峰附近水质点运动与波峰传播之间的关系；
- **动力学判据**：关注流动动力状态何时难以维持稳定波形。

课堂给出的**经典几何极限近似**为


$$
\boxed{\frac HL\lesssim\frac17}.
$$

**使用边界：** 这一近似对应经典极限陡峭波的数量级，主要联系深水周期重力波的理论讨论；**不能用作所有水深、所有随机波浪破碎的统一硬阈值**。浅水浪在近岸破碎时，水深及地形也十分重要。

海浪的完整过程可简要概括为：**生成 → 发展 → 传播 → 破碎/耗散 → 消亡**。

### 6.10 波龄 $\beta$（wave age）：怎样判断风浪成长状态？

实际海上风区和风时难以准确观测，因此课件用**波浪相速相对于当地风速的比值**来表征风浪成长状态。

定义主频（或谱峰）处的相速度：


$$
c_p=\frac{L_p}{T_p}=\frac{\omega_p}{k_p}.
$$

风龄/波龄（本课叫**波龄**）定义为


$$
\boxed{\beta_{\mathrm{age}}=\frac{c_p}{U_{10}}}.
$$

其中 $U_{10}$ 是 10 m 高度的当地风速。$c_p$ 代表谱峰波的**相速度**，而 $U_{10}$ 代表局地风速。

课堂的经验描述：在一些风浪成长状态下，$\beta_{\mathrm{age}}$ 随成长增大；老师提到 **0.7—0.8** 可作为估算时的典型量级，**约 1.2** 用作课件中风浪/涌浪的经验区分。

**直观理解：**

- $c_p/U_{10}$ 较小：谱峰波传播相速相对于当地风较慢，通常表示仍受到当地风显著作用。
- $c_p/U_{10}$ 较大：波峰传播较快，可能来自远处风场，具有涌浪特征。

> **严格性提醒：** $c_p/U_{10}=1.2$ 并非所有海区通用的定义性分界，真实分类还涉及局地风与波传播的夹角及风海—涌浪频谱划分。并且**此处的 $\beta$ 是波龄，和前文 $\beta=\partial f/\partial y$ 的行星涡度梯度完全不同**，两者只是在课件中使用了相同希腊字母。

![波龄 beta=cp/U10 的定义及课堂思考题](/images/physical-oceanography/lesson11/slide_091.jpg)

#### 课堂思考题：$U_{10}=20\,\mathrm{m/s}$，最大波高和波长是多少？

老师提出问题，并提示：**可以先粗略假设 $c_p/U_{10}\approx1$，再利用 $c_p=L_p/T_p$ 推算，但求波高还需要经验关系**。课堂尚未给出完整数值答案，下一节课将继续讨论。

**可先做的理论演算（补充；不是课堂公布的标准答案）：** 假设是**无流的深水线性重力波**，其色散关系可化简为


$$
\omega^2=gk,\quad c_p=\frac\omega k=\sqrt{\frac gk}=\frac{gT_p}{2\pi},\quad L_p=\frac{2\pi c_p^2}{g}.
$$

再假设 $\beta_{\mathrm{age}}=1$、$c_p=U_{10}=20\,\mathrm{m/s}$，则


$$
T_p=\frac{2\pi c_p}{g}\approx12.8\,\mathrm s,\qquad
\boxed{L_p=\frac{2\pi(20)^2}{9.81}\approx256\,\mathrm m}.
$$

**能够得到的是这组假设下的特征波长与周期。** 仅凭 $U_{10}=20\,\mathrm{m/s}$ 无法唯一求出“最大波高”，还需要风区、风时、波能谱或经验成长关系。即便用 $H/L\sim1/7$ 得到约 $37\,\mathrm m$，它也只是特定理想深水极限陡度的形式估计，**不能视为这个风速下真实海况的最大波高**。

### 6.11 有效波高（significant wave height）：为何取“最高三分之一”？

真实海面每个波的波高都不同。因此需要一个**统计量**代表海况。课堂重点介绍：

**有效波高 $H_{1/3}$**：把某一观测记录中的**单个波高**从大到小排列，取**最高三分之一波浪的平均波高**：


$$
\boxed{H_{1/3}=\frac1M\sum_{i=1}^{M}H_{(i)}},\qquad M\approx N/3.
$$

这里 $H_{(1)}\ge H_{(2)}\ge\cdots\ge H_{(N)}$ 为排序后的**单个波高**。与这部分波浪相关的平均周期可定义**有效波周期**，具体统计定义依观测规范而定。

**例（便于理解的示例数据）：** 若量到 9 个单个波高（米）：


$$
1.2,\ 2.0,\ 0.9,\ 1.5,\ 2.4,\ 1.8,\ 0.7,\ 2.1,\ 1.4,
$$

排在最高三分之一的三个是 $2.4,2.1,2.0$，所以


$$
H_{1/3}=\frac{2.4+2.1+2.0}{3}\approx\boxed{2.17\,\mathrm m}.
$$

**关键校核：** 课堂口头讲述在说明叠加之后提到“把正弦波分量按波高排列”，容易引起误解。严格的**时域 $H_{1/3}$**是从记录中识别**单个实际波（如相邻上跨零点间）**、计算单波波高后排序；**不能直接把傅里叶分解出的正弦分量振幅排序充当 $H_{1/3}$**。

随机波理论中，还常用基于能谱零阶矩的


$$
H_{m0}=4\sqrt{m_0}.
$$

在某些波谱假设下，$H_{m0}$ 与 $H_{1/3}$ 接近，但二者的**统计构造不同**。该谱定义属于拓展内容，后续讲随机海浪时再系统掌握。

![有效波高、真实水位记录与海浪统计的课堂示例](/images/physical-oceanography/lesson11/slide_092.jpg)

### 6.12 海况等级与浪级

课件通过表格说明，按典型波高与海面的外观可将海况划分为不同等级：从**无浪、微浪、小浪、中浪**，到带有白沫、浪峰倒卷的大浪与狂浪。等级越高通常伴随更高的波高和更强的海上活动风险。

![课件海况/波级分级表及对应描述](/images/physical-oceanography/lesson11/slide_094.jpg)

**阅读这张表时注意：** 风级与海况级相关，但并非一一固定对应；浪还受风区、风时、涌浪、海底地形等影响。老师通过表格强调**外观描述与量化波高相联系**，具体等级区间按相应标准使用，不能只凭瞬时局地风速认定浪级。

### 6.13 波浪研究的两条路线：理论方法与统计方法

**理论方法（课堂后续的规则波）：**

- 把前面学过的**连续方程、动量方程与自由海面边界条件**用于海浪运动。
- 依据问题做物理近似；例如理想流体、不可压缩、适当的无旋条件、小振幅线性化等。
- 求解规则波，获得波的传播速度、流场及压力变化等关系。

**统计方法（课堂后续的随机海浪）：**

- 实际海面是大量不同波高、周期、方向、相位的波叠加。
- 综合观测资料与波浪理论，通过**波谱分析（wave spectrum）**描述能量随频率和方向的分布。
- 计算有效波高、主周期等能够表征海况的统计量。

![老师对理论方法与统计方法的最终总结](/images/physical-oceanography/lesson11/slide_095.jpg)

两条路线的关系：规则波理论提供波动单元的动力学基础；统计方法用于描述自然海面的复杂与随机性。后续学习时先理解**一个规则波如何运动**，再理解**许多波分量如何构成随机海面**。

---

## 七、课堂重点与易错点

| 容易混淆的概念 | 正确理解 |
|---|---|
| $Ro$ 与 $Ro_T$ | $Ro$ 对应**平流惯性/科氏项**；$Ro_T$ 对应**局地时间项/科氏项** |
| 纵横比 $\delta\ll1$ | 说明水平尺度远大于垂向尺度，在配合连续方程时通常意味着 $W/U\sim\delta$；不能直接推出 $w=0$ |
| 静压近似 | 只直接给出**垂向压力—重力平衡**；水平动力仍需其余方程 |
| $f$ 平面与 $\beta$ 平面 | 前者 $f=f_0$；后者 $f=f_0+\beta y$；都依赖局地适用条件 |
| Boussinesq 近似 | 大多数项以 $\rho_0$ 近似，保留**浮力中的密度异常** |
| 平流项被忽略 | 不能据此把盐热输运、局地时间项全部删掉 |
| 平均 $\overline{u'}=0$ | 不意味着 $\overline{u'v'}=0$；相关脉动量正是雷诺应力来源 |
| 分子黏性 $\nu$ 与湍流涡动黏性 $A_v$ | 物理起源不同；涡动黏性用于平均场的湍流参数化 |
| $\ln(|z|+z_0)$ | 完整的对数律应保留积分常数/参考长度，避免对带单位量直接取对数 |
| 风浪与涌浪 | 以当地风直接输入与波浪来源区分，不能用唯一固定周期阈值替代 |
| 相速度 $c$ 与流速 $u$ | 相位传播速度与水质点运动速度是不同物理量 |
| $\beta$ 平面的 $\beta$ 与波龄 $\beta$ | 前者单位 $\mathrm{m^{-1}s^{-1}}$，后者无量纲，毫无直接定义关系 |
| 有效波高 $H_{1/3}$ | 从**单个实测波高**排序取最高三分之一的平均，不是对傅里叶分量振幅排序 |
| $H/L\approx1/7$ | 特定理想波理论的极限陡度数量级，不是所有海况通用破碎阈值 |

### 本课完整知识链回看

**第三至第五章收尾：** 从受力与控制方程出发，利用尺度分析确定近似；从 $f$/$\beta$ 平面、静压和 Boussinesq 近似得到不同简化方程组；对瞬时流做雷诺平均，出现雷诺应力与湍流盐热通量；再通过涡动黏性和梯度扩散进行参数化，在海洋边界层得到对数速度剖面等模型。

**第六章开端：** 海浪是海气界面重要的动力过程；风浪和涌浪具有不同的局地风能输入背景；规则波以 $L,H,T,a,c$ 等参数描述，随机波需要考虑叠加与统计；成长受风速、风区、风时控制，最终有充分发展和破碎耗散，并用波龄、有效波高描述海况。

---

## 八、依据作业的自测清单

完成本讲学习后，建议不看笔记尝试回答：

- [ ] 我能写出 $Ro,Ro_T,E_h,E_v,Pe_h,Pe_v$，从方程每一项的尺度推回其定义。
- [ ] 我能从 $\partial_zp=-\rho g$ 积分推出海面下任意位置的静压，并解释为什么随深度增大。
- [ ] 我能从 $f=2\Omega\sin\varphi$ 一步步推到 $f=f_0+\beta y$，说明 $y$ 与纬度的关系。
- [ ] 我能明确指出 Boussinesq 近似中**密度扰动保留在哪一项**，以及为什么。
- [ ] 我能针对大尺度、小尺度和考虑水平动量摩擦的大尺度方程，指出具体被删掉的项。
- [ ] 我能从 $u=\overline u+u'$ 推导出平均动量方程的 $-\partial_j\overline{u_i'u_j'}$。
- [ ] 我能解释为何平均盐、热方程多出 $-\nabla\cdot\overline{\mathbf u's'}$ 和 $-\nabla\cdot\overline{\mathbf u'\theta'}$。
- [ ] 我能从 $-\overline{u'w'}=u_*^2=A_v\partial_z\overline u$ 推导对数剖面，并正确写出无量纲的对数自变量。
- [ ] 我能画一张规则波，标清波长、波高、振幅、周期、波陡和相速度。
- [ ] 我能举例解释风浪/涌浪的区别、波的增强/抵消，以及为什么实测海面是随机起伏。
- [ ] 我能解释风速、风区、风时与充分发展的关系，写出波龄 $c_p/U_{10}$、有效波高 $H_{1/3}$ 的定义。
- [ ] 我能准确说出作业中哪些题**必须展示推导过程**，并在向量记号及平均号的使用上不出错。


### 作业题 3、4 的课堂复习补记：怎样展示“推导过程”？

老师在讲作业时再次投出此前章节的部分 PPT，特意强调**热传导方程应从热量守恒推出来**，有质量交换边界条件也应解释中间步骤。

#### 热传导方程：热量守恒 $\rightarrow$ 连续性方程 $\rightarrow$ 温度方程

设单位体积热量 $e=\rho c_p\theta$，海水平流输送的热量通量为 $\rho c_p\theta\mathbf u$，传导热通量为 $\mathbf q=-k\nabla\theta$。在没有额外体热源、并把 $c_p$ 视为常数的简化情况下：

**第 1 步：任意控制体积的热量收支**


$$
\frac{d}{dt}\int_V\rho c_p\theta\,dV
=-\oint_{\partial V}\left(\rho c_p\theta\mathbf u+\mathbf q\right)\cdot\mathbf n\,dA.
$$

**第 2 步：用高斯散度定理把面积分变为体积分**


$$
\int_V\left[\frac{\partial(\rho c_p\theta)}{\partial t}
+\nabla\cdot(\rho c_p\theta\mathbf u)
+\nabla\cdot\mathbf q\right]dV=0.
$$

**第 3 步：因为控制体积任意，所以被积函数为零**


$$
\frac{\partial(\rho c_p\theta)}{\partial t}
+\nabla\cdot(\rho c_p\theta\mathbf u)=\nabla\cdot(k\nabla\theta).
$$

**第 4 步：将左侧乘积按连续性方程展开**


$$
\rho c_p\left(\frac{\partial\theta}{\partial t}+\mathbf u\cdot\nabla\theta\right)
+c_p\theta\underbrace{\left[\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf u)\right]}_{=0}
=\nabla\cdot(k\nabla\theta).
$$

若 $\rho,c_p,k$ 为常数，得到


$$
\boxed{\frac{D\theta}{Dt}=\kappa_T\nabla^2\theta},\qquad
\kappa_T=\frac{k}{\rho c_p}.
$$

这是课堂复习所说的“**热量守恒 + 高斯公式 + 连续性方程消项**”的完整主线。实际海洋还可包含太阳辐射、盐度及压缩等影响；课堂作业基础推导应先说明自己采用了哪些简化。

![老师复习作业时展示的热量守恒积分表达式](/images/physical-oceanography/lesson11/slide_026.jpg)

#### 有质量交换的自由海面运动学条件

令海面位置满足


$$
F(x,y,z,t)=z-\eta(x,y,t)=0.
$$

无质量交换时，海水质点沿自由表面运动，因此 $DF/Dt=0$，展开得到


$$
\boxed{\eta_t+u\eta_x+v\eta_y-w=0}.
$$

有质量交换时，令课件中的 $b$ 为法向淡水质量通量参数（符号方向按课件定义），并使用界面速度 $\mathbf C$ 与海水速度 $\mathbf u$：


$$
 (\mathbf u-\mathbf C)\cdot\mathbf n=\frac b\rho\cos\gamma,
\quad \mathbf n=\frac{\nabla F}{|\nabla F|},\quad
\mathbf C\cdot\mathbf n=-\frac{F_t}{|\nabla F|}.
$$

代入、乘以 $|\nabla F|$，再用 $F_z=1$：


$$
F_t+\mathbf u\cdot\nabla F=\frac b\rho F_z=\frac b\rho.
$$

对 $F=z-\eta$ 展开：


$$
-\eta_t-u\eta_x-v\eta_y+w=\frac b\rho.
$$

最终


$$
\boxed{\eta_t+u\eta_x+v\eta_y-w=-\frac b\rho}.
$$

这里的右端号数与**质量通量 $b$ 的符号约定**直接相关。可用“只有蒸发、没有水平方向运动”作检验：若 $b>0$ 表示**净质量流出海洋**，则 $\eta_t=-b/\rho<0$，海面下降，符合直觉。

![课堂复习：从自由海面函数 F=z-eta 推出有质量交换时的运动学边界条件](/images/physical-oceanography/lesson11/slide_034.jpg)

**有关标量边界条件的资料差异：** 这次作业列表第 4 题的投影片写的是“**温度边界条件**”，而老师在复习时切换的几张演示页详细写的是**盐量边界条件**：盐本身不随纯淡水蒸发/降雨而直接穿越界面，但淡水质量交换会影响海面盐度通量边界条件。老师给出的一个表达是


$$
\boxed{\nabla s\cdot\mathbf n=\frac{bs}{\rho K_s}\cos\gamma}
$$

（课件用 $k_D=k/\rho$ 表示盐扩散系数，正负号依前述通量约定）。

![课堂展示的海面盐量通量边界条件推导](/images/physical-oceanography/lesson11/slide_036.jpg)

**温度边界条件**需要包含界面热通量（传导、感热、潜热、辐射以及伴随质量交换的焓输运等），具体表达取决于热通量符号和参考焓定义。这次课堂投影片与转写在此处**没有完整展示一个明确的温度边界方程推导**，因此不能用上面**盐量边界条件**直接替代作业题 4 的温度条件；建议结合上一讲边界条件课件完成该题，并向助教核对题面。

> **资料与准确性说明：** 笔记根据 2026-10-21 的**100 张课堂截屏式 PPT**及约 **1 小时 37 分**的 Word 录音转写整理。Word 中的转写文字已从 OOXML 正文成功抽取，录音转写共约 **2.5 万字符**；课件中的图示按原始幻灯片编号引用。机器转写对专有名词（Rossby、Boussinesq、Péclet、von Kármán 等）存在误识别，笔记依据课堂上下文和公式纠正。标记为“补充”“校核”“严格性提醒”的段落属于为自学补足的标准理论解释或谨慎修正，**不应视为老师逐字讲述**。第六章后续线性波求解与随机波谱理论尚未在本节展开。
