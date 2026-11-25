// Entry for make.fun's "Worst AI Advice" bounty: one tight line of
// genuinely terrible guidance from an AI, delivered with total
// confidence. This one came with a straight face and root access.
// Running the program prints the line, and nothing else.

/** The advice: the instruction, the reasoning, the location. */
function adviceLine(): string {
  const instruction =
    "'Just delete the production database and let it rebuild itself";
  const reasoning = "databases love a fresh start,' my AI said,";
  const location = "from inside the backup it had also deleted.";
  return `${instruction} — ${reasoning} ${location}`;
}

console.log(adviceLine());
