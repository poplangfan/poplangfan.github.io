/**
 * i18n — 中英文翻译数据与切换引擎
 * 约定：data-i18n="key" 替换 textContent，data-i18n-html="key" 替换 innerHTML
 */
const I18N = {
  zh: {
    // ── 可访问性 ──
    skip: '跳到内容',

    // ── 导航 ──
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.projects': '项目',
    'nav.patents': '专利',

    // ── 语言切换 ──
    'lang.zh': '中文',
    'lang.en': 'EN',

    // ── Hero / 头部 ──
    'hero.line1': '测试工具开发组 Leader（10人）',
    'hero.line2': '资深测试开发工程师',
    'hero.line3': 'AI 提效工程师',

    // ── Header actions ──
    'header.print': '导出为 PDF',

    // ── Section 标题（移动端 sticky header） ──
    'section.about': '关于',
    'section.experience': '经历',
    'section.projects': '项目',
    'section.patents': '专利',

    // ── About ──
    'about.p1': '我是一名测试开发工程师，专注于智驾软件测试工具链与多智能体系统的架构设计。我带领 10 人团队从零搭建了 SaturnV QA 平台，将测试自动化率从 0 提升至 85%+，并持续探索 AI Agent 技术在测试领域的落地应用。',
    'about.p2': '此前，我在阿维塔负责智驾软件集成测试与实车测试，覆盖 PNC / HMI / OS / 感知全链路。',
    'about.p3': '工作之余，我喜欢跑步，偶尔写技术博客记录思考。',

    // ── Impact 卡片 ──
    'impact.0.title': '工程落地',
    'impact.0.desc': '累计 <strong>16万+ 行</strong> Python 代码，开发 <strong>85 个</strong>任务模块 + <strong>21 个</strong>动作组件 + <strong>90+ 个</strong>自动化测试用例，覆盖 PNC / HMI / OS / 感知 / 稳定性全链路。',
    'impact.1.title': '业务价值',
    'impact.1.desc': '测试自动化率 <strong>0% → 85%+</strong>，日志分析从人工 2 小时缩短到自动化 <strong>5 分钟</strong>，月均拦截 <strong>70+</strong> 关键 Bug。',
    'impact.2.title': '技术文档与专利',
    'impact.2.desc': '4 项专利点挖掘 + 自动化交底书工具。累计输出技术文档 <strong>5 万+ 字</strong>，包括 MAS 架构设计、Agent 框架选型、联邦化架构等。',

    // ── Experience ──
    // exp.0: 地平线
    'exp.0.role': '软件测试工具开发组 Leader',
    'exp.0.company': '地平线',
    'exp.0.date': '2024.4 — 至今',
    'exp.0.desc.0': '带领 10 人团队，负责智驾软件测试工具链的架构设计与研发',
    'exp.0.desc.1': '从零搭建 SaturnV QA 平台，推动测试自动化率 0% → 85%+',
    'exp.0.desc.2': '设计 Task-Action 两层架构，支撑 85 个任务模块 + 21 个动作组件的编排复用',
    'exp.0.desc.3': '引入 AI Agent 技术到测试流程，设计 5 角色多智能体协同架构',

    // exp.1: 阿维塔
    'exp.1.role': '资深测试开发工程师',
    'exp.1.company': '阿维塔',
    'exp.1.date': '2023.4 — 2024.4',
    'exp.1.desc.0': '负责智驾软件集成测试与实车测试，覆盖 PNC / HMI / OS / 感知全链路',
    'exp.1.desc.1': '设计并落地自动化测试框架，开发 90+ 测试用例、38 套 conftest 配置',



    // ── Education ──
    'edu.heading': '教育背景',
    'edu.school': '中北大学',
    'edu.degree': '控制工程 本科',
    'edu.date': '2013 — 2017',
    'edu.desc.0': '校级奖学金二等奖 | 院级机器人大赛一等奖',

    // ── Projects ──
    // proj.0: SaturnV
    'proj.0.title': 'SaturnV QA — 智驾测试工具链平台',
    'proj.0.role': '架构设计 & 核心开发',
    'proj.0.scale': '50,000+ 行',
    'proj.0.desc': '地平线内部智驾软件测试统一工具链：测试执行、日志分析、报告生成、数据管理。替代零散脚本和手工操作，10 人团队协作开发。',
    'proj.0.highlight.0': '设计 Task-Action 两层架构，实现任务编排和组件复用，支撑 85 个任务模块',
    'proj.0.highlight.1': '集成 Elasticsearch 实现测试数据全文检索与聚合分析',
    'proj.0.highlight.2': '开发打包发布工具链，支持 STP/Flow 双流水线自动部署',
    'proj.0.highlight.3': '实现 SSH 跳板机通道，支持内网设备远程控制',
    'proj.0.impact.0.value': '0 → 85%+',
    'proj.0.impact.0.label': '测试自动化率',
    'proj.0.impact.1.value': '2h → 5min',
    'proj.0.impact.1.label': '日志分析效率',
    'proj.0.impact.2.value': '70+/月',
    'proj.0.impact.2.label': '关键 Bug 拦截',

    // proj.1: Agent 协同
    'proj.1.title': 'Agent 协同系统 — 多智能体协作 + 测试场景落地',
    'proj.1.role': '独立设计 & 开发',
    'proj.1.scale': '5,000+ 行',
    'proj.1.desc': '从底层协作协议到上层测试场景应用，完整的多智能体系统工程实践。',
    'proj.1.sub1.title': 'A2A Server — 多智能体协作服务器',
    'proj.1.sub1.desc': '标准化任务看板服务，解决异构 Agent 之间缺乏统一任务协作协议的问题，支持 Agent 间任务分发与交接。',
    'proj.1.sub1.highlight.0': '任务生命周期管理：ready → claimed → in_progress → done/blocked/cancelled',
    'proj.1.sub1.highlight.1': '基于 SQLite BEGIN IMMEDIATE 实现原子认领，零竞争冲突',
    'proj.1.sub1.highlight.2': 'Claim Lock + 心跳超时自动回收，防止 Agent 宕机任务泄漏',
    'proj.1.sub1.highlight.3': '全链路 TaskEvent 记录，支持耗时统计与问题回溯',
    'proj.1.sub2.title': '智驾测试多智能体协同方案',
    'proj.1.sub2.desc': '设计 5 角色 Agent 协作架构（测试架构师 / 算法专家 / 软件专家 / 硬件专家 / 复核者），基于 Hermes Agent 看板 + MCP 协议对接内部工具 + RAG 注入领域知识。输出 14,000 字技术方案。',

    // proj.2: 测试方法论
    'proj.2.title': '测试方法论 — 问题诊断与专利挖掘',
    'proj.2.role': '数据分析 & 方法论',
    'proj.2.sub1.title': '软件集成测试诊断与突破路径',
    'proj.2.sub1.desc': '分析软件集成测试与实车测试数据断层（8 vs 490），设计分层突破路径：回灌增加性能指标计算、实车部署监控探针、接入 BBIT 标准输出回归报告。输出 15,000 字诊断报告。',
    'proj.2.sub2.title': '4 项专利挖掘',
    'proj.2.sub2.desc.0': '测试日志多维度加权向量化与三级判定分析方法',
    'proj.2.sub2.desc.1': '基于解决思路优先级的检索结果优化方法',
    'proj.2.sub2.desc.2': '大规模日志智能核心错误提取与非对称上下文保留方法',
    'proj.2.sub2.desc.3': '多模式部署的日志分析系统架构',

    // ── Patents ──
    'patent.0.title': '测试日志多维度加权向量化与三级判定分析方法',
    'patent.0.desc': '多维度权重（用例名 0.25 + 错误信息 0.40 + 堆栈 0.15 + 元数据 0.20）+ 三级判定：已知 / 边界模糊 / 新问题',
    'patent.1.title': '基于解决思路优先级的检索结果优化方法',
    'patent.1.desc': '检索结果按解决方案可执行性重排序，提升一线测试人员问题解决效率',
    'patent.2.title': '大规模日志智能核心错误提取与非对称上下文保留方法',
    'patent.2.desc': '自动提取核心错误栈，保留非对称上下文（前短后长）降低存储成本',
    'patent.3.title': '多模式部署的日志分析系统架构',
    'patent.3.desc': '支持本地 / 云端 / 边缘三种部署模式',

    // ── Footer ──
    'footer.built': '由 poplangfan 设计并开发。基于纯 HTML / CSS / JavaScript 构建，部署于 GitHub Pages。',
    'footer.copy': 'poplangfan'
  },

  // ═══════════════════════════════════════════
  // English
  // ═══════════════════════════════════════════
  en: {
    'skip': 'Skip to Content',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.patents': 'Patents',

    'lang.zh': '中文',
    'lang.en': 'EN',

    'hero.line1': 'Test Toolchain Lead (10 ppl)',
    'hero.line2': 'Senior Test Development Engineer',
    'hero.line3': 'AI Efficiency Engineer',

    'header.print': 'Export PDF',

    'section.about': 'About',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.patents': 'Patents',

    'about.p1': 'I\'m a test development engineer specializing in autonomous driving test toolchains and multi-agent system architecture. I lead a 10-person team that built the SaturnV QA platform from scratch, driving test automation from 0 to 85%+, while continuously exploring AI Agent applications in testing.',
    'about.p2': 'Previously at AVATR, I was responsible for autonomous driving software integration and vehicle testing across the full PNC / HMI / OS / perception stack.',
    'about.p3': 'In my spare time, I enjoy running and occasionally writing about tech.',

    'impact.0.title': 'Engineering',
    'impact.0.desc': 'Over <strong>160,000 lines</strong> of Python code, <strong>85</strong> task modules + <strong>21</strong> action components + <strong>90+</strong> automated test cases across PNC / HMI / OS / perception / stability.',
    'impact.1.title': 'Business Impact',
    'impact.1.desc': 'Test automation <strong>0% → 85%+</strong>, log analysis reduced from 2 hours to <strong>5 minutes</strong>, averaging <strong>70+</strong> critical bugs caught per month.',
    'impact.2.title': 'Docs & Patents',
    'impact.2.desc': '4 patent filings + automated disclosure tools. Over <strong>50,000 words</strong> of technical documentation covering MAS architecture, Agent framework evaluation, and federated architectures.',

    // exp.0: Horizon
    'exp.0.role': 'Software Test Toolchain Lead',
    'exp.0.company': 'Horizon Robotics',
    'exp.0.date': 'Apr 2024 — Present',
    'exp.0.desc.0': 'Led a 10-person team in architecting and building the autonomous driving test toolchain',
    'exp.0.desc.1': 'Built SaturnV QA platform from scratch, driving test automation 0% → 85%+',
    'exp.0.desc.2': 'Designed Task-Action two-tier architecture supporting 85 task modules + 21 reusable action components',
    'exp.0.desc.3': 'Introduced AI Agent technology into testing workflows with a 5-role multi-agent collaborative architecture',

    // exp.1: AVATR
    'exp.1.role': 'Senior Test Development Engineer',
    'exp.1.company': 'AVATR',
    'exp.1.date': 'Apr 2023 — Apr 2024',
    'exp.1.desc.0': 'Responsible for autonomous driving software integration and vehicle testing across PNC / HMI / OS / perception stack',
    'exp.1.desc.1': 'Designed and implemented automation test framework with 90+ test cases and 38 conftest configurations',



    // Education
    'edu.heading': 'Education',
    'edu.school': 'North University of China',
    'edu.degree': 'B.Eng. Control Engineering',
    'edu.date': '2013 — 2017',
    'edu.desc.0': 'Second-class scholarship | 1st Place, University Robotics Competition',

    // proj.0: SaturnV
    'proj.0.title': 'SaturnV QA — Autonomous Driving Test Platform',
    'proj.0.role': 'Architecture & Core Development',
    'proj.0.scale': '50,000+ LOC',
    'proj.0.desc': 'Unified test toolchain for Horizon\'s autonomous driving software: test execution, log analysis, report generation, and data management. Replaces fragmented scripts and manual workflows. Built by a 10-person team.',
    'proj.0.highlight.0': 'Designed Task-Action two-tier architecture enabling task orchestration and component reuse across 85 modules',
    'proj.0.highlight.1': 'Integrated Elasticsearch for full-text search and aggregated analytics on test data',
    'proj.0.highlight.2': 'Built packaging and release toolchain supporting dual-pipeline (STP/Flow) auto-deployment',
    'proj.0.highlight.3': 'Implemented SSH jump-host tunneling for remote control of intranet devices',
    'proj.0.impact.0.value': '0 → 85%+',
    'proj.0.impact.0.label': 'Automation Rate',
    'proj.0.impact.1.value': '2h → 5min',
    'proj.0.impact.1.label': 'Log Analysis',
    'proj.0.impact.2.value': '70+/month',
    'proj.0.impact.2.label': 'Bugs Caught',

    // proj.1: Agent
    'proj.1.title': 'Agent Collaboration System — Multi-Agent + Testing',
    'proj.1.role': 'Solo Design & Development',
    'proj.1.scale': '5,000+ LOC',
    'proj.1.desc': 'End-to-end multi-agent systems engineering: from low-level collaboration protocols to test-scenario applications.',
    'proj.1.sub1.title': 'A2A Server — Multi-Agent Collaboration Server',
    'proj.1.sub1.desc': 'Standardized task-board service solving the lack of unified collaboration protocols across heterogeneous agents, enabling task dispatch and handoff between agents.',
    'proj.1.sub1.highlight.0': 'Task lifecycle: ready → claimed → in_progress → done/blocked/cancelled',
    'proj.1.sub1.highlight.1': 'Atomic claim via SQLite BEGIN IMMEDIATE with zero race-condition conflicts',
    'proj.1.sub1.highlight.2': 'Claim lock + heartbeat timeout auto-reclaim to prevent task leaks from agent crashes',
    'proj.1.sub1.highlight.3': 'Full-chain TaskEvent logging for latency analysis and debugging',
    'proj.1.sub2.title': 'Multi-Agent Collaboration for Autonomous Driving Testing',
    'proj.1.sub2.desc': 'Designed a 5-role Agent collaboration architecture (Test Architect / Algorithm Expert / Software Expert / Hardware Expert / Reviewer), built on Hermes Agent board + MCP protocol + RAG domain knowledge. Delivered a 14,000-word technical proposal.',

    // proj.2: Methodology
    'proj.2.title': 'Test Methodology — Diagnostics & Patent Mining',
    'proj.2.role': 'Data Analysis & Methodology',
    'proj.2.sub1.title': 'Software Integration Testing Diagnosis & Breakthrough Path',
    'proj.2.sub1.desc': 'Analyzed the data gap between software integration and vehicle testing (8 vs 490), designed a tiered breakthrough path: replay-based performance metrics, vehicle-deployed monitoring probes, BBIT-standard regression reports. Delivered a 15,000-word diagnostic report.',
    'proj.2.sub2.title': '4 Patent Filings',
    'proj.2.sub2.desc.0': 'Multi-dimensional weighted vectorization and three-tier judgment for test log analysis',
    'proj.2.sub2.desc.1': 'Solution-priority-based retrieval result optimization method',
    'proj.2.sub2.desc.2': 'Intelligent core error extraction with asymmetric context retention for large-scale logs',
    'proj.2.sub2.desc.3': 'Multi-mode deployment architecture for log analysis systems',

    // Patents
    'patent.0.title': 'Multi-dimensional Weighted Vectorization and Three-tier Judgment for Test Log Analysis',
    'patent.0.desc': 'Multi-dimensional weights (case name 0.25 + error info 0.40 + stack trace 0.15 + metadata 0.20) + three-tier classification: known / ambiguous / new issue',
    'patent.1.title': 'Solution-Priority-Based Retrieval Result Optimization',
    'patent.1.desc': 'Re-rank search results by solution actionability to improve resolution efficiency for front-line testers',
    'patent.2.title': 'Intelligent Core Error Extraction with Asymmetric Context Retention for Large-Scale Logs',
    'patent.2.desc': 'Automatically extract core error stacks with asymmetric context (short preamble, long tail) to reduce storage costs',
    'patent.3.title': 'Multi-Mode Deployment Architecture for Log Analysis Systems',
    'patent.3.desc': 'Supports local / cloud / edge deployment modes',

    // Footer
    'footer.built': 'Designed and built by poplangfan. Built with plain HTML / CSS / JavaScript, deployed on GitHub Pages.',
    'footer.copy': 'poplangfan'
  }
};

// ── Engine ──

function getLang() {
  const stored = localStorage.getItem('lang');
  if (stored === 'zh' || stored === 'en') return stored;
  const browser = navigator.language || '';
  return browser.startsWith('zh') ? 'zh' : 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  updateLangToggle(lang);
  updateHtmlLang(lang);
  updatePageTitle(lang);
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function updateHtmlLang(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function updatePageTitle(lang) {
  document.title = lang === 'zh'
    ? 'poplangfan — 测试工具开发组 Leader · AI 提效工程师'
    : 'poplangfan — Test Toolchain Lead & AI Efficiency Engineer';
}

function applyTranslations(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  // data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // data-i18n-html → innerHTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // data-i18n-title → title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Update the lang toggle button text
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const l = btn.dataset.lang;
    if (l === 'zh') btn.textContent = dict['lang.zh'] || '中文';
    if (l === 'en') btn.textContent = dict['lang.en'] || 'EN';
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);
  updateLangToggle(lang);
  updateHtmlLang(lang);
  updatePageTitle(lang);
});
