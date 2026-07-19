public class Main {

    public static void main(String[] args) {


        Product[] products = {

            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Mobile", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(4, "Watch", "Accessories")

        };


        int linearResult =
        Search.linearSearch(products, "Mobile");


        if(linearResult != -1) {

            System.out.println("Linear Search Found:");
            products[linearResult].display();

        }

        else {

            System.out.println("Product not found");

        }



        int binaryResult =
        Search.binarySearch(products, "Watch");


        if(binaryResult != -1) {

            System.out.println("Binary Search Found:");
            products[binaryResult].display();

        }

        else {

            System.out.println("Product not found");

        }

    }

}