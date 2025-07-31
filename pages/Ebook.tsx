"use client";

import { motion } from "framer-motion";

import SellsBackground from "../components/SellsBackground";
import React from "react";

const ebooks = [
  {
    id: 1,
    titulo: "Sabores do Brasil",
    descricao: "Explore receitas autêuticas de diversas regiões do país.",
    preco: "R$ 19,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 2,
    titulo: "Cozinha Saudável",
    descricao: "Receitas nutritivas e saborosas para o dia a dia.",
    preco: "R$ 24,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 3,
    titulo: "Doces Caseiros",
    descricao: "Delícias que aquecem o coração, com gostinho de infância.",
    preco: "R$ 14,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 4,
    titulo: "Panificação Artesanal",
    descricao: "Pães e massas com sabor de verdade.",
    preco: "R$ 29,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 5,
    titulo: "Culinária Vegana",
    descricao: "Sabores naturais e criativos sem ingredientes de origem animal.",
    preco: "R$ 22,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 6,
    titulo: "Massas Tradicionais",
    descricao: "Aprenda receitas clássicas da culinária italiana.",
    preco: "R$ 27,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 7,
    titulo: "Sopas & Caldos",
    descricao: "Receitas reconfortantes para todas as estações.",
    preco: "R$ 18,90",
    capa: "/ebooks.jpg",
  },
  {
    id: 8,
    titulo: "Café da Manhã Completo",
    descricao: "Comece seu dia com um cardápio variado e nutritivo.",
    preco: "R$ 21,90",
    capa: "/ebooks.jpg",
  },
];

export default function EbookPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 py-20 text-white">
      <SellsBackground className="absolute inset-0 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 font-bricolage mb-4">
          Biblioteca Completa de eBooks
        </h2>
        <p className="text-lg text-gray-300 font-open-sans">
          Explore todas as opções disponíveis para turbinar sua culinária!
        </p>
      </motion.div>

      
    </section>
  );
}