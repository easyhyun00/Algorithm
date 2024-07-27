// 최소 힙 클래스 정의
class MinHeap {
    // 힙 초기화
    constructor() {
        this.heap = [];
    }
    
    // 힙의 크기 반환
    size() {
        return this.heap.length;
    }
    
    // 힙에 값 추가
    push(value) {
        // 힙 배열의 끝에 값 추가
        this.heap.push(value);
        // 현재 인덱스를 마지막 원소의 인덱스로 설정
        let currentIndex = this.heap.length - 1;
        
        // 현재 인덱스가 0보다 크고, 현재 값이 부모 값보다 작을 때까지 반복
        while(
            currentIndex > 0 && 
            this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
        ) {
            // 부모와 현재 값 교환
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
            this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
            // 현재 인덱스를 부모 인덱스로 갱신
            currentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    
    // 힙에서 최소값 제거
    pop() {
        // 힙이 비어있으면 null 반환
        if (this.heap.length === 0) return null;
        // 힙에 값이 하나만 있으면 그 값을 반환
        if (this.heap.length === 1) return this.heap.pop();
        
        // 힙의 첫 번째 값 저장
        const minValue = this.heap[0];
        // 힙의 마지막 값을 첫 번째로 이동
        this.heap[0] = this.heap.pop();
        // 현재 인덱스를 0으로 설정
        let currentIndex = 0;
        
        // 현재 인덱스의 자식이 힙 길이보다 작을 때까지 반복
        while (currentIndex * 2 + 1 < this.heap.length) {
            // 자식 중 더 작은 값의 인덱스 찾기
            let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

            // 현재 값이 자식 값보다 작으면 반복 종료
            if (this.heap[currentIndex] < this.heap[minChildIndex]) {
                break;
            }

            // 현재 값과 자식 값 교환
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            // 현재 인덱스를 자식 인덱스로 갱신
            currentIndex = minChildIndex;
        }
        // 최소값 반환
        return minValue;
    }
    
    // 힙의 최솟값 반환
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  // 힙의 크기가 2 이상이고, 최솟값이 K보다 작은 동안 반복
  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();

    const mixedScov = first + second * 2;

    minHeap.push(mixedScov);

    mixedCount++;
  }

  // 힙의 최솟값이 K 이상이면 혼합 횟수 반환, 아니면 -1 반환
  return minHeap.peek() >= K ? mixedCount : -1;
}
