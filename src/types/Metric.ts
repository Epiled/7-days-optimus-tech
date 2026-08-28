import items from "@/data/metrics.json";

export type Metrics = typeof items;

export type Metric = (typeof items)[0];
