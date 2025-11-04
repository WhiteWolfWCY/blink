import { InitialNode } from "@/components/initial-node";
import { NodeType } from "@/generated/prisma";
import type { NodeTypes } from "@xyflow/react";

export const NODE_COMPONENTS = {
  [NodeType.INITIAL]: InitialNode,
} as const satisfies NodeTypes

export type RegisteredNodeType = keyof typeof NODE_COMPONENTS;