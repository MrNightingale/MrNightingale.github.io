/**
 * Created by 47826 on 09.10.2015.
 */
function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

fib(3);