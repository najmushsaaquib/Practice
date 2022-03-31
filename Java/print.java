public class print {
    
    public static void main(String[] args){

        int n = 19;

        for(int i=2; i<=n; i++){

            int count = 0;
            for(int p=2; p*p<i; p++){
              
                if(i%p==0){
                    count++;
                    break;
                }
            }
            if(count==0){
                System.out.println(i+" is a Prmie Number");
            }
        }


    }
}


