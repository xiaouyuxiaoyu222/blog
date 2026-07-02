---
title: FluidMechanics—Chapter1：Introduction & Main Properties of Fluids
published: 2026-06-11
description: 绪论、流体建模、惯性、压缩性、黏性、表面张力、饱和蒸气压、作用在流体上的力
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

这两部分的核心链条是：

> 先明确 **流体力学研究什么**，再把真实流体抽象成 **连续介质（continuum）**，随后用密度、压缩性、黏性、表面张力和汽化压强描述流体，最后明确流体所受的质量力与表面力。

后续静水力学、流体运动学和动力学中的方程，都建立在这里的概念和物性参数上。

本笔记按照课件的章节划分：

- **Chapter 0 — Introduction**：流体力学的定义、发展、应用与研究方法
- **Chapter 1 — The Main Properties of Fluids**：流体模型、惯性、压缩性、黏性、表面张力、汽化压强与受力

### 教学范围判断

四份课件和课本第 1、2 章中，没有出现“本节不考”或“明确删除”的标记，因此不建议直接删掉任何课件标题下的知识点。

结合四份历年卷，可以将内容分成两档：

- **高频核心**：连续介质模型、流体质点、密度、体积模量、动力黏度与运动黏度、温度对黏度的影响、牛顿内摩擦定律、牛顿流体与非牛顿流体、质量力与表面力。
- **低频背景**：流体力学史中的人物生平、工程应用举例、课程学习建议。历年卷中几乎没有直接考查，但课件没有明确排除，因此在笔记中压缩保留。

### 本章最重要的五个式子

$$
\rho=\frac{m}{V}
$$

$$
\beta=-\frac{1}{V}\frac{\mathrm dV}{\mathrm dp}
=\frac{1}{\rho}\frac{\mathrm d\rho}{\mathrm dp}
$$

$$
K=\frac{1}{\beta}=-V\frac{\mathrm dp}{\mathrm dV}
=\rho\frac{\mathrm dp}{\mathrm d\rho}
$$

$$
\tau=\mu\frac{\mathrm du}{\mathrm dy}
$$

$$
\nu=\frac{\mu}{\rho}
$$

---

## 目录

- [Part I 笔记](#part-i-笔记)
  - [Chapter 0 Introduction](#chapter-0-introduction)
  - [Chapter 1 The Main Properties of Fluids](#chapter-1-the-main-properties-of-fluids)
    - [Fluid and Its Modeling](#11-fluid-and-its-modeling)
    - [Inertia and Density](#12-inertia-and-density)
    - [Compressibility](#13-compressibility)
    - [Viscosity](#14-viscosity)
    - [Surface Tension](#15-surface-tension)
    - [Vapor Pressure and Cavitation](#16-vapor-pressure-and-cavitation)
    - [Forces Acting on Fluids](#17-forces-acting-on-fluids)
    - [Chapter Summary](#18-chapter-summary)
- [Part II 练习题](#part-ii-练习题)
  - [基础概念题](#一基础概念题)
  - [计算题](#二计算题)
  - [综合辨析题](#三综合辨析题)

---

# Part I 笔记

## Chapter 0 Introduction

### 0.1 Fluid Mechanics 的定义

**流体力学（Fluid Mechanics）** 是研究流体的平衡、运动规律，以及这些规律在工程中的应用的一门力学分支。

从研究状态看，可分为：

- **Hydrostatics（流体静力学）**：研究静止流体的平衡与压强分布。
- **Fluid Dynamics（流体动力学）**：研究流体的运动、受力以及质量、动量和能量之间的关系。

从工程应用看，流体力学与以下领域密切相关：

- 水利与海洋工程：河流、港口、海岸、波浪、管道、明渠
- 土木工程：供排水、桥涵、防洪、地下水与渗流
- 机械与能源工程：泵、风机、涡轮机、内燃机
- 环境与生物流动：污染物输运、血液流动、呼吸流动
- 航空航天与气象：空气动力学、大气运动

> 流体力学关心的是宏观机械运动。分子层面的热运动只在建立物性模型时作为背景。

### 0.2 发展脉络

按课件给出的时间线，可以压缩为三阶段：

1. **经验与早期理论阶段**
   - 阿基米德研究浮体平衡。
   - 中国古代都江堰等工程积累了大量水流控制经验。

2. **经典理论形成阶段**
   - Newton：建立经典力学基础并提出黏性定律思想。
   - Bernoulli、Euler：发展理想流体动力学。
   - Navier、Stokes：建立黏性流体运动方程。
   - Reynolds：区分层流与湍流。
   - Prandtl：提出边界层理论，把理想流动与近壁黏性效应联系起来。

3. **理论、实验与数值并重阶段**
   - 相似理论使模型试验具有可推广性。
   - 计算机发展推动了 **Computational Fluid Dynamics, CFD**。

:::TIP
考试中更重要的是人物对应的核心贡献，例如 Bernoulli—能量关系、Euler—理想流体、Navier–Stokes—黏性流体方程、Reynolds—层流与湍流、Prandtl—边界层。人物生平和工程故事属于低优先级背景。
:::

### 0.3 流体力学的三类研究方法

#### Theoretical Method（理论研究）

从物理定律出发，建立数学模型并求解。

常用守恒关系：

- **质量守恒**

$$
\frac{\mathrm dm}{\mathrm dt}=0
$$

- **动量定理**

$$
\sum \boldsymbol F=\frac{\mathrm d(m\boldsymbol u)}{\mathrm dt}
$$

- **牛顿第二定律**

$$
\sum \boldsymbol F=m\boldsymbol a
$$

- **机械能守恒与能量损失**

$$
\text{动能}+\text{压强能}+\text{位能}+\text{损失}=\text{常量}
$$

理论方法的基本流程：

1. 抽象研究对象；
2. 作出合理假设；
3. 建立控制方程；
4. 给出初始条件和边界条件；
5. 求解并判断结果是否符合物理实际。

#### Experimental Method（实验研究）

实验研究主要包括：

- **Prototype observation（原型观测）**：直接观察真实工程或自然流动。
- **Systematic experiment（系统实验）**：控制变量并研究规律。
- **Model test（模型试验）**：按相似原理缩小或放大原型。

模型试验必须满足相应相似准则。课件在绪论中提前给出了：

$$
Re=\frac{vL}{\nu},\qquad Fr=\frac{v}{\sqrt{gL}}
$$

这里暂时只需知道：

- $Re$ 反映惯性效应与黏性效应的相对强弱；
- $Fr$ 反映惯性效应与重力效应的相对强弱。

详细的量纲分析和相似理论在后续章节学习。

#### Numerical Method（数值研究）

将连续方程离散成有限个代数方程，再用计算机求近似解。

常见方法：

- Finite Difference Method, FDM
- Finite Volume Method, FVM
- Finite Element Method, FEM

数值结果仍需通过理论、实验或工程数据验证。

### 0.4 流动分析中的必要简化

真实流动同时包含大量物理因素。求解前通常需要：

- 判断流体能否近似为不可压缩流体；
- 判断黏性是否必须保留；
- 判断流动是否随时间变化；
- 判断问题可否简化为一维或二维；
- 选取主要作用力，忽略次要作用力。

> 简化成立的关键在于量级判断。假设必须与研究尺度、流速、压强变化和所需精度相匹配。

---

## Chapter 1 The Main Properties of Fluids

## 1.1 Fluid and Its Modeling

### 1.1.1 固体、液体与气体

物质常见三态为 solid、liquid 和 gas。

#### 流体与固体的根本区别

流体的定义：

> **流体是在任意微小剪切力持续作用下都会连续变形的物质。**

固体和流体面对剪切作用时的差别：

- 对弹性固体，在弹性范围内，**剪切应力与剪切变形量**相关；撤去外力后通常可恢复原状。
- 对流体，**剪切应力与剪切变形速率**相关；只要剪切作用存在，流体就持续变形。

因此：

- 静止流体内部没有剪应力；
- 运动流体是否产生剪应力，取决于黏性和速度梯度；
- 流体可以承受压应力，难以在静止状态下持续承受剪应力和拉应力。

> [插图占位] 插入课件《The main properties of fluids》第 6 页“固体与流体受剪变形对比图”，突出“固体看变形量，流体看变形速率”。

#### 液体与气体

相同点：

- 都能流动；
- 都会在剪切作用下持续变形；
- 静止时都没有剪应力。

主要差别：

| 性质 | 液体 | 气体 |
|---|---|---|
| 压缩性 | 通常较小 | 通常较大 |
| 体积 | 在给定状态下近似确定 | 充满容器 |
| 自由表面 | 通常存在 | 通常不存在清晰自由表面 |

### 1.1.2 Continuum Model（连续介质模型）

微观上，流体由分子组成，分子之间存在间隙。宏观流动的特征尺度远大于分子尺度，因此可作连续化处理。

**连续介质模型**：把流体看成连续、无空隙地充满其占据空间的介质，并认为速度、密度、压强等物理量是空间和时间的连续函数：

$$
\boldsymbol u=\boldsymbol u(x,y,z,t),\qquad
\rho=\rho(x,y,z,t),\qquad
p=p(x,y,z,t)
$$

优点：

1. 避开复杂的分子随机运动；
2. 可以使用微积分和微分方程描述流动；
3. 能在宏观尺度上定义某点的密度、速度和压强。

连续介质模型并非对所有尺度都有效。当研究尺度接近分子平均自由程时，需要分子运动论或稀薄气体理论；本课程默认宏观连续介质条件成立。

### 1.1.3 Fluid Particle / Fluid Parcel（流体质点）

流体质点是连续介质中的基本研究单元：

- 相对于整个流场，其几何尺寸足够小，可视为一个点；
- 相对于分子尺度，其体积足够大，包含大量分子；
- 质点内部的物理量可用平均值表示；
- 在运动过程中可发生平移、转动和变形。

:::WARNING
流体质点不等同于单个分子，也不等同于悬浮在流体中的固体颗粒。
:::

### 1.1.4 “点值”的含义

以密度为例，点 $A$ 处密度写为：

$$
\rho_A=\lim_{\Delta V\to \delta V}\frac{\Delta m}{\Delta V}
$$

其中 $\delta V$ 要同时满足：

- 对流场尺度足够小；
- 对分子尺度足够大。

工程教材中常简写为 $\Delta V\to0$，其物理含义仍是“趋近宏观微小体积”，并未真的缩到单分子尺度。

---

## 1.2 Inertia and Density

### 1.2.1 Mass and Inertia（质量与惯性）

质量是物质的基本属性，也是物体保持原运动状态能力的量度。

在非惯性参考系中，为便于列平衡方程，常引入与参考系加速度方向相反的惯性力。

### 1.2.2 Density（密度）

均匀流体：

$$
\rho=\frac{m}{V}
$$

非均匀流体在一点处：

$$
\rho=\lim_{\Delta V\to \delta V}\frac{\Delta m}{\Delta V}
$$

单位：

$$
[\rho]=\mathrm{kg/m^3}
$$

密度一般可写为：

$$
\rho=\rho(x,y,z,t)
$$

水在常温常压下常近似取：

$$
\rho_w\approx1000\ \mathrm{kg/m^3}
$$

### 1.2.3 Specific Weight（重度）

单位体积流体的重量：

$$
\gamma=\rho g
$$

单位：

$$
[\gamma]=\mathrm{N/m^3}
$$

水的重度常近似取：

$$
\gamma_w\approx9.8\times10^3\ \mathrm{N/m^3}
$$

### 1.2.4 Relative Density（相对密度）

液体的相对密度通常定义为：

$$
s=\frac{\rho}{\rho_w}
$$

它是无量纲数。例如油的相对密度为 $0.95$，则：

$$
\rho_{oil}=0.95\rho_w\approx950\ \mathrm{kg/m^3}
$$

---

## 1.3 Compressibility

### 1.3.1 压缩性的定义

流体因压强变化而发生体积或密度变化的性质称为 **compressibility（压缩性）**。

质量不变时：

$$
\mathrm d(\rho V)=0
$$

所以：

$$
\rho\,\mathrm dV+V\,\mathrm d\rho=0
$$

$$
\frac{\mathrm dV}{V}=-\frac{\mathrm d\rho}{\rho}
$$

压强增大时，通常 $\mathrm dV<0$、$\mathrm d\rho>0$。

### 1.3.2 Coefficient of Volume Compressibility

体积压缩系数：

$$
\beta=-\frac{1}{V}\frac{\mathrm dV}{\mathrm dp}
=\frac{1}{\rho}\frac{\mathrm d\rho}{\mathrm dp}
$$

单位：

$$
[\beta]=\mathrm{Pa^{-1}}=\mathrm{m^2/N}
$$

$\beta$ 越大，流体越容易被压缩。

### 1.3.3 Bulk Modulus（体积模量）

体积模量是压缩系数的倒数：

$$
K=\frac{1}{\beta}
=-V\frac{\mathrm dp}{\mathrm dV}
=\rho\frac{\mathrm dp}{\mathrm d\rho}
$$

单位：Pa。

物理意义：

- $K$ 越大，压缩性越小；
- $K\to\infty$ 时，可理想化为不可压缩流体；
- 水的 $K$ 约为 $2.0\times10^9\ \mathrm{Pa}$，油约为 $1.6\times10^9\ \mathrm{Pa}$，具体数值随温度和压强略有变化。

压强变化较小时，可用有限差分近似：

$$
\frac{\Delta V}{V}\approx-\frac{\Delta p}{K}
$$

$$
\frac{\Delta\rho}{\rho}\approx\frac{\Delta p}{K}
$$

:::WARNING
体积减小对应 $\Delta V<0$。计算中最常见的错误是漏掉负号，导致“压强增大、体积也增大”的非物理解。
:::

### 1.3.4 课件例题：水体积减小所需压强

已知 $K=2000\ \mathrm{MPa}$。

若体积减小 $0.1\%$：

$$
\Delta p=-K\frac{\Delta V}{V}
=-2000\times(-0.1\%)=2.0\ \mathrm{MPa}
$$

若体积减小 $1\%$：

$$
\Delta p=20\ \mathrm{MPa}
$$

这说明液体虽然可压缩，但通常需要很大的压强变化才能产生明显体积变化。

### 1.3.5 课件例题：管道漏水量

管长 $l=200\ \mathrm m$，直径 $d=0.4\ \mathrm m$，压强由 $5.39\times10^6\ \mathrm{Pa}$ 降到 $4.90\times10^6\ \mathrm{Pa}$，水的压缩系数为：

$$
\beta=4.83\times10^{-10}\ \mathrm{Pa^{-1}}
$$

管内初始体积：

$$
V=\frac{\pi d^2}{4}l
$$

因压强下降，水体膨胀；膨胀体积等于漏失水量：

$$
\Delta V=-\beta V\Delta p
$$

代入：

$$
\Delta V=5.95\times10^{-3}\ \mathrm{m^3}
$$

一小时平均漏水流量：

$$
Q=\frac{\Delta V}{3600}
=1.65\times10^{-6}\ \mathrm{m^3/s}
$$

### 1.3.6 Thermal Expansion（热膨胀）

在压强近似不变时，体积膨胀系数：

$$
\alpha_V=\frac{1}{V}\frac{\mathrm dV}{\mathrm dT}
=-\frac{1}{\rho}\frac{\mathrm d\rho}{\mathrm dT}
$$

单位：$\mathrm{K^{-1}}$ 或 $\mathrm{^{\circ}C^{-1}}$。

质量守恒给出更精确的有限变化关系：

$$
\rho_1V_1=\rho_2V_2
$$

$$
V_2=V_1\frac{\rho_1}{\rho_2}
$$

:::TIP
课件例题用 $\Delta V/V\approx-\Delta\rho/\rho$ 作一阶近似；当温差较大时，直接使用 $\rho_1V_1=\rho_2V_2$ 更精确。考试若沿用课件数据与方法，应写明所采用的近似。
:::

### 1.3.7 Gas Compressibility（气体压缩性）

理想气体状态方程：

$$
p=\rho RT
$$

其中：

- $p$：绝对压强；
- $T$：绝对温度；
- $R$：气体常数。

气体一般具有明显压缩性。在压强变化相对很小时，也可近似按不可压缩流体处理。

### 1.3.8 Compressible / Incompressible Fluid

- **可压缩流体**：研究过程中密度变化不可忽略。
- **不可压缩流体**：研究过程中密度变化很小，可取 $\rho=\text{const}$。

判断依据取决于具体过程：

- 液体在普通低速、压强变化不大的流动中常按不可压缩处理；
- 水击、爆炸、强压力波等过程中，液体压缩性不能忽略；
- 气体在低速且压强变化很小时可近似不可压缩。

---

## 1.4 Viscosity

### 1.4.1 Internal Friction（内摩擦）

黏性描述运动流体抵抗剪切变形速率的能力。

微观来源：

- 液体：相邻分子层之间的分子吸引作用占主导；
- 气体：分子跨层运动造成的动量交换占主导。

产生黏性剪应力需要同时具备：

1. 流体具有黏性；
2. 相邻流层存在相对运动，即存在速度梯度。

若所有流层速度相同，$\mathrm du/\mathrm dy=0$，即使 $\mu\ne0$，剪应力仍为零。

### 1.4.2 Actual Fluid and Ideal Fluid

- **Actual fluid（实际流体）**：具有黏性，运动时可产生剪应力与机械能损失。
- **Ideal fluid（理想流体）**：假想的无黏流体，$\mu=0$，运动中不产生黏性剪应力。

理想流体模型可用于黏性影响较弱的区域，但近壁面、尾流、边界层和能量损失问题中通常不适用。

### 1.4.3 Dynamic and Kinematic Viscosity

#### Dynamic viscosity（动力黏度）

符号 $\mu$，单位：

$$
[\mu]=\mathrm{Pa\cdot s}=\mathrm{N\cdot s/m^2}
$$

量纲：

$$
[\mu]=ML^{-1}T^{-1}
$$

#### Kinematic viscosity（运动黏度）

$$
\nu=\frac{\mu}{\rho}
$$

单位与量纲：

$$
[\nu]=\mathrm{m^2/s},\qquad [\nu]=L^2T^{-1}
$$

运动黏度同时包含黏性与惯性信息，因此在 Reynolds 数中出现。

水的运动黏度可按课件经验式估算：

$$
\nu=\frac{0.01775\times10^{-4}}
{1+0.0337T+0.000221T^2}\quad(\mathrm{m^2/s})
$$

其中 $T$ 使用摄氏温度。

### 1.4.4 黏度的影响因素

1. **流体种类**：不同流体的分子结构和作用不同。
2. **温度**：主要影响因素。
3. **压强**：普通工程压强范围内常可忽略；高压条件下可能需要考虑。

温度升高时：

- 液体的 $\mu$ 通常减小；
- 气体的 $\mu$ 通常增大。

原因：

- 液体中分子间吸引减弱；
- 气体中分子运动加快，跨层动量交换增强。

### 1.4.5 Newton’s Law of Viscosity

对牛顿流体：

$$
\tau=\mu\frac{\mathrm du}{\mathrm dy}
$$

其中：

- $\tau$：黏性剪应力，单位 Pa；
- $u$：沿流动方向速度；
- $y$：垂直于流层方向坐标；
- $\mathrm du/\mathrm dy$：速度梯度，也表示剪切变形速率。

若只求大小：

$$
|\tau|=\mu\left|\frac{\mathrm du}{\mathrm dy}\right|
$$

剪应力方向始终阻碍相邻流层之间的相对运动。

#### 速度梯度为什么等于角变形速率

相距 $\mathrm dy$ 的两流层速度相差 $\mathrm du$。在时间 $\mathrm dt$ 内，其相对位移为 $\mathrm du\,\mathrm dt$。

小变形时：

$$
\mathrm d\theta\approx\tan(\mathrm d\theta)
=\frac{\mathrm du\,\mathrm dt}{\mathrm dy}
$$

所以：

$$
\frac{\mathrm d\theta}{\mathrm dt}
=\frac{\mathrm du}{\mathrm dy}
$$

因此牛顿内摩擦定律也可写为：

$$
\tau=\mu\frac{\mathrm d\theta}{\mathrm dt}
$$


<img src="https://lazysheep-tuchuang-1345706147.cos.ap-shanghai.myqcloud.com/blog/20260702181902.png" style="width: 420px; max-width: 100%; height: auto; display: block; margin: 0 auto;" />


### 1.4.6 线性速度分布

两平行板间距为 $Y$，下板静止，上板以速度 $U$ 运动。若速度沿 $y$ 线性分布：

$$
u(y)=\frac{U}{Y}y
$$

则：

$$
\frac{\mathrm du}{\mathrm dy}=\frac{U}{Y}
$$

$$
\tau=\mu\frac{U}{Y}
$$

在 $\mu$ 为常量且速度分布为直线时，整个流层中的剪应力为常量。

### 1.4.7 课件例题：两层液体 Couette 流

上板以 $U$ 运动，下板静止。上层厚度 $h_1$、黏度 $\mu_1$；下层厚度 $h_2$、黏度 $\mu_2$。设界面速度为 $u_i$。

上层剪应力：

$$
\tau_1=\mu_1\frac{U-u_i}{h_1}
$$

下层剪应力：

$$
\tau_2=\mu_2\frac{u_i}{h_2}
$$

界面处切向力连续：

$$
\tau_1=\tau_2
$$

所以：

$$
\boxed{u_i=
\frac{\mu_1h_2}{\mu_2h_1+\mu_1h_2}U}
$$

两层速度分布分别为直线：

$$
u_1(y)=u_i+\frac{U-u_i}{h_1}(y-h_2)
$$

$$
u_2(y)=\frac{u_i}{h_2}y
$$

在无压强梯度、稳态、界面无附加切向力条件下，两层剪应力相等且为常量。黏度较大的层速度梯度较小。

<img src="https://lazysheep-tuchuang-1345706147.cos.ap-shanghai.myqcloud.com/blog/20260702190110.png" style="width: 420px; max-width: 100%; height: auto; display: block; margin: 0 auto;" />

### 1.4.8 课件例题：斜面上的木块

木块质量 $m=5\ \mathrm{kg}$，底面积：

$$
A=0.4\times0.45\ \mathrm{m^2}
$$

木块以 $U=1\ \mathrm{m/s}$ 沿斜面匀速下滑，油膜厚度 $\delta=0.1\ \mathrm{mm}$，坡度为 $5:12$。

匀速说明沿坡方向合力为零：

$$
mg\sin\theta=\tau A
$$

线性速度分布：

$$
\tau=\mu\frac{U}{\delta}
$$

因此：

$$
\mu=\frac{mg\sin\theta\,\delta}{AU}
$$

由：

$$
\theta=\arctan\frac{5}{12}=22.62^\circ
$$

得到：

$$
\boxed{\mu\approx1.05\times10^{-2}\ \mathrm{Pa\cdot s}}
$$

### 1.4.9 课件例题：旋转圆盘油膜

圆盘半径 $R=0.05\ \mathrm m$，油膜厚度 $\delta=1.5\ \mathrm{mm}$，转速 $n=50\ \mathrm{r/min}$，克服黏性阻力所需转矩：

$$
M=2.94\times10^{-4}\ \mathrm{N\cdot m}
$$

半径 $r$ 处切向速度：

$$
u=\omega r=2\pi nr
$$

这里 $n$ 必须换成 $\mathrm{s^{-1}}$。

微元环面积：

$$
\mathrm dA=2\pi r\,\mathrm dr
$$

微元剪力：

$$
\mathrm dF=\mu\frac{\omega r}{\delta}\,2\pi r\,\mathrm dr
$$

微元转矩：

$$
\mathrm dM=r\,\mathrm dF
$$

积分得：

$$
M=\int_0^R\frac{2\pi\mu\omega}{\delta}r^3\,\mathrm dr
=\frac{\pi\mu\omega R^4}{2\delta}
=\frac{\pi^2\mu nR^4}{\delta}
$$

所以：

$$
\boxed{\mu=8.58\times10^{-3}\ \mathrm{Pa\cdot s}}
$$

圆盘边缘剪应力最大：

$$
\tau_R=\mu\frac{\omega R}{\delta}
\approx1.50\ \mathrm{Pa}
$$

:::WARNING
旋转圆盘题的三处高频错误：忘记把转速从 r/min 换成 r/s；微元面积少写一个 $r$；转矩中再乘力臂 $r$ 时漏乘。
:::

### 1.4.10 Newtonian and Non-Newtonian Fluids

课件用广义形式表示流变关系：

$$
\tau=\tau_0+\mu\left(\frac{\mathrm du}{\mathrm dy}\right)^n
$$

| 类型 | 条件 | 特征 | 例子 |
|---|---|---|---|
| Ideal fluid | $\mu=0,\tau_0=0$ | 无黏性 | 理想模型 |
| Newtonian fluid | $\tau_0=0,n=1,\mu=\text{const}$ | 过原点的直线 | 水、空气、汽油 |
| Bingham fluid | $\tau_0\ne0,n=1$ | 超过屈服应力后近似线性 | 泥浆、牙膏 |
| Shear-thinning | $\tau_0=0,n<1$ | 表观黏度随剪切速率增大而减小 | 涂料、部分高分子溶液 |
| Shear-thickening | $\tau_0=0,n>1$ | 表观黏度随剪切速率增大而增大 | 浓淀粉悬浮液 |

> [插图占位] 插入课件《Basic Concepts》第 15 页“流变曲线图”，标出 Newtonian、Bingham、shear-thinning、shear-thickening 与 ideal fluid。

:::WARNING
“$\tau$ 与 $\mathrm du/\mathrm dy$ 呈线性关系”仍不足以判定为牛顿流体。Bingham 流体在屈服后也可呈直线，但直线不通过原点。
:::

### 1.4.11 Flow Energy Loss

黏性内摩擦力做功时，流体的机械能不断转化为内能，形成 **flow energy loss（流动能量损失）**。

因此实际流体产生水头损失的根源可概括为：

- 流体具有黏性；
- 流体内部存在相对运动或速度梯度。

课件例题：水从 $h=100\ \mathrm m$ 高处落下，若全部位能转化为水的内能，水的比热容为 $c=4184\ \mathrm{J/(kg\cdot K)}$：

$$
mgh=mc\Delta T
$$

$$
\Delta T=\frac{gh}{c}=0.234\ \mathrm K
$$

实际过程中，能量还会传给空气、地面并产生声能，因此水本身的温升通常更小。

---

## 1.5 Surface Tension

### 1.5.1 Cohesion and Adhesion

- **Cohesion（内聚力）**：同种物质分子之间的吸引力。
- **Adhesion（附着力）**：不同物质接触界面两侧分子之间的吸引力。

液体表面分子受到的分子力不平衡，使液面具有缩小表面积的趋势。

### 1.5.2 Surface Tension

表面张力系数 $\sigma$ 可理解为液面单位长度上的表面张力：

$$
[\sigma]=\mathrm{N/m}
$$

也可理解为增加单位表面积所需的功，单位等价于 $\mathrm{J/m^2}$。

表面张力导致：

- 小液滴趋向球形；
- 液面形成弯月面；
- 毛细上升或下降；
- 小尺度流动中界面效应显著。

### 1.5.3 Capillary Action（毛细现象）

细管插入液体后：

- 润湿液体形成凹形弯月面并上升；
- 不润湿液体形成凸形弯月面并下降。

圆管内毛细高度：

$$
\boxed{h=\frac{2\sigma\cos\theta}{\rho gr}
=\frac{4\sigma\cos\theta}{\rho gd}}
$$

其中：

- $\theta$ 为接触角；
- $r$、$d$ 为管半径和直径；
- $h>0$ 表示上升，$h<0$ 表示下降。

课件常用数据：

- 水：$\theta\approx0^\circ$，$\sigma\approx0.074\ \mathrm{N/m}$；
- 汞：$\theta\approx140^\circ$，$\sigma\approx0.514\ \mathrm{N/m}$。

> [插图占位] 插入课件《Basic Concepts》第 24、26 页“水的凹形弯月面与汞的凸形弯月面”。

### 1.5.4 测压管中的毛细误差

管径越小，$|h|$ 越大。为减小毛细误差，测压管直径通常不小于约 $10\ \mathrm{mm}$。

若读数为 $h_1$，毛细修正量大小为 $h_2$：

- 水在洁净玻璃管中上升：实际压强水头约为 $h_1-h_2$；
- 汞在玻璃管中下降：实际压强水头约为 $h_1+h_2$。

---

## 1.6 Vapor Pressure and Cavitation

### 1.6.1 Vaporization and Condensation

- **Vaporization（汽化）**：液体分子逸出液面进入气相。
- **Condensation（凝结）**：气相分子回到液相。

在封闭空间内，当汽化与凝结达到动态平衡时，蒸气压称为该温度下的 **saturated vapor pressure / vapor pressure（饱和汽化压强）**。

汽化压强随温度升高而增大。

### 1.6.2 Boiling（沸腾）

当液体内部某处的绝对压强降到该温度的汽化压强附近时，液体内部可形成大量蒸气泡。

开放容器中，沸腾条件可近似写为：

$$
p_v(T)=p_{atm}
$$

高原地区大气压较低，水在低于 $100^\circ\mathrm C$ 时即可沸腾，因此食物熟化速度可能降低。加盖或使用压力锅可提高内部压强和沸点。

### 1.6.3 Cavitation（空化）

当流动中局部绝对压强满足：

$$
p_{local}\le p_v(T)
$$

会形成蒸气泡或空穴，这一过程称为空化。

### 1.6.4 Cavitation Erosion（空蚀）

蒸气泡随流体进入较高压区域后迅速溃灭，产生局部冲击波和微射流，可能导致：

- 叶片或管壁点蚀；
- 振动与噪声；
- 效率下降；
- 材料表面持续损伤。

液体不能维持低于汽化压强的稳定完整液相。因此工程上最大真空度受大气压强与汽化压强之差限制：

$$
p_{vac,max}=p_{atm}-p_v
$$

---

## 1.7 Forces Acting on Fluids

### 1.7.1 两种分类方式

按物理性质可分为：

- 重力；
- 惯性力；
- 黏性力；
- 弹性力；
- 表面张力等。

按作用方式可分为：

1. **Mass force / body force（质量力、体积力）**
2. **Surface force（表面力）**

后续列微分方程时，第二种分类更重要。

### 1.7.2 Mass Force

质量力作用于流体内部每个质点，其大小与质量成正比。

单位质量力：

$$
\boldsymbol f=\frac{\boldsymbol F_m}{m}
=f_x\boldsymbol i+f_y\boldsymbol j+f_z\boldsymbol k
$$

单位：

$$
[\boldsymbol f]=\mathrm{N/kg}=\mathrm{m/s^2}
$$

均匀重力场中，若 $z$ 轴竖直向上：

$$
f_x=0,\qquad f_y=0,\qquad f_z=-g
$$

注意：单位质量重力与流体密度无关。水和汞的单位质量重力都等于 $g$。

#### 非惯性参考系中的单位质量力

容器以加速度 $a$ 沿 $+x$ 方向运动时，在容器参考系内引入惯性力：

$$
f_x=-a,\qquad f_y=0,\qquad f_z=-g
$$

容器自由落体时，重力与惯性力抵消，有效单位质量力为：

$$
\boldsymbol f_{eff}=\boldsymbol 0
$$

这为后续“相对平衡液体的压强分布”提供基础。

### 1.7.3 Surface Force and Stress

表面力由相邻流体或固体通过接触面施加，其大小与作用面积相关。

面力强度称为应力，单位 Pa。

#### Pressure（压应力）

垂直于作用面：

$$
p=\lim_{\Delta A\to0}\frac{\Delta P}{\Delta A}
$$

静止流体中仅存在压应力，不存在剪应力。

#### Shear Stress（剪应力）

平行于作用面：

$$
\tau=\lim_{\Delta A\to0}\frac{\Delta T}{\Delta A}
$$

实际流体运动且存在速度梯度时会产生剪应力。

> [插图占位] 插入课件《Basic Concepts》第 33 页“微元表面上的法向压力与切向剪力示意图”。

### 1.7.4 不同流体状态下的受力

| 状态 | 重力/质量力 | 压应力 | 剪应力 | 惯性项 |
|---|---:|---:|---:|---:|
| 静止实际流体 | 有 | 有 | 无 | 无加速度时为零 |
| 运动实际流体 | 可能有 | 有 | 可能有 | 有 |
| 运动理想流体 | 可能有 | 有 | 无 | 有 |

:::TIP
“流体在运动”并不自动保证存在黏性剪应力。若流体作刚体式整体平移、各层速度相同，则速度梯度为零，黏性剪应力为零。
:::


### 1.7.5 几组容易混淆的流体模型

同一种流体可以从不同角度分类，这些分类彼此独立。

#### 连续介质 / 分子模型

这是对研究尺度的选择：

- 宏观尺度采用连续介质模型；
- 尺度接近分子平均自由程时，连续介质假设可能失效。

它并不直接说明流体是否有黏性或是否可压缩。

#### 可压缩 / 不可压缩

这是对研究过程中密度变化的判断：

$$
\rho=\text{const}
$$

表示该问题中密度变化可忽略。它是过程相关近似，同一种水在普通管流中常按不可压缩处理，在水击中要保留压缩性。

#### 实际流体 / 理想流体

这是对黏性的判断：

- 实际流体：$\mu\ne0$；
- 理想流体：$\mu=0$。

不可压缩流体仍然可以有黏性，例如常温水的许多管流计算同时采用“不可压缩、黏性流体”模型。

#### 牛顿流体 / 非牛顿流体

这是对剪应力—剪切速率本构关系的判断：

- 牛顿流体满足 $\tau=\mu\mathrm du/\mathrm dy$，且在给定温压下 $\mu$ 为常量；
- 非牛顿流体的表观黏度随剪切速率或时间变化，或存在屈服应力。

:::TIP
看到一道题时，可依次问四个问题：连续介质是否成立？密度变化能否忽略？黏性是否重要？若保留黏性，流体是否服从牛顿内摩擦定律？这四步决定后续使用哪套方程。
:::

### 1.7.6 从“物性”到“受力”的因果链

本章各节并非彼此孤立，可以连成以下因果关系：

1. **质量与密度**决定同一体积中含有多少质量，也影响惯性、重力和运动黏度。
2. **压缩性**决定压强变化是否会显著改变密度与体积。
3. **黏性**把速度梯度转化为剪应力：

$$
\frac{\mathrm du}{\mathrm dy}
\xrightarrow{\ \mu\ }
\tau
$$

4. 剪应力对流体做负功，使机械能转化为内能，产生流动阻力和能量损失。
5. **表面张力**只在液体界面上表现明显，特征尺度越小，其相对作用通常越突出。
6. **汽化压强**给出了液相保持连续状态的最低压强尺度，局部压强过低会触发空化。
7. **质量力与表面力**最终进入静力平衡方程和流体运动方程。

因此，计算剪应力前必须先确认速度分布；判断压缩性前必须先估计压强变化；判断空化前必须使用绝对压强并知道温度。

### 1.7.7 量纲自检

对本章计算，量纲检查可以迅速发现漏项。

- 牛顿内摩擦定律：

$$
[\mu]\left[\frac{\mathrm du}{\mathrm dy}\right]
=(\mathrm{Pa\cdot s})(\mathrm{s^{-1}})=\mathrm{Pa}
$$

- 体积压缩关系：

$$
\left[\frac{\Delta p}{K}\right]=1
$$

所以它可与 $\Delta V/V$ 相等。

- 毛细高度：

$$
\left[\frac{\sigma}{\rho gr}\right]
=\frac{\mathrm{N/m}}
{(\mathrm{kg/m^3})(\mathrm{m/s^2})(\mathrm m)}
=\mathrm m
$$

- 旋转圆盘转矩：

$$
\left[\frac{\mu\omega R^4}{\delta}\right]
=\mathrm{N\cdot m}
$$

若结果单位无法化为目标物理量的单位，应优先检查长度单位换算、面积或力臂是否漏乘。

---

## 1.8 Chapter Summary

### 1.8.1 概念关系图

```text
真实流体
│
├─ 宏观建模：连续介质 + 流体质点
│
├─ 惯性：质量、密度、重度
│
├─ 压强改变体积：压缩系数 β、体积模量 K
│
├─ 相邻流层相对运动：黏性 μ、ν、剪应力 τ
│
├─ 液气界面：表面张力 σ、毛细现象
│
├─ 液相稳定性：汽化压强、空化、空蚀
│
└─ 受力：质量力 + 表面力
```

### 1.8.2 公式速查表

| 物理量 | 定义 | SI 单位 | 量纲/说明 |
|---|---|---|---|
| 密度 $\rho$ | $m/V$ | kg/m³ | $ML^{-3}$ |
| 重度 $\gamma$ | $\rho g$ | N/m³ | 单位体积重量 |
| 压缩系数 $\beta$ | $-(1/V)\mathrm dV/\mathrm dp$ | Pa⁻¹ | 越大越易压缩 |
| 体积模量 $K$ | $1/\beta$ | Pa | 越大越难压缩 |
| 动力黏度 $\mu$ | $\tau/(\mathrm du/\mathrm dy)$ | Pa·s | $ML^{-1}T^{-1}$ |
| 运动黏度 $\nu$ | $\mu/\rho$ | m²/s | $L^2T^{-1}$ |
| 表面张力 $\sigma$ | 单位长度表面张力 | N/m | 也等价于 J/m² |
| 单位质量力 $\boldsymbol f$ | $\boldsymbol F_m/m$ | m/s² | 与加速度同单位 |

### 1.8.3 高频易错点

1. **流体定义看持续剪切变形**，不能只写“能流动”。
2. **流体质点包含大量分子**，同时在宏观上足够小。
3. **$K$ 与压缩性反向变化**：$K$ 大，压缩性小。
4. **动力黏度与运动黏度不能混用**：$\nu=\mu/\rho$。
5. **液体与气体的黏度随温度变化方向相反**。
6. **牛顿内摩擦定律中的梯度方向必须垂直于流动层**。
7. **剪应力方向阻碍相对运动**，公式正负号取决于坐标约定。
8. **两种液体界面处速度连续、剪应力连续**，除非界面存在额外切向作用。
9. **毛细高度与管径成反比**，细管误差更大。
10. **空化判断使用绝对压强**，局部压强降到汽化压强附近时产生。
11. **质量力按单位质量计量后与密度无关**，重力场中均为 $g$。
12. **实际流体运动不一定有剪应力**，还需要速度梯度。

### 1.8.4 历年卷考查特点

四份历年卷对本章的考查以短题为主：

- 填空：$\mu$、$\nu$ 的单位与量纲，体积模量，黏性的微观来源；
- 判断/选择：温度对液体和气体黏度的影响，牛顿流体判据，连续介质模型；
- 简答：为什么采用连续介质模型，速度分布与剪应力分布；
- 计算：体积模量、平板油膜、两层流体剪切、旋转圆盘黏性转矩。

绪论中的历史细节在四份卷中没有形成稳定题型，复习时以人物—贡献对应关系为主。


### 1.8.5 英文术语速记

本课程以英文授课，建议直接记住下列对应关系：

| English | 中文 | 关键词 |
|---|---|---|
| continuum model | 连续介质模型 | 物理量可视为连续函数 |
| fluid particle / parcel | 流体质点 | 宏观小、微观大 |
| density | 密度 | 单位体积质量 |
| compressibility | 压缩性 | 压强改变体积或密度 |
| bulk modulus | 体积模量 | 越大越难压缩 |
| dynamic viscosity | 动力黏度 | $\mu$，Pa·s |
| kinematic viscosity | 运动黏度 | $\nu=\mu/\rho$ |
| shear stress | 剪应力 | 平行于作用面 |
| surface tension | 表面张力 | 液面缩小趋势 |
| vapor pressure | 汽化压强 | 随温度升高而增大 |
| cavitation / erosion | 空化 / 空蚀 | 低压成泡、高压溃灭 |
| mass force | 质量力 | 作用于每个流体质点 |
| surface force | 表面力 | 通过接触面传递 |

做英文题时，先圈出 `per unit volume`、`per unit mass`、`absolute pressure`、`velocity gradient` 等限定词，它们往往决定公式与单位。

---

# Part II 练习题

> 题目来源说明：本部分混合使用历年卷原题、课件例题、课本例题/习题改编和少量综合题。历年卷原题只占少数，用于呈现考试语言和难度；其余题目用于补齐知识覆盖。

## 一、基础概念题

### 题 1：流体的定义与静止条件【课本概念题】

说明流体与固体在剪切作用下的根本差别，并判断：“静止流体内部可以存在持续剪应力”是否正确。

#### 解答

固体在弹性范围内，剪切应力主要与剪切变形量相关；流体的剪切应力与剪切变形速率相关。任意微小剪切作用持续存在时，流体会持续变形。

静止流体中：

$$
\frac{\mathrm du}{\mathrm dy}=0
$$

对牛顿流体：

$$
\tau=\mu\frac{\mathrm du}{\mathrm dy}=0
$$

因此该说法错误。静止流体只能承受法向压应力。

---

### 题 2：连续介质模型【历年卷 23–24 简答题】

什么是连续介质模型？为什么流体力学中要采用这一模型？

#### 解答

连续介质模型把流体视为连续、无空隙地充满其占据空间的介质，并认为 $u$、$p$、$\rho$ 等物理量是空间和时间的连续函数。

采用该模型的原因：

1. 宏观流动尺度远大于分子尺度；
2. 一个宏观微小体积中仍包含大量分子，平均物理量稳定；
3. 可使用微积分、微分方程和连续函数理论研究流动；
4. 避免逐个追踪分子的巨大复杂性。

---

### 题 3：流体质点【课件选择题改编】

下列关于流体质点的说法正确的是：

A. 流体中的单个分子  
B. 流体中的固体杂质颗粒  
C. 完全没有体积的纯几何点  
D. 相对流场足够小、同时包含大量分子的宏观微小流体团

#### 解答

答案：**D**。

流体质点在宏观上可视为一点，但仍含大量分子，因而具有可定义的平均密度、速度和压强。

---

### 题 4：黏度随温度的变化【历年卷 24–25 选择题】

温度升高时，液体黏度如何变化？气体黏度如何变化？说明原因。

#### 解答

- 液体黏度通常减小；
- 气体黏度通常增大。

液体黏性主要来自分子间吸引。温度升高后分子间距增大、吸引作用减弱。气体黏性主要来自分子跨层动量交换，温度升高后分子运动加快，动量交换增强。

---

### 题 5：黏性的微观来源【历年卷 21–22 填空题】

流体黏性由哪两种微观机制引起？

#### 解答

由：

1. 分子间的吸引作用；
2. 分子热运动造成的层间动量交换。

液体中前者更重要，气体中后者更重要。

---

### 题 6：$\mu$ 与 $\nu$【历年卷 23–24 填空题】

写出动力黏度 $\mu$ 和运动黏度 $\nu$ 的 SI 单位、量纲及二者关系。

#### 解答

$$
\nu=\frac{\mu}{\rho}
$$

动力黏度：

$$
[\mu]=\mathrm{Pa\cdot s}=\mathrm{N\cdot s/m^2}
$$

$$
\dim\mu=ML^{-1}T^{-1}
$$

运动黏度：

$$
[\nu]=\mathrm{m^2/s}
$$

$$
\dim\nu=L^2T^{-1}
$$

---

### 题 7：Newtonian 与 Bingham【课件辨析题】

判断：“若 $\tau$ 与 $\mathrm du/\mathrm dy$ 呈线性关系，该流体一定是牛顿流体。”

#### 解答

错误。

牛顿流体满足：

$$
\tau=\mu\frac{\mathrm du}{\mathrm dy}
$$

其直线通过原点。Bingham 流体屈服后满足近似线性关系：

$$
\tau=\tau_0+\mu\frac{\mathrm du}{\mathrm dy}
$$

由于 $\tau_0\ne0$，直线不通过原点。因此还需检查是否存在屈服应力和截距。

---

### 题 8：不同状态下的受力【课件综合题】

分别列出以下流体可能受到的主要力：

1. 静止实际流体；
2. 运动实际流体；
3. 运动理想流体。

#### 解答

1. 静止实际流体：质量力和压应力；无黏性剪应力，无加速度时没有惯性项。
2. 运动实际流体：质量力、压应力、黏性剪应力和惯性效应。
3. 运动理想流体：质量力、压应力和惯性效应；无黏性剪应力。

---

## 二、计算题

### 题 9：密度、质量与重量【课本习题 2-1 改编】

某油液密度为 $808\ \mathrm{kg/m^3}$，体积为 $2.0\times10^{-3}\ \mathrm{m^3}$。求其质量和重量，取 $g=9.8\ \mathrm{m/s^2}$。

#### 解答

质量：

$$
m=\rho V=808\times2.0\times10^{-3}=1.616\ \mathrm{kg}
$$

重量：

$$
G=mg=1.616\times9.8=15.84\ \mathrm N
$$

$$
\boxed{m=1.616\ \mathrm{kg},\qquad G=15.84\ \mathrm N}
$$

---

### 题 10：由体积变化求体积模量【历年卷 21–22 原题】

某液体压强由 $1.0\times10^6\ \mathrm{Pa}$ 增加到 $2.0\times10^6\ \mathrm{Pa}$，体积由 $1000\ \mathrm{cm^3}$ 减少到 $995\ \mathrm{cm^3}$。求体积模量 $K$。

#### 解答

$$
\Delta p=1.0\times10^6\ \mathrm{Pa}
$$

$$
\frac{\Delta V}{V}
=\frac{995-1000}{1000}=-0.005
$$

$$
K=-\frac{\Delta p}{\Delta V/V}
=-\frac{1.0\times10^6}{-0.005}
=2.0\times10^8\ \mathrm{Pa}
$$

$$
\boxed{K=2.0\times10^8\ \mathrm{Pa}}
$$

---

### 题 11：压缩水体【课件例题】

水的体积模量为 $K=2000\ \mathrm{MPa}$。分别求使水体积减小 $0.1\%$ 和 $1\%$ 所需增加的压强。

#### 解答

$$
\Delta p=-K\frac{\Delta V}{V}
$$

体积减小 $0.1\%$：

$$
\Delta p=-2000\times(-0.001)=2.0\ \mathrm{MPa}
$$

体积减小 $1\%$：

$$
\Delta p=-2000\times(-0.01)=20\ \mathrm{MPa}
$$

$$
\boxed{\Delta p_{0.1\%}=2.0\ \mathrm{MPa},\quad
\Delta p_{1\%}=20\ \mathrm{MPa}}
$$

---

### 题 12：管道压力下降与漏水量【课件例题】

一封闭水管长 $200\ \mathrm m$，直径 $0.4\ \mathrm m$。一小时内压强由 $5.39\ \mathrm{MPa}$ 降至 $4.90\ \mathrm{MPa}$。水的压缩系数为 $4.83\times10^{-10}\ \mathrm{Pa^{-1}}$。忽略管壁变形，求平均漏水流量。

#### 解答

管内容积：

$$
V=\frac{\pi d^2}{4}l
=\frac{\pi(0.4)^2}{4}\times200
=25.133\ \mathrm{m^3}
$$

压强变化：

$$
\Delta p=4.90\times10^6-5.39\times10^6
=-4.9\times10^5\ \mathrm{Pa}
$$

水的膨胀量：

$$
\Delta V=-\beta V\Delta p
$$

$$
\Delta V
=-4.83\times10^{-10}\times25.133\times(-4.9\times10^5)
=5.95\times10^{-3}\ \mathrm{m^3}
$$

平均流量：

$$
Q=\frac{\Delta V}{3600}
=1.65\times10^{-6}\ \mathrm{m^3/s}
$$

$$
\boxed{Q=1.65\times10^{-6}\ \mathrm{m^3/s}}
$$

---

### 题 13：温度变化导致的体积变化【课件例题深化】

$20^\circ\mathrm C$ 时有 $2.5\ \mathrm{m^3}$ 水，密度为 $998.23\ \mathrm{kg/m^3}$；升温到 $80^\circ\mathrm C$ 后密度为 $971.83\ \mathrm{kg/m^3}$。求最终体积和体积增量。

#### 解答

质量守恒：

$$
\rho_1V_1=\rho_2V_2
$$

$$
V_2=V_1\frac{\rho_1}{\rho_2}
=2.5\times\frac{998.23}{971.83}
=2.5679\ \mathrm{m^3}
$$

$$
\Delta V=V_2-V_1=0.0679\ \mathrm{m^3}
$$

相对增量：

$$
\frac{\Delta V}{V_1}\times100\%
=2.72\%
$$

$$
\boxed{V_2=2.5679\ \mathrm{m^3},\quad
\Delta V=0.0679\ \mathrm{m^3}}
$$

课件用一阶近似 $\Delta V/V\approx-\Delta\rho/\rho_1$ 得到约 $0.0661\ \mathrm{m^3}$。两者差异来自有限温差下的一阶近似误差。

---

### 题 14：两层流体界面速度【课件例题改编】

上板速度 $U=0.30\ \mathrm{m/s}$，下板静止。上层液体 $\mu_1=0.8\ \mathrm{Pa\cdot s}$、$h_1=4\ \mathrm{mm}$；下层液体 $\mu_2=0.2\ \mathrm{Pa\cdot s}$、$h_2=6\ \mathrm{mm}$。求界面速度和剪应力。

#### 解答

界面速度：

$$
u_i=\frac{\mu_1h_2}{\mu_2h_1+\mu_1h_2}U
$$

$$
u_i=
\frac{0.8\times0.006}
{0.2\times0.004+0.8\times0.006}
\times0.30
=0.2571\ \mathrm{m/s}
$$

剪应力：

$$
\tau=\mu_2\frac{u_i}{h_2}
=0.2\times\frac{0.2571}{0.006}
=8.57\ \mathrm{Pa}
$$

用上层验证：

$$
\tau=0.8\times\frac{0.30-0.2571}{0.004}
=8.58\ \mathrm{Pa}
$$

$$
\boxed{u_i\approx0.257\ \mathrm{m/s},\qquad \tau\approx8.57\ \mathrm{Pa}}
$$

---

### 题 15：移动薄板上下剪力相等的位置【历年卷 23–24 计算题改编】

一薄板以速度 $U$ 在上下两固定平板之间运动。薄板上方液体黏度为 $\mu_1$、间隙为 $h_1$；下方液体黏度为 $\mu_2$、间隙为 $h_2$。总间距 $H=h_1+h_2$。求上下黏性剪力大小相等时薄板位置。

#### 解答

单位面积上方剪应力：

$$
\tau_1=\mu_1\frac{U}{h_1}
$$

单位面积下方剪应力：

$$
\tau_2=\mu_2\frac{U}{h_2}
$$

令 $\tau_1=\tau_2$：

$$
\frac{\mu_1}{h_1}=\frac{\mu_2}{h_2}
$$

$$
\frac{h_1}{h_2}=\frac{\mu_1}{\mu_2}
$$

结合 $h_1+h_2=H$：

$$
\boxed{h_1=\frac{\mu_1}{\mu_1+\mu_2}H}
$$

$$
\boxed{h_2=\frac{\mu_2}{\mu_1+\mu_2}H}
$$

黏度较大的一侧需要更大的间隙，才能使速度梯度降低到剪应力相等。

---

### 题 16：斜面油膜黏度【课件与课本例题】

质量 $5\ \mathrm{kg}$ 的木块沿斜面以 $1\ \mathrm{m/s}$ 匀速下滑，底面积为 $0.4\times0.45\ \mathrm{m^2}$，油膜厚度为 $0.1\ \mathrm{mm}$，坡度为 $5:12$。求油的动力黏度。

#### 解答

$$
\sin\theta=\frac{5}{13}
$$

匀速条件：

$$
mg\sin\theta=\tau A
$$

$$
\tau=\mu\frac{U}{\delta}
$$

因此：

$$
\mu=\frac{mg\sin\theta\,\delta}{AU}
$$

$$
\mu=\frac{5\times9.8\times(5/13)\times10^{-4}}
{0.4\times0.45\times1}
=1.05\times10^{-2}\ \mathrm{Pa\cdot s}
$$

$$
\boxed{\mu\approx0.0105\ \mathrm{Pa\cdot s}}
$$

---

### 题 17：旋转圆盘黏性转矩【课件与课本例题】

圆盘直径 $0.1\ \mathrm m$，与固定平台之间的油膜厚度为 $1.5\ \mathrm{mm}$。圆盘以 $50\ \mathrm{r/min}$ 转动，测得阻力矩为 $2.94\times10^{-4}\ \mathrm{N\cdot m}$。假设速度沿油膜厚度线性变化，求油的动力黏度和圆盘边缘剪应力。

#### 解答

先换算：

$$
R=0.05\ \mathrm m,\qquad
n=\frac{50}{60}\ \mathrm{s^{-1}}
$$

转矩公式：

$$
M=\frac{\pi^2\mu nR^4}{\delta}
$$

所以：

$$
\mu=\frac{M\delta}{\pi^2nR^4}
$$

$$
\mu=\frac{2.94\times10^{-4}\times1.5\times10^{-3}}
{\pi^2\times(50/60)\times(0.05)^4}
=8.58\times10^{-3}\ \mathrm{Pa\cdot s}
$$

边缘速度：

$$
U_R=2\pi nR
$$

边缘剪应力：

$$
\tau_R=\mu\frac{U_R}{\delta}
=1.50\ \mathrm{Pa}
$$

$$
\boxed{\mu=8.58\times10^{-3}\ \mathrm{Pa\cdot s},\quad
\tau_R=1.50\ \mathrm{Pa}}
$$

---

### 题 18：平行板间油的黏度【课本习题 2-3 改编】

两平行板间距为 $0.5\ \mathrm{mm}$，下板静止，上板以 $0.25\ \mathrm{m/s}$ 匀速运动。维持运动所需单位面积切向力为 $2.0\ \mathrm{Pa}$。求油的动力黏度。

#### 解答

线性速度分布：

$$
\frac{\mathrm du}{\mathrm dy}=\frac{U}{h}
=\frac{0.25}{0.5\times10^{-3}}
=500\ \mathrm{s^{-1}}
$$

$$
\mu=\frac{\tau}{\mathrm du/\mathrm dy}
=\frac{2.0}{500}
=4.0\times10^{-3}\ \mathrm{Pa\cdot s}
$$

$$
\boxed{\mu=4.0\times10^{-3}\ \mathrm{Pa\cdot s}}
$$

---

### 题 19：轴与套筒间油膜【课本习题 2-4 改编】

直径 $d=120\ \mathrm{mm}$ 的轴在长度 $L=140\ \mathrm{mm}$ 的套筒中以 $U=0.493\ \mathrm{m/s}$ 轴向运动。径向油膜厚度 $\delta=0.2\ \mathrm{mm}$，维持运动所需拉力为 $F=8.43\ \mathrm N$。忽略端部效应，求油的动力黏度。

#### 解答

轴表面受剪面积：

$$
A=\pi dL
$$

剪应力：

$$
\tau=\frac{F}{A}
$$

线性速度分布：

$$
\tau=\mu\frac{U}{\delta}
$$

所以：

$$
\mu=\frac{F\delta}{\pi dLU}
$$

代入：

$$
\mu=\frac{8.43\times0.2\times10^{-3}}
{\pi\times0.12\times0.14\times0.493}
=6.48\times10^{-2}\ \mathrm{Pa\cdot s}
$$

$$
\boxed{\mu\approx0.0648\ \mathrm{Pa\cdot s}}
$$

---

### 题 20：毛细上升与下降【课件公式题】

内径 $d=1.0\ \mathrm{mm}$ 的洁净玻璃细管分别插入水和汞中。取：

$$
\sigma_w=0.074\ \mathrm{N/m},\quad \theta_w=0^\circ,
\quad \rho_w=1000\ \mathrm{kg/m^3}
$$

$$
\sigma_{Hg}=0.514\ \mathrm{N/m},\quad \theta_{Hg}=140^\circ,
\quad \rho_{Hg}=13600\ \mathrm{kg/m^3}
$$

求毛细高度，取 $g=9.8\ \mathrm{m/s^2}$。

#### 解答

$$
h=\frac{4\sigma\cos\theta}{\rho gd}
$$

水：

$$
h_w=\frac{4\times0.074\times\cos0^\circ}
{1000\times9.8\times0.001}
=0.0302\ \mathrm m
$$

即上升约 $30.2\ \mathrm{mm}$。

汞：

$$
h_{Hg}=\frac{4\times0.514\times\cos140^\circ}
{13600\times9.8\times0.001}
=-0.0118\ \mathrm m
$$

即下降约 $11.8\ \mathrm{mm}$。

$$
\boxed{h_w\approx+30.2\ \mathrm{mm},\qquad
h_{Hg}\approx-11.8\ \mathrm{mm}}
$$

负号表示液面下降。

---

### 题 21：位能完全转化为内能【课件例题】

水从 $100\ \mathrm m$ 高处落下。假设重力位能全部转化为水的内能，水的比热容为 $4184\ \mathrm{J/(kg\cdot K)}$。求水的温升。

#### 解答

$$
mgh=mc\Delta T
$$

$$
\Delta T=\frac{gh}{c}
=\frac{9.8\times100}{4184}
=0.234\ \mathrm K
$$

$$
\boxed{\Delta T\approx0.234\ \mathrm K}
$$

质量约去，说明在这一理想化条件下温升与水量无关。

---

## 三、综合辨析题

### 题 22：压缩性判断【自编综合题】

判断下列说法并说明理由：

1. 所有液体都可以视为不可压缩流体。
2. 气体始终必须按可压缩流体处理。
3. 水击问题中可忽略水的压缩性。

#### 解答

1. 错误。所有实际流体都具有一定压缩性。普通低速、压强变化不大时，液体常可近似不可压缩。
2. 错误。低速且压强相对变化很小时，气体也可采用不可压缩近似。
3. 错误。水击包含快速压强波动，液体压缩性和管壁弹性都会影响波速与压强峰值。

判断关键是研究过程中密度变化是否达到不可忽略的程度。

---

### 题 23：速度分布与剪应力分布【历年卷 24–25 简答题改编】

对同一种牛顿流体，分别讨论以下速度分布对应的剪应力分布：

1. $u=U$；
2. $u=ay$；
3. $u=ay^2$。

#### 解答

牛顿内摩擦定律：

$$
\tau=\mu\frac{\mathrm du}{\mathrm dy}
$$

1. $u=U$

$$
\frac{\mathrm du}{\mathrm dy}=0
\Rightarrow \tau=0
$$

各流层同速，没有相对滑动。

2. $u=ay$

$$
\frac{\mathrm du}{\mathrm dy}=a
\Rightarrow \tau=\mu a
$$

剪应力沿 $y$ 为常量。

3. $u=ay^2$

$$
\frac{\mathrm du}{\mathrm dy}=2ay
\Rightarrow \tau=2\mu ay
$$

剪应力随 $y$ 线性变化。

> [作图占位] 画出三组 $u-y$ 与 $\tau-y$ 图：常速对应零剪应力；线性速度对应均匀剪应力；抛物线速度对应线性剪应力。

---

### 题 24：空化链条【课件综合题】

按“形成条件—发展过程—危害—防治方向”的顺序说明水轮机叶片空蚀。

#### 解答

1. **形成条件**：叶片附近局部流速增大或流动分离，使绝对压强降到该温度下汽化压强附近。
2. **发展过程**：液体局部汽化形成蒸气泡，蒸气泡被水流带到高压区。
3. **溃灭与危害**：蒸气泡快速溃灭，产生冲击波和微射流，引起表面点蚀、振动、噪声和效率降低。
4. **防治方向**：提高局部最低压强、优化叶片形状、减小不合理流速峰值、降低安装高度、改善材料耐空蚀性能。

空化判据中的压强必须使用绝对压强。

---

### 题 25：自由落体容器中的单位质量力【课件概念深化】

一敞口容器与其中液体一起自由落体。以容器为参考系，求液体的有效单位质量力，并说明这一结果对后续压强分布分析意味着什么。

#### 解答

容器参考系以加速度 $\boldsymbol g$ 向下运动。引入的惯性力方向向上，单位质量惯性力为 $-\boldsymbol a$。

自由落体时：

$$
\boldsymbol a=\boldsymbol g
$$

所以：

$$
\boldsymbol f_{eff}=\boldsymbol g-\boldsymbol a=\boldsymbol 0
$$

这意味着液体处于失重状态，内部没有由有效重力造成的压强梯度。在后续静水力学中可推出压强在液体内近似均匀；敞口条件下其表压为零。

---

### 题 26：章节综合判断

判断并改正错误表述。

1. 流体只要运动，就一定存在剪应力。
2. 黏度越大，运动黏度一定越大。
3. 体积模量越大，流体越容易压缩。
4. 毛细管越细，毛细高度越小。
5. 空化发生时，局部表压一定为负。
6. 水和汞在同一重力场中的单位质量重力不同。

#### 解答

1. 错误。还需具有黏性并存在速度梯度。刚体式平移可有运动而无黏性剪应力。
2. 错误。$\nu=\mu/\rho$，还与密度有关。
3. 错误。$K=1/\beta$，$K$ 越大越难压缩。
4. 错误。$|h|\propto1/d$，管越细，毛细高度绝对值越大。
5. 错误。空化由绝对压强降至汽化压强触发；表压是否为负还取决于当地大气压和压力基准。
6. 错误。单位质量重力均为 $g$；相同体积所受重力因密度不同而不同。

---

## 最后复习清单

闭卷前应能在不看资料的情况下完成：

- 用一句话定义流体、连续介质和流体质点；
- 写出 $\rho$、$\beta$、$K$、$\mu$、$\nu$、$\sigma$ 的定义与单位；
- 解释液体和气体黏度随温度变化的相反趋势；
- 从速度分布 $u(y)$ 立即写出剪应力分布 $\tau(y)$；
- 独立完成平板油膜、两层流体、旋转圆盘三类黏性计算；
- 由 $K$ 计算体积变化、密度变化或所需压强；
- 使用毛细公式判断上升、下降和测压误差；
- 用绝对压强解释沸腾、空化和空蚀；
- 区分质量力、单位质量力、表面力、压应力和剪应力。
