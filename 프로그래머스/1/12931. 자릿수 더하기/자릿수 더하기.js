function solution(n)
{
    return n.toString().split('').reduce((acc,cur)=>acc+Number(cur),0);
}