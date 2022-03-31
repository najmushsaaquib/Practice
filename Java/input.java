import java.util.*;

public class input {

    public static void main(String[] args) {

        // ! Scanner is used to fetch input from the USER
        Scanner scn = new Scanner(System.in);

        // ! user scn.nextInt(); function to take input as a Integer
        // int n = scn.nextInt();

        // ! user scn.nextLine(); function to take input as a Integer
        String name = scn.nextLine();

        // ! but if You want to take input both as Int and String in a single go use
        // below lines
        System.out.println("Please enter your name here: ");
        String naam = scn.nextLine();
        System.out.println("Please enter your age here: ");
        int age = Integer.parseInt(scn.nextLine());

        System.out.println("Hi, " + naam + ". You look good today.");
        System.out.println("And boiiii, you are " + age + " years young");

    };

}
