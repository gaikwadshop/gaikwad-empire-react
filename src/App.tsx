import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const spiceLevels = ["Lemon Herb", "Mild", "Medium", "Hot", "Extra Hot"];

export default function GaikwadEmpire() {
  const [selectedSpice, setSelectedSpice] = useState("Medium");

  return (
    <div className="relative bg-black text-white font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Smoke overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          style={{
            backgroundImage: "url('/src/assets/smoke.png')",
            backgroundSize: "cover",
            opacity: 0.15,
          }}
        />

        {/* Flame overlay*
