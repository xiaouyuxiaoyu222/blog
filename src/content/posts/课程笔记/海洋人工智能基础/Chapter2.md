---
title: OceanAI-Chapter2：逻辑与推理
published: 2026-06-12
updated: 2026-06-12
description: 命题逻辑、谓词逻辑、因果推断、结构因果模型、贝叶斯网络、d-分离
tags: [海洋人工智能基础]
category: 课程笔记
draft: false
---

## 概述

这一章的核心是：

> 把自然语言中的事实与关系转换成形式化表达，再依据明确的规则完成推理；进一步用因果图表示随机变量之间的生成结构，并由图判断概率分解与条件独立性。

全章可以串成三条链：

1. **命题逻辑**

   $$
   \text{原子命题}
   \rightarrow \text{复合命题}
   \rightarrow \text{逻辑等价}
   \rightarrow \text{推理规则}
   \rightarrow \text{范式}
   $$

2. **谓词逻辑**

   $$
   \text{个体、谓词、量词}
   \rightarrow \text{谓词公式}
   \rightarrow \text{量词推理}
   \rightarrow \text{自然语言形式化}
   $$

3. **因果推理**

   $$
   \text{关联}
   \rightarrow \text{干预}
   \rightarrow \text{反事实}
   \rightarrow \text{结构因果模型}
   \rightarrow \text{因果图}
   \rightarrow \text{D-分离}
   $$

命题逻辑和谓词逻辑属于**符号推理**：前提和规则确定后，推理结论也随之确定。老师将它与大语言模型作了对比：大语言模型通常依据条件概率分布进行采样，因此同一问题可能产生不同回答。

本章学习重点：

- 理解符号的含义，尤其要区分 $\to$、$\Rightarrow$、$\equiv$；
- 会把蕴含和双向蕴含转换成只含 $\neg,\land,\lor$ 的形式；
- 会使用归结法完成证明或判断命题集是否可满足；
- 会把自然语言翻译成谓词公式；
- 会根据因果图写联合概率分布，并用链、分连、汇连和 **D-分离**判断条件独立性。

---

## 目录

- [概述](#概述)
- [目录](#目录)
- [逻辑与推理](#逻辑与推理)
- [命题逻辑](#命题逻辑)
  - [命题、原子命题与复合命题](#命题原子命题与复合命题)
  - [命题联结词](#命题联结词)
  - [蕴含命题为什么在前件为假时为真](#蕴含命题为什么在前件为假时为真)
  - [逻辑等价](#逻辑等价)
  - [四种符号的区别](#四种符号的区别)
  - [命题逻辑的推理规则](#命题逻辑的推理规则)
  - [归结法例题](#归结法例题)
  - [范式](#范式)
- [谓词逻辑](#谓词逻辑)
  - [为什么需要谓词逻辑](#为什么需要谓词逻辑)
  - [个体、谓词与个体域](#个体谓词与个体域)
  - [谓词与函数的区别](#谓词与函数的区别)
  - [量词](#量词)
  - [自然语言中的常见量词结构](#自然语言中的常见量词结构)
  - [全称量词与存在量词的等价关系](#全称量词与存在量词的等价关系)
  - [约束变元、自由变元与作用域](#约束变元自由变元与作用域)
  - [量词的分配律](#量词的分配律)
  - [多个量词的次序](#多个量词的次序)
  - [项、原子公式与合式公式](#项原子公式与合式公式)
  - [谓词逻辑推理规则](#谓词逻辑推理规则)
  - [谓词逻辑推理例题](#谓词逻辑推理例题)
  - [自然语言的形式化](#自然语言的形式化)
- [因果推理](#因果推理)
  - [相关关系不等于因果关系](#相关关系不等于因果关系)
  - [辛普森悖论](#辛普森悖论)
  - [因果推理的三个层次](#因果推理的三个层次)
  - [结构因果模型](#结构因果模型)
  - [因果图与有向无环图](#因果图与有向无环图)
  - [因果图中的联合概率分解](#因果图中的联合概率分解)
  - [图结构为什么能够降低参数量](#图结构为什么能够降低参数量)
  - [链结构](#链结构)
  - [分连结构](#分连结构)
  - [汇连结构](#汇连结构)
  - [D-分离](#d-分离)
  - [D-分离例题](#d-分离例题)
- [本章总结](#本章总结)

---

## 逻辑与推理

**推理（inference）**是由一个或若干已知判断，即**前提**，按照一定规则推出新判断，即**结论**的过程。

符号主义人工智能的基本思路是：

- 用符号表示概念；
- 用符号之间的关系表示知识；
- 用形式化规则构造证明；
- 根据证明判断结论成立或不成立。

逻辑推理推动了早期**专家系统（expert system）**的发展。专家系统通常存储领域事实、规则和其他知识，再根据用户输入调用推理规则得到结论。

---

## 命题逻辑

**命题逻辑（propositional logic）**是利用形式化规则，对用符号表示的陈述进行推理的系统。

### 命题、原子命题与复合命题

#### 命题

**命题（proposition）**是能够确定真假的陈述句。

- 命题的取值只有两种：真（True）或假（False）；
- 疑问句、祈使句通常不是命题；
- 含有未确定自由变量、因而无法判断真假的陈述也不是命题。

#### 原子命题

**原子命题（atomic proposition）**是内部结构不再分析的最简单命题。

例如：

- $p$：北京是中国的首都；
- $q$：13 能被 6 整除。

#### 复合命题

**复合命题（compound proposition）**由若干原子命题通过逻辑联结词构成。

#### 例：判断是否为命题

| 陈述 | 是否为命题 | 真值及原因 |
|---|---|---|
| $p$：北京是中国的首都 | 是 | 真命题 |
| $q$：13 能被 6 整除 | 是 | 假命题 |
| $r$：$x<8$ | 否 | 真值依赖 $x$ 的取值 |
| $s$：存在最大的素数 | 是 | 假命题 |
| $t$：$m^2\ge 0$ | 是 | 在论域为实数时恒真 |

:::TIP
判断一句话是否为命题，先问：**在给定论域和语境下，它现在能否被唯一判断为真或假？**
:::

### 命题联结词

设 $p,q$ 为命题，常见联结词如下。

| 名称 | 符号 | 形式 | 含义 |
|---|---:|---:|---|
| 合取（and） | $\land$ | $p\land q$ | $p$ 且 $q$ |
| 析取（or） | $\lor$ | $p\lor q$ | $p$ 或 $q$，这里是相容或 |
| 否定（not） | $\neg$ | $\neg p$ | 非 $p$ |
| 蕴含（conditional） | $\to$ | $p\to q$ | 如果 $p$，那么 $q$ |
| 双向蕴含（bi-conditional） | $\leftrightarrow$ | $p\leftrightarrow q$ | $p$ 当且仅当 $q$ |

#### 真值表

| $p$ | $q$ | $\neg p$ | $p\land q$ | $p\lor q$ | $p\to q$ | $p\leftrightarrow q$ |
|---:|---:|---:|---:|---:|---:|---:|
| F | F | T | F | F | T | T |
| F | T | T | F | T | T | F |
| T | F | F | F | T | F | F |
| T | T | F | T | T | T | T |

其中最容易出错的是蕴含：

> $p\to q$ 只有在 $p$ 为真而 $q$ 为假时为假，其余三种情况均为真。

### 蕴含命题为什么在前件为假时为真

可以从两个角度理解。

#### 角度一：承诺

$p\to q$ 可以理解为一个承诺：

> 只要 $p$ 发生，我就保证 $q$ 发生。

只有出现“$p$ 已发生，但 $q$ 没发生”时，承诺才被违反。若 $p$ 没发生，就没有证据说明承诺被违反。

#### 角度二：集合包含

把命题对应的真值集合记作集合，则 $p\to q$ 表示：

$$
p\subseteq q
$$

若 $p$ 为假，可把 $p$ 看成空集，而空集是任意集合的子集，因此 $p\to q$ 为真。

:::WARNING
“前件为假，所以蕴含为真”是**形式逻辑的定义**。它不表示前件与后件之间具有现实因果关系。
:::

### 逻辑等价

如果两个命题公式在所有真值组合下都具有相同真值，则称它们**逻辑等价（logical equivalence）**，记作：

$$
\alpha\equiv\beta
$$

常用逻辑等价式如下。

| 名称 | 逻辑等价式 |
|---|---|
| 合取交换律 | $\alpha\land\beta\equiv\beta\land\alpha$ |
| 析取交换律 | $\alpha\lor\beta\equiv\beta\lor\alpha$ |
| 合取结合律 | $(\alpha\land\beta)\land\gamma\equiv\alpha\land(\beta\land\gamma)$ |
| 析取结合律 | $(\alpha\lor\beta)\lor\gamma\equiv\alpha\lor(\beta\lor\gamma)$ |
| 德摩根定律 1 | $\neg(\alpha\land\beta)\equiv\neg\alpha\lor\neg\beta$ |
| 德摩根定律 2 | $\neg(\alpha\lor\beta)\equiv\neg\alpha\land\neg\beta$ |
| 蕴含消除 | $\alpha\to\beta\equiv\neg\alpha\lor\beta$ |
| 双向蕴含消除 | $\alpha\leftrightarrow\beta\equiv(\alpha\to\beta)\land(\beta\to\alpha)$ |
| 双重否定 | $\neg\neg\alpha\equiv\alpha$ |
| 逆否命题 | $\alpha\to\beta\equiv\neg\beta\to\neg\alpha$ |
| 分配律 1 | $\alpha\land(\beta\lor\gamma)\equiv(\alpha\land\beta)\lor(\alpha\land\gamma)$ |
| 分配律 2 | $\alpha\lor(\beta\land\gamma)\equiv(\alpha\lor\beta)\land(\alpha\lor\gamma)$ |

#### 蕴含消除

$$
\alpha\to\beta\equiv\neg\alpha\lor\beta
$$

右侧只有在 $\alpha$ 为真、$\beta$ 为假时为假，恰好与蕴含的真值表一致。

#### 逆否命题

$$
\begin{aligned}
\alpha\to\beta
&\equiv \neg\alpha\lor\beta\\
&\equiv \beta\lor\neg\alpha\\
&\equiv \neg\beta\to\neg\alpha
\end{aligned}
$$

> **图片占位符：**插入 PPT 第 10 页的德摩根定律集合图，用于直观展示“交集取补变并集”“并集取补变交集”。

### 四种符号的区别

| 符号 | 所在层次 | 含义 |
|---:|---|---|
| $\to$ | 命题公式内部 | 蕴含联结词，“如果……那么……” |
| $\leftrightarrow$ | 命题公式内部 | 双向蕴含，“当且仅当” |
| $\equiv$ | 两个公式之间 | 两个公式在所有情况下真值相同 |
| $\Rightarrow$ | 推理过程 | 由左侧前提推出右侧结论 |

例如：

$$
\alpha\to\beta,\ \alpha\Rightarrow\beta
$$

左侧的 $\to$ 是命题的一部分；中间的 $\Rightarrow$ 表示一次推理。

### 命题逻辑的推理规则

#### 假言推理（Modus Ponens）

$$
\alpha\to\beta,\ \alpha\Rightarrow\beta
$$

#### 与消解（And-Elimination）

$$
\alpha_1\land\alpha_2\land\cdots\land\alpha_n
\Rightarrow \alpha_i
$$

#### 与导入（And-Introduction）

$$
\alpha_1,\alpha_2,\ldots,\alpha_n
\Rightarrow
\alpha_1\land\alpha_2\land\cdots\land\alpha_n
$$

#### 双重否定消去

$$
\neg\neg\alpha\Rightarrow\alpha
$$

#### 单项归结（Unit Resolution）

$$
\alpha\lor\beta,\ \neg\beta\Rightarrow\alpha
$$

因为 $\alpha\lor\beta$ 为真，而 $\beta$ 为假，所以只能由 $\alpha$ 保证析取式为真。

#### 归结（Resolution）

$$
\alpha\lor\beta,\ \neg\beta\lor\gamma
\Rightarrow
\alpha\lor\gamma
$$

其中 $\beta$ 与 $\neg\beta$ 被消去。

更一般地，若一个析取式中含有 $\alpha_k$，另一个前提能够推出 $\neg\alpha_k$，则可从析取式中消去 $\alpha_k$。

:::TIP
归结法的核心操作是：

1. 先消去公式中的 $\to$ 和 $\leftrightarrow$；
2. 找到一对互补文字，如 $\beta$ 与 $\neg\beta$；
3. 消去该对文字，保留其余析取项；
4. 重复操作，直到得到目标或推出矛盾。
:::

### 归结法例题

#### 例 1：证明 $\gamma$ 成立

已知：

$$
\alpha\lor\beta,\qquad
\alpha\to\gamma,\qquad
\beta\to\gamma
$$

证明：$\gamma$。

先消去蕴含：

$$
\alpha\to\gamma\equiv\neg\alpha\lor\gamma
$$

$$
\beta\to\gamma\equiv\neg\beta\lor\gamma
$$

依次归结：

$$
\alpha\lor\beta,\ \neg\alpha\lor\gamma
\Rightarrow
\beta\lor\gamma
$$

$$
\beta\lor\gamma,\ \neg\beta\lor\gamma
\Rightarrow
\gamma\lor\gamma
\equiv\gamma
$$

因此 $\gamma$ 成立。

#### 例 2：证明命题集不可满足

命题集为：

$$
\alpha\lor\beta,
\quad \neg\alpha\lor\beta,
\quad \alpha\lor\neg\beta,
\quad \neg\alpha\lor\neg\beta
$$

由前两个公式归结：

$$
\alpha\lor\beta,\ \neg\alpha\lor\beta
\Rightarrow \beta
$$

由后两个公式归结：

$$
\alpha\lor\neg\beta,\ \neg\alpha\lor\neg\beta
\Rightarrow \neg\beta
$$

于是同时推出 $\beta$ 和 $\neg\beta$，产生矛盾，所以该命题集**不可满足**。

#### 例 3：证明另一个命题集不可满足

已知：

$$
\alpha\lor\gamma,
\quad \neg\beta\lor\gamma,
\quad \neg\gamma\lor\alpha,
\quad \neg\alpha\lor\beta,
\quad \neg\alpha\lor\neg\gamma
$$

推理：

$$
\alpha\lor\gamma,\ \neg\gamma\lor\alpha
\Rightarrow \alpha
$$

$$
\neg\alpha\lor\beta,\ \alpha
\Rightarrow \beta
$$

$$
\neg\beta\lor\gamma,\ \beta
\Rightarrow \gamma
$$

$$
\neg\alpha\lor\neg\gamma,\ \gamma
\Rightarrow \neg\alpha
$$

最终同时得到 $\alpha$ 与 $\neg\alpha$，所以命题集不可满足。

### 范式

**范式（normal form）**是命题公式的一种标准表达形式，主要包括析取范式和合取范式。

#### 析取范式（DNF）

有限个简单合取式构成的析取式：

$$
\alpha_1\lor\alpha_2\lor\cdots\lor\alpha_k
$$

其中每个 $\alpha_i$ 是若干文字的合取。

例如：

$$
(\neg p\land q)\lor r
$$

#### 合取范式（CNF）

有限个简单析取式构成的合取式：

$$
\alpha_1\land\alpha_2\land\cdots\land\alpha_k
$$

其中每个 $\alpha_i$ 是若干文字的析取。

例如：

$$
(p\lor q)\land\neg r
$$

#### 性质

- 一个析取范式为假，当且仅当其中每个简单合取式都为假；
- 一个合取范式为真，当且仅当其中每个简单析取式都为真；
- 任一命题公式都存在与其逻辑等价的 DNF 和 CNF；
- DNF 和 CNF 一般都不唯一。

#### 转换流程

1. 消去 $\to$ 与 $\leftrightarrow$；
2. 用德摩根定律把否定推进到原子命题前；
3. 用分配律整理成 DNF 或 CNF。

#### 例：求 DNF 与 CNF

求：

$$
\neg(\alpha\to\beta)\lor\neg\gamma
$$

先消去蕴含：

$$
\neg(\neg\alpha\lor\beta)\lor\neg\gamma
$$

用德摩根定律：

$$
(\alpha\land\neg\beta)\lor\neg\gamma
$$

这已经是析取范式。

再用分配律：

$$
(\alpha\lor\neg\gamma)
\land
(\neg\beta\lor\neg\gamma)
$$

这就是合取范式。

---

## 谓词逻辑

### 为什么需要谓词逻辑

命题逻辑把每个原子命题视为不可拆分的整体，因此无法表达：

- 个体与总体的关系；
- 一般与特殊的关系；
- 个体具有的属性；
- 多个个体之间的关系。

例如苏格拉底三段论：

1. 所有人都会死；
2. 苏格拉底是人；
3. 所以苏格拉底会死。

若把三句话分别记作 $\alpha,\beta,\gamma$，命题逻辑看不到三句话内部共同出现的“人”和“会死”这些结构，无法仅凭 $\alpha,\beta$ 推出 $\gamma$。

谓词逻辑会把原子命题继续拆分成：

- **个体（individual）**；
- **谓词（predicate）**；
- **量词（quantifier）**。

### 个体、谓词与个体域

#### 个体

个体是研究领域中能够独立存在的具体或抽象对象。

例如：

- Richard；
- 北京；
- 中国；
- 某个实数；
- 某个人。

#### 个体变元、个体常项与个体域

- $x,y$ 等表示个体变元；
- Richard、北京、$0.1$ 等具体取值称为个体常项；
- 个体允许取值的范围称为**个体域或论域**。

#### 谓词

谓词用于刻画个体的属性，或描述多个个体之间的关系，其输出只能为真或假。

- 一元谓词 $P(x)$：描述一个个体的属性；
- 二元谓词 $R(x,y)$：描述两个个体之间的关系；
- $n$ 元谓词 $P(x_1,\ldots,x_n)$：描述多个个体之间的关系。

例如：

$$
P(x):x<x^2
$$

$$
Father(x,y):x\text{ 是 }y\text{ 的父亲}
$$

#### 客观事实的符号化

1. Richard 是国王：

   $$
   King(Richard)
   $$

2. Lucy 和 Lily 是姐妹：

   $$
   Sister(Lucy,Lily)
   $$

3. 北京是中国的首都：

   $$
   Capital(Beijing,China)
   $$

### 谓词与函数的区别

函数和谓词都可以接受输入，但输出类型不同。

#### 函数

$$
f:\mathcal X\to\mathcal Y
$$

例如：

$$
f(x)=x+10,\qquad f(2)=12
$$

输入个体后，函数输出另一个值。

#### 谓词

$$
P:\mathcal X\to\{True,False\}
$$

例如：

$$
Car(x):x\text{ 是车}
$$

将“吉普车”代入后，$Car(\text{吉普车})$ 已经成为一个能够判断真假的命题。

> 函数输出“值”，谓词输出“真假”。

### 量词

#### 全称量词

全称量词用 $\forall$ 表示“一切”“所有”“任意一个”。

$$
(\forall x)P(x)
$$

表示论域中的所有个体都满足性质 $P$。

#### 存在量词

存在量词用 $\exists$ 表示“存在一个”“至少一个”“某些”。

$$
(\exists x)P(x)
$$

表示论域中至少存在一个个体满足性质 $P$。

#### 例：用量词描述事实

所有国王都是人：

$$
(\forall x)(King(x)\to Person(x))
$$

所有国王都头戴皇冠：

$$
(\forall x)(King(x)\to HeadOn(Crown,x))
$$

其中 $HeadOn(Crown,x)$ 表示 $x$ 头戴皇冠。形式化时要同时找出谓词及其输入对象。

:::WARNING
量词的含义依赖论域。例如 $(\exists x)(x^2=2)$ 在实数域中为真，在有理数域中为假。
:::

### 自然语言中的常见量词结构

这是自然语言形式化时最常用的模板。

#### 所有 $A$ 都是 $B$

$$
(\forall x)(A(x)\to B(x))
$$

全称命题通常使用蕴含：只有先满足 $A(x)$，才要求其满足 $B(x)$。

#### 有些 $A$ 是 $B$

$$
(\exists x)(A(x)\land B(x))
$$

存在命题通常使用合取：需要找到同一个个体，同时满足 $A$ 和 $B$。

#### 没有 $A$ 是 $B$

$$
(\forall x)(A(x)\to\neg B(x))
$$

等价地：

$$
\neg(\exists x)(A(x)\land B(x))
$$

#### 并非所有 $A$ 都是 $B$

$$
\neg(\forall x)(A(x)\to B(x))
$$

等价地：

$$
(\exists x)(A(x)\land\neg B(x))
$$

:::TIP
常见记忆：

- “所有……”常写成 $\forall+\to$；
- “存在……”常写成 $\exists+\land$。
:::

### 全称量词与存在量词的等价关系

量词穿过否定符号时：

- $\forall$ 与 $\exists$ 互换；
- 谓词同时取否定。

四个基本关系为：

$$
(\forall x)P(x)
\equiv
\neg(\exists x)\neg P(x)
$$

$$
(\forall x)\neg P(x)
\equiv
\neg(\exists x)P(x)
$$

$$
\neg(\forall x)P(x)
\equiv
(\exists x)\neg P(x)
$$

$$
(\exists x)P(x)
\equiv
\neg(\forall x)\neg P(x)
$$

例如：

> “并非所有学生都及格”等价于“至少有一个学生没有及格”。

### 约束变元、自由变元与作用域

#### 约束变元

受到量词约束的变量称为约束变元。

例如：

$$
(\forall x)P(x)
$$

其中 $x$ 是约束变元。

#### 自由变元

没有受到任何量词约束的变量称为自由变元。

例如：

$$
P(x)\lor Q(y)
$$

若前面没有量词，则 $x,y$ 都是自由变元。

#### 量词作用域

量词只对其作用域中的变量生效。括号能够明确作用域：

$$
(\forall x)(P(x)\to Q(x))
$$

一般不加括号时，量词只约束其后的第一个完整公式，因此书写时应尽量加括号。

若 $B$ 中不含自由变量 $x$，则：

$$
(\forall x)(A(x)\lor B)
\equiv
(\forall x)A(x)\lor B
$$

$$
(\forall x)(A(x)\land B)
\equiv
(\forall x)A(x)\land B
$$

$$
(\exists x)(A(x)\lor B)
\equiv
(\exists x)A(x)\lor B
$$

$$
(\exists x)(A(x)\land B)
\equiv
(\exists x)A(x)\land B
$$

原因是 $B$ 不依赖 $x$，所以量词是否包住 $B$ 不改变 $B$ 的真假。

### 量词的分配律

#### 成立的分配律

全称量词对合取满足分配律：

$$
(\forall x)(A(x)\land B(x))
\equiv
(\forall x)A(x)\land(\forall x)B(x)
$$

存在量词对析取满足分配律：

$$
(\exists x)(A(x)\lor B(x))
\equiv
(\exists x)A(x)\lor(\exists x)B(x)
$$

#### 一般不成立的分配律

$$
(\forall x)(A(x)\lor B(x))
\not\equiv
(\forall x)A(x)\lor(\forall x)B(x)
$$

$$
(\exists x)(A(x)\land B(x))
\not\equiv
(\exists x)A(x)\land(\exists x)B(x)
$$

#### 反例

令论域为 $\{1,2\}$，并设：

| $x$ | $A(x)$ | $B(x)$ |
|---:|---:|---:|
| 1 | T | F |
| 2 | F | T |

对于全称量词：

- 对每个 $x$，$A(x)\lor B(x)$ 都为真，所以 $(\forall x)(A(x)\lor B(x))$ 为真；
- $(\forall x)A(x)$ 为假，$(\forall x)B(x)$ 也为假，所以右侧为假。

对于存在量词：

- 没有同一个 $x$ 同时满足 $A(x)$ 与 $B(x)$，所以 $(\exists x)(A(x)\land B(x))$ 为假；
- 存在某个 $x$ 满足 $A$，也存在某个可能不同的 $x$ 满足 $B$，所以右侧为真。

这说明“存在一个人同时满足两个条件”与“分别存在人满足两个条件”含义不同。

### 多个量词的次序

相同类型的量词可以交换次序：

$$
(\forall x)(\forall y)A(x,y)
\equiv
(\forall y)(\forall x)A(x,y)
$$

$$
(\exists x)(\exists y)A(x,y)
\equiv
(\exists y)(\exists x)A(x,y)
$$

不同类型的量词一般不能交换：

$$
(\forall x)(\exists y)A(x,y)
\not\equiv
(\exists y)(\forall x)A(x,y)
$$

在论域非空时，PPT 还给出了以下常用的单向推理关系：

$$
(\forall x)(\forall y)A(x,y)
\Rightarrow
(\exists y)(\forall x)A(x,y)
$$

$$
(\forall x)(\forall y)A(x,y)
\Rightarrow
(\exists x)(\forall y)A(x,y)
$$

$$
(\exists y)(\forall x)A(x,y)
\Rightarrow
(\forall x)(\exists y)A(x,y)
$$

$$
(\exists x)(\forall y)A(x,y)
\Rightarrow
(\forall y)(\exists x)A(x,y)
$$

$$
(\forall x)(\exists y)A(x,y)
\Rightarrow
(\exists y)(\exists x)A(x,y)
$$

$$
(\forall y)(\exists x)A(x,y)
\Rightarrow
(\exists x)(\exists y)A(x,y)
$$

这些式子大多只能沿箭头方向使用，不能随意改成双向等价。

例如：

$$
(\forall x)(\exists y)Great(y,x)
$$

表示：对每个 $x$，都可以找到一个大于它的 $y$；不同的 $x$ 可以对应不同的 $y$。

而：

$$
(\exists y)(\forall x)Great(y,x)
$$

表示：存在同一个固定的 $y$，它大于所有 $x$。两者显然不同。

### 项、原子公式与合式公式

#### 项（term）

项是描述对象的逻辑表达式，递归定义为：

1. 常量符号和变量符号是项；
2. 若 $f$ 是 $n$ 元函数符号，$t_1,\ldots,t_n$ 是项，则 $f(t_1,\ldots,t_n)$ 也是项；
3. 有限次使用上述规则得到的表达式是项。

#### 原子谓词公式

若 $P$ 是 $n$ 元谓词，$t_1,\ldots,t_n$ 是项，则：

$$
P(t_1,t_2,\ldots,t_n)
$$

称为原子谓词公式。

#### 合式公式（well-formed formula）

合式公式由以下规则生成：

1. 命题常项、命题变项、原子谓词公式是合式公式；
2. 若 $A$ 是合式公式，则 $\neg A$ 也是；
3. 若 $A,B$ 是合式公式，则 $A\land B$、$A\lor B$、$A\to B$、$A\leftrightarrow B$ 也是；
4. 若 $A(x)$ 是合式公式，则 $(\forall x)A(x)$ 和 $(\exists x)A(x)$ 也是；
5. 只有有限次使用上述规则构成的表达式才是合式公式。

### 谓词逻辑推理规则

设 $A(x)$ 是谓词公式，$x,y$ 是变元，$a$ 是常量符号。

#### 全称量词消去（UI）

$$
(\forall x)A(x)\Rightarrow A(y)
$$

既然所有个体都满足 $A$，任取一个个体也满足 $A$。

#### 全称量词引入（UG）

$$
A(y)\Rightarrow(\forall x)A(x)
$$

这里的 $y$ 必须代表任意个体，不能带有只对某个特殊对象成立的额外假设。

#### 存在量词消去（EI）

$$
(\exists x)A(x)\Rightarrow A(a)
$$

引入一个新的常量 $a$，表示某个满足 $A$ 的对象。

#### 存在量词引入（EG）

$$
A(a)\Rightarrow(\exists x)A(x)
$$

已知某个具体对象满足 $A$，就能推出至少存在一个对象满足 $A$。

### 谓词逻辑推理例题

#### 例 1：证明蕴含关系的传递性

已知：

$$
(\forall x)(P(x)\to Q(x))
$$

$$
(\forall x)(Q(x)\to R(x))
$$

证明：

$$
(\forall x)(P(x)\to R(x))
$$

推理：

1. 全称量词消去：

   $$
   P(y)\to Q(y)
   $$

2. 全称量词消去：

   $$
   Q(y)\to R(y)
   $$

3. 消去蕴含：

   $$
   \neg P(y)\lor Q(y)
   $$

   $$
   \neg Q(y)\lor R(y)
   $$

4. 对 $Q(y)$ 与 $\neg Q(y)$ 归结：

   $$
   \neg P(y)\lor R(y)
   $$

5. 恢复为蕴含：

   $$
   P(y)\to R(y)
   $$

6. 因 $y$ 是任意个体，进行全称量词引入：

   $$
   (\forall x)(P(x)\to R(x))
   $$

#### 例 2：由存在条件推出新的存在结论

已知：

$$
(\forall x)(F(x)\to(G(x)\land H(x)))
$$

$$
(\exists x)(F(x)\land P(x))
$$

证明：

$$
(\exists x)(P(x)\land H(x))
$$

推理：

1. 对全称命题实例化：

   $$
   F(a)\to(G(a)\land H(a))
   $$

2. 对存在命题实例化：

   $$
   F(a)\land P(a)
   $$

3. 与消解得到：

   $$
   F(a),\qquad P(a)
   $$

4. 由假言推理：

   $$
   G(a)\land H(a)
   $$

5. 与消解得到 $H(a)$；再与 $P(a)$ 合取：

   $$
   P(a)\land H(a)
   $$

6. 存在量词引入：

   $$
   (\exists x)(P(x)\land H(x))
   $$

### 自然语言的形式化

#### 例：若干事实的谓词表示

1. Tom 不仅喜欢踢足球，还喜欢打篮球：

   $$
   Like(Tom,Football)\land Like(Tom,Basketball)
   $$

2. Tom 的所有同学都喜欢他：

   $$
   (\forall x)(Classmate(Tom,x)\to Like(x,Tom))
   $$

3. 不是所有男生都喜欢打篮球：

   $$
   \neg(\forall x)(Boy(x)\to Like(x,Basketball))
   $$

   等价于：

   $$
   (\exists x)(Boy(x)\land\neg Like(x,Basketball))
   $$

4. 一个人是华侨，当且仅当他在国外定居且具有中国国籍：

   $$
   (\forall x)
   \left[
   OverseasChinese(x)
   \leftrightarrow
   (Overseas(x)\land Chinese(x))
   \right]
   $$

5. 男生都爱看世界杯：

   $$
   (\forall x)(Boy(x)\to Like(x,WorldCup))
   $$

#### 例：每一个奇数都存在一个大于它的奇数

定义：

$$
Odd(x):x\text{ 是奇数}
$$

$$
Great(y,x):y>x
$$

形式化为：

$$
(\forall x)
\left[
Odd(x)\to
(\exists y)(Odd(y)\land Great(y,x))
\right]
$$

注意 $\forall x\exists y$ 的次序：对不同的 $x$，可以选择不同的 $y$。

#### 例：苏格拉底三段论

定义：

$$
F(x):x\text{ 是人}
$$

$$
G(x):x\text{ 会死}
$$

$a$ 表示苏格拉底。

前提：

$$
(\forall x)(F(x)\to G(x)),\qquad F(a)
$$

由全称量词消去：

$$
F(a)\to G(a)
$$

再由假言推理：

$$
G(a)
$$

即苏格拉底会死。

#### 例：飞机问题

前提：

1. 每架飞机或者停在地面，或者飞在天空；
2. 并非每架飞机都飞在天空。

证明：有些飞机停在地面。

定义：

$$
Plane(x):x\text{ 是飞机}
$$

$$
OnGround(x):x\text{ 停在地面}
$$

$$
InSky(x):x\text{ 飞在天空}
$$

形式化前提：

$$
(\forall x)
\left[
Plane(x)\to(OnGround(x)\lor InSky(x))
\right]
$$

$$
\neg(\forall x)(Plane(x)\to InSky(x))
$$

目标：

$$
(\exists x)(Plane(x)\land OnGround(x))
$$

证明：

由第二个前提：

$$
\begin{aligned}
\neg(\forall x)(Plane(x)\to InSky(x))
&\equiv
(\exists x)\neg(Plane(x)\to InSky(x))\\
&\equiv
(\exists x)\neg(\neg Plane(x)\lor InSky(x))\\
&\equiv
(\exists x)(Plane(x)\land\neg InSky(x))
\end{aligned}
$$

存在量词消去，取某个 $a$：

$$
Plane(a),\qquad \neg InSky(a)
$$

由第一个前提进行全称量词消去：

$$
Plane(a)\to(OnGround(a)\lor InSky(a))
$$

由 $Plane(a)$ 和假言推理：

$$
OnGround(a)\lor InSky(a)
$$

再与 $\neg InSky(a)$ 作单项归结：

$$
OnGround(a)
$$

因此：

$$
Plane(a)\land OnGround(a)
$$

最后使用存在量词引入：

$$
(\exists x)(Plane(x)\land OnGround(x))
$$

证毕。

---

## 因果推理

### 相关关系不等于因果关系

**因果关系**描述现象之间“引起”与“被引起”的关系：

- 引起某种现象的因素称为原因；
- 被引起的现象称为结果。

**因果推理（causal inference）**是在考虑数据生成过程的基础上，由观测结果追溯原因，或预测主动改变某个因素后会产生什么结果。

两个变量具有统计相关性，并不自动意味着其中一个导致另一个。

例如：

- 公鸡打鸣与太阳升起高度相关；
- 但公鸡打鸣并不是太阳升起的原因。

传统统计推断常研究：

$$
P(B\mid A)
$$

即观察到 $A$ 后，$B$ 的条件分布怎样。因果推理还会进一步问：

> 如果人为改变 $A$，$B$ 的分布会怎样变化？

### 辛普森悖论

**辛普森悖论（Simpson's paradox）**是指：总体数据中呈现的一种关系，在按照某个变量分组后可能反转。

课堂中的新药例子如下。

#### 总体结果

|  | 不用药 | 用药 |
|---|---:|---:|
| 恢复人数 | 289 | 273 |
| 总人数 | 350 | 350 |
| 恢复率 | 83% | 78% |

总体看，不用药恢复率更高。

#### 按性别分组

|  | 不用药男性 | 不用药女性 | 用药男性 | 用药女性 |
|---|---:|---:|---:|---:|
| 恢复人数 | 234 | 55 | 81 | 192 |
| 总人数 | 270 | 80 | 87 | 263 |
| 恢复率 | 87% | 69% | 93% | 73% |

分组后：

- 男性中，用药组恢复率 $93\%>87\%$；
- 女性中，用药组恢复率 $73\%>69\%$。

出现反转的关键是：

- 男女性别本身与恢复率相关；
- 用药组与不用药组的性别构成严重不平衡；
- 性别成为影响“是否用药”和“是否恢复”关系的混杂因素。

因此，仅比较总体条件概率可能掩盖数据生成过程中的结构。

另一个经典例子是 1973 年加州大学伯克利分校的研究生录取数据：总体上男性录取率高于女性，但在若干主要院系内部比较时，女性录取率并不低。原因之一是不同性别申请院系的难度分布不同。

> **图片占位符：**插入 PPT 第 45 页的药物恢复率表，以及第 47 页的伯克利录取率表，用于展示辛普森悖论的总体—分组反转。

### 因果推理的三个层次

Judea Pearl 将问题区分为三个层次。

#### 关联（Association）

问题形式：

> 观察到 $A$ 时，$Y$ 会怎样？

数学形式：

$$
P(Y\mid A)
$$

它能够直接由观测数据中的联合分布计算。

#### 干预（Intervention）

问题形式：

> 主动把 $A$ 设置为某个值时，$Y$ 会怎样？

数学形式：

$$
P(Y\mid do(A=a))
$$

这里的 $do(A=a)$ 表示人为干预，不等同于被动观察到 $A=a$。

#### 反事实（Counterfactual）

问题形式：

> 某件事已经发生；在同一对象、同一背景下，若当时采取另一种行动，结果会怎样？

它需要同时考虑已经观察到的事实和没有发生的替代情形。

三者的区别是：

| 层次 | 典型问题 | 信息要求 |
|---|---|---|
| 关联 | 看到了什么，会伴随什么 | 观测分布 |
| 干预 | 主动改变什么，会导致什么 | 因果结构 |
| 反事实 | 同一对象当时换一种做法会怎样 | 更完整的个体级因果模型 |

### 结构因果模型

课程材料将因果模型的发展联系到两条重要路线：Neyman—Rubin 的**潜在结果**思想，以及 Judea Pearl 提出的**因果图与结构因果模型**。前者强调同一对象在不同处理下的潜在结果，后者用结构方程和有向图显式描述数据生成机制。

**结构因果模型（structural causal model, SCM）**由三部分组成：

$$
M=\langle U,V,F\rangle
$$

#### 外生变量 $U$

外生变量（exogenous variables）由模型外部决定，模型不解释它们如何产生。

它们通常表示：

- 未建模的背景条件；
- 外部扰动；
- 噪声；
- 个体差异。

#### 内生变量 $V$

内生变量（endogenous variables）由模型中的结构函数决定。

#### 结构函数 $F$

对每个内生变量 $V_i$，都有一个赋值函数：

$$
V_i=f_i(PA_i,U_i)
$$

其中 $PA_i$ 表示会直接影响 $V_i$ 的其他内生变量。

如果变量 $X$ 出现在 $Y$ 的结构函数 $f_Y$ 中，则 $X$ 是 $Y$ 的**直接原因**。

#### 例：治疗、肝脏功能与水污染

设：

- $X$：治疗方案；
- $Y$：肝脏功能；
- $Z$：水污染。

若认为治疗方案和水污染都会影响肝脏功能，可用图表示为：

$$
X\to Y\leftarrow Z
$$

其中水污染可能作为模型外部背景因素进入 $Y$ 的结构方程。

#### 例：商品销量

设：

- $X$：商品与其他商品的价格差；
- $Y$：广告费；
- $Z$：商品销量。

一个完全指定的结构方程可以写为：

$$
Z=2X+5Y
$$

因此 $X$ 和 $Y$ 都是 $Z$ 的直接原因，因果图为：

$$
X\to Z\leftarrow Y
$$

若具体函数未知，可写成部分指定模型：

$$
X=f_X(U_1)
$$

$$
Y=f_Y(U_2)
$$

$$
Z=f_Z(X,Y,U_3)
$$

其中 $U_1,U_2,U_3$ 表示未建模的外部因素。

:::TIP
老师对这一部分的要求以“理解模型组成与箭头含义”为主；后面的概率分解和独立性判断更需要熟练掌握。
:::

### 因果图与有向无环图

因果图（causal diagram）通常用**有向无环图（directed acyclic graph, DAG）**表示。

- 节点表示变量；
- 有向边 $X\to Y$ 表示 $X$ 是 $Y$ 的直接原因；
- 图中不存在沿箭头方向出发又回到原节点的有向环。

相关术语：

- 若 $X\to Y$，则 $X$ 是 $Y$ 的父节点，$Y$ 是 $X$ 的子节点；
- 若存在一条从 $X$ 指向 $Y$ 的有向路径，则 $X$ 是 $Y$ 的祖先，$Y$ 是 $X$ 的后代；
- 直接原因对应父节点；
- 潜在原因对应祖先节点。

当 DAG 被用于表示随机变量的联合分布时，常称为**贝叶斯网络（Bayesian network）**。

> **图片占位符：**插入 PPT 第 54—55 页的商品销量结构因果模型图，展示 $X,Y$ 对 $Z$ 的直接作用，以及外生变量 $U_i$ 的位置。

### 因果图中的联合概率分解

在课程采用的**因果马尔可夫假设**下，对于含有 $d$ 个变量的 DAG，联合分布可以分解为每个节点在其父节点条件下的条件概率之积：

$$
P(x_1,x_2,\ldots,x_d)
=
\prod_{j=1}^{d}
P\bigl(x_j\mid x_{pa(j)}\bigr)
$$

其中 $pa(j)$ 表示节点 $X_j$ 的父节点集合。

#### 写法步骤

1. 对图中每个节点写一个概率因子；
2. 若节点没有父节点，写边缘分布 $P(X)$；
3. 若节点有父节点，写 $P(X\mid Parents(X))$；
4. 把所有因子相乘。

#### 例：气候、产量和价格

因果图：

$$
X\to Y\to Z
$$

其中：

- $X$：气候好；
- $Y$：水果产量高；
- $Z$：水果价格低。

联合概率分解为：

$$
P(X,Y,Z)=P(X)P(Y\mid X)P(Z\mid Y)
$$

若：

$$
P(X)=0.5,
\quad
P(Y\mid X)=0.9,
\quad
P(Z\mid Y)=0.5
$$

则：

$$
P(X,Y,Z)=0.5\times0.9\times0.5=0.225
$$

#### 例：复杂 DAG

PPT 第 58 页的图可分解为：

$$
\begin{aligned}
&P(X_1,X_2,X_3,X_4,X_5,X_6,X_i,X_j)\\
={}&P(X_2)P(X_3)
P(X_1\mid X_2,X_3,X_i)
P(X_4\mid X_2)
P(X_5\mid X_3)\\
&\times P(X_6\mid X_i)
P(X_i\mid X_4)
P(X_j\mid X_1,X_5,X_6)
\end{aligned}
$$

> **图片占位符：**插入 PPT 第 58 页的复杂 DAG。读图时逐个寻找父节点，再写对应的条件概率因子。

### 图结构为什么能够降低参数量

没有结构时，若有 100 个离散随机变量，每个变量有 4 种取值，则完整联合分布共有：

$$
4^{100}
$$

种可能状态。概率和为 1，因此需要：

$$
4^{100}-1
$$

个自由参数。

若它们构成马尔可夫链：

$$
X_1\to X_2\to\cdots\to X_{100}
$$

则：

$$
P(X_1,\ldots,X_{100})
=P(X_1)\prod_{i=2}^{100}P(X_i\mid X_{i-1})
$$

- $P(X_1)$ 需要 $4-1=3$ 个参数；
- 对每个 $X_{i-1}$ 的 4 种取值，$P(X_i\mid X_{i-1})$ 各需 3 个参数，所以一个条件概率表需要 $4\times3=12$ 个参数；
- 共 99 个条件概率表。

总参数量为：

$$
3+99\times12=1191
$$

这说明图结构通过条件独立性，能够把极高维的联合分布压缩为若干局部条件分布。

### 链结构

链结构为：

$$
X\to Z\to Y
$$

其联合分布为：

$$
P(X,Y,Z)=P(X)P(Z\mid X)P(Y\mid Z)
$$

给定 $Z$：

$$
\begin{aligned}
P(X,Y\mid Z)
&=\frac{P(X,Y,Z)}{P(Z)}\\
&=\frac{P(X)P(Z\mid X)P(Y\mid Z)}{P(Z)}\\
&=P(X\mid Z)P(Y\mid Z)
\end{aligned}
$$

因此：

$$
X\perp Y\mid Z
$$

即在给定中间节点 $Z$ 后，链两端条件独立。

直观解释：$X$ 对 $Y$ 的影响必须经过 $Z$ 传递；固定 $Z$ 后，这条传递路径被阻断。

### 分连结构

分连结构，又称 fork：

$$
X\leftarrow Z\to Y
$$

$Z$ 是 $X$ 与 $Y$ 的共同原因。

联合分布为：

$$
P(X,Y,Z)=P(Z)P(X\mid Z)P(Y\mid Z)
$$

给定 $Z$：

$$
P(X,Y\mid Z)=P(X\mid Z)P(Y\mid Z)
$$

因此：

$$
X\perp Y\mid Z
$$

直观解释：未给定 $Z$ 时，$X$ 和 $Y$ 会因为共同原因而相关；固定共同原因后，这种相关性被消除。

### 汇连结构

汇连结构，又称 collider：

$$
X\to Z\leftarrow Y
$$

$Z$ 是 $X$ 和 $Y$ 的共同结果。

若图中只有这条路径，联合分布为：

$$
P(X,Y,Z)=P(X)P(Y)P(Z\mid X,Y)
$$

因此在没有给定 $Z$ 时：

$$
P(X,Y)=P(X)P(Y)
$$

即：

$$
X\perp Y
$$

但给定 $Z$ 后一般有：

$$
P(X,Y\mid Z)\ne P(X\mid Z)P(Y\mid Z)
$$

因此 $X$ 与 $Y$ 会变得相关。

同样地，若给定 $Z$ 的任一后代，汇连路径也会被打开。

这种现象称为**解释消除（explaining away）**：已经知道共同结果发生后，一个原因越可能，另一个原因往往越不需要。

:::WARNING
三种基本结构的规律：

| 结构 | 默认状态 | 给定中间节点后 |
|---|---|---|
| 链 $X\to Z\to Y$ | 路径通常打开 | 路径关闭 |
| 分连 $X\leftarrow Z\to Y$ | 路径通常打开 | 路径关闭 |
| 汇连 $X\to Z\leftarrow Y$ | 路径关闭 | 路径打开 |
:::

> **图片占位符：**插入 PPT 第 59、62、65 页的链、分连、汇连三种结构图，建议并排放置。

### D-分离

**D-分离（d-separation）**用于根据 DAG 判断任意两个节点在给定某些变量时是否条件独立。

#### 第一步：找路径

这里的路径先忽略箭头方向，只判断两个节点能否通过相邻边连接。

#### 第二步：判断路径是否被限定集阻塞

设限定集为 $Z$。一条路径被 $Z$ 阻塞，当且仅当路径中出现以下任一情况。

#### 情况 1：链或分连的中间节点被给定

路径中含有：

$$
A\to B\to C
$$

或：

$$
A\leftarrow B\to C
$$

且中间节点：

$$
B\in Z
$$

则该路径被阻塞。

#### 情况 2：汇连节点及其后代都没有被给定

路径中含有：

$$
A\to B\leftarrow C
$$

且：

$$
B\notin Z
$$

同时 $B$ 的任何后代也都不在 $Z$ 中，则该路径被阻塞。

换句话说：

- 对链与分连，**给定中间节点会关闭路径**；
- 对汇连，**不给定汇连节点及其后代时路径关闭，给定后路径打开**。

#### 第三步：检查所有路径

- 若 $Z$ 阻塞了 $X$ 与 $Y$ 之间的每一条路径，则 $X$ 与 $Y$ 在给定 $Z$ 时 D-分离：

  $$
  X\perp Y\mid Z
  $$

- 只要至少存在一条未被阻塞的路径，$X$ 与 $Y$ 就是 D-连接的，通常不能判定为条件独立。

:::TIP
D-分离做题流程：

1. 写出限定集；
2. 列出目标节点之间的所有无向路径；
3. 对每条路径逐个检查链、分连和汇连；
4. 所有路径都阻塞，才能判定条件独立。
:::

### D-分离例题

考虑 PPT 第 69 页的因果图，分析 $X$ 与 $T$ 的关系。

主要路径为：

$$
X\to Z\leftarrow Y\to S\to T
$$

且 $Z\to W$，所以 $W$ 是汇连节点 $Z$ 的后代。

#### 限定集为空集 $\varnothing$

路径中包含汇连结构：

$$
X\to Z\leftarrow Y
$$

$Z$ 及其后代均未被给定，因此该路径被 $Z$ 阻塞。

所以：

$$
X\perp T
$$

#### 限定集为 $\{W\}$

$W$ 是汇连节点 $Z$ 的后代。给定 $W$ 会打开 $Z$ 处的汇连路径。

路径上的其他中间节点没有阻断该路径，因此：

$$
X\not\perp T\mid W
$$

即给定 $W$ 后，$X$ 与 $T$ 相关。

#### 限定集为 $\{W,Y\}$

给定 $W$ 虽然打开了 $Z$ 处的汇连，但路径中还包含分连结构：

$$
Z\leftarrow Y\to S
$$

且 $Y$ 已被给定，因此整条路径被 $Y$ 阻塞。

所以：

$$
X\perp T\mid W,Y
$$

> **图片占位符：**插入 PPT 第 69 页的 D-分离例题图，标出路径 $X\to Z\leftarrow Y\to S\to T$ 以及 $Z$ 的后代 $W$。

---

## 本章总结

| 模块 | 解决的问题 | 核心工具 |
|---|---|---|
| 命题逻辑 | 整个陈述之间如何进行真假推理 | 真值表、逻辑等价、归结法、范式 |
| 谓词逻辑 | 如何表达个体、属性、关系和数量范围 | 谓词、量词、合式公式、量词推理 |
| 因果推理 | 如何表示数据生成机制并判断条件独立 | SCM、DAG、概率分解、D-分离 |

最重要的对应关系：

1. **蕴含消除**

   $$
   p\to q\equiv\neg p\lor q
   $$

2. **量词否定**

   $$
   \neg\forall x\,P(x)\equiv\exists x\,\neg P(x)
   $$

3. **DAG 概率分解**

   $$
   P(x_1,\ldots,x_d)
   =\prod_j P(x_j\mid x_{pa(j)})
   $$

4. **三种基本图结构**

   - 链：给定中间节点后独立；
   - 分连：给定共同原因后独立；
   - 汇连：默认独立，给定共同结果或其后代后相关。

5. **D-分离**

   > 两个节点之间的每一条路径都被限定集阻塞，才能推出条件独立。
