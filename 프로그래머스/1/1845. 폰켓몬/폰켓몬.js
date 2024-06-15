function solution(nums) {
    const newSet = new Set(nums);
    const result = [...newSet].length;
    const count = nums.length / 2
    return result < count ? result : count;
}