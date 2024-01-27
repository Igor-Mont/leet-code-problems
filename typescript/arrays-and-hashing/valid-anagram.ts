function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letterCounts = Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    letterCounts[s.charCodeAt(i) - 97] += 1;
    letterCounts[t.charCodeAt(i) - 97] -= 1;
  }

  return !letterCounts.some((count) => count !== 0);
}

console.log(isAnagram("bab", "bba"));
