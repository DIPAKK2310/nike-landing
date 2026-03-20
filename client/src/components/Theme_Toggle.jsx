// import { motion } from "framer-motion";
// import { useTheme } from "../themeProvider/ThemeProvider";
// import { Sun, Moon } from "lucide-react"; // if you use lucide icons

// export default function Theme_Toggle({ className = "" }) {
//   const { theme, setTheme } = useTheme();
//   const isDark = theme === "dark";

//   const toggle = () => setTheme(isDark ? "light" : "dark");

//   return (
//     <button
//       onClick={toggle}
//       aria-label="Toggle Dark Mode"
//       className={`relative flex items-center w-14 h-8 rounded-full p-1
//                   bg-gray-300 dark:bg-gray-700 ${className}`}
//     >
//       {/* sliding knob */}
//       <motion.span
//         layout
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="w-6 h-6 rounded-full bg-white dark:bg-black grid place-items-center text-yellow-400 dark:text-blue-300"
//         style={{ x: isDark ? "calc(100% - 1.5rem)" : 0 }} /* 1.5rem = knob */
//       >
//         {isDark ? <Moon size={14} /> : <Sun size={14} />}
//       </motion.span>
//     </button>
//   );
// }
