function lengthOfLongestSubstring(string) {
    let max = 0, currentString = "", i, char, position;
    let subStringArray = [];

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        position = currentString.indexOf(char);
        if (position !== -1) {
            // cut "dv" to "v" when you see another "d"
            currentString = currentString.substring(position + 1);
           
        }
        currentString += char;
        subStringArray.push(char);
        max = Math.max(max, currentString.length);
        
    }
    console.log(subStringArray);
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbbvwxyz"));