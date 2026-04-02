export const navigationProducts = [
  { id: "analytics", name: "Kyle Analytics", desc: "Unified performance dashboards with AI anomaly detection" },
  { id: "growthlab", name: "GrowthLab", desc: "Budget planning, MMM, and geo experiments" },
  { id: "creative", name: "Creative Studio", desc: "Autonomous ad creation, testing, and optimisation" },
  { id: "projects", name: "Project Manager", desc: "Agency-grade workflows with briefs and approvals" },
  { id: "rise", name: "RISE", desc: "Executive and finance rollups for boardroom clarity" },
  { id: "circle", name: "Circle", desc: "Identity resolution and audience activation" },
  { id: "seo", name: "AI-SEO", desc: "Autonomous technical and content SEO at scale" },
];

export const products = [
  {
    id: "analytics",
    name: "Kyle Analytics",
    tagline: "Every signal. Every platform. One truth.",
    desc: "Unified performance dashboards with AI-powered anomaly detection",
    heroDesc:
      "Unified performance dashboards that pull from every ad platform, CRM, and data source. AI surfaces anomalies before they become problems, and tells you exactly what to do about them.",
    icon: "analytics",
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    gradientCSS: "linear-gradient(135deg,#3B82F6,#4F46E5)",
    stat: { value: "< 4 hrs", label: "Avg Anomaly Detection Time", desc: "vs industry average of 3-5 days" },
    features: [
      { name: "Cross-Platform Attribution", desc: "Deduplicated conversions across Meta, Google, TikTok, DV360, Amazon" },
      { name: "Real-Time ROAS & LTV", desc: "Live blended performance with margin-aware math" },
      { name: "AI Anomaly Detection", desc: "Flags drops and spikes before they escalate" },
      { name: "Automated Recommendations", desc: "Actionable next steps, not just insights" },
      { name: "Custom Alert Rules", desc: "Threshold-based plus ML-powered alerts to Slack and email" },
      { name: "Role-Based Views", desc: "CMO sees different defaults than a campaign manager" },
    ],
    personas: [
      {
        role: "CMO",
        desc: "Blended view across all channels. High-level health, budget pacing, and board-ready numbers at a glance.",
      },
      {
        role: "Performance Manager",
        desc: "Campaign-level drill-down. Flag anomalies fast and act on AI recommendations before spend leaks.",
      },
      { role: "Finance", desc: "Revenue plus ROAS with margin math. Finance-safe numbers that speak CFO language." },
    ],
    steps: ["Connect platforms", "Normalize and deduplicate", "Surface anomalies and recommendations"],
    metrics: ["30+ platforms connected", "<4hr anomaly detection", "100% data freshness daily"],
    featureList: ["Real-time ROAS and LTV tracking", "Cross-platform attribution", "Automated alerts and recommendations"],
    ctaAction: "start monitoring performance",
  },
  {
    id: "growthlab",
    name: "GrowthLab",
    tagline: "Turn signals into spend shifts, automatically.",
    desc: "Budget planning, MMM, and geo experiments that turn signals into spend shifts",
    heroDesc:
      "Budget planning, MMM and geo experiments, and AI playbooks that tell you where to move budget today, not next quarter. Causal, not correlational.",
    icon: "growth",
    iconBg: "#FDF4FF",
    iconColor: "#A21CAF",
    gradientCSS: "linear-gradient(135deg,#D946EF,#8B5CF6,#F59E0B)",
    stat: { value: "+10-22%", label: "Planned ROAS Lift", desc: "Optimization horizon: weekly; constraints-aware" },
    features: [
      { name: "MMM and Geo-x", desc: "Blend media mix modeling with geo-experiments for causal spend guidance" },
      { name: "Portfolio Planning", desc: "Channel and campaign budget allocation subject to guardrails and seasonality" },
      { name: "Creative Planner", desc: "Suggests briefs and creative variants; auto-tracks test outcomes" },
      { name: "Scenario Sandboxing", desc: "Simulate different targets, constraints, and risk tolerance levels" },
      { name: "Next-best Actions", desc: "Approved changes pushed directly to platforms via connectors" },
      { name: "Experiment Library", desc: "Templates for lift tests, hygiene checks, and holdout groups" },
    ],
    personas: [
      { role: "Growth Lead", desc: "Scenario planning with full confidence intervals. Test hypotheses before committing spend." },
      { role: "CMO", desc: "Strategic allocation across the portfolio. See trade-offs between channels in one view." },
      { role: "Media Buyer", desc: "Tactical execution. Get next-best actions with one-click platform push." },
    ],
    steps: ["Ingest spend and outcome signals", "Run MMM and geo calibration", "Surface next-best budget moves"],
    metrics: ["+10-22% ROAS lift", "Weekly optimization cycles", "6 platform connectors"],
    featureList: ["MMM and geo-experiments for causal spend guidance", "Scenario sandboxing with risk simulation", "Next-best actions pushed to platforms"],
    ctaAction: "optimize your budget",
  },
  {
    id: "creative",
    name: "Creative Studio",
    tagline: "From brief to live ad in minutes.",
    desc: "Autonomous ad creation, testing, and optimisation end to end",
    heroDesc:
      "AI generates, tests, and optimises your ad creative end to end. Competitive intelligence feeds into counter-creative strategy. You approve. Kyle executes.",
    icon: "creative",
    iconBg: "#FFF1F2",
    iconColor: "#F43F5E",
    gradientCSS: "linear-gradient(135deg,#EC4899,#F43F5E)",
    stat: { value: "10x faster", label: "Creative Iteration Speed", desc: "vs traditional briefing process" },
    features: [
      { name: "AI Brief Generator", desc: "Strategy-first briefs from goals and competitive signals" },
      { name: "Creative Variant Engine", desc: "Multiple angles, hooks, and formats per brief" },
      { name: "Visual Asset Generation", desc: "Background and text overlay with accurate copy" },
      { name: "Competitive Counter-Creative", desc: "Analyzes competitor ad libraries to inform differentiation" },
      { name: "Auto-Test Tracking", desc: "Champions, challengers, and fatigue scores tracked automatically" },
      { name: "Brand Asset Integration", desc: "Upload logos and products; AI maintains brand consistency" },
    ],
    personas: [
      { role: "Creative Director", desc: "Strategy-level briefs grounded in data. Brief from insight, not assumption." },
      { role: "Performance Marketer", desc: "Systematic creative testing. Know what's fatigued before it kills performance." },
      { role: "Brand Manager", desc: "Brand consistency at scale. Every variant reviewed against your brand guidelines." },
    ],
    steps: ["Analyze performance and competitors", "Generate briefs and variants", "Track outcomes and update model"],
    metrics: ["10x faster briefing", "100% text accuracy on visuals", "Auto-fatigue detection"],
    featureList: ["AI brief generation and variant creation", "Auto-tracks test outcomes vs champion", "Competitive creative intelligence"],
    ctaAction: "accelerate your creative",
  },
  {
    id: "projects",
    name: "Project Manager",
    tagline: "Agency workflows that actually work.",
    desc: "Agency-grade project workflows: briefs, tasks, approvals",
    heroDesc:
      "Briefs, tasks, approvals, and timelines, all connected to your campaign data. Not a standalone project tool. A marketing OS module that knows what's live and what's at risk.",
    icon: "projects",
    iconBg: "#F8FAFC",
    iconColor: "#64748B",
    gradientCSS: "linear-gradient(135deg,#475569,#1E293B)",
    stat: { value: "-60%", label: "Approval Cycle Time", desc: "vs email-based workflows" },
    features: [
      { name: "Campaign Brief Builder", desc: "Structured briefs linked to strategy and goals" },
      { name: "Multi-Stakeholder Approvals", desc: "Role-based approval flows with audit trail" },
      { name: "Task Assignment", desc: "Assign by role, track by campaign" },
      { name: "Timeline and Dependencies", desc: "Gantt-style view aware of platform go-live dates" },
      { name: "Integration with Kyle Modules", desc: "Brief approved and Creative Studio starts automatically" },
      { name: "Client-Ready Reporting", desc: "Filtered views for external stakeholders" },
    ],
    personas: [
      { role: "Account Manager", desc: "Client delivery without the chaos. Every brief, task, and approval in one place." },
      { role: "Creative Team", desc: "Clear briefs, clear deadlines. No more chasing context in Slack threads." },
      { role: "Client", desc: "Visibility without access overload. See approvals, status, and outputs only." },
    ],
    steps: ["Create brief", "Assign tasks and approvals", "Track progress and auto-connect to live campaign"],
    metrics: ["-60% approval cycles", "Full audit trail", "Native Kyle OS integration"],
    featureList: ["Campaign brief builder", "Multi-stakeholder approvals", "Integrated with all Kyle modules"],
    ctaAction: "streamline your workflows",
  },
  {
    id: "rise",
    name: "RISE",
    tagline: "Boardroom clarity. Built for finance.",
    desc: "Executive and finance rollups built for boardroom clarity",
    heroDesc:
      "Exec and finance rollups with ROAS/MER margin math, 13-week forecasts with confidence intervals, and board packs that generate themselves. Built for the C-suite and the CFO.",
    icon: "rise",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    gradientCSS: "linear-gradient(135deg,#7C3AED,#6366F1,#D946EF)",
    stat: { value: "13 weeks", label: "Forecast Horizon", desc: "Budget sensitivity and bands by channel" },
    features: [
      { name: "RevenueRoom", desc: "Finance-safe summaries with MER math and margin decomposition" },
      { name: "Top-Down and Bottom-Up Forecasting", desc: "With confidence intervals, not just point estimates" },
      { name: "Drill and Explain", desc: "Driver attribution by channel, campaign, and cohort with plain-English narrative" },
      { name: "Board Pack Generator", desc: "Auto-generate slide decks and executive commentary" },
      { name: "Targets and Alerts", desc: "Track to plan; notify on slippage before it's too late" },
      { name: "Exports", desc: "CSV, Google Sheets, PowerPoint slides" },
    ],
    personas: [
      { role: "CMO", desc: "Strategic narrative. Blended performance story that connects marketing to revenue." },
      { role: "CFO", desc: "Finance-safe numbers. MER math, margin decomposition, and forecast bands." },
      { role: "Board", desc: "High-level view. Auto-generated packs that arrive before you even ask." },
    ],
    steps: ["Pull blended revenue signals", "Apply margin math", "Generate forecast and board pack"],
    metrics: ["13-week horizon", "Interval forecasting", "Auto board pack generation"],
    featureList: ["ROAS/MER with margin math", "13-week forecasting with confidence intervals", "Auto-generates board packs and slides"],
    ctaAction: "get boardroom-ready",
  },
  {
    id: "circle",
    name: "Circle",
    tagline: "Know your audience. Really know them.",
    desc: "Audience graph and identity resolution for activation",
    heroDesc:
      "Audience graph and identity resolution that unifies users across devices and platforms. Build high-value cohorts, predict LTV, and activate them across paid and lifecycle channels all from one graph.",
    icon: "circle",
    iconBg: "#ECFEFF",
    iconColor: "#0891B2",
    gradientCSS: "linear-gradient(135deg,#06B6D4,#0EA5E9,#10B981)",
    stat: { value: "72%", label: "Identity Match Rate (median)", desc: "Deterministic and probabilistic identity" },
    features: [
      { name: "Identity Graph", desc: "Unifies users across devices, platforms, and data sources" },
      { name: "Cohort Builder", desc: "Create segments by value tier, propensity score, or behaviour" },
      { name: "LTV Prediction", desc: "ML-powered lifetime value modelling per cohort" },
      { name: "Activation Connectors", desc: "Push audiences directly to Meta, Google, TikTok, and ESPs" },
      { name: "Enrichment Partners", desc: "Third-party attribute and intent data layered in" },
      { name: "Privacy and Compliance", desc: "Consent management, RLS, PII minimisation built in" },
    ],
    personas: [
      { role: "Growth Marketer", desc: "Activation at scale. Build cohorts and push to every channel instantly." },
      { role: "Data Team", desc: "Graph management. Own the identity layer without a custom build." },
      { role: "Legal / Compliance", desc: "Governance built in. Consent management, RLS, and PII controls from day one." },
    ],
    steps: ["Ingest first-party data", "Resolve identities", "Build cohorts and activate across channels"],
    metrics: ["72% match rate", "Real-time feed updates", "GDPR/CCPA compliant"],
    featureList: ["72% median match rate", "Cohort builder by value, propensity, and behaviour", "Real-time feeds to paid and lifecycle channels"],
    ctaAction: "know your audience",
  },
  {
    id: "seo",
    name: "AI-SEO",
    tagline: "Rank faster. Scale content. Fix issues automatically.",
    desc: "Autonomous technical and content SEO at scale",
    heroDesc:
      "Autonomous technical and content SEO. AI audits your site, fixes what it can, identifies content gaps, and generates ranking content, all without a manual brief.",
    icon: "seo",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
    gradientCSS: "linear-gradient(135deg,#F43F5E,#F59E0B,#10B981)",
    stat: { value: "50x faster", label: "Content Production Speed", desc: "AI-generated vs manual briefing process" },
    features: [
      { name: "Technical Audit", desc: "Full crawl with prioritized issues and auto-fix suggestions" },
      { name: "Content Gap Analysis", desc: "Identifies ranking opportunities competitors are winning" },
      { name: "AI Content Generation", desc: "Brief, draft, publish in hours, not weeks" },
      { name: "Rank Tracking", desc: "Daily position tracking with trend alerts" },
      { name: "Internal Linking", desc: "AI maps and suggests optimal internal link structure" },
      { name: "Schema and Markup", desc: "Automated structured data implementation" },
    ],
    personas: [
      { role: "SEO Lead", desc: "Technical and content in one view. Audit, fix, and scale without switching tools." },
      { role: "Content Team", desc: "Production at speed. Brief, draft, publish without the back and forth." },
      { role: "CMO", desc: "Organic growth strategy. Track rankings, gaps, and competitive positioning." },
    ],
    steps: ["Audit site", "Identify gaps and opportunities", "Generate and optimize content and track rankings"],
    metrics: ["50x faster content", "100% automated technical fixes", "Daily rank monitoring"],
    featureList: ["Site audit and automated fixes", "Content gap analysis with AI generation", "Rank tracking and opportunity detection"],
    ctaAction: "scale your organic growth",
  },
];

export const proofStats = [
  { value: "$2.4B+", label: "Ad Spend Managed" },
  { value: "12,000+", label: "Campaigns Optimised" },
  { value: "+18% avg", label: "ROAS Lift" },
  { value: "500+", label: "Growth Teams" },
];

export const howItWorks = [
  {
    step: "1",
    title: "Unify Your Data",
    icon: "link",
    copy: "Connect all ad platforms, CRMs, and data sources. Kyle normalises and enriches everything automatically.",
  },
  {
    step: "2",
    title: "Predict and Plan",
    icon: "brain",
    copy: "AI identifies what's working, what's not, and what to do next with full confidence scores.",
  },
  {
    step: "3",
    title: "Execute and Learn",
    icon: "rocket",
    copy: "Approved changes push directly to platforms. Kyle tracks outcomes and continuously updates the model.",
  },
];

export const suiteMetrics = [
  { value: "+10-22%", label: "ROAS Lift", source: "via GrowthLab" },
  { value: "72%", label: "Identity Match Rate", source: "via Circle" },
  { value: "13 wks", label: "Forecast Horizon", source: "via RISE" },
  { value: "50x", label: "Content Speed", source: "via AI-SEO" },
];

export const testimonials = [
  {
    quote:
      "Kyle.ai finally made our reporting feel like one system instead of seven disconnected dashboards.",
    author: "Amina Patel",
    role: "VP Growth, Northstar Commerce",
  },
  {
    quote:
      "The fastest thing we noticed was how quickly the platform turns insight into an action we can actually approve.",
    author: "Marcus Lee",
    role: "Performance Director, Signalhaus",
  },
  {
    quote:
      "We replaced a stack of tools with a cleaner operating model and got better clarity for the team and leadership.",
    author: "Elena Ross",
    role: "CMO, Harborline Media",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    blurb: "Best for teams exploring the operating system.",
    features: ["1 workspace", "Core analytics", "Community support"],
  },
  {
    name: "Growth",
    price: "Custom",
    blurb: "For teams ready to connect workflows and automation.",
    features: ["Unlimited modules", "API access", "Priority support"],
  },
];

export const footerLinks = [
  { label: "Platform", href: "#suite" },
  { label: "Solutions", href: "#metrics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#footer" },
];
