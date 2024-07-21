function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let load = Array(bridge_length).fill(0);
    
    while(truck_weights.length) {
  
        load.shift();
        
        const sum = load.reduce((a,b) => a + b, 0);
     
        if(sum + truck_weights[0] <= weight) {
            load.push(truck_weights.shift());
        } else {
            load.push(0);
        }
        
        time++;
    }
    
    return time + bridge_length;
}