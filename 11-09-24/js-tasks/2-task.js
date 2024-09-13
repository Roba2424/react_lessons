function countMatchingCharacters(str1, str2) {
  const result = {};
  const charCount1 = {};
  const charCount2 = {};

  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (const char in charCount1) {
    if (char in charCount2) {
      result[char] = Math.min(charCount1[char], charCount2[char]);
    }
  }

  return result;
}


