import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int N_len = (Integer.toString(N)).length();

        int result = decomposition(N, N_len);

        System.out.print(result);
    }

    public static int decomposition(int N, int length) {
        for (int i = (N - (length*9)); i < N; i++) {
            int sum = 0;
            int num = i;
            while (num!=0) {
                sum += num%10;
                num /= 10;
            }
            if ((sum + i) == N) return i;
        }
        return 0;
    }
}
