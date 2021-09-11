import { useEffect, useState } from "react";
import { MethodSignature } from "typescript";

export function useTime(): Date {
    const [time, setTime] = useState(new Date())

    var timeout = setTimeout(update, 0);

    function update() {
        const now = new Date();
        setTime(now);
        const millisUntilNextUpdate = 1000 - now.getMilliseconds() + 5;
        timeout = setTimeout(update, millisUntilNextUpdate);
    }


    // cleanup
    useEffect(() => {
        return () => clearTimeout(timeout);
    });

    return time;
}

export function getDigits(num: number): Array<number> {
    return [num / 10 >> 0, num % 10];
}