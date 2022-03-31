import java.util.*;

public class pal{

    public static void main(String[] args){

        int x = 121;

        String val = "";
        while (x>0){

            val += x%10;
            x = x/10;
        
        }

        System.out.println(val);
      


    }


}