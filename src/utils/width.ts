export function getWidth(pageNumber: number) {
 let width = "w-full";

    if (pageNumber == 2) {
        width = "w-6/12";
    }
    if (pageNumber == 3) {
        width = "w-4/12";
    }
    if (pageNumber == 4) {
        width = "w-3/12";
    }
    if (pageNumber == 5) {
        width = "w-2/12";
    }
     if (pageNumber > 5) {
        width = "w-1/12";
    }

    return width;
}