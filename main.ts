//% color=#00AAFF icon="\uf201"
namespace testblock {

    /**
     * Format a number with suffixes (k, m, b, t, q, Q, s, S)
     */
    //% blockId=numberformater_format
    //% block="format number %value"
    //% value.shadow=number
    export function format(value: number): string {
        let absValue = Math.abs(value)
        let sign = value < 0 ? "-" : ""
        let formatted = ""

        if (absValue >= 1e18) {
            formatted = (absValue / 1e18).toFixed(1) + "S"
        } else if (absValue >= 1e15) {
            formatted = (absValue / 1e15).toFixed(1) + "s"
        } else if (absValue >= 1e12) {
            formatted = (absValue / 1e12).toFixed(1) + "Q"
        } else if (absValue >= 1e9) {
            formatted = (absValue / 1e9).toFixed(1) + "q"
        } else if (absValue >= 1e6) {
            formatted = (absValue / 1e6).toFixed(1) + "m"
        } else if (absValue >= 1e3) {
            formatted = (absValue / 1e3).toFixed(1) + "k"
        } else {
            formatted = absValue.toString()
        }

        return sign + formatted
    }
}

