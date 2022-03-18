import java.util.*;

public class prime {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);

        int tc = scn.nextInt();

        for (int i = 0; i < tc; i++) {

            int n = scn.nextInt();

            int count = 0;
            for (int div = 2; div * div < n; div++) {

                if (n % 2 == 0) {
                    count++;
                    break;
                }

            }
            if (count == 0) {
                System.out.println("prime");
            } else {
                System.out.println("not prime");
            }

        }

    }
}
