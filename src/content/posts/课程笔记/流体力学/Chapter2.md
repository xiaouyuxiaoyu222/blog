---
title: FluidMechanics—Chapter2：Hydrostatics
published: 2026-06-12
description: 静水压强特性、流体平衡方程、压强分布、测压仪器、作用于平面与曲面上的静水总压力、浮力以及浮体稳定性
tags: [流体力学]
category: 课程笔记
draft: false
---

## 概述

这一章研究 **流体静力学（hydrostatics）**：流体内部不存在相对运动时，压强如何分布，以及静水对平面、曲面和物体产生怎样的作用力。

整章可以压缩成一条主线：

> **受力平衡方程 → 压强分布 → 测压 → 平面总压力 → 曲面总压力 → 浮力与稳定性。**

最核心的三个工具是：

1. 静止流体平衡微分方程

$$
\frac{\partial p}{\partial x}=\rho f_x,\qquad
\frac{\partial p}{\partial y}=\rho f_y,\qquad
\frac{\partial p}{\partial z}=\rho f_z
$$

2. 重力场中的静水压强公式

$$
p=p_0+\rho gh
$$

3. 静水总压力的分解思想

- 平面：$F=p_cA=\rho gh_cA$
- 曲面：先求水平分力 $F_x$，再求竖直分力 $F_z$

### 常用符号

| 符号 | 含义 | 常用单位 |
|---|---|---|
| $p$ | 相对压强（gauge pressure）；未特别说明时本章通常使用相对压强 | Pa、kPa |
| $p_{\mathrm{abs}}$ | 绝对压强（absolute pressure） | Pa、kPa |
| $p_a$ | 当地大气压强（atmospheric pressure） | Pa、kPa |
| $p_v$ | 真空度（vacuum pressure） | Pa、kPa |
| $\rho$ | 流体密度（density） | $\mathrm{kg/m^3}$ |
| $\gamma=\rho g$ | 流体重度（specific weight） | $\mathrm{N/m^3}$、$\mathrm{kN/m^3}$ |
| $g$ | 重力加速度 | $\mathrm{m/s^2}$ |
| $z$ | 相对基准面的高程（elevation） | m |
| $h$ | 点到自由液面的竖直淹没深度 | m |
| $A$ | 受压平面面积或投影面积 | $\mathrm{m^2}$ |
| $I_{cx}$、$I_0$ | 形心轴面积惯性矩、浮面面积惯性矩 | $\mathrm{m^4}$ |
| $V_p$ | 压力体体积（pressure-body volume） | $\mathrm{m^3}$ |
| $F_x,F_z,F_B$ | 水平分力、竖直分力、浮力 | N、kN |
| $\omega$ | 刚体旋转角速度 | $\mathrm{rad/s}$ |
| $BM,GM$ | 定倾半径、定倾高 | m |

### 教学范围判断

三份课件完整覆盖了课件 **Chapter 2 Hydrostatics** 的 Section 1–7，也对应课本第 3 章的主要内容：静水压强性质、平衡方程、相对平衡、测压、平面总压力、曲面总压力、浮力与稳定性。

**未发现老师明确说明“不考”的课本小节，因此本笔记不删去任何主干内容。** 但从课件篇幅和历年卷看，复习优先级不同：

- **必须熟练计算**：压强换算、测压管与 U 形管、相对平衡、平面总压力与压心、曲面总压力与压力体。
- **必须会解释与判断**：静水压强两条性质、等压面条件、自由落体中的压强、液体静力学悖论、潜体与浮体稳定性。
- **了解即可**：金属压力表和真空表的内部结构；运动实际流体中平均压强 $p=(p_x+p_y+p_z)/3$ 的旁注。

### 历年卷命题特点

本章在历年卷中的常见形式包括：

- 填空或判断：自由落体压强、静水压强各向同性、相对压强与绝对压强。
- 简答或作图：压强分布图、压力体、液体静力学悖论、连通器原理。
- 计算：平面闸门、圆弧闸门、圆柱面、差压计、相对平衡液面。

---

## 目录

- [Part I 笔记](#part-i-笔记)
  - [1 静水压强的性质](#1-静水压强的性质)
  - [2 流体平衡微分方程与等压面](#2-流体平衡微分方程与等压面)
  - [3 静止流体中的压强分布](#3-静止流体中的压强分布)
  - [4 测压仪器与液柱测压](#4-测压仪器与液柱测压)
  - [5 平面上的静水总压力](#5-平面上的静水总压力)
  - [6 曲面上的静水总压力](#6-曲面上的静水总压力)
  - [7 浮力及物体稳定性](#7-浮力及物体稳定性)
  - [8 本章公式总表与易错点](#8-本章公式总表与易错点)
- [第二部分：练习题](#第二部分练习题)
  - [A1 概念与简答](#a1-概念与简答)
  - [A2 计算与综合应用](#a2-计算与综合应用)

---

# Part I 笔记

## 1 静水压强的性质

### 1.1 静水压强的定义

静止流体内部某一点处，单位面积上受到的法向压力称为 **静水压强（hydrostatic pressure）**：

$$
p=\lim_{\Delta A\to 0}\frac{\Delta F_n}{\Delta A}
$$

单位为：

$$
1\ \mathrm{Pa}=1\ \mathrm{N/m^2}
$$

静止流体没有剪切变形，因此内部剪应力为零：

$$
\tau=0
$$

### 1.2 性质一：压强沿受压面的内法线方向

静水压强只能是压应力，其方向：

- 垂直于受压面；
- 指向受压流体内部；
- 与受压面的切向无关。

如果静止流体中存在切向应力，流体便会继续发生剪切变形，无法保持静止。因此静止状态要求切向应力为零。

> **判断口诀：静水压力只有法向分量，没有切向分量。**

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 4 页“斜面上法向压强与切向方向”的示意图。

### 1.3 性质二：同一点压强与方向无关

静止流体中，同一点各方向的压强相等：

$$
p_x=p_y=p_z=p_n=p
$$

这称为 **压强的各向同性（isotropy of pressure）**，也常与 **Pascal's law** 联系起来。

#### 微小四面体证明的核心

取一个无限小四面体，斜面上的压强为 $p_n$，三个坐标面上的压强分别为 $p_x,p_y,p_z$。

以 $x$ 方向为例：

- 表面力为二阶小量，量级为 $O(l^2)$；
- 质量力为三阶小量，量级为 $O(l^3)$。

当四面体尺寸 $l\to0$ 时，质量力相对表面力可以忽略，由力平衡得到：

$$
p_x=p_n
$$

同理：

$$
p_y=p_n,\qquad p_z=p_n
$$

所以：

$$
p_x=p_y=p_z=p_n
$$

:::TIP
这里的结论是“**同一点、不同方向**压强相等”。不同空间位置的压强一般并不相等。
:::

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 5 页微小四面体 $OABC$ 的受力图。

### 1.4 静水压强与运动流体中的压强

- 静止实际流体：没有剪应力，法向压强各向相等。
- 运动理想流体：黏度为零，也没有剪应力，压强仍各向相等。
- 运动实际流体：存在黏性剪应力，三个法向应力可能不相等，常定义平均压强

$$
p=\frac{p_x+p_y+p_z}{3}
$$

这一点属于补充理解，考试重点仍是静止流体中的压强性质。

---

## 2 流体平衡微分方程与等压面

### 2.1 质量力与表面力

流体微元受到两类力：

- **质量力（body force / mass force）**：作用于整个质量或体积，如重力、惯性力。
- **表面力（surface force）**：作用于微元表面，静止流体中表现为压强。

令单位质量流体受到的质量力为：

$$
\boldsymbol f=f_x\boldsymbol i+f_y\boldsymbol j+f_z\boldsymbol k
$$

则单位体积上的质量力为：

$$
\rho\boldsymbol f
$$

### 2.2 欧拉平衡微分方程

取边长为 $dx,dy,dz$ 的微小长方体。以 $x$ 方向为例，两侧压强分别为：

$$
p-\frac{\partial p}{\partial x}\frac{dx}{2},\qquad
p+\frac{\partial p}{\partial x}\frac{dx}{2}
$$

由 $x$ 方向力平衡：

$$
-\frac{\partial p}{\partial x}dxdydz+\rho f_xdxdydz=0
$$

整理得：

$$
\frac{\partial p}{\partial x}=\rho f_x
$$

同理：

$$
\boxed{
\frac{\partial p}{\partial x}=\rho f_x,\qquad
\frac{\partial p}{\partial y}=\rho f_y,\qquad
\frac{\partial p}{\partial z}=\rho f_z
}
$$

或写为课件形式：

$$
f_x-\frac{1}{\rho}\frac{\partial p}{\partial x}=0
$$

$$
f_y-\frac{1}{\rho}\frac{\partial p}{\partial y}=0
$$

$$
f_z-\frac{1}{\rho}\frac{\partial p}{\partial z}=0
$$

物理意义：

> 压强梯度形成的单位质量表面力，与单位质量质量力互相平衡。

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 9 页微小长方体及两侧压强 Taylor 展开图。

### 2.3 综合形式

由于：

$$
dp=\frac{\partial p}{\partial x}dx+
\frac{\partial p}{\partial y}dy+
\frac{\partial p}{\partial z}dz
$$

代入平衡微分方程得到：

$$
\boxed{
dp=\rho(f_xdx+f_ydy+f_zdz)
}
$$

这是处理重力、平动惯性力和旋转惯性力的统一起点。

#### 2.3.1 保守质量力

若 $\rho$ 为常数，定义：

$$
w=\frac{p}{\rho}
$$

则：

$$
dw=f_xdx+f_ydy+f_zdz
$$

右端必须是某个势函数的全微分，因此均质不可压缩流体要维持平衡，质量力场应为 **保守力场（conservative force field）**。

重力和匀加速参考系中的惯性力都可作为保守质量力处理。

### 2.4 等压面

由压强相同的点组成的曲面称为 **等压面（isobaric surface / equipressure surface）**：

$$
p=C
$$

在等压面上移动有：

$$
dp=0
$$

代入综合平衡方程：

$$
f_xdx+f_ydy+f_zdz=0
$$

写成向量形式：

$$
\boldsymbol f\cdot d\boldsymbol s=0
$$

因此：

> **等压面处处与合质量力方向垂直。**

#### 2.4.1 水平面何时是等压面

在仅受重力作用时：

$$
\boldsymbol f=-g\boldsymbol k
$$

等压面与竖直方向垂直，因此为水平面。

“同一水平面压强相等”需要同时满足：

1. 流体处于平衡状态；
2. 流体区域相互连通；
3. 连通介质为同一种均质流体；
4. 质量力只有重力；
5. 比较点位于同一水平面。

:::WARNING
只要存在不同液体、流体不连通、容器有加速度或液体旋转，同一水平面压强就不一定相等。
:::

#### 2.4.2 常见等压面

- 与大气相通的自由液面；
- 两种互不相溶流体的分界面；
- 连通同种静止液体中的任一水平面。

---

## 3 静止流体中的压强分布

### 3.1 重力场中的静水压强

取 $z$ 轴竖直向上，仅受重力时：

$$
f_x=0,\qquad f_y=0,\qquad f_z=-g
$$

代入平衡微分方程：

$$
dp=-\rho gdz
$$

积分：

$$
p+\rho gz=C
$$

若自由液面压强为 $p_0$，某点在自由液面以下深度为 $h$，则：

$$
\boxed{p=p_0+\rho gh}
$$

若采用相对压强，开口容器自由液面 $p_0=0$：

$$
\boxed{p=\rho gh}
$$

#### 3.1.1 基本结论

对同一种均质液体：

- 压强随深度线性增大；
- 同一深度处压强相等；
- 压强只与 $p_0,\rho,g,h$ 有关；
- 与容器形状、液体总量无关。

这也是液体静力学悖论的基础。

### 3.2 位置水头、压强水头与测压管水头

由：

$$
p+\rho gz=C
$$

除以 $\rho g$：

$$
\boxed{z+\frac{p}{\rho g}=C}
$$

其中：

- $z$：**位置水头（elevation head）**，表示单位重量流体的位置势能；
- $p/(\rho g)$：**压强水头（pressure head）**；
- $z+p/(\rho g)$：**测压管水头 / 水力水头（piezometric head / hydraulic head）**。

在同一种连通静止液体中：

$$
z_1+\frac{p_1}{\rho g}
=
 z_2+\frac{p_2}{\rho g}
$$

#### 3.2.1 不同液体不能直接使用同一个水头常数

若液体密度不同：

$$
z+\frac{p}{\rho_1g}=C_1
$$

和：

$$
z+\frac{p}{\rho_2g}=C_2
$$

每一种液体分别有自己的常数。跨越液体分界面时，应使用分界面压强连续，再分段计算。

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 25 或第 32 页 A、B、C 三点的位置水头、压强水头和测压管水头示意图。

### 3.3 绝对压强、相对压强与真空

#### 3.3.1 绝对压强

以绝对真空为零点：

$$
p_{\mathrm{abs}}\ge0
$$

#### 3.3.2 相对压强

以当地大气压 $p_a$ 为零点：

$$
\boxed{p=p_{\mathrm{abs}}-p_a}
$$

- $p>0$：正压；
- $p=0$：与大气压相同；
- $p<0$：负压或真空状态。

压力表通常显示相对压强。

#### 3.3.3 真空度与真空高度

当 $p_{\mathrm{abs}}<p_a$：

$$
\boxed{p_v=p_a-p_{\mathrm{abs}}=-p}
$$

对应的真空高度：

$$
\boxed{h_v=\frac{p_v}{\rho g}}
$$

三者关系：

$$
p_{\mathrm{abs}}=p_a+p=p_a-p_v
$$

:::WARNING
真空度 $p_v$ 是正值；真空状态下的相对压强 $p$ 是负值。
:::

#### 3.3.4 常用单位换算

$$
1\ \mathrm{atm}=1.013\times10^5\ \mathrm{Pa}=101.3\ \mathrm{kPa}
$$

$$
1\ \mathrm{at}=9.8\times10^4\ \mathrm{Pa}=98\ \mathrm{kPa}
$$

$$
1\ \mathrm{mH_2O}\approx9.8\ \mathrm{kPa}
$$

$$
1\ \mathrm{mHg}\approx133\ \mathrm{kPa}
$$

本课程计算中常取：

$$
\gamma_w=\rho_wg=9.8\ \mathrm{kN/m^3}
$$


#### 课堂例题 1：水下 2 m 处的绝对压强与相对压强

淡水自由液面与大气相通，取工程大气压：

$$
p_a=98\ \mathrm{kPa}
$$

水面下 $h=2\ \mathrm{m}$ 处的相对压强为：

$$
p=\gamma_wh=9.8\times2=19.6\ \mathrm{kPa}
$$

绝对压强为：

$$
p_{\mathrm{abs}}=p_a+p=98+19.6=117.6\ \mathrm{kPa}
$$

因此：

$$
p=0.2\ \mathrm{at},\qquad p_{\mathrm{abs}}=1.2\ \mathrm{at}
$$

这个例子最重要的作用是区分：$\rho gh$ 给出的是相对自由液面的压强增量；求绝对压强时还要加上自由液面处的绝对压强。

### 3.4 液体的相对平衡

**相对平衡（relative equilibrium）** 指液体与容器一起运动，但液体相对容器没有运动。

液体内部仍无剪应力，可以继续使用静力平衡方程；此时质量力中还要加入惯性力。

#### 3.4.1 匀加速直线运动

若容器的加速度为：

$$
\boldsymbol a=a_x\boldsymbol i+a_y\boldsymbol j+a_z\boldsymbol k
$$

在随容器运动的参考系中，单位质量惯性力为 $-\boldsymbol a$。合质量力为：

$$
\boldsymbol f=\boldsymbol g-\boldsymbol a
$$

于是：

$$
dp=\rho(\boldsymbol g-\boldsymbol a)\cdot d\boldsymbol r
$$

#### 水平向右加速

若容器以加速度 $a$ 沿 $+x$ 方向运动：

$$
f_x=-a,\qquad f_z=-g
$$

所以：

$$
dp=-\rho(adx+gdz)
$$

积分：

$$
p=-\rho(ax+gz)+C
$$

自由液面上 $p=p_a$ 为常数，因此：

$$
ax+gz=C
$$

$$
\boxed{\frac{dz}{dx}=-\frac{a}{g}}
$$

自由液面向加速度的反方向升高，倾角满足：

$$
\boxed{\tan\theta=\frac{a}{g}}
$$

任一点相对压强仍可理解为：

$$
p=\rho g_{\mathrm{eff}}h_n
$$

其中 $g_{\mathrm{eff}}$ 是合有效重力，$h_n$ 是沿其反方向量取的法向深度。

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 40 或第 43 页水平加速容器的倾斜自由液面图。

#### 课堂例题 2：水平加速水车

水车以 $a=0.98\ \mathrm{m/s^2}$ 向右匀加速。设加速后自由液面通过原点，点 $B$ 的坐标为：

$$
x_B=-1.5\ \mathrm{m},\qquad z_B=-1.0\ \mathrm{m}
$$

自由液面倾角满足：

$$
\tan\theta=\frac{a}{g}=\frac{0.98}{9.8}=0.1
$$

$$
\theta=5.71^\circ\approx5^\circ45'
$$

压强分布为：

$$
p=-\rho(ax+gz)
$$

代入点 $B$：

$$
p_B=-1000\left[0.98(-1.5)+9.8(-1.0)\right]
=11.27\ \mathrm{kPa}
$$

判断方向时可以直接记住：**容器向右加速，液面左高右低**；液面与合有效重力方向垂直。

#### 竖直加速

- 容器向上加速 $a$：

$$
p=p_0+\rho(g+a)h
$$

- 容器向下加速且 $a<g$：

$$
p=p_0+\rho(g-a)h
$$

- 自由落体 $a=g$：

$$
p=p_0
$$

若容器敞口，采用相对压强：

$$
\boxed{p=0}
$$

即液体内部没有静水压强梯度，壁面相对压强也为零。

#### 3.4.2 等角速度旋转

液体绕竖直轴以角速度 $\omega$ 作刚体旋转。柱坐标中：

$$
f_r=\omega^2r,\qquad f_z=-g
$$

平衡方程：

$$
dp=\rho(\omega^2rdr-gdz)
$$

积分：

$$
\boxed{p=\rho\left(\frac{\omega^2r^2}{2}-gz\right)+C}
$$

以轴线上某自由液面点 $r=0,z=0,p=p_a$ 为基准，并使用相对压强：

$$
\boxed{p=\rho\left(\frac{\omega^2r^2}{2}-gz\right)}
$$

自由液面上 $p=0$：

$$
\boxed{z=\frac{\omega^2r^2}{2g}}
$$

因此自由液面是旋转抛物面。

半径 $R$ 处与轴线处的液面高差：

$$
\boxed{\Delta z=\frac{\omega^2R^2}{2g}}
$$

:::TIP
旋转液体中，压强仍随“到当地自由液面的竖直深度”线性变化；但 $z+p/(\rho g)$ 不再处处相等。
:::

> **图片占位符**：插入课件 `【Chapter2（1）】Hydrostatics_English.pdf` 第 41–42 页旋转液体的抛物面自由液面图。

---

## 4 测压仪器与液柱测压

### 4.1 液柱测压的统一规则

液柱测压题最稳妥的方法是沿一条连续路径逐段“走压强”：

- 在同一种静止液体中向下走 $\Delta h$：

$$
p_{\mathrm{new}}=p_{\mathrm{old}}+\rho g\Delta h
$$

- 向上走 $\Delta h$：

$$
p_{\mathrm{new}}=p_{\mathrm{old}}-\rho g\Delta h
$$

- 同一液体同一水平面：压强相等；
- 穿过互不相溶液体分界面：界面两侧压强连续；
- 到达开口液面：绝对压强为 $p_a$，相对压强为 0。

> **通用策略：选起点 → 沿管路走到终点 → 每向下加、每向上减 → 最后列等式。**

### 4.2 测压管

**测压管（piezometer tube）** 是一根与被测点相连、上端开口的竖直细管。

若管内液体与容器内液体相同，且上端通大气：

$$
p_A=\rho gh
$$

所以：

$$
\boxed{\frac{p_A}{\rho g}=h}
$$

适用范围：

- 测量较小的正相对压强；
- 不适合测量真空；
- 压强过大时所需管长过长。

#### 4.2.1 斜管测压

若细管与水平面夹角为 $\alpha$，读数沿管长为 $l$：

$$
h=l\sin\alpha
$$

$$
p_A=\rho gl\sin\alpha
$$

斜管可以放大刻度读数，提高小压差测量精度。

#### 4.2.2 使用较轻液体

若测压液体密度 $\rho'<\rho$，相同压强对应的液柱高度更大，也能提高读数灵敏度。

:::WARNING
测压管上的刻度长度只有在竖直放置且管内液体就是被测液体时，才直接等于压强水头。
:::

> **图片占位符**：插入课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 3–4 页竖直测压管、斜测压管及轻液体测压管图。

#### 课堂例题 3：用测压管测密闭汽油箱上方气体压强

密闭汽油箱接一根上端开口的测压管，液柱读数为 $h=1.5\ \mathrm{m}$，汽油重度为：

$$
\gamma_g=7.35\ \mathrm{kN/m^3}
$$

沿汽油液柱列静水压强关系，可得液面上方气体的相对压强：

$$
p_0=\gamma_gh=7.35\times1.5=11.025\ \mathrm{kPa}
$$

换算为水柱高度：

$$
\frac{p_0}{\gamma_w}=\frac{11.025}{9.8}=1.125\ \mathrm{mH_2O}
$$

这里测压管的几何读数为 $1.5\ \mathrm{m}$ 汽油柱；换成水头后为 $1.125\ \mathrm{mH_2O}$。液柱高度必须与所用液体的重度配套。

### 4.3 U 形管压力计

U 形管常使用密度较大的水银测量较大压强。

计算时不必死记特定图形公式，只需按液柱规则逐段走压强。

#### 4.3.1 同高两点之间的压差

若两被测点 $A,B$ 位于同一种液体中且处于同一高度，U 形管内测压液体密度为 $\rho_m>\rho$，两界面高差为 $\Delta h$，则：

$$
\boxed{p_A-p_B=(\rho_m-\rho)g\Delta h}
$$

对应的被测液体水头差为：

$$
\boxed{
\left(z_A+\frac{p_A}{\rho g}\right)-
\left(z_B+\frac{p_B}{\rho g}\right)
=
\left(\frac{\rho_m}{\rho}-1\right)\Delta h
}
$$

若测压液体为水银、被测液体为水：

$$
\frac{\rho_{Hg}}{\rho_w}=13.6
$$

因此：

$$
\Delta H=12.6\Delta h
$$

#### 4.3.2 水银常被选作测压液体的原因

- 密度大，相同压强所需液柱较短；
- 蒸气压低；
- 可压缩性小；
- 与水不易混合，界面清晰。

> **图片占位符**：插入课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 6 页 U 形水银压力计图，以及第 12 页差压计液柱路径图。

### 4.4 差压计

**差压计（differential pressure gauge）** 用来测量两点压强差或测压管水头差。

根据压差大小选取测压介质：

- 空气差压计：中小压差；
- 油差压计：很小压差；
- 水银差压计：较大压差。

轻质倒置 U 形管与重质 U 形管的读数方向不同，因此更推荐使用“逐段走压强”方法，避免公式符号混乱。

### 4.5 金属压力表与真空表

- **金属压力表（metal manometer）**：用于较大正压，工程管网中常见。
- **真空表（vacuum gauge）**：用于测量真空度。

本课程主要要求理解它们测量的压强类型，不要求掌握内部机械结构。

---

## 5 平面上的静水总压力

### 5.1 静水压强分布图

压强分布图的三个要素：

1. 大小：按比例画出 $p=\rho gh$；
2. 方向：垂直于受压面并指向受压面；
3. 包络线：平面上压强随深度线性变化，因此包络线为直线。

典型形状：

- 上边位于自由液面：三角形分布；
- 整块平面位于自由液面以下：梯形分布；
- 两侧均受液体作用：先分别作图，再求净压强分布。

> **图片占位符**：插入课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 19 页不同平面上的三角形、梯形压强分布图。

### 5.2 解析法求总压力

设平面与自由液面夹角为 $\theta$，沿平面从自由液面量取坐标 $y$，则垂直深度：

$$
h=y\sin\theta
$$

微元面积 $dA$ 上的压力：

$$
dF=pdA=\rho gy\sin\theta\,dA
$$

积分：

$$
F=\rho g\sin\theta\int_A y\,dA
$$

由形心定义：

$$
\int_A y\,dA=y_cA
$$

所以：

$$
\boxed{F=\rho gy_c\sin\theta\,A=\rho gh_cA=p_cA}
$$

其中：

- $A$：受压平面面积；
- $h_c$：平面形心的垂直淹没深度；
- $p_c=\rho gh_c$：形心处静水压强。

结论：

> **任意形状平面所受静水总压力，等于形心处压强乘以平面面积。**

若自由液面上还有均匀表面相对压强 $p_0$：

$$
F=(p_0+\rho gh_c)A
$$

### 5.3 压力中心

总压力作用点称为 **压力中心（center of pressure）** 或 **压心**。

对自由液面相对压强为零的情况，沿平面从自由液面量取：

$$
Fy_D=\int_A y\,dF
$$

$$
Fy_D=\rho g\sin\theta\int_A y^2dA
$$

令：

$$
I_x=\int_Ay^2dA
$$

则：

$$
y_D=\frac{I_x}{y_cA}
$$

由平行轴定理：

$$
I_x=I_{cx}+y_c^2A
$$

所以：

$$
\boxed{y_D=y_c+\frac{I_{cx}}{y_cA}}
$$

垂直淹没深度：

$$
\boxed{h_D=y_D\sin\theta}
$$

由于 $I_{cx}>0$：

$$
y_D>y_c
$$

即压心通常位于形心下方。

:::TIP
总压力大小只与 $A$ 和 $h_c$ 有关；压心位置还与平面形状和面积惯性矩有关。
:::

> **图片占位符**：插入课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 21–22 页斜平面、形心 $C$ 和压心 $D$ 的示意图。

#### 课堂例题 4：竖直矩形闸门

竖直矩形闸门宽 $b=1.5\ \mathrm{m}$、高 $H=2.0\ \mathrm{m}$，上边缘位于自由液面下 $h_1=1.0\ \mathrm{m}$。

面积与形心深度：

$$
A=bH=3.0\ \mathrm{m^2},\qquad
h_c=h_1+\frac{H}{2}=2.0\ \mathrm{m}
$$

总静水压力：

$$
F=\gamma_wh_cA
=9.8\times2.0\times3.0
=58.8\ \mathrm{kN}
$$

形心轴面积惯性矩：

$$
I_{cx}=\frac{bH^3}{12}
=\frac{1.5\times2^3}{12}
=1.0\ \mathrm{m^4}
$$

压心深度：

$$
h_D=h_c+\frac{I_{cx}}{h_cA}
=2+\frac{1}{2\times3}
=2.17\ \mathrm{m}
$$

这个结果体现了两个固定规律：总压力等于形心处压强乘面积；压心位于形心下方。

### 5.4 常用面积与形心惯性矩

下表中的惯性矩均为通过形心、且与自由液面平行的轴的面积惯性矩。

| 图形 | 面积 $A$ | 形心位置 | $I_{cx}$ |
|---|---:|---:|---:|
| 矩形，宽 $b$、高 $h$ | $bh$ | 距底边 $h/2$ | $bh^3/12$ |
| 三角形，底 $b$、高 $h$ | $bh/2$ | 距底边 $h/3$ | $bh^3/36$ |
| 圆，半径 $r$ | $\pi r^2$ | 圆心 | $\pi r^4/4$ |
| 半圆，半径 $r$ | $\pi r^2/2$ | 距直径 $4r/(3\pi)$ | $\left(\pi/8-8/(9\pi)\right)r^4$ |

计算时先确认惯性矩对应的轴方向。矩形若绕竖直形心轴，应使用 $hb^3/12$，不能机械套用 $bh^3/12$。

### 5.5 压强图法

对规则平面，可以使用 **压强图法（graphical method / pressure prism method）**。

- 总压力 = 压强分布图的“体积”；
- 压心 = 压强分布图体积的形心。

若受压面宽度为 $b$：

$$
F=b\times\text{压强图面积}
$$

对于上边缘位于自由液面的**竖直矩形平面**，压强图为三角形：

$$
F=\frac12(\rho gh)\,h\,b
$$

作用点距三角形大端：

$$
\frac{h}{3}
$$

或距自由液面：

$$
\frac{2h}{3}
$$

梯形压强分布常拆成：

- 一个矩形；
- 一个三角形。

分别求力和作用点后，用力矩合成：

$$
Fy_D=F_1y_1+F_2y_2
$$

#### 5.5.1 解析法与图解法比较

- 解析法：适用于任意形状平面，但需要面积和惯性矩；
- 图解法：直观，适合规则图形和分段线性压强分布。

### 5.6 平面总压力的常见判断

#### 5.6.1 面积相同、形心深度相同

若多个平面：

- 面积相同；
- 形心淹没深度相同；

则总压力相同：

$$
F=\rho gh_cA
$$

但压心位置可能不同，因为 $I_{cx}$ 不同。

#### 5.6.2 平面绕形心轴转动

若受压面积、形心位置不变：

- 总压力大小不变；
- 总压力方向始终垂直于平面，因此方向改变；
- 压心一般改变。

#### 5.6.3 两侧均有液体

分别计算两侧压强分布，再求净压力：

$$
\boldsymbol F_{\mathrm{net}}=
\boldsymbol F_{\mathrm{left}}+
\boldsymbol F_{\mathrm{right}}
$$

若两侧液体相同且自由液面高度相同，则相互抵消。

---

## 6 曲面上的静水总压力

曲面上各点压力方向不同，不能直接使用 $F=p_cA$。最常用方法是把总压力分解为水平分力和竖直分力。

### 6.1 水平分力

曲面微元压力 $dF$ 的水平分量：

$$
dF_x=dF\cos\alpha
$$

而：

$$
dA_x=dA\cos\alpha
$$

所以：

$$
dF_x=pdA_x
$$

积分：

$$
\boxed{F_x=\rho gh_cA_x}
$$

其中：

- $A_x$：曲面在与水平分力垂直的竖直平面上的投影面积；
- $h_c$：该竖直投影面积形心的淹没深度。

结论：

> **曲面静水总压力的水平分力，等于曲面竖直投影面所受的静水总压力。**

水平分力的作用线通过该投影面的压心。

### 6.2 竖直分力

曲面微元压力的竖直分量积分后得到：

$$
\boxed{F_z=\rho gV_p}
$$

$V_p$ 为 **压力体（pressure body / pressure prism）** 的体积。

压力体由以下边界围成：

1. 受压曲面本身；
2. 由曲面边缘向上作出的竖直面；
3. 自由液面或自由液面的延长面。

竖直分力的作用线通过压力体的体积形心。

### 6.3 实压力体与虚压力体

#### 实压力体

压力体区域实际被液体占据，竖直分力方向向下。

#### 虚压力体

压力体区域并未实际被液体占据，需要用自由液面延长线构造，竖直分力方向向上。

判断方向时应结合曲面上微元压力的竖直分量，不应只凭图形“看起来像液体”。

> **图片占位符**：插入课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 42–43 页实压力体、虚压力体及组合压力体图。

### 6.4 合力大小与方向

若二维问题只有一个水平分力 $F_x$ 和竖直分力 $F_z$：

$$
\boxed{F=\sqrt{F_x^2+F_z^2}}
$$

合力与水平面的夹角：

$$
\boxed{\theta=\arctan\frac{F_z}{F_x}}
$$

作用线确定方法：

1. 画出 $F_x$ 的作用线；
2. 画出 $F_z$ 的作用线；
3. 两作用线交于一点；
4. 通过该点按角度 $\theta$ 画出合力作用线。

### 6.5 圆弧面与圆柱面的特殊性质

对于以圆心 $O$ 为曲率中心的圆弧面，每个微元压力都沿半径方向，因此所有微元力作用线通过 $O$。

所以总压力作用线也通过圆心。

这可以快速判断：

- 半圆柱在静水压力作用下是否会绕圆心产生力矩；
- 圆弧闸门铰链若位于圆心，静水压力对铰链的力矩为零。

:::WARNING
“合力通过圆心”只适用于圆弧面且压强力确实沿半径方向，不可推广到任意曲面。
:::

#### 课堂例题 5：半圆柱会在静水压力下持续转动吗

课件中的半圆柱以圆心轴为转轴。曲面上任一点的压力均垂直于曲面，因此沿该点的半径方向，所有微元压力的作用线都通过圆心轴。

于是每个微元压力对圆心轴的力矩均为零，积分后的总压力也通过圆心轴：

$$
M_O=0
$$

所以半圆柱不会仅靠静水压力绕圆心轴持续转动。该题通常无需先算合力大小，先观察压力作用线是否通过转轴更快。

### 6.6 液体静力学悖论

多个敞口容器底面积相同、液体密度相同、液深相同，则底面压强相同：

$$
p=\rho gh
$$

底部总压力均为：

$$
\boxed{F_b=\rho ghA}
$$

即使容器形状不同、液体重量不同，底面总压力仍相同。

桌面对整个容器的支持力则等于“容器自重 + 液体重量”，一般不等于液体对底面的总压力。差额由侧壁上静水压力的竖直分量承担。

---

## 7 浮力及物体稳定性

### 7.1 阿基米德原理

完全或部分浸没在静止液体中的物体，受到液体作用的合力称为 **浮力（buoyancy）**。

阿基米德原理：

> 浮力的大小等于物体排开液体的重量，方向竖直向上。

$$
\boxed{F_B=\rho gV_{\mathrm{disp}}}
$$

其中 $V_{\mathrm{disp}}$ 为排开液体的体积。

浮力作用点称为 **浮心（center of buoyancy）**，位于排开液体体积的形心。

> **图片占位符**：插入课件 `【Chapter2（2）】Buoyancy_English.pdf` 第 3 页由曲面压力积分推导阿基米德原理的示意图。

### 7.2 浸没物体的三种状态

物体完全浸没且没有其他支撑时，比较重力 $G$ 与浮力 $F_B$：

- $G>F_B$：下沉；
- $G=F_B$：悬浮；
- $G<F_B$：上浮，最终部分露出液面并漂浮。

也可比较平均密度：

- $\rho_b>\rho_f$：下沉；
- $\rho_b=\rho_f$：悬浮；
- $\rho_b<\rho_f$：上浮。

### 7.3 潜体的平衡与稳定性

完全浸没物体称为 **潜体（submerged body）**。

#### 7.3.1 平衡条件

$$
G=F_B
$$

且两力：

- 方向相反；
- 作用在同一竖直线上。

#### 7.3.2 稳定性

设重心为 $C$，浮心为 $D$：

- $C$ 在 $D$ 下方：稳定平衡；
- $C$ 与 $D$ 重合：随遇平衡；
- $C$ 在 $D$ 上方：不稳定平衡。

原因：潜体发生微小转动后，排开液体形状基本不变，浮心仍固定在物体上。重力与浮力是否形成恢复力矩，只取决于重心和浮心的相对位置。

> **图片占位符**：插入课件 `【Chapter2（2）】Buoyancy_English.pdf` 第 7–8 页潜体稳定、随遇和不稳定三种状态图。

### 7.4 浮体的平衡与稳定性

部分浸没并漂浮在自由液面上的物体称为 **浮体（floating body）**。

#### 7.4.1 平衡条件

$$
G=F_B
$$

且重力与浮力作用线重合。

#### 7.4.2 为什么浮体重心可高于浮心

浮体发生小角度倾斜后，浸没部分的形状发生变化，浮心从 $D$ 移动到 $D'$。

通过新浮心 $D'$ 的竖直线与原浮力作用线相交于点 $M$，称为 **定倾中心（metacenter）**。

因此浮体的稳定性取决于重心 $C$ 与定倾中心 $M$ 的相对位置。

#### 7.4.3 定倾半径

课件用 $\rho$ 表示定倾半径，为避免与密度混淆，这里记为 $BM$：

$$
\boxed{BM=\frac{I_0}{V}}
$$

其中：

- $I_0$：浮面对倾斜轴的面积惯性矩；
- $V$：排水体积。

设：

$$
BG=e
$$

则定倾高：

$$
\boxed{GM=BM-BG=\frac{I_0}{V}-e}
$$

稳定性条件：

- $GM>0$：稳定；
- $GM=0$：随遇；
- $GM<0$：不稳定。

对于小倾角 $\alpha<10^\circ$，上述公式适用。

:::TIP
浮体稳定性的关键是 **重心必须位于定倾中心以下**，并不要求重心位于浮心以下。
:::

> **图片占位符**：插入课件 `【Chapter2（2）】Buoyancy_English.pdf` 第 10–11 页浮体倾斜后浮心移动、定倾中心 $M$、$BM$ 与 $BG$ 的示意图。

---

## 8 本章公式总表与易错点

### 8.1 公式总表

#### 静力平衡

$$
\frac{\partial p}{\partial x}=\rho f_x,\quad
\frac{\partial p}{\partial y}=\rho f_y,\quad
\frac{\partial p}{\partial z}=\rho f_z
$$

$$
dp=\rho(f_xdx+f_ydy+f_zdz)
$$

#### 重力场静水压强

$$
p=p_0+\rho gh
$$

$$
z+\frac{p}{\rho g}=C
$$

#### 压强换算

$$
p=p_{\mathrm{abs}}-p_a
$$

$$
p_v=p_a-p_{\mathrm{abs}}=-p
$$

#### 水平加速液面

$$
\frac{dz}{dx}=-\frac{a}{g},\qquad
\tan\theta=\frac{a}{g}
$$

#### 旋转液面

$$
z=\frac{\omega^2r^2}{2g}+C
$$

#### 差压计

$$
p_A-p_B=(\rho_m-\rho)g\Delta h
$$

#### 平面总压力与压心

$$
F=\rho gh_cA
$$

$$
y_D=y_c+\frac{I_{cx}}{y_cA}
$$

#### 曲面总压力

$$
F_x=\rho gh_cA_x
$$

$$
F_z=\rho gV_p
$$

$$
F=\sqrt{F_x^2+F_z^2}
$$

#### 浮力与稳定性

$$
F_B=\rho gV_{\mathrm{disp}}
$$

$$
BM=\frac{I_0}{V},\qquad GM=BM-BG
$$

### 8.2 易错点

:::WARNING
1. $h$ 是到自由液面的**竖直深度**，不是沿斜面的距离。

2. “同一水平面压强相等”只适用于同种、连通、静止且仅受重力的液体。

3. 压力表读数通常为相对压强；真空度为正值，负相对压强为负值。

4. 测压管读数应取液柱的竖直高度；斜管刻度 $l$ 需乘 $\sin\alpha$。

5. 平面总压力作用于压心，不作用于形心；只有均匀压强分布时二者重合。

6. $I_{cx}$ 必须绕过形心且平行于自由液面的轴计算。

7. 曲面水平分力取竖直投影；竖直分力取压力体重量。

8. 虚压力体的竖直分力方向向上，实压力体方向向下。

9. 潜体稳定看重心与浮心；浮体稳定看重心与定倾中心。

10. 自由落体时有效重力为零，敞口容器内相对压强处处为零。
:::

---

# 第二部分：练习题

下面的题目按本课程英文考试风格组织。题目均给出中英文，解答以中文推导为主，并附英文结论。题源包括历年卷原题、课本思考题与习题、课件例题，以及少量综合自测题。

## A1 概念与简答

### A1-1 静水压强的两个性质

**中文题目**

说明静止流体中一点压强的两个基本性质，并解释为什么静止流体中不存在剪应力。

**English problem**

State the two basic properties of pressure at a point in a static fluid, and explain why shear stress cannot exist in a fluid at rest.

<details>
<summary>答案与讲解</summary>

静水压强具有：

1. 方向垂直于受压面，并指向流体内部；
2. 同一点压强与受压面方向无关，即 $p_x=p_y=p_z=p$。

若存在剪应力，流体会持续发生剪切变形，从而不能维持静止，因此静止流体中 $\tau=0$。

**English answer**

Hydrostatic pressure acts normally and compressively on a surface, and it is isotropic at a point. Any nonzero shear stress would continuously deform the fluid, so a fluid at rest must have zero shear stress.
</details>

### A1-2 等压面与自由落体

`【2024–2025 春夏期末原题改编】`

**中文题目**

盛水的敞口容器作自由落体。求液体内部及容器壁面的相对压强分布，并说明原因。

**English problem**

An open container filled with water is in free fall. Determine the gauge-pressure distribution in the liquid and on the container wall, and explain the result.

<details>
<summary>答案与讲解</summary>

自由落体参考系中，向上的惯性力与向下的重力相互抵消：

$$
\boldsymbol f_{\mathrm{eff}}=\boldsymbol g-\boldsymbol a=0
$$

因此：

$$
dp=\rho\boldsymbol f_{\mathrm{eff}}\cdot d\boldsymbol r=0
$$

所以液体内压强处处相同。容器敞口，自由液面相对压强为零，因此：

$$
\boxed{p=0}
$$

液体内部和壁面上的相对压强均为零。

**English answer**

The effective body force is zero in free fall, so $dp=0$. Since the free surface is open to the atmosphere, the gauge pressure is zero everywhere in the liquid and on the wall.
</details>

### A1-3 液体静力学悖论

`【2024–2025 春夏期末原题】`

**中文题目**

四个敞口容器底面积均为 $A$，装有相同液体且液深均为 $h$，但容器形状不同。求各容器底面所受总压力。若容器放在桌面上，桌面对容器的支持力是否等于液体对底面的总压力？

**English problem**

Four open containers have the same bottom area $A$ and contain the same liquid to the same depth $h$, but their shapes are different. Find the total hydrostatic force on each bottom. Is the table reaction equal to the hydrostatic force on the bottom?

<details>
<summary>答案与讲解</summary>

底面深度均为 $h$，因此底面相对压强均为：

$$
p=\rho gh
$$

底面为水平平面，压强均匀，所以：

$$
\boxed{F_b=\rho ghA}
$$

四个容器底面总压力相同。

桌面对容器的支持力等于容器和液体的总重量，通常不等于 $F_b$。容器侧壁静水压力存在竖直分量，承担了二者差值。

**English answer**

Each bottom force is $F_b=\rho ghA$. The table reaction equals the total weight of the container and liquid, so it is generally different from the hydrostatic force on the bottom; the vertical components of wall pressure account for the difference.
</details>

### A1-4 相同面积与形心深度的三种平面

`【课本思考题 3-14】`

**中文题目**

三个形状不同的平面浸没在水中，面积相同，形心淹没深度也相同。它们受到的静水总压力是否相同？压心深度是否相同？

**English problem**

Three plane surfaces of different shapes are submerged in water. They have the same area and the same centroid depth. Are their resultant hydrostatic forces equal? Are their centers of pressure at the same depth?

<details>
<summary>答案与讲解</summary>

总压力：

$$
F=\rho gh_cA
$$

由于 $A$ 和 $h_c$ 相同，因此总压力相同。

压心位置：

$$
y_D=y_c+\frac{I_{cx}}{y_cA}
$$

不同形状的 $I_{cx}$ 一般不同，因此压心位置通常不同。

**English answer**

The resultant forces are equal because $F=\rho gh_cA$. The centers of pressure are generally different because the centroidal area moments of inertia are different.
</details>

### A1-5 平面绕形心轴转动

`【课本思考题 3-15】`

**中文题目**

一块平面闸门的一侧挡水。闸门绕通过形心的水平轴转过任意角度后，总压力大小、方向和压心是否改变？

**English problem**

A plane gate retains water on one side. It rotates through an arbitrary angle about a horizontal axis passing through its centroid. Discuss whether the magnitude, direction, and center of pressure change.

<details>
<summary>答案与讲解</summary>

若转动过程中面积和形心的垂直淹没深度保持不变：

- 总压力大小 $F=\rho gh_cA$ 不变；
- 总压力始终垂直于闸门，因此空间方向改变；
- 压心由面积惯性矩和几何关系决定，一般改变。

**English answer**

The magnitude remains unchanged if the centroid depth is unchanged. The force direction changes because it is always normal to the gate, and the center of pressure generally changes.
</details>

### A1-6 同一容器中的差压计

`【课件概念题】`

**中文题目**

同一静止水箱内的两点 $A,B$ 接到一个水银 U 形差压计。若 $A,B$ 位于同一水平面，差压计读数是多少？

**English problem**

Two points $A$ and $B$ in the same static water tank are connected to a mercury U-tube differential manometer. If the two points are at the same elevation, what is the manometer reading?

<details>
<summary>答案与讲解</summary>

同一种连通静止水体中，同一水平面压强相等：

$$
p_A=p_B
$$

因此差压计两侧不存在压差，水银界面高差：

$$
\boxed{\Delta h=0}
$$

**English answer**

Since $A$ and $B$ are at the same elevation in the same connected static liquid, $p_A=p_B$. Therefore, the manometer deflection is zero.
</details>

---

## A2 计算与综合应用

### A2-1 负压、绝对压强与真空高度

`【课件例题】`

**中文题目**

密闭水箱自由液面的相对压强为 $p_0=-44.5\ \mathrm{kPa}$。点 $M$ 位于自由液面下 $0.30\ \mathrm{m}$。取 $p_a=98\ \mathrm{kPa}$，$\gamma_w=9.8\ \mathrm{kN/m^3}$。求：

1. 点 $M$ 的相对压强；
2. 点 $M$ 的绝对压强；
3. 点 $M$ 的真空度和真空高度。

**English problem**

The gauge pressure above the free surface in a sealed water tank is $p_0=-44.5\ \mathrm{kPa}$. Point $M$ is $0.30\ \mathrm{m}$ below the free surface. Take $p_a=98\ \mathrm{kPa}$ and $\gamma_w=9.8\ \mathrm{kN/m^3}$. Find the gauge pressure, absolute pressure, vacuum pressure, and vacuum head at $M$.

<details>
<summary>答案与讲解</summary>

相对压强：

$$
p_M=p_0+\gamma_wh
$$

$$
p_M=-44.5+9.8\times0.30=-41.56\ \mathrm{kPa}
$$

绝对压强：

$$
p_{M,\mathrm{abs}}=p_a+p_M
$$

$$
p_{M,\mathrm{abs}}=98-41.56=56.44\ \mathrm{kPa}
$$

真空度：

$$
p_v=-p_M=41.56\ \mathrm{kPa}
$$

真空高度：

$$
h_v=\frac{p_v}{\gamma_w}=\frac{41.56}{9.8}=4.24\ \mathrm{mH_2O}
$$

**English answer**

$$
p_M=-41.56\ \mathrm{kPa},\quad
p_{M,\mathrm{abs}}=56.44\ \mathrm{kPa}
$$

$$
p_v=41.56\ \mathrm{kPa},\quad h_v=4.24\ \mathrm{mH_2O}
$$
</details>

### A2-2 水银差压计

`【课件公式综合题】`

**中文题目**

同一水平面上的两点 $A,B$ 位于水中，用水银 U 形差压计连接。水银液面高差为 $\Delta h=0.20\ \mathrm{m}$，且 $A$ 侧水银面较低。取 $\rho_{Hg}/\rho_w=13.6$。求 $p_A-p_B$ 及测压管水头差。

**English problem**

Points $A$ and $B$ are at the same elevation in water and are connected by a mercury U-tube differential manometer. The mercury-level difference is $\Delta h=0.20\ \mathrm{m}$, with the mercury level lower on side $A$. Take $\rho_{Hg}/\rho_w=13.6$. Find $p_A-p_B$ and the piezometric-head difference.

<details>
<summary>答案与讲解</summary>

$A$ 侧水银面更低，说明 $p_A>p_B$。

$$
p_A-p_B=(\rho_{Hg}-\rho_w)g\Delta h
$$

$$
p_A-p_B=(13.6-1)\gamma_w\Delta h
$$

$$
p_A-p_B=12.6\times9.8\times0.20=24.70\ \mathrm{kPa}
$$

由于 $z_A=z_B$：

$$
H_A-H_B=\frac{p_A-p_B}{\rho_wg}
$$

$$
H_A-H_B=12.6\times0.20=2.52\ \mathrm{m}
$$

**English answer**

$$
p_A-p_B=24.70\ \mathrm{kPa},\qquad H_A-H_B=2.52\ \mathrm{mH_2O}
$$
</details>

### A2-3 旋转液体自由液面

`【综合自测】`

**中文题目**

半径为 $R=0.40\ \mathrm{m}$ 的圆柱容器绕竖直轴以 $\omega=6.0\ \mathrm{rad/s}$ 匀速旋转。求容器边缘与轴线处自由液面的高差。

**English problem**

A cylindrical container of radius $R=0.40\ \mathrm{m}$ rotates about its vertical axis at $\omega=6.0\ \mathrm{rad/s}$. Determine the difference in free-surface elevation between the wall and the axis.

<details>
<summary>答案与讲解</summary>

$$
\Delta z=\frac{\omega^2R^2}{2g}
$$

$$
\Delta z=\frac{6^2\times0.40^2}{2\times9.81}=0.294\ \mathrm{m}
$$

**English answer**

The free surface at the wall is $0.294\ \mathrm{m}$ higher than that at the axis.
</details>

### A2-4 倾斜矩形闸门

`【课件例题】`

**中文题目**

一矩形平面与水平面夹角为 $30^\circ$，上边缘与下边缘的垂直淹没深度分别为 $h=1\ \mathrm{m}$ 和 $H=3\ \mathrm{m}$，宽度 $b=5\ \mathrm{m}$。求总静水压力及压心位置。

**English problem**

A rectangular plane is inclined at $30^\circ$ to the horizontal. The vertical depths of its upper and lower edges are $h=1\ \mathrm{m}$ and $H=3\ \mathrm{m}$, respectively, and its width is $b=5\ \mathrm{m}$. Find the resultant hydrostatic force and the center of pressure.

<details>
<summary>答案与讲解</summary>

沿斜面长度：

$$
l=\frac{H-h}{\sin30^\circ}=\frac{2}{0.5}=4\ \mathrm{m}
$$

面积：

$$
A=lb=4\times5=20\ \mathrm{m^2}
$$

形心垂直深度：

$$
h_c=\frac{H+h}{2}=2\ \mathrm{m}
$$

总压力：

$$
F=\gamma_wh_cA=9.8\times2\times20=392\ \mathrm{kN}
$$

形心沿斜面到自由液面的距离：

$$
y_c=\frac{h_c}{\sin30^\circ}=4\ \mathrm{m}
$$

$$
I_{cx}=\frac{bl^3}{12}=\frac{5\times4^3}{12}=\frac{80}{3}\ \mathrm{m^4}
$$

$$
y_D=y_c+\frac{I_{cx}}{y_cA}
=4+\frac{80/3}{4\times20}
=\frac{13}{3}\ \mathrm{m}
$$

对应垂直深度：

$$
h_D=y_D\sin30^\circ=\frac{13}{6}=2.17\ \mathrm{m}
$$

**English answer**

$$
F=392\ \mathrm{kN},\qquad
 y_D=4.33\ \mathrm{m}\ \text{along the plane},\qquad
 h_D=2.17\ \mathrm{m}
$$
</details>

### A2-5 圆弧闸门总压力

`【2021–2022 秋冬期末原题】`

**中文题目**

圆弧闸门半径 $r=4\ \mathrm{m}$、长度 $b=5\ \mathrm{m}$，圆心角为 $30^\circ$。圆弧上端点 $B$ 位于自由液面下 $1\ \mathrm{m}$。求闸门所受静水总压力。

**English problem**

A curved gate is a circular arc of radius $r=4\ \mathrm{m}$ and length $b=5\ \mathrm{m}$, subtending an angle of $30^\circ$. Its upper end $B$ is $1\ \mathrm{m}$ below the free surface. Determine the resultant hydrostatic force on the gate.

> **图片占位符**：插入 `【历年卷4】21-22秋冬期末.pdf` 第 5 页图 4-2 圆弧闸门。

<details>
<summary>答案与讲解</summary>

圆弧竖直投影高度：

$$
d=r\sin30^\circ=2\ \mathrm{m}
$$

投影面积：

$$
A_x=bd=5\times2=10\ \mathrm{m^2}
$$

投影形心深度：

$$
h_c=1+\frac{d}{2}=2\ \mathrm{m}
$$

水平分力：

$$
F_x=\gamma_wh_cA_x
=9.8\times2\times10
=196\ \mathrm{kN}
$$

由压力体几何关系，$AB=r-r\cos30^\circ=0.536\ \mathrm{m}$，压力体体积为：

$$
V_p=b\left[
1\times AB+
\frac{30^\circ}{360^\circ}\pi r^2-
\frac12d(r-AB)
\right]
$$

代入得到：

$$
F_z=\gamma_wV_p=61.8\ \mathrm{kN}
$$

总压力：

$$
F=\sqrt{F_x^2+F_z^2}
$$

$$
F=\sqrt{196^2+61.8^2}=205.5\ \mathrm{kN}
$$

**English answer**

$$
F_x=196\ \mathrm{kN},\qquad
F_z=61.8\ \mathrm{kN},\qquad
F=205.5\ \mathrm{kN}
$$
</details>

### A2-6 两侧有水的圆柱堵体

`【2023–2024 秋冬期末原题改编】`

**中文题目**

竖直隔板上有高 $a=1.0\ \mathrm{m}$、宽 $b=1.0\ \mathrm{m}$ 的矩形孔，用直径 $d=2.0\ \mathrm{m}$ 的圆柱堵住。隔板两侧均为水，两侧自由液面高差为 $z=0.60\ \mathrm{m}$，较高侧液深为 $h=2.0\ \mathrm{m}$。求作用在圆柱上的合力。

**English problem**

A rectangular opening of height $a=1.0\ \mathrm{m}$ and width $b=1.0\ \mathrm{m}$ in a vertical partition is blocked by a cylinder of diameter $d=2.0\ \mathrm{m}$. Water exists on both sides, and the free-surface elevation difference is $z=0.60\ \mathrm{m}$. Determine the resultant hydrostatic force on the cylinder.

> **图片占位符**：插入 `【历年卷2】23-24秋冬期末.pdf` 第 1 页圆柱堵孔示意图，或课件 `【Chapter2（3）】Hydrostatics_English.pdf` 第 50 页对应图。

<details>
<summary>答案与讲解</summary>

两侧水平分力的差等于液面高差形成的均匀压强差作用于矩形投影：

$$
F_x=\gamma_wabz
$$

$$
F_x=9.8\times1\times1\times0.60=5.88\ \mathrm{kN}
$$

竖直分力等于圆柱排开的整圆柱体积所对应的水重：

$$
F_z=\gamma_w\frac{\pi d^2}{4}b
$$

按课件的压力体构造，该竖直分力方向向上。

$$
F_z=9.8\times\frac{\pi\times2^2}{4}\times1
=30.79\ \mathrm{kN}
$$

合力：

$$
F=\sqrt{F_x^2+F_z^2}
$$

$$
F=\sqrt{5.88^2+30.79^2}=31.35\ \mathrm{kN}
$$

方向：

$$
\theta=\arctan\frac{F_z}{F_x}=79.2^\circ
$$

**English answer**

$$
F_x=5.88\ \mathrm{kN},\quad
F_z=30.79\ \mathrm{kN},\quad
F=31.35\ \mathrm{kN},\quad
\theta=79.2^\circ
$$
</details>

### A2-7 漂浮物的浸没比例

`【阿基米德原理综合题】`

**中文题目**

体积为 $0.080\ \mathrm{m^3}$、质量为 $60\ \mathrm{kg}$ 的均质物体放入水中。判断它最终的状态，并求漂浮时浸没体积和浸没体积比例。

**English problem**

A homogeneous body has a volume of $0.080\ \mathrm{m^3}$ and a mass of $60\ \mathrm{kg}$. It is placed in water. Determine its final state and calculate the submerged volume and submerged-volume fraction when floating.

<details>
<summary>答案与讲解</summary>

若完全浸没，最大浮力：

$$
F_{B,\max}=\rho_wgV
=1000\times9.81\times0.080
=784.8\ \mathrm{N}
$$

重力：

$$
G=mg=60\times9.81=588.6\ \mathrm{N}
$$

由于 $F_{B,\max}>G$，物体上浮并最终漂浮。

漂浮平衡：

$$
\rho_wgV_{\mathrm{sub}}=mg
$$

$$
V_{\mathrm{sub}}=\frac{m}{\rho_w}=\frac{60}{1000}=0.060\ \mathrm{m^3}
$$

浸没比例：

$$
\frac{V_{\mathrm{sub}}}{V}=\frac{0.060}{0.080}=0.75
$$

**English answer**

The body floats. Its submerged volume is $0.060\ \mathrm{m^3}$, corresponding to a submerged fraction of $75\%$.
</details>

### A2-8 浮体定倾稳定性

`【综合自测】`

**中文题目**

一长方体浮箱长 $L=4.0\ \mathrm{m}$、宽 $B=2.0\ \mathrm{m}$，吃水深度 $T=0.50\ \mathrm{m}$。重心位于静水面上方 $0.35\ \mathrm{m}$。判断浮箱绕纵轴发生小倾斜时是否稳定。

**English problem**

A rectangular pontoon is $L=4.0\ \mathrm{m}$ long and $B=2.0\ \mathrm{m}$ wide, with a draft $T=0.50\ \mathrm{m}$. Its center of gravity is $0.35\ \mathrm{m}$ above the undisturbed water surface. Determine its initial stability for a small roll about the longitudinal axis.

<details>
<summary>答案与讲解</summary>

排水体积：

$$
V=LBT=4\times2\times0.5=4.0\ \mathrm{m^3}
$$

浮面对纵轴的面积惯性矩：

$$
I_0=\frac{LB^3}{12}
=\frac{4\times2^3}{12}
=2.667\ \mathrm{m^4}
$$

定倾半径：

$$
BM=\frac{I_0}{V}=\frac{2.667}{4}=0.667\ \mathrm{m}
$$

浮心位于吃水体积形心，即静水面下：

$$
\frac{T}{2}=0.25\ \mathrm{m}
$$

所以：

$$
BG=0.35+0.25=0.60\ \mathrm{m}
$$

定倾高：

$$
GM=BM-BG=0.667-0.60=0.067\ \mathrm{m}>0
$$

因此浮箱处于稳定平衡，但稳定裕度较小。

**English answer**

$$
BM=0.667\ \mathrm{m},\qquad BG=0.600\ \mathrm{m},\qquad GM=0.067\ \mathrm{m}>0
$$

The pontoon is initially stable, although the stability margin is small.
</details>

---

## 练习后的复习建议

做完本章题目后，应能够在看到图形时立即回答三个问题：

1. **压强从哪里开始算？**——确定自由液面或已知压强点。
2. **总压力怎样分解？**——平面直接用 $p_cA$，曲面分成 $F_x$ 与 $F_z$。
3. **作用点在哪里？**——平面用压心，曲面分别找投影压心与压力体形心，浮力通过排水体积形心。

考试中先画受力图、压强分布图或压力体，再代公式，通常比直接列式更不容易出错。
