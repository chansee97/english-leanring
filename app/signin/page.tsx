"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion";
import { Operations, OperationType } from "./components";
export default function Login() {
  
  const [operation, setOperation] = useState<OperationType>('SignIn');

  const Component = Operations[operation];

  return (
    <div className="flex-1 flex flex-col items-center w-full justify-center space-y-3 relative">
      <a href="/">
        <Button className="absolute top-4 left-4" variant="ghost">
          <span className="icon-[tabler--chevron-left] mr-1"></span>
          返回
        </Button>
      </a>
      <AnimatePresence mode="wait">
        <motion.div
          key={operation}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Component onChange={(type) => setOperation(type)} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}