import { motion, type MotionProps } from "framer-motion";
import React from "react";

type AnimationPreset =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideInUp"
  | "staggerItem"
  | "tabContent"
  | "tabUnderline";

interface MotionBoxProps
  extends Omit<MotionProps, "initial" | "animate" | "transition"> {
  children: React.ReactNode;
  sx?: React.CSSProperties;
  onClick?: () => void;
  preset?: AnimationPreset;
  delay?: number;
  index?: number;
  hover?: boolean;
}

const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  staggerItem: {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.4, delay: 0, ease: "easeOut" },
  },
  tabContent: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  tabUnderline: {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: 0, opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const MotionBox: React.FC<MotionBoxProps> = ({
  children,
  sx,
  onClick,
  preset = "fadeInUp",
  delay,
  index,
  hover = false,
  ...motionProps
}) => {
  const getAnimationProps = () => {
    if (preset) {
      const presetConfig = animationPresets[preset];

      if (preset === "staggerItem" && index !== undefined) {
        return {
          ...presetConfig,
          transition: {
            ...presetConfig.transition,
            delay: index * 0.05 + (delay || 0),
          },
        };
      }

      if (delay !== undefined) {
        return {
          ...presetConfig,
          transition: {
            ...presetConfig.transition,
            delay,
          },
        };
      }

      return presetConfig;
    }

    return {};
  };

  const hoverProps = hover
    ? {
        whileHover: {
          y: -4,
          scale: 1.05,
          transition: { duration: 0.2 },
        },
      }
    : {};

  return (
    <motion.div
      {...motionProps}
      {...getAnimationProps()}
      {...hoverProps}
      onClick={onClick}
      style={{ ...sx }}
    >
      {children}
    </motion.div>
  );
};
