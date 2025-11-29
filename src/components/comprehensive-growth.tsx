"use client";

import { motion } from "framer-motion";
import {
    Check,
    Map,
    Users,
    ShieldAlert,
    Settings,
    ToggleRight,
    ToggleLeft,
    ListTodo,
    TrendingUp,
    Clock
} from "lucide-react";

const growthFeatures = [
    {
        title: "Creator Consulting & Strategy",
        type: "consulting",
        content: [
            "You’re not just a model — you’re a business.",
            "We start by auditing your current brand, pricing, and content strategy. We look at what’s working, what’s wasting your time, and where you’re leaving money on the table.",
            "Then, we build a custom roadmap.",
            "We tell you exactly what content to film, how to price your PPVs, and how to structure your page for maximum retention.",
            "No guessing. Just a clear, step-by-step plan to hit your revenue goals.",
        ],
    },
    {
        title: "Strategic Growth & Traffic",
        type: "growth",
        content: [
            "Traffic is the lifeblood of your page.",
            "But random viral videos aren’t enough. You need high-quality traffic that actually converts into paying subscribers.",
            "We use a multi-platform approach (TikTok, Instagram, Reddit, Dating Apps) to funnel qualified leads straight to your page.",
            "We don’t just chase views.",
            "We chase buyers.",
            "Our team handles the strategy, the posting schedules, and the optimization so you can focus on creating content, not fighting algorithms.",
        ],
    },
    {
        title: "In-House Chatters (24/7 Coverage)",
        type: "chatters",
        content: [
            "Your fans are online 24/7.",
            "You shouldn’t have to be.",
            "Our elite chatting team covers your DMs round-the-clock, ensuring no message goes unanswered and no sale is missed.",
            "These aren’t random outsourcers using Google Translate.",
            "These are highly trained sales professionals who know your persona inside and out.",
            "They build real relationships, upsell naturally, and keep your fans addicted to the conversation.",
            "You wake up to money, not missed opportunities.",
        ],
    },
    {
        title: "Boundary Control & Compliance",
        type: "compliance",
        content: [
            "Your comfort comes first.",
            "Before we start, we set clear boundaries.",
            "No nudes? No face? No specific fetishes? No problem.",
            "We strictly adhere to your rules.",
            "Our team is trained to maximize earnings within your comfort zone, never pushing you to do anything you don’t want to do.",
            "We also handle all platform compliance, ensuring your account stays safe and never gets flagged or banned.",
            "Peace of mind is part of the package.",
        ],
    },
];

function StrategyBoard() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <ListTodo className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">Brand Strategy</div>
            </div>

            <div className="space-y-3">
                {["Brand Audit", "Niche Analysis", "Pricing Strategy", "Content Plan"].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 shadow-inner shadow-black/5"
                    >
                        <div className="strategy-check flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500 dark:bg-green-500/20 dark:text-green-400">
                            <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function GrowthRoadmap() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/5" />

            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-accent/10">
                    <Map className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">Growth Roadmap</div>
            </div>

            <div className="relative h-32">
                {/* Path Line */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M 20,80 C 80,80 100,20 180,20 C 260,20 280,60 340,60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-300 dark:text-white/10"
                    />
                    <motion.path
                        d="M 20,80 C 80,80 100,20 180,20 C 260,20 280,60 340,60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-accent"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>

                {/* Milestones */}
                {[
                    { label: "Start", x: "0%", y: "80%" },
                    { label: "10k", x: "50%", y: "20%" },
                    { label: "100k", x: "100%", y: "60%" }
                ].map((point, i) => (
                    <motion.div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: point.x, top: point.y }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.5) }}
                    >
                        <div className="relative">
                            <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-black" />
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap">
                                {point.label}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function CoverageTimeline() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">24/7 Coverage</div>
            </div>

            <div className="space-y-4">
                {[
                    { shift: "Morning Shift", time: "06:00 - 14:00", active: true },
                    { shift: "Day Shift", time: "14:00 - 22:00", active: true },
                    { shift: "Night Shift", time: "22:00 - 06:00", active: true },
                ].map((shift, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/80 dark:bg-white/5 shadow-inner shadow-black/5">
                        <div>
                            <div className="text-sm font-medium">{shift.shift}</div>
                            <div className="text-xs text-muted-foreground">{shift.time}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="coverage-status text-xs font-semibold text-green-500 dark:text-green-400">Active</span>
                            <div className="coverage-status-dot relative w-2 h-2">
                                <div className="coverage-status-ping absolute inset-0 rounded-full bg-green-500/40 animate-ping dark:bg-green-400/40" />
                                <div className="coverage-status-core relative w-full h-full rounded-full bg-green-500 dark:bg-green-400" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CompliancePanel() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <ShieldAlert className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">Boundary Settings</div>
            </div>

            <div className="space-y-4">
                {[
                    { label: "No Nudes", enabled: true },
                    { label: "No Face", enabled: true },
                    { label: "Geo-Blocking", enabled: true },
                ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-200 dark:bg-white/5">
                        <span className="text-sm font-medium">{setting.label}</span>
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent"
                        >
                            <ToggleRight className="w-8 h-8" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ComprehensiveGrowth() {
    return (
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-6xl space-y-32">
                {growthFeatures.map((feature, index) => {
                    return (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col gap-16 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1">
                                <div className="relative aspect-square w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-2xl opacity-50" />

                                    {feature.type === "consulting" && <StrategyBoard />}
                                    {feature.type === "growth" && <GrowthRoadmap />}
                                    {feature.type === "chatters" && <CoverageTimeline />}
                                    {feature.type === "compliance" && <CompliancePanel />}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-8 text-center lg:text-left">
                                <div className="flex flex-col items-center space-y-4 lg:items-start">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                                        Growth Pillar {index + 1}
                                    </div>
                                    <motion.h3
                                        className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl"
                                        animate={{
                                            textShadow: [
                                                "0 0 0px rgba(236,72,153,0)",
                                                "0 0 15px rgba(236,72,153,0.5)",
                                                "0 0 0px rgba(236,72,153,0)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {feature.title}
                                    </motion.h3>
                                </div>
                                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                    {feature.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
