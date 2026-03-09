#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import zlib from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function getGzipSize(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    return zlib.gzipSync(content).length;
  } catch {
    return 0;
  }
}

function analyzeBundle() {
  console.log("\n📦 Bundle Performance Analysis\n");
  console.log("━".repeat(50));

  if (!fs.existsSync(distDir)) {
    console.error("❌ dist/ folder not found. Run 'npm run build' first.\n");
    process.exit(1);
  }

  const files = fs.readdirSync(distDir, { recursive: true });
  const jsFiles = files.filter((f) => f.endsWith(".js"));
  const cssFiles = files.filter((f) => f.endsWith(".css"));

  let totalSize = 0;
  let totalGzip = 0;

  console.log("\n📄 JavaScript Files:");
  console.log("─".repeat(50));
  jsFiles.forEach((file) => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const gzipSize = getGzipSize(filePath);

    totalSize += stats.size;
    totalGzip += gzipSize;

    console.log(`  ${String(file).padEnd(40)} ${formatBytes(stats.size).padStart(12)} (gzipped: ${formatBytes(gzipSize).padStart(12)})`);
  });

  console.log("\n🎨 CSS Files:");
  console.log("─".repeat(50));
  cssFiles.forEach((file) => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const gzipSize = getGzipSize(filePath);

    totalSize += stats.size;
    totalGzip += gzipSize;

    console.log(`  ${String(file).padEnd(40)} ${formatBytes(stats.size).padStart(12)} (gzipped: ${formatBytes(gzipSize).padStart(12)})`);
  });

  console.log("\n" + "━".repeat(50));
  console.log(`\n✅ Total Bundle Size:     ${formatBytes(totalSize).padStart(20)}`);
  console.log(`✅ Total Gzipped Size:    ${formatBytes(totalGzip).padStart(20)}`);
  console.log(`\n📊 Compression Ratio:     ${((1 - totalGzip / totalSize) * 100).toFixed(1)}%`);
  console.log("\n💡 Tip: Run 'npm run perf' to see interactive bundle visualization\n");
}

analyzeBundle();
