import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-none bg-gray-900 backdrop-blur-md dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 md:h-24 gap-4">
        <p className="text-sm text-zinc-400 text-center md:text-left">
          © 2025 GamifyEd-AI. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/terms"
            className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
