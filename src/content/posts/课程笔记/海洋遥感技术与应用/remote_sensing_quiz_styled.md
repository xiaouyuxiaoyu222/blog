---
title: "RemoteSensing-Test: 海洋遥感技术与应用 | 期末默写与自测题库（点击展开答案）"
published: 2026-11-02
description: 基于本学期十份课程PPT整理的逐章闭卷默写清单、公式推导、曲线判读与综合计算题；所有答案默认折叠。
tags: [海洋遥感技术与应用]
category: 课程笔记
draft: false
---

## 概述

> 全课程共 **181 道**问答 / 推导 / 计算题；其中 **A类 141 道**（需要闭卷默写），**B类 37 道**（理解并会简答），**C类 3 道**（认识即可）。

**使用方法**：先阅读问题并在纸上作答，再点击题目右侧的「查看答案」展开；每道题独立折叠，进入页面时不会自动展开。

**资料范围**：本学期上传的10份PPT（绪论2份、辐射传输2份、卫星轨道2份、图像处理2份、水色遥感2份）。“综合计算”章节使用依据PPT公式自拟的数据。

**记号提示**：`吸收率`是无量纲能量比例；`吸收系数`单位通常是 $\mathrm{m^{-1}}$。同一个字母 $a$ 在不同章节可能代表不同物理量，务必根据单位辨识。

> **阅读方式**：浅蓝色卡片是题目，点击题目或「查看答案」即可展开；绿色「参考答案」标识下方是解析。每道题都可以单独收起。

---

## 目录

- [Chapter 1｜绪论与海洋遥感基础](#chapter-1) · 12题
- [Chapter 2｜辐射传输基础](#chapter-2) · 50题
- [Chapter 3｜卫星轨道与分辨率](#chapter-3) · 27题
- [Chapter 4｜数字图像处理与实践](#chapter-4) · 34题
- [Chapter 5｜水色遥感基础](#chapter-5) · 38题
- [Chapter 6｜综合计算、推导与判读模拟题](#chapter-6) · 20题

---

<a id="chapter-1"></a>
## Chapter 1｜绪论与海洋遥感基础

认识遥感系统、传感器分类和海洋观测目标。

### 1.1 遥感的概念、系统与分类

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q001 · [A] 什么是遥感？与现场测量相比有哪些特点？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

遥感是指**不直接接触目标**，利用传感器获取目标发射、反射或散射的电磁辐射等信号，经过处理、分析识别目标属性的技术。相对于船舶、浮标等现场观测，卫星遥感具有覆盖广、可重复观测、空间连续性强等优势；局限包括云遮挡（可见光/红外）、大气干扰、反演模型误差、只能直接感知有限表层信息。

*课件定位：绪论_1：遥感定义及特点。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q002 · [A] 主动遥感与被动遥感的根本区别是什么？各举3例。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**主动遥感**：传感器主动发射探测电磁波，测量回波；如雷达高度计、散射计、SAR、激光雷达。**被动遥感**：接收天然的反射太阳辐射或物体自身热辐射；如光学成像辐射计、红外辐射计、被动微波辐射计、光谱仪。判据是传感器**是否主动提供探测能量**。注意被动微波辐射计能够夜间观测热辐射。

*课件定位：绪论_1：主动/被动传感器。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q003 · [A] 遥感系统由哪5部分构成？分别完成什么任务？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

1. **目标及光学特性**：产生可区分的辐射或散射特征；2. **观测系统**：传感器接收目标信号；3. **数据传输系统**：记录、传输遥感数据；4. **地面接收与处理系统**：接收、定标、校正、生成产品；5. **应用系统**：反演、解译和业务应用。课堂PPT采用了这五项分类。

*课件定位：绪论_1；辐射传输_1第2页回顾。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q004 · [A] 卫星传感器接收的是什么信号？海洋光学遥感与热红外遥感分别接收什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

接收的是到达传感器的**电磁辐射信号**，可以是太阳光经大气、海表、水体反射或散射后的辐射，也可以是大气/海表自身发射的热辐射。光学水色遥感主要利用可见光波段的离水辐射；热红外遥感主要测海表自身热辐射及大气贡献。探测器将辐射信号转换成电信号，继而记录为数字数据。

*课件定位：绪论_1；辐射传输_1。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q005 · [B] 可以从哪些角度对遥感分类？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

常见分类：按**平台**分地面/航空/航天；按**探测能量**分主动/被动；按**电磁波段**分可见光、红外、微波等；按**观测对象**分陆地、气象、海洋等。具体分类并非完全互斥。

*课件定位：绪论_1：遥感概述。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q006 · [B] 遥感成像观测与非成像观测如何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

成像观测把空间位置映射成二维像元阵列，可看见地物空间结构；非成像观测记录某个观测足迹、方向或时间的辐射与物理量，不一定形成二维自然图像。高度计、散射计等可形成轨道数据或格点产品，但原始测量方式与光学成像仪不同。

*课件定位：绪论_1：遥感仪器。*

</details>

### 1.2 海洋遥感对象、优势和应用

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q007 · [A] 卫星海洋遥感主要监测哪些物理或生物地球化学变量？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

海表温度SST、海表高度SSH、海面风速/风向、有效波高、海冰范围、海表盐度SSS、叶绿素a、悬浮颗粒物、CDOM、浊度、海流相关动力结构（通过测高或追踪间接推断）、海面溢油等。具体产品依赖传感器与反演算法。

*课件定位：绪论_1：海洋遥感应用。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q008 · [B] 海表温度、海面高度、海面风、海表盐度、水色主要用哪些传感器？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

海温：热红外辐射计、被动微波辐射计；海面高度：雷达高度计；海面风：微波散射计，亦可利用SAR；海表盐度：L波段被动微波辐射计；水色：可见光多光谱/高光谱辐射计。不同仪器的原理与精度取决于产品。

*课件定位：绪论_1：仪器和应用案例。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q009 · [B] 为何需要卫星海洋观测？现场观测为何无法完全替代卫星？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

海洋面积大、变化快，船舶和固定浮标空间覆盖稀疏。卫星提供大区域、周期性、相对统一的观测，适于追踪海温锋、台风、赤潮、海冰等过程。但仍须依赖现场数据用于标定、验证和深入的水下观测。

*课件定位：绪论_1：海洋遥感必要性。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q010 · [B] 画出太阳—大气—海洋—传感器的观测链条，并标注关键过程。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

太阳入射光 → **大气吸收、散射** → **海表反射与海水透射** → **水体吸收、散射** → 离水辐射 → 再次经大气衰减与路径辐射 → 卫星。热红外情况下，主要初始信号来自海表热发射。答题应标出大气路径辐射和海面反射两项干扰。

*课件定位：绪论_2、辐射传输、水色遥感基础。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q011 · [C] 列出有代表性的海洋遥感卫星或任务，并说明主要用途。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

例如Seasat（早期海洋微波遥感）、SeaWiFS（海色）、MODIS/Aqua（多波段海色与海温）、Landsat/Sentinel-2（高空间分辨率沿岸观测）、Jason系列（雷达测高）、HY-1系列（海洋水色）。不同卫星的任务配置以课堂PPT为准。

*课件定位：绪论_2：卫星历史与案例。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q012 · [C] 原始卫星数据与高级遥感产品有何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

原始或低级数据主要记录探测器读数及校正所需辅助信息；较高级产品通过辐射定标、几何定位、大气校正及地球物理反演得到辐亮度、反射率或SST、叶绿素等产品。数据级别定义需看具体任务的官方产品说明。

*课件定位：绪论_2：数据获取和应用。*

</details>

---

<a id="chapter-2"></a>
## Chapter 2｜辐射传输基础

重点掌握辐亮度、半球积分、辐射传输方程与热辐射定律。

### 2.1 电磁波、几何与辐射度量

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q013 · [A] 写出电磁波波长、频率和光速的关系。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

在真空中 $$c=\lambda f,\qquad E_{\mathrm{photon}}=hf=\frac{hc}{\lambda}.$$ 在均匀介质中应改用相速度 $v=\lambda f$。$c$ 的单位为 $\mathrm{m\,s^{-1}}$，$\lambda$ 的单位为m，$f$ 的单位为Hz。

*课件定位：辐射传输_1第8—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q014 · [A] 可见光的主要波长范围及红绿蓝光大致分布？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课堂可记可见光约 **400—700 nm**，蓝光约400—500 nm，绿光约500—570 nm，红光约620—700 nm。光谱边界在不同教材间存在约定差异，按课件采用的范围回答。

*课件定位：辐射传输_1第13页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q015 · [B] 什么是偏振与极化？水平、垂直极化的参照方向是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

偏振描述电磁波电场矢量在垂直传播方向的平面内如何振动；线偏振、圆偏振、椭圆偏振为常见状态。微波遥感中H/V极化通常参照观测平面（由传播方向与当地法线张成）的垂直/平行电场方向。不同领域术语使用时须明确坐标约定。

*课件定位：辐射传输_1第14—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q016 · [B] 为什么微波遥感特别关注极化信息？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

不同介质的介电性质、海面粗糙度和观测角会影响水平/垂直极化的反射及散射。极化通道差异有助于区分海面风、海冰、降水等特征。

*课件定位：辐射传输_1：电磁波与极化。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q017 · [A] 立体角如何定义？单位是什么？整球与半球分别为多少？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

立体角 $\Omega=S/R^2$，单位sr；完整球面 $$\Omega=\int_0^{2\pi}\!\int_0^\pi \sin\theta\,d\theta\,d\phi=4\pi\;\mathrm{sr}.$$ 半球为$2\pi$ sr。

*课件定位：辐射传输_1第17—18页；辐射传输—2第3页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q018 · [A] 推导球面微元立体角 $d\Omega=\sin\theta\,d\theta\,d\phi$。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

球半径$R$，纬圈方向微弧长$R\sin\theta\,d\phi$，经线方向微弧长$R\,d\theta$。因此 $$dS=R^2\sin\theta\,d\theta\,d\phi;\qquad d\Omega=\frac{dS}{R^2}=\sin\theta\,d\theta\,d\phi.$$ 需要解释$\sin\theta$来自纬圈半径$R\sin\theta$。

*课件定位：辐射传输—2第3页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q019 · [A] 区别太阳天顶角、观测天顶角、入射角、卫星观测角。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

天顶角是某光线方向与当地竖直向上的夹角；太阳天顶角针对太阳方向，观测天顶角针对传感器视线。入射角是入射方向与表面法线的夹角；课堂中的卫星观测角与星下点参考法线有关。不同参考法线位置会导致角度差异。

*课件定位：辐射传输_1第19页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q020 · [A] 定义辐射能、辐射通量、辐射强度，并写出单位。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

辐射能$Q$：J。辐射通量$\Phi=dQ/dt$：W。辐射强度$I=d\Phi/d\Omega$：$\mathrm{W\,sr^{-1}}$，强调单位立体角的功率（通常针对点状辐射源方向量）。

*课件定位：辐射传输_1第20—23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q021 · [A] 定义辐亮度 $L$，写出表达式与单位，解释投影因子。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$L(\theta,\phi)=\frac{d^2\Phi}{dA\cos\theta\,d\Omega},\qquad [L]=\mathrm{W\,m^{-2}\,sr^{-1}}.$$ $dA\cos\theta$是面积元在**垂直于光传播方向**的平面上的投影面积，斜视时有效面积减少。

*课件定位：辐射传输—2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q022 · [A] 定义辐照度与辐射出射度，并说明它们和辐亮度的差异。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

辐照度$E=d\Phi_{\rm in}/dA$为单位面积**入射**通量；辐射出射度$M=d\Phi_{\rm out}/dA$为单位面积**离开**的通量；二者单位$\mathrm{W\,m^{-2}}$。辐亮度$L$额外描述传播方向，单位多出$\mathrm{sr^{-1}}$。

*课件定位：辐射传输_1第20—25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q023 · [A] 从辐亮度推导辐照度的半球积分表达式。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

按定义微元入射通量$d^2\Phi=L(\theta,\phi)dA\cos\theta\,d\Omega$，除以$dA$后对半球积分：$$E=\int_{2\pi}L(\theta,\phi)\cos\theta\,d\Omega=\int_0^{2\pi}\!\int_0^{\pi/2}L\cos\theta\sin\theta\,d\theta\,d\phi.$$ 注意$\cos\theta$来自投影面积，$\sin\theta$来自立体角微元。

*课件定位：辐射传输_1第23—25页；辐射传输—2第16—21页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q024 · [A] 什么叫光谱辐亮度与光谱辐照度？典型单位有哪些？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

它们是**单位波长间隔**对应的辐亮度或辐照度：$L_\lambda=dL/d\lambda$、$E_\lambda=dE/d\lambda$。若波长单位nm，则分别可用$\mathrm{W\,m^{-2}\,sr^{-1}\,nm^{-1}}$与$\mathrm{W\,m^{-2}\,nm^{-1}}$。对波长积分才得到非光谱量。

*课件定位：辐射传输_1：辐射度量。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q025 · [B] 上行/下行辐照度、PAR分别指什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

上行/下行分别表示辐射穿过水平面时向上/向下传播的辐照度；PAR为光合有效辐射，通常指400—700 nm范围可被光合作用利用的光子辐射，常以光子通量密度表示。

*课件定位：辐射传输_1：辐照度和光谱。*

</details>

### 2.2 反射、热辐射与朗伯表面

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q026 · [A] 吸收率、反射率、透射率如何定义？满足什么守恒关系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

同一波长、相同入射条件下 $$a=\frac{E_a}{E_i},\quad r=\frac{E_r}{E_i},\quad t=\frac{E_t}{E_i},\quad \boxed{a+r+t=1}.$$ 这三个量都是**无量纲的能量分数**，不要与体吸收系数$a(\lambda)$（$\mathrm{m^{-1}}$）混淆。

*课件定位：辐射传输—2第5—6页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q027 · [A] 写出基尔霍夫定律，说明局部热力学平衡的意义。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

在热力学平衡条件下，同一波长及一致的方向/偏振定义下，物体的发射率等于吸收率：$$\epsilon_\lambda=\alpha_\lambda.$$ 它使吸收和热发射联系起来，是海面热辐射遥感的基础。具体方向、偏振应匹配。

*课件定位：辐射传输—2第7—8页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q028 · [A] 黑体、灰体分别是什么？黑体与镜面、透明体的理想极限各为何？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

黑体能完全吸收所有入射辐射，$a=\epsilon=1$；灰体的发射率近似与波长无关且小于1。理想镜面$r=1,a=t=0$，理想无吸收透明体$t=1,a=r=0$（仅作极限模型）。真实表面通常介于这些极端之间。

*课件定位：辐射传输—2第7—8页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q029 · [A] 何时可以由 $a+r+t=1$ 得到 $\epsilon=1-r$？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

当**热力学平衡、物体不透明$t=0$**，并使吸收率、发射率、反射率定义对应相同的波长和角度条件时，$a=1-r$，由基尔霍夫定律得$\epsilon=a=1-r$。如果介质透明或量的角度/偏振定义不同，不能直接代换。

*课件定位：辐射传输—2第5—8页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q030 · [A] 区分菲涅耳反射率、漫反射率、反照率、遥感反射率和单次散射反照率。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

菲涅耳反射率$\rho$：界面反射的能量分数，依入射角、折射率、偏振而变；漫反射率$R=E_u/E_d$：向上与向下辐照度之比；反照率：半球总反射通量与入射通量之比；遥感反射率$R_{rs}=L_w/E_d(0^+)$，单位$\mathrm{sr^{-1}}$；单次散射反照率$\omega_0=b/(a+b)$：衰减中来自散射的比例。

*课件定位：辐射传输—2第9—12页；水色遥感基础-2第10—18页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q031 · [A] 朗伯表面的定义是什么？为什么其辐亮度与观测方向无关？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

理想朗伯表面满足**向各出射方向的辐亮度为同一常数**（各向同性辐亮度）。因为斜视方向的投影面积因子为$\cos\theta$，因此辐射强度随角度满足余弦定律；投影修正后的辐亮度保持不变。

*课件定位：辐射传输_1第38—40页；辐射传输—2第16—21页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q032 · [A] 推导朗伯表面的 $E=\pi L$（或 $M=\pi L$）。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

当$L$在出射半球与方向无关，$$M=\int_0^{2\pi}\int_0^{\pi/2}L\cos\theta\sin\theta\,d\theta\,d\phi=L(2\pi)(1/2)=\pi L.$$ 对半球入射各向同性辐射亦有$E=\pi L$。**记住：$\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta=1/2$。**

*课件定位：辐射传输—2第16—21页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q033 · [A] 普朗克定律写什么公式？如何理解横纵坐标和曲线下面积？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

按波长表示的黑体光谱辐亮度：$$B_\lambda(T)=\frac{2hc^2}{\lambda^5}\frac1{e^{hc/(\lambda k_BT)}-1}.$$ 横轴波长$\lambda$，纵轴光谱辐亮度$B_\lambda$；在某波段对波长积分得到该波段的辐亮度。对**出射半球**再按立体角和投影因子积分，黑体辐射出射度为$M=\pi\int_0^\infty B_\lambda(T)d\lambda$。所以仅波长曲线的面积是辐亮度积分，不自动等于$M$。

*课件定位：辐射传输_1第48—54页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q034 · [A] 维恩位移定律的公式及物理意义是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\lambda_{\max}T\approx 2.898\times10^{-3}\;\mathrm{m\cdot K}.$$ $T$升高，按波长表示的黑体峰值波长向短波移动。例：5800 K约$0.50\,\mu$m；300 K约$9.66\,\mu$m。

*课件定位：辐射传输_1第49—53页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q035 · [A] 斯忒藩—玻耳兹曼定律怎么写？与普朗克定律怎样联系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

黑体总辐射出射度$$M=\sigma T^4,\quad \sigma\approx5.67\times10^{-8}\;\mathrm{W\,m^{-2}\,K^{-4}}.$$ 该式来自对普朗克光谱在全波长及出射半球积分。理想灰体近似为$M=\epsilon\sigma T^4$。

*课件定位：辐射传输_1第50—54页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q036 · [A] 瑞利—金斯近似如何写，何时成立？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

当$hf\ll k_BT$（低频、长波）时，黑体光谱辐亮度按频率为 $$B_f(T)\approx\frac{2k_BT f^2}{c^2}.$$ 这是普朗克定律的低频近似；在短波高频范围会严重失效。

*课件定位：辐射传输_1第54—58页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q037 · [A] 什么是亮温？亮温与物理温度什么时候相同？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

亮温$T_B$是让**理想黑体**在指定频率/波长产生与观测相同辐亮度时的等效温度。若观测目标本身近似黑体且大气可忽略，亮温近似物理温度；当发射率小于1或大气影响显著时，两者不同。

*课件定位：辐射传输_1：热辐射与亮温。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q038 · [B] 为何海表温度适合用热红外与被动微波遥感？二者条件差别在哪里？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

海表有温度相关的热辐射。热红外可提供较高空间分辨率，但受云遮挡影响明显；被动微波可穿过多数非强降水云层、可全天时，但通常空间分辨率较粗并受海面粗糙度等影响。

*课件定位：辐射传输_1及绪论_1：热辐射应用。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q039 · [A] 太阳和地球的典型黑体谱曲线如何画？为何两者峰值位置不同？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

横轴$\lambda$（对数坐标或线性分段均可），纵轴$B_\lambda$；约5800 K太阳峰值在0.5 μm附近，约300 K地球峰值在10 μm附近。应画太阳的短波峰和地球的长波峰，并注明维恩位移定律。比较曲线时须说明按单位面积或适当归一化，避免把到达地球的太阳辐照度与太阳表面辐亮度直接混用。

*课件定位：辐射传输_1：黑体光谱图。*

</details>

### 2.3 介质衰减与散射

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q040 · [A] 复折射率的实部、虚部各表示什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

复折射率可以写为$\tilde n=n+i\kappa$（符号正负取决于时间因子约定）。实部$n$控制相速度及折射；虚部$\kappa$与电磁波在介质中的吸收衰减相关，理想非吸收介质$\kappa=0$。

*课件定位：辐射传输—2第11—15页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q041 · [B] 斯涅尔折射定律如何写？光从空气进入水通常向哪边偏折？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$n_1\sin\theta_1=n_2\sin\theta_2.$$ 从空气（$n_1\approx1$）进入水（$n_2\approx1.33$）时，折射角小于入射角，光线偏向法线；角度均相对于界面法线测量。

*课件定位：辐射传输—2：折射与菲涅耳反射。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q042 · [A] 吸收、散射、衰减系数的关系及单位是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

沿指定光束传播，衰减系数$k_a=k_{ab}+k_{sc}$，其中$k_{ab}$吸收系数、$k_{sc}$散射导致的移出光束的系数，三者单位均为$\mathrm{m^{-1}}$。水体光学文献常写$c=a+b$。

*课件定位：辐射传输—2第11—20页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q043 · [A] 推导朗伯—比尔定律，解释负号。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

微段$dz$中，衰减量与当前辐亮度及路径长度成正比：$dL=-k_a(z)L(z)dz$，分离变量：$$\int_{L(0)}^{L(h)}\frac{dL}{L}=-\int_0^hk_a(z)dz,$$ 得 $$\boxed{L(h)=L(0)e^{-\tau(0,h)}}.$$ 负号代表光束能量沿前进路径降低。

*课件定位：辐射传输—2第18—20页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q044 · [A] 光学厚度定义、单位和物理意义？与透射率怎样联系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\tau(z_1,z_2)=\int_{z_1}^{z_2}k_a(z)dz,\qquad t=e^{-\tau}.$$ $\tau$无量纲，反映路径上累计衰减。$\tau=0\Rightarrow t=1$；$\tau=1\Rightarrow t\approx0.368$；$\tau\gg1\Rightarrow t\to0$。斜程若采用平行平面大气近似，可有$\tau_{slant}\approx\tau_{vertical}/\cos\theta$。

*课件定位：辐射传输—2第18—21页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q045 · [A] 体积散射函数 $\beta(\theta)$ 的含义与单位是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

体积散射函数描述**单位传播路径、单位立体角**上向散射角$\theta$方向散射的辐射比例，典型单位$\mathrm{m^{-1}\,sr^{-1}}$。它反映散射的角分布，与总体散射系数不同。

*课件定位：辐射传输—2第22—25页；水色遥感基础-2第25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q046 · [A] 散射系数如何由体积散射函数积分？后向散射系数积分范围是多少？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

对完整方向积分：$$b=\int_{4\pi}\beta(\theta)\,d\Omega=2\pi\int_0^\pi\beta(\theta)\sin\theta\,d\theta.$$ 对散射角$\theta\in[\pi/2,\pi]$的后半球积分得 $$b_b=2\pi\int_{\pi/2}^\pi\beta(\theta)\sin\theta\,d\theta.$$ 假设散射只依赖散射角时可把方位角积分化为$2\pi$。

*课件定位：辐射传输—2第22—25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q047 · [A] 什么是瑞利散射与米氏散射？为什么晴天天空偏蓝？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

瑞利散射适用于粒径远小于波长的粒子，典型散射强度近似与$\lambda^{-4}$成正比；大气分子短波散射更强，因此晴天天空常呈蓝色。米氏散射针对尺寸与波长相近（或更大）的粒子，通常波长依赖较弱且前向散射明显，如气溶胶、水滴。

*课件定位：辐射传输—2第27—33页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q048 · [B] 散射截面与粒径分布如何决定总体吸收和散射系数？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课件给出 $$k_{ab}=\int D(A)\sigma_{ab}(A)\,dA,\qquad k_{sc}=\int D(A)\sigma_{sc}(A)\,dA.$$ $D(A)$是相应粒子特征量$A$的数目分布；$\sigma$是单个粒子的吸收/散射截面，单位通常$\mathrm{m^2}$。总体效应是各种粒子贡献的加总。

*课件定位：辐射传输—2第62页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q049 · [B] 为何水体后向散射与离水辐亮度密切相关？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

进入水中的太阳光经过水分子、悬浮颗粒物散射，有一部分转向上方，穿过海气界面成为离水辐射；后向散射增加通常提高上行信号。与此同时吸收会减弱光场，二者共同决定$R_{rs}$。

*课件定位：水色遥感基础-2第21—25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q050 · [B] 气溶胶如何影响卫星接收到的辐射？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

气溶胶既可以吸收太阳辐射、衰减目标信号，也可以向传感器方向散射太阳光，形成额外路径辐射；其粒径、成分、光学厚度和散射相函数影响大气校正的准确性。

*课件定位：辐射传输—2第46—59页。*

</details>

### 2.4 辐射传输方程及边界条件

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q051 · [A] 忽略散射时，辐射传输方程是如何由吸收与发射两项得到的？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

吸收使$dL_1=-k_{ab}Ldz$；局部热力学平衡下，薄层自身发射近似$dL_2=k_{ab}L_Bdz$。合并：$$\boxed{\frac{dL}{dz}=-k_{ab}L+k_{ab}L_B}.$$ **依据：朗伯—比尔定律、基尔霍夫定律、能量收支。**

*课件定位：辐射传输—2第36—38页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q052 · [A] 写出辐射传输方程的正式积分解，解释每一项。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

设$L(0)=L_s$：$$\boxed{L(h)=L_se^{-\tau(0,h)}+\int_0^h k_{ab}(z)L_B(z)e^{-\tau(z,h)}dz}.$$ 第一项是光源发射后**穿越全路径并衰减**的剩余辐亮度；第二项是每层介质**自身热发射**后经剩余路径衰减并积分的贡献。$L_B$是同温黑体辐亮度，$k_{ab}$吸收系数，$\tau$光学厚度。

*课件定位：辐射传输—2第38—39页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q053 · [A] 推导等温大气简化形式 $L=L_se^{-\tau}+L_B(1-e^{-\tau})$。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

在$L_B$近似常量时，令$x=\tau(z,h)$，有$dx=-k_{ab}(z)dz$。原积分项变为$L_B\int_0^{\tau(0,h)}e^{-x}dx=L_B(1-e^{-\tau})$，故 $$\boxed{L=L_se^{-\tau}+L_B(1-e^{-\tau})}.$$ 该式忽略散射，要求近似等温。

*课件定位：辐射传输—2第38—41页（由积分解进一步化简）。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q054 · [A] 辐射传输中 $L_s,L_B,k_{ab},\tau,t$ 的物理意义及单位？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$L_s$边界源辐亮度；$L_B$介质温度对应的黑体辐亮度（均为$\mathrm{W\,m^{-2}\,sr^{-1}}$，光谱形式另含$\mathrm{nm^{-1}}$）；$k_{ab}$吸收系数（$\mathrm{m^{-1}}$）；$\tau$累计光学厚度（无量纲）；$t=e^{-\tau}$光束透射率（无量纲）；$z,h$沿传播方向路径位置/终点（m）。

*课件定位：辐射传输—2第36—41页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q055 · [A] 当 $\tau\to0$ 和 $\tau\to\infty$ 时等温大气接收辐亮度分别趋向什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$L=L_se^{-\tau}+L_B(1-e^{-\tau}).$$ 若$\tau\to0$，$L\to L_s$，大气透明；若$\tau\to\infty$，$L\to L_B$，远方目标被完全遮蔽，观测由介质本身热辐射主导（在等温模型下）。

*课件定位：辐射传输—2第38—41页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q056 · [A] 考虑散射后辐射传输方程有哪些增减项？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{\frac{dL}{dz}=-k_aL+k_{ab}L_B+k_{sc}L_{sc}}.$$
1. $-k_aL$：吸收和散射共同造成从原方向移出的损失；2. $+k_{ab}L_B$：介质热发射；3. $+k_{sc}L_{sc}$：其他方向散射进入观测方向的增益。$k_a=k_{ab}+k_{sc}$。

*课件定位：辐射传输—2第62页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q057 · [A] 为什么散射源项包含对 $4\pi$ 方向积分？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

传感器所关注的特定方向可能收到来自**各个其他传播方向**的光经散射转入，因此需在完整入射方向立体角上积分。例如课件：$$L_{sc}(z,\Omega)=\frac1{4\pi}\int_{4\pi}P(\Omega,\Omega')L(z,\Omega')d\Omega'.$$ $P$为散射相函数（归一化约定须与前面的$1/4\pi$一致）。

*课件定位：辐射传输—2第62页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q058 · [A] 推导海表热辐射、大气上行发射、海面反射大气下行发射三项的总和。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课堂简化模型：海面自身发射到卫星为$t\epsilon_sL_S$；大气向上发射为$(1-t)L_A$；大气向下发射经海表反射并向上透过大气为$t(1-\epsilon_s)(1-t)L_A$。相加：$$\boxed{L=(1-t)L_A+t[\epsilon_sL_S+(1-\epsilon_s)(1-t)L_A]}.$$ 假设大气等温、忽略散射，海表近似不透明；式中$t$是大气透射率。

*课件定位：辐射传输—2第63—66页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q059 · [B] 何为光学质量？为什么斜入射时衰减中的 $\tau$ 要除以 $\cos\theta$？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

在平行平板近似下，垂直厚度$dz$对应斜向行程$ds=dz/\cos\theta$，因此斜程光学厚度$\tau_{slant}=\tau_{vertical}/\cos\theta$；$m\approx1/\cos\theta$可视为相对光学质量。大天顶角时曲率和折射不可忽略。

*课件定位：辐射传输—2第43—48页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q060 · [B] 大气窗口是什么？举出遥感常用窗口。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

大气窗口是大气吸收相对弱、透射率相对高的光谱区间。典型包括可见光部分、热红外3—5 μm和8—14 μm内的适用窗口，以及部分微波波段；课程强调热红外约3.7—4.1 μm、10—12 μm。具体范围随大气成分和观测条件而变。

*课件定位：辐射传输—2第59—61页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q061 · [B] 大气中氧气、水汽、臭氧、气溶胶分别有哪些重要光学影响？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

氧气在特定波段吸收；水汽具有多组红外/微波吸收带；臭氧吸收紫外并影响部分可见/红外波段；气溶胶主要通过散射和一定吸收改变太阳辐射传输。这些过程使大气透射率呈明显的光谱选择性。

*课件定位：辐射传输—2第43—61页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q062 · [B] Angström关系如何描述气溶胶光学厚度随波长变化？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

常用经验形式为$$\tau_A(\lambda)=\beta\lambda^{-\alpha}$$（$\lambda$的单位须与系数定义一致），或$$\frac{\tau_A(\lambda_1)}{\tau_A(\lambda_2)}=\left(\frac{\lambda_1}{\lambda_2}\right)^{-\alpha}.$$ $\alpha$反映光谱变化陡峭程度，常与粒径分布有关。

*课件定位：辐射传输—2：气溶胶光学厚度。*

</details>

---

<a id="chapter-3"></a>
## Chapter 3｜卫星轨道与分辨率

重点掌握轨道、IFOV及四大分辨率的计算。

### 3.1 轨道动力学与轨道描述

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q063 · [A] 开普勒三大定律分别是什么？对应卫星轨道哪些性质？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**第一（轨道）**：理想二体运动的束缚轨道是椭圆，地球在一个焦点；**第二（面积）**：地心—卫星连线等时扫过等面积，$dA/dt=\text{常数}$；**第三（周期）**：$T^2=4\pi^2a^3/(GM)$，周期随半长轴增大而增加。分别确定轨道形状、沿轨速度变化、周期与轨道大小关系。

*课件定位：卫星轨道—1第7—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q064 · [A] 椭圆极坐标轨道方程及全部符号意义是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{r=\frac{a(1-e^2)}{1+e\cos\nu}}.$$ $r$为地心到卫星距离，$a$半长轴，$e$偏心率，$\nu$真近点角（近地点方向为零）；$b=a\sqrt{1-e^2}$为半短轴。此形式约定轨道中心体在焦点，$\nu=0$为近地点。

*课件定位：卫星轨道—1第10—15页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q065 · [A] 偏心率不同取值分别对应何种二体轨道？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$e=0$为圆；$0<e<1$为椭圆；$e=1$为抛物线；$e>1$为双曲线。椭圆束缚运动具有有限周期，后两者不构成闭合周期轨道。

*课件定位：卫星轨道—1第11—15页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q066 · [A] 第一宇宙速度怎样推导？公式及地表附近数值？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

忽略地球自转/大气，圆轨道中万有引力提供向心力：$$\frac{GMm}{r^2}=\frac{mv^2}{r}\Rightarrow\boxed{v_c=\sqrt{GM/r}}.$$ 在$ r\approx R_E$处约$7.9\;\mathrm{km/s}$。需注意它是地表附近圆轨道速度的理想值。

*课件定位：卫星轨道—1：卫星发射与宇宙速度。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q067 · [A] 第二宇宙速度怎样推导？为何等于同半径圆轨道速度的 $\sqrt2$ 倍？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

以无穷远势能为零，逃逸临界机械能为零：$\tfrac12mv_{esc}^2-GMm/r=0$，所以 $$v_{esc}=\sqrt{2GM/r}=\sqrt2v_c.$$ 地表附近约$11.2\;\mathrm{km/s}$，忽略大气阻力与地球自转。

*课件定位：卫星轨道—1：宇宙速度。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q068 · [A] 圆轨道周期怎样由万有引力求得？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

由$v=\sqrt{GM/r}$和$T=2\pi r/v$，得$$\boxed{T=2\pi\sqrt{\frac{r^3}{GM}}}.$$ 椭圆情况用半长轴$a$替代$r$，即开普勒第三定律。

*课件定位：卫星轨道—1第12—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q069 · [B] 为何椭圆轨道近地点速度快，远地点速度慢？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

由面积定律：$$\frac{dA}{dt}=\frac12r^2\dot\nu=\text{常量}.$$ 近地点$r$小，角速度$\dot\nu$更大；结合角动量守恒，可得近地点切向速度更大，远地点更慢。

*课件定位：卫星轨道—1第7—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q070 · [A] 轨道六根数分别是什么？各自决定什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

半长轴$a$（轨道大小）、偏心率$e$（轨道形状）、倾角$i$（相对赤道倾斜）、升交点赤经$\Omega$（轨道平面方位）、近地点幅角$\omega$（近地点方向）、近地点通过时刻$T_p$或某历元平近点角$M_0$（卫星相位）。

*课件定位：卫星轨道—1第20—28页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q071 · [B] 升交点、降交点、星下点、重复轨道分别指什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

升交点：卫星从南向北通过赤道面的位置；降交点相反。星下点：卫星与地心连线和地球表面交点（近似）。重复轨道：一定周期后星下点轨迹相对地球再次近似重合。

*课件定位：卫星轨道—1第20—30页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q072 · [A] 太阳同步、地球同步/静止、近赤道低倾角、高度计轨道有何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

太阳同步轨道通过轨道平面进动维持近似固定的当地太阳时，便于一致光照观测；地球同步周期约一个恒星日，其中地球静止还需赤道圆轨道，可持续观测同一区域；低倾角轨道重点覆盖低纬；测高卫星常使用不同倾角、非严格太阳同步轨道来获取海面高度时空采样。

*课件定位：卫星轨道—1第31—37页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q073 · [B] 为什么高度计轨道的倾角和是否太阳同步会影响海洋测高？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

倾角决定最大到达纬度及交叉轨道布局，轨道高度/周期决定重复周期与空间采样。非太阳同步可以在不同当地时刻采样，提高对部分潮汐和昼夜变化的区分能力；但具体选择还取决于科学任务。

*课件定位：卫星轨道—1第31—37页。*

</details>

### 3.2 观测扫描与瞬时视场

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q074 · [A] 什么是FOV、IFOV、EFOV？IFOV与地面足迹有何联系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

FOV为传感器整个可观测角范围；IFOV为单一探测单元在瞬间的角视场；EFOV为综合扫描、光学响应等形成的有效视场。小角度近天底观测时地面足迹尺度近似为$$d\approx H\,\theta_{IFOV}$$（$\theta$用rad），并受离轴视角与地形影响。

*课件定位：卫星轨道—1第38—48页；卫星轨道-2第13页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q075 · [A] 立体角IFOV与地面足迹面积如何近似联系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

若接收面积元垂直于视线，在距离$R$处可用$d\Omega=dA_\perp/R^2$；对圆形小角视场，足迹半径约为$H\theta_{IFOV}/2$。斜视时要考虑投影和地球曲率。

*课件定位：卫星轨道—1第40页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q076 · [A] 垂直轨道扫描、沿轨推帚扫描、混合扫描分别怎样实现？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

垂直轨道扫描：摆动扫描镜在横向逐点扫描，沿轨运动生成二维图；沿轨推帚扫描：线阵探测器一次获取横向一行，沿轨移动形成图；混合扫描：结合扫描机构与线阵/面阵以提高覆盖与采样效率。

*课件定位：卫星轨道—1第38—48页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q077 · [B] 三种扫描方式有哪些优缺点？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

摆镜扫描可获得较宽幅，但有运动部件、边缘扫描几何变形；推帚扫描无需横向摆镜，像元积分时间常较长、信噪比潜力较好，但阵列探测器一致性要求高；混合方式可折中刈幅与分辨率但结构/定标更复杂。

*课件定位：卫星轨道—1第38—48页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q078 · [B] 为何远离星下点时地面足迹会变大或变形？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

同一角度视场投射到斜面或球面时，地面交会距离增大，投影引起沿视线方向拉伸；卫星离轴扫描角度、地形、球面曲率都会产生像元形变。

*课件定位：卫星轨道—1第38—48页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q079 · [B] 传感器从光信号到数据产品的功能链通常包含什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

光学收集与成像 → 分光/选波段 → 探测器转换为电信号 → 放大、采样与量化 → 记录传输 → 地面辐射/几何处理。

*课件定位：卫星轨道—1第49—52页。*

</details>

### 3.3 四大分辨率与常见卫星

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q080 · [A] 四种遥感分辨率分别是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

空间分辨率：区分地表相邻目标能力；光谱分辨率：识别细微波长差异的能力；时间分辨率：对同一地区重复观测的间隔；辐射分辨率：探测可分辨的辐射强度差异，常用量化位数表示。

*课件定位：卫星轨道-2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q081 · [A] 空间分辨率的米数越小越好理解为怎样的成像能力？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

米数越小，像元代表的地面尺度通常越小，越容易辨认细小地物。**像元尺寸**与系统真实可分辨细节并不总是同一个量；还受光学衍射、运动模糊、信噪比等限制。

*课件定位：卫星轨道-2第4—13页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q082 · [A] 什么是夫琅禾费圆孔衍射与艾里斑？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

平行单色光通过圆孔经透镜会在焦平面形成中央亮斑及周围明暗环，这是圆孔的夫琅禾费衍射；中心亮斑称艾里斑。衍射决定理想光学仪器的角分辨极限。

*课件定位：卫星轨道-2第5—8页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q083 · [A] 艾里斑角尺寸、瑞利判据角分辨率及地面尺寸如何区分？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

圆孔第一暗环的**角半径**$\theta_R\approx1.22\lambda/D$；艾里斑**全角直径**$\Delta\alpha\approx2.44\lambda/D$（PPT用此定义）。高度$H$、近天底小角度下，对应全宽$d\approx2.44H\lambda/D$。$\lambda$波长，$D$孔径。

*课件定位：卫星轨道-2第5—7页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q084 · [A] 光谱分辨率与波段数量、波段宽度有何关系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

波段越窄，分辨细微光谱特征的潜力越强；高光谱传感器通常拥有大量窄而相邻的波段。但波段更窄会削弱单波段收到的光子数量，可能影响信噪比。

*课件定位：卫星轨道-2：光谱分辨率。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q085 · [A] 辐射量化位数 $n$ 与灰度级数关系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

理想$n$位量化可表示$2^n$个离散级别，例如8位为256级，12位为4096级。位数越多，量化间隔通常越细；实际探测精度还受噪声、定标等限制。

*课件定位：卫星轨道-2：辐射分辨率。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q086 · [B] 动态范围与信噪比SNR分别是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

动态范围描述仪器能够测量的信号强弱跨度；信噪比SNR表示有用信号大小相对噪声的比值。高位数不保证高SNR；高SNR有助于识别微弱光谱差异。

*课件定位：卫星轨道-2：辐射测量特性。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q087 · [A] 为何空间、光谱、时间、辐射分辨率往往需要权衡？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

同一孔径、探测器资源和观测时间下，缩小像元/缩窄波段可能减少单个观测收到的光子数，降低SNR；提高扫描覆盖频率又可能牺牲空间采样或积分时间。因此设计需在刈幅、灵敏度、分辨率、重访时间之间折中。

*课件定位：卫星轨道-2：分辨率与仪器性能。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q088 · [B] 常用可见光、热红外、微波遥感各自有哪些优缺点？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

可见光对颜色、叶绿素、浊度敏感，但受太阳照明和云影响；热红外可用于海温，需处理大气吸收和云；微波可全天时、部分全天候，适合风、浪、盐度、测高等，通常空间分辨率或信号解释存在其他限制。

*课件定位：卫星轨道-2：卫星传感器介绍。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q089 · [C] Landsat、Sentinel、MODIS、AVHRR与测高卫星各适合什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

Landsat、Sentinel-2适于沿海高空间分辨率地物变化；MODIS适于大区域海色和海温时间序列；AVHRR主要用于海温和气象；高度计任务（如Jason）用于海面高度和海浪等。具体波段和重访周期以产品文档为准。

*课件定位：卫星轨道-2：常见卫星。*

</details>

---

<a id="chapter-4"></a>
## Chapter 4｜数字图像处理与实践

重点掌握数字图像、几何校正、插值、卷积与图像融合。

### 4.1 色彩、数字图像与直方图

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q090 · [A] 描述颜色的三要素是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

色调Hue：辨别颜色种类；饱和度Saturation：颜色鲜艳或纯净程度；明度Intensity/Value：视觉亮度。孟塞尔颜色立体可用垂直轴表示明度、圆周位置表示色调、离轴距离表示饱和度。

*课件定位：图像处理-1第6、10页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q091 · [A] RGB加色法、CMY减色法分别如何合成黄色、青色、品红？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

加色法以红R、绿G、蓝B为三原色：R+G=黄，G+B=青，R+B=品红，R+G+B=白。减色法在白光中使用青C、品红M、黄Y滤料：白光减蓝光得黄，减红光得青，减绿光得品红。三色滤料理想完全叠加趋近黑色。

*课件定位：图像处理-1第11—16页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q092 · [A] 什么是真彩色与假彩色合成？举一个假彩色例子。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

真彩色把红、绿、蓝反射波段分别显示为R、G、B，尽量接近人眼自然颜色；假彩色按任务重新把三个波段映射到R/G/B显示通道。如将近红外、红、绿分别映射到R/G/B，健康植被常显示红色。假彩色利于增强特定地物差异。

*课件定位：图像处理-1与图像处理-2第84页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q093 · [B] RGB颜色模型与HSI模型的坐标含义有何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

RGB以三种显示光强组合颜色；HSI以色调H、饱和度S、明度I描述颜色的视觉属性。HSI融合通常替换明度分量以保留色调与饱和度信息。

*课件定位：图像处理-1第6—16页；图像处理-2：HSI融合。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q094 · [A] 数字图像、像元、采样、量化、DN各是什么意思？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

数字图像由离散空间位置的像元矩阵组成；采样将连续空间坐标离散为像元；量化将连续辐射值映射到有限灰度级；DN（Digital Number）是数字记录值，须经辐射定标才能转换为有物理单位的辐亮度或反射率。

*课件定位：图像处理-1第18—21页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q095 · [B] 二值图像、灰度图像、彩色图像、多波段图像分别具有怎样的数据结构？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

二值图像通常每像元只有0/1；灰度图像一个通道；彩色图像常用RGB三通道；多波段遥感图像每像元有多个波段值，可形成三维数组$(x,y,\lambda)$。

*课件定位：图像处理-1第18—22页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q096 · [B] BSQ、BIP、BIL分别是什么排列方法？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

BSQ：按波段依次存储整幅二维图；BIP：每个像元处依次存储所有波段；BIL：以行为单位交错存储各波段。三者信息内容可等价，主要差在访问效率。

*课件定位：图像处理-1：图像数据组织。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q097 · [A] 灰度直方图的横纵坐标含义？能否判断地物在哪里？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

横轴是灰度/DN值，纵轴是像元频数或频率；可判断亮度分布、动态范围、对比度、偏亮或偏暗。直方图不保留像元的空间坐标，无法仅凭直方图判断地物所在位置。

*课件定位：图像处理-1第22—32页。*

</details>

### 4.2 辐射校正、几何校正与插值

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q098 · [A] 辐射畸变和几何畸变有何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

辐射畸变改变像元数值所对应的真实辐射意义；几何畸变使像元的位置、大小、形状与真实地物不吻合。前者解决“数值准不准”，后者解决“位置准不准”。两者通常都需要校正。

*课件定位：图像处理-1第33—56页；图像处理-2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q099 · [A] 常见辐射畸变来源及主要辐射校正方法有哪些？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

来源包括传感器增益/偏置和条带、太阳高度变化、大气散射吸收、地形阴影等。处理包括传感器辐射定标、相对辐射归一化、大气校正、地形校正。不同方法消除的误差来源不同。

*课件定位：图像处理-1第33—56页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q100 · [A] DN如何线性定标为辐亮度？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

典型线性定标式：$$L_\lambda=M_L\,DN+A_L.$$ $M_L$是定标乘性系数、$A_L$是加性偏置，需使用传感器的元数据参数。部分遥感产品后续还需进行太阳角、日地距离以及大气校正。

*课件定位：图像处理-1：辐射定标。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q101 · [B] 暗像元法（DOS）大气校正的思路是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

寻找理论反射率很小的暗地物，其观测信号中有较大比例来自大气路径辐射，据此估算散射偏置并从整景影像扣除。它是一种简化大气校正方法，需要检查暗目标假设。

*课件定位：图像处理-1：大气校正方法。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q102 · [A] 造成几何畸变的内在、外在与处理因素分别有哪些？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

传感器内因：镜头畸变、扫描镜速度变化、采样时刻误差、探测器排列等；外部因素：地球自转、曲率、地形起伏、卫星姿态和轨道变化；处理因素：投影变换、重采样等。典型几何变形有平移、旋转、缩放、扭曲。

*课件定位：图像处理-2第4—14页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q103 · [A] 几何粗校正和几何精校正有什么区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

粗校正通常利用卫星轨道、姿态、扫描模型、地球形状等系统参数纠正可预测畸变；精校正进一步利用地面控制点GCP及几何变换模型消除残留误差。精纠正质量依赖控制点定位精度与空间分布。

*课件定位：图像处理-2第14—23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q104 · [A] 几何精校正的完整流程是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

选取参考地图/影像与GCP → 建立坐标变换模型 → 最小二乘拟合参数 → 确定输出网格和范围 → 逆向映射原图位置 → 灰度重采样 → 用独立检查点和残差评估精度。避免把“重采样”和“几何变换”混成同一步。

*课件定位：图像处理-2第16—36页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q105 · [A] 选择地面控制点有哪些要求？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

同名点清晰、几何位置固定（路口/桥梁等）、覆盖影像全范围且分布均匀、数量足够且参考位置可靠。避免只选中心区域、云影、水面纹理、时相变化严重的目标。

*课件定位：图像处理-2第21—23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q106 · [A] 二元二次多项式坐标变换如何表示？需要至少多少个点？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$x'=a_0+a_1x+a_2y+a_3x^2+a_4xy+a_5y^2,$$ $$y'=b_0+b_1x+b_2y+b_3x^2+b_4xy+b_5y^2.$$ 各坐标分量有6个系数，至少6组不退化的控制点才可解，实际宜多于6个用最小二乘估计。一般$n$次多项式系数数目为$(n+1)(n+2)/2$。

*课件定位：图像处理-2第20—27页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q107 · [A] 最近邻、双线性内插、三次卷积有哪些主要区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

最近邻直接取距离最近原像元，保持原灰度类别但可能锯齿；双线性利用周围4个像元加权平均，平滑但改变原灰度；三次卷积利用周围16个像元进行三次插值，通常更平滑、计算更复杂，可能产生过冲。分类标签宜优先最近邻。

*课件定位：图像处理-2第26—36页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q108 · [A] 写出双线性内插计算式，并解释四个权重。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

设目标落在单位方格内的局部坐标$(u,v)$，$0\le u,v\le1$，四角像元为$f_{00},f_{10},f_{01},f_{11}$。$$\boxed{f=(1-u)(1-v)f_{00}+u(1-v)f_{10}+(1-u)vf_{01}+uvf_{11}}.$$ 四权重分别表示横纵坐标的线性组合，总和为1。

*课件定位：图像处理-2第27—36页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q109 · [B] 灰度重采样为什么可能让图像变模糊？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

双线性和三次插值把邻近多个像元做加权组合，抑制高频灰度变化，边界会被混合，因此可能模糊。最近邻保持原值但可能出现块状/阶梯。

*课件定位：图像处理-2：重采样。*

</details>

### 4.3 图像融合、增强、卷积与变化检测

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q110 · [A] 图像融合的目的是什么？为何融合前需要精确配准？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

融合用于结合不同图像的信息优势，例如高空间分辨率全色与较高光谱信息的多光谱。若配准不准，同一位置的像元代表不同地物，融合后会产生重影、伪色和错误纹理。

*课件定位：图像处理-2第38—51页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q111 · [A] Brovey融合的基本思路与公式是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

常见简化形式：$$R'=\frac{R}{R+G+B}P,\quad G'=\frac{G}{R+G+B}P,\quad B'=\frac{B}{R+G+B}P.$$ $P$为高空间分辨率全色亮度，分母用多光谱亮度总和归一化；实际应用可能还需波段增益和分母为零的处理。

*课件定位：图像处理-2：图像融合。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q112 · [A] PCA主成分融合与HSI融合为什么替换某个分量？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

PCA将相关多光谱波段变成较少相关的主成分，第一主成分通常包含较大总体方差信息，可用全色图替换以引入空间细节；HSI用全色图代替明度$I$并逆变换RGB，使亮度细节增强而尽量保留H/S。二者均可能产生光谱失真。

*课件定位：图像处理-2第38—50页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q113 · [A] 线性对比度拉伸公式是什么？计算时怎样操作？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

将输入灰度$x\in[x_{min},x_{max}]$映射到$[y_{min},y_{max}]$：$$\boxed{y=\frac{y_{max}-y_{min}}{x_{max}-x_{min}}(x-x_{min})+y_{min}}.$$ 先求斜率，再代入像元值；超出范围通常按规则截断。

*课件定位：图像处理-2第52—63页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q114 · [A] 分段线性拉伸、指数变换、对数变换分别如何影响灰度？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

分段线性按不同灰度区间设置不同斜率，突出指定灰度范围；对数变换在常见归一化形式下增强暗部、压缩亮部；指数或幂次变换可根据参数突出暗部或亮部，必须结合具体函数与参数判断，不能仅凭“指数”二字断言。

*课件定位：图像处理-2第52—68页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q115 · [A] 二维空间卷积怎样计算一个输出像元？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

设滤波核$h(i,j)$，输出可写为 $$g(x,y)=\sum_i\sum_j h(i,j)f(x-i,y-j).$$ 逐项把邻域像元与核对应系数相乘并求和；实际使用中有些工具执行的是相关运算（不翻转核），对于非对称核应注意区别。

*课件定位：图像处理-2第69—81页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q116 · [A] 写出3×3均值滤波核，计算给定窗口的中心输出像元。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$H=\frac19\begin{bmatrix}1&1&1\\1&1&1\\1&1&1\end{bmatrix}.$$ 对九个像元求和除以9；适于抑制部分随机噪声，但会平滑边缘。例：九个数$[1,2,3,4,5,6,7,8,9]$输出$5$。

*课件定位：图像处理-2第69—72页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q117 · [A] 中值滤波3×3怎样算？为何对椒盐噪声有效？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

将3×3窗口的9个值从小到大排序，输出第五个（中位数）。极亮或极暗的孤立噪声通常只占少数，对中位数影响有限；相较均值滤波，更容易保留某些边缘，但在细线等结构上仍可能改变图像。

*课件定位：图像处理-2第69—74页；课堂实验。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q118 · [A] 写出一种Roberts、Sobel、Laplacian算子，并解释功能。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

Roberts可写$G_x=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$；Sobel横向梯度可写$G_x=\begin{bmatrix}-1&0&1\\-2&0&2\\-1&0&1\end{bmatrix}$；Laplacian可写$H=\begin{bmatrix}0&1&0\\1&-4&1\\0&1&0\end{bmatrix}$。前两者估计一阶梯度，Laplacian近似二阶导数。

*课件定位：图像处理-2第75—80页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q119 · [A] 为什么一阶/二阶导数能帮助提取边缘？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

边缘是灰度随空间位置发生快速变化的区域。一阶梯度幅值在突变处较大；二阶导数在变化的两侧呈正负峰并可能经过零交叉，据此定位边界。梯度/二阶导数会增强高频噪声，因此常先平滑。

*课件定位：图像处理-2第75—80页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q120 · [B] 图像平滑、锐化、边缘检测与定向检测有何不同？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

平滑削弱局部灰度剧烈变化；锐化强调高频细节；边缘检测输出突变位置；定向检测使用具有方向敏感性的核，突出特定方向的线条或边缘。

*课件定位：图像处理-2第69—81页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q121 · [A] 差值、比值和NDVI的计算式与应用是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

差值$D=A-B$适于突出变化；比值$R=A/B$突出波段间相对差异，注意分母零值；$$NDVI=\frac{\rho_{NIR}-\rho_{Red}}{\rho_{NIR}+\rho_{Red}}.$$ 健康植被通常强反射近红外并吸收红光，因此NDVI较高。

*课件定位：图像处理-2第81—88页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q122 · [A] 如何用两期遥感影像估算植被覆盖变化面积？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

选择尽可能同季节的两期影像 → 同一投影及精确配准 → 定标、必要的大气校正与云掩膜 → 计算NDVI或进行植被分类 → 两期分类图叠加 → 统计“植被转非植被”和“非植被转植被”像元数，分别乘以像元真实面积得到减少/增加面积；净变化为后期减前期。

*课件定位：图像处理-2第81—88页，结合课程算法的应用扩展。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q123 · [B] 多时相变化检测为什么需控制季节、云和传感器差异？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

植物物候、太阳高度、大气与传感器光谱响应差异也可能造成影像数值变化，若不控制将把非真实植被变化当作变化。推荐使用同季节数据、相近处理级别、统一阈值或分类方法并设置质量掩膜。

*课件定位：图像处理-2：多时相图像分析。*

</details>

---

<a id="chapter-5"></a>
## Chapter 5｜水色遥感基础

重点掌握大气校正、海气界面公式链和水体吸收/后向散射谱形。

### 5.1 海洋水色信号与大气校正

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q124 · [A] 水色遥感利用什么信号？水色三要素是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

水色遥感利用太阳光在海水中被吸收、散射后，最终从海面离开的**离水辐亮度**及其光谱信息，反演水中光学活性组分。课堂常说水色三要素是**叶绿素/浮游植物、悬浮泥沙、黄色物质（CDOM）**。

*课件定位：水色遥感基础-1第5—10页；水色遥感基础-2第17页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q125 · [A] 为什么水色遥感要提取离水辐亮度 $L_w$？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

海水内部的吸收与后向散射特性决定离水光谱，可反映水色组分。卫星收到的总辐亮度含有大气路径散射、海面反射等干扰项，因此大气校正须尽可能从总观测中提取与水体性质相关的$L_w$。

*课件定位：水色遥感基础-1第10—17页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q126 · [A] 写出卫星接收辐亮度的四项分解，解释各下标。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课堂近似：$$\boxed{L_i(\lambda)=L_R(\lambda)+L_A(\lambda)+T(\lambda,\theta)L_r(\lambda)+t(\lambda,\theta)L_w(\lambda)}.$$ $L_i$卫星总辐亮度；$L_R$瑞利分子散射；$L_A$气溶胶散射贡献；$L_r$海面反射/天空光反射贡献；$L_w$离水辐亮度；$T$、$t$分别代表所采用的直接透射、漫透射因子，具体依PPT约定。公式省略了一些高阶耦合项。

*课件定位：水色遥感基础-1第10—20页；水色遥感基础-2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q127 · [A] 水色大气校正的目标和基本步骤是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

由大气层顶测得的总辐亮度，估计和去除分子散射、气溶胶散射、海表反射及其他大气贡献，并补偿水体信号上行大气透射损失，求得$L_w$及$R_{rs}$。需配合臭氧、太阳/观测角、气溶胶参数等信息。

*课件定位：水色遥感基础-1第31—39页；水色遥感基础-2第4—9页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q128 · [A] 水色遥感为什么常利用近红外波段估计气溶胶？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

清洁或多数外海水体在近红外吸收很强，**离水辐亮度可近似为零**，因此该波段大气层顶信号常主要来自大气/界面，可以估计气溶胶贡献，再根据其光谱规律外推到可见光。注意高浑浊沿岸水近红外离水信号可能显著，黑像元假设失效。

*课件定位：水色遥感基础-1第31—39页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q129 · [A] 大气漫透射率 $t$ 与直接透射率 $T$ 的区别是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**直接透射率**针对沿明确光线路径保持原传播方向的直达光；**漫透射率**用于包含散射形成的扩散光场及特定几何条件下的总透过贡献。PPT在海面反射项与离水辐亮度项中分别采用$T$、$t$，具体计算需依照所用模型的定义。

*课件定位：水色遥感基础-1第10—20页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q130 · [A] 臭氧吸收与太阳天顶角怎样进入向下太阳辐照度公式？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课件给出的简化式为 $$E_s(\lambda)=E_0(\lambda)\cos\theta_s\exp[-\tau_{oz}(\lambda)/\cos\theta_s].$$ $E_0$大气层顶法向太阳光谱辐照度；$\cos\theta_s$是水平面投影；$\tau_{oz}/\cos\theta_s$反映斜程臭氧光学厚度。

*课件定位：水色遥感基础-2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q131 · [A] 气溶胶衰减量怎样写成入射量减去透射量？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课堂关系：$$E_a|_{Aero}=E_s(\lambda)\left[1-e^{-\tau_A/\cos\theta_s}\right].$$ $\tau_A$为气溶胶垂直光学厚度，该式计算直接光束被气溶胶消光的份额。

*课件定位：水色遥感基础-2第4页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q132 · [A] 单次散射反照率与光场分布因子Q是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\omega_0=\frac{k_{sc}}{k_{ab}+k_{sc}}\quad\text{（对应所考虑介质）},\qquad Q=\frac{E}{L}.$$ $\omega_0$表示衰减中散射所占份额；$Q$把辐照度与指定方向辐亮度联系起来，量纲为sr，数值依光场角分布决定。

*课件定位：水色遥感基础-2第4—5页及第13页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q133 · [A] 课堂中的气溶胶校正因子 $\xi(\lambda,\lambda_0)$ 用来做什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

PPT采用的光谱校正因子近似写成 $$\xi(\lambda,\lambda_0)=\frac{\tau_A(\lambda)}{\tau_A(\lambda_0)}.$$ 在特定单次散射和小光学厚度近似下，通过参考波长处的气溶胶贡献外推其他波长的贡献。实际算法还受太阳辐照度与相函数等影响。

*课件定位：水色遥感基础-2第6—8页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q134 · [B] 为什么海色大气校正对误差特别敏感？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

可见光海色信号通常只是卫星总信号的一小部分，若估计大气散射/反射贡献存在小的绝对误差，扣除后离水辐亮度的相对误差可能很大。因此气溶胶模型、云污染、耀斑、邻近效应等都很重要。

*课件定位：水色遥感基础-1第10—20页。*

</details>

### 5.2 海气界面传输与遥感反射率

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q135 · [A] 水色公式中 $0^+$、$0^-$、下标 $u,d,w$ 分别是什么意思？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$0^+$是紧贴海面**上方空气中**，$0^-$是紧贴海面**下方海水中**；$u$ upwelling向上，$d$ downwelling向下，$w$ water-leaving离水。$L$为辐亮度，$E$为辐照度；二者单位不同。

*课件定位：水色遥感基础-2第10—15页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q136 · [A] 海气界面折射率、菲涅耳反射率和透射率有哪些近法线数值？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

可见光附近水相对空气折射率$n'\approx1.33$；近法线入射时菲涅耳能量反射率$$\rho=\left(\frac{n'-1}{n'+1}\right)^2\approx0.02,$$ 透射率$t_i=1-\rho\approx0.98$。离法线较大角度时$\rho$随角度和偏振变化，不能总用0.02。

*课件定位：水色遥感基础-2第11—12页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q137 · [A] 离水辐亮度与水面下向上辐亮度的关系式为什么包含 $(n\prime)^2$？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{L_w(0^+)=\frac{t_i}{(n')^2}L_u(0^-)}.$$ $t_i$反映界面反射造成的能量损失；折射引起光束立体角变化，辐亮度传播跨介质界面要考虑折射率平方因子。课件近法线采用$t_i\approx0.98$、$n'\approx1.33$。

*课件定位：水色遥感基础-2第11—12页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q138 · [A] 光场分布因子 $Q$ 的定义、单位以及与 $L_u$ 的关系？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$Q(\lambda)=\frac{E_u(\lambda,0^-)}{L_u(\lambda,0^-)},\qquad L_u(0^-)=\frac{E_u(0^-)}{Q}.$$ $[Q]=\mathrm{sr}$，反映上行辐射的角分布；它不是普适常数。

*课件定位：水色遥感基础-2第13页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q139 · [A] 次表层漫反射率 $R$ 的定义与单位是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{R(\lambda)=\frac{E_u(\lambda,0^-)}{E_d(\lambda,0^-)}}.$$ $R$无量纲；是水面下向上/向下辐照度之比，体现水体的反射性光场，与$R_{rs}$在定义与单位上不同。

*课件定位：水色遥感基础-2第14页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q140 · [A] 推导 $E_d(0^-)$ 与 $E_d(0^+)$ 的关系。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

进入水面的辐照度$(1-\bar\rho)E_d(0^+)$，海面下上行光又有一部分$rE_u(0^-)$被反射回水中。因此 $$E_d(0^-)=(1-\bar\rho)E_d(0^+)+rE_u(0^-).$$ 代入$E_u(0^-)=R E_d(0^-)$：$$\boxed{E_d(0^-)=\frac{1-\bar\rho}{1-rR}E_d(0^+)}.$$ 这体现海气界面的多次内部反射反馈。

*课件定位：水色遥感基础-2第15页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q141 · [A] 从 $L_w,L_u,Q,R,E_d$ 逐步推导遥感反射率 $R_{rs}$。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

① $L_w=t_iL_u/(n')^2$；② $L_u=E_u/Q$；③ $E_u=R E_d(0^-)$；④ $E_d(0^-)=\dfrac{1-\bar\rho}{1-rR}E_d(0^+)$。代入 $$\boxed{R_{rs}=\frac{L_w}{E_d(0^+)}=\frac{t_i(1-\bar\rho)R}{(n')^2Q(1-rR)}}.$$ 若近法线近似$t_i=1-\rho$，即课件第17页形式。

*课件定位：水色遥感基础-2第10—18页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q142 · [A] 遥感反射率 $R_{rs}$ 定义、单位及物理意义是什么？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{R_{rs}(\lambda)=\frac{L_w(\lambda)}{E_d(\lambda,0^+)}}.$$ 单位为$\mathrm{sr^{-1}}$；它把离水辐亮度与水面入射辐照度归一化，便于比较不同照明条件下水体的谱形，但仍依赖观测几何、光场和水体光学性质。

*课件定位：水色遥感基础-2第17—18页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q143 · [A] 离水辐亮度 $L_w$ 与归一化离水辐亮度 $L_{wn}$ 有何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$L_w$是实际光照几何条件下离开水面的辐亮度；归一化离水辐亮度$L_{wn}$按规定的参考太阳辐照度/几何条件归一化，从而减少入射光强度差异。课件第18页给出$R_{rs}=L_{wn}/\bar F_0$的约定。计算时应按产品具体定义处理距离与太阳角修正。

*课件定位：水色遥感基础-2第18页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q144 · [B] 为什么 $R_{rs}$ 数值不能简单解释为“水越清越高”？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$R_{rs}$是**随波长变化**的量，取决于吸收和后向散射的相对强弱。清洁外海蓝光往往相对强、近红外弱；浑浊水可见光至近红外反射可能增强；CDOM或浮游植物也会降低某些波段反射。因此不能脱离波长和成分判断。

*课件定位：水色遥感基础-2第23—28页。*

</details>

### 5.3 固有光学特性与光谱绘图

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q145 · [A] 什么是固有光学特性IOP？和表观光学特性AOP如何区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

固有光学特性由介质本身的光学组成与浓度决定，如吸收系数$a$、散射系数$b$、体积散射函数$\beta$；表观光学特性还受到光场几何与边界条件影响，如$R_{rs}$、$E_u/E_d$等。

*课件定位：水色遥感基础-2第24—25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q146 · [A] 水体IOP中的 $a,b,b_b,c,\beta,\omega_0$ 分别是什么，单位如何？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$a$吸收系数；$b$散射系数；$b_b$后向散射系数；$c=a+b$光束衰减系数，前四者单位$\mathrm{m^{-1}}$。$\beta$体积散射函数，$\mathrm{m^{-1}sr^{-1}}$；单次散射反照率$\omega_0=b/(a+b)$无量纲。

*课件定位：水色遥感基础-2第25页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q147 · [A] 水体总吸收系数由哪四部分组成？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{a(\lambda)=a_w(\lambda)+a_g(\lambda)+a_d(\lambda)+a_{ph}(\lambda)}.$$ 分别为纯水、CDOM、非藻类颗粒物、浮游植物吸收系数。注意此$a$单位为$\mathrm{m^{-1}}$，与吸收率$a$（无量纲）区别。

*课件定位：水色遥感基础-2第23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q148 · [A] 总后向散射系数如何分解？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\boxed{b_b(\lambda)=b_{bw}(\lambda)+b_{bp}(\lambda)}.$$ 纯水分子后向散射与颗粒物后向散射相加。特定生物粒子、碎屑等通常包含在颗粒物贡献中。

*课件定位：水色遥感基础-2第23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q149 · [A] 记住 $R_{rs}$ 与吸收/后向散射的经验联系及方向性。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

课件给出近似形式：$$R_{rs}\approx g_1u+g_2u^2,\qquad u=\frac{b_b}{a+b_b}.$$ 这是由水下反射与水气界面转换概念化的模型表达，经验系数须匹配模型和几何条件。其他条件不变时，$a\uparrow$通常令$R_{rs}\downarrow$，$b_b\uparrow$通常令$R_{rs}\uparrow$。

*课件定位：水色遥感基础-2第23页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q150 · [A] 如何默画纯水吸收系数 $a_w(\lambda)$ 的光谱曲线？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**坐标**：横轴波长约400—750 nm，纵轴吸收系数$\mathrm{m^{-1}}$。**形状**：蓝—绿光范围相对低；向长波逐渐上升，红光端明显抬升；接近700 nm后加速上升。**物理原因**：水分子在红光、近红外的吸收远强于蓝绿光。重点是拐点与趋势，不必背图片的精确点值。


**图形参考**

![PPT原图：纯水吸收系数，水色遥感基础-2第29页](/images/纯水吸收曲线.png)

*PPT原图：纯水吸收系数，水色遥感基础-2第29页。*

*课件定位：水色遥感基础-2第29页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q151 · [A] 如何默画CDOM吸收曲线？写出公式。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**横轴**波长，**纵轴**CDOM吸收系数$\mathrm{m^{-1}}$；短波（紫外/蓝光）高，随波长增加快速、近指数下降。$$\boxed{a_g(\lambda)=a_g(\lambda_0)e^{S_g(\lambda_0-\lambda)}}.$$ 常选参考$\lambda_0=440\,$nm等；当$\lambda$用nm时$S_g$单位$\mathrm{nm^{-1}}$。浓度或吸收强弱变化可改变曲线高度。


**图形参考**

![PPT原图：CDOM吸收系数，水色遥感基础-2第31页](/images/CDOM吸收曲线.png)

*PPT原图：CDOM吸收系数，水色遥感基础-2第31页。*

*课件定位：水色遥感基础-2第30—32页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q152 · [A] 如何默画浮游植物吸收曲线？两个典型峰约在哪里？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

**横轴**波长400—700 nm；**纵轴**浮游植物吸收系数。典型叶绿素a相关光谱在**蓝光约430—450 nm**与**红光约660—680 nm**附近有吸收峰，中间绿光区域相对吸收较低；辅助色素、群落和包装效应会改变曲线。不能画成简单的单调指数曲线。


**图形参考**

![PPT原图：浮游植物吸收系数，水色遥感基础-2第34页](/images/浮游植物吸收曲线.png)

*PPT原图：浮游植物吸收系数，水色遥感基础-2第34页。*

*课件定位：水色遥感基础-2第33—34页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q153 · [A] 非藻类颗粒物的吸收光谱怎样画？与CDOM有什么不同？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

可见光短波吸收较强，向长波平滑下降，常用负指数：$$a_d(\lambda)=a_d(\lambda_0)e^{S_d(\lambda_0-\lambda)}.$$ 相似处：均近似单调指数下降；区别：CDOM在紫外蓝光通常表现更强的吸收，非藻类颗粒物在可见光也有明显贡献。不同样品强度可交叉，不能把它们画成固定高低关系。


**图形参考**

![PPT原图：非藻类颗粒物吸收系数，水色遥感基础-2第35页](/images/非藻类颗粒物吸收曲线.png)

*PPT原图：非藻类颗粒物吸收系数，水色遥感基础-2第35页。*

*课件定位：水色遥感基础-2第35—36页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q154 · [A] 悬浮颗粒物后向散射光谱应怎么画？写出经验幂律。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

通常短波较高，长波较低，随波长增大平滑递减：$$\boxed{b_{bp}(\lambda)=b_{bp}(550)\left(\frac{550}{\lambda}\right)^\eta}.$$ $\lambda$与550需使用相同单位，$\eta$是无量纲谱指数；不同颗粒物有不同高度和斜率。


**图形参考**

![据PPT第37页后向散射幂律公式重绘的示意曲线，非实测数据](/images/后向散射幂律曲线示意.png)

*据PPT第37页后向散射幂律公式重绘的示意曲线，非实测数据。*

*课件定位：水色遥感基础-2第37页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q155 · [A] 试画并解释纯水、CDOM、浮游植物和非藻类颗粒物四条曲线的显著差异。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

建议分成两张图绘制以避免纵轴尺度掩盖峰形：**纯水**长波端快速上升；**CDOM**从紫外/蓝光向红光负指数下降；**非藻类颗粒物**可见光范围也平滑下降；**浮游植物**有蓝光、红光吸收峰与绿光相对谷值。每图必须写横轴$\lambda$（nm）、纵轴**吸收系数**（$\mathrm{m^{-1}}$），并标出440、550、675、700 nm等位置。


**图形参考**

![PPT原图：水色组分谱形与合成反射率，水色遥感基础-2第38页](/images/各组分影响遥感反射率.png)

*PPT原图：水色组分谱形与合成反射率，水色遥感基础-2第38页。*

*课件定位：水色遥感基础-2第29、31、34、35页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q156 · [A] 纯水、CDOM、颗粒物吸收与后向散射的合成效应如何改变海水反射光谱？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

不同波长的$R_{rs}$主要受$a(\lambda)$与$b_b(\lambda)$比值控制：蓝光可能被CDOM与色素强吸收；绿光因相对吸收较弱而增强；红光被纯水吸收压制，但高颗粒物散射时仍可产生较强反射；叶绿素荧光等可在红区影响光谱。不要把某一个组分的吸收峰误认为必然是遥感反射峰。

*课件定位：水色遥感基础-2第26—28、38页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q157 · [A] 为什么叶绿素浓度增加会改变海水的颜色？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

浮游植物色素在蓝、红波段选择性吸收较强，在绿波段相对吸收较弱；叶绿素含量和浮游植物组成变化导致水体反射谱的峰谷、比例改变。实际颜色还受CDOM、颗粒物、纯水及光场条件共同控制。

*课件定位：水色遥感基础-2第33—34、38页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q158 · [A] 悬浮颗粒物增加会怎样影响海水的遥感反射率？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

在许多水体中，悬浮颗粒物增加可提高后向散射，使可见光特别是绿红光波段$R_{rs}$升高；但颗粒物也有吸收，净效应取决于波长、粒径、物质组成及浓度，近红外浑浊水信号也可能不为零。

*课件定位：水色遥感基础-2第27—28、35—38页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q159 · [B] 清洁外海和浑浊近岸海水的反射光谱大致有哪些区别？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

清洁外海一般蓝光相对较强、红光和近红外较弱；浑浊近岸因颗粒物散射与吸收共同作用，绿红光乃至近红外反射可能明显，峰位/峰高会发生变化。不能简单用单一波长的反射率判断“水越清越高”。

*课件定位：水色遥感基础-2第26—28页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q160 · [B] CDOM浓度为什么常用特定波长处吸收系数表征？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

CDOM化学组分复杂，难由单一“浓度”直接完整描述光学特性；PPT提到可用355、375、440 nm处的吸收系数作为浓度相关指标，吸收系数较大通常意味着光学意义上的CDOM更强，但跨水域比较还受组分差异影响。

*课件定位：水色遥感基础-2第30页。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q161 · [B] 为什么仅看一条水色光谱有时无法唯一判定叶绿素/CDOM/悬浮物浓度？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

不同组分的吸收与散射谱在部分波段可能相互补偿或存在相关性，产生近似相同的$R_{rs}$；还受观测几何和校正误差影响。因此反演常采用多个波段、先验约束和现场数据验证。

*课件定位：水色遥感基础-2第23—38页。*

</details>

---

<a id="chapter-6"></a>
## Chapter 6｜综合计算、推导与判读模拟题

闭卷计算与推导题，数值为本题库自拟。

### 6.1 辐射与几何计算

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q162 · [A] 【计算】求整个球面、上半球、天顶角 $0$—$60^\circ$ 圆锥范围的立体角。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

全球$4\pi$ sr；上半球$2\pi$ sr；圆锥顶角范围：$$\Omega=\int_0^{2\pi}d\phi\int_0^{\pi/3}\sin\theta\,d\theta=2\pi(1-\cos60^\circ)=\pi\ \mathrm{sr}.$$

*课件定位：自拟计算题：立体角公式。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q163 · [A] 【计算】均匀朗伯表面的辐亮度为 $12\,\mathrm{Wm^{-2}sr^{-1}}$，求半球辐射出射度。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

朗伯表面$$M=\pi L=12\pi\approx37.70\;\mathrm{Wm^{-2}}.$$ 必须保留$\mathrm{sr^{-1}}$通过半球积分抵消的量纲理解。

*课件定位：自拟计算题：朗伯定律。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q164 · [A] 【计算】均匀介质吸收系数 $0.20\,\mathrm{m^{-1}}$、路径10 m，忽略散射和自发射，求光学厚度及透射率。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$\tau=kh=0.20\times10=2$；$$t=e^{-2}\approx0.1353.$$ 意味着仅约13.5%的原方向辐亮度剩余。

*课件定位：自拟计算题：朗伯—比尔定律。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q165 · [A] 【计算】边界辐亮度 $L_s=20$、等温介质黑体辐亮度 $L_B=5$、透射率 $t=0.4$，求传感器辐亮度。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$L=tL_s+(1-t)L_B=0.4\times20+0.6\times5=11.$$ 两项分别是原信号8和介质热发射3，单位沿用给定辐亮度单位。

*课件定位：自拟计算题：辐射传输简化形式。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q166 · [A] 【理解】只增大光学厚度时，等温介质观测值一定降低吗？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

不一定。$L=L_B+(L_s-L_B)e^{-\tau}$，故$$\frac{dL}{d\tau}=-(L_s-L_B)e^{-\tau}.$$ 若$L_s>L_B$，$L$随$\tau$增大而减小；若$L_s<L_B$，反而增大；若两者相等，始终不变。**理解吸收损失与介质发射增益的竞争。**

*课件定位：自拟理解题：辐射传输方程。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q167 · [A] 【计算】300 K黑体峰值波长大约为多少微米？600 K时如何变化？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

维恩位移：$$\lambda_{max}=2898/T\quad(\mu\mathrm m).$$ 300 K约9.66 μm；600 K约4.83 μm。温度翻倍，峰值波长减半。

*课件定位：自拟计算题：维恩位移定律。*

</details>

### 6.2 轨道、图像与卷积计算

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q168 · [A] 【计算】卫星高度 $H=700\,\mathrm{km}$，IFOV为1 mrad，估算星下点地面足迹宽度。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

小角度近似$$d\approx H\theta=700000\times0.001=700\;\mathrm m.$$ IFOV需由mrad换为rad，非天底视角还需考虑投影拉伸。

*课件定位：自拟计算题：IFOV。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q169 · [A] 【理解】卫星轨道高度从 $h$ 升高，圆轨道速度、周期会怎样变化？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

圆轨道半径$r=R_E+h$。$$v=\sqrt{GM/r}$$因此轨道高度增大速度降低；$$T=2\pi\sqrt{r^3/(GM)}$$因此周期增大。

*课件定位：自拟理解题：轨道动力学。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q170 · [A] 【计算】8位图像灰度原范围[50,150]，拉伸到[0,255]，原灰度90映射成多少？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$y=\frac{90-50}{150-50}\times255=102.$$ 若题目要求整型灰度值，取102。

*课件定位：自拟计算题：对比度线性拉伸。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q171 · [A] 【计算】3×3灰度窗口为 $[2,2,3;2,255,3;3,3,4]$，求均值滤波与中值滤波结果。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

求和$2+2+3+2+255+3+3+3+4=277$，均值$277/9\approx30.78$；升序为$2,2,2,3,3,3,3,4,255$，第五个为3，中值滤波结果3。极端噪声255显著抬高均值但不改变中位数。

*课件定位：自拟计算题：均值/中值滤波。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q172 · [A] 【计算】某窗口 $\begin{bmatrix}1&1&1\\1&8&1\\1&1&1\end{bmatrix}$，使用四邻域Laplacian核求中心输出值。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

核$\begin{bmatrix}0&1&0\\1&-4&1\\0&1&0\end{bmatrix}$，则中心卷积结果为$$1+1+1+1-4\times8=-28.$$ 若后续可视化需归一化/截断，题目未要求时可保留负值。

*课件定位：自拟计算题：边缘检测。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q173 · [A] 【计算】双线性插值四角为10、20、30、40，目标局部坐标 $(u,v)=(0.25,0.5)$，求像元值。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

假设$f_{00}=10,f_{10}=20,f_{01}=30,f_{11}=40$：$$f=(0.75)(0.5)10+(0.25)(0.5)20+(0.75)(0.5)30+(0.25)(0.5)40=22.5.$$ 检查四权重和为1。

*课件定位：自拟计算题：双线性插值。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q174 · [A] 【计算】近红外反射率0.50、红光反射率0.10，求NDVI并说明含义。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$NDVI=\frac{0.50-0.10}{0.50+0.10}=\frac{2}{3}\approx0.667.$$ 常表示较强绿色植被信号，仍应结合地区、季节和阈值判断植被覆盖。

*课件定位：自拟计算题：NDVI。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q175 · [A] 【计算】两期植被像元数为2000、2600，像元面积900 $\mathrm{m^2}$，求植被净面积变化。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$\Delta A=(2600-2000)\times900=540000\;\mathrm{m^2}=0.54\;\mathrm{km^2}.$$ 这只能计算净面积变化，若要分别统计增减面积须叠加两期分类图。

*课件定位：自拟计算题：植被面积。*

</details>

### 6.3 水色辐射、吸收与谱形计算

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q176 · [A] 【计算】$L_w=0.010\,\mathrm{Wm^{-2}sr^{-1}nm^{-1}}$、$E_d(0^+)=2.0\,\mathrm{Wm^{-2}nm^{-1}}$，求 $R_{rs}$。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$R_{rs}=\frac{L_w}{E_d}=0.010/2.0=0.005\;\mathrm{sr^{-1}}.$$ 切记$R_{rs}$不是无量纲反射率。

*课件定位：自拟计算题：遥感反射率。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q177 · [A] 【计算】近法线 $n\prime=1.33$、$t_i=0.98$、$L_u(0^-)=10$，求离水辐亮度（同单位）。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$L_w=\frac{0.98}{1.33^2}\times10\approx5.54.$$ 强调分母$n'^2$来自界面折射引起的角度空间变化。

*课件定位：自拟计算题：海气界面。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q178 · [A] 【计算】若 $a=0.40\,\mathrm{m^{-1}}$，$b_b=0.10\,\mathrm{m^{-1}}$，求 $u$。若吸收增至0.90且 $b_b$不变，$u$怎样？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$u=\frac{b_b}{a+b_b}=\frac{0.10}{0.50}=0.20.$$ 吸收增至0.90后，$u=0.10/(0.90+0.10)=0.10$，因此对应经验模型中的水体遥感反射率往往下降。

*课件定位：自拟计算题：水体IOP。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q179 · [A] 【计算】CDOM在440 nm处 $a_g=0.40\,\mathrm{m^{-1}}$，斜率 $S_g=0.015\,\mathrm{nm^{-1}}$，求490 nm处吸收系数。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$a_g(490)=0.40e^{0.015(440-490)}=0.40e^{-0.75}\approx0.189\;\mathrm{m^{-1}}.$$ 波长增加，CDOM吸收减弱。

*课件定位：自拟计算题：CDOM指数谱。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q180 · [A] 【判读】甲水体440 nm吸收很强、无明显675 nm色素峰；乙在440、675 nm都出现峰，如何初步解释？</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

甲可能CDOM或非藻类颗粒物贡献突出；乙具有较明显的浮游植物色素吸收特征。必须结合近红外、绿光等其他波段以及现场数据判断；单凭一条曲线不能唯一识别。

*课件定位：自拟判读题：光谱曲线。*

</details>

<details style="margin:0.85rem 0;padding:0.7rem 0.85rem;border:1px solid #dce6ee;border-radius:10px;background:#fafcff;box-shadow:0 1px 3px rgba(35,65,95,0.045);">
<summary style="cursor:pointer;line-height:1.7;padding:0.65rem 0.8rem;background:#eaf3fc;border:1px solid #d7e6f6;border-left:4px solid #7daed9;border-radius:7px;color:#23354b;"><strong>Q181 · [A] 【综合推导】从海面上下行辐照度、次表层漫反射率、Q因子及界面透射关系，推导 $R_{rs}$。</strong> <span style="display:inline-block;margin-left:0.7rem;padding:0.1em 0.55em;border:1px solid #b2c9ea;border-radius:6px;color:#2360ac;font-size:0.86em;white-space:nowrap;">查看答案 ▾</span></summary>

<span style="display:inline-block;margin-top:0.6rem;padding:0.16rem 0.62rem;border-radius:5px;background:#e5f3eb;color:#276448;font-weight:700;">参考答案</span>

$$R=\frac{E_u^-}{E_d^-},\quad Q=\frac{E_u^-}{L_u^-},\quad L_w=\frac{t_iL_u^-}{n'^2},\quad E_d^-=\frac{1-\bar\rho}{1-rR}E_d^+.$$ 链式代入：$$\boxed{R_{rs}=\frac{L_w}{E_d^+}=\frac{t_i(1-\bar\rho)R}{n'^2Q(1-rR)}}.$$ 各步需解释**向上/向下、海表上/下、透射与内部反射**。

*课件定位：自拟推导题：水色遥感基础-2第11—17页。*

</details>

---

## 复习使用建议

1. **先背A类**：对照全部A类题，至少能口述定义、写出公式和解释变量。
2. **再做综合题**：最后一章请闭卷计算，并检查单位、近似条件与数值。
3. **画谱图**：重点默画纯水、CDOM、非藻类颗粒物、浮游植物吸收曲线与颗粒物后向散射曲线，标出横纵轴、典型峰位和变化方向。
4. **核对原课件**：本题库为整理出的参考答案，课堂特殊记号、符号约定及实际考试口径以PPT和教师说明为准。

### 相关课件索引

- 绪论：`1. 海洋遥感—绪论_1.pptx`、`1. 海洋遥感—绪论_2.pptx`
- 辐射传输：`2. 海洋遥感-辐射传输_1.pptx`、`2. 海洋遥感-辐射传输—2(LE).pptx`
- 卫星轨道：`3. 海洋遥感-卫星轨道与分辨率—1.pptx`、`3. 海洋遥感-卫星轨道与分辨率-2.pptx`
- 图像处理：`4. 海洋遥感-数字图像处理与实践-1.pptx`、`4. 海洋遥感-数字图像处理与实践-2.pptx`
- 水色遥感：`5-水色遥感基础-1.pptx`、`5-水色遥感基础-2.pptx`
